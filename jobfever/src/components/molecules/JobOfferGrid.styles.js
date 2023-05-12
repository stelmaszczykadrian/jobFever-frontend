import {Paper, styled} from "@mui/material";


export const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
export const StyledPaper = styled(Paper)`
  padding: 2px;
  margin: auto auto 10px;
  flex-grow: 1;
`;


export const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
`;

export const Square = styled('div')`
  margin: 2px;
  flex-basis: calc(100% / 16 - 18px);
  height: auto;
  text-align: center;
  background: transparent;
  border-radius: 30px;
  border: 0.2px solid grey;
  padding: 1px 0;
  margin-bottom: 2px;

  &:nth-of-type(8n) {
    flex-basis: 0;
  }
`;

export const Text = styled('p')`
  font-size: 16px;
  margin: 0;
  color: black;
  margin-left: 4px;
  margin-right: 4px;
  padding: 2px;
`;
