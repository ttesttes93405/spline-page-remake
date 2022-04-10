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
    padding: 7.5rem 0 3.5rem;
    
    @media screen and (max-width: 1080px) {
        padding: 7.5rem 1rem 3.5rem;
    }
`;

const CardContainer = styled.ul`
    display: grid;
    width: 100%;
    padding: 0;
    grid-template-columns: repeat(auto-fill,minmax(16.5rem,33rem));
    justify-content: center;
    grid-gap: 1.5rem;
    gap: 1.5rem;
    margin: 0;

    li {
        display: list-item;
        border-radius: 1rem;
        background-color: #181a1d;
        padding: 24px 0;
        list-style-type: none;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            height: 16.75rem;
            object-fit: cover;
            transition: transform .2s ease-out,-webkit-transform .2s ease-out;
            border: none;
        }

        &:hover img{
            transform: scale(1.03);
        }

        div {
            padding: 1.5rem 2rem;
            background-color: #181a1d;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: -3px;   
                height: 3px;
                background-color: #181a1d;
            }
        }

        h3 {
            font-size: 1rem;
            margin: 0;
            text-align: center;
            color: var(--color-text-main);
        }

        p {
            font-size: 1rem;
            margin: 0.5rem 0 0.75rem;
            text-align: center;
            color: var(--color-text-paragraph);
            line-height: 1.5;
        }
    }
`;


const cardData = [
    {
        pic: 'https://spline.design/_next/static/chunks/images/feature_01-522ebe717ed8b8c642c163f8d6b4e4c7.webp',
        title: 'Realtime Collaboration',
        desc: 'Work with your team in real-time and set individual permissions.',
    }, {
        pic: 'https://spline.design/_next/static/chunks/images/feature_02-dde565e95a8676e954b7708da99252a4.webp',
        title: '3D Modeling',
        desc: 'Parametric objects, polygonal editing, and more.',
    }, {
        pic: 'https://spline.design/_next/static/chunks/images/feature_03-cb5b0cf06c153792fb7193e4f7bc9abf.webp',
        title: 'Animation',
        desc: 'Give life to your 3d objects.',
    }, {
        pic: 'https://spline.design/_next/static/chunks/images/feature_04-838228ef78a8242fff54034149f8debc.webp',
        title: 'Interactive Experiences',
        desc: 'Enable interactivity on your objects.',
    }, {
        pic: 'https://spline.design/_next/static/chunks/images/feature_05-34c091e0e37610cb3b2def618d413a65.webp',
        title: 'Materials',
        desc: 'Control the look of your scene.',
    }, {
        pic: 'https://spline.design/_next/static/chunks/images/feature_06-52464f6d96674c02f4b2f33f4c6b8a0c.webp',
        title: '3D Sculpting',
        desc: 'Create organic shapes.',
    },
];

function Section3() {

    return (<Section id='features'>
        <Title>Tools that help you express your creativity</Title>
        <Description>
            A solid set of features that will help you create your best designs.
        </Description>
        <CardContainer>
            {cardData.map((c, index) => (<li key={index}>
                <img src={c.pic} />
                <div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                </div>
            </li>))}
        </CardContainer>
    </Section>)
}

export default Section3