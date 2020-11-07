import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, Text, Left, Body, Right } from 'native-base';
import Font from "expo-font";
import LatestTracksTab from '../pages/latestTracks';
import ArtistsTab from '../pages/artists';
import AlbumsTab from '../pages/albums';
import SearchTab from '../pages/search';

export default function TabsNav() {
    return (
        <Container>
          <Header hasTabs style={styles.tabStyles}>
            <Left />
            <Body>
            <Text style={{color:'#fff'}}>Music App</Text>
            </Body>
            <Right />
          </Header>
          <Tabs tabBarPosition ='bottom'>
            <Tab textStyle={{color:'#fff'}} tabStyle={styles.tabStyles} activeTabStyle={styles.activTabStyles} heading="Latest Tracks">
              <LatestTracksTab />
            </Tab>
            <Tab textStyle={{color:'#fff'}} tabStyle={styles.tabStyles} activeTabStyle={styles.activTabStyles} heading="Artists">
              <ArtistsTab />
            </Tab>
            <Tab textStyle={{color:'#fff'}} tabStyle={styles.tabStyles} activeTabStyle={styles.activTabStyles} heading="Albums">
              <AlbumsTab />
            </Tab>
            <Tab textStyle={{color:'#fff'}} tabStyle={styles.tabStyles} activeTabStyle={styles.activTabStyles} heading="Search">
              <SearchTab />
            </Tab>
          </Tabs>
        </Container>
      );
  }

  const styles = StyleSheet.create({
    tabStyles: {
      backgroundColor: '#3CAEA3',
    },
    activTabStyles: {
      backgroundColor: '#20639B',
    }
  });