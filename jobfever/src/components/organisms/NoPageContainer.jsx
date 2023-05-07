import NoPageImage from "../../images/404image.png"
import {StyledNoPageMainContainer} from "./NoPageContainer.styles";
import {StyledNoPageText} from "../templates/NoPageMainComponent.styles";
import {useNavigate} from "react-router-dom";

export default function NoPageContainer(){
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/jobs');
    }, 4000);

    return(
        <StyledNoPageMainContainer>
            <img src={NoPageImage} width='700px' height="700px" alt="Programmer 404."></img>
            <StyledNoPageText>Sorry, it looks like the code is too difficult even for a programmer!</StyledNoPageText>
        </StyledNoPageMainContainer>
    );
}