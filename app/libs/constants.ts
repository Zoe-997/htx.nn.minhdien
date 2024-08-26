export const constants = {
  API_URL:
    process.env.NEXT_PUBLIC_MODE === "production"
      ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
      : process.env.NEXT_PUBLIC_API_URL_DEV,
  FULL_PERMISSION: ["Admin", "SupperAdmin"],
  PERMISSIONS: ["SupperAdmin", "Admin", "Manager", "Content"],
};
