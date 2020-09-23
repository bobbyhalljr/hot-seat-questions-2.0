import { Stack } from '@chakra-ui/core'
import Header from '../components/header'
import Footer from '../components/footer'

export const Main = (props) => (
  <>
  <Header />
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="52rem"
    pt="2rem"
    my={24}
    mx={['4', '6']}
    {...props}
  />
  <Footer />
  </>
)
