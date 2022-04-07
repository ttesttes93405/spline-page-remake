import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import PracticeTipContainer from './components/PracticeTip';
import 'normalize.css';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%
`;


function App() {

    return (<>

        <Header />
        <Main>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </Main>
        <Footer />
        <PracticeTipContainer />

    </>)
}

export default App