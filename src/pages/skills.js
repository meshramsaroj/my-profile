
const Skills = () => {
    const skills = ["HTML", "CSS", "Javascript", "Bootstrap", "React", "NextJs", "Python", "ExpressJs", "Git"]
    const devOps = ["Sublime", "Visual studio code", "Postman, Rester", "Terminal (Ubuntu)"]

    return (
        <div className="bg-secondary elevate-1 round-1 md-w-70p md-m-auto mv-3 p-2 pb-5">
            <h2 className="c-semantic-primary t-center"> Skills</h2>
            <div>
                <h3 className="t-center md-t-left md-ml-2 c-neutral-2">Technical Skills</h3>
                <div className="pl-0px grid-3x1 md-grid-4x1 lg-grid-5x1 mh-3">
                    {skills.map(s => (
                        <div className="mh-1 bg-hero eleveate-1 round-1 p-2 m-2 f-2 f-caps t-center zoom" key={s}>{s}</div>
                    ))}
                </div>
                <h3 className="t-center md-t-left md-ml-2 c-neutral-2">DevOps Tools</h3>
                <div className=" pl-0px grid-3x1 md-grid-4x1 md-grid-5x1 mh-3">
                    {devOps.map(d => (
                        <div className="mh-1 bg-hero eleveate-1 round-1 p-2 m-2 f-2 f-caps t-center zoom" key={d}>{d}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Skills;