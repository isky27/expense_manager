import {ChakraProvider} from "@chakra-ui/react"
import ChatProvider from "../context/ChatProvider"

export default function App({ Component, pageProps }) {
  return (
  <>
  <ChatProvider>
   <ChakraProvider>
     <Component {...pageProps} />
   </ChakraProvider>
  </ChatProvider>
 </> 
)
}
