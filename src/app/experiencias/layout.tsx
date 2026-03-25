import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiências | La Signora Boutique',
  description: 'Surpreenda com os nossos Vouchers Exclusivos: de Jantares Românticos a inovadoras Experiências de Degustação de Trufa.',
};

export default function ExperienciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
