import { expect, beforeEach, vi, describe, beforeAll } from "vitest";
import { it } from "vitest";
import { useRestaurantsPresenter } from "~/composables/useRestaurantsPresenter";
import { useHttpGateway } from "~/composables/useHttpGateway";
import { useRestaurantsRepository } from "~/composables/useRestaurantsRepository";
import { getRestaurantsStub } from "../stubs/restaurants";

describe("See list of restaurants", () => {
  let presenter = null;
  let repository = null;
  let httpGateway = null;

  beforeAll(() => {
    presenter = useRestaurantsPresenter();
    repository = useRestaurantsRepository();
    // httpGateway = useHttpGateway();

    // httpGateway.get = vi.fn().mockImplementation((path) => {
    //   console.log("path: ", path);

    //   return Promise.resolve(getRestaurantsStub());
    // });

    // const mockGet = vi.fn().mockResolvedValue(getRestaurantsStub());

    // vi.mocked(useHttpGateway).mockReturnValue({
    //   get: async () => ({
    //     ...getRestaurantsStub(),
    //   }),
    // });

    vi.mock("~/composables/useHttpGateway", async () => {
      const actual = (await vi.importActual(
        "~/composables/useHttpGateway"
      )) as { useHttpGateway: () => {} };

      console.log("actual: ", actual!.useHttpGateway());

      return {
        ...actual,
        useHttpGateway() {
          return {
            get: (props: unknown) => {
              console.log("props: ", props);

              return Promise.resolve(getRestaurantsStub());
            },
          };
        },
      };
    });
  });

  it("GIVEN: I just visited the home page", async () => {
    const viewModel = await presenter!.getViewModel();

    console.log("viewMOdel: ", viewModel);

    expect(viewModel.restaurants.length).toEqual(0);
  });

  // it("WHEN: the home page is loaded", async () => {
  //   await presenter!.loadRestaurants();

  //   const viewModel = await presenter!.getViewModel();

  //   expect(viewModel.restaurants[0].name).toBe("Weird Restaurant");
  // });
});
