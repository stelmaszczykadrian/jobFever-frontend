import {styled} from "@mui/material";
import img from "../../images/background_6.jpg"


export const StyledCandidateProfileMainComponent = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: inherit;
  background-position: center;
  background-size: cover;
`