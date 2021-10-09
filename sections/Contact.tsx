import { FunctionComponent } from "react";

// Styles
import {
  Button,
  Heading,
  Text,
  Box,
  Container,
  Center,
} from "@chakra-ui/react";

// Utils
import info from "../utils/info";

const handleMail = (e: any) => {
  e.preventDefault();
  location.href = `mailto:${info.email}`;
};

const Contact: FunctionComponent = () => {
  return (
    <Box height="100vh" id="contact">
      <Container position="relative" top="35%">
        <Center>
          <Heading pt={5} pb={5}>
            Let&apos;s talk.
          </Heading>
        </Center>

        <Center>
          <Text pt={5} pb={5}>
            Have an idea for a project, want to work together or just chat? Do
            not be shy and send me an email!
          </Text>
        </Center>
        <Center>
          <Button
            size="md"
            variant="outline"
            colorScheme="teal"
            onClick={handleMail}
          >
            Send Mail
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default Contact;
