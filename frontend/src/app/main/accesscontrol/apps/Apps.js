import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import AppsHeader from './AppsHeader';
import AppsTable from './AppsTable';

function Apps() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<AppsHeader />}
			content={<AppsTable />}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Apps);
