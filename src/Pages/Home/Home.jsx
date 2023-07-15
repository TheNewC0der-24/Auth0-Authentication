import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';

import image from '../../assets/marketing.svg';

const Home = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{ padding: "5rem", bgcolor: "#eee", mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={7} sx={{ margin: "auto" }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat ducimus veritatis quisquam deserunt vitae fugit, atque eum error unde molestias aliquam accusamus numquam? Eius!
                    </Typography>

                    <Button sx={{ mt: 3 }} variant="contained" color="primary" onClick={() => navigate("/about")}>
                        Learn More
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={5} sx={{ margin: "auto" }}>
                    <img src={image} alt="image" style={{ width: "100%", maxWidth: "400px" }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;