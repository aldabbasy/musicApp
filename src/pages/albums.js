import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AlbumsTab() {
  return (
    <View style={styles.container}>
      <Text>Albums Tab</Text>
      <Text>Happi API has no endpoint for list of albums except by passing an artist id</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
