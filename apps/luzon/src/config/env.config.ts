const dev = {
  API_ENDPOINT_URL: process.env.API_DEV_ENDPOINT_URL,
};

const prod = {
  API_ENDPOINT_URL: process.env.API_PROD_ENDPOINT_URL,
};

const test = {
  API_ENDPOINT_URL: process.env.API_TEST_ENDPOINT_URL,
};

const getEnv = (): { API_ENDPOINT_URL: string | undefined } => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return dev;
    case 'production':
      return prod;
    case 'test':
      return test;
    default:
      return dev;
  }
};

export const env = getEnv();
