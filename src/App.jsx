import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Ask from './components/Ask';
import Jobs from './components/Jobs';
import Recent from './components/Recent';
import TopAndNew from './components/TopAndNew';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appbar: {
		zIndex: 0,
		// marginBottom: '16px'
	},
	divThing: {
		marginTop: '16px'
	}
}));

export default function App() {
	const classes = useStyles();
	return (
		<>
			<BrowserRouter>
				<AppBar position='fixed' className={classes.appbar}>
					<Toolbar>
						<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							News
						</Typography>
						<Button color='inherit'>Login</Button>
					</Toolbar>
				</AppBar>
				<div className={classes.divThing}>
					<Switch>
						<Route exact path='/Ask' component={Ask} />
						<Route exact path='/Jobs' component={Jobs} />
						<Route exact path='/Recent' component={Recent} />
						<Route exact path='/TopAndNew' component={TopAndNew} />
						<Redirect from='*' to='/Recent' />
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
}
