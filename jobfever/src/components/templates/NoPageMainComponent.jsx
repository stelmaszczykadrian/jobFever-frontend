import ResponsiveAppBar from "../molecules/Navbar";
import NoPageContainer from "../organisms/NoPageContainer";
import {StyledNoPageMainComponent} from "./NoPageMainComponent.styles";

export default function NoPageMainComponent(){
    return(
        <StyledNoPageMainComponent>
            <ResponsiveAppBar/>
            <NoPageContainer/>
        </StyledNoPageMainComponent>
    );
}