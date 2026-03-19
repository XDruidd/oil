import "./css/Header.css"
import Box from '@mui/material/Box';
import Search from "../assets/svg/search.svg"
import Balance from "../assets/svg/balans.svg"
import WorkOutlineIcon from '../assets/svg/WorkOutlineIcon.svg';;
import Login from '../assets/svg/login.svg';
import Oui_arrowUp from '../assets/svg/oui_arrow-up.svg';
import LanguageIcon from '@mui/icons-material/Language';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'

interface HeaderProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function Header({ value, handleChange }: HeaderProps){
    const [open, setOpen] = useState(false);
    return(
        <>
            <header>
                <Box sx={{height: "48px", display: "flex", justifyContent:"space-between", padding:"0 2rem", gap:"20px", marginTop:"20px"}}>
                    <Box sx={{display: "flex", gap: {
                        xs: '0',  
                        sm: '20px',  
                        md: "120px",
                        lg: '210px'   
                    } }}>
                        <Box   
                            sx={{
                                '& .MuiTabs-indicator': { display: 'none' },
                                alignItems:"center",
                                display: { 
                                    xs: 'none', 
                                    '@media (min-width: 825px)': { display: 'flex' } 
                                } 
                            }}
                        >
                            <Typography 
                                sx={{  fontSize: { 
                                    xs: '20px',  
                                    sm: '20px',  
                                    md: "28",
                                    lg: '32px'   
                                } }}
                                className="logoTipe"
                            >
                                VivoOlio Market
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: { 
                                xs: 'none', 
                                '@media (min-width: 825px)': { display: 'flex' } 
                            } 
                            }}>
                            <Tabs value={value} onChange={handleChange} sx={{
                                '& .MuiTabs-flexContainer': { gap: '2vw' }, 
                                '& .MuiTabs-indicator': {
                                    backgroundColor: "#fff",
                                    transition: "none",
                                    bottom: '12px',
                                }
                                
                                }} >
                                <Tab disableRipple className="tab" value={0} label="oil"></Tab>
                                <Tab disableRipple className="tab" value={1} label="Cosmetics"></Tab>
                                <Tab disableRipple className="tab" value={2} label="Dishes"></Tab>
                                <Tab disableRipple className="tab" value={3} label="Competition"></Tab>
                                <Tab disableRipple className="tab" value={4} label="News"></Tab>
                            </Tabs>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', '@media (min-width: 825px)': { display: 'none' } } }}>
                            <IconButton onClick={() => setOpen(true)} sx={{ color: 'white', alignItems: "center" }}>
                                <MenuIcon />
                            </IconButton>
                            
                            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                            <List sx={{ width: 250 }} >
                                {['oil', 'Cosmetics', 'Dishes', 'Competition', 'News'].map((text) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton onClick={() => setOpen(false)}> 
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            </Drawer>
                        </Box>
                    </Box>
                    <Box sx={{display:"flex", alignItems:"center", gap: "50px"}}>
                        <Box>
                            <Stack direction="row" spacing="1px" sx={{ gap: '25px', display:"flex"}}>
                                <IconButton disableRipple sx={{ p: 0 }}>
                                    <img src={Balance} alt="balance" />
                                </IconButton>
                                <IconButton disableRipple sx={{ p: 0 }}>
                                    <img src={WorkOutlineIcon} alt="work" />
                                </IconButton>
                                <IconButton disableRipple sx={{ p: 0 }}>
                                    <img src={Login} alt="login" />
                                </IconButton>
                                <IconButton
                                sx={{ 
                                    display: { 
                                        xs: 'flex',
                                        margin: 0,
                                        padding: 0,
                                        '@media (min-width: 400px)': { display: 'none' } 
                                    } 
                                    }}
                                >
                                    <LanguageIcon sx={{color: "white"}}/>
                                </IconButton>
                            </Stack>
                        </Box>

                        <Box
                            sx={{ 
                            display: { 
                                xs: 'none', 
                                '@media (min-width: 400px)': { display: 'flex' } 
                            } 
                            }}
                        >
                            <Box sx={{color:"#fff", gap: "10px", display:"flex"}}>
                                <span>ENGLISH</span>
                                <Box sx={{width:"12px", height:"12px"}}>
                                    <img src={Oui_arrowUp}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{padding: "0 2rem"}}>
                    <label className="serch">
                        <Box className="search-button">
                            <img src={Search}/>
                        </Box>
                        <input type="text" placeholder="Search"/>
                    </label>
                </Box>
            </header>

        </>
    )
}
export default Header