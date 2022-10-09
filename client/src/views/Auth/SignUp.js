import React from "react";
// Chakra imports
import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Center,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";

function SignUp() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex position='relative' mb='40px' direction='row-reverse'>
      <Flex
        direction='row-reverse'
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome!
            </Heading>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Name
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='text'
                placeholder='Your full name'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='email'
                placeholder='Your email address'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='password'
                placeholder='Your password'
                mb='24px'
                size='lg'
              />
              <FormControl display='flex' alignItems='center' mb='24px'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                type='submit'
                bg='teal.300'
                fontSize='10px'
                color='white'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}>
                SIGN UP
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Already have an account?
                <Link
                  as={ReachLink}
                  to='/auth/signin'
                  color={titleColor}
                  ms='5px'
                  fontWeight='bold'>
                  Sign In
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          left='0px'>
          <Center
            bgColor='teal.300'
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomRightRadius='20px'>
            <Center>
              <Center bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
                bgClip='text'
                fontSize='2xl'
                fontWeight='extrabold'>
                OPEN CYBER DB
              </Center>
            </Center>
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
