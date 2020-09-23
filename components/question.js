import Link from 'next/link'
import { useRouter } from 'next/router'

import { Box, Heading, Text, Stack, useColorMode, Badge, Avatar, Link as ChakraLink, Icon } from '@chakra-ui/core'

function Question({ id, title, description, href, language, name, jobTitle,  ...rest }) {
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}

  // const router = useRouter()
  // const { id } = router.query

    return (
      <Box p={5} mx={4} my={10} shadow="lg" rounded='lg' bg={bgColor[colorMode]} color={color[colorMode]} borderWidth="4px #f1f1f1" {...rest}>
        <Badge rounded="full"  px={2} py={1} my={4} variantColor="teal">
          {language || 'No Language specified'}
        </Badge>
        <Heading fontSize="2xl">{title}</Heading>
        <Text fontSize='lg' my={3}>{description}</Text>
        <Stack isInline align='center'>
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

export default Question