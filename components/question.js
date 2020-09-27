import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Rating from 'react-rating'
import { Box, Heading, Button, badge, Text, Stack, useColorMode, Badge, Skeleton, Avatar, Link as ChakraLink, Icon } from '@chakra-ui/core'
import {ImFire} from 'react-icons/im'
import { useSession } from 'next-auth/client'
import Toast from '../components/toast'
import CustomModal from '../components/customModal'
import FlameRating from '../components/fireRating'
// import Rating from 'r@cogent-labs/react-rating-component'
import { useToast } from "@chakra-ui/core"
// import Picker from 'emoji-picker-react';
import {RiHeartAddLine} from 'react-icons/ri'

export default function Question({ id, title, description, href, language, name, jobTitle,  ...rest }) {
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}
  const [session, loading] = useSession()
  const [rating, setRating] = useState(0)
  // const [emoji, setEmoji] = useState(null)
  
  const toast = useToast();

  // const router = useRouter()
  // const { id } = router.query

  loading && (
    <div>
      <Skeleton height="20px" my="10px" />
      <Skeleton height="20px" my="10px" />
      <Skeleton height="20px" my="10px" />
    </div>
  )

  // const onEmojiClick = (event, emoji) => {
  //   setEmoji(emoji)
  // };

  // const showPicker = () => (
  //   <Picker onEmojiClick={onEmojiClick}/>
  // )

  const onClickRating = (value) => {
    setRating(value)
    session ? 
    // user is signed in (success)
    toast({
      title: 'Vote successful!!',
      description: 'Thank you for taking the time to vote 🥳',
      status: 'success',
      position: 'top',
      duration: 7000,
      isClosable: true,
    }) 
    :
    // user is not signed in (error)
    toast({
      title: 'Please sign in to vote',
      description: 'We require signing in because of spam, thank you',
      status: 'error',
      position: 'top',
      duration: 7000,
      isClosable: true,
    }) 
  }

  return (
      <Box p={5} mx={4} my={10} shadow="lg" rounded='lg' bg={bgColor[colorMode]} color={color[colorMode]} borderWidth="4px #f1f1f1" {...rest}>
        <Box m={1} mb={8} display='flex' justifyContent='space-between'>
          <Box>
            <Badge rounded="full" px={2} py={2} m={1} variantColor="teal">
              {language || 'No Language specified'}
            </Badge>
          </Box>
          <Box display='flex' flexDirection='column' mr={1}>
            {(rating <= 1) && <small style={{ marginBottom: '.5rem' }}>Rate this question</small>}
            <Rating {...rating} initialRating={rating} onClick={onClickRating} style={{ fontSize: '1.4rem' }} start={0} stop={5} emptySymbol={<ImFire />} fullSymbol={<span> 🔥 </span>}/>
            {(rating > 0) && session && <small>{`you voted ${rating} out of 5`}</small>}
          </Box>
        </Box>
      <Heading mt={6} fontSize="2xl">{title}</Heading>
      
      <Text fontSize='lg' fontWeight='medium' my={4}>{description}</Text>
      <Stack mt={6} isInline align='center'>
        <Avatar
          my={4}
          mb={6}
          size="md"
          name={name}
          src={null}
        />
        <Stack spacing={0.5} letterSpacing='1.6'>
          <Text fontWeight='semibold'>{name}</Text>
          <Text color='gray.400' fontWeight='semibold'>{jobTitle}</Text>
        </Stack>
      </Stack>
      {/* <Badge p={3} m={1} rounded='full' >
        {emoji ? <Picker onEmojiClick={onEmojiClick} /> : <RiHeartAddLine size='1rem'/>}
      </Badge>
      <small style={{ marginLeft: '.5rem' }}>Show some love</small> */}
      {/* <div>
        {emoji ? (
          <span>You chose: {emoji.emoji}</span>
        ) : (
          <span>No emoji Chosen</span>
        )}
        <Picker onEmojiClick={onEmojiClick} />
      </div> */}
      {/* <Link href='/questions/[id]' as={`/questions/${id}`}>
        <a>
          <Text flexGrow={1} mx={2} my={4} color='red.500' fontWeight='semibold' fontSize='lg'>
            View Full Question <Icon name='arrow-forward' size='24px' color='red.500'/>
          </Text>
        </a>
      </Link> */}
    </Box>
  );
}

