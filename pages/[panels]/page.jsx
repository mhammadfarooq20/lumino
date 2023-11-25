import React from "react";

export default function Panels() {
  return (
    <>
      <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <div className="row">
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <em className="fa fa-home" />
              </a>
            </li>
            <li className="active">Panels</li>
          </ol>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Alerts &amp; Panels</h1>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <h2>Alerts</h2>
            <div className="alert bg-primary" role="alert">
              <em className="fa fa-lg fa-warning">&nbsp;</em> Welcome to the
              admin dashboard panel bootstrap template{" "}
              <a href="#" className="pull-right">
                <em className="fa fa-lg fa-close" />
              </a>
            </div>
            <div className="alert bg-info" role="alert">
              <em className="fa fa-lg fa-warning">&nbsp;</em> Welcome to the
              admin dashboard panel bootstrap template{" "}
              <a href="#" className="pull-right">
                <em className="fa fa-lg fa-close" />
              </a>
            </div>
            <div className="alert bg-teal" role="alert">
              <em className="fa fa-lg fa-warning">&nbsp;</em> Welcome to the
              admin dashboard panel bootstrap template{" "}
              <a href="#" className="pull-right">
                <em className="fa fa-lg fa-close" />
              </a>
            </div>
            <div className="alert bg-success" role="alert">
              <em className="fa fa-lg fa-warning">&nbsp;</em> Welcome to the
              admin dashboard panel bootstrap template{" "}
              <a href="#" className="pull-right">
                <em className="fa fa-lg fa-close" />
              </a>
            </div>
            <div className="alert bg-warning" role="alert">
              <em className="fa fa-lg fa-warning">&nbsp;</em> Welcome to the
              admin dashboard panel bootstrap template{" "}
              <a href="#" className="pull-right">
                <em className="fa fa-lg fa-close" />
              </a>
            </div>
            <div className="alert bg-danger" role="alert">
              <em className="fa fa-lg fa-warning">&nbsp;</em> Welcome to the
              admin dashboard panel bootstrap template{" "}
              <a href="#" className="pull-right">
                <em className="fa fa-lg fa-close" />
              </a>
            </div>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <h2>Basic Panels</h2>
          </div>
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Default Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">Primary Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-success">
              <div className="panel-heading">Success Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-info">
              <div className="panel-heading">Info Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-warning">
              <div className="panel-heading">Warning Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-danger">
              <div className="panel-heading">Danger Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-lg-12">
            <h2>Collapsible Panels</h2>
          </div>
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                Default Panel
                <span className="pull-right clickable panel-toggle">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                Primary Panel
                <span className="pull-right clickable panel-toggle">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-success">
              <div className="panel-heading">
                Success Panel
                <span className="pull-right clickable panel-toggle">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-info">
              <div className="panel-heading">
                Info Panel
                <span className="pull-right clickable panel-toggle">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-warning">
              <div className="panel-heading">
                Warning Panel
                <span className="pull-right clickable panel-toggle">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-danger">
              <div className="panel-heading">
                Danger Panel
                <span className="pull-right clickable panel-toggle">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-lg-12">
            <h2>Tab Panels</h2>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body tabs">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab1" data-toggle="tab">
                      Tab 1
                    </a>
                  </li>
                  <li>
                    <a href="#tab2" data-toggle="tab">
                      Tab 2
                    </a>
                  </li>
                  <li>
                    <a href="#tab3" data-toggle="tab">
                      Tab 3
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade in active" id="tab1">
                    <h4>Tab 1</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eget rutrum purus. Donec hendrerit ante ac metus
                      sagittis elementum. Mauris feugiat nisl sit amet neque
                      luctus, a tincidunt odio auctor.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tab2">
                    <h4>Tab 2</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eget rutrum purus. Donec hendrerit ante ac metus
                      sagittis elementum. Mauris feugiat nisl sit amet neque
                      luctus, a tincidunt odio auctor.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tab3">
                    <h4>Tab 3</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eget rutrum purus. Donec hendrerit ante ac metus
                      sagittis elementum. Mauris feugiat nisl sit amet neque
                      luctus, a tincidunt odio auctor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*/.panel*/}
          </div>
          {/*/.col*/}
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body tabs">
                <ul className="nav nav-pills">
                  <li className="active">
                    <a href="#pilltab1" data-toggle="tab">
                      Tab 1
                    </a>
                  </li>
                  <li>
                    <a href="#pilltab2" data-toggle="tab">
                      Tab 2
                    </a>
                  </li>
                  <li>
                    <a href="#pilltab3" data-toggle="tab">
                      Tab 3
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade in active" id="pilltab1">
                    <h4>Tab 1</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eget rutrum purus. Donec hendrerit ante ac metus
                      sagittis elementum. Mauris feugiat nisl sit amet neque
                      luctus, a tincidunt odio auctor.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="pilltab2">
                    <h4>Tab 2</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eget rutrum purus. Donec hendrerit ante ac metus
                      sagittis elementum. Mauris feugiat nisl sit amet neque
                      luctus, a tincidunt odio auctor.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="pilltab3">
                    <h4>Tab 3</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eget rutrum purus. Donec hendrerit ante ac metus
                      sagittis elementum. Mauris feugiat nisl sit amet neque
                      luctus, a tincidunt odio auctor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*/.panel*/}
          </div>
          {/* /.col*/}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-lg-12">
            <h2>Color Panels</h2>
          </div>
          <div className="col-md-6">
            <div className="panel panel-teal">
              <div className="panel-heading dark-overlay">Teal Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          {/*/.col*/}
          <div className="col-md-6">
            <div className="panel panel-blue">
              <div className="panel-heading dark-overlay">Blue Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          {/*/.col*/}
          <div className="col-md-6">
            <div className="panel panel-orange">
              <div className="panel-heading dark-overlay">Orange Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          {/*/.col*/}
          <div className="col-md-6">
            <div className="panel panel-red">
              <div className="panel-heading dark-overlay">Red Panel</div>
              <div className="panel-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut ante in sapien blandit luctus sed ut lacus.
                  Phasellus urna est, faucibus nec ultrices placerat, feugiat et
                  ligula. Donec vestibulum magna a dui pharetra molestie. Fusce
                  et dui urna.
                </p>
              </div>
            </div>
          </div>
          {/*/.col*/}
          <div className="col-sm-12">
            <p className="back-link">
              Lumino Theme by <a href="https://www.medialoot.com">Medialoot</a>
            </p>
          </div>
        </div>
        {/*/.row*/}
      </div>
      {/*/.main*/}
    </>
  );
}
