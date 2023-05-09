import React, {useState} from "react";
import {StyledBottomBox, StyledIconBox, StyledProfilePaper, StyledTopBox} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {Box} from "@mui/material";
import EmployerAboutUsModal from "./EmployerAboutUsModal";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {useEmployerById} from "../../api/EmployersApi";

export default function EmployerAboutUs(props) {
    const {data, loading} = useEmployerById(props.id)
    const [isEdit, setIsEdit] = useState(false);
    const [aboutUs, setAboutUs] = useState("");

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveEditClick = () => {
        setIsEdit(false);
    };
    React.useEffect(() => {
        if (!loading) {
            setAboutUs(data.aboutUs)
        }
    }, [data]);
    if (!loading) {

        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <ProfileContainerTitle text={'About Us'}/>
                    <StyledIconBox>
                        {/* Add button */}
                        <EmployerAboutUsModal id={props.id} text={'About Us..'} tag={<StyledAddIcon/>}/>
                    </StyledIconBox>
                </StyledTopBox>
                <StyledBottomBox>
                    {aboutUs}
                    <Box>
                        <StyledIconBox>
                            {/* Edit button */}
                            <EmployerAboutUsModal id={props.id} text={'About Us..'} tag={<StyledEditIcon/>}/>
                        </StyledIconBox>
                    </Box>
                </StyledBottomBox>
            </StyledProfilePaper>
        );
    }
}