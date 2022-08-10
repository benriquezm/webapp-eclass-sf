import React from 'react';
import Header from '../modules/Header/Header';

//  TODO show separate Interfaces props
interface ILayoutProps {
	children: React.ReactNode;
}

const LayoutPrincipal = (props: ILayoutProps) => {
	return (
		<React.Fragment>
			<base href='/' />
			<Header />
			<main>{props.children}</main>
		</React.Fragment>
	);
};

export default LayoutPrincipal;
