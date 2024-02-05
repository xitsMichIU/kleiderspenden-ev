export const metadata = {
  title: "Kleiderspenden E.V",
  description: "Webseite zur Organisation von Kleiderspenden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
