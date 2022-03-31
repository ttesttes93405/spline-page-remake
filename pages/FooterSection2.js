import styled from "styled-components";


const Section = styled.section`
    position: relative;
    width: 1080px;
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-top: 7.5rem;
    padding-bottom: 3.5rem; */
    padding: 0;
`;

const SocialLinkList = styled.div`
    display: grid;

    grid-template-columns: repeat(5, 9.1875rem);
    grid-auto-rows: 4.75rem;
    max-width: 50.0625rem;

    grid-gap: 1rem;
    gap: 1rem;

`;

const SocialLinkButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    border: 1px solid var(--color-white-005);
    padding: 1rem 1.625rem;
    color: var(--color-white-060);
    grid-gap: 4px;
    gap: 4px;
    text-decoration: none;
    transition: background-color 0.2s ease;


    span {
        color: var(--color-white-060);
        margin-right: 0.5rem;
        transition: color 0.2s ease;
    }

    .emoji {
        color: var(--color-white);
        margin-right: 0;
    }


    &:hover {
        
        background-color: var(--color-panel-bg);
        
        span {
            color: var(--color-white);
        }
    }

`;

const socialLinkData = [
    {
        emoji: '🐦',
        title: 'Twitter',
        url: 'https://twitter.com/splinetool',
    },
    {
        emoji: '🌈',
        title: 'Instagram',
        url: 'https://instagram.com/splinetool',
    },
    {
        emoji: '🔴',
        title: 'Youtube',
        url: 'https://www.youtube.com/channel/UCjnuBkgYrryPxDuKz0eG09Q',
    },
    {
        emoji: '🎨',
        title: 'Tiktok',
        url: 'https://www.tiktok.com/@splinedesign',
    },
    {
        emoji: '🟣',
        title: 'Discord',
        url: 'https://discord.gg/M9hNDMqvnw',
    },
]


function FooterSection2() {
    return (<Section>
        <SocialLinkList>
            {socialLinkData.map((d, index) => (<SocialLinkButton key={index} href={d.url} target='_blank'>
                <span className='emoji'>{d.emoji}</span>
                <span>{d.title}</span>
            </SocialLinkButton>))}
        </SocialLinkList>
    </Section>)
}

export default FooterSection2