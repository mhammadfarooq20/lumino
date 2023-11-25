import React from "react";

export default function Elements() {
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
            <li className="active">Forms</li>
          </ol>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">UI Elements</h1>
          </div>
        </div>
        {/*/.row*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">Buttons</div>
              <div className="panel-body">
                <div className="col-md-12">
                  <h5>Small</h5>
                  <button type="button" className="btn btn-sm btn-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-sm btn-default">
                    Default
                  </button>
                  <button type="button" className="btn btn-sm btn-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-sm btn-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-sm btn-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-sm btn-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-sm btn-link">
                    Link
                  </button>
                  <br />
                  <br />
                  <h5>Medium</h5>
                  <button type="button" className="btn btn-md btn-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-md btn-default">
                    Default
                  </button>
                  <button type="button" className="btn btn-md btn-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-md btn-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-md btn-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-md btn-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-md btn-link">
                    Link
                  </button>
                  <br />
                  <br />
                  <h5>Large</h5>
                  <button type="button" className="btn btn-lg btn-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-lg btn-default">
                    Default
                  </button>
                  <button type="button" className="btn btn-lg btn-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-lg btn-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-lg btn-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-lg btn-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-lg btn-link">
                    Link
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            {/* /.panel*/}
            <div className="panel panel-default">
              <div className="panel-heading">Forms</div>
              <div className="panel-body">
                <div className="col-md-6">
                  <form role="form">
                    <div className="form-group">
                      <label>Text Input</label>
                      <input
                        className="form-control"
                        placeholder="Placeholder"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group checkbox">
                      <label>
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </div>
                    <div className="form-group">
                      <label>File input</label>
                      <input type="file" />
                      <p className="help-block">
                        Example block-level help text here.
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Text area</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <label>Validation</label>
                    <div className="form-group has-success">
                      <input className="form-control" placeholder="Success" />
                    </div>
                    <div className="form-group has-warning">
                      <input className="form-control" placeholder="Warning" />
                    </div>
                    <div className="form-group has-error">
                      <input className="form-control" placeholder="Error" />
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Checkboxes</label>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />
                        Checkbox 1
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />
                        Checkbox 2
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />
                        Checkbox 3
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />
                        Checkbox 4
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Radio Buttons</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        Radio Button 1
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios2"
                          defaultValue="option2"
                        />
                        Radio Button 2
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios3"
                          defaultValue="option3"
                        />
                        Radio Button 3
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios3"
                          defaultValue="option3"
                        />
                        Radio Button 4
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Selects</label>
                    <select className="form-control">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Multiple Selects</label>
                    <select multiple className="form-control">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Button
                  </button>
                  <button type="reset" className="btn btn-default">
                    Reset Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /.panel*/}
        </div>
        {/* /.col*/}
        <div className="col-sm-12">
          <p className="back-link">
            Lumino Theme by <a href="https://www.medialoot.com">Medialoot</a>
          </p>
        </div>
      </div>
      {/* /.row */}
      {/*/.main*/}
    </>
  );
}
