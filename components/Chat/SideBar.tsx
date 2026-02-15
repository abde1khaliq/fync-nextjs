"use client";

import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  Avatar,
  Text,
  Drawer,
} from "@chakra-ui/react";
import {
  Search,
  Plus,
  Archive,
  Users,
  MessageSquare,
  UserPlus,
  X,
} from "lucide-react";
import { useState } from "react";

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

const EXAMPLE_CHATS = [
  {
    id: 1,
    name: "Sarah Johnson",
    message: "Hey! Did you see the new design?",
    time: "2m ago",
    unread: 2,
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
    isGroup: false,
  },
  {
    id: 2,
    name: "Mike Chen",
    message: "Thanks for the help earlier!",
    time: "1h ago",
    unread: 0,
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
    isGroup: false,
  },
  {
    id: 3,
    name: "Design Team",
    message: "Alex: Let's review the mockups",
    time: "3h ago",
    unread: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
    online: false,
    isGroup: true,
  },
  {
    id: 4,
    name: "Emma Wilson",
    message: "See you at the meeting!",
    time: "Yesterday",
    unread: 0,
    avatar: "https://i.pravatar.cc/150?img=9",
    online: false,
    isGroup: false,
  },
];

const EXAMPLE_FRIENDS = [
  {
    id: 1,
    name: "John Davis",
    username: "@johndavis",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
  },
  {
    id: 2,
    name: "Lisa Martinez",
    username: "@lisamartinez",
    avatar: "https://i.pravatar.cc/150?img=25",
    online: false,
  },
  {
    id: 3,
    name: "Tom Anderson",
    username: "@tomanderson",
    avatar: "https://i.pravatar.cc/150?img=33",
    online: true,
  },
  {
    id: 4,
    name: "Rachel Green",
    username: "@rachelgreen",
    avatar: "https://i.pravatar.cc/150?img=47",
    online: false,
  },
];

