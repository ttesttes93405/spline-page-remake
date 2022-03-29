import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import 'normalize.css';




function App() {

    return (<>

        <Head>
            <title>Spline - Design tool for 3D web experiences</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='icon' type='image/png' href='/images/icon_favicon16x16.png' sizes='16x16' />
            <link rel='icon' type='image/png' href='/images/icon_favicon32x32.png' sizes='32x32' />
        </Head>

        <Header />
        <main>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </main>
        <Footer />

    </>)
}

export default App