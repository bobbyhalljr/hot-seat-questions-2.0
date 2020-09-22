import { useColorMode, Icon, Button, Box } from '@chakra-ui/core'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
    {colorMode === "dark" ?
    <Button onClick={toggleColorMode}
    mr={4}
    // position="fixed"
    // top="1rem"
    // right="2rem"
    >
      {/* Toggle {colorMode === "light" ? "Dark" : "Light"} */}
      <Icon name='sun'
        color="green"
      />
    </Button>
    : 
    <Button onClick={toggleColorMode}
    mr={4}
    // position="fixed"
    // top="1rem"
    // right="2rem"
    >
        {/* Toggle {colorMode === "light" ? "Dark" : "Light"} */}
        <Icon name='moon'
          color="green"
        />
      </Button>
    }
    </>
  )
}
