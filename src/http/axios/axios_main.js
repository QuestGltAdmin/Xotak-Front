import axios from "axios";

let timezone = Intl.DateTimeFormat().resolvedOptions();

const axiosMain = axios.create({
  baseURL: "https://q3.donative.in:3007/",

  headers: {
    "Content-Type": "application/json",
    Timezone: timezone.timeZone,
  },
});
export default axiosMain;
