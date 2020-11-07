import React, { useState, useEffect } from 'react';
import { View, Alert, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Container, Content, List } from 'native-base';
import { getArtists, getArtistTracks } from '../services/artists'
import ArtistItem from '../components/artistItem';
import ArtistTracksModal from '../components/artistTracksModal';

export default function ArtistsTab() {

  const [isLoading, setIsLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [artistTracks, setArtistTracks] = useState([]);
  

  useEffect(() => {
    getArtists().then(data => {
      setArtists(data.result);
      setIsLoading(false);
    }, error => {
      Alert.alert('Error','Something went wrong!!!');
    });
  }, []) 

  handleOnArtistClick = (artistName, artistId) => {
    
    //console.log(lyricsUrl);
    setShowModal(true);
    setModalTitle(artistName);
    getArtistTracks(artistId).then(data => {
      console.log(data);
      setArtistTracks(data);
    }, error => {
      Alert.alert('Error','Something went wrong while fetching lyrics!!!');
      setArtistTracks([]);
    });

    
  }

  handleOnModalClose = () => {
    setShowModal(false);
    setModalTitle('');
    setArtistTracks([]);
  }

  let view = isLoading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#3CAEA3"/>
    </View>
  ): (
  <List 
    dataArray={artists}
    renderRow={(artist) => {
      return <ArtistItem key={artist.id_artist} data={artist} onClick={handleOnArtistClick} />
    }}/>
  );

  return (
    <Container>
        <Content>
          {view}
        </Content>
        <ArtistTracksModal showModal={showModal} modalTitle={modalTitle} tracks={artistTracks} onClose={handleOnModalClose} />
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

