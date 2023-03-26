import _ from '@lodash';
import clsx from 'clsx';
import React from 'react';
import { statuses } from 'app/fuse-configs/apiConfig';

function DomainStatus(props) {
	return (
		<div className={clsx('inline text-12 p-4 rounded truncate', _.find(statuses, { value: props.value }).color)}>
			{ _.find(statuses, { value: props.value }).label }
		</div>
	);
}

export default DomainStatus;
