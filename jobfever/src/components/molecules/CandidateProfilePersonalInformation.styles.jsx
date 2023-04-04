import {Paper, styled} from "@mui/material";
import Box from "@mui/material/Box";

export const StyledProfilePaper = styled(Paper)`
  padding: 2rem;
  background-color: #ffffff;
`;

export const StyledRightBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  width: 50%;
`;

export const StyledLeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  text-align: left;
`;

export const StyledIconAndTitleBox = styled(Box)`
  display: flex;
`;