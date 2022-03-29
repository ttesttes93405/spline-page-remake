import Head from 'next/head';


function App({ Component, pageProps }) {
    return (<>
        <Head>
            <title>Spline - Design tool for 3D web experiences</title>

            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='icon' type='image/png' href='/images/icon_favicon16x16.png' sizes='16x16' />
            <link rel='icon' type='image/png' href='/images/icon_favicon32x32.png' sizes='32x32' />

            <link rel="stylesheet" href="./style.css" />
            <link rel="preload" as="font" href="/fonts/SplineSans-Medium.woff2" crossorigin="" />
            <link rel="preload" as="font" href="/fonts/SplineSans-Regular.woff2" crossorigin="" />


        </Head>

        <Component {...pageProps} />
    </>)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App