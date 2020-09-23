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
import Layout from '../components/layout'
import {fakeData} from '../data/fakeData'
import Question from '../components/question'

export default function Page () {
  return (
    <>
    <Layout>
      <Box mx='0 auto'>
      <Heading mx={4}>Questions</Heading>
      <Box>
        <Box>
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
        </Box>
      </Box>
      </Box>
    </Layout>
    </>
  )
}