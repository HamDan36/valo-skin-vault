import './globals.css'; 
import { CartProvider } from './context/CartContext';

export const metadata = {
  title: 'ValoSkinVault',
  description: 'Determine the value of your account with ValoSkinVault',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <CartProvider>
            {children}
          </CartProvider>
      </body>
    </html>
  );
}

