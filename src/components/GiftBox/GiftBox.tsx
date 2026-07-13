import { motion } from "framer-motion";
import "./GiftBox.css";
import { useState } from "react";
import confetti from "canvas-confetti";

interface GiftBoxProps {
    onOpen?: () => void;
}

export default function GiftBox({ onOpen }: GiftBoxProps) {

    const [opened, setOpened] = useState(false);


    const handleOpen = () => {

        if (opened) return;
        setOpened(true);

        confetti({
            particleCount: 150,
            spread: 120,
            origin: {
                y: 0.6,
            },
        });

        setTimeout(() => {
            onOpen?.();
        }, 1200);
    };


    return (
        <motion.div
            className="gift-container"
            initial={{
                opacity: 0,
                y: 80,
                scale: .6,
            }}
            animate={
                opened
                    ? {
                        scale: 1.15,
                    }
                    : {
                        opacity: 1,
                        y: [0, -8, 0],
                        scale: 1,
                    }
            }
            transition={{
                opacity: {
                    duration: .6,
                },
                scale: {
                    duration: .6,
                },
                y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                },
            }}
            whileHover={{
                scale: 1.05,
                rotate: -3,
            }}
            whileTap={{
                scale: .95,
            }}
            onClick={opened ? undefined : handleOpen}
        >
            <div className={`gift-lid ${opened ? "open" : ""}`} />
            <div className="gift-box" />
            <div className="gift-ribbon-v" />
            <div className="gift-ribbon-h" />
        </motion.div>
    );
}