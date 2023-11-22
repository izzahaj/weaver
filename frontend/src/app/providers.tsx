'use client'

import { Auth0Provider } from "@auth0/auth0-react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import theme from "./theme";

export default function AppProvider({ children }: { children: ReactNode }) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '';
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '';
  const authorizationParams = {
    redirect_uri: process.env.NEXT_PUBLIC_HOME_URL
  };

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={authorizationParams}
        >
          {children}
        </Auth0Provider>
      </ChakraProvider>
    </CacheProvider>
  )
}
