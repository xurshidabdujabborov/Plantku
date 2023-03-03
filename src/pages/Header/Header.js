import React from 'react'
import { Container , Grid } from '@mui/material';
import navbar from "../../assets/navbar.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Header.css"

function Header() {
  return (
   <header>
    <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
            <Grid items md={6} sm={12}>
                <div className="img">
                    <img src={navbar} alt="" />
                </div>
            </Grid>
            <Grid items md={6} sm={12}>
                <div className="card">
                    <h1>Kembang Flower Mantap</h1>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <div className="flex">
                        <div className="nan">
                        <p> <ArrowBackIcon/> Previous</p>
                        <h4>Kaktus Plant</h4>
                        </div>
                        <div className="var">
                            <p>Next <ArrowForwardIcon/></p>
                            <h4>Rahasia Plant</h4>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    </Container>
   </header>
  )
}

export default Header