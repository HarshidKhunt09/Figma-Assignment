import { CloseCircleOutlined } from '@ant-design/icons';
import * as Sentry from '@sentry/react';
import { Result, Typography } from 'antd';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Error404 from './Error404';
import {
  ERROR_PAGE_SUBTITLE,
  ERROR_PAGE_TITLE,
  ROUTES,
} from './common/constants';
import history from './historyData';
import UIComponents from './modules/dashboard/UIComponents';
import MaintenancePage from './modules/dashboard/components/MaintenancePage';

const { Paragraph } = Typography;

const MyFallbackComponent = ({ error, componentStack }) => (
  <Result
    status="error"
    title={ERROR_PAGE_TITLE}
    subTitle={ERROR_PAGE_SUBTITLE}
  >
    <div className="desc">
      <Paragraph>
        <Typography.Title level={4}> Error:</Typography.Title>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your
        {error?.message?.toString()}
      </Paragraph>
      <Paragraph>
        <Typography.Title level={4}> Stacktrace:</Typography.Title>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your
        {componentStack}
      </Paragraph>
    </div>
  </Result>
);

const Routes = () => {
  // use this variable from envs so that we can able to run maintenance page on runtime.
  const maintenance = process.env.REACT_APP_MAINTENANCE_ENABLE;

  return (
    <Sentry.ErrorBoundary fallback={MyFallbackComponent}>
      <Router history={history}>
        {maintenance === 'true' ? (
          <MaintenancePage />
        ) : (
          <Switch>
            <Route exact path={ROUTES?.MAIN} component={UIComponents} />
            <Route path="*" exact component={Error404} />
          </Switch>
        )}
      </Router>
    </Sentry.ErrorBoundary>
  );
};
export default Routes;
