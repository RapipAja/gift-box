import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import Screen from "../../components/Layout";
import birthday from "../../data/birthday";

interface BirthdayProps {
    onNext?: () => void;
}

export default function Birthday({ 
    onNext 
}: BirthdayProps) {


    return (
        <Screen>
            <Box
                onClick={onNext}
                sx={{
                    cursor: "pointer",
                    userSelect: "none",
                }}
            >
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Dancing Script'",
                            color: "#F472B6",
                            fontSize: {
                                xs: "3.5rem",
                                md: "5rem",
                            },
                        }}
                    >
                        Happy Birthday
                    </Typography>
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: .8,
                        duration: .8,
                    }}
                >
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: "2rem",
                            fontWeight: 600,
                            color: "#444",
                        }}
                    >
                        {birthday.name} ❤️
                    </Typography>
                </motion.div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.6,
                        duration: .8,
                    }}
                >
                    <Typography
                        sx={{
                            mt: 4,
                            color: "#666",
                            fontSize: "1.1rem",
                            lineHeight: 1.8,
                        }}
                    >
                        {birthday.intro}
                    </Typography>
                </motion.div>

                {/* Continue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        delay: 2.5,
                        duration: 1.6,
                        repeat: Infinity,
                    }}
                >
                    <Typography
                        sx={{
                            mt: 8,
                            color: "#999",
                            fontSize: ".95rem",
                        }}
                    >
                        Tap anywhere to continue
                    </Typography>
                </motion.div>
            </Box>
        </Screen>
    );
}