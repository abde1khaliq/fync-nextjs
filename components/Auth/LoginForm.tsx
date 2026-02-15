import { Box, Button, Flex, Input, Text, Image, Link } from "@chakra-ui/react";
import { Mail, Lock } from "lucide-react";
import { FaApple } from "react-icons/fa";

const LoginPage = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      _dark={{ bg: "gray.800" }}
      fontFamily="Inter"
      px={4}
    >
      <Box
        w="100%"
        maxW="400px"
        bg="white"
        _dark={{ bg: "gray.900", borderColor: "whiteAlpha.200" }}
        borderRadius="lg"
        border="1px solid"
        borderColor="gray.200"
        p={6}
      >
        {/* Logo & Title */}
        <Flex direction="column" align="center" mb={6}>
          <Image
            w="48px"
            h="48px"
            src="https://i.postimg.cc/PJZQ5bKg/fync-logo.png"
            alt="Fync Logo"
            mb={3}
          />
          <Text fontSize="xl" fontWeight="700" mb={1}>
            Welcome back
          </Text>
          <Text fontSize="sm" color="gray.500">
            Sign in to continue to Fync
          </Text>
        </Flex>

        {/* Social Login Buttons */}
        <Flex direction="column" gap={2} mb={4}>
          <Button
            w="100%"
            variant="outline"
            size="sm"
            fontSize="sm"
            fontWeight="500"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            _dark={{ borderColor: "whiteAlpha.200" }}
            _hover={{
              bg: "gray.50",
              _dark: { bg: "whiteAlpha.100" },
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M15.68 8.18182C15.68 7.61455 15.6291 7.06909 15.5345 6.54545H8V9.64364H12.3055C12.1164 10.64 11.5491 11.4836 10.6982 12.0509V14.0655H13.2945C14.8073 12.6691 15.68 10.6182 15.68 8.18182Z"
                fill="#4285F4"
              />
              <path
                d="M8 16C10.16 16 11.9709 15.2873 13.2945 14.0655L10.6982 12.0509C9.98545 12.5345 9.07636 12.8182 8 12.8182C5.92 12.8182 4.15273 11.4109 3.52 9.52H0.858182V11.5927C2.17455 14.2036 4.87273 16 8 16Z"
                fill="#34A853"
              />
              <path
                d="M3.52 9.52C3.36 9.03636 3.26909 8.52727 3.26909 8C3.26909 7.47273 3.36 6.96364 3.52 6.48V4.40727H0.858182C0.312727 5.49091 0 6.70545 0 8C0 9.29455 0.312727 10.5091 0.858182 11.5927L3.52 9.52Z"
                fill="#FBBC05"
              />
              <path
                d="M8 3.18182C9.17818 3.18182 10.2255 3.58545 11.0618 4.37818L13.3527 2.08727C11.9673 0.792727 10.1564 0 8 0C4.87273 0 2.17455 1.79636 0.858182 4.40727L3.52 6.48C4.15273 4.58909 5.92 3.18182 8 3.18182Z"
                fill="#EA4335"
              />
            </svg>{" "}
            Continue with Google
          </Button>

          <Button
            w="100%"
            variant="outline"
            size="sm"
            fontSize="sm"
            fontWeight="500"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            _dark={{ borderColor: "whiteAlpha.200" }}
            _hover={{
              bg: "gray.50",
              _dark: { bg: "whiteAlpha.100" },
            }}
          >
            <FaApple size={16} /> Continue with Apple
          </Button>
        </Flex>

        {/* Divider */}
        <Flex align="center" gap={3} mb={4}>
          <Box
            flex={1}
            h="1px"
            bg="gray.200"
            _dark={{ bg: "whiteAlpha.200" }}
          />
          <Text fontSize="xs" color="gray.500" fontWeight="500">
            OR
          </Text>
          <Box
            flex={1}
            h="1px"
            bg="gray.200"
            _dark={{ bg: "whiteAlpha.200" }}
          />
        </Flex>

        {/* Email & Password Form */}
        <Flex direction="column" gap={3} mb={4}>
          {/* Email Input */}
          <Box>
            <Text fontSize="sm" fontWeight="500" mb={1.5}>
              Email
            </Text>
            <Box position="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                pl={9}
                size="sm"
                fontSize="sm"
                borderRadius="md"
                bg="gray.50"
                _dark={{ bg: "gray.800", borderColor: "whiteAlpha.200" }}
                border="1px solid"
                borderColor="gray.200"
                _focus={{
                  borderColor: "blue.400",
                  bg: "white",
                  _dark: { bg: "gray.700" },
                }}
                _hover={{
                  borderColor: "gray.300",
                  _dark: { borderColor: "whiteAlpha.300" },
                }}
              />
              <Box
                position="absolute"
                left={2.5}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                pointerEvents="none"
              >
                <Mail size={16} />
              </Box>
            </Box>
          </Box>

          {/* Password Input */}
          <Box>
            <Flex justify="space-between" align="center" mb={1.5}>
              <Text fontSize="sm" fontWeight="500">
                Password
              </Text>
              <Text
                fontSize="xs"
                color="blue.500"
                fontWeight="500"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Forgot password?
              </Text>
            </Flex>
            <Box position="relative">
              <Input
                type="password"
                placeholder="Enter your password"
                pl={9}
                size="sm"
                fontSize="sm"
                borderRadius="md"
                bg="gray.50"
                _dark={{ bg: "gray.800", borderColor: "whiteAlpha.200" }}
                border="1px solid"
                borderColor="gray.200"
                _focus={{
                  borderColor: "blue.400",
                  bg: "white",
                  _dark: { bg: "gray.700" },
                }}
                _hover={{
                  borderColor: "gray.300",
                  _dark: { borderColor: "whiteAlpha.300" },
                }}
              />
              <Box
                position="absolute"
                left={2.5}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                pointerEvents="none"
              >
                <Lock size={16} />
              </Box>
            </Box>
          </Box>
        </Flex>

        {/* Sign In Button */}
        <Button
          w="100%"
          colorScheme="blue"
          size="sm"
          fontSize="sm"
          borderRadius="md"
          mb={4}
          transition="all 0.2s"
        >
          Sign In
        </Button>

        {/* Sign Up Link */}
        <Text fontSize="sm" textAlign="center" color="gray.600">
          Don't have an account?{" "}
          <Link
            href="/register"
            color="blue.500"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginPage;
