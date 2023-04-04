import {ButtonBase} from "@mui/material";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Img, StyledPaper} from "./JobOfferGrid.styles";
import img from "../../images/logo.png";

export default function JobOfferGrid({job}) {
    console.log(job)

    return (
        <StyledPaper>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="Employer logo" src={img}></Img>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="h1" component="h1">
                                {job.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {job.jobType}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {job.location}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            {job.salaryFrom} - {job.salaryTo}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </StyledPaper>
    );
}