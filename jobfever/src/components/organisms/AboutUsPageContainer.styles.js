import styled from "styled-components";

export const StyledAboutsUsPageMainContainer = styled('div')`
  margin-top: 100px !important;
  width: 50%;
  margin: 0 auto;
`;

export const StyledAuthorInfoContainer = styled.div`
  max-width: 850px;
  margin: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
`;

export const StyledImageContainer = styled.div`
  background-image: url(${(props) => props.imageUrl});
  width: 200px;
  height: 239px;
  background-size: cover;
`;

export const StyledInfoRightContainer = styled.div`
  flex-basis: 50%;
  height: 100%;
  display: grid;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledInfoContainerLeft = styled.div`
  flex-basis: 50%;
  height: 100%;
  display: grid;
  align-items: flex-start;
  justify-content: center;
`

export const StyledAuthorPersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledAboutUsPageText = styled.p`
  display: flex;
  align-items: center;
  margin: 10px`


export const StyledAboutUsPageHeading = styled.div`
  font-weight: bold;
  font-size: xx-large;
  margin-bottom: 5%;
  text-align: center;
  color: rgba(171, 36, 36);
`




