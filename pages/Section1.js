import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const Section = styled.section`
    position: relative;
    max-height: 59.0625rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    max-width: 38.875rem;
    text-align: center;
    color: var(--color-text-main);
    font-weight: bold;
    
`;

const OpenAppButton = styled.a`
    padding: 1rem 2.625rem;
    background-color: var(--color-blue);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 0.75rem;
`;

const ControlTip = styled.div`
    position: absolute;
    bottom: 15%;
    border-radius: 2rem;
    height: 3.75rem;
    background-color: rgba(32,32,32,0.72);
    color: var(--color-text-main);
    backdrop-filter: blur(6.25rem);
    padding: 18px 30px;
    box-sizing: border-box;
    pointer-events: none;


`;

function Section1() {
    return (<Section>
        <Title>Spline, a place to design and collaborate in 3D.</Title>
        <OpenAppButton href="https://app.spline.design">Open App</OpenAppButton>
        <ControlTip>Press and drag to orbit</ControlTip>
        <Spline scene="/sences/scene_rabbit.spline" />
    </Section>)
}

export default Section1