import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DriverSelect = () => {

    const navigate = useNavigate();
    const year = (new Date()).getFullYear();
    const years= Array.from(new Array(year-2000+1), (val,index) => 2000 + index);
    years.unshift('Select Year');

    const handleSelectChange = (e) => {
        const selectedYear = e.target.value;    
        navigate(`/standings/${selectedYear}`);
    }

    return ( 
        <div>
            <Form>
                 <Form.Label className="formLabel fw-bold">
                    Select Year
                </Form.Label>

                <Form.Select  onChange={handleSelectChange}>
                {
                    years.map((year, index) => {
                        return <option key={`year${index}`} value={year}>{year}</option>
                    })
                }
                </Form.Select>
                             
            </Form>
        </div>
     );
}
 
export default DriverSelect;