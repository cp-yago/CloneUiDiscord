import React, { useRef, useEffect} from 'react'

import ChannelMessage, {Mention} from '../ChannelMessage'

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(10).keys()).map((n) => (
          <ChannelMessage
            author="Yago Cunha"
            date="19/08/2020"
            content="Hoje é o meu aniversário"
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="19/08/2020"
          content={
            <>
            <Mention>@Yago Cunha</Mention>, Parabéns!!!
            </>
          }
          hasMention
          isBot  
        />

      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
      
    </Container>
  )
}

export default ChannelData