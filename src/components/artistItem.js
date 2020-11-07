import React from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default function ArtistItem({ data, onClick }) {

  handleOnClick = () => {
    return onClick(data.artist, data.id_artist);
  }

  return (
    <ListItem thumbnail>
        <Left>
        <Thumbnail square source={{ uri: `${data.cover}` }} />
        </Left>
        <Body>
        <Text>{data.artist}</Text>
        </Body>
        <Right>
        <Button onPress={handleOnClick} transparent>
            <Text>View</Text>
        </Button>
        </Right>
    </ListItem>
  );
}
