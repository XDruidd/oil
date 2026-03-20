import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
import Botl from "../assets/botl.png";
import pointerUp from "../assets/svg/pointerUp.svg";

function MegaCard() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #00000033",
            borderRadius: "40px",

            padding: { xs: "1.5rem", md: "2rem 3rem" },
            width: { xs: "100%", sm: "calc(50% - 10px)" }, 
            height: { xs: "280px", sm: "320px", md: "350px" }, 
            
            backgroundColor: "#fff",
            isolation: 'isolate',   
            position: "relative",
            boxSizing: "border-box",
            '&::before': {

                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${Botl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right center", 
                opacity: 0.7, 
                zIndex: -1,   
            }
            }}>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", maxWidth: "80%" }}>
                <Chip 
                    label="Design Shift" 
                    sx={{ 
                        mixBlendMode: 'difference',
                        backgroundColor: "rgba(94, 84, 0, 0.6)",
                        color: '#fff', 
                        height: '32px',
                        borderRadius: '16px',
                    }} 
                />
                <Chip label="Clear out noise" variant="outlined" sx={{ height: '32px', borderRadius: '16px', borderColor: "#4B551E", color: "#4B551E" }} />
                <Chip label="Lol" variant="outlined" sx={{ height: '32px', borderRadius: '16px', borderColor: "#4B551E", color: "#4B551E" }} />
            </Box>

            <Box sx={{ mt: 'auto', maxWidth: "100%" }}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                    <Typography  sx={{ 
                        fontSize: { 
                            xs: '28px',   
                            sm: '36px',
                            md: '48px'
                        },
                        width: "60%"
                        }}>
                        Extra <Box component="span" sx={{color:"#FFB3B3", mixBlendMode: 'difference',}}>Virgin</Box> <Box color={"#73843D"} component="span">Olive</Box> Oil
                    </Typography>
                    <IconButton 
                        sx={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: '#4B551E', 
                            color: '#fff',
                            zIndex: 2,
                            '&:hover': { backgroundColor: '#3d4518' }
                        }}
                    >
                        <img src={pointerUp} alt="up" /> 
                    </IconButton>
                </Box>
                <Divider sx={{ mb: 2, borderColor: '#00000022' }} />
                <Typography sx={{ 
                    fontSize: { xs: '12px', md: '14px' }, 
                    lineHeight: 1.4, 
                    color: '#333',
                    fontWeight: 400 
                }}>
                    Extra Virgin Olive Oil Planeta Val di Mazara is a versatile and high-quality product that can enhance the flavor of many dishes.
                </Typography>
            </Box>
        </Box>
    );
}
export default MegaCard;