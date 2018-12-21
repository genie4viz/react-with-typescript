import React, { Suspense } from 'react';
import { RouteConfig, renderRoutes } from 'react-router-config';

import Header from './Header';
import Loading from './Loading';

import { Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: '0 auto'
  },
  toolbar: theme.mixins.toolbar
}));

type Props = {
  route?: RouteConfig;
};

const Layout = (props: Props) => {
  const classes = useStyles({});

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12} sm={9} className={classes.container}>
          <div className={classes.toolbar} />
          <Suspense fallback={<Loading />}>
            {renderRoutes(props.route!.routes)}
          </Suspense>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
