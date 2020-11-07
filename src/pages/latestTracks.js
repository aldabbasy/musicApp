import React, { useState, useEffect } from 'react';
import { View, Alert, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Container, Content, List } from 'native-base';
import { getLatestTracks, getLyrics } from '../services/latestTracks'
import TrackItem from '../components/trackItem';
import LyricsModal from '../components/lyricsModal';

export default function LatestTracksTab() {

  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [trackLyrics, setTrackLyrics] = useState('Loading...');

  useEffect(() => {
    getLatestTracks().then(data => {
      setTracks(data.tracks);
      setIsLoading(false);
    }, error => {
      Alert.alert('Error','Something went wrong!!!');
    });
  }, []) 

  handleOnTrackClick = (trackName, trackId, artistId, albumId) => {
    let lyricsUrl = `/artists/${artistId}/albums/${albumId}/tracks/${trackId}/lyrics`;
    //console.log(lyricsUrl);
    setShowModal(true);
    setModalTitle(trackName);
    getLyrics(lyricsUrl).then(data => {
      setTrackLyrics(data.lyrics != null ? data.lyrics : 'no lyrics founds');
    }, error => {
      //Alert.alert('Error','Something went wrong while fetching lyrics!!!');
      setTrackLyrics('no lyrics founds');
    });

    
  }

  handleOnModalClose = () => {
    setShowModal(false);
    setModalTitle('');
    setTrackLyrics('Loading...');
  }

  let view = isLoading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#3CAEA3"/>
    </View>
  ): (
  <List 
    dataArray={tracks}
    renderRow={(track) => {
      return <TrackItem key={track.id_track} data={track} onClick={handleOnTrackClick}/>
    }}/>
  );

  return (
    <Container>
        <Content>
          {view}
        </Content>
        <LyricsModal showModal={showModal} modalTitle={modalTitle} trackLyrics={trackLyrics} onClose={handleOnModalClose} />
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
