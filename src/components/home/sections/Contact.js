import React, { useState , useEffect } from 'react';
import { Grid } from '@material-ui/core';
import api from '../../../util/api';
import serverRequest from '../../../util/api';


const Contact = (props) => {

     const [values, setValues] = React.useState([])
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState(null)

     const handleChangeAccount = e => { 


          setValues({
            ...values,
            [e.target.name]: e.target.value 
          });
          console.log(values)
           
        }



        const submit = e => {
          setLoading(true)
          setError(null)
          
          serverRequest("POST", "/public/contact", ...values
          ).then(res => {
            setLoading(false)
          })
          .catch(err => {
            setLoading(false)
            setError(err.message)
          })
  
        
        }

  return (
     <section id="contact">
     <Grid className="contact-desktop" container justify="center">
          <Grid xs="6">
               <div className="box-form">

               <form autoComplete="off" noValidate className="contact-desktop">

                    <input
                         type="text"
                         name="name"
                         onChange={handleChangeAccount}
                         placeholder="Nome"
                         value={values.name}
                         required
                    ></input>
               
                    <input 
                         type="email" 
                         name="email"
                         onChange={handleChangeAccount}
                         placeholder="Email" 
                         value={values.email}

                         required
                    ></input>

                    <input 
                         type="text" 
                         name="phone"
                         onChange={handleChangeAccount}
                         placeholder="Telefone" 
                         value={values.phone}
                         required
                    ></input>

                    <textarea 
                         type="text"
                         name="messag"
                         onChange={handleChangeAccount}
                         value={values.message}
                         required
                    ></textarea>
               <div className="button-contato">
                    <button
                    disabled={Boolean(loading)} 
                    onClick={submit}
                    >Enviar</button>
               </div>
               
                    {error && <div style={{color: 'red',
                                     fontSize: 14,
                                     float:"right" ,
                                     padding: '10px 0 10px 0'}}>{error}</div>}                       

               </form>
               </div>
          </Grid>
          <Grid xs="6">
               <aside>

                    <div className="contactText">
                         <div className="texth1">
                              <h1>Entre em contato  <br />com a Thip</h1>
                         </div>

                         <div className="textp">
                              <p>
                                   Aqui é onde tudo começa! Agende uma visita ou <br />
                         vídeo-conferência e conte-nos um pouco mais <br />
                         sobre a sua empresa.
                    </p>
                         </div>

                    </div>
               </aside>
          </Grid>
     </Grid>

     <Grid container justify="center" className="contact-mobile">
          <div className="text-mobile-center">
          <Grid xs="6">
               <div className="h1-text">

                         <h1>Entre em contato  <br />com a Thip</h1>
               </div>
                   
          </Grid>
          <Grid>
               <div className="p">
                <p>
                    Aqui é onde tudo começa! Agende uma visita ou 
                    vídeo-conferência e conte-nos um pouco mais 
                    sobre a sua empresa.
               </p>
               </div>
          </Grid>
          </div>
          <Grid xs="12">
          <form className="form-mobile" method="POST">
                    <div className="contact-margin">
                         <input type="text" placeholder="Nome" ></input>
                         <input type="text" placeholder="Email" ></input>
                         <input type="text" placeholder="Telefone" ></input>
                         <textarea type="text" ></textarea>
                         <div className="butao-contato-mobile">
                              <button>Enviar</button>
                         </div>
                    </div>

          </form>

          </Grid>


     </Grid>




   </section>
                 
  );
};

export default Contact;
