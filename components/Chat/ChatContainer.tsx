import { Box, Flex, Input, IconButton, Avatar, Text } from "@chakra-ui/react";
import {
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
} from "lucide-react";

const ChatContainer = () => {
  return (
    <Flex
      flex={1}
      h="100vh"
      direction="column"
      bg="gray.50"
      _dark={{ bg: "accentWB" }}
      fontFamily="inter"
    >
      {/* Chat Header */}
      <Flex
        align="center"
        justify="space-between"
        px={4}
        py={2.5}
        borderBottom="1px solid"
        borderColor="gray.200"
        _dark={{ borderColor: "whiteAlpha.200", bg: "accentW" }}
        bg="white"
      >
        {/* User Info */}
        <Flex align="center" gap={2.5}>
          <Avatar.Root size="sm">
            <Avatar.Image src="https://i.postimg.cc/TYTc64ZT/me.jpg" />
            <Avatar.Fallback>AHAA</Avatar.Fallback>
          </Avatar.Root>
          <Box>
            <Text fontWeight="400" fontFamily={"inter"} fontSize="sm">
              Ahmed Mohamed Ahmed Abdelkhaliq
            </Text>
            <Text
              fontSize="xs"
              fontFamily={"inter"}
              color="green.500"
              fontWeight="500"
            >
              Online
            </Text>
          </Box>
        </Flex>

        {/* Action Buttons */}
        <Flex gap={0.5}>
          <IconButton
            variant="ghost"
            size="sm"
            borderRadius="md"
            aria-label="Voice call"
            _hover={{
              bg: "gray.100",
              _dark: { bg: "whiteAlpha.100" },
            }}
          >
            <Phone size={16} />
          </IconButton>
          <IconButton
            variant="ghost"
            size="sm"
            borderRadius="md"
            aria-label="Video call"
            _hover={{
              bg: "gray.100",
              _dark: { bg: "whiteAlpha.100" },
            }}
          >
            <Video size={16} />
          </IconButton>
          <IconButton
            variant="ghost"
            size="sm"
            borderRadius="md"
            aria-label="More options"
            _hover={{
              bg: "gray.100",
              _dark: { bg: "whiteAlpha.100" },
            }}
          >
            <MoreVertical size={16} />
          </IconButton>
        </Flex>
      </Flex>

      {/* Messages Area */}
      <Box
        flex={1}
        overflowY="auto"
        px={4}
        py={3}
        css={{
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#CBD5E0",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#A0AEC0",
          },
        }}
      >
        {/* Empty State */}
        <Flex
          align="center"
          justify="center"
          h="100%"
          direction="column"
          gap={2}
          color="gray.400"
        >
          <Box
            p={5}
            borderRadius="full"
            bg="gray.200"
            _dark={{ bg: "whiteAlpha.100" }}
          >
            <Send size={28} strokeWidth={1.5} />
          </Box>
          <Text
            fontSize="md"
            fontFamily={"inter"}
            fontWeight="400"
            color="gray.500"
          >
            Start a conversation
          </Text>
          <Text
            fontSize="xs"
            textAlign="center"
            fontFamily={"inter"}
            maxW="280px"
          >
            Send a message to begin chatting
          </Text>
        </Flex>
      </Box>

      {/* Message Input Area */}
      <Box
        px={4}
        py={3}
        borderTop="1px solid"
        borderColor="gray.200"
        _dark={{ borderColor: "whiteAlpha.200", bg: "accentW" }}
        bg="white"
      >
        <Flex gap={1.5} align="center">
          {/* Attachment Button */}
          <IconButton
            variant="ghost"
            size="sm"
            borderRadius="md"
            aria-label="Attach file"
            _hover={{
              bg: "gray.100",
              _dark: { bg: "whiteAlpha.100" },
            }}
          >
            <Paperclip size={16} />
          </IconButton>

          {/* Message Input */}
          <Box position="relative" flex={1}>
            <Input
              placeholder="Type a message..."
              pr={10}
              size="sm"
              fontSize="sm"
              borderRadius="lg"
              bg="gray.50"
              _dark={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.200" }}
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
              transition="all 0.2s"
            />
            <IconButton
              position="absolute"
              right={1.5}
              top="50%"
              transform="translateY(-50%)"
              variant="ghost"
              size="xs"
              borderRadius="md"
              aria-label="Add emoji"
              _hover={{
                bg: "gray.100",
                _dark: { bg: "whiteAlpha.200" },
              }}
            >
              <Smile size={16} />
            </IconButton>
          </Box>

          {/* Send Button */}
          <IconButton
            colorScheme="blue"
            size="sm"
            borderRadius="lg"
            aria-label="Send message"
            _hover={{
              shadow: "md",
            }}
            transition="all 0.2s"
          >
            <Send size={16} />
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatContainer;
