import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

function Section1() {
    return (<section>
        <h1>Spline, a place to design and collaborate in 3D.</h1>
        <a href="https://app.spline.design">Open App</a>
        <div>Press and drag to orbit</div>
        <Spline scene="/sences/scene_rabbit.spline" />
    </section>)
}

export default Section1