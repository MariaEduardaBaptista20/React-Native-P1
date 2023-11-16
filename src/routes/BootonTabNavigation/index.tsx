import { Image } from 'react-native';
import { EmCartaz } from '../../screens/Filmes/EmCartaz/index';
import { Login } from '../../screens/Login/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SkillIcon from '../../assets/imagem48.png';
import ShopIcon from '../../assets/imagem49.png';



const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	EmCartaz: {};
	Login: {};
}

export function BottomTabRoutes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
				tabBarInactiveTintColor: '#aaa',
				tabBarActiveTintColor: '#fff'
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={SkillIcon}
							style={{ tintColor: color, width: 30 }}
						/>
					)
				}}
				name="EmCartaz"
				component={EmCartaz}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={ShopIcon}
							style={{ tintColor: color, width: 30 }}
						/>
					)
				}}
				name="Login"
				component={Login}
			/>
		
		</Tab.Navigator>
	);
}