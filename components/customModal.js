import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Textarea,
  Select,
  useToast,
} from "@chakra-ui/core";
import { signIn, useSession } from "next-auth/client";
import { mutate } from "swr";
import fetch from "../lib/fetch";
import useQuestions from "../lib/hooks/useQuestions";

import { supabase } from "../lib/initSupabase";

export default function CustomModal({ questions }) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [signedIn, setSignedIn] = React.useState(false);
  // const [jobTitle, setJobTitle] = React.useState('')
  const [session] = useSession();
  // const { questions } = useQuestions();

  const toast = useToast();
  const initialRef = React.useRef();

  const signIn = async () => {
    let { user, error } = await supabase.auth.signIn({
      provider: "github",
    });
    return user, error;
  };

  return (
    <>
      <Button
        _hover={{ bg: "gray.200", color: "red.500" }}
        transition="all 0.4s cubic-bezier(.08,.52,.52,1)"
        width="90%"
        m={4}
        mb={6}
        rounded="full"
        color="white"
        fontSize={["1rem", "xl"]}
        fontWeight="semibold"
        bg="red.500"
        onClick={onOpen}
      >
        POST A QUESTION
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          {!session ? (
            <ModalHeader>Create your account</ModalHeader>
          ) : (
            <ModalHeader>Post a question</ModalHeader>
          )}
          <ModalCloseButton />
          {!signedIn ? (
            <ModalBody py={10} scrollBehavior={!scrollBehavior}>
              <Box textAlign="center" my={4}>
                <Text>Before you post</Text>
                <Text fontSize="2xl" fontWeight="medium" mb={6}>
                  Sign in with GitHub
                </Text>
                <Button
                  className="signInButton"
                  // href='/api/auth/signin'
                  onClick={() => {
                    // signIn();
                    setSignedIn(true);
                    // signIn();
                  }}
                >
                  Sign in
                </Button>
              </Box>
            </ModalBody>
          ) : (
            <>
              <ModalBody mb={6}>
                <Text
                  mb={4}
                  fontSize="xl"
                  fontWeight="medium"
                  my={8}
                >{`Hello!, We Hope you crushed your interview!`}</Text>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    // await fetch("/api/questions/createQuestion", {
                    //   method: "POST",
                    //   body: JSON.stringify({
                    //     title,
                    //     description,
                    //     language,
                    //     user: { connect: { email: session.user.email } },
                    //   }),
                    // });

                    // mutate("/api/questions", [...questions]);

                    questions.push({
                      title,
                      description,
                      language,
                    });

                    setTitle("");
                    setDescription("");
                    setLanguage("");
                    onToggle();
                    toast({
                      title: "Question submitted successfully!",
                      description: "Thank you for sharing 😁",
                      status: "success",
                      position: "top",
                      duration: 5000,
                      isClosable: true,
                    });
                  }}
                >
                  {/* <FormControl mt={6} isRequired>
                    <FormLabel mb={2}>Job Title</FormLabel>
                    <Input onChange={e => setJobTitle(e.target.value)} value={jobTitle} shadow='md' variant='outline' name='jobTitle' placeholder="Software Engineer" />
                  </FormControl> */}

                  <FormControl mt={6} isRequired>
                    <FormLabel mb={2}>Question</FormLabel>
                    <Input
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      shadow="md"
                      variant="outline"
                      name="title"
                      placeholder="How to reverse a linked list..."
                    />
                  </FormControl>

                  <FormControl mt={6} isRequired>
                    <FormLabel mb={2}>Description</FormLabel>
                    <Textarea
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      shadow="md"
                      variant="outline"
                      name="description"
                      placeholder="Crushed that interview !"
                    />
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel mb={2}>What language did you use?:</FormLabel>
                    <Select
                      onChange={(e) => setLanguage(e.target.value)}
                      value={language}
                      shadow="md"
                      name="language"
                      variant="outline"
                      placeholder="JavaScript, Python, Java, etc..."
                    >
                      <option value="JavaScript">JavaScript</option>
                      <option value="Python">Python</option>
                      <option value="Java">Java</option>
                      <option value="C">C</option>
                      <option value="C++">C++</option>
                      <option value="C#">C#</option>
                      <option value="Go">GO</option>
                      <option value="TypeScript">TypeScript</option>
                    </Select>
                  </FormControl>
                  <Box d="flex" justifyContent="flex-end" pt={8}>
                    <Button mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" variantColor="blue">
                      Post
                    </Button>
                  </Box>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
