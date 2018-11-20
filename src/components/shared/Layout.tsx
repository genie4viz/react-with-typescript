import React from "react";

import { Grid } from "@material-ui/core";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core/styles";

import Header from "./Header";

const styles = (theme: Theme) =>
	createStyles({
		container: {
			margin: "0 auto"
		},
		toolbar: theme.mixins.toolbar
	});

type Props = WithStyles<typeof styles> & {
	children?: React.ReactNode;
};

const Layout = (props: Props) => {
	const { classes, children } = props;

	return (
		<>
			<Header />
			<Grid container>
				<Grid item xs={12} sm={9} className={classes.container}>
					<div className={classes.toolbar} />
					{children}
				</Grid>
			</Grid>
		</>
	);
};

export default withStyles(styles, { withTheme: true })(Layout);