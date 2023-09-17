interface IConfig {
  applicationServerUrl: string | null;
}

export const useConfig = () => {
  const config: IConfig = {
    applicationServerUrl: "http://localhost:1337",
  };

  return config;
};
