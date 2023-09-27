import remarkHtml from "remark-html";
import { remark } from "remark";

export const useRestaurantsPresenter = () => {
  const restaurantsRepository = useRestaurantsRepository();

  const viewModel = {
    restaurants: [],
    data: [],
  };

  async function loadRestaurants() {
    const restaurantsPm = await restaurantsRepository.getRestaurants();
  }

  async function transformMarkdownToHtml(markdown: string | null) {
    let html = null;

    if (!markdown) {
      return null;
    }

    await remark()
      .use(remarkHtml, {
        sanitize: true,
      })
      .process(markdown, function (err, file) {
        if (err) {
          throw err;
        }

        html = String(file);
      });

    return html;
  }

  async function getViewModel() {
    viewModel.restaurants = [];

    for (let r of restaurantsRepository.restaurantsPm.value.data) {
      viewModel.restaurants.push({
        id: r.id,
        name: r.name,
        descriptionHtml: await transformMarkdownToHtml(r.descriptionMarkdown),
      });
    }

    viewModel.data = restaurantsRepository.tablePm.value.data;

    return viewModel;
  }

  return {
    loadRestaurants,
    getViewModel,
  };
};
