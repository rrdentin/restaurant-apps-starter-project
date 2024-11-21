import FavRestaurantPage  from "../views/pages/FavRestaurantPage";
import RestaurantPage  from "../views/pages/RestaurantPage";
import AboutUsPage from "../views/pages/AboutUsPage";
// TODO : Siapkan Routes
const routes = {
  "/": new RestaurantPage(),
  "/favorite": new FavRestaurantPage(),
  "/about-us": new AboutUsPage(),

};

export default routes;