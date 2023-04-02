import {StyledHomeMainComponent} from "./HomePageMainComponent.styles";
import HomeLeftContainer from "../organisms/HomeLeftContainer";
import HomeRightContainer from "../organisms/HomeRightContainer";

export default function HomeMainComponent() {
    return (
        <StyledHomeMainComponent>
            <HomeLeftContainer />
            <HomeRightContainer />
        </StyledHomeMainComponent>
    );
}