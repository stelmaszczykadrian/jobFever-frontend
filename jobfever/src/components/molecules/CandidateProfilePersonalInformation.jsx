import React, {useState} from 'react';
import {Box} from '@mui/material';
import {
    StyledTopBox,
    StyledLeftBox,
    StyledProfilePaper,
    StyledRightBox, StyledBottomBoxPersonalInfo, StyledRightContentBox, StyledBoxElement
} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledPersonIcon} from "../atoms/StyledPersonIcon";
import {editCandidate, saveCandidatesCvFile, saveCandidatesImgFilename, useCandidateById} from "../../api/CandidateApi";
import EditableInput from "../atoms/EditableInput";
import {uploadFile} from "../../api/FilesApi";
import axios from "axios";
import {StyledProfilePhoto} from "../atoms/ProfilePhoto.styles";
import {StyledLinkedInIcon} from "../atoms/StyledLinkedinIcon";
import {StyledEmailIcon} from "../atoms/StyledEmailIcon";
import {StyledGithubIcon} from "../atoms/StyledGithubIcon";
import {useAuthorization} from "../../utils/AuthUtils";
import logo from "../../images/logos/profiledefaultlogo.png";
import {StyledLink} from "../atoms/StyledLink";


export default function CandidateProfilePersonalInformation(props) {
    const {data, loading} = useCandidateById(props.id)
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('Name Surname');
    const [city, setCity] = useState('City');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/in/');
    const [email, setEmail] = useState('');
    const [github, setGitHub] = useState('https://github.com/');
    const [picture, setPicture] = useState();
    const [newPicture, setNewPicture] = useState();
    const [cv, setCv] = useState();
    const [newCv, setNewCv] = useState();
    const {getAccessToken, getCandidateId} = useAuthorization();

    const getCvFile = async (filenameCv) => {
        try {
            const {data: cvUrl} = await axios.get('http://localhost:8080/api/file/url', {
                params: {filename: filenameCv},
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });
            setCv(cvUrl);
        } catch (error) {
            console.error(error);
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
                email: email
            };
            await editCandidate(props.id, updatedCandidateData);
            if (newPicture) {
                await uploadFile(newPicture);
                await saveCandidatesImgFilename(getCandidateId(), newPicture.name);
            }
            if (newCv) {
                await uploadFile(newCv);
                await saveCandidatesCvFile(getCandidateId(), newCv.name);
            }
        }
    };

    React.useEffect(() => {
        if (data
            && Object.keys(data).length > 0
            && Object.getPrototypeOf(data) === Object.prototype) {

            setName(data.name);
            setEmail(data.email);
            setCity(data.city);
            setLinkedIn(data.linkedin);
            setGitHub(data.github);
            if (data.picture) {
                setPicture(data.picture);
            } else {
                setPicture(logo);
            }
            if (data.cvFile) {
                getCvFile(data.cvFile);
            }
        }
    }, [data]);

    const savePicture = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]));
        setNewPicture(e.target.files[0]);
    };

    const savePreviewCv = (e) => {
        setCv(e.target.files[0]);
        setNewCv(e.target.files[0]);
    };

    const RenderEditIcons = () => {
        if (props.id === getCandidateId()) {
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
        if (props.id === getCandidateId()) {
            return (
                isEdit ? (
                    <form encType="multipart/form-data">
                        <input type="file" name="file" onChange={savePicture}/>
                    </form>
                ) : undefined
            )
        }
    };

    const RenderChangeCvButtons = () => {
        if (props.id === getCandidateId()) {
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
        if ((typeof cv) === "string") {
            const cvUrlName = cv || '';
            const cvFileName = cvUrlName.substring(cvUrlName.lastIndexOf('/') + 1, cvUrlName.lastIndexOf('?'));
            return (
                <StyledLink href={cv} download>{cvFileName}</StyledLink>
            )
        } else if (newCv) {
            const cvUrl = URL.createObjectURL(newCv)
            return (
                <StyledLink href={cvUrl} download>{newCv.name}</StyledLink>
            )
        }
    }

    const ValidateLinkedinLink = () => {
        if (linkedin && linkedin.startsWith("https://www.linkedin.com/in/")) {
            return linkedin;
        } else {
            return 'https://www.linkedin.com/in/' + linkedin;
        }
    }

    const ValidateGithubLink = () => {
        if (github && github.startsWith("https://github.com/")) {
            return github;
        } else {
            return 'https://github.com/' + github;
        }
    }

    if (!loading) {
        const validLinkedinHref = ValidateLinkedinLink();
        const validGithubHref = ValidateGithubLink();
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <StyledPersonIcon/>
                    <ProfileContainerTitle text={'Personal information'}/>
                </StyledTopBox>
                <StyledBottomBoxPersonalInfo>
                    <StyledLeftBox>
                        <Box mb={1}>
                            <StyledProfilePhoto src={picture} alt="Profile"/>
                            <RenderChangePhotoButtons/>
                        </Box>
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
                        <StyledRightContentBox>
                            <StyledBoxElement mb={2}>
                                <a href={`mailto:${email}`}><StyledEmailIcon/></a>
                                <EditableInput
                                    isEdit={isEdit}
                                    value={email || ""}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email@email.com"
                                    isRequired={false}
                                />
                            </StyledBoxElement>
                            <StyledBoxElement mb={2}>
                                <a href={validLinkedinHref} target="_blank"
                                   rel="noopener noreferrer"><StyledLinkedInIcon/></a>
                                <EditableInput
                                    isEdit={isEdit}
                                    value={linkedin || ""}
                                    onChange={(e) => setLinkedIn(e.target.value)}
                                    placeholder="https://www.linkedin.com/in/"
                                    isRequired={false}
                                />
                            </StyledBoxElement>
                            <StyledBoxElement mb={6}>
                                <a href={validGithubHref} target="_blank" rel="noopener noreferrer"><StyledGithubIcon/></a>
                                <EditableInput
                                    isEdit={isEdit}
                                    value={github || ""}
                                    onChange={(e) => setGitHub(e.target.value)}
                                    placeholder="https://github.com/"
                                    isRequired={false}
                                />
                            </StyledBoxElement>
                            <Box mb={1}>
                                <h3>CV file</h3>
                                <RenderCv/>
                                <RenderChangeCvButtons/>
                            </Box>
                        </StyledRightContentBox>
                        <Box>
                            <RenderEditIcons/>
                        </Box>
                    </StyledRightBox>
                </StyledBottomBoxPersonalInfo>
            </StyledProfilePaper>
        );
    }
    return <span>Loading</span>
}

