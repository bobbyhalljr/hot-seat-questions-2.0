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
    useToast
} from "@chakra-ui/core";
import Link from 'next/link'
// import gql from 'graphql-tag'
// import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
// import {useSession} from 'next-auth'
// import { getAllPosts } from '../pages/index'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function CustomModal({ createQuestion, headerText, buttonText, inputLabel1, inputLabel2 }) {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside")
    const [question, setQuestion] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [language, setLanguage] = React.useState('')
    const [session] = useSession()
    
    // const CREATE_POST = gql`
    //   mutation createPost($question: String!, $description: String!, $language: String){
    //     createPost(question: $question, description: $description, language: $language){
    //       id
    //       question
    //       description
    //       language
    //       authorId
    //       author {
    //         name
    //         jobTitle
    //       }
    //     }
    //   }
    // `

    const router = useRouter()
    const toast = useToast()

    // const [createPost, { data }] = useMutation(CREATE_POST)
    // const { data: { posts } } = useQuery(getAllPosts)

    const initialRef = React.useRef();

    return (
      <>
        <Button _hover={{ bg: 'gray.200', color: 'red.500' }} transition="all 0.4s cubic-bezier(.08,.52,.52,1)" width="90%" m={4} mb={6} rounded='full' color='white' fontSize={['1rem', 'xl']} fontWeight='semibold' bg='red.500' onClick={onOpen}>POST A QUESTION</Button>
        
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
          {!session ?
            <ModalHeader>Create your account</ModalHeader>
            :
            <ModalHeader>Post a question</ModalHeader>
          }
            <ModalCloseButton />
            {!session ? (
              <ModalBody py={10} scrollBehavior={!scrollBehavior}>
                <Box textAlign='center' my={4}>
                  <Text>Before you post</Text>
                  <Text fontSize='2xl' fontWeight='medium' mb={6}>Sign in with GitHub</Text>
                    <Button as={'a'} className="signInButton"
                      href='/api/auth/signin'
                      onClick={() => {
                        signIn()
                      }}
                    >Sign in</Button>
                </Box>
              </ModalBody>
              )
              :
              (
                <>
              <ModalBody mb={6}>
                <Text mb={4} fontSize='xl' fontWeight='medium' my={8}>{`Hello!  , We Hope you crushed your interview!`}</Text>
                
                <form onSubmit={(e) => {
                  e.preventDefault()
                  // createPost({
                  //   variables: {
                  //     question: question,
                  //     description: description,
                  //     language: language,
                  //   },
                  //   refetchQueries: posts.map(id => ({
                  //     query: getAllPosts,
                  //     variables: { id }
                  //   })),
                  //   update(cache, { data: { posts } }){
                  //     const stalePosts = cache.readQuery({ query: getAllPosts })

                  //     cache.writeQuery({ 
                  //       query: getAllPosts,
                  //       data: { posts: [stalePosts, createPost] }
                  //     })
                  //   }
                  // }),
                  fetch('http://localhost:3000/api/createQuestion', {
                    method: 'POST',
                    body: JSON.stringify({ ...question, ...description, ...language }),
                  })
                  setQuestion('')
                  setDescription('')
                  setLanguage('')
                  onToggle()
                  toast({
                    title: "Question submitted successfully!",
                    description: "Thank you for sharing 😁",
                    status: "success",
                    position: 'top',
                    duration: 5000,
                    isClosable: true,
                  })
                }}>
                  <FormControl mt={6} isRequired>
                    <FormLabel mb={2}>Question</FormLabel>
                    <Input onChange={e => setQuestion(e.target.value)} value={question} shadow='md' variant='outline' name='title' placeholder="How to reverse a linked list..." />
                  </FormControl>

                  <FormControl mt={6} isRequired>
                    <FormLabel mb={2}>Description</FormLabel>
                    <Textarea onChange={e => setDescription(e.target.value)} value={description} shadow='md' variant='outline' name='description' placeholder="Crushed that interview !" />
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel mb={2}>What language did you use?:</FormLabel>
                    <Select onChange={e => setLanguage(e.target.value)} value={language} shadow='md' name='language' variant="outline" placeholder="JavaScript, Python, Java, etc...">
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
                  <Box d='flex' justifyContent='flex-end' pt={8}>
                    <Button mr={3} onClick={onClose}>Cancel</Button>
                    <Button type='submit' variantColor="blue">
                      Post
                    </Button>
                  </Box>
                </form>
              </ModalBody>
            </>
            )}
  
            {/* <ModalFooter>
              <Button variantColor="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    );
  }

  // export async function getStaticProps(){
  //   const prisma = new PrismaClient()

  //   const createQuestion = await prisma.post.create({
  //     data: {
  //       title: question.title,
  //       description: question.description,
  //       language: question.language,
  //     }
  //   })

  //   return {
  //     props: {
  //       createQuestion
  //     }
  //   }
  // }