import React from 'react';

import { Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

import Header from './Header';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			margin: '0 auto'
		},
		toolbar: theme.mixins.toolbar
	})
);

type Props = {
	children?: React.ReactNode;
};

const Layout = (props: Props) => {
	const classes = useStyles({});

	return (
		<>
			<Header />
			<Grid container>
				<Grid item xs={12} sm={9} className={classes.container}>
					<div className={classes.toolbar} />
					{props.children}
				</Grid>
			</Grid>
		</>
	);
};

export default Layout;
