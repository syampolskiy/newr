// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';
// make a component
const Header = (props) => {
	const {textStyle, viewStyle} = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
}

const styles = {
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		paddingBottom: 15,
		borderBottomWidth: 2,
		borderBottomColor: '#000000',
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
}

// make the component available to other parts of the app
export default Header;