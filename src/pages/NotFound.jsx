import { Box, Typography } from "@mui/material";

const NotFound = () => {
    return(
        <Box sx={{display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center', height:'86.7vh'}}>
            <Typography variant="h1">Are you lost?</Typography>
            <Typography variant="h3">The page you are looking for doesn&apos;t exist.</Typography>
        </Box>
    )
}
export default NotFound;