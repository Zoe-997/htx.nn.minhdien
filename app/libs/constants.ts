export const constants = {
  API_URL:
    process.env.NEXT_PUBLIC_MODE === "production"
      ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
      : process.env.NEXT_PUBLIC_API_URL_DEV,
  TOKEN_EXPIRATION: 48 * 60 * 60 * 1000,
};
