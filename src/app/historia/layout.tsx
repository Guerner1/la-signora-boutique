import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Nossa História | La Signora Boutique',
  description: 'Conheça as nossas origens, a verdadeira essência da cozinha italiana e a paixão pela matéria-prima de excelência.',
};

export default function HistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
