import 'bootstrap/dist/css/bootstrap.min.css';
import './external.css';
import footerBG from './images/footerBG.png';
export function Footer(){
    return(
        <div className="container-fluid footerpart">
            <img src={footerBG} alt="" style={{width:'100%', height:'300px',objectFit:'cover'}} className='img-fluid '/>
        </div>
    );
}