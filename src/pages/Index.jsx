import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Input, Link, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { FaCheckCircle, FaFileUpload, FaChartLine, FaGraduationCap } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="purple.600" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" color="white" size="xl">
              AcademicBoost
            </Heading>
            <Button colorScheme="white" variant="outline">
              Sign Up
            </Button>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <Stack spacing={12} align="center">
          <Heading as="h2" size="2xl" textAlign="center">
            Unlock Your Academic Potential
          </Heading>
          <Text fontSize="xl" textAlign="center">
            AcademicBoost provides powerful analytics and personalized guidance to help students maximize their academic credentials and stand out from the crowd.
          </Text>
          <Flex justify="center">
            <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MHx8fHwxNzExMzAxNzQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Students studying" maxW="500px" />
          </Flex>
          <Button colorScheme="purple" size="lg">
            Get Started
          </Button>
        </Stack>
      </Container>

      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Key Features
          </Heading>
          <List spacing={6}>
            <ListItem>
              <ListIcon as={FaFileUpload} color="purple.500" />
              <Text fontSize="lg">Easily upload certificates, transcripts, and academic documents</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="purple.500" />
              <Text fontSize="lg">Gain valuable insights and analytics on your academic performance</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="purple.500" />
              <Text fontSize="lg">Receive personalized recommendations to enhance your credentials</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={FaGraduationCap} color="purple.500" />
              <Text fontSize="lg">Stand out to universities and employers with a comprehensive academic profile</Text>
            </ListItem>
          </List>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <Stack spacing={8} align="center">
          <Heading as="h2" size="xl">
            Ready to Boost Your Academics?
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Sign up now and take control of your academic future with AcademicBoost.
          </Text>
          <Flex maxW="md">
            <Input placeholder="Enter your email" mr={4} />
            <Button colorScheme="purple">Sign Up</Button>
          </Flex>
        </Stack>
      </Container>

      <Box bg="gray.800" py={8} color="white">
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; 2023 AcademicBoost. All rights reserved.</Text>
            <Link href="/privacy">Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
