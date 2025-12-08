import AdSense from "@/components/adsense";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import { getDocuments } from "@/lib/doc";
import { SidebarProvider } from "@/providers/sidebar-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocsDB - A documentation website",
  description: "A documentation website for DocsDB",
};

export default async function RootLayout({ children }) {
  const docs = await getDocuments();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <AdSense pubId="ca-pub-6721594154492556" />
        <meta
          name="google-site-verification"
          content="jJtpLqOAtKxVMyWZ3fZTjPVLW8xexGIU7rV1Enr4cRI"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <MainLayout>
              <Header docs={docs} />
              <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
                <main className="flex-auto py-16">
                  <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                    <div className="absolute left-1/2 top-0 -ml-152 h-100 w-325 dark:mask-[linear-gradient(white,transparent)]">
                      <div className="absolute inset-0 bg-linear-to-r from-[#36b49f] to-[#DBFF75] opacity-40 mask-[radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                    </div>
                  </div>
                  {children}
                </main>
              </div>
            </MainLayout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
