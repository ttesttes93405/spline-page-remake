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
    padding: 1rem;
    padding-top: 7.5rem;
    padding-bottom: 3.5rem;

    video {
        display: block;
        width: 100%;
        height: auto;
        outline: none;
        border: none;
        border-radius: 1rem;
    }
`;


function Section2() {
    return (<Section>
        <Title>Designing in 3D has never been easier</Title>
        <Description>
            Create 3D scenes, edit materials and model 3D objects.<br />
            Control the outcome of your design work.
        </Description>
        <video
            autoPlay={true}
            playsInline={true}
            loop={true}
            muted={true}
            width={1080}
            height={634}
            src='https://cdn.spline.design/_assets/_videos/spline_beta_release.mp4'
            poster='./src/video_preview.jpg'
        />
    </Section>)
}

export default Section2