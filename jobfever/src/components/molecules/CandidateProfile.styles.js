import {Paper, styled} from "@mui/material";
import Box from "@mui/material/Box";

export const StyledProfilePaper = styled(Paper)`
  padding: 2rem;
  background-color: #ffffff;
  margin-top: inherit;
`;

export const StyledRightBox = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  flex-grow: 1;
`;

export const StyledRightContentBox = styled(Box)`
  margin-top: 8%;
  margin-bottom: 15%;
  text-align: start;
  overflow-wrap: break-word;
`;

export const StyledLeftBox = styled(Box)`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  text-align: left;
`;

export const StyledBottomBoxPersonalInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-flow: nowrap;
`;

export const StyledBottomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledIconBox = styled(Box)`
  text-align: right;
  flex-grow: 1;
  align-self: self-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledTopBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const StyledInput = styled("div")`
  text-align-last: end;
`;
