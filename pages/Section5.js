import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, } from 'react';
import classNames from 'classnames';
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

    img {
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

        img {            
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

const frameworkData = [
    {
        icon: '',
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
    },
    {
        icon: '',
        title: 'Webflow',
        codeEl: iframeCodeEl,
    },
    {
        icon: '',
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
    },
    {
        icon: '',
        title: 'Typedream',
        codeEl: iframeCodeEl,
    },
    {
        icon: '',
        title: 'Wordpress',
        codeEl: iframeCodeEl,
    },
]


function Section5() {

    const [selectIndex, setSelectIndex] = useState(0);
    const [spline, setSpline] = useState(null);

    function handleLoad(e) {
        setSpline(e);
    }

    useEffect(() => {
        if (!spline) {
            return;
        }

        console.log(spline);

        const [width, height] = [1080, 512]

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
                    {frameworkData[selectIndex].codeEl}
                </SnippetContainer>
            </FrameworkView>
            <FrameworkList>
                <FrameworkListContent>
                    {
                        frameworkData.map((d, index) => (<FrameworkButton
                            className={classNames({ 'selected': selectIndex === index })}
                            onClick={() => { setSelectIndex(index) }}
                        >
                            <img src={d.icon} />
                            <p>{d.title}</p>
                        </FrameworkButton>))
                    }
                </FrameworkListContent>
            </FrameworkList>

        </SplineFrame>

    </Section>)
}

export default Section5