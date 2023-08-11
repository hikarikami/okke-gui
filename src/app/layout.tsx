

import TopNav from './_components/topNav'
import DrawerContainer from './_components/drawerContainer';
import Lightbox from './_components/lightbox';
import Sidebar from './_components/sidebar';


import './globals.css'
import { Inter } from 'next/font/google';
import 'material-icons/iconfont/material-icons.css';


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default function RootLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <Lightbox /> */}
                {children}
            </body>
        </html>
    )
}
















// export const metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
//   }


// import Sidebar from './_components/sidebar';
// import DrawerContainer from './_components/drawerContainer';
// import TopNav from './_components/topNav';
// import Lightbox from './_components/lightbox';


// import './globals.css'
// import { Inter } from 'next/font/google';
// import 'material-icons/iconfont/material-icons.css';

// const inter = Inter({ subsets: ['latin'] })
// const showLayout: "1" | "2" = "2"; // Define the type as a string literal


// export default function RootshowLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       {
//         (() => {
//           if (showLayout == "1") {
//             return (


//               <body className={inter.className}>
//                 {/* <Lightbox /> */}
//                 <DrawerContainer drawerType="documentPreviewDrawer" />
//                 <div className="flex w-full flex-row">
//                   <Sidebar />
//                   <div className="content-wrapper container pt-12">
//                     <TopNav />
//                     {children}
//                   </div>
//                 </div>

//               </body>

//             )
//           }  else if(showLayout == "2") {
//             return (
//               <body className={`${inter.className} ' md:m-0 md:p-0 bg-white justify-start md:min-h-screen flex flex-col md:flex-row`}>
//                  {children}
//                 </body>
//             )
//           }
//         })()
//       }
//     </html>
//   )
// }
