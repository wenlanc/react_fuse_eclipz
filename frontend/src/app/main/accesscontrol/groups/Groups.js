import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import GroupsHeader from './GroupsHeader';
import GroupsTable from './GroupsTable';

function Groups() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<GroupsHeader />}
			content={<GroupsTable />}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Groups);
