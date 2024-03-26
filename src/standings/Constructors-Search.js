import "./Standings.css";
import { useLoaderData } from "react-router-dom";
import ConstructorsSearchRow from  './Constructors-Search-Row';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";


const ConstructorsSearchResults = () => {
    const { year } = useParams();

    const standings = useLoaderData(); 
    const constructorStandings = standings[1].MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

    if (constructorStandings.length === 0) {
        return(
            <div>
                <p>No results found</p>
            </div>
        );
    }
    return ( 
        
            <div>
                <Container>
                    <NavLink to="/standings" className={"btn btn-block btn-danger"} role={"button"}> <i className="fas fa-arrow-alt-circle-left"></i> Back</NavLink>
                </Container>
                <div className="mt-2 table-responsive">
                <h4>{year} Constructors Standings:</h4>
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>Position</th>
                            <th>Nationality</th>
                            <th>Constructor</th>
                            <th>Points</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                
                    {constructorStandings.map((h) => (
                        <ConstructorsSearchRow key={h.position} constructorStanding={h} />
                    ))} 
    
                    </tbody>
                </table>
                </div>
            </div>
        );
    
    }
 
export default ConstructorsSearchResults;