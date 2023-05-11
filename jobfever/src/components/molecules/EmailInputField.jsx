import {
    StyledEmailInputValidation,
    StyledInputRedHover,
    StyledLabel
} from "../organisms/CandidateRegisterRightContainer.styles";
import FormControl from "@mui/joy/FormControl";
import IconButton from "@mui/material/IconButton";
import {MailOutline} from "@material-ui/icons";
import StyledText from "../atoms/StyledText";


export default function EmailInputField({ formData, onInputChange, validateInput }){
    return(
        <FormControl>
            <StyledLabel>E-mail</StyledLabel>
            <StyledEmailInputValidation>
                <StyledInputRedHover
                    error
                    type="text"
                    name="email"
                    placeholder='ex. jobFever@email.com'
                    value={formData.email}
                    onChange={onInputChange}
                    onBlur={validateInput}
                />
                <IconButton sx={{color: 'white'}}>
                    <MailOutline/>
                </IconButton>
            </StyledEmailInputValidation>
            {formData.errors.email &&
                <StyledText
                    tag="span"
                    color="red"
                    text={formData.errors.email}
                />
            }
        </FormControl>
    );
}