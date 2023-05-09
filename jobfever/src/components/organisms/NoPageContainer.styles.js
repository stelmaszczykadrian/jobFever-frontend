import styled from "styled-components";
import img from "../../images/404/404.png";

export const StyledNoPageMainContainer = styled('div')`
  margin-top: 2% !important;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
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
