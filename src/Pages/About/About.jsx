import React from 'react';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" align='center'>
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h6" align='center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam!
                </Typography>
                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: "#388BFF" }}>
                            <CardContent>
                                <Typography variant="h5" align='center'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil unde ducimus magni tempora optio iure quibusdam ea nemo atque iusto maiores deserunt! Corporis, in.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: "#FEC57B" }}>
                            <CardContent>
                                <Typography variant="h5" align='center'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil unde ducimus magni tempora optio iure quibusdam ea nemo atque iusto maiores deserunt! Corporis, in.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: "#B3DF72" }}>
                            <CardContent>
                                <Typography variant="h5" align='center'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil unde ducimus magni tempora optio iure quibusdam ea nemo atque iusto maiores deserunt! Corporis, in.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default About;