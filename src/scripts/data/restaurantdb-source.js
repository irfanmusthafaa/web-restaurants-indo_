import API_ENDPOINT from "../globals/api-endpoint";
import CONFIG from "../globals/config";

class RestaurantDbSource {
  static async ListRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async DetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async CustomerRewiew(review) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": CONFIG.KEY,
      },
      body: json.stringify(review),
    };
    const response = await fetch(API_ENDPOINT.REWIEW, options);
    console.log(response);
  }
}

export default RestaurantDbSource;