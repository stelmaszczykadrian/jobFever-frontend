import React, {useState} from 'react';
import {Box} from '@mui/material';
import {
    StyledTopBox,
    StyledLeftBox,
    StyledProfilePaper,
    StyledRightBox, StyledBottomBoxPersonalInfo
} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledPersonIcon} from "../atoms/StyledPersonIcon";
import {editCandidate, saveCandidatesCvFile, saveCandidatesImgFilename, useCandidateById} from "../../api/CandidateApi";
import EditableInput from "../atoms/EditableInput";
import Cookies from "js-cookie";
import {uploadFile} from "../../api/FilesApi";
import axios from "axios";
import {StyledProfilePhoto} from "../atoms/ProfilePhoto.styles";
import {StyledLinkedInIcon} from "../atoms/StyledLinkedinIcon";
import {StyledEmailIcon} from "../atoms/StyledEmailIcon";
import {StyledGithubIcon} from "../atoms/StyledGithubIcon";


export default function CandidateProfilePersonalInformation(props) {
    const {data, loading} = useCandidateById(props.id)
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('Name Surname');
    const [city, setCity] = useState('City');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
    const [email, setEmail] = useState('');
    const [github, setGitHub] = useState('https://github.com/');
    const [filename, setFilename] = useState("");
    const [previewPicture, setPreviewPicture] = useState(null);
    const [picture, setPicture] = useState();
    const [newPicture, setNewPicture] = useState();
    const [previewCv, setPreviewCv] = useState(null);
    const [cv, setCv] = useState();
    const [newCv, setNewCv] = useState(false);

    const getImgFile = async () => {
        try {
            if (filename) {
                const {data: response} = await axios.get('http://localhost:8080/api/file/url', {
                    params: {filename: filename},
                    headers: {
                        Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
                    }
                });
                setPicture(response);
            }
        } catch (error) {
            console.error(error)
        }
    };

    const handleEditClick = () => {
        setIsEdit(true);
    };

    const handleSaveClick = async () => {
        if (name && name.trim() !== '' && city && city.trim() !== '') {
            setIsEdit(false);
            const updatedCandidateData = {
                name: name,
                city: city,
                linkedin: linkedin,
                github: github,
                email : email
            };
            await editCandidate(props.id, updatedCandidateData);
            if (newPicture) {
                await uploadFile(newPicture);
                await saveCandidatesImgFilename(
                    JSON.parse(Cookies.get('jwt')).candidate_id,
                    newPicture.name
                );
            }
            if (newCv) {
                await uploadFile(cv);
                await saveCandidatesCvFile(
                    JSON.parse(Cookies.get('jwt')).candidate_id,
                    cv.name
                );
            }
        }
    };
    React.useEffect(() => {
        if (data) {
            setName(data.name);
            setEmail(data.email);
            setCity(data.city);
            setLinkedIn(data.linkedin);
            setGitHub(data.github);
            setFilename(data.imgFileName)
            setCv(data.cvFile)
        }
    }, [data]);

    const savePreviewPicture = (e) => {
        setPreviewPicture(URL.createObjectURL(e.target.files[0]));
        setNewPicture(e.target.files[0]);
    };

    const savePreviewCv = (e) => {
        setPreviewCv(URL.createObjectURL(e.target.files[0]));
        setCv(e.target.files[0]);
        setNewCv(true);
    };

    if (!loading) {
        getImgFile();
        const RenderEditIcons = () => {
            if (props.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()) {
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
        };
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
        };

        const RenderChangeCvButtons = () => {
            if (props.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()) {
                return (
                    isEdit ? (
                        <form encType="multipart/form-data">
                            <input type="file" accept=".pdf,.doc,.docx" name="cv" onChange={savePreviewCv}/>
                        </form>
                    ) : undefined
                )
            }
        };

        const RenderCv = () => {
            if (previewCv === null) {
                return (
                    <span>{cv}</span>
                )
            } else {
                return (
                    <span>{cv.name}</span>
                )
            }
        }

        const RenderProfilePicture = () => {
            if (previewPicture === null) {
                return (
                    <StyledProfilePhoto src={picture} alt="Profile"/>
                )
            } else {
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
                            <RenderProfilePicture/>
                            <RenderChangePhotoButtons/>
                        </Box>
                        {/* Name */}
                        <h3>Name</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={name || ""}
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
                                value={city || ""}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Localization"
                                isRequired
                            />
                        </Box>
                    </StyledLeftBox>
                    <StyledRightBox>
                        <Box mb={1}>
                            <StyledEmailIcon />
                            <EditableInput
                                isEdit={isEdit}
                                value={email || ""}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@email.com"
                                isRequired={false}
                            />
                        </Box>
                        <Box mb={1}>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer"><StyledLinkedInIcon /></a>
                            <EditableInput
                                isEdit={isEdit}
                                value={linkedin || ""}
                                onChange={(e) => setLinkedIn(e.target.value)}
                                placeholder="https://www.linkedin.com/"
                                isRequired={false}
                            />
                        </Box>
                        <Box mb={6}>
                            <a href={github} target="_blank" rel="noopener noreferrer"><StyledGithubIcon /></a>
                            <EditableInput
                                isEdit={isEdit}
                                value={github || ""}
                                onChange={(e) => setGitHub(e.target.value)}
                                placeholder="https://github.com/"
                                isRequired={false}
                            />
                        </Box>
                        <Box mb={10}>
                            <h3>CV file</h3>
                            <RenderCv/>
                            <RenderChangeCvButtons/>
                        </Box>
                        <Box>
                            {/* Edit button */}
                            <RenderEditIcons/>
                        </Box>
                    </StyledRightBox>
                </StyledBottomBoxPersonalInfo>
            </StyledProfilePaper>
        );
    }
    return <span>Loading</span>
}

