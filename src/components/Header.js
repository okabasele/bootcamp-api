import React from "react";

import './../styles/Header.css'

function Header() {
  return (
    <>
      {/* <!-- page-header --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-caption">
                <h1 className="page-title">Générateur de meme</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.page-header--> */}
      {/* <!-- card-section --> */}
      <div className="card-section">
        <div className="container">
          <div className="card-block bg-white mb30">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <!-- section-title --> */}
                <div className="section-title mb-0">
                  <h2 className="text-center">Créer un meme</h2>
                </div>
                {/* <!-- /.section-title --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.card-secton --> */}

    </>
  );
}

export default Header;
