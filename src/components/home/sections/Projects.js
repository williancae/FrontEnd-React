import React, { useState } from 'react';
import Link from "next/link";
import axios from 'axios';

export default function Projects() {

    const [ depoinments, setDepoinments] = useState([])

    React.useEffect(() => {
        axios.get("http://localhost:8383/public/depoinments")
        .then((res) => {
        setDepoinments(res.data);
        console.log(res.data);
        });
   }, []);

    return <div id="minimal-bootstrap-carousel" data-ride="carousel" className="carousel slide carousel-fade shop-slider">


        <div role="listbox" className="carousel-inner" id="#inicio">
        <div style={{ backgroundPosition: 'center right' }} className='item active slide'>
                <div className="carousel-caption">
                    <div className="thm-container">

                        <div className="box valign-bottom">
           
                                <div className="content">

                                <div className="left-content">

                                    <img src="/images/Desktop/005_projetos/foto.png" />
                                    <h1>Thip</h1>
                                    <p>Thip Projetos</p>
                                </div>

                                <div className="right-content">

                                    <div className="img-aspas">
                                        <img src="/images/Desktop/005_projetos/aspas.png" />
                                        <h1>Lorem Ipson</h1>
                                        <p>Entre em contato com a thip</p>
                                       <button>
                                       <Link
                                        href={{
                                            pathname: "/projetos/",
                                            query: { id: "1" },
                                        }}
                                        >
                                        <a>Sobre o projeto</a>
                                        </Link>
                                       </button>
                                    </div>

                                </div>

                            </div>
                      
                        </div>

                    </div>
                </div>
            </div>  

             {depoinments.map((depoinments) => ( 
 <div style={{ backgroundPosition: 'center right' }} className='item slide'>
                <div className="carousel-caption">
                    <div className="thm-container">

                        <div className="box valign-bottom">
           
                                <div className="content">

                                <div className="left-content">

                                    <img src="/images/Desktop/005_projetos/foto.png" />
                                    <h1>{depoinments.person_name}</h1>
                                    <p>{depoinments.project_name}</p>
                                </div>

                                <div className="right-content">

                                    <div className="img-aspas">
                                        <img src="/images/Desktop/005_projetos/aspas.png" />
                                        <h1>{depoinments.title}</h1>
                                        <p>{depoinments.subtitle}</p>
                                       <button>
                                       <Link
                                        href={`/projetos/${depoinments.project_label}`}
                                        >
                                        <a>Sobre o projeto</a>
                                        </Link>
                                       </button>
                                    </div>

                                </div>

                            </div>
                      
                        </div>

                    </div>
                </div>
            </div>  
            ))} 
        </div>

        <a href="#minimal-bootstrap-carousel" role="button" data-slide="prev" className="left carousel-control"><i className="fa fa-angle-left"></i><span className="sr-only">Previous</span></a><a href="#minimal-bootstrap-carousel" role="button" data-slide="next" className="right carousel-control"><i className="fa fa-angle-right"></i><span className="sr-only">Next</span></a>
        
    </div>


}