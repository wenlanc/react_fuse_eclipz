import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import React from 'react';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id : 'dashboard',
		title : 'Dashboard',
		icon : 'dashboard',
		type: 'item',
		url : '/dashboards',
		auth : ['admin','superadmin']
	},
	
	{
		id : 'settings',
		title : 'Settings',
		icon : 'admin_panel_settings',
		type: 'item',
		url : '/settings',
		//auth : ['superadmin']
	},

	{
		id : 'domains',
		title : 'Domains',
		icon : 'language',
		type: 'item',
		url : '/domains',
		auth : ['superadmin']
	},

	{
		id : 'admins',
		title : 'Admins',
		icon : 'how_to_reg',
		type: 'item',
		url : '/admins'
	},

	{
		id : 'services',
		title : 'Gateways',
		icon : 'call_split',
		type: 'item',
		url : '/services'
	},
	{
		id : 'gwgroups',
		title : 'Mesh Networks',
		icon : 'group_work',
		type: 'item',
		url : '/gwgroups'
	},
	{
		id : 'apps',
		title : 'Applications',
		icon : 'widgets',
		type: 'item',
		url : '/applications'
	},
	{
		id : 'users',
		title : 'Clients',
		icon : 'contacts',
		type: 'item',
		url : '/users'
	},
	
	{
		id : 'groups',
		title : 'Groups',
		icon : 'group',
		type: 'item',
		url : '/groups'
	},

	{
		id : 'downloads',
		title : 'Downloads',
		icon : 'cloud_download',
		type: 'item',
		url : '/downloads'
	},

	{
		id : 'wizard',
		title : 'Wizard',
		icon : 'build',
		type: 'item',
		url : '/wizard'
	},

];

export default navigationConfig;
