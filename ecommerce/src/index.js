import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HeaderNavbar from './HeaderNavbar';
import LateralNavbar from './LateralNavbar';
import Storia from './storia';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import './assets/css/main.css';
import content from './HeaderNavbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container-fluid">
      <div className="row">
        <HeaderNavbar />
      </div>
      <div className="row">
        <div className="col-md-2 lateral-navbar">
          <LateralNavbar />
        </div>
        <div className="col-md-10">
          <script>
            setContent("home");
            if(content === "home"){
              <div>ciao</div>
            }
            else if(content === "storia"){
              <Storia />
            }
          </script>
          {/* <Storia /> */}
        </div>
      </div>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
