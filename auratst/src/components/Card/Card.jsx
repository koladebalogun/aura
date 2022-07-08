import React, { useState } from "react";
import Auth from "../Auth/Auth";
import SideBar from "../Sidebar/Sidebar";
import { BsPersonCircle, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCustomerService, AiOutlineSetting } from "react-icons/ai";
import { TbReportSearch, TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";

import "./card.css";

const Card = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(user?.result?.name);

  const Dashboard = (props) => {
    return (
      <div className="card_inner_contents">
        <div className="card_inner_contents_icon">{props.icon}</div>
        <div className="card_inner_contents_txt">
          <p className="header">{props.uniqueUser}</p>
          <div className="inner_txt">
            <h3>{props.uniqueNumbers}</h3>
            <p>{props.interest}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card_wrapper">
      <SideBar />
      <div className="card_inner_wrapper">
        <div className="card_inner">
          <div className="card_inner_content_wrapper">
            <div className="card_inner_content">
              <div className="card_inner_header">
                <div>
                  <p>
                    <b>Hi</b> you have 3 requests, <span>Check</span>
                  </p>
                </div>
              </div>
              <div className="dashboard_header">
                {user?.result.name && <h3>{user.result?.name}'s Dashboard</h3>}
              </div>

              <div className="card_inner_contents_wrapper">
                <Dashboard
                  icon={<BsPersonCircle />}
                  uniqueUser={"Unique Users"}
                  uniqueNumbers={362}
                  interest={+112}
                />

                <Dashboard
                  icon={<TbDeviceDesktopAnalytics />}
                  uniqueUser={"Registered members"}
                  uniqueNumbers={1062}
                  interest={+62}
                />

                <Dashboard
                  icon={<AiOutlineCustomerService />}
                  uniqueUser={"Resolved issues"}
                  uniqueNumbers={89}
                  interest={+65}
                />

                <Dashboard
                  icon={<FaRegMoneyBillAlt />}
                  uniqueUser={"Expenses this week"}
                  uniqueNumbers={"9,496"}
                />
              </div>

              <div className="card_inline_navigation">
                <ul>
                  <li>Orders history</li>

                  <li>Personal information</li>
                  <li>Password</li>
                  <li>Payment details</li>
                </ul>
              </div>
            </div>

            <div className="card_section">
              <div className="inner_card_wrapper">
                <div className="inner_card">
                  <div>
                    <h3>Current Balance</h3>
                    <h6>-567.99 USD</h6>

                    <div className="inner_card_txt1">
                      <h3>5,000</h3>
                      <p>USD</p>
                    </div>
                  </div>
                  <div>
                    <button>Add credit</button>
                  </div>
                </div>

                <div className="inner_card">
                  <div>
                    <h3>Payment details</h3>

                    <div className="inner_card_content">
                      <p>Next payment 68.99 USD</p>
                      <h5>
                        <b>February 14, 2022</b>
                      </h5>
                    </div>
                  </div>
                  <div className="total">
                    <p>Total to pay</p>
                    <h3>9,496</h3>
                  </div>
                </div>
              </div>

              <div className="card_section2_wrapper">
                <div>
                  <h3>History</h3>
                  <div className="section2_contents_wrapper">
                    <div className="section2_contents">
                      <div className="section2_contents_details">
                        <FaRegMoneyBillAlt className="section2_contents_details_icon" />
                        <div>
                          <h4>Balance top-up</h4>
                          <p>02 Feb 2022 12:43</p>
                        </div>
                      </div>
                      <div className="section2_contents_amount">
                        <h3>+ 5000</h3>
                        <p>USD</p>
                      </div>
                    </div>
                    <hr />
                  </div>

                  <div className="section2_contents_wrapper">
                    <div className="section2_contents">
                      <div className="section2_contents_details">
                        <TbDeviceDesktopAnalytics className="section2_contents_details_icon" />
                        <div>
                          <h4>Refund of order</h4>
                          <p>10 Feb 2022 12:43</p>
                        </div>
                      </div>
                      <div className="section2_contents_amount">
                        <h3>- 5.421</h3>
                        <p>USD</p>
                      </div>
                    </div>
                    <hr />
                  </div>

                  <div className="section2_contents_wrapper">
                    <div className="section2_contents">
                      <div className="section2_contents_details">
                        <HiOutlineHome className="section2_contents_details_icon" />
                        <div>
                          <h4>Office rent</h4>
                          <p>12 Feb 2022 12:43</p>
                        </div>
                      </div>
                      <div className="section2_contents_amount">
                        <h3>- 159.99</h3>
                        <p>USD</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>

                <div>
                  <h3>Other things</h3>
                  <div className="section2_contents_wrapper2">
                    <div className="section2_contents1">
                      <p>screen Time</p>
                      <h3>Payment details</h3>
                    </div>

                    <div className="section2_contents2">
                      <h5>TOTAL TIME</h5>

                      <div className="section2_contents2_inner">
                        <div className="section2_contents2_inner2_txt1">
                          <p>This week</p>
                          <h2>1h 27m</h2>
                        </div>
                        <BsArrowRightShort className="icon" />
                      </div>
                      <hr />

                      <div className="section2_contents2_inner2">
                        <TbDeviceDesktopAnalytics className="icon" />
                        <div className="section2_contents2_inner2_txt">
                          <p>From last week</p>
                          <p>13%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
