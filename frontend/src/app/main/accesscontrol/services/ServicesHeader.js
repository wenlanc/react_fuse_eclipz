import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../store/actions';

function ServicesHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ accesscontrolApp }) => accesscontrolApp.services.searchText);
	const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);

	useEffect(() => {
		dispatch(Actions.setServiceSearchText(""))
	}, [dispatch]);

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<img
						className="w-32 sm:w-48 rounded"
						src="assets/images/logos/gateways.png"
						alt={'Gateways'}
					/>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
					Gateways
					</Typography>
				</FuseAnimate>
			</div>

			<div className="flex flex-1 items-center justify-center px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideDownIn" delay={300}>
						<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>
							<Icon color="action">search</Icon>

							<Input
								placeholder="Search"
								className="flex flex-1 mx-8"
								disableUnderline
								fullWidth
								value={searchText}
								inputProps={{
									'aria-label': 'Search'
								}}
								onChange={ev => dispatch(Actions.setServiceSearchText(ev.target.value))}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>
			<FuseAnimate animation="transition.slideRightIn" delay={300}>
				<Button
					component={Link}
					to="/services/new"
					className="whitespace-no-wrap normal-case"
					variant="contained"
					color="secondary"
				>
					<span className="hidden sm:flex">Add New Gateway</span>
					<span className="flex sm:hidden">New</span>
				</Button>
			</FuseAnimate>
		</div>
	);
}

export default ServicesHeader;
