import { Typography } from "@mui/material";
import GiftBox from "../../components/GiftBox/GiftBox";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Screen from "../../components/Layout";

const MotionTypography = motion(Typography);

interface IntroProps{
    onFinish:()=>void;
    onStartMusic:()=>void;
}

export default function Intro({ 
    onFinish,
    onStartMusic, 
}:IntroProps) {

    const [showGift, setShowGift] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGift(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <Screen>
            <MotionTypography
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                sx={{
                    fontFamily: "'Dancing Script'",
                    color: "#F472B6",
                    fontSize: {
                        xs: "4rem",
                        md: "5rem",
                    },
                    mb: 2,
                }}
            >
                Hi...
            </MotionTypography>

            <MotionTypography
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: .6,
                    duration: .8,
                }}
                sx={{
                    color: "#4B4453",
                    fontSize: "1.3rem",
                    lineHeight: 1.8,
                }}
            >
                We have prepared
                <br />
                a little surprise
                <br />
                just for you.
            </MotionTypography>

            <AnimatePresence>
                {showGift && (
                    <GiftBox 
                        onOpen={()=>{ 
                            onStartMusic();
                            setTimeout(()=>{ onFinish(); },900); }}
                    />
                )}
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                    }}
                    style={{
                        marginTop: 24,
                        color: "#666",
                        fontSize: "1rem",
                        letterSpacing: 1,
                    }}
                >
                    Tap to Open
                </motion.p>
            </AnimatePresence>
        </Screen>
    );
}