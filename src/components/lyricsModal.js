import React, {useEffect} from 'react';
import { StyleSheet, Dimensions, Modal } from 'react-native';
import { Container, Header, Tab, Tabs, Text, Left, Body, Right, Button, Content, Icon, Title } from 'native-base';
import Font from "expo-font";

export default function LyricsModal({ showModal, modalTitle, trackLyrics, onClose }) {

    handleClose = () => {
        return onClose();
    }

    return (
        <Modal animationType="fade" transparent visible={showModal} onRequestClose={handleClose}>
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button onPress={handleClose} transparent>
                            <Icon name='close' style={styles.headerText}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title children={modalTitle} style={styles.headerText} />
                    </Body>
                </Header>
                <Content>
                    <Container style={styles.content}>
                        <Content>
                            <Text>{trackLyrics}</Text>
                        </Content>
                    </Container>
                </Content>
            </Container>
        </Modal>
      );
  }

  const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginBottom: 0,
        backgroundColor: '#fff'
    },
    header: {
      backgroundColor: '#3CAEA3',
    },
    headerText: {
      color: '#fff',
      fontSize: 16
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });