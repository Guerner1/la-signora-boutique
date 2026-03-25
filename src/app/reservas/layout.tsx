import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservas & Eventos | La Signora Boutique',
  description: 'Faça a sua reserva no La Signora Boutique ou organize o seu evento privado connosco em Santa Maria de Lamas.',
};

export default function ReservasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
