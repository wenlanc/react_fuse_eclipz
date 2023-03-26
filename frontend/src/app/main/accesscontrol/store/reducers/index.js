import { combineReducers } from 'redux';
import order from './order.reducer';
import orders from './orders.reducer';
import product from './product.reducer';
import products from './products.reducer';
import domains from './domains.reducer';
import domain from './domain.reducer';
import users from './users.reducer';
import user from './user.reducer';
import groups from './groups.reducer';
import group from './group.reducer';
import admins from './admins.reducer';
import admin from './admin.reducer';
import services from './services.reducer';
import service from './service.reducer';
import apps from './apps.reducer';
import app from './app.reducer';
import downloads from './downloads.reducer';
import download from './download.reducer';
import settings from './settings.reducer';
import options from './options.reducer';
import profiles from './profiles.reducer';
import profile2fa from './profile2fa.reducer';
import gwgroups from './gwgroups.reducer';
import gwgroup from './gwgroup.reducer';

const reducer = combineReducers({
	products,
	product,
	orders,
	order,
	domains,
	domain,
	users,
	user,
	groups,
	group,
	admins,
	admin,
	services,
	service,
	apps,
	app,
	downloads,
	download,
	settings,
	options,
	profiles,
	profile2fa,
	gwgroup,
	gwgroups,
});

export default reducer;
