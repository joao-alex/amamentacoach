import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image } from 'react-native';

import { IMessage, listMessages } from '../../services/messages';

import {
  AddMessageButton,
  Author,
  Content,
  FlatlistContainer,
  Line,
  MessageContainer,
  LoadingIndicator,
} from './styles';

import AddIcon from '../../../assets/images/icons/ic_add.png';

const Messages: React.FC = () => {
  const navigation = useNavigation();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [noMoreMessages, setNoMoreMessages] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddMessageButton onPress={() => navigation.navigate('NewMessage')}>
          <Image source={AddIcon} />
        </AddMessageButton>
      ),
    });
  }, [navigation]);

  async function fetchMessages(currentPage: number) {
    setLoading(true);
    const newMessages = await listMessages(currentPage);
    if (newMessages) {
      if (newMessages.length === 0) {
        setNoMoreMessages(true);
      }

      // Ordena as mensagens de acordo com suas datas em ordem decrescente.
      newMessages.sort((a, b) => (a.date < b.date ? 1 : -1));
      setMessages([...messages, ...newMessages]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMessages(1);
  }, []);

  async function fetchOlderMessages() {
    if (loading || noMoreMessages) {
      return;
    }
    await fetchMessages(page + 1);
    setPage(page + 1);
  }

  function InfoPage({ name, content }: IMessage) {
    return (
      <MessageContainer>
        <Author>{name}</Author>
        <Content>{content}</Content>
        <Line />
      </MessageContainer>
    );
  }

  return (
    <FlatlistContainer>
      <FlatList
        data={messages}
        renderItem={({ item }) => <InfoPage {...item} />}
        keyExtractor={(item) => item.name + item.date + item.content}
        onEndReached={fetchOlderMessages}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => (
          <LoadingIndicator size="large" color="#7d5cd7" animating={loading} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </FlatlistContainer>
  );
};

export default Messages;