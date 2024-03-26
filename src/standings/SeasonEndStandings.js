import "./Standings.css";
import { Tabs, Tab } from 'react-bootstrap';
import DriversSearchResults from './Drivers-Search';
import ConstructorsSearchResults from "./Constructors-Search";


const SeasonEndStandings = () => {

    return (     
            <div className="container">
       
                <Tabs
                    defaultActiveKey="driver"
                    id="standings-tab"
                    className="mb-3"
                >
                <Tab eventKey="driver" title="Driver">
                    <DriversSearchResults />
                </Tab>
                <Tab eventKey="constructor" title="Constructor">
                   <ConstructorsSearchResults />
                </Tab>
                </Tabs>
            </div>
        );
    
    }
 
export default SeasonEndStandings;