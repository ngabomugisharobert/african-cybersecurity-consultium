import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
// Chakra imports
import { Link as ReachLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../actions'
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

function SignIn() {

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch()
  const [user, setuser] = useState({
    username: '',
    password: ''
  })

  const [notificationMessage,
    setNotification] = useState()

  const response = useSelector((state) => {
    const { loggedIn } = state
    const { status } = loggedIn

    return {
      status
    }
  })

  useEffect(() => {
    console.log('response', response)
    if (response.status === 200) {
      console.log('navigate to dashboard')
      //navigate to dashboard
      history.replace('/admin/dashboard')
    } else {
      console.log('error')
    }
  }, [response.status])

  useEffect(() => {
    console.log('location', location)
    console.log('history', history)
    //check if user is logged in
    if (localStorage.getItem('token')) {
      console.log('navigate to dashboard')

    }
  }, [])




  const handleSubmit = () => {
    dispatch(signin({ username: user.username, password: user.password }))
    //navigate to dashboard
    // console.log('user', user)
    // window.location.href = '/admin/dashboard'

  }
  const handleHideNotification = () => {
    setNotification(undefined)
  }

  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  useEffect(() => {
    console.log('SignIn useEffect')
  }, [])



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
              Welcome Back
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your email adress'
                size='lg'
                onChange={(value) => setuser({
                  ...user,
                  username: value.target.value
                })} />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
                onChange={(value) => setuser({
                  ...user,
                  password: value.target.value
                })}
              />
              <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize='10px'
                type='submit'
                bg='teal.300'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                //add onclick event>
                onClick={handleSubmit}>
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link as={ReachLink} color={titleColor} ms='5px' fontWeight='bold' to='/auth/signup'>
                  Sign Up
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

export default SignIn;
