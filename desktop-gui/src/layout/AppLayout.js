import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TopNav from '../containers/navs/Topnav';
import Sidebar from '../containers/navs/Sidebar';
import Footer from '../containers/navs/Footer';

const AppLayout = ({ containerClassnames, children, history }) => {
  return (
    <div id="app-container" className={containerClassnames}>
      {/* <TopNav history={history} /> */}
      <Sidebar />
      <main
        ref={(element) => {
          if (element) {
            element.style.setProperty('margin-top', '0px', 'important');
            element.style.setProperty('margin-left', '140px', 'important');
          }
        }}
        style={{
          marginLeft: '140px',
          marginTop: '0px',
          minHeight: 'calc(100%-80px)',
        }}
      >
        <div className="container-fluid">{children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
