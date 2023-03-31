import {styled} from "@mui/material";


export default function StyledText(props){
    const Text = styled(props.tag)`
  font-weight: bold;
  text-align: center;
      color: ${props.color};
`;
    return (<Text>{props.text}</Text>)
}