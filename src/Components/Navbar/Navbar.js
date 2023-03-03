import React from "react";
import { Container, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/footer.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={4} sm={4} xs={4}>
            <div className="img">
              <img src={logo} alt="" />
            </div>
          </Grid>
          <Grid items md={8} sm={8} xs={8}>
            <div className="left">
              <SearchIcon />
              <ShoppingCartIcon />
              <a href="#">Sign Up</a>
              <button>Sign In</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Navbar;
