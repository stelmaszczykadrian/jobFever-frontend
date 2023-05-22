import {ButtonBase} from "@mui/material";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Square, StyledPaper, Text, Wrapper} from "./JobOfferGrid.styles";
import React, {useState} from "react";
import {useEmployerById} from "../../api/EmployersApi";
import axios from "axios";
import {StyledJobImage} from "../atoms/JobImage.styles";
import pin from "../../images/languages/pin.svg"
import contract from "../../images/languages/contract.svg"
import work from "../../images/languages/work.svg"

export default function JobOfferGrid({job, onClick}) {
    const {data, loading} = useEmployerById(job.employer_id);
    const [pictureUrl, setPictureUrl] = useState();
    const handleJobClick = () => {
        onClick(job.jobId);
    };
    if (!loading){
        const name = data.imgFileName
        const getFileByFilename = async () => {
            try {
                const {data: response} = await axios.get('http://localhost:8080/api/file/url', {
                    params: {filename: name},
                });
                setPictureUrl(response);
            } catch (error) {
                console.error(error)
            }
        };
        getFileByFilename()
        return (
            <StyledPaper onClick={() => handleJobClick()} style={{ marginRight: '1.5%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} container style={{ alignItems: 'center' }} >
                            <ButtonBase sx={{ marginBottom: '20px', width: 128, height: 128}}>
                                <StyledJobImage alt="Employer logo" src={pictureUrl} />
                            </ButtonBase>
                        <Grid item xs={8} container>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontWeight: 'bold',
                                            color: 'rgba(171, 36, 36)',
                                            fontSize: '20px',
                                            wordWrap: 'break-word',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {job.title}
                                    </Typography>
                                </Grid>
                                <Grid item style={{ display: 'flex', alignItems: 'center'}}>
                                    <Grid item style={{marginTop: '8%', display: 'flex', color: "black", fontSize: '14px'}}>
                                    <Text>
                                        <img src={pin} alt="my" width={"15px"}/>{job.location}
                                    </Text>
                                    </Grid>
                                    <Grid item style={{marginTop: '8%', display: 'flex', color: "black", fontSize: '14px'}}>
                                    <Text>
                                        <img src={contract} alt="my" width={"15px"}/>{ job.jobType}
                                    </Text>
                                    </Grid>
                                    <Grid item style={{marginTop: '8%', display: 'flex', color: "black", fontSize: '14px'}}>
                                    <Text sx={{marginLeft: '2px'}}>
                                            <img src={work} alt="my" width={"15px"} sx={{marginRight: '2px'}}/>{job.workType}
                                    </Text>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={7.8} container align-items direction="column" alignItems="right">
                        <Grid item sx={{marginTop: '0'}}>
                            <Typography variant="subtitle1" component="div" style={{ marginTop: '10px', marginBottom: '6%', textAlign: 'right', fontSize: '25px',fontWeight: 'bold', color: "rgba(171, 36, 36)"}}>
                                {job.salaryFrom} - {job.salaryTo} {job.currencyType}
                            </Typography>
                        </Grid>
                        <Grid item sx={{bottom: '0'}}>
                                <Wrapper style={{ bottom: '0', display: 'flex', flexWrap: 'wrap', width: '100%', textAlign: 'right' }}>
                                    {job.technicalRequirements.map(tech => (
                                        <Square key={tech}>
                                            <Text>{tech}</Text>
                                        </Square>
                                    ))}
                                </Wrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledPaper>
        );
    }

}