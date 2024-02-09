import './Home.css';
import { NavLink } from "react-router-dom";

const Carousel = () => {
    return ( 
        <div id="welcomeCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" className="active"
                    ></button>
                <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1"
                    ></button>
                <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2"
                    ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item welcome-carousel-image1 active">
                    <div className="carousel-caption">
                        <h1>Welcome to 21st Century F1</h1>
                        <p>Home of the Internet Formula 1 Historians</p>
                    </div>
                </div>
                <div className="carousel-item welcome-carousel-image2">
                    <div className="carousel-caption text-start">
                        <h1>The Championship Positions</h1>
                        <p>Take a trip back in time to see champions past to present</p>
                        <p><NavLink to="/standings" className={"btn btn-lg btn-danger"} role={"button"}>Standings</NavLink></p>
                    </div>
                </div>
                <div className="carousel-item welcome-carousel-image3">
                    <div className="carousel-caption text-end">
                        <h1>Experience Grand Prix Results</h1>
                        <p>See the ones who conquered each circuit year-by-year</p>
                        <p><NavLink to="/results" className={"btn btn-lg btn-danger"} role={"button"}>Results</NavLink></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
     );
}
 
export default Carousel;