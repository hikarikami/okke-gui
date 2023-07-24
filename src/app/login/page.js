/*
 * 
 * Login
 * 
 */

"use client"; // This is a client component 👈🏽

import Button from "../_components/button";
import Image from 'next/image'





export default function page() {

    return (
        <>
            <div class="w-12/12 md:w-8/12 flex flex-shrink-0 px-6 justify-center h-full min-h-screen">
                <div class="w-108 pt-12 h-full flex flex-col min-h-screen yp-on-lg">
                    <svg className="w-28" viewBox="0 0 158 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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


                    <h1 className="text-3xl font-semibold mt-6">Get started for free, no credit card needed.</h1>
                    <p className="mt-6">Sign up now to get started.</p>
                    <form className="mt-6 flex flex-col gap-y-5">
                        <div className="input-group  w-full">
                            <label>Full Name</label>
                            <input type="text" className="w-full" placeholder="" />
                        </div>
                        <div className="input-group  w-full">
                            <label>Email Address</label>
                            <input type="text" className="w-full" placeholder="" />
                        </div>
                        <div className="input-group  w-full">
                            <label>Strong Password</label>
                            <input type="password" className="w-full" placeholder="" />
                            <div className="password-checker mt-4 text-sm text-colbert-500 p-4 border border-colbert-200 rounded shadow-sm bg-white">
                                <ul className="flex flex-col gap-y-1 w-full items-start">
                                    <li className="flex flex-row justify-center gap-x-1 text-emerald-500"><span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>check</span><span>Minimum of 12 Characters</span></li>
                                    <li className="flex flex-row justify-center gap-x-1"><span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>check</span><span>Minimum of 12 Characters</span></li>
                                    <li className="flex flex-row justify-center gap-x-1"><span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>check</span><span>At least 1 Number</span></li>
                                    <li className="flex flex-row justify-center gap-x-1"><span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>check</span><span>Minimum of 12 Characters</span></li>

                                </ul>
                        </div>

                        </div>
                        
                        <div className="input-group flex !flex-row w-full gap-x-2 items-center">
                            <input type="checkbox" className="" placeholder="" /><label>I agree to the terms and conditions</label>
                        </div>
                    </form>
                    <div className="btn-group mt-4 w-full !flex-col">
                        <Button label='Create My Account' buttonType='primary' size='lg' className='!w-full' />
                        <div className="w-full text-center mt-4">Already have an account? <a>Sign in</a></div>
                    </div>

                    <div className="flex mt-auto mb-6 mx-auto gap-x-8 text-xs link-group">
                        <a className="text-colbert-600 no-underline hover:text-lavender-700">Contact</a> <a className="text-colbert-600 no-underline hover:text-lavender-700">Privacy Policy</a> <a className="text-colbert-600 no-underline hover:text-lavender-700">Get help with account</a>
                    </div>

                </div>
            </div>
            <div className="sticky hidden md:flex items-end align-middle bg-gradient-to-br from-lavender-400 to-tangerine-400 w-4/12 top-0 right-0 h-full min-h-screen self-stretch">
                {/* <Image
                    src="/login-bg.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="w-full -mx-24"
                /> */}

                <div className="absolute top-0 bottom-0 left-0 right-0 login-bg"></div>
                <p className="text-lg font-semibold text-white z-10 px-24 text-center mb-24">Spend less time on bookkeeping and more time growing your business.</p>
            </div>
        </>
    )
}












