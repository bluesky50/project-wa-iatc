import React from 'react';

const Header = (props) => {
	return (
		<div style={{ width: '100%' }}>
			<h3>{props.title}</h3>
		</div>
	);
}

export default Header;