import * as Sentry from '@sentry/react';
import { Button, ConfigProvider, message } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/main.less';
import themeJson from './styles/style.json';

if (process.env?.REACT_APP_ENV === 'local') {
  Sentry.init({
    dsn: process.env?.REACT_APP_SENTRY_DSN,
    environment: process.env?.REACT_APP_ENV,
    tracesSampleRate: 1.0,
  });
}

// eslint-disable-next-line no-undef
const root = ReactDOM?.createRoot(document?.getElementById('root'));
root?.render(
  <ConfigProvider theme={themeJson}>
    <Routes />
  </ConfigProvider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    if (registration?.waiting) {
      // eslint-disable-next-line no-console
      console?.log('Inside registration');
      message?.info({
        content: (
          <>
            New version available! Click Reload to get the latest version.
            <Button
              className="ml-1 mb-0"
              type="link"
              onClick={() => {
                registration?.waiting?.postMessage({ type: 'SKIP_WAITING' });
                // eslint-disable-next-line no-undef
                window.location.reload();
              }}
            >
              Reload
            </Button>
          </>
        ),
        duration: 0,
      });
    }
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
