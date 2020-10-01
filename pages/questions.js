import React, {useEffect, useState} from 'react'
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
// import { PrismaClient } from '@prisma/client';
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Page() {
  // const [questions, setQuestions] = useState()
  const { data, error } = useSwr('http://localhost:3000/api/questions', fetcher)
  console.log(data)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  // async function getAllQuestions(){
  //   await fetch('/api/questions/getAllQuestions/', {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   // .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  // useEffect(() => {
  //   getAllQuestions()
  // },[])

  return (
    <Container>
      <Main>
        <Heading mx={4}>Questions</Heading>
        {/* <Box> */}
          {/* <Box> */}
            {data.map(question => (
              <Question 
              question={question}
              key={question.title}
              title={question.title}
              description={question.description}
              language={question.language}
              name={question.name || ''}
              jobTitle={question.jobTitle || ''}
              src={question.src || ''}
              />
              ))}
          {/* </Box> */}
        {/* </Box> */}
      </Main>
      <CallToAction userId={data.map(id => {return id})}/>
    </Container>
  )
}

// export async function getSeverSideProps(){
//   const prisma = new PrismaClient()

//   const questions = await prisma.post.findMany({
//     include: { user: true }
//   }) 

//   return {
//     props: {
//       questions,
//     }
//   }
// }


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
