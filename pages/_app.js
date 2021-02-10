import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <meta charSet='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      
      <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@500&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" media='screen' href="./css/style.css"/>
      <link rel="stylesheet" type="text/css" href="/css/hover.css" />
      <link rel="stylesheet" type="text/css" href="/css/animate.css" />
      <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
      <link rel="stylesheet" type="text/css" href="/css/style.css"/>
      <link rel="stylesheet" type="text/css" href="/css/responsive .css"/>
      <script type="text/javascript" src="js/scrispt.js"></script>
      <script src="/js/jquery.min.js"></script>
      <script src="/js/owl.carousel.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/waypoints.min.js"></script>
      <script src="/js/jquery.counterup.min.js"></script>
    </Head>
  
    <Component {...pageProps} />
  
  </div>
}

export default MyApp
