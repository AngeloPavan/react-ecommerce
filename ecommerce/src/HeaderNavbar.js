import logo from './assets/img/logo.png'

function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" height="50px" className="d-inline-block" />    
        </a>

        <div >
          <h3 className="align-items-center">Global Market</h3>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        </div>

      </div>
    </nav>
  );
}

export default HeaderNavbar;