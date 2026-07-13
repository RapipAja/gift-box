import { Box } from "@mui/material";
import type { ReactNode } from "react";

import BackgroundDecoration from "./BackgroundDecoration";

interface Props {
    children: ReactNode;
}

export default function Background({ children }: Props) {
    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                background:
                    "linear-gradient(180deg,#FFF7FA 0%, #FFEAF3 100%)",
            }}
        >
            <BackgroundDecoration />
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    height: "100%",
                }}
            >
                {children}
            </Box>
        </Box>
    );
}