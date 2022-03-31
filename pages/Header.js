
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }
`;


const Nav = styled.nav`
    background-color: rgba(18,19,22,0.8);
    width: 100%;
    max-width: 48.75rem;
    height: 3.5rem;
    border-radius: 3.5rem;
    padding: 0.75rem;
    backdrop-filter: blur(24px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.a`    
    display: block;
    height: 32px;
`;


const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const LinkButton = styled.a`
    padding: 0 0.625rem;
    color: var(--color-text-navigation);
`;

const LinkButtonList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    width: 100%;
    flex-shrink: 1;
    flex-grow: 1;
    padding: 0.75rem;
    box-sizing: border-box;
`;

const RigthLinkList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    flex-shrink: 0;
    flex-grow: 0;
`;

const DownloadButton = styled.a`
    border-radius: 3.125rem;
    padding: 0.5rem 1.5rem;
    color: var(--color-text-navigation);
    border: 1px solid var(--color-white-005);
    white-space: nowrap;
    box-sizing: border-box;
`;

const OpenAppButton = styled.a`
    border-radius: 3.125rem;
    padding: 0.5rem 1.5rem;
    color: var(--color-text-navigation);
    border: 1px solid transparent;
    background-color: var(--color-white-005);
    white-space: nowrap;
    box-sizing: border-box;
`;


function Header() {
    return (<HeaderContainer>
        <Nav>
            <NavList>
                <li>
                    <Logo href='/'>
                        <img src='/images/spline_logo_32x32.png' />
                    </Logo>
                </li>
                <li>
                    <LinkButtonList>
                        <li><LinkButton href="/#features">Features</LinkButton></li>
                        <li><LinkButton href="https://discord.gg/M9hNDMqvnw">Community</LinkButton></li>
                        <li><LinkButton href="https://twitter.com/splinetool">Twitter</LinkButton></li>
                        <li><LinkButton href="https://docs.spline.design/">Docs</LinkButton></li>
                    </LinkButtonList>
                </li>
                <li>
                    <RigthLinkList>
                        <li><DownloadButton href="#download">Download</DownloadButton></li>
                        <li><OpenAppButton href="https://app.spline.design">Open App</OpenAppButton></li>
                    </RigthLinkList>
                </li>
            </NavList>
        </Nav>
    </HeaderContainer>)
}

export default Header