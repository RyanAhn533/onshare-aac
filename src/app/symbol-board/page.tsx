'use client';
import { SimpleGrid } from '@chakra-ui/react';
import SymbolButton, { SymbolItem } from '@/components/SymbolButton';
import symbols from '@/data/symbols.json';

export default function SymbolBoard() {
  const handleSelect = (id: string) => alert(`선택: ${id}`);
  return (
    <SimpleGrid columns={3} spacing={4} p={4}>
      {(symbols as SymbolItem[]).map((item) => (
        <SymbolButton key={item.id} item={item} onSelect={handleSelect} />
      ))}
    </SimpleGrid>
  );
}
