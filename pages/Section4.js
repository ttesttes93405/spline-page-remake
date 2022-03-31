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
    padding-bottom: 3.5rem;

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

        img {
            display: block;
            width: 4.5rem;
            height: 4.5rem;
            margin: auto auto 1.5rem;
            
            border-radius: 1rem;
            color: var(--color-white-040);
            background-color: var(--color-panel-bg);

            object-fit: cover;
            border: none;
        }

        &:hover{
            background-color: var(--color-btn-bg-highlight);
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
        "pic": "",
        "title": "Teams, Projects & Folders",
        "desc": "Create teams and organize your files in folders and projects."
    },
    {
        "pic": "",
        "title": "Image Exports",
        "desc": "Save your composition in high resolution JPGs & PNGs."
    },
    {
        "pic": "",
        "title": "Polygonal Modeling",
        "desc": "Model any type of objects with a range of different tools."
    },
    {
        "pic": "",
        "title": "React Export",
        "desc": "Quickly integrate your scene into your React projects."
    },
    {
        "pic": "",
        "title": "Material Assets",
        "desc": "Stay organized with assets, including textures and colors."
    },
    {
        "pic": "",
        "title": "Templates Library",
        "desc": "A repository of scenes, templates, and objects ready to use."
    },
    {
        "pic": "",
        "title": "Vector Editing",
        "desc": "The vector tool you already know but in the 3D space."
    },
    {
        "pic": "",
        "title": "Camera Controls",
        "desc": "Use cameras to control your scene composition."
    },
    {
        "pic": "",
        "title": "Web Events",
        "desc": "Create animations and interactions with events."
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
                <img src={c.pic} />
                <div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                </div>
            </li>))}
        </CardContainer>
    </Section>)
}

export default Section4