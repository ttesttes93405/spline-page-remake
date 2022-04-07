import Head from "next/head";


const data = {
    url: 'https://spline.design/',
    title: 'Spline - Design tool for 3D web experiences',
    desc: 'Create web-based 3D experiences',
    img: 'https://spline.design/_next/static/chunks/images/spline_image_banner-28a4c49c34a943e2cf79d9160f72585c.png'
}

function HeadContent() {

    return (<Head>
        
        <meta charset="utf-8" />

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' type='image/png' href='/images/icon_favicon16x16.png' sizes='16x16' />
        <link rel='icon' type='image/png' href='/images/icon_favicon32x32.png' sizes='32x32' />

        <title>{data.title}</title>
        <meta name="description" content={data.desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.url} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.desc} />
        <meta property="og:image" content={data.img} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={data.url} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.desc} />
        <meta name="twitter:image" content={data.img} />

        <link rel="stylesheet" href="./style.css" />
    </Head>)
}

export default HeadContent