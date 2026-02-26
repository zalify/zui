import type { Metadata } from "next";
import { ZalifyProvider } from "@zalify-ui/react";

export const metadata: Metadata = {
  title: "Zalify UI Demo",
  description: "Testing @zalify-ui/react npm package",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ZalifyProvider accentColor="jade" grayColor="neutral" borderRadius="md">
          {children}
        </ZalifyProvider>
      </body>
    </html>
  );
}
