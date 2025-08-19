import { Routes, Route, Navigate } from 'react-router-dom';
import Resume from './components/Resume';
import './styles/app.css';

import en from './data/en.json';
import ua from './data/ua.json';
import bg from './data/bg.json';

function App() {
    return (
        <div className="resume">
            <Routes>
                <Route path="/" element={<Navigate to="/en" />} />
                <Route path="/en" element={<Resume data={en} />} />
                <Route path="/ua" element={<Resume data={ua} />} />
                <Route path="/bg" element={<Resume data={bg} />} />
            </Routes>
        </div>
    );
}

export default App;
