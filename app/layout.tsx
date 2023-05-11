import "./globals.css";

export const metadata = {
  title: "Messenger Clone",
  description: "follow tutorial of Messager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
