import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer UzKdGwGhksl2RAxyO6UBPMFPbLzkrUEscqlPsoTlQBeOiGOKNnloA4nHtoHETki7RZBzrh_CXLlIbDbb9fPXvtX4Yw80F5BtfmStZONCQaIhRnd4W1NDsURfeG3yZnYx",

    },
});
