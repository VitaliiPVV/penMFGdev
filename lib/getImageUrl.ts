import { STRAPI_URL } from "@/constants";

export const getImageUrl = (imageUrl?: string) => {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("http")) return imageUrl;
  return `${STRAPI_URL}${imageUrl}`;
};