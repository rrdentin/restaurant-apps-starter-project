import { Restaurants } from '../../utils/restaurants'
import { RestaurantCardTemplate } from '../templates/restaurant-card'
import '../../../styles/top-repo.scss'
import { Jumbotron } from '../templates/jumbotron'

// TODO : Buat Top Repo Page
export default class RestaurantPage {
  render() {
    this._setTitle()
    return `
        ${Jumbotron.create()}
        <section id="main" class="container" >
            <h2 tabindex="0">Restaurant</h2>
            <p tabindex="0">Daftar Restaurant</p>
            <div class="loader" aria-label="Sedang Memuat Data"></div>
            <div class="lists">
            </div>
        </section>

    `
  }

  _hideLoading() {
    this.loadingIndicator.style.display = 'none'
  }

  _showLoading() {
    this.loadingIndicator.style.display = 'block'
  }

  _setTitle() {
    document.title = 'Restaurant'
  }

  async afterRender() {
    this.loadingIndicator = document.querySelector('.loader')

    this._showLoading()
    const repositoriesData =
      await Restaurants.getRestaurants()
    repositoriesData.forEach((repo) => {
      const repoCard = RestaurantCardTemplate.create(repo)
      document.querySelector('.lists').appendChild(repoCard)
    })
    this._hideLoading()
  }
}