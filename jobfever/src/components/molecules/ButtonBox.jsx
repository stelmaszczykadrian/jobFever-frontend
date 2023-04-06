import {StyledBox} from "./ButtonBox.styles";
import * as React from "react";
import {StyledSortButton} from "../atoms/StyledSortButton";

import Python from "../../languages/python.svg";
import Ruby from "../../languages/ruby.svg";
import C from "../../languages/cplusplus.svg"
import JS from "../../languages/js.svg";
import CSharp from "../../languages/csharp.svg";
import PHP from "../../languages/php.svg";
import Kotlin from "../../languages/kotlin.svg";
import Java from "../../languages/java.svg";
import Scala from "../../languages/scala.svg";
import Pascal from "../../languages/pascal.svg";
import Swift from "../../languages/swift.svg";
import Dotnet from "../../languages/dotnet.svg";
import PowerShell from "../../languages/powershell.svg";
import Data from "../../languages/data.svg";
import SQL from "../../languages/sql.svg";

const languageIcons = [
    <img src={Python} alt="my" width={"30px"}/>,
    <img src={Ruby} alt="my" width={"30px"}/>,
    <img src={JS} alt="my" width={"30px"}/>,
    <img src={C} alt="my" width={"30px"}/>,
    <img src={CSharp} alt="my" width={"30px"}/>,
    <img src={PHP} alt="my" width={"30px"}/>,
    <img src={Kotlin} alt="my" width={"30px"}/>,
    <img src={Java} alt="my" width={"30px"}/>,
    <img src={Scala} alt="my" width={"30px"}/>,
    <img src={Pascal} alt="my" width={"30px"}/>,
    <img src={Swift} alt="my" width={"30px"}/>,
    <img src={Dotnet} alt="my" width={"30px"}/>,
    <img src={PowerShell} alt="my" width={"30px"}/>,
    <img src={Data} alt="my" width={"30px"}/>,
    <img src={SQL} alt="my" width={"30px"}/>,
];

const languageLabels = ['Python', 'Ruby', 'JS', 'C++', 'C#', 'PHP', 'Kotlin', 'Java', 'Scala', 'Pascal', 'Swift', '.Net', 'PowerShell', 'Data', 'SQL'];

export default function ButtonBox(){

    return (
        <StyledBox style={{background: 'transparent'}}>
            {languageIcons.map((icon, value) =>
                    (<div>
                        <StyledSortButton id={value} value={languageLabels[value]} key={icon}>{icon}</StyledSortButton>
                        <div>{languageLabels[value]}</div>
                    </div>
                    ))}
        </StyledBox>
        )}