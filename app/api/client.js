import { create } from "apisauce";
const apiClient = create({
  baseURL: "https://ifsc.razorpay.com/",
});
export default apiClient;
