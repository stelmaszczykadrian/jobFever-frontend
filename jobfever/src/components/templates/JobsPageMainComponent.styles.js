import styled from "styled-components";
import img from "../../images/background_1.jpg";

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