import myPhoto from '../assets/Olga.jpg';
import Navbar from './Navbar';
import '../styles/resume.css';

function Resume({ data }) {
    if (!data || !data.labels || !data.content) return null;

    const { labels, content } = data;

    return (
        <div className="resume-wrapper">
            <main className="main-content">
                <header className="header">
                    <div className="wrapper">
                        <h2 className="header-subtitle">{content.title}</h2>
                        <Navbar />
                    </div>

                    <h1 className="header-title">{content.name}</h1>
                    <p className="header-text">{content.about}</p>
                </header>

                <section className="projects">
                    <h3 className="projects-title">{labels.projects}</h3>
                    <ol className="projects-list">
                        {content.projects?.map((proj, idx) => (
                            <li className="projects-list_item" key={idx}>
                                <a
                                    className="projects-list_link"
                                    href={proj.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {proj.title}, {proj.year}
                                </a>{' '}
                                | {proj.stack}
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="experience">
                    <h3 className="experience-title">{labels.experience}</h3>
                    {content.experience?.map((job, idx) => (
                        <div key={idx} className="job-entry">
                            <div className="job">
                                <h4 className="job-position">
                                    {job.role + ' at'}
                                </h4>
                                <p className="job-company">{job.company}</p>
                            </div>
                            <p className="job-duration">
                                {job.duration} · {job.location}
                            </p>
                            <ul className="job-responsibilities">
                                {job.responsibilities.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="education">
                    <h3 className="education-title">{labels.education}</h3>
                    {content.education?.map((ed, idx) => (
                        <div key={idx} className="education-entry">
                            <h4 className="school">{ed.school}</h4>
                            <p className="education-field">{ed.field}</p>
                            <p className="education-duration">{ed.duration}</p>
                        </div>
                    ))}
                </section>
            </main>

            <aside className="sidebar">
                <div className="photo-container">
                    <img
                        className="photo"
                        src={myPhoto}
                        alt="Photo of Olga Suhomlinova"
                    />
                </div>

                <div className="contacts">
                    <h3 className="contacts-title">{labels.contacts}</h3>

                    <p className="contacts-location">
                        {content.contact.location}
                    </p>
                    <p className="contacts-tel">{content.contact.tel}</p>
                    <a
                        className="contacts-email"
                        href={`mailto:${content.contact.email}`}
                    >
                        {content.contact.email}
                    </a>
                </div>

                <div className="links">
                    <h3 className="links-title">{labels.links}</h3>

                    <a
                        className="linkedin-link"
                        href={content.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="github-link"
                        href={content.links.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>

                <div className="skills">
                    <h3 className="skills-title">{labels.tech}</h3>
                    <ul className="skill-list">
                        {content['tech-skills']?.map((skill, idx) => (
                            <li className="skill-list_item" key={idx}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="skills">
                    <h3 className="skills-title">{labels.other}</h3>
                    <ul className="skill-list">
                        {content['other-skills']?.map((skill, idx) => (
                            <li className="skill-list_item" key={idx}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="language">
                    <h3 className="language-title">{labels.languages}</h3>
                    <ul className="language-list">
                        {content.languages?.map((lang, idx) => (
                            <li className="language-list_item" key={idx}>
                                <strong>{lang.language}</strong> — {lang.level}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Resume;
