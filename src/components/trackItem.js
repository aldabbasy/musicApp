import React from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default function TrackItem({ data, onClick }) {

  handleOnClick = () => {
    return onClick(data.track, data.id_track,  data.id_artist, data.id_album);
  }

  return (
    <ListItem thumbnail>
        <Left>
        <Thumbnail square source={{ uri: `${data.cover}` }} />
        </Left>
        <Body>
        <Text>{data.track}</Text>
        <Text note numberOfLines={1}>Artist: {data.artist}</Text>
        <Text note numberOfLines={1}>Album: {data.album}</Text>
        </Body>
        <Right>
        <Button onPress={handleOnClick} transparent>
            <Text>View</Text>
        </Button>
        </Right>
    </ListItem>
  );
}
