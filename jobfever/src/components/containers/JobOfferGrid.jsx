import {ButtonBase, Paper, styled} from "@mui/material";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function JobOfferGrid() {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                mb: '10px',
                // maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="../../images/background_1.jpg" />
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
        </Paper>
    );
}