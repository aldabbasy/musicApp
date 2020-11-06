import React, { useState, useEffect } from 'react';
import { View, Alert, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Container, Content, List } from 'native-base';
import {getLatestTracks} from '../services/latestTracks'
import TrackItem from '../components/trackItem';

export default function LatestTracksTab() {

  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getLatestTracks().then(data => {
      setTracks(data.tracks);
      setIsLoading(false);
    }, error => {
      Alert.alert('Error','Something went wrong!!!');
    });
  });

  let view = isLoading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#3CAEA3"/>
    </View>
  ): (
  <List 
    dataArray={tracks}
    renderRow={(track) => {
      return <TrackItem key={track.id_track} data={track}/>
    }}/>
  );

  return (
    <Container>
        <Content>
          {view}
        </Content>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
