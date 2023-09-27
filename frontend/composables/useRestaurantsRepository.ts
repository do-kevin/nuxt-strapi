export const useRestaurantsRepository = () => {
  const httpGateway = useHttpGateway();

  const restaurantsPm = useState("restaurantsPm", () => {
    return {
      data: [],
    };
  });

  const tablePm = useState("tablePm", () => {
    return {
      data: [],
    };
  });

  async function getRestaurants() {
    const restaurantsDto = await httpGateway.get("/api/restaurants", {});
    console.log("TEST: ", restaurantsDto.data);

    const programmersModel = restaurantsDto.data.value.data.map(
      (restaurant) => {
        return {
          id: restaurant.id,
          name: restaurant.attributes.Name,
          descriptionMarkdown: restaurant.attributes.Description,
          createdAt: restaurant.attributes.createdAt,
          publishedAt: restaurant.attributes.publishedAt,
          updatedAt: restaurant.attributes.updatedAt,
        };
      }
    );

    restaurantsPm.value = {
      data: programmersModel,
    };
  }

  const test = async () => {
    const { data } = await httpGateway.test(
      "https://texpress-api-arfum7vf6a-wl.a.run.app/api/taxable_items",
      {}
    );

    tablePm.value = {
      data: data.value,
    };
  };

  return {
    getRestaurants,
    restaurantsPm,
    test,
    tablePm,
  };
};
