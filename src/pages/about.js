import AboutStyle from "../styles/About.module.css"
import Image from "next/image";
import FacebookIcon from '@material-ui/icons/Facebook';
import Email from '@material-ui/icons/Email';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from "@material-ui/icons/GitHub";


const About = () => {
    return (
        <div className="h-60p rel pt-4">
            <div className="bg-secondary w-70p m-auto elevate-1 round-2">
                <div className={AboutStyle.profile + " md-m-auto -md-mt-70px md-abs t-center"}>
                    <Image src="/images/profile-photo.jpg" alt="profile-photo" className="w-100p round-4 elevate-1" width="150px" height="130px" />
                </div>

                <div className="p-3 md-pt-4 t-center">
                    <h3 className="c-semantic-primary m-0 t-center">Saroj Meshram</h3>
                    <h4 className="c-neutral-2 f-3 mt-0px f-caps t-center">Fullstack developer</h4>
                    <p className="f-2 md-ph-5 c-semantic-primary">
                        <span className="f-3 fw-500 pb-1 d-block"> Hello,</span> <br />
                        I'm Saroj Meshram from Nagpur,<br />
                        I have 2.5 + years of experience as a full-stack developer.<br />
                    </p>
                    <p className="f-2 md-ph-5 c-semantic-primary">
                        My area of expertise is designing and developing responsive and scalable web applications using frontend technologies like HTML, CSS, Javascript, React, and NextJs
                        I also worked on backend technologies to create backend API's using Python, ExpressJs<br />
                    </p>
                    <p className="f-2 md-ph-5 c-semantic-primary">
                        I have completed my B.E. and Diploma from Nagpur University.<br />
                        Apart from that, I loved to travel, read Marathi books, listening music.
                    </p>
                    <p className="f-4 fw-500 pt-2 d-block c-semantic-primary">Thank You!</p>
                    <p>
                        <a href="https://www.linkedin.com/in/saroj-meshram-442a72179/" className="a"><LinkedIn /></a>
                        <a href="#meshramsaroj24@gmail.com" className="a"><Email /></a>
                        <a href="https://github.com/meshramsaroj" className="a"><GitHub /></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;