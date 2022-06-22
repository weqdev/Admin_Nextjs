import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import { Button } from '@paljs/ui/Button';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AgentReport = () => {
  const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
    padding-top: 1rem;
  }
  .contentHeaderImage {
    border-width: 0rem;
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
    left: 0px;
    bottom: 0;
    width: 100%;
    max-width: 800px;
  }
  div.tabs div.tab {
    cursor: pointer;
    max-width: 200px;
    padding: 1rem;
    float: left;
    background: white;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 1px solid gray;
    color: gray;
    text-align: center;
  }
  div.tabs div.tab.selected {
    background: url(/images/sales/tabcell_bkg.png);
    background-size: cover;
    color: white;
    padding-top: calc(1rem + 2px);
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
    margin-bottom: 0.5rem;
    float: left;
  }
  div.form-label {
    width: 30%;
  }
`}`;
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  const [isMobile, setMobile] = React.useState(null);

  React.useEffect(() => {
    if (window.innerWidth < 768) setMobile(true);
    else setMobile(false);
  }, []);
  if (isMobile === null) return <div />;
  return (
    <Layout title="Account List">
      <CustomCSS />
      <Row>
        <Col className="centerAll">
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Account List</div>
          </div>
          <div className="content-area">
            <div style={{ width: '100%', padding: '1rem' }}>
              <Row>
                <Col breakPoint={{ sm: 12, md: 4 }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ textAlign: 'left' }}>From Date</div>
                    <Calendar onChange={setDate1} value={date1} />
                    <div style={{ marginTop: '0.5rem', textAlign: 'left' }}>To Date</div>
                    <Calendar onChange={setDate2} value={date2} />
                  </div>
                </Col>
                <Col breakPoint={{ sm: 12, md: 8 }}>
                  <div style={{ width: '100%' }}>
                    <Row>
                      <Col breakPoint={{ sm: 12, md: 6 }}>
                        <div style={{ textAlign: 'left' }}>Filter By:</div>
                        <div className="form-item">
                          <div className="form-label">User name</div>
                          <div className="form-value">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="form-label">Status:</div>
                          <div className="form-value">
                            <select>
                              <option>All</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="form-label">Suspend:</div>
                          <div className="form-value">
                            <select>
                              <option>All</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="form-label">Currency:</div>
                          <div className="form-value">
                            <select>
                              <option>All</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="form-label">Order By:</div>
                          <div className="form-value">
                            <select>
                              <option>Username</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="form-label">Order by Dir:</div>
                          <div className="form-value">
                            <select>
                              <option>ASC</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="form-label">Last Login IP:</div>
                          <div className="form-value">
                            <input type="text" />
                          </div>
                        </div>
                      </Col>
                      <Col breakPoint={{ sm: 12, md: 6 }}>
                        <div style={{ textAlign: 'left' }}>Player Type:</div>
                        <div style={{ textAlign: 'left' }}>
                          <Button
                            style={{
                              border: '0px',
                              background: 'url(/images/sales/tabcell_bkg.png',
                              color: 'white',
                              width: '150px',
                              marginTop: '1rem',
                              backgroundSize: 'cover',
                              borderRadius: 10,
                              marginBottom: '1rem',
                            }}
                          >
                            Credit Player
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col breakPoint={{ xs: 12 }}>
                        <div style={{ position: 'relative', height: 50, textAlign: 'left' }}>
                          <div className="tabs">
                            <div
                              className={'tab ' + (selectedTab === 0 && 'selected')}
                              onClick={() => setSelectedTab(0)}
                            >
                              All
                            </div>
                            <div
                              className={'tab ' + (selectedTab === 1 && 'selected')}
                              onClick={() => setSelectedTab(1)}
                            >
                              Today
                            </div>
                            <div
                              className={'tab ' + (selectedTab === 2 && 'selected')}
                              onClick={() => setSelectedTab(2)}
                            >
                              Yesterday
                            </div>
                            <div
                              className={'tab ' + (selectedTab === 3 && 'selected')}
                              onClick={() => setSelectedTab(3)}
                            >
                              Past 7 days
                            </div>
                            <div
                              className={'tab ' + (selectedTab === 4 && 'selected')}
                              onClick={() => setSelectedTab(4)}
                            >
                              Past 30 days
                            </div>
                            <div
                              className={'tab ' + (selectedTab === 5 && 'selected')}
                              onClick={() => setSelectedTab(5)}
                            >
                              This week
                            </div>
                            <div
                              className={'tab ' + (selectedTab === 6 && 'selected')}
                              onClick={() => setSelectedTab(6)}
                            >
                              Last week
                            </div>
                            <div
                              className={'tab ' + (selectedTab === 7 && 'selected')}
                              onClick={() => setSelectedTab(7)}
                            >
                              This Month
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Button
                style={{
                  border: '0px',
                  background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                  color: 'white',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                Submit
              </Button>
              <Button
                style={{
                  background: 'white',
                  color: 'red',
                  border: '1px solid red',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  marginLeft: '2rem',
                }}
              >
                Export To Excel
              </Button>
            </div>
            <table style={{ width: '100%', border: '1px solid white' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td colSpan={12} style={{ color: 'white', height: '44px' }}>
                    Account List
                  </td>
                </tr>
              </thead>
            </table>
            <Table>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Account Type</Th>
                  <Th>User name</Th>
                  <Th>Login Name</Th>
                  <Th>Edit</Th>
                  <Th>Status</Th>
                  <Th>Suspend</Th>
                  <Th>Currency</Th>
                  <Th>First/Last name</Th>
                  <Th>Phone</Th>
                  <Th>Create/Login Time</Th>
                  <Th>Last Login</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>SH</Td>
                  <Td>IND</Td>
                  <Td>IND</Td>
                  <Td>..</Td>
                  <Td>Open</Td>
                  <Td>No</Td>
                  <Td>SGD</Td>
                  <Td>SH INDIA</Td>
                  <Td>--</Td>
                  <Td>2022-04-11 12:00:00</Td>
                  <Td>2022-04-11 12:00:00</Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
