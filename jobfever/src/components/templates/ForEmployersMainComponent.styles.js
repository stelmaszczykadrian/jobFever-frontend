import {styled} from "@mui/material";
import img from "../../images/backgrounds/background_2.jpg";

export const StyledForEmployersMainComponent = styled("div")`
  height: 100vh;
  width: 100%;
  background-image:url(${ img });
  background-position: center;
  background-size: cover;
  overflow: hidden;
`