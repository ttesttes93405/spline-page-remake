
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0.75rem;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    a {
        text-decoration: none;
    }

    .width100percent {
        width: 100%;
    }

    @media screen and (min-width: 780px) {
        top: 2rem;
    }

`;

const DropdownTrigger = styled(DropdownMenu.Trigger)`

    height: 40px;
    width: 40px;
    padding: 0.75rem;
    display: flex;
    border: none;
    background-color: var(--color-white-005);
    border-radius: 3.5rem;
    outline: none;
    .svg {
        opacity: 0.6;
        div {
            display: flex;
        }
    }

    
    @media screen and (min-width: 780px) {
        display: none;
    }
`;

const DropdownContent = styled(DropdownMenu.Content)`
    display: flex;
    flex-direction: column;
    width: 13rem;
    padding-top: 1rem;
    border-radius: 1rem;
    background-color: rgba(31,32,35, 0.8);
    z-index: 10;   
`;

const DropdownItem = styled(DropdownMenu.Item)`
    display: flex;
`;
const DropdownItemLink = styled.a`
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 1.5rem;
    text-align: left;
    color: var(--color-white-040);
    text-transform: capitalize;
    text-decoration: none;
    width: 100%;

    .svg {
        display: flex;
        opacity: 0.6;
    
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
    transition: background-color 0.2s ease;

    &.background-light {
        background-color: rgba(31,32,35,0.8);
    }
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
    /* justify-content: space-between; */
    justify-content: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const LinkButtonList = styled.ul`
    list-style-type: none;
    display: none;
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

    @media screen and (min-width: 780px) {
        display: flex;
    }
`;

const LinkButton = styled.a`
    padding: 0 0.625rem;
    color: var(--color-text-navigation);
    transition: color 0.2s ease;

    &:hover {
        color: var(--color-white);
    }
`;

const RigthLinkList = styled.ul`
    list-style-type: none;
    display: none;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    flex-shrink: 0;
    flex-grow: 0;
    
    @media screen and (min-width: 780px) {
        display: flex;
    }
`;

const DownloadButton = styled.a`
    border-radius: 3.125rem;
    padding: 0.5rem 1.5rem;
    color: var(--color-text-navigation);
    border: 1px solid var(--color-white-005);
    white-space: nowrap;
    box-sizing: border-box;
    transition: color 0.2s ease;

    &:hover {
        color: var(--color-white);
    }
`;

const OpenAppButton = styled.a`
    border-radius: 3.125rem;
    padding: 0.5rem 1.5rem;
    color: var(--color-text-navigation);
    border: 1px solid transparent;
    background-color: var(--color-white-005);
    white-space: nowrap;
    box-sizing: border-box;
    transition: background-color 0.2s ease;
    transition: color 0.2s ease;
    text-decoration: none;
    text-align: center;

    &:hover {
        color: var(--color-white);
    }

    &.open-app-button-light {        
        color: #fff;
        background-color: var(--color-blue);

        &:hover {
            background-color: var(--color-blue-dark);
        }
    }
`;

const DropDownOpenAppButton = styled(OpenAppButton)`
    margin: 1.5rem;
    width: 100%
`;


function Header() {


    const [backgroundLight, setBackgroundLight] = useState(false);
    const [openAppButtonLight, setOpenAppButtonLight] = useState(false);

    useEffect(() => {

        const handler = window.addEventListener('scroll', (e) => {

            const backgroundLightTriggerPos = 5;
            const isBackgroundLight = (document.body.scrollTop > backgroundLightTriggerPos || document.documentElement.scrollTop > backgroundLightTriggerPos)
            setBackgroundLight(isBackgroundLight);
            // console.log(isBackgroundLight)

            const openAppButtonLightTriggerPos = window.innerHeight;
            const isOpenAppButtonLight = (document.body.scrollTop > openAppButtonLightTriggerPos || document.documentElement.scrollTop > openAppButtonLightTriggerPos)
            setOpenAppButtonLight(isOpenAppButtonLight);
            // console.log(isOpenAppButtonLight)

        });

        return () => {
            window.removeEventListener('scroll', handler);
        }

    });



    return (<HeaderContainer>
        <Nav className={classNames({ 'background-light': backgroundLight })}>
            <NavList>
                <li>
                    <Logo href='/'>
                        <img src='/images/spline_logo_32x32.png' />
                    </Logo>
                </li>
                <li className='width100percent'>
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
                        <li><OpenAppButton href="https://app.spline.design" className={classNames({ 'open-app-button-light': openAppButtonLight })}>Open App</OpenAppButton></li>
                    </RigthLinkList>
                </li>
                <li>
                    <DropdownMenu.Root>

                        <DropdownTrigger>
                            <ReactSVG src='./src/hamburger.svg' />
                        </DropdownTrigger>

                        <DropdownContent sideOffset={20} side={'top'} >
                            <DropdownItem>
                                <DropdownItemLink href='#features'><span>Features</span></DropdownItemLink>
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownItemLink href='https://discord.gg/M9hNDMqvnw' target='_blank'>
                                    <span>Community</span>
                                    <ReactSVG src='./src/arrow-out-2.svg' className='svg' />
                                </DropdownItemLink>
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownItemLink href='https://twitter.com/splinetool' target='_blank'>
                                    <span>Twitter</span>
                                    <ReactSVG src='./src/arrow-out-2.svg' className='svg' />
                                </DropdownItemLink>
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownItemLink href='https://docs.spline.design/' target='_blank'>
                                    <span>Docs</span>
                                    <ReactSVG src='./src/arrow-out-2.svg' className='svg' />
                                </DropdownItemLink>
                            </DropdownItem>
                            <DropdownItem>
                                <DropDownOpenAppButton href="https://app.spline.design" className='open-app-button-light'>Open App</DropDownOpenAppButton>
                            </DropdownItem>
                        </DropdownContent>
                    </DropdownMenu.Root>

                    {/* <Menu menuButton={(<MenuButton>
                        <ReactSVG src='./src/hamburger.svg' className='svg' />
                    </MenuButton>)}>
                        <MenuItem>Cut</MenuItem>
                        <MenuItem>Copy</MenuItem>
                        <MenuItem>Paste</MenuItem>
                        <button>A</button>
                    </Menu> */}
                </li>
            </NavList>
        </Nav>
    </HeaderContainer >)
}

export default Header