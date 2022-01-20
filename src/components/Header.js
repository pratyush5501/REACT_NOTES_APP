import React from 'react';

const Header = ({ HandleToggleDarkMode }) => {
	return (
		<div className='Header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					HandleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
}
    export default Header;