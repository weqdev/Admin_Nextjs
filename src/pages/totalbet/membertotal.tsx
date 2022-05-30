import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

import { createGlobalStyle, css } from 'styled-components';

const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
    padding-top: 1rem;
  }
  .contentHeaderImage {
    margin-bottom: 0rem;
  }
  div.header-blue {
    height: 100px;
    background: url(/images/totalbet/member_total/header.png);
    background-size: cover;
    display: flex;
  }
  div.white-title {
    margin: auto;
    margin-left: 3rem;
    margin-right: 0rem;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 33px;
    margin-top: 0px;
    background: white;
    background-size: 334px 33px;
    color: black;
    line-height: 33px;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  div.cash-option,
  div.credit-option {
    color: gray;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 2px solid gray;
    border-top: 0px solid gray;
    background: #0000;
  }
  div.selected {
    background: url(/images/totalbet/member_total/credit.png);
    background-size: 100% 100%;
    color: white;
    border: 0px solid gray;
  }

  #contentTable tr {
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: 0px solid white;
    position: relative;
  }
  #contentTable tr td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-align: left;
    padding-left: 70px;
    width: 60%;
  }
  #contentTable tr td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 40%;
  }
  #contentTable tr::after {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 5px;
    width: calc(100% - 10px);
    height: 1px;
    -webkit-box-shadow: 0px 0px 9px #000000;
    -moz-box-shadow: 0px 0px 9px #000000;
    box-shadow: 0px 0px 9px #000000;
    z-index: 100;
  }
  #contentTable tr:nth-child(2n + 1) {
    background-color: #d7f5eb;
    width: 50%;
    color: #051139;
  }
  #contentTable tr:nth-child(2n) {
    background-color: #dceffd;
    width: 50%;
    color: #051139;
  }
  #contentTableObj,
  #Main-contentTableObj {
    width: 100%;
    border-spacing: 0px 5px;
  }
  #Main-contentTableObj {
    height: calc(100vh - 300px);
    background: white;
  }
  #Main-contentTableObj * {
    color: black;
  }
`}`;

const Accordions = () => {
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/wewinlogo_black.png" className="contentHeaderImage" />
          <div className="header-blue">
            <div className="white-title">Member Account</div>
            <div className="white-title credit-option selected">Credit</div>
            <div className="white-title cash-option">Cash</div>
          </div>
          <table id="contentTableObj">
            <tbody id="contentTable">
              <tr>
                <td>Username</td>
              </tr>
            </tbody>
          </table>
          <table id="Main-contentTableObj">
            <tbody id="Main-contentTable">
              <tr>
                <td>Content</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Layout>
  );
};

export default Accordions;
