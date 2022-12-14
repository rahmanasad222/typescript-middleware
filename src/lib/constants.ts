const BASE_URL = "https://do-rider.cheetay.pk";

export const END_POINTS = {
  ALL_RIDERS: `${BASE_URL}/alerts_rider?page=1` as string,
  GET_LOGIN: `${BASE_URL}/login` as string,
};

export const REQUEST_TYPE = {
  GET: "GET" as string,
  POST: "POST" as string,
};
