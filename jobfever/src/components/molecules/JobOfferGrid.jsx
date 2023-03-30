import {ButtonBase} from "@mui/material";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Img, StyledPaper} from "./JobOfferGrid.styled";
import img from "../../images/logo.png";

export default function JobOfferGrid() {
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
                                Job offer title
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Job's position
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Location
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            Salary
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </StyledPaper>
    );
}