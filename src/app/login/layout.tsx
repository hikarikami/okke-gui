
import TopNav from '../_components/topNav'


import '../globals.css'
import { Inter } from 'next/font/google';
import 'material-icons/iconfont/material-icons.css';


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default function SignupLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <body className={`${inter.className} ' md:m-0 md:p-0 bg-white justify-start md:min-h-screen flex flex-col md:flex-row`}>
            {children}
        </body>

    )
}


