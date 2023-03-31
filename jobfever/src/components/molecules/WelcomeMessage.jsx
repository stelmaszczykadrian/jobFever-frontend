import StyledText from "../atoms/StyledText";


export default function WelcomeMessage(props) {
    let createAccountMessage =
        <StyledText
            color="white"
            tag={"h3"}
            text={"Create account"}>
        </StyledText>;
    if (props.page === "LOGIN") {
        createAccountMessage = "";
    }
    return (
        <div>
            <StyledText
                color="rgba(171, 36, 36)"
                tag={"h2"}
                text={"Welcome!"}
            >
            </StyledText>
            {createAccountMessage}
        </div>
    )
}