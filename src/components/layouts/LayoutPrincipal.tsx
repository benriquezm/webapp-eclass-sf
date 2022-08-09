import React from 'react';
import Header from '../modules/Header/Header';
import Body from '../modules/Body/Body';

//  TODO show separate Interfaces props
interface ILayoutProps {
	children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
	return (
		<React.Fragment>
			<Header />
			<Body />
		</React.Fragment>
	);
};

export default Layout;
