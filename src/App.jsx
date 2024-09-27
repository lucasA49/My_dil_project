import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Connexion from './pages/Connexion';
import Project_Form from './pages/Project_Form';

function App() {
    return (
        <Router>
            {/* Structure de la page commune, comme le Sidebar et Footer */}
            <Sidebar />

            {/* Routes définies ici */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="connexion" element={<Connexion />} />
                <Route path="/project_form" element={<Project_Form />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;