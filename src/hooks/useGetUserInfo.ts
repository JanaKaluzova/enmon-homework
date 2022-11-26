import { LoginResponse } from "../api/types";
import { userInfoStorageKey } from "../utils/constants";

export const useGetUserInfo = (): LoginResponse | null => {
  const storedData = localStorage.getItem(userInfoStorageKey);

  if (!storedData) {
    console.warn("Data in local storage not found.");
    return null;
  }

  const userInfo: LoginResponse = JSON.parse(storedData);

  return userInfo;
};
