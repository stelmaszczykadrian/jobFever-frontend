import {StyledForEmployersMainContainer} from "./ForEmployersMainContainer.styles";
import RedButton from "../atoms/RedButton";


export default function ForEmployersMainContainer(){
    return(
        <StyledForEmployersMainContainer>
            <span>Czy masz już konto pracodawcy na JobFever?</span>
            <RedButton text={'Tak, przejdź do logowania'}></RedButton>
            <RedButton text={'Nie, przejdź do rejestracji'}>></RedButton>
        </StyledForEmployersMainContainer>
    );
}