import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, } from 'react';
import classNames from 'classnames';
import styled from "styled-components";
import Title from "./components/Title";
import Description from "./components/Description";
import { ReactSVG } from 'react-svg';


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

const SplineFrame = styled.div`

`;

const DragTip = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 24px 20px;
    color: var(--color-white-040);
    font-size: .875rem;
    background: #191a1ee0;
    backdrop-filter: blur(24px);
`

const SnippetContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    
    max-width: 23rem;
    min-width: 12.875rem;
    border-radius: 0.5rem;
    background-color: var(--color-panel-bg);
    padding: 0.75rem 0.75rem 2rem;
    margin: 16px;
    backdrop-filter: blur(2rem);

    code {
        display: block;
        margin-bottom: 8px;
    }
    
    .block {
        font-family: SplineSansMono;
        font-size: .6875rem;
        
        word-break: break-all;
        white-space: pre-wrap;
        line-height: 1rem;
    }

    .block-html-js {
        color: #9CDCFE;

        .operator {
            color: rgb(212, 212, 212)
        }
    }

    .block-iframe {
        color: #9CDCFE;

        .tag {
            color: rgb(78, 201, 176);
        }
        .attr-value {
            color: rgb(206, 145, 120);
        }

        .punctuation {
            color: rgb(212, 212, 212);
        }
        .attr-name{
            color: rgb(156, 220, 254);
        }
    }

    .block-react {
        color:#9CDCFE;

        .block {

        }

        .keyword.module{
            color: rgb(86, 156, 214);
        }

        .string {
            color: rgb(206, 145, 120);
        }

        .tag {
            color: rgb(78, 201, 176);
        }

        .tag.punctuation {
            color: rgb(212, 212, 212);
        }

        .function.maybe-class-name {
            color: rgb(220, 220, 170);
        }

        .keyword.control-flow {
            color: rgb(86, 156, 214);
        }

        .tag.class-name {
            color: rgb(78, 201, 176);
        }

        .attr-name {
            color: rgb(156, 220, 254);
        }

        .attr-value.punctuation.attr-equals {
            color: rgb(212, 212, 212);
        }

        .attr-value {
            color: rgb(206, 145, 120);
        }

    }

`;

const SnippetButtonContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    margin: 0.625rem 0.75rem;
    gap: 0.5rem;
    flex-gap: 0.5rem;


    button {
        width: 5.3125rem;
        height: 1.5rem;
        border: none;

        border-radius: 4px;
        font-size: 0.625rem;
        color: var(--color-white-040);
        background-color: var(--color-panel-bg);
    }
`;

const FrameworkView = styled.div`
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    canvas {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%!important;
        height: 100%!important;
        object-fit: cover;
    }
`;

const FrameworkList = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
`;

const FrameworkListContent = styled.div`
    margin: 0;
    margin-top: 1rem;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(5, 1fr);
    min-width: 100%;
`;

const FrameworkButton = styled.button`
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    color: var(--color-white-040);
    
    background-color: rgba(255,255,255,0.03);
    transition: background-color 0.2s ease;

    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;

    img, svg {
        width: 40px;
        height: 40px;
        margin-right: 0.75rem;
        border-radius: 0.416875rem;
        transition: background-color 0.2s ease;
    }

    P {
        margin: 0;
        padding: 0;
        font-size: .875rem;
    }

    &.selected {
        background-color: rgba(255,255,255, 0.06);

        img, svg {            
            background-color: var(--color-white-005);
        }
    }
`;


const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});


const iframeCodeEl = (<code className="block block-iframe" >
    <span className="token tag punctuation" >&lt;</span>
    <span className="token tag" >iframe </span>
    <span className="token tag attr-name" >src</span>
    <span className="token tag attr-value punctuation attr-equals" >=</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag attr-value" >https://my.spline.design/cubeaxiswebsiteupdatedinprod-c7eb2ea95c5e22c50b14b5333ee86583/</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag" > </span>
    <span className="token tag attr-name" >frameborder</span>
    <span className="token tag attr-value punctuation attr-equals" >=</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag attr-value" >0</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag" > </span>
    <span className="token tag attr-name" >width</span>
    <span className="token tag attr-value punctuation attr-equals" >=</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag attr-value" >100%</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag" > </span>
    <span className="token tag attr-name" >height</span>
    <span className="token tag attr-value punctuation attr-equals" >=</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag attr-value" >100%</span>
    <span className="token tag attr-value punctuation" >'</span>
    <span className="token tag punctuation" >&gt;</span>
    <span className="token tag punctuation" >&lt;/</span>
    <span className="token tag" >iframe</span>
    <span className="token tag punctuation" >&gt;</span>
</code>);
const iframeCodeCopyContent = `<iframe src='https://my.spline.design/cubeaxiswebsiteupdatedinprod-c7eb2ea95c5e22c50b14b5333ee86583/' frameborder='0' width='100%' height='100%'></iframe>`;

