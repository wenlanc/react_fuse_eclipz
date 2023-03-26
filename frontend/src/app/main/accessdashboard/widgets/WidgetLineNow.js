import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';

function WidgetLineNow() {
	const [time, setTime] = useState(moment());
	const intervalRef = useRef();

	useEffect(() => {
		intervalRef.current = setInterval(update, 1000);
		return () => {
			clearInterval(intervalRef.current);
		};
	});

	function update() {
		setTime(moment());
	}

	return (
			<div className="flex items-center justify-between px-4 pt-4">
				<Typography className="text-16 px-12">{time.format('MMMM')} {time.format('D')} {time.format('Y')} {time.format('dddd, HH:mm:ss')}</Typography>
			</div>
			
	);
}

export default React.memo(WidgetLineNow);
