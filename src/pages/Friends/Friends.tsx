import { Box, Typography, Button, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import messages from "../../data/messages";
import Screen from "../../components/Layout";
import "./Friends.css";
import { motion } from "framer-motion";

interface FriendsProps {
    onNext?: () => void;
}

export default function Friends({ 
    onNext 
}: FriendsProps) {

    return (

        <Screen>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: -20,
                }}
                transition={{
                    duration: 0.8,
                }}
                style={{
                    width: "100%",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "'Dancing Script'",
                        color: "#F472B6",
                        fontSize: {
                            xs: "3rem",
                            md: "4rem",
                        },
                    }}
                >
                    Messages
                </Typography>

                <Typography
                    sx={{
                        mb:5,
                        color:"#777",
                    }}
                >
                    from #BUDEFAMILY 💌
                </Typography>

                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {
                        messages.map((item)=>(
                            <SwiperSlide
                                key={item.id}
                            >
                                <Box
                                    sx={{
                                        bgcolor: "rgba(255,255,255,.65)",
                                        backdropFilter: "blur(18px)",
                                        borderRadius: "28px",
                                        p: 4,

                                        height: {
                                            xs: "64vh",
                                            md: 460,
                                        },

                                        display: "flex",
                                        flexDirection: "column",

                                        border: "1px solid rgba(255,255,255,.6)",
                                        boxShadow: "0 20px 50px rgba(255,120,170,.15)",
                                    }}
                                >
                                <Box
                                    sx={{
                                        flex: 1,
                                        minHeight: 0,
                                        overflowY: "auto",
                                        pr: 1,

                                        "&::-webkit-scrollbar": {
                                            width: 6,
                                        },

                                        "&::-webkit-scrollbar-thumb": {
                                            background: "#F8A8C7",
                                            borderRadius: 999,
                                        },

                                        "&::-webkit-scrollbar-track": {
                                            background: "transparent",
                                        },
                                    }}
                                >
                                        <Typography
                                            sx={{
                                                fontSize: "2rem",
                                                mb: 3,
                                            }}
                                        >
                                            💌
                                        </Typography>

                                        <Typography
                                            sx={{
                                                whiteSpace: "pre-line",
                                                lineHeight: 1.5,
                                                fontSize: "16px",
                                                color: "#555",
                                            }}
                                        >
                                            {item.message}
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            mt: 2,
                                            pt: 2,
                                            borderTop: "1px solid rgba(0,0,0,.08)",

                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.5,

                                            flexShrink: 0,
                                        }}
                                    >
                                        {item.avatar && (
                                            <Avatar
                                                src={item.avatar}
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                }}
                                            />
                                        )}
                                        <Typography
                                            sx={{
                                                color: "#F472B6",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                    <SwiperSlide>
                        <Box
                            sx={{
                                bgcolor: "rgba(255,255,255,.65)",
                                backdropFilter: "blur(18px)",
                                borderRadius: "28px",
                                p: 4,
                                minHeight: 420,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                border: "1px solid rgba(255,255,255,.6)",
                                boxShadow:
                                    "0 20px 50px rgba(255,120,170,.15)",
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: "3rem",
                                }}
                            >
                                🎁
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 3,
                                    fontSize: "2rem",
                                    fontWeight: 700,
                                    color: "#F472B6",
                                }}
                            >
                                One Last Gift
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 2,
                                    color: "#666",
                                    lineHeight: 1.8,
                                }}
                            >
                                You've reached the last message.
                                <br />
                                But...
                                <br />
                                We still have one more surprise for you.
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={onNext}
                                sx={{
                                    mt: 5,
                                    bgcolor: "#F472B6",
                                    borderRadius: 999,
                                    px: 5,
                                    py: 1.5,
                                    textTransform: "none",
                                    "&:hover": {
                                        bgcolor: "#ec5ea8",
                                    },
                                }}
                            >
                                Open Surprise ❤️
                            </Button>

                        </Box>

                    </SwiperSlide>  
                </Swiper>
                <motion.div
                    animate={{
                        x: [-8, 8, -8],
                        opacity: [.4, 1, .4],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                    }}
                >

                    <Typography
                        sx={{
                            mt: 2,
                            color: "#999",
                        }}
                    >
                        ← Swipe →
                    </Typography>
                </motion.div>
            </motion.div>
        </Screen>
    );
}