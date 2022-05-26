import './assets/css/LateralNavbar.css';

function LateralNavbar() {
  return (
    <div>
      <div className="row">
        <h2 className="koulen-font my-3">Categorie</h2>
      </div>

      <div className="ms-4">
        <div className="row">
          <h5 className="my-2">Tavoli</h5>
        </div>

        <div className="row">
          <h5 className="my-2">Sedie</h5>
        </div>

        <div className="row">
          <h5 className="my-2">Elettrodomestici</h5>
        </div>
      </div>   
    </div>

  );
}

export default LateralNavbar;
