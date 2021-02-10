import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default function CenteredGrid() {

    return (
        <div>
            <Grid id="differential" container justify="center">
                <Grid item xs={6}>

                    <div className="adaptabilidade-img">

                        <img className="borda1" src="/images/Desktop/003_diferencial_thip/borda_adaptabilidade.png" />
                        <img className="img-1" src="/images/Desktop/003_diferencial_thip/imagem_adaptabilidade.png" />

                    </div>

                </Grid>
                <Grid item xs={6}>

                    <div className="adaptabilidade-text">
                        <h1>Adaptabilidade</h1>
                        <p>
                            Cada empresa possui características distintas. Além de levar<br />
                            essa "personalidade" em conta, a Thip consegue propor <br />
                            diversos tipos de soluções adequadas para cada realidade <br />
                            sejam elas 100% digitais ou de estrutura tecnológica.
                            </p>
                    </div>

                </Grid>

                <Grid item xs={4}>
                    <div className="imersao-text1">

                        <h1>O diferencial THIP.</h1>

                    </div>
                </Grid>
                <Grid item xs={4}>

                    <div className="imersao-img1">

                        <img className="borda2" src="/images/Desktop/003_diferencial_thip/borda_imersao.png" />
                        <img className="img-2" src="/images/Desktop/003_diferencial_thip/imagem_imersao.png" />

                    </div>

                </Grid>

                <Grid item xs={4}>

                    <div className="imersao-text2">

                        <h1>Imersão</h1>
                        <p>
                            Acreditamos que ficar por dentro da empresa é fundamental para uma análize clara de <br />
                            como a tecnologia otimizará seus prcessos. A Thip atua não só remotamente mas <br />
                            tambem in loco , a fim de construir diagnósticos precisos.

                        </p>
                    </div>

                </Grid>

                <Grid item xs={6}>

                    <div className="disponibilidade-img">

                        <img className="borda3" src="/images/Desktop/003_diferencial_thip/borda_disponibilidade.png" />
                        <img className="img-3" src="/images/Desktop/003_diferencial_thip/imagem_disponibilidade.png" />

                    </div>

                </Grid>

                <Grid item xs={6}>

                    <div className="disponibilidade-text">

                        <h1>Disponibilidade</h1>
                        <p>
                            Também fazem parte de nossa estratégia acompanhar e registrar os resultados das <br />
                            melhorias em tempo real, mantendo o suporte ideal para os nossos clientes.
                        </p>
                    </div>

                </Grid>


            </Grid>





            <Grid id="differential-mobile" >

                <Grid>
                    <div className="imersao-text1-mobile">

                        <h1>O diferencial THIP.</h1>

                    </div>
                </Grid>

                <Grid>

                    <div className="adaptabilidade-img-mobile">

                        <img className="borda1" src="/images/Desktop/003_diferencial_thip/borda_adaptabilidade.png" />
                        <img className="img-1" src="/images/Desktop/003_diferencial_thip/imagem_adaptabilidade.png" />

                    </div>

                </Grid>
                <Grid>

                    <div className="adaptabilidade-text-mobile">
                        <h1>Adaptabilidade</h1>
                        <p>
                            Cada empresa possui características distintas. Além de levar
                            essa "personalidade" em conta, a Thip consegue propor
                            diversos tipos de soluções adequadas para cada realidade
                            sejam elas 100% digitais ou de estrutura tecnológica.
                            </p>
                    </div>

                </Grid>

                <Grid>

                    <div className="imersao-img1-mobile">

                        <img className="borda2" src="/images/Desktop/003_diferencial_thip/borda_imersao.png" />
                        <img className="img-2" src="/images/Desktop/003_diferencial_thip/imagem_imersao.png" />
                    </div>

                </Grid>

                <Grid>

                    <div className="imersao-text2-mobile">

                        <h1>Imersão</h1>
                        <p>
                            Acreditamos que ficar por dentro da empresa é fundamental para uma análize clara de <br />
                            como a tecnologia otimizará seus prcessos. A Thip atua não só remotamente mas <br />
                            tambem in loco , a fim de construir diagnósticos precisos.

                        </p>

                    </div>

                </Grid>

                <Grid>

                    <div className="disponibilidade-img-mobile">

                        <img className="borda3" src="/images/Desktop/003_diferencial_thip/borda_disponibilidade.png" />
                        <img className="img-3" src="/images/Desktop/003_diferencial_thip/imagem_disponibilidade.png" />

                    </div>

                </Grid>

                <Grid>

                    <div className="disponibilidade-text-mobile">

                        <h1>Disponibilidade</h1>
                        <p>
                            Também fazem parte de nossa estratégia acompanhar e registrar os resultados das <br />
                            melhorias em tempo real, mantendo o suporte ideal para os nossos clientes.
                        </p>
                    </div>

                </Grid>


            </Grid>


        </div>
    );
}
