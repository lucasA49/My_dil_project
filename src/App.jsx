import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Project_Form from './components/Project_Form'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project_form" element={<Project_Form />} />
            </Routes>
            <Sidebar />
            <Footer />
        </Router>
    );
}

export default App;
