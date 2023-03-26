import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import DownloadsHeader from './DownloadsHeader';
import DownloadsTable from './DownloadsTable';

function Downloads() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<DownloadsHeader />}
			content={<DownloadsTable />}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Downloads);
