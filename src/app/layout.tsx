
import Sidebar from './_components/sidebar';
import DrawerContainer from './_components/drawerContainer';
import TopNav from './_components/topNav';
import Lightbox from './_components/lightbox';


import './globals.css'
import { Inter } from 'next/font/google';
import 'material-icons/iconfont/material-icons.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Lightbox /> */}
        {/* <DrawerContainer drawerType="documentPreviewDrawer"/> */}
        <div className="flex w-full flex-row">
        <Sidebar />
          <div className="content-wrapper container pt-12">
            <TopNav />
            {children}
          </div>
        </div>

      </body>
    </html>
  )
}