import EmployerLoginMainComponent from "../components/templates/EmployerLoginMainComponent";

export default function EmployerLogin(){
    return(
        <EmployerLoginMainComponent apiUrl="http://localhost:8080/api/authenticate"/>
    );
}