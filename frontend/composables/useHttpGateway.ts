type FetchOptionsType = Parameters<typeof useFetch>[1];

export const useHttpGateway = () => {
  const config = useConfig();

  const get = async (path: string, options?: FetchOptionsType) => {
    const dto = await useFetch(config.applicationServerUrl + path, {
      ...options,
      method: "get",
    });

    return dto;
  };

  const post = async (path: string, options: FetchOptionsType) => {
    const dto = await useFetch(config.applicationServerUrl + path, {
      ...options,
      method: "post",
    });

    return dto;
  };

  const update = async (path: string, options: FetchOptionsType) => {
    const dto = await useFetch(config.applicationServerUrl + path, {
      ...options,
      method: "put",
    });

    return dto;
  };

  const _delete = async (path: string, options: FetchOptionsType) => {
    const dto = await useFetch(config.applicationServerUrl + path, {
      ...options,
      method: "delete",
    });

    return dto;
  };

  return {
    get,
    post,
    update,
    delete: _delete,
  };
};
