export const useRestaurantsPresenter = () => {
  const restaurantsRepository = useRestaurantsRepository();

  const viewModel = {
    restaurants: [],
  };

  async function loadRestaurants() {
    const restaurantsPm = await restaurantsRepository.getRestaurants();
  }

  const getViewModel = () => {
    viewModel.restaurants = restaurantsRepository.restaurantsPm.value.data.map(
      (r) => {
        return {
          id: r.id,
          name: r.name,
          description: r.description,
        };
      }
    );

    return viewModel;
  };

  return {
    loadRestaurants,
    getViewModel,
  };
};
