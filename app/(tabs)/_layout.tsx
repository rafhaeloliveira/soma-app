import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Header } from '@/components/Header';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          header: () => <Header fixed/>
        }}
      />
      <Tabs.Screen
        name="[id]/index"
        options={{
          href: null,
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
          header: () => <Header fixed/>
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          title: 'Mochila',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="backpack" size={24} color={color} />
          ),
          header: () => <Header darkColor />
        }}
      />
    </Tabs>
  );
}
