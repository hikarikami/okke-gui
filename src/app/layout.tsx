
import Sidebar from './_components/sidebar';
import DrawerContainer from './_components/drawerContainer';
import TopNav from './_components/topNav';
import Lightbox from './_components/lightbox';


import './globals.css'
import { Inter } from 'next/font/google';
import 'material-icons/iconfont/material-icons.css';

const inter = Inter({ subsets: ['latin'] })
const showLayout: "1" | "2" = "2"; // Define the type as a string literal

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootshowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {
        (() => {
          if (showLayout == "1") {
            return (


              <body className={inter.className}>
                {/* <Lightbox /> */}
                <DrawerContainer drawerType="documentPreviewDrawer" />
                <div className="flex w-full flex-row">
                  <Sidebar />
                  <div className="content-wrapper container pt-12">
                    <TopNav />
                    {children}
                  </div>
                </div>

              </body>

            )
          }  else if(showLayout == "2") {
            return (
              <body className={`${inter.className} ' m-0 p-0 bg-white min-h-screen flex flex-row'`}>
                 {children}
                </body>
            )
          }
        })()
      }
    </html>
  )
}
