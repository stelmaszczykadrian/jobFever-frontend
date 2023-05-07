import styled from "styled-components";
import img from "../../images/background_6.jpg"

export const StyledNoPageMainComponent = styled("div")`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;`

export const StyledNoPageText = styled('p')`
  font-size: x-large;
  font-weight: bold;
  color: rgba(171, 36, 36);
  font-family: cursive;
`