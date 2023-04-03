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
`;
