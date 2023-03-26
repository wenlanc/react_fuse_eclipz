import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
// import { ProtectedRoute, UserRole } from '../../helpers/authHelper';

const StatusPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-status" */ './status')
);
const AppsPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-apps" */ './apps')
);
const PeersPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-peers" */ './peers')
);
const AboutPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-peers" */ './about')
);
const ProtectionPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-peers" */ './protection')
);
const PrivacyPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-peers" */ './privacy')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/status`} />
            <Route
              path={`${match.url}/status`}
              render={(props) => <StatusPage {...props} />}
            />
            <Route
              path={`${match.url}/apps`}
              render={(props) => <AppsPage {...props} />}
            />
            <Route
              path={`${match.url}/peers`}
              render={(props) => <PeersPage {...props} />}
            />
            <Route
              path={`${match.url}/protection`}
              render={(props) => <ProtectionPage {...props} />}
            />
            <Route
              path={`${match.url}/privacy`}
              render={(props) => <PrivacyPage {...props} />}
            />
            <Route
              path={`${match.url}/about`}
              render={(props) => <AboutPage {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/second-menu`}
                    component={SecondMenu}
                    roles={[UserRole.Admin]}
            /> */}
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
