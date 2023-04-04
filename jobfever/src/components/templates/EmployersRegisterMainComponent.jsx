import LeftContainer from "../organisms/LeftContainer";
import EmployerRegisterRightContainer from "../organisms/EmployerRegisterRightContainer";
import {StyledEmployerRegisterMainComponent} from "./EmployersRegisterMainComponent.styles";


export default function EmployersRegisterMainComponent(props){
    return (
        <StyledEmployerRegisterMainComponent>
            <LeftContainer/>
            {/*<RightContainer page={props.page}/>*/}


            <EmployerRegisterRightContainer/>
        </StyledEmployerRegisterMainComponent>

    );
}