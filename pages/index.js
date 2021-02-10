import Head from 'next/head'
import Home from  '../src/components/home/Home';

export default function Content() {
  const title = "Thip - Soluções em Tecnologia"
  const description = 'A dica que faltava para seu negócio decolar!'
  const image = 'https://thip-assets.s3-sa-east-1.amazonaws.com/mail-assets/85621580181515413.png'
  
  return <div>
    <Head>
      <title>{title}</title>

      <meta property="title" content={title}/>
      <meta property="description" content={description}/>

      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
      <meta property="og:type" content="website"/>

      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
    </Head>
    
    <Home />
  </div>
}