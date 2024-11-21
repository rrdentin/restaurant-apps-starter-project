export const RestaurantCardTemplate = {
  create: (restaurant) => {
    const restaurantCard = document.createElement("div");
    restaurantCard.classList.add("card");
    restaurantCard.innerHTML = `
      <img src="${restaurant.pictureId}" 
           alt="Image of ${restaurant.name}" 
           class="card-image" 
           tabindex="0">
      <!-- City tag over the image -->
      <span class="restaurant-city-tag" 
            tabindex="0">${restaurant.city}</span>
      <div class="restaurant-card-body">
        <div class="right">
          <!-- Rating before the name -->
          <p class="restaurant-card-rating" tabindex="0">
            <strong>Rating:</strong> ${restaurant.rating}
          </p>
          <h3 class="restaurant-card-title" tabindex="0">${restaurant.name}</h3>
          <p class="restaurant-card-description" tabindex="0">${restaurant.description}</p>
        </div>
      </div>
    `;
    return restaurantCard;
  },
};