import { Button } from '@paljs/ui/Button';
import { useRouter } from 'next/router';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Select from '@paljs/ui/Select';

import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';
import Encryption from '../../utils/encryption';
import APICall from '../../utils/server_config';
import { title } from 'process';

const options = [{ value: 'English', label: 'English' }];

const roundedBorders = {
  border: 'double 1px transparent',
  borderRadius: '1rem',
  backgroundImage: 'linear-gradient(#121537, #0d0f20), linear-gradient(to bottom right, #aaa, #2f2f2f,#aaa)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};
const roundedBordersTextField = {
  border: 'double 1px transparent',
  borderRadius: '1rem',
  backgroundImage: 'linear-gradient(#121537, #121537), linear-gradient(to bottom right, #aaa, #2f2f2f,#aaa)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};

export default function Login() {
  const [checked, setChecked] = React.useState(true);
  const [calling, setCalling] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(Date.now());
  const router = useRouter();
  React.useEffect(() => {
    document.cookie = '';
    localStorage.removeItem('user_info');
  }, []);
  const onCheckbox = (v) => {
    setChecked(v);
  };
  var onLogin = () => {
    if (calling) return;
    setCalling(true);
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var f = currentTime;
    APICall(
      '/api/login',
      {
        username,
        password,
        f,
        captcha: document.getElementById('validationCode').value,
      },
      (data) => {
        localStorage.setItem('user_info', data[1]);
        if (data[0]) {
          if (data[0].sixDigitCode) setTimeout(() => (window.location.href = '/auth/confirm-login'), 500);
          else if (data[0].passwordsetup) setTimeout(() => (window.location.href = '/security/change_pin_code'), 500);
          else setTimeout(() => (window.location.href = '/security/change_password'), 500);
          // setTimeout(() => (window.location.href = '/sales/agent_group'), 500);
        }
      },
      (e) => {
        document.getElementById('validationCode').value = '';
        console.log(e);
        setCalling(false);
        if (e[0] === -2) window.alert('No account existed');
        else if (e[0] === -2007) {
          window.alert('Invalid validation code. Try again.');
          document.getElementById('validationCode').value = '';
        } else window.alert('Failed to login');
        setCurrentTime(Date.now());
      },
    );
  };
  return (
    <Layout title="Login">
      <Row>
        <Col breakPoint={{ xs: 0, lg: 7 }}>
          <div
            style={{
              background: 'url(/images/background.png)',
              backgroundSize: 'cover',
              height: '100vh',
              position: 'absolute',
              width: '100%',
              left: 0,
              top: 0,
            }}
          ></div>
          <div style={{ position: 'absolute', margin: 'auto', width: '100%', display: 'flex', height: '100vh' }}>
            <div style={{ margin: 'auto', display: 'block', textAlign: 'center' }}>
              <h1 style={{ color: 'white' }}>Welcome!</h1>
              <h5 style={{ color: 'white' }}>Betting Rules + Bets Offered</h5>
              <img src="/images/footballguys.png" style={{ width: '90%' }}></img>
            </div>
          </div>
        </Col>
        <Col breakPoint={{ xs: 12, lg: 5 }}>
          <div
            style={{
              background: 'linear-gradient(180deg, #121537 0%, #0D0F20 100%)',
              height: '100vh',
              position: 'absolute',
              width: '100%',
              left: 0,
              top: 0,
            }}
          ></div>
          <Auth title="" subTitle="">
            <div style={{ textAlign: 'center' }}>
              <img src="/images/logo.png" style={{ width: '60%', textAlign: 'center', marginBottom: '2rem' }}></img>
            </div>
            <form className="" style={{ ...roundedBorders }}>
              <div style={{ padding: '2rem 2rem' }}>
                {/* <div>Language</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <Select options={options} placeholder="English" />
                  </div>
                </InputGroup> */}
                <div style={{ marginTop: '1rem' }}>Username</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="text"
                      id="username"
                      autoComplete="off"
                      placeholder=""
                      style={{ border: 0, background: 'transparent' }}
                    />
                  </div>
                </InputGroup>
                <div style={{ marginTop: '1rem' }}>Password</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="password"
                      id="password"
                      placeholder=""
                      style={{ border: 0, background: 'transparent' }}
                    />
                  </div>
                </InputGroup>
                <div style={{ marginTop: '1rem' }}>Validation Code</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="text"
                      placeholder=""
                      autoComplete="off"
                      id="validationCode"
                      style={{ border: 0, background: 'transparent' }}
                      onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                          onLogin();
                        }
                      }}
                    />
                  </div>
                </InputGroup>
                <img
                  src={'/api/codevalidate/' + currentTime}
                  width={150}
                  height={50}
                  style={{ cursor: 'pointer', border: '1px solid white', marginTop: '0.5rem' }}
                  onClick={() => setCurrentTime(Date.now())}
                  title="Click to choose other captcha."
                />
                <Group>
                  {/* <Checkbox checked onChange={onCheckbox}>
                    Remember me
                  </Checkbox> */}
                  {/* <Link href="/auth/forgotpassword"> */}
                  <a href="/auth/forgotpassword">Forgot Password?</a>
                  {/* </Link> */}
                </Group>
                <Button
                  status="Success"
                  type="button"
                  shape="SemiRound"
                  fullWidth
                  style={{ background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)' }}
                  onClick={onLogin}
                >
                  {calling ? 'Logging in...' : 'Login'}
                </Button>
              </div>
            </form>
          </Auth>
        </Col>
      </Row>
    </Layout>
  );
}
