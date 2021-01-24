import React from "react";
import { Box, Heading, Skeleton } from "@chakra-ui/core";
import Main from "../components/main";
import Container from "../components/container";
import Question from "../components/question";
import CallToAction from "../components/callToAction";
// import useQuestions from '../lib/hooks/useQuestions'
import questions from "../data";

export default function Page() {
  // const { data, error } = useQuestions()

  // if (error) return <div>Failed to load users</div>
  if (!questions)
    return (
      <>
        <Box maxW="800px" marginX="auto" paddingY="1rem" marginY="2rem">
          <Skeleton>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
          </Skeleton>
        </Box>
        <Box maxW="800px" marginX="auto" paddingY="1rem" marginY="2rem">
          <Skeleton>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
          </Skeleton>
        </Box>
        <Box maxW="800px" marginX="auto" paddingY="1rem" marginY="2rem">
          <Skeleton>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
          </Skeleton>
        </Box>
        <Box maxW="800px" marginX="auto" paddingY="1rem" marginY="2rem">
          <Skeleton>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
          </Skeleton>
        </Box>
      </>
    );

  return (
    <Container>
      <Main>
        <Heading mx={4}>Questions</Heading>
        {questions.map((question) => (
          <Question
            question={question}
            key={question.title}
            rating={question.rating}
            title={question.title}
            description={question.description}
            language={question.language}
            name={question.name || ""}
            jobTitle={question.jobTitle || ""}
            src={question.src || ""}
          />
        ))}
      </Main>
      <CallToAction questions={questions} />
    </Container>
  );
}
