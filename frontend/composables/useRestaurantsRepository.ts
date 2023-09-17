export const useRestaurantsRepository = () => {
  const httpGateway = useHttpGateway();

  const restaurantsPm = useState("restaurantsPm", () => {
    return {
      data: [],
    };
  });

  async function getRestaurants() {
    const restaurantsDto = await httpGateway.get("/api/restaurants", {});
    console.log(restaurantsDto.data.value.data);

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

  return {
    getRestaurants,
    restaurantsPm,
  };
};
