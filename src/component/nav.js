import Link from "next/link";
import NavStyle from "../styles/Nav.module.css"

const Nav = () => {
    return (
        <ul className={NavStyle.jsCenter + " d-flex bg-hero ph-3 pv-2 m-0"}>
            <li className={NavStyle.navItem + " md-f-3 fw-500 mh-2"}>
                <Link href="/">About</Link>
            </li>
            <li className={NavStyle.navItem + " md-f-3 fw-500 mh-2"}>
                <Link href="/qualification">Qualification</Link>
            </li>
            <li className={NavStyle.navItem + " md-f-3 fw-500 mh-2"}>
                <Link href="/experience">Work Experience</Link>
            </li>
            <li className={NavStyle.navItem + " md-f-3 fw-500 mh-2"}>
                <Link href="/skills">Skills</Link>
            </li>
            <li className={NavStyle.navItem + " md-f-3 fw-500 mh-2"}>
                <Link href="/mini-projects">Mini Projects</Link>
            </li>
        </ul>
    )
}

export default Nav;