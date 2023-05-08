import styled from "styled-components";
import img from "../../images/404.png";

export const StyledNoPageMainContainer = styled('div')`
  width: 55%;
  margin: 0 auto;
  text-align: center;
`;

export const StyledNoPageImage = styled("div")`
  width: 100%;
  height: 50vh;
  background-image:url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
