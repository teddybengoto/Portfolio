import  './css/css.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cv from "./pages/cv";
import ProjectList from "./pages/projectList";
import Healder from "./component/healder";
import Footer from "./component/footer";



function App() {
  return (
    <>
    <BrowserRouter>
     <Healder/>
    <Routes>
      <Route path='/' element={<Cv/>}/>
      <Route path='/project' element={<ProjectList/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