const frameworkData = [
    {
        icon: (<ReactSVG src='./src/htmljs.svg' />),
        title: 'HTML/JS',
        codeEl: (<code className="block block-html-js">
            <span className="token plain">https</span>
            <span className="token operator">:</span>
            <span className="token operator">/</span>
            <span className="token operator">/</span>
            <span className="token plain">my</span>
            <span className="token punctuation">.</span>
            <span className="token plain">spline</span>
            <span className="token punctuation">.</span>
            <span className="token plain">design</span>
            <span className="token operator" >/</span>
            <span className="token plain">cubeaxiswebsiteupdatedinprod</span>
            <span className="token operator" >-</span>
            <span className="token plain">c7eb2ea95c5e22c50b14b5333ee86583</span>
            <span className="token operator" >/</span>
        </code>),
        copyContent: `https://my.spline.design/cubeaxiswebsiteupdatedinprod-c7eb2ea95c5e22c50b14b5333ee86583/`,
    },
    {
        icon: (<ReactSVG src='./src/webflow.svg' />),
        title: 'Webflow',
        codeEl: iframeCodeEl,
        copyContent: iframeCodeCopyContent,
    },
    {
        icon: (<ReactSVG src='./src/react.svg' />),
        title: 'React',
        codeEl: (
            <code className="block-react">
                <div className="block">
                    <span className="token keyword module">{'import '}</span>
                    <span className="token maybe-class-name">{'Spline '}</span>
                    <span className="token keyword module">{'from '}</span>
                    <span className="token string">{"'@splinetool/react-spline'"}</span>
                    <span className="token punctuation">;</span>
                </div>
                <div className="block">
                    <span className="token plain">{'            '}</span>
                </div>
                <div className="block">
                    <span className="token plain"></span>
                    <span className="token keyword module">{'export '}</span>
                    <span className="token keyword module">{'default '}</span>
                    <span className="token keyword">{'function '}</span>
                    <span className="token function maybe-class-name">{'App'}</span>
                    <span className="token punctuation">{'('}</span>
                    <span className="token punctuation">{') '}</span>
                    <span className="token punctuation">{'{'}</span>
                </div>
                <div className="block"><span className="token plain">{'  '}</span>
                    <span className="token keyword control-flow">{'return '}</span>
                    <span className="token punctuation">{'('}</span>
                </div>
                <div className="block"><span className="token plain">{'    '}</span>
                    <span className="token tag punctuation">&lt;</span>
                    <span className="token tag">div</span>
                    <span className="token tag punctuation">&gt;</span>
                </div>
                <div className="block">
                    <span className="token plain-text">{'      '}</span>
                    <span className="token tag punctuation">&lt;</span>
                    <span className="token tag class-name">{'Spline '}</span>
                </div>
                <div className="block"><span className="token tag">{'      '}</span>
                    <span className="token tag attr-name">scene</span>
                    <span className="token tag attr-value punctuation attr-equals">=</span>
                    <span className="token tag attr-value punctuation">"</span>
                    <span className="token tag attr-value">https://prod.spline.design/</span>
                </div>
                <div className="block">
                    <span className="token tag attr-value">TRfTj83xgjIdHPmT/scene.spline</span>
                    <span className="token tag attr-value punctuation">"</span>
                </div>
                <div className="block">
                    <span className="token tag">{'      '}</span>
                    <span className="token tag punctuation">/&gt;</span>
                </div>
                <div className="block">
                    <span className="token plain-text">{'    '}</span>
                    <span className="token tag punctuation">&lt;/</span>
                    <span className="token tag">div</span>
                    <span className="token tag punctuation">&gt;</span>
                </div>
                <div className="block">
                    <span className="token plain">{'  '}</span>
                    <span className="token punctuation">)</span>
                </div>
                <div className="block">
                    <span className="token punctuation">{'}'}</span>
                </div>
            </code>),
        copyContent: `import Spline from '@splinetool/react-spline';

export default function App() {
    return (
    <div>
        <Spline 
        scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline"
        />
    </div>
    )
}`,
    },
    {
        icon: (<img src='https://spline.design/_next/static/chunks/images/typedream-d67d2587f93ffaa7b996cf17f5f32f69.png' />),
        title: 'Typedream',
        codeEl: iframeCodeEl,
        copyContent: iframeCodeCopyContent,
    },
    {
        icon: (<ReactSVG src='./src/wordpress.svg' />),
        title: 'Wordpress',
        codeEl: iframeCodeEl,
        copyContent: iframeCodeCopyContent,
    },
]

const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
}

function Section5() {

    const [selectIndex, setSelectIndex] = useState(0);
    const [spline, setSpline] = useState(null);
    const [foldSnippet, setfFoldSnippet] = useState(false);

    function handleLoad(e) {
        setSpline(e);
    }

    useEffect(() => {
        if (!spline) {
            return;
        }

        // console.log(spline);

    }, [spline]);



    return (<Section>
        <Title>Integrate your 3D designs with your pipeline</Title>
        <Description>
            Get your 3D scenes inside your web projects using simple embed code/snippets.
        </Description>

        <SplineFrame>
            <FrameworkView>
                <Spline
                    scene="/sences/scene_cube.spline"
                    style={{ display: 'flex', width: 1080, height: 512, overflow: 'hidden' }}
                    onLoad={handleLoad}
                />
                <DragTip>Drag the cube to interact with it</DragTip>
                <SnippetContainer>
                    {!foldSnippet && frameworkData[selectIndex].codeEl}
                    <SnippetButtonContainer>
                        <button onClick={()=>copyToClipboard(frameworkData[selectIndex].copyContent)}>Copy code</button>
                        <button onClick={() => setfFoldSnippet(!foldSnippet)}>{foldSnippet ? 'Toggle code' : 'Hide code'}</button>
                    </SnippetButtonContainer>
                </SnippetContainer>
            </FrameworkView>
            <FrameworkList>
                <FrameworkListContent>
                    {
                        frameworkData.map((d, index) => (<FrameworkButton
                            key={index}
                            className={classNames({ 'selected': selectIndex === index })}
                            onClick={() => { setSelectIndex(index) }}
                        >
                            {d.icon}
                            <p>{d.title}</p>
                        </FrameworkButton>))
                    }
                </FrameworkListContent>
            </FrameworkList>

        </SplineFrame>

    </Section>)
}

export default Section5