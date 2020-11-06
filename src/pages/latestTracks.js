import React, { useState, useEffect } from 'react';
import { View, Alert, ActivityIndicator, Text } from 'react-native';
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
    <View>
      <ActivityIndicator animating={isLoading}/>
      <Text style={{marginTop: 10}}>Loading...</Text>
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
