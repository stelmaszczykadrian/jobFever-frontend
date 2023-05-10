import {styled} from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";

export const StyledRightContainer = styled(Sheet)`
  flex-basis: 50%;
  height: 100%;
  display: grid;
  align-items: flex-start;
  justify-content: center;
  background: rgba(29, 25, 23, 0.8);
  grid-template-rows: 2fr 5fr 1fr;
  grid-template-columns: 1fr;
`

export const StyledInputRedHover = styled(Input)`
  color: black;
  width: 100%;
  padding: 8px 30px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 0px solid #ccc;
  border-radius: 8px;
  -webkit-transition: 0.1s;
  transition: 0.5s;
  &:placeholder {
  color: grey;
}}
`


export const CandidateRegisterTextCandidateExist = styled('div')`
  color: whitesmoke;
  text-align: center;
  font-weight: bold;
  font-size: large;
`

export const StyledPasswordInputValidation = styled("div")`
  border: 5px;
  align-self: center;
  color: black;
  margin-top: 2%;
  flex-direction: row;
  display: flex;
  margin-left: 4%;
  align-items: center;
`;

export const StyledPasswordInputValidationRegister = styled("div")`
  border: 5px;
  align-self: center;
  color: black;
  margin-top: 2%;
  display: flex;
  align-items: center;
`;


export const StyledEmailInputValidation = styled("div")`
  border: 10px;
  align-self: center;
  color: black;
  margin-left: 4%;
  margin-top: 2%;
  flex-direction: row;
  display: flex;
  align-items: center;
  }
`;

export const StyledEmailInputValidationRegister = styled("div")`
  border: 10px;
  align-self: center;
  color: black;
  margin-top: 2%;
  display: flex;
  align-items: center;
  }
`;

export const StyledLabel = styled("span")`
  align-self: center;
  color: white;
  font-weight: bold;
  font-size: medium;
  margin-top: 2%;
`



