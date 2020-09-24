import { useToast, Button } from "@chakra-ui/core"

export default function Toast({ title, description, status, children }) {
    const toast = useToast();
    return (
      <Button
        onClick={() =>
          toast({
            title,
            description,
            status,
            duration: 7000,
            isClosable: true,
          })
        }
        bg='none'
      >
        {children}
      </Button>
    );
  }