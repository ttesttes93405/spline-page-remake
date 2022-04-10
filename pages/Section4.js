import styled from "styled-components";
import Title from "./components/Title";
import Description from "./components/Description";
import { ReactSVG } from 'react-svg'


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
    grid-template-columns: repeat(auto-fill,minmax(10.75rem,21.5rem));
    justify-content: center;
    grid-gap: 1.5rem;
    gap: 1.5rem;
    margin: 0;

    li {
        display: list-item;
        border-radius: 1rem;
        background-color: #181a1d;
        padding: 2rem;
        list-style-type: none;
        overflow: hidden;

        transition: background-color .2s ease;

        .icon-container {
            display: flex;
            width: 4.5rem;
            height: 4.5rem;
            margin: auto auto 1.5rem;
            justify-content: center;
            align-items: center;
            
            border-radius: 1rem;
            color: var(--color-white-040);
            background-color: var(--color-panel-bg);

            object-fit: cover;
            border: none;

            div {
                display: flex;
            }
        }

        &:hover{
            background-color: var(--color-btn-bg-highlight);

            svg {                
                color: var(--color-purple-bright);
            }
        }

        div {
            position: relative;
        }

        h3 {
            font-size: 1rem;
            margin: 0;
            text-align: center;
            color: var(--color-white-080);
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
        icon: "./src/folders.svg",
        title: "Teams, Projects & Folders",
        desc: "Create teams and organize your files in folders and projects."
    },
    {
        icon: "./src/image.svg",
        title: "Image Exports",
        desc: "Save your composition in high resolution JPGs & PNGs."
    },
    {
        icon: "./src/vertex.svg",
        title: "Polygonal Modeling",
        desc: "Model any type of objects with a range of different tools."
    },
    {
        icon: "./src/code.svg",
        title: "React Export",
        desc: "Quickly integrate your scene into your React projects."
    },
    {
        icon: "./src/sphere.svg",
        title: "Material Assets",
        desc: "Stay organized with assets, including textures and colors."
    },
    {
        icon: "./src/template-library.svg",
        title: "Templates Library",
        desc: "A repository of scenes, templates, and objects ready to use."
    },
    {
        icon: "./src/pen.svg",
        title: "Vector Editing",
        desc: "The vector tool you already know but in the 3D space."
    },
    {
        icon: "./src/camera.svg",
        title: "Camera Controls",
        desc: "Use cameras to control your scene composition."
    },
    {
        icon: "./src/events.svg",
        title: "Web Events",
        desc: "Create animations and interactions with events."
    }
];

function Section4() {
    return (<Section>
        <Title>And there is more!</Title>
        <Description>
            Spline is constantly growing just like the possibilities of what you can achieve.
        </Description>
        <CardContainer>
            {cardData.map((c, index) => (<li key={index}>
                <div className='icon-container'>
                    <ReactSVG src={c.icon} />
                </div>
                <div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                </div>
            </li>))}
        </CardContainer>
    </Section>)
}

export default Section4