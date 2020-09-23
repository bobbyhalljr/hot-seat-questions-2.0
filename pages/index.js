import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Button,
  Box,
  Heading,
  useColorMode,
} from '@chakra-ui/core'
import {Main} from '../components/main'
import { Container } from '../components/container'
import {fakeData} from '../data/fakeData'
import Question from '../components/question'
import {Hero} from '../components/hero'
import Link from 'next/link'

export default function Page () {
  const { colorMode } = useColorMode()
  const bgColor = {light: 'gray.100', dark: 'gray.700'}
  const color = {light: 'gray.800', dark: 'white'}
  // const [ session, { loading: sessionLoading } ] = useSession()

  return (
    <Container>
    <Main>
      <Hero />

      <Heading mt={24} mx={['6', '10']}>
        How it works 🚀
      </Heading>
      <List spacing={['4', '6']} fontSize={['lg', 'xl']} mx={['6', '10']}>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Login with your email or github account
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Post a question
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          View other questions 
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          Be prepared and crush that interview!
        </ListItem>
      </List>
      <Heading mt={24} mx={6} textAlign='center'>So.. what are you waiting for?</Heading>
      <Box mt={['2', '6']} display='flex' justifyContent='center' alignItems='center'>
        <Link href="/questions" as="/questions">
          <a>
            <Button _hover={{ bg: 'gray.100', color: 'red.500' }}  rounded='lg' shadow='sm' color='white' bg='red.500' fontSize='2xl'>View Questions</Button>
          </a>
        </Link>
      </Box>
    </Main>
    </Container>
  )
}