import { Badge, Box, Button, styled, Typography, type BadgeProps } from "@mui/material";
import PointerUp from "../assets/svg/pointerUp.svg"
import Reclam from "../assets/reclam.png"

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: "50%",
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function ReclamBlock(){
  return(
    <Box sx={{
        width: '100%',
        maxHeight: "185.6px",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Reclam})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: 'flex',
        alignItems: "center",
        paddingLeft: "10%",
        gap: 10, borderRadius:3
      }}>
      <Button disableRipple>
        <StyledBadge  
          badgeContent={
            <img src={PointerUp} style={{ width: '12px', height: '12px'}}/>
          }
          color="secondary"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#A1ABFF",
              border: "none",
              width: "clamp(30px, 4vw, 55px)", 
              height: "clamp(30px, 4vw, 55px)",
              minWidth: "unset",
              borderRadius: "50%",
            }
        }}
          >
          <Typography sx={{
                fontSize: "clamp(12px, 2vw, 28px)",

              textTransform: 'none',
              fontWeight: 500,
              backgroundColor:"#fff",
              color: "#000",
                padding: "clamp(10px, 1.5vw, 24px) clamp(20px, 3vw, 44px)",
              width: "100%",
              height: "100%",
              borderRadius: 25
            }}>
              Explore Now
            </Typography>
        </StyledBadge>
      </Button>
      <Typography justifyContent={"center"} color='#FFFFFF' fontSize={"clamp(2px, 3vw, 28px)"} width={"45%"} sx={{padding: "20px 10px"}}>
        The flinderfox breezes through neon twilight with adjustable pancake logic
      </Typography>
    </Box>
    )
}