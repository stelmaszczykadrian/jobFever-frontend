import {ButtonBase} from "@mui/material";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {StyledPaper} from "./JobOfferGrid.styles";
import SingleOfferField from "./SingleOfferField";
import React, {useState} from "react";
import {useEmployerById} from "../../api/EmployersApi";
import axios from "axios";
import {StyledJobImage} from "../atoms/JobImage.styles";


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
            <StyledPaper onClick={() => handleJobClick()}>
                <Grid container spacing={2}>
                    <Grid item xs={4} container>
                        <Grid item>
                            <ButtonBase sx={{width: 128, height: 128}}>
                                <StyledJobImage alt="Employer logo" src={pictureUrl} />
                            </ButtonBase>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="h1" component="h1" style={{fontWeight: 'bold', color: "rgba(171, 36, 36)", fontSize: '25px'}}>
                                        {job.title}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom style={{fontWeight: 'bold', color: "black", fontSize: '15px'}}>
                                        {job.jobType}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" color="text.secondary" style={{fontWeight: 'bold', color: "black", fontSize: '15px'}}>
                                        {job.location}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="subtitle1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', color: "black" }}>
                            <SingleOfferField text={(job.technicalRequirements).join(", ")} />
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container direction="column" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle1" component="div" style={{textAlign: 'center', fontWeight: 'bold', color: "black"}}>
                                {job.salaryFrom} - {job.salaryTo} {job.currencyType}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div" style={{textAlign: 'center', fontWeight: 'bold', color: "black"}}>
                                {job.workType}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledPaper>
        );
    }

}