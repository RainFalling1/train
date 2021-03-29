import {Link} from "react-router-dom";
import "./TrainNav.css"
const TrainNav = () =>{

    return(
        <div>
            <nav>
                <ul style={{display:"flex",flexDirection:'row'}}>
                    <li style={{listStyle:'none'}}>
                        <Link to="/" style={{textDecoration: 'none'}}>Popular</Link>
                        <div className="underline-bar"/>
                    </li>
                    <li style={{marginLeft:10,listStyle:'none'}}>
                        <Link to="/battle" style={{textDecoration: 'none'}}>Battle</Link>
                        <div className="underline-bar"/>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default TrainNav;
