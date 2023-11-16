import { Image } from 'react-native';
import { EmCartaz } from '../../screens/Filmes/EmCartaz/index';
import { Login } from '../../screens/Login/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Destaque } from '../../screens/Destaques/index';
import { Noticias } from '../../screens/Noticias/index';
import { Cinema } from '../../screens/Cinema/index';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	EmCartaz: {};
	Login: {};
	Destaque: {};
	Cinema: {};
	Noticias: {};
}

export function BottomTabRoutes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
				tabBarInactiveTintColor: '#aaa',
				tabBarActiveTintColor: '#DB7819'
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="movie-open-outline" size={24} color={color} />
					)
				}}
				name="EmCartaz"
				component={EmCartaz}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="person-outline" size={24} color={color} />
					)
				}}
				name="Login"
				component={Login}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="staro" size={24} color={color} />
					)
				}}
				name="Destaque"
				component={Destaque}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="videocamera" size={24} color={color} />
					)
				}}
				name="Cinema"
				component={Cinema}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="newspaper" size={24} color={color} />
					)
				}}
				name="Noticias"
				component={Noticias}
			/>


		</Tab.Navigator>
	);
}