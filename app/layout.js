import "./globals.css";

export const metadata = {
  title: "Pizza Menu",
  description: "Hy-Vee interview pairing exercise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
