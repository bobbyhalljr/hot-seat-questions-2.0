import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Rating from 'react-rating'
import { Box, Heading, Button, Text, Stack, useColorMode, Badge, Skeleton, Avatar, Link as ChakraLink, Icon } from '@chakra-ui/core'
import {ImFire} from 'react-icons/im'
import { useSession } from 'next-auth/client'
import Toast from '../components/toast'
import CustomModal from '../components/customModal'

export default function Question({ id, title, description, href, language, name, jobTitle,  ...rest }) {
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}
  const [session, loading] = useSession()
  const [rating, setRating] = useState(1)

  // const router = useRouter()
  // const { id } = router.query

  loading && (
    <div>
      <Skeleton height="20px" my="10px" />
      <Skeleton height="20px" my="10px" />
      <Skeleton height="20px" my="10px" />
    </div>
  )

  const onClickRating = () => {
    {session && (<Toast title='Thank you for rating this question' description='You just made someone feel happier 🤗' status='success'/>)}
    // session && (<Toast title='Thank you for rating this question' description='You just made someone feel happier 🤗' status='success'/>)
    {!session && (<CustomModal />)}
    setRating(value)
  }

  return (
      <Box p={5} mx={4} my={10} shadow="lg" rounded='lg' bg={bgColor[colorMode]} color={color[colorMode]} borderWidth="4px #f1f1f1" {...rest}>
        <Box display='flex' justifyContent='space-between'>
        <Badge rounded="full"  px={2} py={2} my={4} variantColor="teal">
          {language || 'No Language specified'}
        </Badge>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <small>Rate this question</small>
          <Rating style={{ margin: '.5rem 1rem 0 1rem', fontSize: '1.4rem' }} start={0} stop={5} emptySymbol={<ImFire />} fullSymbol={<span> 🔥 </span>}/>
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

