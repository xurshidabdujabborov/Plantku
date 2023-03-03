import React from "react";
import { Container, Grid } from "@mui/material";
import car from "../../assets/card.png";
import car1 from "../../assets/card 1.png";
import car2 from "../../assets/card 2.png";
import car3 from "../../assets/card 3.png";
import "./Main.css";

function Main() {
  return (
    <main>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={3} sm={6} xs={12}>
            <div className="card">
              <div className="flex">
                <img src={car} alt="" />
                <h5>Fast Delivery</h5>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </div>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <div className="card">
              <div className="flex">
                <img src={car1} alt="" />
                <h5>Fast Delivery</h5>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </div>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <div className="card">
              <div className="flex">
                <img src={car2} alt="" />
                <h5>Fast Delivery</h5>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </div>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <div className="card">
              <div className="flex">
                <img src={car3} alt="" />
                <h5>Fast Delivery</h5>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default Main;
