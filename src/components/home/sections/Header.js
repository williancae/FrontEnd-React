import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typing, { Backspace, Delay, Reset, Speed } from '../../../uteis';

export default function Header({ }) {

    return <section id="header">

        <Grid container>
            <video autoPlay="autoPlay" loop="loop" muted>
                <source src="/images/Desktop/002_top_banner/top_banner.m4v" />
            </video>

            <div className="logo-banner">

                <img src="/images/Desktop/002_top_banner/logomarca_THIP_banner.png" />

            </div>
            <div className="banner-text">

            <Typing className="stypletext" speed={100}>
                A THIP cria soluções tecnológicas <br/>
                feitas especialmente para a SUA empresa.
                <Backspace count={76} delay={750} />
                A THIP cria soluções tecnológicas <br/>
                feitas especialmente para a SUA empresa.
            </Typing>

            </div>
        </Grid>





    </section>
}
