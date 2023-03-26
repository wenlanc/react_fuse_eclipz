import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import Widget1 from './widgets/Widget1';
import Widget10 from './widgets/Widget10';
import Widget11 from './widgets/Widget11';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import WidgetNow from './widgets/WidgetNow';
import WidgetLineNow from './widgets/WidgetLineNow';
import WidgetWeather from './widgets/WidgetWeather';
import { Bar, Line } from 'react-chartjs-2';
import { useTheme } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
	selectedProject: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '8px 0 0 0'
	},
	projectMenuButton: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '0 8px 0 0',
		marginLeft: 1
	}
}));

const mainChart =  {
	
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			type: 'bar',
			label: 'Issues',
			data: [42, 28, 43, 34, 20, 25, 22],
			backgroundColor: '#42BFF7',
			hoverBackgroundColor: '#87CDF7',
			categoryPercentage: 1
		},
		{
			type: 'bar',
			label: 'Closed issues',
			data: [11, 10, 8, 11, 8, 10, 17],
			backgroundColor: '#C6ECFD',
			hoverBackgroundColor: '#D7EFFD',
			categoryPercentage: 1
		}
	],
		
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		tooltips: {
			mode: 'label'
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					display: true,
					gridLines: {
						display: false
					},
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				}
			],
			yAxes: [
				{
					stacked: true,
					type: 'linear',
					display: true,
					position: 'left',
					gridLines: {
						display: false
					},
					labels: {
						show: true
					}
				}
			]
		}
	}
}

