import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import photos from "../../data/photos";

import "./Ending.css";



export default function Ending() {
    return (
        <Box className="ending">

            {/* HERO */}
            <Box className="hero">
                <Typography className="title">
                    One Last Surprise
                </Typography>

                <Typography className="subtitle">
                    we still have something for you ❤️
                    <br />
                    WKWKWK 😭👌
                </Typography>

            </Box>

            {/* FLOATING PHOTO */}
            <Box className="photo-area">
                {photos.map((photo, index) => (
                    <motion.img
                        key={index}
                        src={photo}
                        className="photo"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [-2, 2, -2],
                        }}
                        transition={{
                            duration: 5 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </Box>

            {/* VIDEO */}
            <Box className="video-section">
                <Typography className="video-title">
                    One Last Video 🎥
                </Typography>

                <video
                    controls
                    playsInline
                    className="video"
                    poster="/photos/photo1.png"
                >
                    <source
                        src="/video/Al-Video2.mp4"
                        type="video/mp4"
                    />
                </video>
            </Box>

            {/* FOOTER */}
            <Box className="footer">
                <Typography className="thanks">
                    Thank You ❤️
                </Typography>

                <Typography className="credit">
                    Made with love by #BUDEFAMILY
                </Typography>
            </Box>
        </Box>
    );
}