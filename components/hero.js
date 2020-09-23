import { Stack, Text } from '@chakra-ui/core'

export const Hero = ({ title, subTitle }) => (
  <Stack spacing={[8, 12]} maxWidth="52rem" mx={['6', '10']}>
    <Text fontWeight='extrabold' letterSpacing={0.1} fontSize={["2.5rem", "3.5rem"]}>{title}</Text>
    <Text fontWeight='medium' fontSize={["1.5rem", "2rem"]}>{subTitle}</Text>
  </Stack>
)

Hero.defaultProps = {
  title: 'Hot Seat Questions 🔥',
  subTitle: 'Where Software Developers and Engineers post technical and behavioral interview questions'
}
