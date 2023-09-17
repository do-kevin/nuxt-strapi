export const getRestaurantsStub = () => {
  return {
    data: {
      value: {
        data: [
          {
            id: 1,
            attributes: {
              name: "Weird Restaurant",
              description:
                "### Best Restaurant Ever:\n\n- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              createdAt: "2023-09-12T03:37:23.746Z",
              updatedAt: "2023-09-12T07:16:13.294Z",
              publishedAt: "2023-09-12T03:37:24.438Z",
            },
          },
        ],
        meta: {
          pagination: {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: 1,
          },
        },
      },
    },
  };
};
