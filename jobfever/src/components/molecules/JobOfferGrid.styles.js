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


export const Test = styled('p')`
  position: absolute;
  width: 46px;
  height: 43px;
  left: 858px;
  top: 54px;

  background: #B6B6B6;
  border-radius: 13px;
`

export const Test2 = styled('p')`
  position: absolute;
  width: 46px;
  height: 38px;
  left: 864px;
  top: 62px;

  font-family: 'Padauk';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;

  color: #000000;
`
export const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Square = styled('div')`
  margin: 5px;
  flex-basis: calc(100% / 7 - 10px);
  height: auto;
  text-align: center;
  background: #B6B6B6;
  border-radius: 13px;
  padding: 15px 0;

  &:nth-of-type(8n) {
    flex-basis: 0;
  }
`;

export const Text = styled('p')`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 2px;
`;
