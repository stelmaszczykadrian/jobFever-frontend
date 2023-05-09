import styled from "styled-components";
import img from "../../images/backgrounds/addjobbackround.png"
import Button from "@mui/joy/Button";

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
  margin: 12px 5px;
`

export const StyledSelectJobType = styled("select")`
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 20px;
  
`

export const StyledCurrencyType = styled("select")`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
 
`

export const StyledButtonCenter = styled("div")`
  text-align: center;
`

export const StyledRedButtonModalButton = styled(Button)(() => ({
    alignSelf: 'center',
    mt: 5,
    backgroundColor: 'rgba(171, 36, 36)',
    ':hover': {
        backgroundColor: '#852222',
        color: 'white'
    },
}));

export const StyledInputLabel = styled.div`
  color: rgba(171, 36, 36);
  font-weight: bold;
  margin: 15px 0;
`;




