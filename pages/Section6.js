import styled from "styled-components";
import Title from "./components/Title";
import Description from "./components/Description";
import classNames from "classnames";
import { ReactSVG } from 'react-svg'
// import { ReactComponent as DownloadIcon } from '../src/downloadIcon.svg'
// import { ReactComponent as BrowerIcon } from '../src/browerIcon.svg'

const Section = styled.section`
    position: relative;
    width: 1080px;
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7.5rem;
    padding-bottom: 3.5rem;
`;

const ButtonList = styled.div`
    display: grid;
    grid-auto-rows: 4rem;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    
    @media (min-width: 780px){
        grid-template-columns: 12.6875rem;
    }

    @media (min-width: 1080px){
        grid-auto-rows: 12.625rem;
        grid-template-columns: repeat(5, 12.6875rem);
        
    }
    
`;

const DownloadButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 0.9375rem 1.5rem;
    background: var(--color-btn-bg);
    color: var(--color-white-060);
    text-decoration: none;
    transition: background-color 0.2s ease;


    &:hover {
        background-color: var(--color-btn-bg-highlight);

        svg {
            opacity:1;
        }
        span {
            color: var(--color-white);
        }
    }

    .svg div {
        display: flex;
        justify-content: center;
    }

    svg {
        margin-right: 0.5rem;
        opacity: 0.6;
    }

    span { 
        margin-right: 0.5rem;
    }

    &.browser {
        background-color: var(--color-blue);
        color: var(--color-white);

        svg {
            opacity:1;
        }
        
        &:hover {
            background-color: var(--color-blue-dark);
            color: var(--color-white);
        }
    }
`;

const DownloadIcon = (<ReactSVG className='svg' src='./src/downloadIcon.svg'/>);
const BrowerIcon = (<ReactSVG className='svg' src='./src/browerIcon.svg'/>);

const downloadData = [
    {
        url: 'https://app.spline.design',
        icon: BrowerIcon,
        title: 'Browser',
    },
    {
        url: 'https://cdn.spline.design/_assets/Spline-0.9.0-arm64.osx_update.zip',
        icon: DownloadIcon,
        title: 'macOS (m1)',
    },
    {
        url: 'https://cdn.spline.design/_assets/Spline-0.9.0-x64.osx_update.zip',
        icon: DownloadIcon,
        title: 'macOS (intel)',
    },
    {
        url: 'https://cdn.spline.design/_assets/spline-0.5.1-x64-setup.zip',
        icon: DownloadIcon,
        title: 'Windows',
    },
    {
        url: 'https://cdn.spline.design/_assets/spline-0.5.1.linux.deb.zip',
        icon: DownloadIcon,
        title: 'Linux',
    },
];

function Section6() {

    return (<Section>
        <Title>Get Spline Now</Title>
        <Description>
            We would love to see what you can build with Spline!<br />
            Please tag us on Twitter or Instagram with your work.
        </Description>
        <ButtonList>
            {downloadData.map((d, index) => (<DownloadButton key={index} href={d.url} className={classNames(d.title.toLowerCase())}>
                {d.icon}
                <span>{d.title}</span>
            </DownloadButton>))}
        </ButtonList>
    </Section>)
}

export default Section6