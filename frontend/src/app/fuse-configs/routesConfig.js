import FuseUtils from '@fuse/utils';
import appsConfigs from 'app/main/apps/appsConfigs';
import authRoleExamplesConfigs from 'app/main/auth/authRoleExamplesConfigs';
import CallbackConfig from 'app/main/callback/CallbackConfig';
import DocumentationConfig from 'app/main/documentation/DocumentationConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import RegisterConfig from 'app/main/register/RegisterConfig';
import UserInterfaceConfig from 'app/main/user-interface/UserInterfaceConfig';
import ChartingConfig from 'app/main/charting/ChartingConfig';
import AdminConfig from 'app/main/admin/AdminConfig';

// Custom part
import AccesscontrolConfig from 'app/main/accesscontrol/AccesscontrolConfig';
import AccessDashboardAppConfig from 'app/main/accessdashboard/AccessDashboardAppConfig';

import React from 'react';
import { Redirect } from 'react-router-dom';

const routeConfigs = [
	//...appsConfigs,
	//...pagesConfigs,
	//...authRoleExamplesConfigs,
	//ChartingConfig,
	//AdminConfig,
	//UserInterfaceConfig,
	//DocumentationConfig,
	LoginConfig,
	RegisterConfig,
	LogoutConfig,
	AccesscontrolConfig,
	AccessDashboardAppConfig,
	//CallbackConfig
];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		exact: true,
		//auth: null,
		auth : ['superadmin','admin'], 
		component: () => <Redirect to="/dashboards" />
	},
	{
		component: () => <Redirect to="/login" />
	}
];

export default routes;
