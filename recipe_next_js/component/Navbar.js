import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AppBar, Container, Link, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import NextLink from 'next/link';

export default function NavBar({ children }) {
	return (
		<div>
			<Toolbar style={{ backgroundColor: 'white' }}>
				<NextLink href="/" passHref>
					<Link>
						<Typography
							style={{
								font: 'SansSerif',
								fontSize: '15px',
								letterSpacing: '1px',
								color: 'blue'
							}}
						>
							HOME
						</Typography>
					</Link>
				</NextLink>
				<div style={{ marginRight: '40px' }} />
				<Typography
					style={{
						fontSize: '25px',
						marginLeft: '20px',
						marginRight: '20px',
						color: 'blue'
					}}
				>
					|
				</Typography>
				<div style={{ marginRight: '40px' }} />
				<NextLink href="/create-recipe" passHref>
					<Link>
						<Typography
							style={{
								font: 'SansSerif',
								fontSize: '15px',
								letterSpacing: '1px',
								color: 'blue'
							}}
						>
							CREATE RECIPES
						</Typography>
					</Link>
				</NextLink>
			</Toolbar>
			<Container
				style={{
					minHeight: '75vh',
					minWidth: '80vw'
				}}
			>
				{children}
			</Container>
		</div>
	);
}
