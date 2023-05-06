import EmployerLoginMainComponent from "../components/templates/EmployerLoginMainComponent";

export default function EmployerLogin(){
    return(
        <EmployerLoginMainComponent apiUrl="http://localhost:8080/api/authentication/authenticate/employer" text="Login to employer profile."/>
    );
}