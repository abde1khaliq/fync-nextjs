import { Box, Flex, Input, Button, IconButton } from "@chakra-ui/react";
import { Search, Plus, Archive, Users, MessageSquare } from "lucide-react";

const QUICK_ACTIONS = [
  {
    id: "all",
    label: "All Chats",
    icon: MessageSquare,
  },
  {
    id: "groups",
    label: "Groups",
    icon: Users,
  },
  {
    id: "archived",
    label: "Archived",
    icon: Archive,
  },
];

const SideBar = () => {
  return (
    <Box
      as="aside"
      w={{ base: "100%", md: "280px" }}
      h="100vh"
      borderRight="1px solid"
      borderColor="gray.200"
      _dark={{ borderColor: "whiteAlpha.200", bg: "accentW" }}
      bg="white"
      display="flex"
      flexDirection="column"
      fontFamily="Inter"
    >
      {/* Header Section */}
      <Box
        p={3}
        borderBottom="1px solid"
        borderColor="gray.200"
        _dark={{ borderColor: "whiteAlpha.200" }}
      >
        {/* New Chat Button */}
        <Button
          w="100%"
          colorScheme="blue"
          mb={2.5}
          borderRadius="md"
          size="sm"
          fontSize="sm"
          _hover={{ shadow: "md" }}
          transition="all 0.2s"
        >
          New Chat
        </Button>

        {/* Search Bar */}
        <Box position="relative">
          <Input
            placeholder="Search conversations..."
            pl={9}
            size="sm"
            fontSize="sm"
            borderRadius="md"
            bg="gray.50"
            _dark={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.200" }}
            border="1px solid"
            borderColor="gray.200"
            _focus={{
              borderColor: "blue.400",
              bg: "white",
              _dark: { bg: "gray.800" },
            }}
            _hover={{
              borderColor: "gray.300",
              _dark: { borderColor: "whiteAlpha.300" },
            }}
            transition="all 0.2s"
          />
          <Box
            position="absolute"
            left={2.5}
            top="50%"
            transform="translateY(-50%)"
            color="gray.400"
            pointerEvents="none"
          >
            <Search size={16} />
          </Box>
        </Box>
      </Box>

      {/* Quick Actions */}
      <Flex
        gap={1}
        p={2}
        borderBottom="1px solid"
        borderColor="gray.100"
        _dark={{ borderColor: "whiteAlpha.100" }}
      >
        {QUICK_ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.id}
              variant="ghost"
              size="xs"
              flex={1}
              fontSize="xs"
              fontWeight="500"
              borderRadius="md"
              px={2}
              _hover={{
                bg: "gray.100",
                _dark: { bg: "whiteAlpha.100" },
              }}
              _active={{
                bg: "blue.50",
                color: "blue.600",
                _dark: { bg: "blue.900/30", color: "blue.300" },
              }}
            >
              <Icon size={14} />
              {action.label}
            </Button>
          );
        })}
      </Flex>

      {/* Chat List Area */}
      <Box
        flex={1}
        overflowY="auto"
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
        {/* Chat items will go here */}
        <Box p={2}>
          {/* Placeholder for chat list */}
          <Flex
            align="center"
            justify="center"
            h="180px"
            color="gray.400"
            fontSize="xs"
            flexDirection="column"
            gap={2}
          >
            <MessageSquare size={28} strokeWidth={1.5} />
            <span>No conversations yet</span>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
