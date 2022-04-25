import './App.css';
import PageA from './components/PageA/PageA';
import PageB from './components/PageB/PageB';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<PageA />} />
                    <Route path='/favorites' element={<PageB />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
