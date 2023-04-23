import {ButtonBase} from "@mui/material";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Img, StyledPaper} from "./JobOfferGrid.styles";
import img from "../../images/logo.png";
import SingleOfferField from "./SingleOfferField";
import React from "react";

// export default function JobOfferGrid({job, onClick}) {
//     const handleJobClick = () => {
//         onClick(job.jobId);
//     };
//     return (
//         <StyledPaper onClick={() => handleJobClick()}>
//             <Grid container spacing={2}>
//                 <Grid item>
//                     <ButtonBase sx={{width: 128, height: 128}}>
//                         <Img alt="Employer logo" src={img}></Img>
//                     </ButtonBase>
//                 </Grid>
//                 <Grid item xs={12} sm container>
//                     <Grid item xs container direction="column" spacing={2}>
//                         <Grid item xs>
//                             <Typography variant="h1" component="h1">
//                                 {job.title}
//                             </Typography>
//                             <Typography variant="body2" gutterBottom>
//                                 {job.jobType}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {job.location}
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                     <Grid item>
//                         <Typography variant="subtitle1" component="div" style={{ textAlign: 'center', fontWeight: 'bold', color: "black" }}>
//                             {job.technicalRequirements}
//                         </Typography>
//                     </Grid>
//                     <Grid item>
//                         <Typography variant="subtitle1" component="div">
//                             {job.salaryFrom} - {job.salaryTo} {job.currencyType}
//                         </Typography>
//                         <Typography variant="subtitle1" component="div">
//                             {job.workType}
//                         </Typography>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </StyledPaper>
//     );
// }


export default function JobOfferGrid({job, onClick}) {
    const handleJobClick = () => {
        onClick(job.jobId);
    };
    return (
        <StyledPaper onClick={() => handleJobClick()}>
            <Grid container spacing={2}>
                <Grid item xs={4} container>
                    <Grid item>
                        <ButtonBase sx={{width: 128, height: 128}}>
                            <Img alt="Employer logo" src={img}></Img>
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