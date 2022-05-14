import logo from './assets/img/logo.png'
import './assets/css/HeaderNavbar.css';


function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand mx-3" href="#">
          <img src={logo} alt="" height="50px" className="d-inline-block" />    
        </a>

        <div className="me-4 d-none d-sm-block">
          <h3 className="align-items-center mb-0 koulen-font fs-2">Global Market</h3>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Chi Siamo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">La Nostra Storia</a>
            </li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2 shadow-sm" type="search" placeholder="Cerca qualcosa..." aria-label="Cerca" />
            <button className="btn btn-outline-dark px-2 py-1 shadow-sm" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </nav>
  );
}

export default HeaderNavbar;