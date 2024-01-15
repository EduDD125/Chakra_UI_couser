import { UnlockIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
    const toast = useToast();

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "Successfully logged out",
            duration: 5000,
            isClosable: true,
            position: "top",
            status: "success",
            icon: <UnlockIcon />
        })
    }

    return (
        <Flex as="nav" p="10px" m="40px" alignItems="center">
            <Heading as="h1">Dojo Tasks</Heading>

            <Spacer/>

            <HStack spacing="20px">
                <Avatar name="mario" bg="purple" src="/img/mario.png">
                    <AvatarBadge width="1.3em" bg="teal.200">
                        <Text fontSize="xs" color="white">3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>mario@netninja.dev</Text>
                <Button colorScheme="purple" onClick={showToast}>Logout</Button>
            </HStack>
            
        </Flex>
    )
}