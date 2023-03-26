import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import AdminsHeader from './AdminsHeader';
import AdminsTable from './AdminsTable';


function Admins() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<AdminsHeader />}
			content={<AdminsTable />}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Admins);
