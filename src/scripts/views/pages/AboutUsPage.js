import '../../../styles/about-us.scss';
import { Jumbotron } from '../templates/jumbotron';

export default class AboutUsPage {
    render() {
        this._setTitle();
        return `
            ${Jumbotron.create()}
            <section id="about-us" class="container" tabindex="0">
                <div class="about-us-container" tabindex="0">
                    <h1 tabindex="0">About Us</h1>
                    <p class="intro-text" tabindex="0">
                        Welcome to our platform, your ultimate guide to discovering the best restaurants in town. 
                        Whether you're a foodie, a casual diner, or someone looking for the perfect dining experience, 
                        we've got you covered.          
                    </p>

                    <div class="mission-section" tabindex="0">
                        <h2 tabindex="0">Our Mission</h2>
                        <p tabindex="0">
                            Our mission is to connect people with the best dining options, providing honest reviews, 
                            accurate ratings, and a seamless experience for all food enthusiasts. 
                            We believe in celebrating the joy of eating and making dining accessible to everyone.
                        </p>
                    </div>
                </div>
            </section>`;
    }

    _setTitle() {
        document.title = "About Us";
    }

    afterRender() {
    }
}
