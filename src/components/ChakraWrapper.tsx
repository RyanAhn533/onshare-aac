'use client';

import { ReactNode } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

/* 🖌️  필요하다면 여기서 색·폰트 등을 커스터마이즈 */
const theme = extendTheme({});

export default function ChakraWrapper({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
