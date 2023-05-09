import FormControl from "@mui/joy/FormControl";
import {StyledLabel, StyledPasswordInputValidation} from "../organisms/CandidateRegisterRightContainer.styles";
import Input from "@mui/joy/Input";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {useState} from "react";
import StyledText from "../atoms/StyledText";
export default function PasswordInputField({
                                          formData,
                                          onInputChange,
                                          validateInput,
                                          label,
                                          inputName,
                                          inputPlaceholder,
                                          inputType,
                                          inputError,
                                      }) {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormControl>
            <StyledLabel>{label}</StyledLabel>
            <StyledPasswordInputValidation>
                <Input
                    type={showPassword ? "text" : inputType}
                    name={inputName}
                    value={formData[inputName]}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder={inputPlaceholder}
                />
                <IconButton sx={{ color: "white" }} onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
            </StyledPasswordInputValidation>
            {inputError && (
                <StyledText tag="span" color="red" text={inputError} />
            )}
        </FormControl>
    );
}