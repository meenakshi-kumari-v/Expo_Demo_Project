import axios from "axios";
export const apiurl = "http://192.168.11.157:3000/";
// export const apiurl = "http://192.168.1.4:3000/";
export const properties = "properties";
export const bookings = "bookings";
export const profile = "profile";

export const api = axios.create({
  baseURL: apiurl,
});

export const getApiData = async () => {
  const result = await api.get(properties);
  console.log("result", result);

  return result?.status == 200 ? result?.data : [];
};

export const getProfileData = async () => {
  const result = await api.get(profile);
  console.log("result", result);

  return result?.status == 200 ? result?.data : [];
};
