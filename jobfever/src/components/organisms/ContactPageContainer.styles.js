import styled from "styled-components";
import img from "../../images/backgrounds/background_1.jpg"

export const StyledContactPageContainer = styled("div")`
  width: 100%;
  height: 100%;
`

export const StyledContactPageMainContainer = styled('div')`
  margin-top: 50px !important;
  margin: auto;
`;

export const StyledContactBox = styled("div")`
  max-width: 850px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
  border-radius: 20px;
`


export const StyledContactPageLeftContainer = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;


export const StyledContactPageRightContainer = styled.div`
  padding: 25px 70px;
  margin: auto;
`


export const StyledContactPageHeading = styled.h2`
  position: relative;
  padding: 0 0 10px;
  text-align: center;
  margin-bottom: 20px;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    background-color: #ea3526;
    border-radius: 5px;
  }
`;


export const StyledContactPageInputField = styled.input`
  width: 90%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  margin-right: 50%;
  transition: .3s;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border: 2px solid rgb(234, 53, 38);
    background-color: #fff;
    border-radius: 5px;
  }
`;


export const StyledContactPageTextarea = styled("textarea")`
  width: 90%;
  min-height: 120px;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: .3s;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border: 2px solid rgb(215, 49, 35);
    background-color: #fff;
    border-radius: 5px;
  }
`

export const RedButton = styled('button')`
  background-color: ${props => props.disabled ? '#888888' : 'rgba(171, 36, 36) !important'};
  color: #ffffff;
  padding: 12px 40px; 
  font-size: 16px;
  border: none;
  border-radius: 8px;
  opacity: ${props => props.disabled ? 0.6 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;


