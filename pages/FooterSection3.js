import styled from "styled-components";


const Section = styled.section`
    position: relative;
    width: 1080px;
    max-width: 100vw;
    /* margin: 0 auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-top: 7.5rem;
    padding-bottom: 3.5rem; */
    padding: 0;
    margin: 6.1875rem auto;

    p {
        color: var(--color-text-paragraph);
        line-height: 1.5;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    
    a {
        color: var(--color-text-paragraph);
        text-decoration: none;
    }

`;

function FooterSection3() {
    return (<Section>
        <p>
            {'©2022 - Spline, Inc.'}
            <br />
            <a href="https://www.notion.so/Spline-Terms-Conditions-7c93187dd5ba4749af8b61d792e4436a">Terms &amp; Conditions</a>
            {', '}
            <a href="https://www.notion.so/Spline-Privacy-Policy-69eb8efed8fe44418afaafa3e2d8156d">Privacy</a>
        </p>

    </Section>)
}

export default FooterSection3