import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h4">
                Contact Us
            </Typography>

            <Box sx={{ mt: 5, display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            placeholder='Name'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            placeholder='Email'
                        />
                    </Grid>
                </Grid>
                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    multiline
                    rows={4}
                    placeholder='Message'
                />

                <Button sx={{ mt: 2 }} variant='contained'>
                    Send
                </Button>
            </Box>
        </Container>
    )
}

export default Contact;