const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
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
            transition="all 0.2s"
          >
            <Flex align="center" gap={2}>
              <Plus size={16} />
              <span>New Chat</span>
            </Flex>
          </Button>

          {/* Search Bar with Friends Button */}
          <Flex gap={2} align="center">
            <Box position="relative" flex={1}>
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
                  _dark: { bg: "gray.800", borderColor: "blue.400" },
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

            {/* Friends Button */}
            <IconButton
              size="sm"
              variant="outline"
              borderRadius="md"
              aria-label="Find friends"
              onClick={() => setIsDrawerOpen(true)}
              _hover={{
                bg: "gray.50",
                _dark: { bg: "whiteAlpha.100" },
              }}
            >
              <UserPlus size={16} />
            </IconButton>
          </Flex>
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
                <Text ml={1}>{action.label}</Text>
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
          {/* Chat Items */}
          <Box p={1}>
            {EXAMPLE_CHATS.map((chat) => (
              <Flex
                key={chat.id}
                align="center"
                gap={2.5}
                p={2.5}
                borderRadius="md"
                cursor="pointer"
                _hover={{
                  bg: "gray.50",
                  _dark: { bg: "whiteAlpha.50" },
                }}
                transition="all 0.2s"
              >
                <Box position="relative">
                  <Avatar.Root size="sm">
                    <Avatar.Image src={chat.avatar} />
                    <Avatar.Fallback>{chat.name[0]}</Avatar.Fallback>
                  </Avatar.Root>

                  {chat.isGroup ? (
                    <Box
                      position="absolute"
                      bottom={-1}
                      right={-1}
                      w="20px"
                      h="20px"
                      bg="blue.500"
                      borderRadius="full"
                      border="2px solid"
                      borderColor="white"
                      _dark={{ borderColor: "accentW" }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Users size={10} color="white" />
                    </Box>
                  ) : (
                    chat.online && (
                      <Box
                        position="absolute"
                        bottom={0}
                        right={0}
                        w="10px"
                        h="10px"
                        bg="green.500"
                        borderRadius="full"
                        border="2px solid"
                        borderColor="white"
                        _dark={{ borderColor: "gray.900" }}
                      />
                    )
                  )}
                </Box>

                <Box flex={1} minW={0}>
                  <Flex justify="space-between" align="center" mb={0.5}>
                    <Text fontSize="sm" truncate>
                      {chat.name}
                    </Text>
                    <Text fontSize="xs" color="gray.500" flexShrink={0}>
                      {chat.time}
                    </Text>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Text
                      fontSize="xs"
                      color="gray.600"
                      _dark={{ color: "gray.400" }}
                      truncate
                    >
                      {chat.message}
                    </Text>
                    {chat.unread > 0 && (
                      <Flex
                        align="center"
                        justify="center"
                        bg="blue.500"
                        color="white"
                        borderRadius="full"
                        minW="15px"
                        h="15px"
                        px={1}
                        fontSize="10px"
                        flexShrink={0}
                        ml={2}
                      >
                        {chat.unread}
                      </Flex>
                    )}
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Friends Drawer */}
      <Drawer.Root
        open={isDrawerOpen}
        onOpenChange={(e) => setIsDrawerOpen(e.open)}
        placement="end"
        size="sm"
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content fontFamily="inter" bg={"accentW"}>
            <Drawer.Header
              borderBottom="1px solid"
              borderColor="gray.200"
              _dark={{ borderColor: "whiteAlpha.200" }}
            >
              <Flex justify="space-between" align="center">
                <Drawer.Title fontSize="lg">Find Friends</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <IconButton
                    variant="ghost"
                    size="sm"
                    borderRadius="md"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Flex>
            </Drawer.Header>

            <Drawer.Body p={4}>
              {/* Search Input */}
              <Box position="relative" mb={4}>
                <Input
                  placeholder="Search for friends..."
                  pl={9}
                  size="sm"
                  fontSize="sm"
                  borderRadius="md"
                  bg="gray.50"
                  _dark={{
                    bg: "whiteAlpha.100",
                    borderColor: "whiteAlpha.200",
                  }}
                  border="1px solid"
                  borderColor="gray.200"
                  _focus={{
                    borderColor: "blue.400",
                    bg: "white",
                    _dark: { bg: "gray.700", borderColor: "blue.400" },
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
                  <Search size={16} />
                </Box>
              </Box>

              {/* Friends List */}
              <Flex direction="column" gap={2}>
                {EXAMPLE_FRIENDS.map((friend) => (
                  <Flex
                    key={friend.id}
                    align="center"
                    gap={3}
                    p={1}
                    borderColor={"accentW"}
                    borderRadius="md"
                    border="1px solid"
                    _dark={{ borderColor: "accentW", bg: "accentW" }}
                    bg="white"
                  >
                    <Box position="relative">
                      <Avatar.Root size="md">
                        <Avatar.Image src={friend.avatar} />
                        <Avatar.Fallback>{friend.name[0]}</Avatar.Fallback>
                      </Avatar.Root>
                      {friend.online && (
                        <Box
                          position="absolute"
                          bottom={0}
                          right={0}
                          w="12px"
                          h="12px"
                          bg="green.500"
                          borderRadius="full"
                          border="2px solid"
                          borderColor="white"
                          _dark={{ borderColor: "gray.800" }}
                        />
                      )}
                    </Box>

                    <Box flex={1}>
                      <Text fontSize="sm" fontWeight="600" mb={0.5}>
                        {friend.name}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {friend.username}
                      </Text>
                    </Box>

                    <Button
                      size="xs"
                      colorScheme="blue"
                      variant="outline"
                      fontSize="xs"
                      borderRadius="md"
                      _hover={{
                        bg: "accentWB",
                        _dark: { bg: "accentWB" },
                      }}
                    >
                      Add
                    </Button>
                  </Flex>
                ))}
              </Flex>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};

export default SideBar;
