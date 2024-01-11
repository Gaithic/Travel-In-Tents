
import { useNavigate } from 'react-router-dom/dist';
import imageBackbutton from './img/backbutton.svg';
const HandleBack = () => {
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }
    return (
        <>
            <div onClick={handleBackButton}>
                <img className="h-10 w-10 mr-2" src={imageBackbutton} alt="back-image"/>
            </div>
        </>
    )
}

export default HandleBack;