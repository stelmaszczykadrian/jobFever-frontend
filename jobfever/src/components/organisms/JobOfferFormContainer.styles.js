import styled from "styled-components";
import img from "../../images/797828694.png"

export const StyledJobOfferCreationContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
`;

export const StyledInputJobOfferContainer = styled('div')`
  width: 100%;
`

export const StyledJobOfferContainer = styled('div')`
  width: 100%;
  background-image:url(${ img });
  background-position: center;
  background-size: cover;
`

export const StyledTextarea = styled("textarea")`
  width: 97%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 20px;
`

export const StyledGridContainer = styled("div")`
  display: grid;
  grid-template-columns: auto auto;
  
`
export const StyledGridItem = styled("div")`
  text-align: center;
  margin: 0 5px;
`

export const StyledSelectJobType = styled("select")`
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 20px;
  
`

export const StyledCurrencyType = styled("select")`
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
 
`

export const StyledInputLabel = styled("div")`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-color: white;
`

export const StyledButtonCenter = styled("div")`
  text-align: center;
`