import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
        <div className="profile-sidebar">
          <div className="profile-userpic">
            <Image
              src="https://via.placeholder.com/50/30a5ff/fff"
              className="img-responsive"
              alt="image"
              width="50"
              height="50"
            />
          </div>
          <div className="profile-usertitle">
            <div className="profile-usertitle-name">Username</div>
            <div className="profile-usertitle-status">
              <span className="indicator label-success" />
              Online
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="divider" />
        <form role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <ul className="nav menu">
          <li className="active">
            <Link href="/index.html">
              <em className="fa fa-dashboard">&nbsp;</em> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/widgets.html">
              <em className="fa fa-calendar">&nbsp;</em> Widgets
            </Link>
          </li>
          <li>
            <Link href="/charts.html">
              <em className="fa fa-bar-chart">&nbsp;</em> Charts
            </Link>
          </li>
          <li>
            <Link href="./elements.html">
              <em className="fa fa-toggle-off">&nbsp;</em> UI Elements
            </Link>
          </li>
          <li>
            <Link href="/panels.html">
              <em className="fa fa-clone">&nbsp;</em> Alerts &amp; Panels
            </Link>
          </li>
          <li className="parent ">
            <Link data-toggle="collapse" href="#sub-item-1">
              <em className="fa fa-navicon">&nbsp;</em> Multilevel{" "}
              <span
                data-toggle="collapse"
                href="#sub-item-1"
                className="icon pull-right"
              >
                <em className="fa fa-plus" />
              </span>
            </Link>
            <ul className="children collapse" id="sub-item-1">
              <li>
                <Link className href="#">
                  <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 1
                </Link>
              </li>
              <li>
                <Link className href="#">
                  <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 2
                </Link>
              </li>
              <li>
                <Link className href="#">
                  <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 3
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/login.html">
              <em className="fa fa-power-off">&nbsp;</em> Logout
            </Link>
          </li>
        </ul>
      </div>
      {/*/.sidebar*/}
    </>
  );
}
