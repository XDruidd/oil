    import "./css/Card.css"
    import { Box, Rating, Typography } from "@mui/material";
    import type ICard from "./interface/ICard";
    import StarRoundedIcon from '@mui/icons-material/StarRounded';
    import Comentary from "../assets/svg/cometary.svg"
    import Planet from "../assets/svg/planet.svg"
    import Cart from "../assets/svg/shopping-cart.svg"
    import Hert from "../assets/svg/hert.svg"
    import Balance from "../assets/svg/balans.svg";

    function Card(_card : ICard){

        return(
            <>
                <Box sx={{
                        border: "1px solid #00000033",
                        maxWidth: "374px",
                        maxHeight: "370px",
                        width: "100%",
                        height: "100%",
                        borderRadius: "35px",
                        flex: "1 1 320px",
                        display: "flex", 
                        justifyContent: "space-between",
                        flexDirection: "column",
                    }}>
                        <Box sx={{padding:"0.5rem 1rem",}}>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{width: "70%", display: "flex", flexDirection: "column", gap:"10px"}}>
                                <Typography fontSize="18px" sx={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}
                                >
                                    {_card.name}
                                </Typography>
                                <Box sx={{display: "flex", maxHeight: "22px", alignItems: "center", gap:"12px"}}>
                                    <Rating
                                        name="text-feedback"
                                        value={_card.star}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarRoundedIcon style={{ opacity: 0.55 }} fontSize="inherit" sx={{width: "22px", maxHeight: "22px"}} />}
                                        icon={<StarRoundedIcon fontSize="inherit" sx={{width: "22px", maxHeight: "22px"}} />}
                                    />
                                    <Box sx={{display: "flex", gap:"2px"}}>
                                        <Box sx={{maxHeight: "22px"}}>
                                            <img src={Comentary} width="13px"/>
                                        </Box>
                                        <Typography sx={{color: "#14141280", fontSize: "15px"}}>
                                            {_card.comentary}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box >
                                    <Box sx={{display: "flex",alignItems:"center", gap:"5px"}}>
                                        {_card.country ? 
                                        <>
                                            <img src={_card.country.src} width="12px" height="12px" />
                                            <Typography fontSize="12px">{_card.country.name}</Typography>
                                        </> : 
                                        <>
                                            <img src={Planet} width="12px" height="12px" />
                                            <Typography fontSize="12px">All world</Typography>    
                                        </>
                                        }
                                    </Box>
                                    <Typography fontSize="24px" fontWeight={500}>{_card.price} UAH</Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                backgroundColor:"#141412",
                                borderRadius:"24px",
                                width:"48px", height:"48px",
                                justifyContent:"center", alignItems:"center"
                                }}
                                >
                                <img src={Cart}/>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent:"space-between"}}>
                            <Typography sx={{color:"#4B551E", fontSize: "10px"}}>{_card.isStoce ? <>It is available</> : <>It is unavailable</> }</Typography>
                            <Typography sx={{color:"#141412", fontSize: "10px"}}>code: {_card.code}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns  : "1fr 1fr 1fr",
                        border: "1px solid #00000033",
                        borderRadius: "35px",
                        margin:"0.4rem 0.4rem",
                        padding: "1rem",
                        maxHeight:"140px",
                        }}>
                        <Box sx={{display: "flex", flexDirection:"column", gap: "10px"}}>
                            <Box sx={{
                                display: "flex",
                                backgroundColor:"#14141280",
                                borderRadius:"24px",
                                width: "34px",
                                height: "34px",
                                justifyContent:"center", alignItems:"center"
                            }}>
                                <img src={Balance} width={18}/>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                backgroundColor:"#14141280",
                                borderRadius:"24px",
                                width: "34px",
                                height: "34px",
                                justifyContent:"center", alignItems:"center"
                            }}>
                                    <img src={Hert} width={18}/>
                            </Box>
                        </Box>
                        <Box>
                            <img src={_card.src}  height="140px"/>
                        </Box>
                        <Typography 
                            sx={{
                                display: "flex",
                                justifyContent:"end",
                                flexWrap:"nowrap",
                                whiteSpace: "nowrap"
                            }}
                            fontSize="12px"
                            color="#14141280"
                            >
                                id: {_card.id}
                        </Typography>
                    </Box>
                </Box>
            </>
        )
    }
    export default Card;