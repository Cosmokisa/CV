import myPhoto from '../assets/Olga.jpg';
import Navbar from './Navbar';
import '../styles/resume.css';

function Resume({ data }) {
    if (!data || !data.labels || !data.content) return null;

    const { labels, content } = data;

    return (
        <div className="resume">
            <main className="resume__main">
                <header className="resume__header">
                    <div className="resume__header-wrapper">
                        <h2 className="resume__subtitle">{content.title}</h2>
                        <Navbar />
                    </div>

                    <h1 className="resume__title">{content.name}</h1>
                    <p className="resume__about">{content.about}</p>
                </header>

                <div className="resume__info">
                    <section className="projects">
                        <h3 className="section-title">{labels.projects}</h3>
                        <ul className="projects__list">
                            {content.projects?.map((proj, idx) => (
                                <li className="projects__item" key={idx}>
                                    <a
                                        className="projects__link"
                                        href={proj.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {proj.title}, {proj.year}
                                    </a>{' '}
                                    | {proj.stack}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="experience">
                        <h3 className="section-title">{labels.experience}</h3>
                        {content.experience?.map((job, idx) => (
                            <div key={idx} className="job">
                                <div className="job__wrapper">
                                    <h4 className="job__position">
                                        {job.role + ' '}
                                    </h4>
                                    <p className="job__company">
                                        {job.company}
                                    </p>
                                </div>
                                <p className="job__duration">
                                    {job.duration} · {job.location}
                                </p>
                                <ul className="job__responsibilities">
                                    {job.responsibilities.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    <section className="education">
                        <h3 className="section-title">{labels.education}</h3>
                        {content.education?.map((ed, idx) => (
                            <div key={idx} className="education__entry">
                                <h4 className="education__school">
                                    {ed.school}
                                </h4>
                                <p className="education__field">{ed.field}</p>
                                <p className="education__duration">
                                    {ed.duration}
                                </p>
                            </div>
                        ))}
                    </section>
                </div>
            </main>

            <aside className="sidebar">
                <div className="sidebar__top">
                    <div className="sidebar__photo-container">
                        <img
                            className="sidebar__photo"
                            src={myPhoto}
                            alt="Photo of Olga Suhomlinova"
                        />
                    </div>

                    <div className="contacts">
                        <h3 className="section-title">{labels.contacts}</h3>

                        <p className="contacts__location">
                            {content.contact.location}
                        </p>
                        <p className="contacts__tel">{content.contact.tel}</p>
                        <a
                            className="contacts__email"
                            href={`mailto:${content.contact.email}`}
                        >
                            {content.contact.email}
                        </a>
                    </div>
                </div>

                <div className="sidebar__bottom">
                    <div className="skills">
                        <h3 className="section-title">{labels.tech}</h3>
                        <ul className="skills__list">
                            {content['tech-skills']?.map((skill, idx) => (
                                <li className="skills__item" key={idx}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="skills">
                        <h3 className="section-title">{labels.other}</h3>
                        <ul className="skills__list">
                            {content['other-skills']?.map((skill, idx) => (
                                <li className="skills__item" key={idx}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="language">
                        <h3 className="section-title">{labels.languages}</h3>
                        <ul className="languages__list">
                            {content.languages?.map((lang, idx) => (
                                <li className="languages__item" key={idx}>
                                    <strong>{lang.language}</strong> —{' '}
                                    {lang.level}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="links">
                    <h3 className="section-title">{labels.links}</h3>

                    <a
                        className="links__linkedin"
                        href={content.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="links__github"
                        href={content.links.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </aside>
        </div>
    );
}

export default Resume;
