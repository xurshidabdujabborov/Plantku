import React from 'react'
import { Container , Grid } from '@mui/material'
import car4 from "../../assets/card 4.png"
import car5 from "../../assets/card 5.png"
import car6 from "../../assets/card 6.png"
import "./Plant.css"

function Plant() {
  return (
    <div className='Plant'>
        <Container maxWidth="xl">
            <Grid container alignItems={"center"}>
                <Grid items md={6} sm={6} xs={12}>
                    <div className="left">
                        <h4>Featured Plants</h4>
                    </div>
                </Grid>
                <Grid items md={6} sm={6} xs={12}>
                    <div className="right">
                        <select name="#" id="#">
                            <option value="#">Cheaper First</option>
                            <option value="#">Cheaper First</option>
                            <option value="#">Cheaper First</option>
                        </select>
                    </div>
                </Grid>
            </Grid>
            <hr />
            <Grid container alignItems={"center"}>
                <Grid items md={2} sm={6} xs={12}>
                    <div className="box">
                        <img src={car4} alt="" />
                        <p>Kaktus Plants</p>
                        <h4>IDR 85.000</h4>
                    </div>
                </Grid>
                <Grid items md={2} sm={6} xs={12}>
                    <div className="box">
                        <img src={car5} alt="" />
                        <p>Kaktus Plants</p>
                        <h4>IDR 85.000</h4>
                    </div>
                </Grid>
                <Grid items md={2} sm={6} xs={12}>
                    <div className="box">
                        <img src={car6} alt="" />
                        <p>Kaktus Plants</p>
                        <h4>IDR 85.000</h4>
                    </div>
                </Grid>
                <Grid items md={2} sm={6} xs={12}>
                    <div className="box">
                        <img src={car4} alt="" />
                        <p>Kaktus Plants</p>
                        <h4>IDR 85.000</h4>
                    </div>
                </Grid>
                <Grid items md={2} sm={6} xs={12}>
                    <div className="box">
                        <img src={car6} alt="" />
                        <p>Kaktus Plants</p>
                        <h4>IDR 85.000</h4>
                    </div>
                </Grid>
                <Grid items md={2} sm={6} xs={12}>
                    <div className="box">
                        <img src={car5} alt="" />
                        <p>Kaktus Plants</p>
                        <h4>IDR 85.000</h4>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Plant