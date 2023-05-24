import {styled} from "@mui/material";
import {Link} from "@mui/joy";

export const StyledLink = styled("a")(() => ({
    color: 'black'
}))


export const StyledDontRememberPasswordLink = styled(Link)`
  text-decoration: none;
  color: #a1a0a0;
  display: flex;
  justify-content: center;
`;
