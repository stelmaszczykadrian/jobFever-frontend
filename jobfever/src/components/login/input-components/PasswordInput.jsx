import Input from "@mui/joy/Input";

export default function PasswordInput(name, input){
    return(
        <Input
            type="password"
            name={name}
            placeholder='Enter Password'
            value = {input.value}
        />
    )
}