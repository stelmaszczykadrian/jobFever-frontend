import {styled} from "@mui/material";
import {Link} from "@mui/joy";

export const StyledLink = styled("a")(() => ({
    color: 'black'
}))


export const StyledDontRememberPasswordLink = styled(Link)`
  color: red;
  display: flex;
  justify-content: center;
`;