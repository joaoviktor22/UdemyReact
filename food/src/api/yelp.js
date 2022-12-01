import axios from "axios";

export default axios.create({
   baseURL: "https://api.yelp.com/v3/businesses",
   headers: {
       Authorization: 'Bearer 87ddaM7yKNsKf-lB-W81yHDcBfUZk90IjAb2uAaUcbi1QDoLU9my25wAA_fTgcIXBb5_Ilb0p3r7uDnvaJ_Iz7VIlfEfySWcl8p2qLgdc4dDeSwV-ms4dxJb-KiIY3Yx'
   }
});
