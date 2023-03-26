import React from 'react';

const AccessDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/dashboards',
			component: React.lazy(() => import('./AccessDashboardApp'))
		}
	]
};

export default AccessDashboardAppConfig;
