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
// import {fakeData} from '../data/fakeData'
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
              title={data.title}
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

// export default 


const fakeData = [
  {
      title: "I crushed that interview!",
      description: "The first question was get duplicates from array... good thing I saw this question on 'hot seat questions'. ",
      language: "JavaScript",
      name: "Bobby Hall Jr",
      jobTitle: "Full Stack Engineer",
      src: "https://bit.ly/prosper-baba"
  },
  {
      title: "I totally bombed that interview!",
      description: "At the end of the interview they wanted me to write a function to return treu if the string was a palindrone, and false otherwise...",
      language: "Python",
      name: "Glenn Rice",
      jobTitle: "Python Engineer",
      src: "https://bit.ly/prosper-baba"
  },
  {
      title: "I love hot seat questions!",
      description: "During the second round interview I got asked this question, how to reverse a linked list",
      language: "Java",
      name: "Jarome Carter",
      jobTitle: "Software Engineer",
      src: "https://bit.ly/prosper-baba"
  }
]
