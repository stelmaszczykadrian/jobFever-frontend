import styled from "styled-components";
import img from "../../images/backgrounds/background_1.jpg";

export const StyledJobsPageMainComponent = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;


export const StyledBoxShadow = styled("div")`
  background-color: rgba(29, 25, 23, 0.8);
  width: 100%;
  margin: auto;
  align-items: center;
  height: 100%;  
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;
`;