
import { useNavigate } from 'react-router-dom/dist';
import BackArrow from './img/backbutton.svg';
const HandleBack = () => {
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }
    return (
        <>
            <div onClick={handleBackButton}>
                <img className="h-10 w-10 mr-2" src={BackArrow} alt="back-arrow"/>
            </div>
        </>
    )
}

export default HandleBack;