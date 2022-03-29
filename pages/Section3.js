function Section3() {

    const cardData = [
        {
            pic: 'https://spline.design/_next/static/chunks/images/feature_01-522ebe717ed8b8c642c163f8d6b4e4c7.webp',
            title: 'Realtime Collaboration',
            desc: 'Work with your team in real-time and set individual permissions.',
        },{
            pic: 'https://spline.design/_next/static/chunks/images/feature_02-dde565e95a8676e954b7708da99252a4.webp',
            title: '3D Modeling',
            desc: 'Parametric objects, polygonal editing, and more.',
        },{
            pic: 'https://spline.design/_next/static/chunks/images/feature_03-cb5b0cf06c153792fb7193e4f7bc9abf.webp',
            title: 'Animation',
            desc: 'Give life to your 3d objects.',
        },{
            pic: 'https://spline.design/_next/static/chunks/images/feature_04-838228ef78a8242fff54034149f8debc.webp',
            title: 'Interactive Experiences',
            desc: 'Enable interactivity on your objects.',
        },{
            pic: 'https://spline.design/_next/static/chunks/images/feature_05-34c091e0e37610cb3b2def618d413a65.webp',
            title: 'Materials',
            desc: 'Control the look of your scene.',
        },{
            pic: 'https://spline.design/_next/static/chunks/images/feature_06-52464f6d96674c02f4b2f33f4c6b8a0c.webp',
            title: '3D Sculpting',
            desc: 'Create organic shapes.',
        },
    ];


    return (<section>
        <h2>Tools that help you express your creativity</h2>
        <p>
            A solid set of features that will help you create your best designs.
        </p>
        <ul>
            {cardData.map(c => (<li>
                <img src={c.pic} />
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
            </li>))}
        </ul>
    </section>)
}

export default Section3