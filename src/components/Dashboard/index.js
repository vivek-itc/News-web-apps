import * as React from 'react';
import Box from '@mui/material/Box';
import YoutubeEmbed from "./../VideoFeed"
import "./styles.css";


export default function Dashboard() {
    return (
        <Box component="main" sx={{ p: 5 }}>
            <h1>Welcome to news app</h1>
            <YoutubeEmbed embedId="rokGy0huYEA" />
        </Box>
    )
}