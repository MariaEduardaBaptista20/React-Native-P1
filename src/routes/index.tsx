import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabRoutes } from './BootonTabNavigation';

export const Routes = () => {
	return <NavigationContainer>
		<BottomTabRoutes />
	</NavigationContainer>
}