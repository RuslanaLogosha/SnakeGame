import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import Navigation from './Navigation';

export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Grid container justify="space-around" alignItems="center">
					<Grid item>
						<Navigation />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
