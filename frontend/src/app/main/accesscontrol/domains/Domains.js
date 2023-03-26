import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import DomainsHeader from './DomainsHeader';
import DomainsTable from './DomainsTable';

function Domains() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<DomainsHeader />}
			content={<DomainsTable />}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Domains);
