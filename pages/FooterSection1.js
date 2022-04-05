import styled from "styled-components";
import Title from "./components/Title";
import Description from "./components/Description";


const Section = styled.section`
    position: relative;
    width: 1080px;
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7.5rem;
    /* padding-bottom: 3.5rem; */
    padding-bottom: 32px;
`;

const ContactContainer = styled.div`
    display: grid;
    gap: 1rem;    
    grid-template-columns: 1fr;
    grid-auto-rows: 6.1875rem;
    width: 100%;
    justify-content: center;
    
    @media (min-width: 780px){
        grid-template-columns: 16.0625rem;
    }
    @media (min-width: 820px){
        grid-template-columns: repeat(3, 16.0625rem);
        grid-auto-rows: 8.125rem;
    }
    @media (min-width: 1080px){
        grid-template-columns: repeat(3, 16.0625rem);
        grid-auto-rows: 8.125rem;
    }
`;

const ContactButton = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 0.9375rem 1.5rem;
    background-color: var(--color-btn-bg);
    color: var(--color-white-060);
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    

    &:hover {
        background-color: var(--color-btn-bg-highlight);

        span {
            color: var(--color-white);
        }
    }

    span {
        color: var(--color-white-060);
        transition: color 0.2s ease;
    }

    .emoji {
        color: var(--color-white);
        font-size: 1.5rem;
    }


`;


const contactData = [
    {
        emoji: '💌',
        desc: 'hello@spline.design',
        url: 'mailto:hello@spline.design',
    },
    {
        emoji: '🖐',
        desc: 'help@spline.design',
        url: 'mailto:help@spline.design',
    },
    {
        emoji: '👩‍💻',
        desc: 'jobs@spline.design',
        url: 'mailto:jobs@spline.design',
    },
];

function FooterSection1() {
    return (<Section>
        <Title>We are starting (and hiring!) 🤓</Title>
        <Description>
            Feel free to reach out if you need help or you want to connect!<br />
            Also, if you are a Developer or Designer and you want to get involved, write us at:
        </Description>
        <ContactContainer>
            {contactData.map((d, index) => (<ContactButton key={index} herf={d} target='_blank'>
                <span className='emoji'>{d.emoji}</span>
                <span>{d.desc}</span>
            </ContactButton>))}
        </ContactContainer>
    </Section>)
}

export default FooterSection1