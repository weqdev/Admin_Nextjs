import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import React from 'react';
import Link from 'next/link';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import APICall from '../../utils/server_config';
import Auth from 'components/Auth';
import Layout from 'Layouts';

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

export default function ForgotPassword() {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error1, setError1] = React.useState('');
  const [error2, setError2] = React.useState('');
  const onSubmit = () => {
    var sum = '';
    if (error1 || isSubmitting) return;
    setSubmitting(true);
    APICall(
      '/api/forgotpassword',
      {
        username: document.getElementById('username').value,
      },
      (data) => {
        alert('Reset password link sent to ' + data + '. \nPlease check your email including Spam folder.');
        setTimeout(() => {
          setSubmitting(false);
          window.location.href = '/auth/login';
        }, 500);
      },
      (e) => {
        console.log(e);
        setSubmitting(false);
        if (e[0] === -2) window.alert('No account existed');
        else window.alert(e[1] || 'Failed to setup');
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
                <div style={{ textAlign: 'center' }}>
                  <h2>FORGOT PASSWORD</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div>Please enter your email address.</div>
                </div>
                <div style={{ height: '2rem' }}></div>
                <div>Username</div>
                <InputGroup fullWidth>
                  <div style={{ ...roundedBordersTextField, width: '100%', borderRadius: 3 }}>
                    <input
                      type="text"
                      id="username"
                      placeholder=""
                      style={{ border: 0, background: 'transparent' }}
                      onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                          e.preventDefault();
                          onSubmit();
                        }
                      }}
                    />
                  </div>
                </InputGroup>
                <div style={{ color: 'red' }}>{error1}</div>
                <div style={{ height: '2rem' }}></div>
                <Button
                  status="Success"
                  type="button"
                  shape="SemiRound"
                  fullWidth
                  style={{ background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)' }}
                  onClick={onSubmit}
                >
                  {isSubmitting ? 'Sending...' : 'Send reset request'}
                </Button>
              </div>
            </form>
            <p>
              <Link href="/auth/login">
                <a>Back</a>
              </Link>
            </p>
          </Auth>
        </Col>
      </Row>
    </Layout>
  );
}
