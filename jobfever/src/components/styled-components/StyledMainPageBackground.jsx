import {styled} from "@mui/material";
import mainImage from "../../images/background_1.jpg"

export const StyledMainPageBackground = styled("div")`
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: url(${mainImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;`
