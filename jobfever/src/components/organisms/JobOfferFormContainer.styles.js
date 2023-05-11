import styled from "styled-components";
import img from "../../images/backgrounds/background_4.jpg"
import Button from "@mui/joy/Button";

export const StyledJobOfferCreationContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
`;

export const StyledInputJobOfferContainer = styled('div')`
  width: 100%;
  border-radius: 4px;
  color: white;
`

export const StyledJobOfferContainer = styled('div')`
  width: 100%;
  background-image:url(${ img });
  background-position: center;
  background-size: cover;
`

export const Styledbg = styled('div')`
    background: rgba(29, 25, 23, 0.8);`


export const StyledTextarea = styled("textarea")`
  width: 97%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
`

export const StyledGridContainer = styled("div")`
  display: grid;
  grid-template-columns: auto auto;
  border-radius: 4px;
  color: white;
  
`
export const StyledGridItem = styled("div")`
  text-align: center;
  margin: 12px 0px;
 
  justify-content: space-between;
  border-radius: 4px;
  color: white;
`

export const StyledSelectJobType = styled("select")`

  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 0px;
  text-color: grey;
  height: 56px;
  border-color: #B7B7B7;
  width: 97%;
  :focus{
    border-color: red;
    outline: none;
}
`

export const StyledCurrencyType = styled("select")`
      font-size: 1rem;
      text-color: grey;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 2px;
      margin-top : 10px;
      height: 56px;
      width: 100%;
      border-color: #B7B7B7;
      :focus{
        border-color: red;
        outline: none;
    }
    `

export const StyledOption = styled("option")`
    :hover {
      background-color: red;
      border-color: red;
    }
}
`

export const StyledButtonCenter = styled("div")`
  text-align: center;
  margin-bottom: 100px;
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
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
`;




