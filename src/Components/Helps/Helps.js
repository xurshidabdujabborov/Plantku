import React from "react";
import { Container, Grid } from "@mui/material";
import hel from "../../assets/helps.png"
import hel1 from "../../assets/helps 1.png"
import "./Helps.css";

function Helps() {
  return (
    <div className="Helps">
      <Container maxWidth="xl">
        <Grid container>
          <Grid items md={6} sm={12} xs={12}>
            <div className="card">
                <h2 className="title">Buy more plants, it helps you to be relaxed </h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</p>
                <img src={hel1} alt="" />
            </div>
          </Grid>
          <Grid items md={6} sm={12} xs={12}>
            <div className="img">
                <img src={hel} alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Helps;
