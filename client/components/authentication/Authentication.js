import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {

    const history = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) history.replace("/chats");
    }, [history]);

    return (
        <Container maxW="xl" centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize="4xl">
                    FinFortune
                </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default Authentication;
