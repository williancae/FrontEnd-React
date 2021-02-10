import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';

function Project({ title, description, image }){
    const router = useRouter()

    const { label } = router.query

    const [project, setProject] = React.useState({})
    const [loadingProject, setLoadingProject] = React.useState(false)

    const loadProject = async () => {
        setLoadingProject(true)
        // const project = await axios.get(`/public/projects/${label}`)
        
        // setProject(project)
        setLoadingProject(false)
    }

    React.useEffect(() => {
        loadProject()
    }, [label])

    return <div>
        <Head>
            <title>{title}</title>

            <meta property="title" content={title}/>
            <meta property="description" content={description}/>

            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:type" content="project"/>

            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
        </Head>

        PROJETO LABEL: {label} 
    </div>
}

Project.getInitialProps = async ({req, query}) => {
    try{
        const { label } = query
        // const project = await axios.get(`/public/projects/${label}`)

        return {
            title: project.title,
            description: project.short_description,
            image: project.image || 'https://thip-assets.s3-sa-east-1.amazonaws.com/mail-assets/85621580181515413.png',
        }
    }catch(err){
        return {
            title: "Thip - Soluções em tecnologia",
            description: 'A dica que faltava para seu negócio decolar!',
            image: 'https://thip-assets.s3-sa-east-1.amazonaws.com/mail-assets/85621580181515413.png',
        }
    }
}

export default Project