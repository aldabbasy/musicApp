import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';
import Font from "expo-font";
import LatestTracksTab from '../pages/latestTracks';
import ArtistsTab from '../pages/artists';
import AlbumsTab from '../pages/albums';

export default function TabsNav() {
    return (
        <Container>
          <Header hasTabs style={tabStyles.container} />
          <Tabs tabBarPosition ='bottom'>
            <Tab textStyle={{color:'#fff'}} tabStyle={tabStyles.container} activeTabStyle={activTabStyles.container} heading="Latest Tracks">
              <LatestTracksTab />
            </Tab>
            <Tab textStyle={{color:'#fff'}} tabStyle={tabStyles.container} activeTabStyle={activTabStyles.container} heading="Artists">
              <ArtistsTab />
            </Tab>
            <Tab textStyle={{color:'#fff'}} tabStyle={tabStyles.container} activeTabStyle={activTabStyles.container} heading="Albums">
              <AlbumsTab />
            </Tab>
          </Tabs>
        </Container>
      );
  }

  const tabStyles = StyleSheet.create({
    container: {
      backgroundColor: '#3CAEA3',
    },
  });
  const activTabStyles = StyleSheet.create({
    container: {
      backgroundColor: '#20639B',
    },
  });