import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';

import { Button } from '@paljs/ui';

const AgentReport = () => {
  const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
    padding-top: 1rem;
  }
  .contentHeaderImage {
    margin-bottom: 0rem;
  }
  div.header-white {
    height: 50px;
    background: url(/images/white_table_head.png);
    background-size: cover;
    display: flex;
  }
  div.blue-title {
    margin: auto;
    width: 334px;
    height: 33px;
    margin-top: 0px;
    background: url(/images/black_title_bkg.png);
    background-size: 334px 33px;
    line-height: 33px;
    font-weight: bold;
  }
  div.tabs {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 800px;
  }
  div.tabs div.tab {
    cursor: pointer;
    max-width: 200px;
    width: 25%;
    background: white;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 1px solid gray;
    color: gray;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  div.tabs div.tab.selected {
    background: url(/images/sales/tabcell_bkg.png);
    color: white;
    border: 0px solid white;
  }
  div.content-area {
    width: 100%;
    background: white;
    padding: 1rem 1rem 4rem 1rem;
  }
  div.content-area * {
    color: #051139;
  }
  div.content-title {
    color: #0071ff;
  }

  tr.titleimg {
    background: url(/images/sales/header_row.png);
    background-size: 100% 100%;
  }
  div.grayRow {
    background: #dceffd;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    width: 100%;
  }
  div.grayRow:nth-child(2n + 1) {
    background: #d7f5eb;
  }
  div.grayRow table {
    width: 100%;
  }
  div.form-item div.form-label {
    min-width: 0%;
  }
  div.mobile {
    display: none;
  }
  div.desktop {
    display: block;
  }
  .react-calendar {
    height: 305px;
    background: #14235b;
  }
  .react-calendar * {
    color: white !important;
  }
  .react-calendar__tile:enabled:hover {
    background-color: white;
    border-radius: 20px;
    color: #0075ff;
  }
  .react-calendar__tile--active {
    border-radius: 20px;
  }
  .react-calendar__tile:enabled:hover * {
    color: #0075ff !important;
  }
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: linear-gradient(89.33deg, #0075ff 0.58%, #00d1ff 104.03%);
    background-size: cover;
    border-radius: 20px;
  }
  ${breakpointDown('sm')`
    div.mobile {
        display: block;
    }
    div.desktop {
        display: none;
    }
  `}

  div.middle-title-area {
    background: url(/images/sales/agent_group_header_bkg.png);
    background-size: cover;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    color: white;
  }
  div.middle-title-area div.button:hover {
    background: #fff3;
  }
  div.middle-title-area div {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
  }
  div.middle-title-area div.button {
    background: #0000;
    border: 1px solid #fff9;
    border-radius: 5px;
    cursor: pointer;
  }
`}`;

  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/wewinlogo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Betting History</div>
          </div>
          <div className="content-area">
            <Row>
              <Col breakPoint={{ xs: 12, md: 4 }}>
                <div className="form-item">
                  <div className="form-label">Bet Time</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tr>
                        <td>
                          <input type="text" />
                        </td>
                        <td>
                          <input type="text" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 4 }}>
                <div className="form-item">
                  <div className="form-label">Time zone</div>
                  <div className="form-value">
                    <select>
                      <option>GMT+8</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 4 }}>
                <div className="form-item">
                  <div className="form-label">Member Account</div>
                  <div className="form-value">
                    <input type="text" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Game Provider</div>
                  <div className="form-value">
                    <select>
                      <option>GMT+8</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Product Type</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Game Group</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Game</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Transaction ID</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Match ID</div>
                  <div className="form-value">
                    <select></select>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 6 }}>
                <div className="form-item">
                  <div className="form-label">Total Bet Amount</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '24%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '24%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                          <td style={{ width: '24%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&lt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '24%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Win/lose</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Bonus</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Jackpot betting</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Jackpot prize</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div className="middle-title-area">
                  <div>Status</div>
                  <div className="button">All</div>
                  <div className="button">Solved</div>
                  <div className="button">Refuse</div>
                  <div className="button">Cancel</div>
                  <div className="button">Order cancellation system</div>
                  <div className="button">Active</div>
                  <div className="button">The player cancels</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Button style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}>
                            Reset
                          </Button>
                        </td>
                        <td>
                          <Button
                            style={{
                              border: '0px',
                              background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                              color: 'white',
                              paddingLeft: '1rem',
                              paddingRight: '1rem',
                            }}
                          >
                            Yesterday
                          </Button>
                        </td>
                        <td>
                          <Button
                            style={{
                              border: '0px',
                              background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                              color: 'white',
                              paddingLeft: '1rem',
                              paddingRight: '1rem',
                            }}
                          >
                            Today
                          </Button>
                        </td>
                        <td>
                          <Button
                            style={{
                              border: '0px',
                              background: 'orange',
                              color: 'white',
                              paddingLeft: '1rem',
                              paddingRight: '1rem',
                            }}
                          >
                            Search
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
            <div style={{ height: '1rem' }} />
            <table style={{ width: '100%', border: '1px solid white' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td colSpan={12} style={{ color: 'white', height: '44px' }}>
                    Player Report
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: '8%' }}>Member account Real name</td>
                  <td style={{ width: '8%' }}>Agent Label</td>
                  <td style={{ width: '8%' }}>Real name</td>
                  <td style={{ width: '8%' }}>Name label</td>
                  <td style={{ width: '8%' }}>New agent group</td>
                  <td style={{ width: '8%' }}>Number of recharges</td>
                  <td style={{ width: '8%' }}>Deposit amount</td>
                  <td style={{ width: '8%' }}>Number of withdrawals</td>
                  <td style={{ width: '8%' }}>Withdrawal amount</td>
                  <td style={{ width: '8%' }}>Manual adjustment</td>
                  <td style={{ width: '8%' }}>Total bet amount</td>
                  <td style={{ width: '8%' }}>
                    <img src="/images/sales/eye.png" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={12}>
                    <div className="grayRow">
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ width: '8%', height: '40px' }}>dung5678</td>
                            <td style={{ width: '8%' }}>vip 0</td>
                            <td style={{ width: '8%' }}>Default</td>
                            <td style={{ width: '8%' }}>Eako</td>
                            <td style={{ width: '8%' }}>dung5678</td>
                            <td style={{ width: '8%' }}>2021-01-01</td>
                            <td style={{ width: '8%' }}>0.51</td>
                            <td style={{ width: '8%' }}>1,000.00</td>
                            <td style={{ width: '8%' }}>0.00</td>
                            <td style={{ width: '8%' }}>2022-05-18 00:34:12</td>
                            <td style={{ width: '8%' }}>Activated</td>
                            <td style={{ width: '8%' }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;