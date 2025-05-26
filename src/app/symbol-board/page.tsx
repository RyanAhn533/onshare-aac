'use client';

import { SimpleGrid } from '@chakra-ui/react';
import SymbolButton, { SymbolItem } from '@/components/SymbolButton';

const symbols: SymbolItem[] = [
  { id: 'apple', label: '사과', file: '/symbols/사과.png' },
  { id: 'water', label: '물', file: '/symbols/물.png' },
  { id: 'rice', label: '밥', file: '/symbols/밥.png' },
];

export default function SymbolBoard() {
  const handleSelect = (id: string) => alert(`선택: ${id}`);
  return (
    <SimpleGrid columns={3} spacing={4} p={4}>
      {symbols.map((item) => (
        <SymbolButton key={item.id} item={item} onSelect={handleSelect} />
      ))}
    </SimpleGrid>
  );
}
