function Section4() {

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

    return (<section>
        <h2>And there is more!</h2>
        <p>
            Spline is constantly growing just like the possibilities of what you can achieve.
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

export default Section4