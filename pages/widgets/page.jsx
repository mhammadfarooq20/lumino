import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function widgets() {
  return (
    <>
      <div>
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <em className="fa fa-home" />
                </a>
              </li>
              <li className="active">Widgets</li>
            </ol>
          </div>
          {/*/.row*/}
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Widgets</h1>
            </div>
          </div>
          {/*/.row*/}
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-default articles">
                <div className="panel-heading">
                  Latest News
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
                <div className="panel-body articles-container">
                  <div className="article border-bottom">
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-xs-2 col-md-2 date">
                          <div className="large">30</div>
                          <div className="text-muted">Jun</div>
                        </div>
                        <div className="col-xs-10 col-md-10">
                          <h4>
                            <Link href="#">Lorem ipsum dolor sit amet</Link>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer at sodales nisl. Donec malesuada orci
                            ornare risus finibus feugiat.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  {/*End .article*/}
                  <div className="article border-bottom">
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-xs-2 col-md-2 date">
                          <div className="large">28</div>
                          <div className="text-muted">Jun</div>
                        </div>
                        <div className="col-xs-10 col-md-10">
                          <h4>
                            <a href="#">Lorem ipsum dolor sit amet</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer at sodales nisl. Donec malesuada orci
                            ornare risus finibus feugiat.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  {/*End .article*/}
                  <div className="article">
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-xs-2 col-md-2 date">
                          <div className="large">24</div>
                          <div className="text-muted">Jun</div>
                        </div>
                        <div className="col-xs-10 col-md-10">
                          <h4>
                            <a href="#">Lorem ipsum dolor sit amet</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer at sodales nisl. Donec malesuada orci
                            ornare risus finibus feugiat.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  {/*End .article*/}
                </div>
              </div>
              {/*End .articles*/}
              <div className="panel panel-default ">
                <div className="panel-heading">
                  Progress bars
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
                  <div className="col-md-12 no-padding">
                    <div className="row progress-labels">
                      <div className="col-sm-6">New Orders</div>
                      <div className="col-sm-6" style={{ textAlign: "right" }}>
                        80%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        data-percentage="0%"
                        style={{ width: "80%" }}
                        className="progress-bar progress-bar-blue"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="row progress-labels">
                      <div className="col-sm-6">Comments</div>
                      <div className="col-sm-6" style={{ textAlign: "right" }}>
                        60%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        data-percentage="0%"
                        style={{ width: "60%" }}
                        className="progress-bar progress-bar-orange"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="row progress-labels">
                      <div className="col-sm-6">New Users</div>
                      <div className="col-sm-6" style={{ textAlign: "right" }}>
                        40%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        data-percentage="0%"
                        style={{ width: "40%" }}
                        className="progress-bar progress-bar-teal"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="row progress-labels">
                      <div className="col-sm-6">Page Views</div>
                      <div className="col-sm-6" style={{ textAlign: "right" }}>
                        20%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        data-percentage="0%"
                        style={{ width: "20%" }}
                        className="progress-bar progress-bar-red"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
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
                          src="https://via.placeholder.com/60/dde0e6/5f6468"
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
            </div>
            {/*/.col*/}
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Calendar
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
                  <div id="calendar" />
                </div>
              </div>
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
                        <i className="glyphicon glyphicon-pushpin" />
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
                        <i className="glyphicon glyphicon-link" />
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
                        <i className="glyphicon glyphicon-camera" />
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
                        <i className="glyphicon glyphicon-paperclip" />
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
              <div className="panel panel-default">
                <div className="panel-heading">
                  Contact Form
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
                  <form className="form-horizontal" action method="post">
                    <fieldset>
                      {/* Name input*/}
                      <div className="form-group">
                        <label
                          className="col-md-3 control-label"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <div className="col-md-9">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      {/* Email input*/}
                      <div className="form-group">
                        <label
                          className="col-md-3 control-label"
                          htmlFor="email"
                        >
                          Your E-mail
                        </label>
                        <div className="col-md-9">
                          <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Your email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      {/* Message body */}
                      <div className="form-group">
                        <label
                          className="col-md-3 control-label"
                          htmlFor="message"
                        >
                          Your message
                        </label>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Please enter your message here..."
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      {/* Form actions */}
                      <div className="form-group">
                        <div className="col-md-12 widget-right">
                          <button
                            type="submit"
                            className="btn btn-default btn-md pull-right"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
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
        </div>{" "}
        {/*/.main*/}
      </div>
    </>
  );
}
