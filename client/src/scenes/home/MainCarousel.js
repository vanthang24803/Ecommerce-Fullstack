import React from 'react'
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";




const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px");
    return (
        <Carousel>
            
        </Carousel>
    )
}

export default MainCarousel
