import Button from "@mui/joy/Button";
import {styled} from "@mui/material";
export const StyledSortButton = styled(Button)`
  background-color: ${props => props.color || 'A9A9A0'};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  transition: all 0.3s ease;
  color: white;
  &:hover {
    color: white;
    background-color: #696960;
  }
`;
