import React from "react";

import './../styles/Header.css'

function Header() {
  return (
    <>
      {/* <!-- page-header --> */}
      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="page-caption">
                <h1 class="page-title">Générateur de meme</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.page-header--> */}
      {/* <!-- card-section --> */}
      <div class="card-section">
        <div class="container">
          <div class="card-block bg-white mb30">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <!-- section-title --> */}
                <div class="section-title mb-0">
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
