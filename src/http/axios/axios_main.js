import axios from "axios";

let timezone = Intl.DateTimeFormat().resolvedOptions();

const axiosMain = axios.create({
  baseURL: "",

  headers: {
    "Content-Type": "application/json",
    Timezone: timezone.timeZone,
  },
});
export default axiosMain;
