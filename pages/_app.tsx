import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { allChains, configureChains, createClient, WagmiConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import "react-toastify/dist/ReactToastify.css"
import { Cre8orsProvider } from "../providers/Crea8orsProvider"
import { UserProvider } from "../providers/UserProvider"
import { ThemeProvider } from "../providers/ThemeProvider"

const { chains, provider, webSocketProvider } = configureChains(
  allChains.filter(
    (c) =>
      c.id === Number(process.env.NEXT_PUBLIC_CHAIN_ID) ||
      c.id === Number(process.env.NEXT_PUBLIC_ALLOW_LIST_CHAIN_ID),
  ),
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: "CRE8ORS",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <ThemeProvider>
          <SessionProvider>
            <UserProvider>
              <Cre8orsProvider>
                <Component {...pageProps} />
                <ToastContainer />
              </Cre8orsProvider>
            </UserProvider>
          </SessionProvider>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
