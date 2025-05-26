'use client';

import { Button, Image, Text, VStack } from '@chakra-ui/react';

export interface SymbolItem {
  id: string;
  label: string;
  file: string;
}

export default function SymbolButton({
  item,
  onSelect,
}: {
  item: SymbolItem;
  onSelect: (id: string) => void;
}) {
  return (
    <Button
      w="96px"
      h="96px"
      p={2}
      variant="outline"
      flexDir="column"
      onClick={() => onSelect(item.id)}
    >
      <VStack spacing="1">
        <Image src={item.file} alt={item.label} boxSize="48px" />
        <Text fontSize="sm" isTruncated>
          {item.label}
        </Text>
      </VStack>
    </Button>
  );
}
