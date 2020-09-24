import client from "./client";

const getData = (endPoint) => {
  return client.get(endPoint);
};
export default {
  getData,
};
