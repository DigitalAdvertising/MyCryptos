import React from 'react';
import { Dimensions, Animated } from 'react-native';
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../../language/i18n';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../../mycryptos_splash.png');

class Splash extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			isWallet: false
		};
	}
	// componentDidMount() {

	// }

	render() {
		setTimeout(() => {
			storage
				.load({
					key: 'walletInfo'
				})
				.then((res) => {
					this.props.navigation.navigate('Home',{
						refresh: true,
						address: "init"
					});
				})
				.catch((err) => {
					this.props.navigation.navigate('Guide');
				});
		}, 1500);
		return (
			<Animated.Image
				style={{
					width: maxWidth,
					height: maxHeight
				}}
				source={splashImg}
			/>
		);
	}
}

export default withNavigation(Splash);
