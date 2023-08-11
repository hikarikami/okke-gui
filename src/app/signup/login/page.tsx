/*
 * 
 * Signup
 * 
 */

"use client"; // This is a client component 👈🏽


import Button from '@/app/_components/button';
import Image from 'next/image'
import Link from "next/link";





export default function page() {

    return (
        <>
            <div className="w-12/12 md:w-8/12 lg:w-9/12 flex flex-shrink-0 px-6 justify-center items-center h-full md:min-h-screen z-10">
                {/* <svg className="absolute rotate-180 bottom-0 -left-96 w-[800px] -z-1 opacity-75" viewBox="0 0 1156 956" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8926 1.5283C258.03 231.134 311.595 471.527 191.905 529.563C72.2146 587.599 -44.2865 427.787 19.4089 365.722C83.1043 303.658 244.409 259.572 357.588 538.54C503.091 897.179 695.644 1098.14 1155.22 833.337" stroke="#1B0A32" stroke-width="2" stroke-dasharray="8 12" />
                </svg> */}
                <div className="w-full md:w-110 pt-10 md:pt-12 h-full flex flex-col">

                    <svg className="w-24" viewBox="0 0 158 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_805_83945)">
                            <path d="M18.3997 14.2671C28.8666 14.2671 36.7998 22.0003 36.7998 32.1335C36.7998 42.2671 28.8666 50.0003 18.3997 50.0003C7.93316 50.0003 0 42.2671 0 32.1335C0 22.0003 7.93316 14.2671 18.3997 14.2671ZM18.3997 41.8003C23.5999 41.8003 27.4663 37.667 27.4663 32.1335C27.4663 26.6669 23.5999 22.5336 18.3997 22.5336C13.2664 22.5336 9.33309 26.6669 9.33309 32.1335C9.33309 37.667 13.2664 41.8003 18.3997 41.8003Z" fill="#1B0A32" />
                            <path d="M74.0424 49.3333H62.665L52.3586 36.1491L48.0086 40.9008V49.3333H38.9736V0H48.0086V28.8541L60.3896 14.7999H71.7667L58.5157 29.3898L74.0424 49.3333Z" fill="#1B0A32" />
                            <path d="M109.112 49.3333H97.7343L87.4279 36.1491L83.0779 40.9008V49.3333H74.043V0H83.0779V28.8541L95.4589 14.7999H106.836L93.585 29.3898L109.112 49.3333Z" fill="#1B0A32" />
                            <path d="M139.895 35.3336H113.361C114.561 39.4003 118.028 42.2671 122.761 42.2671C126.495 42.2671 129.628 40.4669 131.295 37.4667L138.695 40.8002C135.695 46.2004 129.961 50.0003 122.495 50.0003C112.028 50.0003 104.095 42.2671 104.095 32.1335C104.095 22.0003 111.895 14.2671 122.161 14.2671C133.695 14.2671 141.761 23.867 139.895 35.3336ZM113.495 28.467H130.895C129.695 24.6002 126.428 22.0003 122.161 22.0003C118.095 22.0003 114.762 24.6002 113.495 28.467Z" fill="#1B0A32" />
                            <path d="M153.673 14.8L155.771 11.1666L152.566 9.31641L150.469 12.9498L148.371 9.31641L145.166 11.1666L147.264 14.8H143.068V18.5003H157.869V14.8H153.673Z" fill="#1B0A32" />
                        </g>
                        <defs>
                            <clipPath id="clip0_805_83945">
                                <rect width="157.869" height="50" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className="text-lg md:text-xl lg:text-2xl font-medium mt-6">Welcome back.</h1>
                    <p className="text-sm mt-2 md:mt-6">Great to see you again. Sign in with your email to get back to the action.</p>
                    <form className="mt-6 flex flex-col gap-y-5">
                        <div className="input-group  w-full">
                            <label>Email</label>
                            <input type="text" className="w-full" placeholder="" />
                        </div>
                        <div className="input-group  w-full">
                            <label>Password</label>
                            <input type="text" className="w-full" placeholder="" />
                        </div>

                    </form>
                    <div className="btn-group mt-6 w-full !flex-col">
                    <Link href={'/'}><Button label='Log In' buttonType='primary' size='lg' className='!w-full' /></Link>
                      <Button label='Reset Password' buttonType='tertiary' size='lg' className='!w-full' />
                    </div>  

                    <div className="w-full text-center text-sm mt-12 md:mt-24">Don&apos;t have an account? <Link href={"/signup/signup"}>Get started for free</Link></div>
                    <div className="text-xs text-center link-group mt-7">
                     <a>Terms of Use</a> <a>Privacy Policy</a> <a>Get help logging in</a>
                    </div>
                </div>
            </div>
            <div className="sticky hidden overflow-hidden md:flex flex-col justify-center items-center bg-colbert-50 w-5/12 top-0 right-0 h-full min-h-screen self-stretch">
                {/* <Image
                    src="/login-bg-2.svg"
                    width={380}
                    height={380}
                    alt="Picture of the author"
                    className="mx-auto  w-10/12 lg:w-7/12 2xl:w-6/12"
                /> */}

                <Image
                    src="/login-bg-3.svg"
                    width={420}
                    height={400}
                    alt="Picture"
                    className="mx-auto w-10/12"
                />

                <p className="text-base font-light text-colbert-600 z-10 px-16 xl:px-24 w-full text-center mb-24 mt-12 ">Okke let&apos;s you keep on top of your accounting with style and swagger.</p>
                <div className="w-10/12 border rounded flex flex-row justify-start items-center p-4 gap-x-2">
                    <Image
                        src="/lightbulb.svg"
                        width={64}
                        height={64}
                        alt="Picture"
                        className="mx-auto w-12"
                    />
                    <p className="text-normal italic text-xs">Did you know: Invoices featuring your business logo are on average more than 3x likely to get paid.</p>
                </div>
            </div>
        </>
    )
}












