import { useNavigate } from "react-router-dom";

const CurrentNavigation = () => {

    const navigate = useNavigate();

    const getNavigation = (navigation) => {
        navigate(navigation)
    }

    return getNavigation;

}

export default CurrentNavigation;