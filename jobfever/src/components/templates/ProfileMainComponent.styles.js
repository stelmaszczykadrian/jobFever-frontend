import {styled} from "@mui/material";
import img from "../../images/background_6.jpg"


export const StyledProfileMainComponent = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url(${img});
  background-repeat: inherit;
  background-position: center;
  background-size: cover;
`