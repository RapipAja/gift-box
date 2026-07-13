import { Box } from "@mui/material";
import type { ReactNode } from "react";
import Background from "../Background/Background";

interface ScreenProps {
    children: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
    return (
        <Background>
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 420,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Background>
    );
}