function AccessDashboardApp(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(({ dashboardApp }) => dashboardApp.widgets);
console.log(widgets)
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const theme = useTheme();
	const authUser = useSelector(({ auth }) => auth.user);
	useEffect(() => {
		dispatch(Actions.getWidgets());
	}, [dispatch]);

	if (!widgets) {
		return null;
	}

	const bytesToSize = (bytes, decimals = 2) => {
		if (bytes === 0) return '0 Bytes';

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	 }

	return (
		<FusePageSimple
			classes={{
				header: 'min-h-60 h-60',
				toolbar: 'min-h-48 h-48',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			header={
				<div className="flex flex-col justify-between flex-1 px-12 pt-12">
					<div className="flex justify-between items-start">
						<Typography className="py-0 sm:py-12" variant="h6" style={{display:'flex', width:"100%", justifyContent:"space-between"}}>
							Welcome, {authUser.data.displayName}
							<WidgetLineNow />
						</Typography>
						
					</div>
				</div>
			}
			
			content={
				<div className="p-12">
					<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12" style={{
								display:'flex',
								alignSelf: 'center',
								justifyContent: 'center'
								}}>
								<Paper className="w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1">
									<div className="flex items-center justify-between px-4 pt-4">
									</div>
									<div className="text-center pt-8 pb-12">
										<Typography className="text-36 leading-none text-red">{widgets.admins_count}</Typography>
										<Typography className="text-16" color="textSecondary">
											Admins
										</Typography>
									</div>
								</Paper>
							</div>

							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12" style={{
								display:'flex',
								alignSelf: 'center',
								justifyContent: 'center'
								}}>
								<Paper className="w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1">
									<div className="flex items-center justify-between px-4 pt-4">
									</div>
									<div className="text-center pt-8 pb-12">
										<Typography className="text-36 leading-none text-orange">{widgets.users_count}</Typography>
										<Typography className="text-16" color="textSecondary">
										Clients
										</Typography>
									</div>
								</Paper>
							</div>

							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12" style={{
								display:'flex',
								alignSelf: 'center',
								justifyContent: 'center'
								}}>
								<Paper className="w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1">
									<div className="flex items-center justify-between px-4 pt-4">
									</div>
									<div className="text-center pt-8 pb-12">
										<Typography className="text-36 leading-none text-green">{widgets.services_count}</Typography>
										<Typography className="text-16" color="textSecondary">
										Gateways
										</Typography>
									</div>
								</Paper>
							</div>

							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12" style={{
								display:'flex',
								alignSelf: 'center',
								justifyContent: 'center'
								}}>
								<Paper className="w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1">
									<div className="flex items-center justify-between px-4 pt-4">
									</div>
									<div className="text-center pt-8 pb-12">
										<Typography className="text-36 leading-none text-blue">{widgets.groups_count}</Typography>
										<Typography className="text-16" color="textSecondary">
										Groups
										</Typography>
									</div>
								</Paper>
							</div>


							<div className="widget flex w-full p-12">
								<div className="flex w-full flex-wrap p-8">
									<Bar
										data={{
											labels: widgets.currentMonthDatesLabels,
											datasets: [
												{
													type: 'bar',
													label: 'Admins',
													data: widgets.adminSessionMonth,
													backgroundColor: '#42BFF7',
													hoverBackgroundColor: '#87CDF7',
													categoryPercentage: 1
												},
												{
													type: 'bar',
													label: 'Clients',
													data: widgets.userSessionMonth,
													backgroundColor: '#C6ECFD',
													hoverBackgroundColor: '#D7EFFD',
													categoryPercentage: 1
												},
												{
													type: 'bar',
													label: 'Gateways',
													data: widgets.serviceSessionMonth,
													backgroundColor: '#FF4141',
													hoverBackgroundColor: '#D7EFFD',
													categoryPercentage: 1
												}
											].map((obj, index) => {
												const palette = theme.palette[index === 0 ? 'primary' : 'secondary'];
												return {
													...obj,
													borderColor: palette.main,
													backgroundColor: palette.main,
													pointBackgroundColor: palette.dark,
													pointHoverBackgroundColor: palette.main,
													pointBorderColor: palette.contrastText,
													pointHoverBorderColor: palette.contrastText
												};
											})
										}}
										options={
											{
												responsive: true,
												maintainAspectRatio: false,
												legend: {
													display: false
												},
												tooltips: {
													mode: 'label'
												},
												scales: {
													xAxes: [
														{
															stacked: true,
															display: true,
															gridLines: {
																display: false
															},
															labels: widgets.currentMonthDatesLabels
														}
													],
													yAxes: [
														{
															stacked: true,
															type: 'linear',
															display: true,
															position: 'left',
															gridLines: {
																display: false
															},
															labels: {
																show: true
															}
														}
													]
												}
											}
										}
									/>
								</div>
							</div>

							<div className="widget flex w-full p-12">
								<div className="flex w-full sm:w-1/2 md:w-1/4 p-12 flex-wrap p-8">
									<Paper className="w-full rounded-8 shadow-none border-1">
										<div className="flex items-center justify-between px-8 h-32 border-b-1">
											<Typography className="text-16">RX bytes - Top 5 Clients</Typography>
										</div>
										<div className="h-350 w-full p-16">
											<Doughnut
												data={{
													labels: widgets.user_rx_label,
													datasets: [
														{
															data: widgets.user_rx_data,
															backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
															hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
														}
													],
												}}
												options={{
													cutoutPercentage: 0,
													spanGaps: false,
													legend: {
														display: true,
														position: 'right',
														labels: {
															padding: 4,
															usePointStyle: true
														}
													},
													maintainAspectRatio: false,
													tooltips: {
														callbacks: {
														 // title: (items, data) => items[0],
														  label: (item, data) => { return widgets.user_rx_label[item.index] + " : " + bytesToSize(widgets.user_rx_data[item.index]) ; }
														}
													  },
													// plugins: {
													// 	tooltip: {
													// 		enabled: true,
													// 		usePointStyle: true,
													// 		callbacks: { 
													// 			// To change title in tooltip
													// 			title: (data) => { return data[0].parsed.x }, 
															
													// 			// To change label in tooltip
													// 			label: (data) => { 
													// 					return data.parsed.y === 2 ? "Good" : "Critical"
													// 			}
													// 		},
													// 	},
													// },
												}}
											/>
										</div>
									</Paper>
								</div>

								<div className="flex w-full sm:w-1/2 md:w-1/4 p-12 flex-wrap p-8">
									<Paper className="w-full rounded-8 shadow-none border-1">
										<div className="flex items-center justify-between px-8 h-32 border-b-1">
											<Typography className="text-16">TX bytes - Top 5 Clients</Typography>
										</div>
										<div className="h-350 w-full p-16">
											<Doughnut
												data={{
													labels: widgets.user_tx_label,
													datasets: [
														{
															data: widgets.user_tx_data,
															backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
															hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
														}
													]
												}}
												options={{cutoutPercentage: 0,
													spanGaps: false,
													legend: {
														display: true,
														position: 'right',
														labels: {
															padding: 4,
															usePointStyle: true
														}
													},
													maintainAspectRatio: false,
													tooltips: {
														callbacks: {
														  label: (item, data) => { return widgets.user_tx_label[item.index] + " : " + bytesToSize(widgets.user_tx_data[item.index]) ; }
														}
													  }}}
											/>
										</div>
									</Paper>
								</div>

								<div className="flex w-full sm:w-1/2 md:w-1/4 p-12 flex-wrap p-8">
									<Paper className="w-full rounded-8 shadow-none border-1">
										<div className="flex items-center justify-between px-8 h-32 border-b-1">
											<Typography className="text-16">RX bytes - Top 5 Gateways</Typography>
										</div>
										<div className="h-350 w-full p-16">
											<Doughnut
												data={{
													labels: widgets.service_rx_label,
													datasets: [
														{
															data: widgets.service_rx_data,
															backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
															hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
														}
													]
												}}
												options={{cutoutPercentage: 0,
													spanGaps: false,
													legend: {
														display: true,
														position: 'right',
														labels: {
															padding: 4,
															usePointStyle: true
														}
													},
													maintainAspectRatio: false,
													tooltips: {
														callbacks: {
														  label: (item, data) => { return widgets.service_rx_label[item.index] + " : " + bytesToSize(widgets.service_rx_data[item.index]) ; }
														}
													  }}}
											/>
										</div>
									</Paper>
								</div>

								<div className="flex w-full sm:w-1/2 md:w-1/4 p-12 flex-wrap p-8">
									<Paper className="w-full rounded-8 shadow-none border-1">
										<div className="flex items-center justify-between px-8 h-32 border-b-1">
											<Typography className="text-16">TX bytes - Top 5 Gateways</Typography>
										</div>
										<div className="h-350 w-full p-16">
											<Doughnut
												data={{
													labels: widgets.service_tx_label,
													datasets: [
														{
															data: widgets.service_tx_data,
															backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
															hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
														}
													]
												}}
												options={{cutoutPercentage: 0,
													spanGaps: false,
													legend: {
														display: true,
														position: 'right',
														labels: {
															padding: 4,
															usePointStyle: true
														}
													},
													maintainAspectRatio: false,
													tooltips: {
														callbacks: {
														  label: (item, data) => { return widgets.service_tx_label[item.index] + " : " + bytesToSize(widgets.service_tx_data[item.index]) ; }
														}
													  }}}
											/>
										</div>
									</Paper>
								</div>

							</div>
						</FuseAnimateGroup>
				</div>
			}
			//rightSidebarContent={
				// <FuseAnimateGroup
				// 	className="w-full"
				// 	enter={{
				// 		animation: 'transition.slideUpBigIn'
				// 	}}
				// >
				// 	<div className="widget w-full p-12">
				// 		<WidgetNow />
				// 	</div>
				// </FuseAnimateGroup>
			//}
			ref={pageLayout}
		/>
	);
}

export default withReducer('dashboardApp', reducer)(AccessDashboardApp);
