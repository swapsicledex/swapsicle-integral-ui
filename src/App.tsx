import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import Layout from "@/components/common/Layout"
import { defineChain } from "viem"

import ETHLogo from '@/assets/tokens/ether.svg'
import { DEFAULT_CHAIN_ID } from './constants/default-chain-id'
import { MULTICALL3_ADDRESS } from './constants/addresses'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

export const defaultChain = defineChain({
  id: DEFAULT_CHAIN_ID,
  network: 'telos-testnet',
  name: 'Telos Testnet',
  nativeCurrency: { name: 'Telos', symbol: 'TLOS', decimals: 18 },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
    public: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Teloscan',
      url: 'https://testnet.teloscan.io',
    },
    default: {
      name: 'Teloscan',
      url: 'https://testnet.teloscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: MULTICALL3_ADDRESS,
      blockCreated: 77,
    },
  },
  testnet: true,
})

const chains = [defaultChain]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains, 
  chainImages: {
    [DEFAULT_CHAIN_ID]: ETHLogo
  },
  defaultChain: defaultChain,
  themeVariables: {
    '--w3m-accent': '#2797ff'
  }
})

function App({ children }: { children: React.ReactNode }) {

  return (
    <WagmiConfig config={wagmiConfig}>
        <Layout>
          {children}
        </Layout>
    </WagmiConfig>
  )
}

export default App
