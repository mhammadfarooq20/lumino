"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import "./_document"

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <em className="fa fa-home" />
                </a>
              </li>
              <li className="active">Dashboard</li>
            </ol>
          </div>
          {/*/.row*/}
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Dashboard</h1>
            </div>
          </div>
          {/*/.row*/}
          <div className="panel panel-container">
            <div className="row">
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-teal panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-shopping-cart color-blue" />
                    <div className="large">120</div>
                    <div className="text-muted">New Orders</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-blue panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-comments color-orange" />
                    <div className="large">52</div>
                    <div className="text-muted">Comments</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-orange panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-users color-teal" />
                    <div className="large">24</div>
                    <div className="text-muted">New Users</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-red panel-widget ">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-search color-red" />
                    <div className="large">25.2k</div>
                    <div className="text-muted">Page Views</div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.row*/}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Site Traffic Overview
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
            <div className="col-xs-6 col-md-3">
              <div className="panel panel-default">
                <div className="panel-body easypiechart-panel">
                  <h4>New Orders</h4>
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
                  <h4>Comments</h4>
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
                  <h4>New Users</h4>
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
                  <h4>Visitors</h4>
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
          {/*/.row*/}
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-default chat">
                <div className="panel-heading">
                  Chat
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
                  <ul>
                    <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <Image
                          src="https://via.placeholder.com/60/30a5ff/fff"
                          alt="User Avatar"
                          className="img-circle"
                          width="50"
                          height="50"
                        />
                      </span>
                      <div className="chat-body clearfix">
                        <div className="header">
                          <strong className="primary-font">John Doe</strong>{" "}
                          <small className="text-muted">32 mins ago</small>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla ante turpis, rutrum ut ullamcorper sed,
                          dapibus ac nunc.
                        </p>
                      </div>
                    </li>
                    <li className="right clearfix">
                      <span className="chat-img pull-right">
                        <Image
                          src="https://via.placeholder.com/60/30a5ff/fff"
                          alt="User Avatar"
                          className="img-circle"
                          width="50"
                          height="50"
                        />
                      </span>
                      <div className="chat-body clearfix">
                        <div className="header">
                          <strong className="pull-left primary-font">
                            Jane Doe
                          </strong>{" "}
                          <small className="text-muted">6 mins ago</small>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla ante turpis, rutrum ut ullamcorper sed,
                          dapibus ac nunc.
                        </p>
                      </div>
                    </li>
                    <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <Image
                          src="https://via.placeholder.com/60/30a5ff/fff"
                          alt="User Avatar"
                          className="img-circle"
                          width="50"
                          height="50"
                        />
                      </span>
                      <div className="chat-body clearfix">
                        <div className="header">
                          <strong className="primary-font">John Doe</strong>{" "}
                          <small className="text-muted">32 mins ago</small>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla ante turpis, rutrum ut ullamcorper sed,
                          dapibus ac nunc.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <div className="input-group">
                    <input
                      id="btn-input"
                      type="text"
                      className="form-control input-md"
                      placeholder="Type your message here..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-primary btn-md" id="btn-chat">
                        Send
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  To-do List
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
                  <ul className="todo-list">
                    <li className="todo-list-item">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox-1" />
                        <label htmlFor="checkbox-1">Make coffee</label>
                      </div>
                      <div className="pull-right action-buttons">
                        <a href="#" className="trash">
                          <em className="fa fa-trash" />
                        </a>
                      </div>
                    </li>
                    <li className="todo-list-item">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox-2" />
                        <label htmlFor="checkbox-2">Check emails</label>
                      </div>
                      <div className="pull-right action-buttons">
                        <a href="#" className="trash">
                          <em className="fa fa-trash" />
                        </a>
                      </div>
                    </li>
                    <li className="todo-list-item">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox-3" />
                        <label htmlFor="checkbox-3">Reply to Jane</label>
                      </div>
                      <div className="pull-right action-buttons">
                        <a href="#" className="trash">
                          <em className="fa fa-trash" />
                        </a>
                      </div>
                    </li>
                    <li className="todo-list-item">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox-4" />
                        <label htmlFor="checkbox-4">Make more coffee</label>
                      </div>
                      <div className="pull-right action-buttons">
                        <a href="#" className="trash">
                          <em className="fa fa-trash" />
                        </a>
                      </div>
                    </li>
                    <li className="todo-list-item">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox-5" />
                        <label htmlFor="checkbox-5">
                          Work on the new design
                        </label>
                      </div>
                      <div className="pull-right action-buttons">
                        <a href="#" className="trash">
                          <em className="fa fa-trash" />
                        </a>
                      </div>
                    </li>
                    <li className="todo-list-item">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox-6" />
                        <label htmlFor="checkbox-6">
                          Get feedback on design
                        </label>
                      </div>
                      <div className="pull-right action-buttons">
                        <a href="#" className="trash">
                          <em className="fa fa-trash" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <div className="input-group">
                    <input
                      id="btn-input"
                      type="text"
                      className="form-control input-md"
                      placeholder="Add new task"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-primary btn-md" id="btn-todo">
                        Add
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*/.col*/}
            <div className="col-md-6">
              <div className="panel panel-default ">
                <div className="panel-heading">
                  Timeline
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
                <div className="panel-body timeline-container">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-badge">
                        <em className="glyphicon glyphicon-pushpin" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">
                            Lorem ipsum dolor sit amet
                          </h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer at sodales nisl. Donec malesuada orci
                            ornare risus finibus feugiat.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge primary">
                        <em className="glyphicon glyphicon-link" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">
                            Lorem ipsum dolor sit amet
                          </h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge">
                        <em className="glyphicon glyphicon-camera" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">
                            Lorem ipsum dolor sit amet
                          </h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer at sodales nisl. Donec malesuada orci
                            ornare risus finibus feugiat.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge">
                        <em className="glyphicon glyphicon-paperclip" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">
                            Lorem ipsum dolor sit amet
                          </h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*/.col*/}
            <div className="col-sm-12">
              <p className="back-link">
                Lumino Theme by{" "}
                <a href="https://www.medialoot.com">Medialoot</a>
              </p>
            </div>
          </div>
          {/*/.row*/}
        </div>
      )}
    </div>
  );
}
