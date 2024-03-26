import "./Standings.css";
import { useParams } from "react-router-dom";
import DriversSearchRow from  './Drivers-Search-Row';
import { useLoaderData} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const DriversSearchResults = () => {   
    const { year } = useParams();

    const standings = useLoaderData();
    const driversStandings = standings[0].MRData.StandingsTable.StandingsLists[0].DriverStandings;

    if (driversStandings.length === 0) {
        return(
            <div>
                <p>Not data found</p>
            </div>
        );
    }

    return ( 
        <div>
            <Container>
                <NavLink to="/standings" className={"btn btn-block btn-danger"} role={"button"}> <i className="fas fa-arrow-alt-circle-left"></i> Back</NavLink>
            </Container>
            <div className="mt-2 table-responsive">
                <h4>{year} Driver Standings:</h4>
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>Position</th>
                            <th>Nationality</th>
                            <th>Driver</th>
                            <th>Constructor</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    {driversStandings.map((h) => (
                        <DriversSearchRow key={h.position} driverStanding={h} />
                    ))} 
                    </tbody>
                </table>
            </div>
            <div className="credit">
                <span>Flag icons by</span> <a href="https://www.flaticon.com/authors/freepik">Freepik</a><span> from </span><a href="https://www.flaticon.com">www.flaticon.com</a>
            </div>
        </div>
     );
}
 
export default DriversSearchResults;