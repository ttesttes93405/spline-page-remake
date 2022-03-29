
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    z-index: 10;
`;

function Header() {
    return (<HeaderContainer>
        <nav>
            <ul>
                <li>
                    <a href='/'>
                        <img src='/images/spline_logo_32x32.png' />
                    </a>
                </li>
                <li>
                    <ul>
                        <li><a href="/#features">Features</a></li>
                        <li><a href="https://discord.gg/M9hNDMqvnw">Community</a></li>
                        <li><a href="https://twitter.com/splinetool">twitter</a></li>
                        <li><a href="https://docs.spline.design/">docs</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><a href="#download">Download</a></li>
                        <li><a href="https://app.spline.design">Open App</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </HeaderContainer>)
}

export default Header