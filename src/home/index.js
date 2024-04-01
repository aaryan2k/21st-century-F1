import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from './carousel1.jpg';
import carousel2 from './carousel2.jpg';
import carousel3 from './carousel3.jpg';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';

const Main = () => {
    return ( 
        <Container>
            <Carousel className="slide mb-5" >
                <Carousel.Item className='carousel-item'>
                    <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Welcome to 21st Century F1</h1>
                    <p>Home of the Internet's Formula 1 Historians</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="text-end">
                    <h1>The Championship Positions</h1>
                    <p>Take a trip back in time to see champions past to present</p>
                    <NavLink to="/standings" className={"btn btn-lg btn-danger"} role={"button"}>Standings</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                    />
                    <Carousel.Caption className="text-start">
                    <h1>See Grand Prix Results</h1>
                    <p>Read the names of those who conquered each circuit year-by-year</p>
                    <NavLink to="/results" className={"btn btn-lg btn-danger"} role={"button"}>Results</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Breadcrumb className="custom-background">
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
            </Breadcrumb>

            <div className="row">
                <div className="col-lg-8">
                    <h2 className="pb-4 mb-4 fst-italic text-start">My Story</h2>
                    <p className="text-start">
                        For the last couple of years, I have loved watching Formula 1. I have seen Lewis Hamilton become 
                        a seven time champion of the world and Max Verstappen dominate the sport in his Red Bull. 
                        I have been fascinated with the history of the sport and how it has evolved over the years.
                    </p>
                    <p className="text-start">
                        As I grew older, I also became very interested in engineering and computer science. With engineering being such an integral part for the development of
                        the racecars, my love for the sport only amplified. So to combine my interests, I have created this site. I hope you enjoy using it!
                    </p>
                </div>

                <aside className="col-lg-4">
                    <div className="p-4 mb-3 mt-2 bg-light rounded">
                        <p className="mb-0 fst-italic">There are only three sports: bullfighting, <b>motor racing</b>, and mountaineering; all the rest are merely games ~
                            Ernest Hemingway</p>
                    </div>
                </aside>
            </div>
        </Container> 
    );
}
 
export default Main;

