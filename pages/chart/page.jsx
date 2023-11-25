import React from "react";

export default function Chart() {
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
            <li className="active">Charts</li>
          </ol>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Charts</h1>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body easypiechart-panel">
                <div
                  className="easypiechart"
                  id="easypiechart-teal"
                  data-percent={56}
                >
                  <span className="percent">56%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body easypiechart-panel">
                <div
                  className="easypiechart"
                  id="easypiechart-blue"
                  data-percent={92}
                >
                  <span className="percent">92%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body easypiechart-panel">
                <div
                  className="easypiechart"
                  id="easypiechart-orange"
                  data-percent={65}
                >
                  <span className="percent">65%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body easypiechart-panel">
                <div
                  className="easypiechart"
                  id="easypiechart-red"
                  data-percent={27}
                >
                  <span className="percent">27%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                Line Chart
                <ul className="pull-right panel-settings panel-button-tab-right">
                  <li className="dropdown">
                    <a
                      className="pull-right dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <em className="fa fa-cogs" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <ul className="dropdown-settings">
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 1
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 2
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <span className="pull-right clickable panel-toggle panel-button-tab-left">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <div className="canvas-wrapper">
                  <canvas
                    className="main-chart"
                    id="line-chart"
                    height={200}
                    width={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                Bar Chart
                <ul className="pull-right panel-settings panel-button-tab-right">
                  <li className="dropdown">
                    <a
                      className="pull-right dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <em className="fa fa-cogs" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <ul className="dropdown-settings">
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 1
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 2
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <span className="pull-right clickable panel-toggle panel-button-tab-left">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <div className="canvas-wrapper">
                  <canvas
                    className="main-chart"
                    id="bar-chart"
                    height={200}
                    width={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Pie Chart
                <ul className="pull-right panel-settings panel-button-tab-right">
                  <li className="dropdown">
                    <a
                      className="pull-right dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <em className="fa fa-cogs" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <ul className="dropdown-settings">
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 1
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 2
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <span className="pull-right clickable panel-toggle panel-button-tab-left">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <div className="canvas-wrapper">
                  <canvas className="chart" id="pie-chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Doughnut Chart
                <ul className="pull-right panel-settings panel-button-tab-right">
                  <li className="dropdown">
                    <a
                      className="pull-right dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <em className="fa fa-cogs" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <ul className="dropdown-settings">
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 1
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 2
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <span className="pull-right clickable panel-toggle panel-button-tab-left">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <div className="canvas-wrapper">
                  <canvas className="chart" id="doughnut-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Radar Chart
                <ul className="pull-right panel-settings panel-button-tab-right">
                  <li className="dropdown">
                    <a
                      className="pull-right dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <em className="fa fa-cogs" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <ul className="dropdown-settings">
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 1
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 2
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <span className="pull-right clickable panel-toggle panel-button-tab-left">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <div className="canvas-wrapper">
                  <canvas className="chart" id="radar-chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Polar Area Chart
                <ul className="pull-right panel-settings panel-button-tab-right">
                  <li className="dropdown">
                    <a
                      className="pull-right dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <em className="fa fa-cogs" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <ul className="dropdown-settings">
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 1
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 2
                            </a>
                          </li>
                          <li className="divider" />
                          <li>
                            <a href="#">
                              <em className="fa fa-cog" /> Settings 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <span className="pull-right clickable panel-toggle panel-button-tab-left">
                  <em className="fa fa-toggle-up" />
                </span>
              </div>
              <div className="panel-body">
                <div className="canvas-wrapper">
                  <canvas className="chart" id="polar-area-chart" />
                </div>
              </div>
            </div>
          </div>
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
