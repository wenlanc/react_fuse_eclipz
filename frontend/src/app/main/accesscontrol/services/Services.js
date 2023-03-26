import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import ServicesHeader from './ServicesHeader';
import ServicesTable from './ServicesTable';

function Services() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<ServicesHeader />}
			content={<ServicesTable />}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Services);
