import "./Standings.css";
import Image from "react-bootstrap/Image";

const ConstructorsSearchRow = ({constructorStanding}) => {
    console.log(constructorStanding.wins);
    const icon = `/21st-century-F1/icons/${constructorStanding.Constructor.nationality}.png`;

    return ( 
        <tr>
            <td>{constructorStanding.position}</td>
            <td>
                <Image src={icon} width="35" height="35"/>
            
            </td>
            <td>{constructorStanding.Constructor.name}</td>
            <td>{constructorStanding.points}</td>
            <td>{constructorStanding.wins}</td>
        </tr>
     );
}
 
export default ConstructorsSearchRow;