import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function Acting({ }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [activeIcon, setActiveIcon] = React.useState(null)
    const [reloadingGif, setReloadingGif] = React.useState({})

    React.useEffect(() => {
        if (activeIcon !== null) {
            setTimeout(() => setActiveIcon(null), 50)
            setTimeout(() => setReloadingGif(pv => ({ ...pv, [`${activeIcon}`]: false })), 2000)
        }
    }, [activeIcon])

    const mouseOverIcon = key => e => {
        console.log("key", key)
        console.log("reloadingGif", reloadingGif)

        if (!reloadingGif[key]) {
            setActiveIcon(key);
            setReloadingGif(pv => ({ ...pv, [`${key}`]: true }))
        }
    }

    return <div>

        <div id="acting">
            <div className="pontilhado">
                <img src="/images/Desktop/004_atuacao/textura_pontilhado_atuacao.png" />
            </div>
            <div className="actingText">
                <h1>
                    Para melhor atendê-los <br />
            atuamos em diversas áreas tecnológicas
        </h1>
            </div>

            <div className="box1">
                <div className="text-app">
                    <h1>Desenvolvimento de Aplicativos</h1>
                    <p>Seu projeto ou comécio eletrônico para mobile.</p>
                </div>
                <div onMouseOver={mouseOverIcon("icone-app")} className="icone-app">
                    {
                        activeIcon === "icone-app"
                            ? <img style={{ visibility: 'hidden' }} src="" />
                            : <img src="images/Desktop/004_atuacao/icones/animados/desktop/desenvolvimento-app-celular-bg-laranjado.gif" />
                    }
                </div>
                <div className="text-automacao">
                    <div onMouseOver={mouseOverIcon("icone-automacao")} className="icone-automacao">
                        {
                            activeIcon === "icone-automacao"
                                ? <img style={{ visibility: 'hidden' }} src="" />
                                : <img src="images/Desktop/004_atuacao/icones/animados/desktop/automacao-chip-bg-laranjado.gif" />
                        }
                    </div>
                    <div>
                        <h1>Automação</h1>
                        <p>Tecnologia para estruturar e casas inteligentes.</p>
                    </div>
                </div>
                <div className="text-suporte">
                    <h1>Suporte Técnico</h1>
                    <p>Confiabilidade e estabilidade para sistemas e redes.</p>
                </div>
                <div onMouseOver={mouseOverIcon("icone-suporte")} className="icone-suporte">
                    {
                        activeIcon === "icone-suporte"
                            ? <img style={{ visibility: 'hidden' }} src="" />
                            : <img src="images/Desktop/004_atuacao/icones/animados/desktop/suporte-tecnico-chave-wifi-bg-laranjado.gif" />
                    }
                </div>
            </div>

            <div className="box2">
                <div className="text-sistema">
                    <h1>Desenvolvimento de Sistemas</h1>
                    <p>Controle e agilidade para o seu negócio.</p>

                    <div onMouseOver={mouseOverIcon("icone-sistema")} className="icone-sistema">
                        {
                            activeIcon === "icone-sistema"
                                ? <img style={{ visibility: 'hidden' }} src="" />
                                : <img src="images/Desktop/004_atuacao/icones/animados/desktop/desenvolvimento-sistemas-tela-rede-bg-branco.gif" />
                        }
                    </div>
                </div>
                <div onMouseOver={mouseOverIcon("icone-gestao")} className="icone-gestao">
                    {
                        activeIcon === "icone-gestao"
                            ? <img style={{ visibility: 'hidden' }} src="" />
                            : <img src="images/Desktop/004_atuacao/icones/animados/desktop/gestao-projetos-ipad-bg-branco.gif" />
                    }
                </div>
                <div className="text-gestao">
                    <h1>Gestão de Projetos</h1>
                    <p>Melhore os resultados e alcance seus objetivos.</p>
                </div>
                <div className="text-consultoria">
                    <h1>Consultoria em Tecnologia</h1>
                    <p>Análise e proposta de soluções para a sua necessidade.</p>

                    <div onMouseOver={mouseOverIcon("icone-consultoria")} className="icone-consultoria">
                        {
                            activeIcon === "icone-consultoria"
                                ? <img style={{ visibility: 'hidden' }} src="" />
                                : <img src="images/Desktop/004_atuacao/icones/animados/desktop/consultoria-tecnologia-baloes-bg-branco.gif" />
                        }
                    </div>
                </div>
            </div>
            <div className="text-end">
                <h1>
                    Nosso maior objetivo é alcançar a satisfação <br />
            dos nossos clientes.
        </h1>
            </div>



        </div>

        
        <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">

            <div className="overlay"></div>


            <ol className="carousel-indicators">
                <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#bs-carousel" data-slide-to="1"></li>
                <li data-target="#bs-carousel" data-slide-to="2"></li>
            </ol>


            <div className="carousel-inner">

                <div className="item slides active">
                    <div class="slide-1"></div>
                    <div class="hero">
                        <hgroup>
                            <h1>Desenvolvimento de Aplicativos</h1>
                            <p>Seu projeto ou comécio eletrônico para mobile.</p>
                            <img src="images/Desktop/004_atuacao/icones/animados/desktop/desenvolvimento-app-celular-bg-laranjado.gif" />

                        </hgroup>
                    </div>
                </div>

                <div className="item slides">
                    <div className="slide-2"></div>
                    <div className="hero">
                        <hgroup>
                            <h1>Automação</h1>
                            <p>Tecnologia para estruturar e casas inteligentes.</p>
                            <img src="images/Desktop/004_atuacao/icones/animados/desktop/automacao-chip-bg-laranjado.gif" />
                        </hgroup>

                    </div>
                </div>

                <div className="item slides">
                    <div className="slide-3"></div>
                    <div className="hero">
                        <hgroup>
                            <h1>Suporte Técnico</h1>
                            <p>Confiabilidade e estabilidade para sistemas e redes.</p>
                            <img src="images/Desktop/004_atuacao/icones/animados/desktop/suporte-tecnico-chave-wifi-bg-laranjado.gif" />
                        </hgroup>

                    </div>
                </div>

                <div className="item slides">
                    <div className="slide-4"></div>
                    <div className="hero">
                        <hgroup>
                            <h1>Desenvolvimento de Sistemas</h1>
                            <p>Controle e agilidade para o seu negócio.</p>
                            <img src="images/Desktop/004_atuacao/icones/animados/desktop/desenvolvimento-sistemas-tela-rede-bg-branco.gif" />
                        </hgroup>

                    </div>
                </div>

                <div className="item slides">
                    <div className="slide-5"></div>
                    <div className="hero">
                        <hgroup>
                            <h1>Gestão de Projetos</h1>
                            <p>Melhore os resultados e alcance seus objetivos.</p>
                            <p>Confiabilidade e estabilidade para sistemas e redes.</p>
                            <img src="images/Desktop/004_atuacao/icones/animados/desktop/gestao-projetos-ipad-bg-branco.gif" />

                        </hgroup>

                    </div>
                </div>

                <div className="item slides">
                    <div className="slide-6"></div>
                    <div className="hero">
                        <hgroup>
                            <h1>Consultoria em Tecnologia</h1>
                            <p>Análise e proposta de soluções para a sua necessidade.</p>
                            <img src="images/Desktop/004_atuacao/icones/animados/desktop/consultoria-tecnologia-baloes-bg-branco.gif" />

                        </hgroup>

                    </div>
                </div>

            </div>
        </div>
    </div>

}
