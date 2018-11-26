import React from 'react';

import { AppBar, Toolbar, Button, Grid, InputBase } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';

import LinkButton from 'components/button/LinkButton';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1
		},
		container: {
			margin: '0 auto',
			display: 'flex'
		},
		homeButton: {
			marginRight: theme.spacing.unit / 2
		},
		loginButton: {
			marginLeft: theme.spacing.unit / 2
		},
		button: {
			marginLeft: theme.spacing.unit / 2,
			marginRight: theme.spacing.unit / 2
		},
		selected: {
			color: '#fff'
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25)
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing.unit,
				width: 'auto'
			}
		},
		searchIcon: {
			width: theme.spacing.unit * 8,
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		inputRoot: {
			color: 'inherit',
			width: '100%'
		},
		inputInput: {
			paddingTop: theme.spacing.unit,
			paddingRight: theme.spacing.unit,
			paddingBottom: theme.spacing.unit,
			paddingLeft: theme.spacing.unit * 8,
			transition: theme.transitions.create('width'),
			width: '100%',
			height: '100%',
			[theme.breakpoints.up('sm')]: {
				width: 120,
				'&:focus': {
					width: 200
				}
			}
		}
	})
);

const Links = [
	{
		link: '/about',
		title: 'About'
	},
	{
		link: '/contact',
		title: 'Contact'
	},
	{
		link: '/counter',
		title: 'Counter'
	}
];

const Header = () => {
	const classes = useStyles({});

	return (
		<AppBar position="fixed">
			<Toolbar disableGutters>
				<Grid container>
					<Grid item xs={12} sm={9} className={classes.container}>
						<LinkButton
							variant="outlined"
							className={classes.homeButton}
							to={'/'}
							exact={true}
							activeClassName={classes.selected}
						>
							RTW
						</LinkButton>
						{Links.map(item => (
							<LinkButton
								key={item.title}
								className={classes.button}
								to={item.link}
								activeClassName={classes.selected}
							>
								{item.title}
							</LinkButton>
						))}
						<span className={classes.grow} />
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
							/>
						</div>
						<Button className={classes.loginButton}>Login</Button>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
