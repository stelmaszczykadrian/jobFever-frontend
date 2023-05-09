import styled from "styled-components";
import img from "../../images/backgrounds/background_1.jpg"

export const StyledContactPageContainer = styled("div")`
  width: 100%;
  height: 100%;
`


export const StyledContactPageMainContainer = styled('div')`
  margin-top: 100px !important;
  width: 50%;
  margin: 0 auto;
  text-align: center;

`;

export const StyledContactBox = styled("div")`
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
`


export const StyledContactPageLeftContainer = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
`;


export const StyledContactPageRightContainer = styled.div`
  height: 50vh;
  padding: 25px 70px;
`


export const StyledContactPageHeading = styled.h2`
  position: relative;
  padding: 0 0 10px;
  text-align: center;
  margin-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: red;
  }
`;

export const StyledContactPageText = styled.p`
  margin-top: 20%;
  font-size: large;
`

