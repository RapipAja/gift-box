import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";

import Intro from "./pages/Intro";
import Birthday from "./pages/Birthday/Birthday";
import Friends from "./pages/Friends/Friends";
import Ending from "./pages/Ending/Ending";

type Scene =
    | "intro"
    | "birthday"
    | "friends"
    | "ending";

export default function App() {
    const [scene, setScene] = useState<Scene>("intro");
    const audioRef = useRef(new Audio("/music/Music.mp3"));
    const [muted, setMuted] = useState(false);
    const [musicStarted, setMusicStarted] = useState(false);

    const toggleMute=()=>{
        const next=!muted;
        setMuted(next);
        audioRef.current.muted=next;
    }

    const startMusic = () => {
      audioRef.current.play();
      setMusicStarted(true);
    }
    
    useEffect(() => {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5 
        
        if(scene==="ending"){
          document.body.style.overflowY="auto";
        }
        else{
          document.body.style.overflow="hidden";
        }

    }, [scene]);

    return (
        <AnimatePresence mode="wait">
            {musicStarted && (
              <IconButton
                  onClick={toggleMute}
                  sx={{
                      position: "fixed",
                      top: 20,
                      left: 20,
                      zIndex: 9999,
                      bgcolor: "rgba(255,255,255,.75)",
                      backdropFilter: "blur(12px)",

                      "&:hover": {
                          bgcolor: "rgba(255,255,255,.95)",
                      },
                  }}
              >
                  {muted
                      ? <VolumeOffRoundedIcon />
                      : <VolumeUpRoundedIcon />}
              </IconButton>
            )}
            
            {scene === "intro" && (
                <Intro
                    key="intro"
                    onStartMusic={startMusic}
                    onFinish={() => setScene("birthday")}
                />
            )}

            {scene === "birthday" && (
                <Birthday
                    key="birthday"
                    onNext={() => setScene("friends")}
                />
            )}

            {scene === "friends" && (
                <Friends
                    key="friends"
                    onNext={() => setScene("ending")}
                />
            )}

            {scene === "ending" && (
                <Ending
                    key="ending"
                />
            )}
        </AnimatePresence>
    );
}