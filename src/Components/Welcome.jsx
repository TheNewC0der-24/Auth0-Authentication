import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const Welcome = () => {

    const { loginWithRedirect } = useAuth0();


    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h4" align="center">Welcome to the React application.</Typography>
            <Typography variant="h6" align="center">Start your journey with us.</Typography>

            <Box sx={{ mt: 5, mb: 5, display: "flex", justifyContent: "center" }}>
                <Button
                    color="primary"
                    variant='contained'
                    onClick={() => loginWithRedirect()}
                >
                    Login
                </Button>
            </Box>
        </Box>
    )
}

export default Welcome;
