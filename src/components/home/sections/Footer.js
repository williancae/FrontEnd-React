import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function Footer({ }) {

    return <section id="footer">

        <div className="menu-footer">
            <Grid container justify="center">
                <Grid className="gridTop" xs="2"><a href="#">INICIAL</a></Grid>
                <Grid className="gridTop" xs="2"><a href="#">PROJETOS</a></Grid>
                <Grid className="gridTop" xs="2"><a href="#">SIGA-NOS</a></Grid>
                <Grid className="gridTop" xs="2"><a href="#">THIP SOLUÇÕES</a></Grid>
            </Grid>
        </div>

        <div className="option">

            <Grid className="itens" container justify="center">
                <Grid className="gridTop" xs="2">
                    <a href="#">SOBRE</a>
                </Grid>

                <Grid className="gridTop" xs="2">
                    {/* <li> <a href="#">Multflex</a> </li>
                    <li> <a href="#">Fabrika Filmes</a> </li> */}
                </Grid>

                <Grid className="gridTop" xs="2">
                    <li>
                        <img src="/images/Desktop/007_rodape/facebook_over.png" />
                        <a href="https://www.instagram.com/thipsolucoes/"> <img src="/images/Desktop/007_rodape/instagram_over.png"/> </a>
                    </li>
                </Grid>

                <Grid className="gridTop" xs="2">
                <li> <a target="_blank" href="mailto:comercial@thip.com.br">comercial@thip.com.br</a> </li>
                <li> <a target="_blank" href="tel:+5561981680369" >+55 61 98168-0369</a> </li>
                </Grid>
            </Grid>
        </div>
        <div className="redes">
            <Grid className="itens" container justify="center">
                <Grid xs="12">
                    <li>
                        <a href="https://www.facebook.com/thipsolucoes" target="_blank"><img src="/images/Desktop/007_rodape/facebook_over.png" /></a>
                        <a href="https://www.instagram.com/thipsolucoes" target="_blank"><img src="/images/Desktop/007_rodape/instagram_over.png"/> </a>
                    </li>
                </Grid>
                <Grid xs="12">
                    <li>
                        <li> <a target="_blank" href="comercial@thip.com.br">comercial@thip.com.br</a> </li>
                        <li> <a target="_blank" href="tel:+5561981680369" >+55 61 98168-0369</a> </li>
                    </li>
                </Grid>
            </Grid>
        </div>
        <clear />

        <div className="thipname">
            <a href="#">© 2021 Thip Soluções em Tecnologia LTDA </a>
        </div>
    </section>
}