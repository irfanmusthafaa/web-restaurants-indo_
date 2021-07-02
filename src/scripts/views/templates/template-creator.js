import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <h3 class="restaurant__title">${restaurant.city}</h3>
  <img class="restaurant__poster lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Alamat</h3>
    <p>${restaurant.address}, ${restaurant.city} </p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Restaurant Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' - ')}</p>
    
  </div>

  <h3>Menu</h3>
  <div class="detail-menu grid-2">
    <div class="detail-food">
      <h4>Food</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `
              <li>${food.name}</li>
            `).join('')}
      </ul>
    </div>
    <div class="detail-drink">
      <h4>Drink</h4>
      <ul>
        ${restaurant.menus.drinks
    .map(
      (drink) => `
              <li>${drink.name}</li>
            `,
    )
    .join('')}
      </ul>
    </div>
  </div>

  <h3 class="title-review">Reviews</h3>
  <div class="detail-review grid-3">
  ${restaurant.customerReviews
    .map(
      (review) => `
        <div class="detail-review-item">
          <div class="review-header">
            <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
            <p class="review-date">${review.date}</p>
          </div>
          <div class="review-body">
            ${review.review}
          </div>
        </div>
      `,
    )
    .join('')}
  >

`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
   <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
   data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" >

        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.city}</a></h3>
        <h4 class="restaurant__name">${restaurant.name} </h4>
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

// eslint-disable-next-line no-undef
console.log();

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,

};
