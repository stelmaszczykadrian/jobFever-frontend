import {styled} from "@mui/material";
import Sheet from "@mui/joy/Sheet";

export const StyledRightContainer = styled(Sheet)`
  flex-basis: 50%;
  height: 100%;
  display: grid;
  align-items: flex-start;
  justify-content: center;
  background: rgba(29, 25, 23, 0.7);
  grid-template-rows: 2fr 5fr 1fr;
  grid-template-columns: 1fr;
`

export const CandidateRegisterTextCandidateExist = styled('div')`
  color: whitesmoke;
  text-align: center;
  font-weight: bold;
  font-size: large;
`

export const StyledUserInputValidation = styled("div")`
  border: 5px;
  align-self: center;
  color: black;
  margin-top: 2%;
`;

export const StyledLabel = styled("span")`
  align-self: center;
  color: white;
  font-weight: bold;
  font-size: medium;
  margin-top: 2%;
`