import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Take Away | La Signora Boutique',
  description: 'Faça a sua encomenda de Take Away. As nossas pizzas artesanais e massas frescas, diretamente para a sua casa.',
};

export default function TakeawayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
