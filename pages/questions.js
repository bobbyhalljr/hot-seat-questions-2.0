import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Box, 
  Heading,
  Flex
} from '@chakra-ui/core'
import Main from '../components/main'
import Container from '../components/container'
import {fakeData} from '../data/fakeData'
import Question from '../components/question'
import CallToAction from '../components/callToAction'

export default function Page () {
  return (
    <Container>
      <Main>
        <Heading mx={4}>Questions</Heading>
        {/* <Box> */}
          {/* <Box> */}
            {fakeData.map(data => (
              <Question 
              key={data.title}
              title={data.question}
              description={data.description}
              language={data.language}
              name={data.name}
              jobTitle={data.jobTitle}
              src={data.src}
              />
              ))}
          {/* </Box> */}
        {/* </Box> */}
      </Main>
      <CallToAction />
    </Container>
  )
}