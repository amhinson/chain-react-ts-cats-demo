import { baseAPI } from "./baseService";
import { logError } from "../utilities/errorUtils";

export const getCats = (): Promise<Cat[]> => {
  return baseAPI
    .get("images/search", {
      params: {
        category_ids: 1,
        limit: 20
      }
    })
    .then(({ data }) => data);
};

export const voteForCat = (imageId: string, value: boolean): Promise<void> => {
  return baseAPI
    .get("votes", {
      data: {
        image_id: imageId,
        sub_id: "o7xgrd",
        value
      }
    })
    .then(({ data }) => data)
    .catch(error => logError(error));
};
