import React, { useState, useEffect } from 'react';
import { View, Alert, ActivityIndicator, Text, StyleSheet, TextInput  } from 'react-native';
import { Container, Content, List, Item, Input, Icon, Button } from 'native-base';
import TrackItem from '../components/trackItem';
import { getSearchQuery } from '../services/latestTracks'


export default function SearchTab() {

  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    
  }, []) 

  handleClick = () =>{
    setIsLoading(true);
    setTracks([]);
    getSearchQuery(searchQuery).then(data => {
        setTracks(data.result);
        setIsLoading(false);
      }, error => {
        Alert.alert('Error','Something went wrong!!!');
      });
  }
  

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
            <Item>
                <Input  placeholder='Search' value={searchQuery} onChangeText={text => setSearchQuery(text)} />
                <Button onPress={handleClick} style={{margin:5}}><Icon active name='search' /></Button>
            </Item>
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
