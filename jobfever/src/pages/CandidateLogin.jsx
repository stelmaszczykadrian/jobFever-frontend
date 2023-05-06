import CandidateLoginMainComponent from "../components/templates/CandidateLoginMainComponent";

export default function CandidateLogin() {
    return (
        <CandidateLoginMainComponent apiUrl="http://localhost:8080/api/authentication/authenticate/candidate" text="Login to candidate profile."/>
    );
}

