import { baseAPI } from "./baseService";

export const getCats = () => {
  return baseAPI
    .get("images/search", {
      params: {
        category_ids: 1,
        limit: 20
      }
    })
    .then(({ data }) => data);
};

export const voteForCat = (imageId, value) => {
  return baseAPI
    .get("votes", {
      data: {
        image_id: imageId,
        sub_id: "o7xgrd",
        value
      }
    })
    .then(({ data }) => data);
};
