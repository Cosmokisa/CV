import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'ua', label: 'UA' },
        { code: 'bg', label: 'BG' },
    ];

    return (
        <nav className="navbar">
            {languages.map((lang) => (
                <NavLink
                    key={lang.code}
                    to={`/${lang.code}`}
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    {lang.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default Navbar;
