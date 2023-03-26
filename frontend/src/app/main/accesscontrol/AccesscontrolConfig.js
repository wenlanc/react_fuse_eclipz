import React from 'react';
import { Redirect } from 'react-router-dom';

const AccesscontrolConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/apps/e-commerce/products/:productId/:productHandle?',
			component: React.lazy(() => import('./product/Product'))
		},
		{
			path: '/apps/e-commerce/products',
			component: React.lazy(() => import('./products/Products'))
		},
		{
			path: '/apps/e-commerce/orders/:orderId',
			component: React.lazy(() => import('./order/Order'))
		},
		{
			path: '/apps/e-commerce/orders',
			component: React.lazy(() => import('./orders/Orders'))
		},
		// ,
		// {
		// 	path: '/apps/e-commerce',
		// 	component: () => <Redirect to="/apps/e-commerce/products" />
		// }

		{
			path: '/domains/:domainId',
			component: React.lazy(() => import('./domain/Domain')),
			auth:['superadmin']
		},
		{
			path: '/domains',
			component: React.lazy(() => import('./domains/Domains')),
			auth:['superadmin']
		},

		{
			path: '/users/:userId',
			component: React.lazy(() => import('./user/User')),
			auth:['superadmin','admin']
		},

		{
			path: '/users',
			component: React.lazy(() => import('./users/Users')),
			auth:['superadmin','admin']
		},

		{
			path: '/groups/:groupId',
			component: React.lazy(() => import('./group/Group')),
			auth:['superadmin','admin']
		},

		{
			path: '/groups',
			component: React.lazy(() => import('./groups/Groups')),
			auth:['superadmin','admin']
		},

		{
			path: '/gwgroups/:gwgroupId',
			component: React.lazy(() => import('./gwgroup/GwGroup')),
			auth:['superadmin','admin']
		},

		{
			path: '/gwgroups',
			component: React.lazy(() => import('./gwgroups/GwGroups')),
			auth:['superadmin','admin']
		},


		{
			path: '/admins/:adminId',
			component: React.lazy(() => import('./admin/Admin')),
			auth:['superadmin','admin']
		},

		{
			path: '/admins',
			component: React.lazy(() => import('./admins/Admins')),
			auth:['superadmin','admin']
		},

		{
			path: '/services/:serviceId',
			component: React.lazy(() => import('./service/Service')),
			auth:['superadmin','admin']
		},

		{
			path: '/services',
			component: React.lazy(() => import('./services/Services')),
			auth:['superadmin','admin']
		},
		{
			path: '/applications/:appId',
			component: React.lazy(() => import('./app/App')),
			auth:['superadmin','admin']
		},

		{
			path: '/applications',
			component: React.lazy(() => import('./apps/Apps')),
			auth:['superadmin','admin']
		},

		{
			path: '/downloads/:downloadId',
			component: React.lazy(() => import('./download/Download')),
			auth:['superadmin']
		},
		
		{
			path: '/downloads',
			component: React.lazy(() => import('./downloads/Downloads')),
			auth:['superadmin','admin']
		},
		
		{
			path: '/settings',
			component: React.lazy(() => import('./settings/Settings')),
			auth:['superadmin','admin']
		},

		{
			path: '/wizard',
			component: React.lazy(() => import('./wizard/Wizard')),
			auth:['superadmin','admin']
		},

		{
			path: '/profile',
			component: React.lazy(() => import('./profile/Profile')),
			auth:['superadmin','admin']
		},	

	]
};

export default AccesscontrolConfig;
