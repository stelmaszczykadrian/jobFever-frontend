import styled from "styled-components";
import img from "../../images/backgrounds/background_1.jpg"

export const StyledContactPageContainer = styled("div")`
  width: 100%;
  height: 100%;
`


export const StyledContactPageMainContainer = styled('div')`
  padding-top: 100px;
  width: 50%;
  margin: auto;
  height: 90%;
  padding-bottom: 50px;
`;

export const StyledContactBox = styled("div")`
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
`


export const StyledContactPageLeftContainer = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;


export const StyledContactPageRightContainer = styled.div`
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


export const StyledContactPageInputField = styled.input`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: .3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: #fff;
  }
`;


export const StyledContactPageTextarea = styled("textarea")`
  width: 100%;
  min-height: 150px;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: .3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: #fff;
  }
`

