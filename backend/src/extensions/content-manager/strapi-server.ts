import { getService } from "@strapi/plugin-content-manager/server/utils";
import * as populateBuilder from "@strapi/plugin-content-manager/server/services/populate-builder.js";

export default (plugin) => {
  const find = async (ctx) => {
    const { userAbility } = ctx.state;

    const { model } = ctx.params;

    const { query } = ctx.request;

    const entityManager = getService("entity-manager");

    const permissionChecker = getService("permission-checker").create({
      userAbility,
      model,
    });

    if (permissionChecker.cannot.read()) {
      return ctx.forbidden();
    }

    const permissionQuery = await permissionChecker.sanitizedQuery.read(query);

    const populate = await getService<typeof populateBuilder>("populate")(model)
      .populateDeep(1)
      .countRelations({ toOne: false, toMany: true })
      .build();

    const { results, pagination } = await entityManager.findPage(
      { ...permissionQuery, populate },
      model
    );

    const sanitizedResults = await Promise.all(
      results
        .map((result) => {
          if (
            ctx.state.user.roles.some((role) => role.name === "Super Admin")
          ) {
            return permissionChecker.sanitizeOutput(result);
          }

          if (
            ctx.state.user.roles.some(
              (role) =>
                role.name === "Author" &&
                result.createdBy.id === ctx.state.user.id
            )
          ) {
            return permissionChecker.sanitizeOutput(result);
          }

          return null;
        })
        .filter((sanitizedResult) => sanitizedResult !== null)
    );

    ctx.body = {
      results: sanitizedResults,
      pagination,
    };
  };

  plugin.controllers["collection-types"].find = find;

  return plugin;
};
