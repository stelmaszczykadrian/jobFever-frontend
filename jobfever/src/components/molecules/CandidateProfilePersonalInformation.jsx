import React, {useState} from 'react';
import {Box} from '@mui/material';
import {
    StyledTopBox, StyledInput,
    StyledLeftBox,
    StyledProfilePaper,
    StyledRightBox, StyledBottomBoxPersonalInfo
} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledPersonIcon} from "../atoms/StyledPersonIcon";
import {editCandidate, saveCandidatesImgFilename, useCandidateById} from "../../api/CandidateApi";
import EditableInput from "../atoms/EditableInput";
import Cookies from "js-cookie";
import {uploadFile} from "../../api/FilesApi";
import axios from "axios";
import {StyledProfilePhoto} from "../atoms/ProfilePhoto.styles";


export default function CandidateProfilePersonalInformation(props) {

    const {data, loading} = useCandidateById(props.id)
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('Name Surname');
    const [city, setCity] = useState('City');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
    const [github, setGitHub] = useState('https://github.com/');
    const [filename, setFilename] = useState("");
    const [newPicture, setNewPicture] = useState();
    const [previewPicture, setPreviewPicture] = useState(null);
    const [picture, setPicture] = useState();

    const getFileByFilename = async () => {
        try {
            const {data: response} = await axios.get('http://localhost:8080/api/file/url', {
                params: {filename: filename},
                headers: {
                    Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
                }
            });
            setPicture(response);
        } catch (error) {
            console.error(error)
        }
    };

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveClick = async () => {
        if (name.trim() === '' || city.trim() === '') {
            return
        }
        setIsEdit(false);
        const updatedCandidateData = {
            name: name,
            city: city,
            linkedin: linkedin,
            github: github
        };
        await editCandidate(props.id, updatedCandidateData);
        uploadFile(newPicture)
        saveCandidatesImgFilename(JSON.parse(Cookies.get("jwt")).candidate_id, newPicture.name)
    };

    React.useEffect(() => {
        if (data) {
            setName(data.name);
            setCity(data.city);
            setLinkedIn(data.linkedin);
            setGitHub(data.github);
            setFilename(data.imgFileName)
        }
    }, [data]);

    const savePreviewPicture = (e) => {
        setPreviewPicture(URL.createObjectURL(e.target.files[0]))
        setNewPicture(
            e.target.files[0]
        )
    }

    if (!loading) {
        getFileByFilename()
        const RenderEditIcons = () => {
            if (props.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()){
                return (
                    isEdit ? (
                        <IconButton onClick={handleSaveClick}>
                            <StyledCheckIcon/>
                        </IconButton>
                    ) : (
                        <IconButton onClick={handleEditClick}>
                            <StyledEditIcon/>
                        </IconButton>
                    )
                )
            }
        }
        const RenderChangePhotoButtons = () => {
            if (props.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()) {
                return (
                    isEdit ? (
                        <form encType="multipart/form-data">
                            <input type="file" name="file" onChange={savePreviewPicture}/>
                        </form>
                    ) : undefined
                )
            }
        }
        const RenderProfilePicture = () => {
            if (previewPicture === null){
                return(
                    <StyledProfilePhoto src={picture} alt="Profile"/>
                )
            }else{
                return (
                    <StyledProfilePhoto src={previewPicture} alt="Profile"/>
                )
            }
        }
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <StyledPersonIcon/>
                    <ProfileContainerTitle text={'Personal information'}/>
                </StyledTopBox>
                <StyledBottomBoxPersonalInfo>
                    <StyledLeftBox>
                        {/* Photo */}
                        <Box mb={1}>
                            <RenderProfilePicture />
                        </Box>
                        <RenderChangePhotoButtons />
                        {/* Name */}
                        <h3>Name</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name Surname"
                                isRequired
                            />
                        </Box>
                        {/* City */}
                        <h3>Localization</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Localization"
                                isRequired
                            />
                        </Box>
                    </StyledLeftBox>
                    <StyledRightBox>
                        <h3>Social Links</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={linkedin}
                                onChange={(e) => setLinkedIn(e.target.value)}
                                placeholder="https://www.linkedin.com/"
                                isRequired={false}
                            />
                        </Box>
                        <Box mb={6}>
                            <EditableInput
                                isEdit={isEdit}
                                value={github}
                                onChange={(e) => setGitHub(e.target.value)}
                                placeholder="https://github.com/"
                                isRequired={false}
                            />
                        </Box>
                        <Box mb={8}>
                            <h3>CV file</h3>
                            <StyledInput>
                                <input type="file" accept=".pdf,.doc,.docx"/>
                            </StyledInput>
                        </Box>
                        <Box>
                            {/* Edit button */}
                            <RenderEditIcons />
                        </Box>
                    </StyledRightBox>
                </StyledBottomBoxPersonalInfo>
            </StyledProfilePaper>
        );
    }
    return <span>Loading</span>
}

