import { Grid2, styled, Container, Typography, Button } from "@mui/material"
import  Avatar  from "../../.././../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';


function Hero() {

    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>


                <Container maxWidth="lg">
                    <Grid2 container spacing={2}>

                        {/* Avatar */}
                        <Grid2 size={4} >
                            <StyledImg src={Avatar}/>
                        </Grid2>

                        <Grid2 size={8}>
                            
                            <Typography variant="h1" textAlign="center" color="primary.contrastText"> Rafael Soares de Paula Filho </Typography>
                            <Typography variant="h2" textAlign="center" color="primary.contrastText"> Desenvolvedor </Typography>
                                                        
                            {/* Botões */}
                            <Grid2 container display="flex" justifyContent="center">
                                {/* Botão Download */}
                                <Grid2 size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                                    <Button color="secondary" variant="outlined" ><DownloadIcon/>Download CV</Button>
                                </Grid2>

                                {/* Botão Email */}
                                <Grid2 size={{ xs:12, md:4 }} display="flex" justifyContent="center">
                                    <Button color="secondary" variant="outlined"><MailIcon/>Entre em contato</Button>
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
  