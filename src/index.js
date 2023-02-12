import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Redirect } from "react-router-dom"

// const News = ()=>{
//   return (<h1>İletişim</h1>)
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root. render(

  // <Router>

  //   <NavLink className="vepa" to="/">App</NavLink>
  //   <br /><br />
  //   <NavLink className="vepa"  to="/About">About</NavLink>
  //   <br /><br />
  //   <NavLink className="vepa"  to="/News">News</NavLink>
/////////////
  //   <Routes>
  //     <Route path='/' element={<App />} />;
  //     <Route path='/About' element={<About />} />
  //     <Route path='/news' element={<News/> } />
  //   </Routes>

    
  // </Router>

  <BrowserRouter>
     <App />
  </BrowserRouter>




  // <React.StrictMode>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
