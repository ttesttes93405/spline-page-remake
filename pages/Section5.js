import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});


function Section5() {
    return (<section>
        <h2>Integrate your 3D designs with your pipeline</h2>
        <p>
            Get your 3D scenes inside your web projects using simple embed code/snippets.
        </p>
        <Spline scene="/sences/scene_cube.spline" style={{ width: 1080 }} />
    </section>)
}

export default Section5