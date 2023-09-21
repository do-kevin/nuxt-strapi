interface IConfig {
  applicationServerUrl: string | null;
}

export const useConfig = () => {
  const config: IConfig = {
    applicationServerUrl: "http://localhost:1337",
  };

  const runtimeConfig = useRuntimeConfig();

  if (!!runtimeConfig.public.applicationServerUrl.length) {
    config.applicationServerUrl = runtimeConfig.public.applicationServerUrl;
  }

  return config;
};
