import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home';
import './index.css';

function App() {
  return (
    <>
        <h1>LifeNavigator</h1>

        <Router>
           <Routes>
               <Route path="/" element={<Home />} />
               {/* <Route path="/about" element={<About />} /> */}
           </Routes>

        </Router>
    </>
  );
};

export default App;
