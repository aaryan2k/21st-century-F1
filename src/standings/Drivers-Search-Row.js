import "./Standings.css";
// import Image from "react-bootstrap/Image";

const DriversSearchRow = ({driverStanding}) => {
    const icon = `/21st-century-F1/icons/${driverStanding.Driver.nationality}.png`;

    return ( 
        <tr>
            <td>{driverStanding.position}</td>
            <td>
                { <Image src={icon} width="35" height="35"/> }
                {driverStanding.Driver.nationality}
            </td>
            <td>{driverStanding.Driver.givenName + " " + driverStanding.Driver.familyName}</td>
            <td>{driverStanding.Constructors[0].name}</td>
            <td>{driverStanding.points}</td>
        </tr>
     );
}
 
export default DriversSearchRow;
