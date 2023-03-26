import FuseSearch from '@fuse/core/FuseSearch';
import FuseShortcuts from '@fuse/core/FuseShortcuts';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
// import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import Alerts from 'app/fuse-layouts/shared-components/Alerts';
import React from 'react';
import { useSelector } from 'react-redux';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
import { rootUrl } from 'app/fuse-configs/apiConfig';

const useStyles = makeStyles(theme => ({
	separator: {
		width: 1,
		height: 64,
		backgroundColor: theme.palette.divider
	}
}));

function ToolbarLayout1(props) {
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);

	const authUser = useSelector(({ auth }) => auth.user);

	const classes = useStyles(props);
	console.log(props);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className="flex relative z-10"
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.default }}
			>
				<Toolbar className="p-0">
					{config.navbar.display && config.navbar.position === 'left' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton className="w-64 h-64 p-0" />
							<div className={classes.separator} />
						</Hidden>
					)}

					<div className="flex flex-1">
						{/* <Hidden mdDown>
							<FuseShortcuts className="px-16" />
						</Hidden> */}
						{  authUser && ( 
							<div className="pl-20 flex justify-center items-center"> 
							{ authUser.domain_image?(
								<div className="w-92 h-52 mr-10"><img className="w-full h-full block rounded" src={`${rootUrl}/imgs/domains/${authUser.domain_image}?random_number=${new Date().getTime()}`} alt={authUser.domain_name}	/></div>
							):(`Domain : ${authUser.domain_name}`) 
							}
							</div>
						) }
					</div>

					<div className="flex">
						{/* <Alerts history={props.history}/>

						<div className={classes.separator} /> */}
						
						<UserMenu />

						{/* <div className={classes.separator} />

						<FuseSearch /> */}

						{/* <div className={classes.separator} />

						<LanguageSwitcher /> */}

						{/* <div className={classes.separator} /> */}

						{/* <QuickPanelToggleButton /> */}
					</div>

					{config.navbar.display && config.navbar.position === 'right' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton />
						</Hidden>
					)}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayout1);
