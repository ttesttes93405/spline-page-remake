import styled from "styled-components";
import Title from "./components/Title";
import Description from "./components/Description";
import classNames from "classnames";


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
    grid-template-columns: repeat(5, 12.6875rem);
    grid-auto-rows: 12.625rem;
    gap: 1rem;
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

const downloadIcon = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" id="download" ><path d="M7.9999 10.0001L5.17147 7.17169M7.9999 10.0001L10.8283 7.17169M7.9999 10.0001L7.99992 2.50004" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 10.5V11.5C2.5 12.6046 3.39543 13.5 4.5 13.5H11.5C12.6046 13.5 13.5 12.6046 13.5 11.5V10.5" stroke="white" stroke-linecap="round"></path></svg>);
const browerIcon = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" id="web"><circle cx="8" cy="8" r="6.5" stroke="white"></circle><path d="M2 8L14 8" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 8C10.5 9.8819 10.1721 11.5619 9.66175 12.7528C9.40618 13.3491 9.11471 13.7997 8.81652 14.094C8.52048 14.3862 8.24513 14.5 8 14.5C7.75487 14.5 7.47952 14.3862 7.18348 14.094C6.88529 13.7997 6.59382 13.3491 6.33825 12.7528C5.82788 11.5619 5.5 9.8819 5.5 8C5.5 6.1181 5.82788 4.43808 6.33825 3.24721C6.59382 2.65089 6.88529 2.20026 7.18348 1.90597C7.47952 1.6138 7.75487 1.5 8 1.5C8.24513 1.5 8.52048 1.6138 8.81652 1.90597C9.11471 2.20026 9.40618 2.65089 9.66175 3.24721C10.1721 4.43808 10.5 6.1181 10.5 8Z" stroke="white"></path></svg>);


const downloadData = [
    {
        url: 'https://app.spline.design',
        icon: browerIcon,
        title: 'Browser',
    },
    {
        url: 'https://cdn.spline.design/_assets/Spline-0.9.0-arm64.osx_update.zip',
        icon: downloadIcon,
        title: 'macOS (m1)',
    },
    {
        url: 'https://cdn.spline.design/_assets/Spline-0.9.0-x64.osx_update.zip',
        icon: downloadIcon,
        title: 'macOS (intel)',
    },
    {
        url: 'https://cdn.spline.design/_assets/spline-0.5.1-x64-setup.zip',
        icon: downloadIcon,
        title: 'Windows',
    },
    {
        url: 'https://cdn.spline.design/_assets/spline-0.5.1.linux.deb.zip',
        icon: downloadIcon,
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