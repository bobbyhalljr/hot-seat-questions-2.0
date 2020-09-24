import React, { useState } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './header.module.css'
import { 
    Box, 
    Heading, 
    Flex, 
    Text, 
    Button, 
    useColorMode,  
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Avatar,
    DrawerCloseButton,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
    Link as ChakraLink,
    Stack,
    } from "@chakra-ui/core";
    import DarkModeSwitch from './darkModeSwitch'
    import theme from '../styles/theme'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} m={2} display='flex' justifyContent='flex-start' fontSize='xl' fontWeight='semibold' p={2}>
    {children}
  </Text>
);

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header (props) {
  const [ session, loading ] = useSession()

  const [show, setShow] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const handlePlacementChange = event => setPlacement(event.target.value);

  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const color = { light: "black", dark: "white" };
  
  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="nowrap"
      padding={3}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      w='full'
      position='fixed'
      zIndex='100'
      {...props}
      >

      <Link href='/' as ='/'>
          <a>
              <Text fontWeight='bold' whiteSpace='nowrap' fontSize={['md', '3xl']} mr={12} ml={2}>
                  Hot Seat Questions 🔥
              </Text>
          </a>
      </Link>
      <Box display={['none', 'none', 'inline-block']} ml='auto' mr={12}>
          <Box display='flex'>
              <Box d='flex' alignItems='flex-end' fontWeight='semibold' fontSize='xl'>
                {!session && <>
                  <Menu>
                    <MenuButton>
                      <Avatar name="" src="" />
                    </MenuButton>
                    <MenuList>
                    <MenuItem as="a" href="/questions">
                        questions
                      </MenuItem>
                      <MenuItem as="a" href="/api/auth/signin">
                        signin
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>}
      
              {session && 
                <Menu>
                  <MenuButton>
                    <Avatar name={`${session.user.name} || ${session.user.email}`} src={session.user.image} />
                  </MenuButton>
                  <MenuList>
                  <MenuItem as="a" href="/questions">
                      questions
                    </MenuItem>
                    <MenuItem as="a" href="/api/auth/signout">
                      signout
                    </MenuItem>
                  </MenuList>
                </Menu>
              }
            </Box>
          </Box>
      </Box>
      
      <Box display='flex' justifyContent='flex-end'>
          <DarkModeSwitch />
          <Button variantColor="gray" onClick={onOpen}>
              <svg
              fill={color[colorMode]}
              width="22px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
          </Button>
      </Box>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton mt='7px' border='1px solid '/>
          <DrawerHeader borderBottomWidth="1px" >
              <Link href='/' as='/'>
                  <a>
                      Hot Seat Questions 🔥
                  </a>
              </Link>
              </DrawerHeader>
          <DrawerBody>
            <Box>
            {/* <Avatar name={`${session.user.name} || ${session.user.email}`} src={session.user.image} /> */}
            {!session && <>
            <span className={styles.notSignedInText}>You are not signed in</span>
            <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
          </>}
          {session && <>
            {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className={styles.avatar}/>}
            <span className={styles.signedInText}>
              <small>Signed in as</small><br/>
              <strong>{session.user.name || session.user.email}</strong>
              </span>
            <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
          </>}
            </Box>
              <Stack spacing={6} mt={24}>
                  <Link href='/questions' as='/questions'>
                      <a>
                          <MenuItems>
                              Questions
                          </MenuItems>
                      </a>
                  </Link>
                  {/* <Link href='/about' as='/about'>
                      <a>
                          <MenuItems>
                              About
                          </MenuItems>
                      </a>
                  </Link> */}
              </Stack>
              {/* <Box mt={6} display='flex'  justifyContent='space-around'>
                  <Button>
                      Sign In
                  </Button>
              </Box> */}
          </DrawerBody>
          </DrawerContent>
      </Drawer>
      </Flex> 
    </>
  )
}
