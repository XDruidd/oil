import { Box, Tab, Tabs, Typography } from "@mui/material";
import "./css/Footer.css"
import Visa from "../assets/svg/visa.svg"
import Master from "../assets/svg/logos_mastercard.svg"
import Aple from "../assets/svg/logos_apple-pay.svg"
import Google from "../assets/svg/logos_google-pay.svg"

import ApleStore from "../assets/svg/appStore.svg"
import GooglePlay from "../assets/svg/googlePlay.svg"

import YouTube from "../assets/svg/icomoon-free_youtube.svg"
import TickTok from "../assets/svg/mingcute_tiktok-fill.svg"
import Instagram from "../assets/svg/formkit_instagram.svg"
import FaceBook from "../assets/svg/ic_outline-facebook.svg"

interface HeaderProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function Footer({ value, handleChange }: HeaderProps){
    return(
        <>
            <footer>
                <Box sx={{padding:"3rem", display:{sm: "block",md: "flex" }, justifyContent: "space-between"}}>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: {
                        md: 20
                    }
                  }}>
                    <Box display={"flex"} flexDirection={"column"} gap={5}>
                        <Box sx={{
                                '& .MuiTabs-indicator': { display: 'flex' },
                                alignItems:"center",
                                display: { 
                                    xs: 'flex', 
                                    '@media (min-width: 825px)': { display: 'flex' } 
                                }
                            }}
                        >
                            <Typography  
                                sx={{  fontSize: { 
                                    xs: '20px',  
                                    sm: '20px',  
                                    md: "28px",
                                    lg: '32px'   
                                } }}
                                className="logoTipe"
                            >
                                VivoOlio Market
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", 
                            }}>
                            <Tabs value={value} onChange={handleChange} sx={{
                                '& .MuiTabs-flexContainer': { gap: '2vw', flexWrap: "wrap",}, 
                                '& .MuiTabs-indicator': {
                                    backgroundColor: "#fff",
                                    transition: "none",
                                    bottom: '12px',
                                    display: 'none', 
                                }
                                
                                }} >
                                <Tab disableRipple className="tab" value={0} label="oil"></Tab>
                                <Tab disableRipple className="tab" value={1} label="Cosmetics"></Tab>
                                <Tab disableRipple className="tab" value={2} label="Dishes"></Tab>
                                <Tab disableRipple className="tab" value={3} label="Competition"></Tab>
                                <Tab disableRipple className="tab" value={4} label="News"></Tab>
                            </Tabs>
                        </Box>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap: 2.5
                    }}>
                        <Box sx={{
                            display:"flex",
                            gap: 2.5,
                        }}>
                            <Box><img src={Visa} alt="" /></Box>
                            <Box><img src={Master} alt="" /></Box>
                            <Box><img src={Aple} alt="" /></Box>
                            <Box><img src={Google} alt="" /></Box>
                        </Box>
                        <Box sx={{
                            display:"flex",
                            gap: 2.5,
                            flexWrap: "wrap"
                        }}>
                            <Box sx={{
                                background: "#FFFFFF33",
                                borderRadius: "50px",
                                padding: "8px 30px"
                            }}>
                                <img src={GooglePlay} alt="" height={35} width={125} />
                            </Box>
                            <Box sx={{
                                background: "#FFFFFF33",
                                borderRadius: "50px",
                                padding: "8px 30px"
                            }}>
                                <img src={ApleStore} alt="" height={35} width={125}/>
                            </Box>
                        </Box>
                    </Box>
                  </Box>
                  <Box sx={
                    {
                        display: {
                            sm: "block",
                            md: "flex"
                        },
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }
                  }> 
                    <Box sx={{
                        display: "flex",
                        gap: 2,
                        textAlign: "center",
                        flexWrap: "wrap"
                    }}>
                        <Typography>About us</Typography>
                        <Typography>News blog</Typography>
                        <Typography>Privacy policy</Typography>
                        <Typography>Current policy</Typography>
                        <Typography>Contacts</Typography>
                        <Typography>Term of sale</Typography>
                        <Typography>Term of use</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent:"space-between"}}>
                        <Box>
                            <Typography fontSize={20} color="#FFFFFF8C">Social medias</Typography>
                            <Box sx={{
                                display: "flex",
                                gap: 1.5
                            }}>
                                <img src={FaceBook} alt="" />
                                <img src={YouTube} alt="" />
                                <img src={Instagram} alt="" />
                                <img src={TickTok} alt="" />
                            </Box>
                        </Box>
                        <Box sx={
                            {
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "end",
                                color: "#FFFFFF8C",
                            }
                        }>
                            <Typography>©VivoOlio 2024</Typography>
                            <Typography>Усі права захищені</Typography>
                        </Box>
                    </Box>
                  </Box>
                </Box>
            </footer>
        </>
    )
}
export default Footer;