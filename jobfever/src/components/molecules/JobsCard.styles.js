import {Paper, styled} from "@mui/material";
import Typography from "@mui/joy/Typography";

export const StyledPaperJobsCard = styled(Paper)({
    padding: '16px',
    marginBottom: '5%',
    marginTop: '5%',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    '&:hover': {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
});

export const JobTitleOnJobsCard = styled(Typography)({
    fontWeight: 'bold',
    color: 'rgba(171, 36, 36)',
    fontSize: '20px',
});