import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"BunaBridge — Ethiopian Specialty Coffee Brokerage",description:"BunaBridge connects exceptional Ethiopian green coffee with global buyers."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
