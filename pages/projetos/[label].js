import Menu from '../../src/components/home/sections/Menu'
import Footer from '../../src/components/home/sections/Footer'

import React, {useState} from 'react'

const ContentProject = () => {
    const [project, setProject] = useState({
        id: 1,
        label: 'projeto123',
        title: 'Projeto 123 - UEPAAA',
        header_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
        body: "Texto descritivo do projeto bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
        ],
        depointments: [{
            id: 1,
            title: "Achei top! Bacana! Lindo! Maravilhoso!",
            subtitle: "asdasdsadassd asdas as",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
            author_name: "Hugo Fagundes",
            project_title: "Projeto 123 - UEPAAA",
        }],})

    return (
    <div>
        
        </div>
    )


}
export default ContentProject
















// ------------------------- 
/* {
    id: 1,
    label: 'projeto123',
    title: 'Projeto 123 - UEPAAA',
    header_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
    body: "Texto descritivo do projeto bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
    ],
    depointments: [{
        id: 1,
        title: "Achei top! Bacana! Lindo! Maravilhoso!",
        subtitle: "asdasdsadassd asdas as",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png",
        author_name: "Hugo Fagundes",
        project_title: "Projeto 123 - UEPAAA",
    }],
}

 */

/* export default function Label(dados) {
    console.log(dados);
    return (
        <div>
            <Menu/>
            <h1>{dados.id}</h1>
            <h1>Ola</h1>
            <Footer/>

        </div>
    )
} */











































/* export async function getStaticProps({ params }) {

    const dados = await fetch(`http://localhost:8383/public/projects/${params.id}`)
   .then((respostaDoServer) => {
       if (respostaDoServer.ok) {
           return respostaDoServer.json();
       }
       throw new Error('Deu problema');
   })
   .then((respostaEmObjeto) => respostaEmObjeto)
    // Pass post data to the page via props
    return 
         props: {
             dados
         }
        }
  }

  export async function getStaticPaths() {

    return {
        paths: [
            {
                params:{
                    label: 'ola'
                }
            }
        ],
        fallback: false,
    }
  } */