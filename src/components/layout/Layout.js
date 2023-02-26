import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

/**
 * Route'ları Layout içine ekleyip props.children ile render ederiz
 * 
 * main kısmına değişen componentleri koyup üstüne Sabit component'i
 * yani navbar'ı ekliyoruz
 */

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
