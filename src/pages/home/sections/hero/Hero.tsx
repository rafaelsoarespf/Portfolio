import { Grid2, styled, Container, Typography, Box } from "@mui/material"
import  Avatar  from "../../.././../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";


function Hero() {

    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px",
        }
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px",
        }
    }))

    const StyledImg = styled("img")(()=> ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>


                <Container maxWidth="lg">
                    <Grid2 container spacing={2}>

                        {/* Avatar */}
                        <Grid2 size={{ xs:12, md:5 }} >
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground/>
                                </Box>
                                <Box position="relative" textAlign="center"><StyledImg src={Avatar}/></Box>
                            </Box>
                            
                        </Grid2>

                        <Grid2 size={7}>
                            
                            <Typography variant="h1" textAlign="center" color="primary.contrastText"> Rafael Soares de Paula Filho </Typography>
                            <Typography variant="h2" textAlign="center" color="primary.contrastText" paddingBottom={2}> Desenvolvedor </Typography>
                                                        
                            {/* Botões */}
                            <Grid2 container display="flex" justifyContent="center" spacing={3} paddingTop={3}>
                                {/* Botão Download */}
                                <Grid2 size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                                    <StyledButton><DownloadIcon/><Typography>Download CV</Typography></StyledButton>
                                </Grid2>


                                {/* Botão Email */}
                                <Grid2 size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                                    <StyledButton><MailIcon/><Typography>Entre em contato</Typography></StyledButton>
                                </Grid2>
                            </Grid2>
                        </Grid2>

                    </Grid2>
                </Container>
            </StyledHero>
        </>
    )
  }
  
  export default Hero
  