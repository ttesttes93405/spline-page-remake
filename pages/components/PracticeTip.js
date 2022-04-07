import { useState } from "react";
import styled from "styled-components";
import { ReactSVG } from 'react-svg';

const PracticeTipContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: var(--color-white-080);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 16px;
    width: 350px;
    max-width: 100%;
    height: 50px;
    background-color: #0004;
    border-radius: 1rem;
    backdrop-filter: blur(24px);
    z-index: 2147480000;
    font-size: 0.85rem;
    font-family: SplineSans;

    button {
        position: absolute;
        right: 0;
        border-radius: 1rem;
        border-style: none;
        margin: 12px;
        width: 24px;
        height: 24px;
        cursor: pointer;
        background-color: #fff0;

        &:hover {            
            background-color: #fff1;
            svg {
                opacity: 1;
            }
        }

        .svg div {
            display: flex;
            fill: #fff;
        }

        svg {
            opacity: 0.6;
        }
    }


`;

function PracticeTip() {


    const [visible, setVisible] = useState(true);

    return (<>
        {visible && (<PracticeTipContainer>
            <span>This page is for practice. Not the official page.</span>
            <button onClick={() => setVisible(false)}>
                <ReactSVG src='./src/cross.svg' className='svg' />
            </button>
        </PracticeTipContainer>)}
    </>)
}

export default PracticeTip