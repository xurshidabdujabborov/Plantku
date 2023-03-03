import React from 'react'
import { Container , Grid } from '@mui/material'
import fot from "../../assets/footer.png"
import "./Footer.css"

function Footer() {
  return (
    <footer>
        <Container maxWidth="xl">
            <Grid container >
                <Grid items md={3} sm={6} xs={12}>
                    <div className="left">
                        <img src={fot} alt="" />
                        <h5>Plantku House</h5>
                        <span>Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282</span>
                    </div>
                </Grid>
                <Grid items md={3} sm={6} xs={12}>
                    <ul>
                        <h5>Perusahaan</h5>
                        <li>
                            <a href="#">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="#">Hubungi Kami</a>
                        </li>
                    </ul>
                </Grid>
                <Grid items md={3} sm={6} xs={12}>
                    <ul>
                        <h5>Produk</h5>
                        <li>
                            <a href="#">Tanaman</a>
                        </li>
                        <li>
                            <a href="#">Tanaman Lain</a>
                        </li>
                    </ul>
                </Grid>
                <Grid items md={3} sm={6} xs={12}>
                    <div className="right">
                        <h5>Berlangganan Email Kami</h5>
                        <input type="text" placeholder='Masukan Alamat Email' />
                        <button>Submit</button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </footer>
  )
}

export default Footer