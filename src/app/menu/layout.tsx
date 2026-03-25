import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Menu | La Signora Boutique',
  description: 'Descubra a verdadeira gastronomia italiana com as nossas pizzas artesanais e massas frescas em Santa Maria de Lamas.',
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
