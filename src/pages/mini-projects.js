import Image from "next/image"
import Link from "next/link"

const MiniProjects = () => {
    return (
        <div className="bg-secondary elevate-1 round-1 w-80p m-auto mv-3 p-2">
            <h2 className="c-semantic-primary t-center"> Mini Projects</h2>
            <div className="md-grid-2x1 lg-grid-3x1">
                {/* <section className="bg-secondary elevate-1 round-1 p-2 m-2">
                    <div className="m-auto">
                        <Image src="/images/empty.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href="">
                        <p className="f-3 c-semantic-primary fw-500 cursor"></p>
                    </Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span> </p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> </p>
                    <Link href=""><p className="cursor"><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span> </p></Link>
                </section> */}
                <section className="bg-secondary elevate-1 round-1 p-2 m-2 zoom">
                    <div className="m-auto">
                        <Image src="/images/country-app.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href="https://nextjs-country-app-project-95zwi2xl7-meshramsaroj.vercel.app/">
                        <p className="f-3 c-semantic-primary fw-500 cursor">Country App</p>
                    </Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span>Next.js, HTML, CSS, Styleguid</p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> WebAPI </p>
                    <Link href="https://github.com/meshramsaroj/nextjs-country-app-project"><p className="cursor"><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span> https://github.com/meshramsaroj/nextjs-country-app-project</p></Link>
                </section>
                <section className="bg-secondary elevate-1 round-1 p-2 m-2 zoom">
                    <div className="m-auto">
                        <Image src="/images/alan-ai-news-reader.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href="https://ai-news-reader-app.netlify.app/">
                        <p className="f-3 c-semantic-primary fw-500 cursor">Alan-AI News Reader App</p>
                    </Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span> Alan AI, React Hooks, Material UI</p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> WebAPI, Alan studio</p>
                    <Link href="https://github.com/meshramsaroj/Alan-AI-news-reader-app"><p className="cursor"><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span> https://github.com/meshramsaroj/Alan-AI-news-reader-app</p></Link>
                </section>
                <section className="bg-secondary elevate-1 round-1 p-2 m-2 zoom">
                    <div className="m-auto">
                        <Image src="/images/covid-tracker.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href=" https://tracker-app-covid-19.netlify.app/">
                        <p className="f-3 c-semantic-primary fw-500 cursor">Covid-19 Tracker App</p>
                    </Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span>  React Hooks, WebAPI, React Chart js, Material UI</p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> WebAPI</p>
                    <Link href="https://github.com/meshramsaroj/COVID-19-Tracker-app">
                        <p className="cursor"><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span> https://github.com/meshramsaroj/COVID-19-Tracker-app</p>
                    </Link>
                </section>
                <section className="bg-secondary elevate-1 round-1 p-2 m-2 zoom">
                    <div className="m-auto">
                        <Image src="/images/book-app.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href="https://react-context-hook-book-app.netlify.app/">
                        <p className="f-3 c-semantic-primary fw-500 cursor"> Book App</p>
                    </Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span> React context and Hooks, HTML, CSS</p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> localstorage</p>
                    <Link href="https://github.com/meshramsaroj/React-context-book-app"><p className="cursor"><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span> https://github.com/meshramsaroj/React-context-book-app</p></Link>
                </section>
                <section className="bg-secondary elevate-1 round-1 p-2 m-2 zoom">
                    <div className="m-auto">
                        <Image src="/images/image-search-app.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href="https://image-searcher-app.netlify.app/">
                        <p className="f-3 c-semantic-primary fw-500 cursor">Image-search-app</p>
                    </Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span> React Hooks, HTML, CSS</p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> Web API</p>
                    <Link href="https://github.com/meshramsaroj/Image-search-app"><p className="cursor"><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span> https://github.com/meshramsaroj/Image-search-app</p></Link>
                </section>
                <section className="bg-secondary elevate-1 round-1 p-2 m-2 zoom">
                    <div className="m-auto">
                        <Image src="/images/reciepe-app.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href="https://recipees-app.netlify.app/"><p className="f-3 c-semantic-primary fw-500 cursor">Recipe App</p></Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span> Reactjs,Typescript,CSS3</p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> RestAPI</p>
                    <Link href="https://github.com/meshramsaroj/recipee-app">
                        <p><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span><span className="cursor"> https://github.com/meshramsaroj/recipee-app</span></p>
                    </Link>
                </section>
                <section className="bg-secondary elevate-1 round-1 p-2 m-2 zoom">
                    <div className="m-auto">
                        <Image src="/images/calculator.png" className="w-100p" width="500px" height="250px" />
                    </div>
                    <Link href="https://meshramsaroj.github.io/myCalculator.github.io/">
                        <p className="f-3 c-semantic-primary fw-500 cursor">Calculator</p>
                    </Link>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Front-end:</span> HTML,CSS,Javascript</p>
                    <p><span className="f-2 fw-500 c-neutral-2 f-caps">Back-end:</span> </p>
                    <Link href="https://github.com/meshramsaroj/myCalculator.github.io"><p className="cursor"><span className="f-2 fw-500 c-neutral-2 f-caps">Github:</span> https://github.com/meshramsaroj/myCalculator.github.io</p></Link>
                </section>
            </div>
        </div>
    )
}

export default MiniProjects