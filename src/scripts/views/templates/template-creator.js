import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Alamat</h3>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Restaurant Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(" - ")}</p>
    <h4>Restaurant Menus</h4>
    <p><b>Food :</b> ${restaurant.menus.foods.map((food) => food.name).join(" - ")}</p>
    <p><b>Drinks :</b> ${restaurant.menus.drinks.map((drink) => drink.name).join(" - ")}</p>
  </div>

  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p><b>Nama : ${restaurant.customerReviews.map((names) => names.name)}</b></p>
    <p>${restaurant.customerReviews.map((reviews) => reviews.review)}</p>
    <h5>${restaurant.customerReviews.map((dates) => dates.date)}</h5>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" >
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.city}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;
 
  const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { 
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate

};