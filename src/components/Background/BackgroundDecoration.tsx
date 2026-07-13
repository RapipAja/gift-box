import { motion } from "framer-motion";

const decorations = [
    {
        left: "10%",
        top: "15%",
        icon: "💖",
        size: 26,
    },
    {
        left: "85%",
        top: "20%",
        icon: "✨",
        size: 22,
    },
    {
        left: "15%",
        top: "70%",
        icon: "🌸",
        size: 24,
    },
    {
        left: "80%",
        top: "80%",
        icon: "💖",
        size: 20,
    },
    {
        left: "50%",
        top: "8%",
        icon: "✨",
        size: 18,
    },
];

export default function BackgroundDecoration() {
    return (
        <>
            {decorations.map((item, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: "absolute",
                        left: item.left,
                        top: item.top,
                        fontSize: item.size,
                        opacity: 0.35,
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                    animate={{
                        y: [0, -12, 0],
                        rotate: [-5, 5, -5],
                    }}
                    transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {item.icon}
                </motion.div>
            ))}
        </>
    );
}