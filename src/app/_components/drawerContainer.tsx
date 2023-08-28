"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';

import ExpenseDrawer from './drawers/expenseDrawer';
import DocumentSelectDrawer from './drawers/documentSelectDrawer';
import DocumentPreviewDrawer from './drawers/documentPreviewDrawer';
import ExpenseSummary from './drawers/expenseSummary';



interface DrawerProps {
    drawerType: string;
}

const DrawerContainer: React.FC<DrawerProps> = ({ drawerType }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    let drawerHeader = "";

    let drawerRender;
    switch (drawerType) {
        case 'expenseDrawer':
            drawerHeader = "New Expense";
            drawerRender = <><ExpenseDrawer /><ExpenseSummary /></>
            break;
        case 'DocumentSelectDrawer':
            drawerHeader = "Attach A Document";
            drawerRender = <DocumentSelectDrawer />
            break;

    }

    if (isDrawerOpen) {
        
            return (
                // drawer-container class lets us use has selector in css to hide overflow
                <div className="drawer-container fixed overflow-auto left-0 right-0 z-40 pb-20 sm:pb-0 flex h-full w-full flex-col sm:justify-end bg-midnight-900/40 sm:flex-row" >
                     {/* Start Expense Drawer */}
                     <div className="drawer sm:w-[540px] order-1 sm:order-2">
                        <div className="drawer-header">
                            <h2>Editing Expense</h2>
                            <div className="action-buttons">
                                <button onClick={toggleDrawer}>
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0416 5.93168L13.9254 4.81543L9.49998 9.24085L5.07456 4.81543L3.95831 5.93168L8.38373 10.3571L3.95831 14.7825L5.07456 15.8988L9.49998 11.4733L13.9254 15.8988L15.0416 14.7825L10.6162 10.3571L15.0416 5.93168Z" fill="#121224" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="drawer-body pb-74">
                         

<ul className="card-list ">
            <label className="card">
                <input type="radio" name="product" className="card-input-element" />
                <div className="radio-check"></div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84375 11.5807C8.84375 10.7983 9.47801 10.1641 10.2604 10.1641H23.7395C24.5219 10.1641 25.1562 10.7983 25.1562 11.5807V22.4201C25.1562 23.2025 24.5219 23.8368 23.7395 23.8368H10.2604C9.47801 23.8368 8.84375 23.2025 8.84375 22.4201V11.5807Z" fill="#F87171" />
                    <path d="M12.296 18.5V15.0938H13.6399C13.8983 15.0938 14.1183 15.1431 14.3002 15.2418C14.482 15.3394 14.6206 15.4752 14.716 15.6493C14.8125 15.8223 14.8607 16.0218 14.8607 16.248C14.8607 16.4742 14.8119 16.6738 14.7143 16.8468C14.6168 17.0198 14.4754 17.1545 14.2902 17.2509C14.1062 17.3474 13.8833 17.3956 13.6216 17.3956H12.7651V16.8185H13.5052C13.6438 16.8185 13.758 16.7947 13.8478 16.747C13.9387 16.6982 14.0064 16.6311 14.0507 16.5458C14.0962 16.4593 14.1189 16.36 14.1189 16.248C14.1189 16.1349 14.0962 16.0363 14.0507 15.952C14.0064 15.8666 13.9387 15.8006 13.8478 15.7541C13.7569 15.7064 13.6416 15.6826 13.5019 15.6826H13.0162V18.5H12.296ZM16.713 18.5H15.5055V15.0938H16.723C17.0656 15.0938 17.3606 15.162 17.6078 15.2984C17.8551 15.4336 18.0452 15.6282 18.1783 15.8821C18.3125 16.1361 18.3795 16.4399 18.3795 16.7936C18.3795 17.1484 18.3125 17.4533 18.1783 17.7083C18.0452 17.9633 17.854 18.159 17.6045 18.2954C17.3561 18.4318 17.059 18.5 16.713 18.5ZM16.2257 17.883H16.6831C16.896 17.883 17.075 17.8453 17.2203 17.7699C17.3667 17.6934 17.4764 17.5753 17.5496 17.4156C17.6239 17.2548 17.661 17.0475 17.661 16.7936C17.661 16.5419 17.6239 16.3362 17.5496 16.1765C17.4764 16.0169 17.3672 15.8993 17.222 15.8239C17.0767 15.7485 16.8976 15.7108 16.6847 15.7108H16.2257V17.883ZM19.0901 18.5V15.0938H21.3454V15.6875H19.8102V16.4992H21.1957V17.0929H19.8102V18.5H19.0901Z" fill="white" />
                </svg>
                <div className="flex flex-col">
                    <span className="font-medium">`Test`</span>
                    <div className="text-sm text-colbert-500"><span>28/05/2023M</span> @ <span>10:30pm</span></div>
                </div>
                <button className="btn btn-tertiary ml-auto">Preview</button>
            </label>
            <label className="card">
                <input type="radio" name="product" className="card-input-element" />
                <div className="radio-check"></div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84375 11.5807C8.84375 10.7983 9.47801 10.1641 10.2604 10.1641H23.7395C24.5219 10.1641 25.1562 10.7983 25.1562 11.5807V22.4201C25.1562 23.2025 24.5219 23.8368 23.7395 23.8368H10.2604C9.47801 23.8368 8.84375 23.2025 8.84375 22.4201V11.5807Z" fill="#F87171" />
                    <path d="M12.296 18.5V15.0938H13.6399C13.8983 15.0938 14.1183 15.1431 14.3002 15.2418C14.482 15.3394 14.6206 15.4752 14.716 15.6493C14.8125 15.8223 14.8607 16.0218 14.8607 16.248C14.8607 16.4742 14.8119 16.6738 14.7143 16.8468C14.6168 17.0198 14.4754 17.1545 14.2902 17.2509C14.1062 17.3474 13.8833 17.3956 13.6216 17.3956H12.7651V16.8185H13.5052C13.6438 16.8185 13.758 16.7947 13.8478 16.747C13.9387 16.6982 14.0064 16.6311 14.0507 16.5458C14.0962 16.4593 14.1189 16.36 14.1189 16.248C14.1189 16.1349 14.0962 16.0363 14.0507 15.952C14.0064 15.8666 13.9387 15.8006 13.8478 15.7541C13.7569 15.7064 13.6416 15.6826 13.5019 15.6826H13.0162V18.5H12.296ZM16.713 18.5H15.5055V15.0938H16.723C17.0656 15.0938 17.3606 15.162 17.6078 15.2984C17.8551 15.4336 18.0452 15.6282 18.1783 15.8821C18.3125 16.1361 18.3795 16.4399 18.3795 16.7936C18.3795 17.1484 18.3125 17.4533 18.1783 17.7083C18.0452 17.9633 17.854 18.159 17.6045 18.2954C17.3561 18.4318 17.059 18.5 16.713 18.5ZM16.2257 17.883H16.6831C16.896 17.883 17.075 17.8453 17.2203 17.7699C17.3667 17.6934 17.4764 17.5753 17.5496 17.4156C17.6239 17.2548 17.661 17.0475 17.661 16.7936C17.661 16.5419 17.6239 16.3362 17.5496 16.1765C17.4764 16.0169 17.3672 15.8993 17.222 15.8239C17.0767 15.7485 16.8976 15.7108 16.6847 15.7108H16.2257V17.883ZM19.0901 18.5V15.0938H21.3454V15.6875H19.8102V16.4992H21.1957V17.0929H19.8102V18.5H19.0901Z" fill="white" />
                </svg>
                <div className="flex flex-col gap-y-1 text-ellipsis">
                    <span className="font-medium">Test</span>
                    <div className="text-sm text-colbert-500"><span>28/05/2023M</span> @ <span>10:30pm</span></div>
                </div>
                <button className="btn btn-tertiary ml-auto">Preview</button>
            </label>
            <label className="card">
                <input type="radio" name="product" className="card-input-element" />
                <div className="radio-check"></div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84375 11.5807C8.84375 10.7983 9.47801 10.1641 10.2604 10.1641H23.7395C24.5219 10.1641 25.1562 10.7983 25.1562 11.5807V22.4201C25.1562 23.2025 24.5219 23.8368 23.7395 23.8368H10.2604C9.47801 23.8368 8.84375 23.2025 8.84375 22.4201V11.5807Z" fill="#F87171" />
                    <path d="M12.296 18.5V15.0938H13.6399C13.8983 15.0938 14.1183 15.1431 14.3002 15.2418C14.482 15.3394 14.6206 15.4752 14.716 15.6493C14.8125 15.8223 14.8607 16.0218 14.8607 16.248C14.8607 16.4742 14.8119 16.6738 14.7143 16.8468C14.6168 17.0198 14.4754 17.1545 14.2902 17.2509C14.1062 17.3474 13.8833 17.3956 13.6216 17.3956H12.7651V16.8185H13.5052C13.6438 16.8185 13.758 16.7947 13.8478 16.747C13.9387 16.6982 14.0064 16.6311 14.0507 16.5458C14.0962 16.4593 14.1189 16.36 14.1189 16.248C14.1189 16.1349 14.0962 16.0363 14.0507 15.952C14.0064 15.8666 13.9387 15.8006 13.8478 15.7541C13.7569 15.7064 13.6416 15.6826 13.5019 15.6826H13.0162V18.5H12.296ZM16.713 18.5H15.5055V15.0938H16.723C17.0656 15.0938 17.3606 15.162 17.6078 15.2984C17.8551 15.4336 18.0452 15.6282 18.1783 15.8821C18.3125 16.1361 18.3795 16.4399 18.3795 16.7936C18.3795 17.1484 18.3125 17.4533 18.1783 17.7083C18.0452 17.9633 17.854 18.159 17.6045 18.2954C17.3561 18.4318 17.059 18.5 16.713 18.5ZM16.2257 17.883H16.6831C16.896 17.883 17.075 17.8453 17.2203 17.7699C17.3667 17.6934 17.4764 17.5753 17.5496 17.4156C17.6239 17.2548 17.661 17.0475 17.661 16.7936C17.661 16.5419 17.6239 16.3362 17.5496 16.1765C17.4764 16.0169 17.3672 15.8993 17.222 15.8239C17.0767 15.7485 16.8976 15.7108 16.6847 15.7108H16.2257V17.883ZM19.0901 18.5V15.0938H21.3454V15.6875H19.8102V16.4992H21.1957V17.0929H19.8102V18.5H19.0901Z" fill="white" />
                </svg>
                <div className="flex flex-col gap-y-1">
                    <span className="font-medium">Test</span>
                    <div className="text-sm text-colbert-500"><span>28/05/2023M</span> @ <span>10:30pm</span></div>
                </div>
                <button className="btn btn-tertiary ml-auto">Preview</button>
            </label>
            <label className="card">
                <input type="radio" name="product" className="card-input-element" />
                <div className="radio-check"></div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84375 11.5807C8.84375 10.7983 9.47801 10.1641 10.2604 10.1641H23.7395C24.5219 10.1641 25.1562 10.7983 25.1562 11.5807V22.4201C25.1562 23.2025 24.5219 23.8368 23.7395 23.8368H10.2604C9.47801 23.8368 8.84375 23.2025 8.84375 22.4201V11.5807Z" fill="#F87171" />
                    <path d="M12.296 18.5V15.0938H13.6399C13.8983 15.0938 14.1183 15.1431 14.3002 15.2418C14.482 15.3394 14.6206 15.4752 14.716 15.6493C14.8125 15.8223 14.8607 16.0218 14.8607 16.248C14.8607 16.4742 14.8119 16.6738 14.7143 16.8468C14.6168 17.0198 14.4754 17.1545 14.2902 17.2509C14.1062 17.3474 13.8833 17.3956 13.6216 17.3956H12.7651V16.8185H13.5052C13.6438 16.8185 13.758 16.7947 13.8478 16.747C13.9387 16.6982 14.0064 16.6311 14.0507 16.5458C14.0962 16.4593 14.1189 16.36 14.1189 16.248C14.1189 16.1349 14.0962 16.0363 14.0507 15.952C14.0064 15.8666 13.9387 15.8006 13.8478 15.7541C13.7569 15.7064 13.6416 15.6826 13.5019 15.6826H13.0162V18.5H12.296ZM16.713 18.5H15.5055V15.0938H16.723C17.0656 15.0938 17.3606 15.162 17.6078 15.2984C17.8551 15.4336 18.0452 15.6282 18.1783 15.8821C18.3125 16.1361 18.3795 16.4399 18.3795 16.7936C18.3795 17.1484 18.3125 17.4533 18.1783 17.7083C18.0452 17.9633 17.854 18.159 17.6045 18.2954C17.3561 18.4318 17.059 18.5 16.713 18.5ZM16.2257 17.883H16.6831C16.896 17.883 17.075 17.8453 17.2203 17.7699C17.3667 17.6934 17.4764 17.5753 17.5496 17.4156C17.6239 17.2548 17.661 17.0475 17.661 16.7936C17.661 16.5419 17.6239 16.3362 17.5496 16.1765C17.4764 16.0169 17.3672 15.8993 17.222 15.8239C17.0767 15.7485 16.8976 15.7108 16.6847 15.7108H16.2257V17.883ZM19.0901 18.5V15.0938H21.3454V15.6875H19.8102V16.4992H21.1957V17.0929H19.8102V18.5H19.0901Z" fill="white" />
                </svg>
                <div className="flex flex-col gap-y-1">
                    <span className="font-medium">Test</span>
                    <div className="text-sm text-colbert-500"><span>28/05/2023M</span> @ <span>10:30pm</span></div>
                </div>
                <button className="btn btn-tertiary ml-auto">Preview</button>
            </label>
            <label className="card">
                <input type="radio" name="product" className="card-input-element" />
                <div className="radio-check"></div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84375 11.5807C8.84375 10.7983 9.47801 10.1641 10.2604 10.1641H23.7395C24.5219 10.1641 25.1562 10.7983 25.1562 11.5807V22.4201C25.1562 23.2025 24.5219 23.8368 23.7395 23.8368H10.2604C9.47801 23.8368 8.84375 23.2025 8.84375 22.4201V11.5807Z" fill="#F87171" />
                    <path d="M12.296 18.5V15.0938H13.6399C13.8983 15.0938 14.1183 15.1431 14.3002 15.2418C14.482 15.3394 14.6206 15.4752 14.716 15.6493C14.8125 15.8223 14.8607 16.0218 14.8607 16.248C14.8607 16.4742 14.8119 16.6738 14.7143 16.8468C14.6168 17.0198 14.4754 17.1545 14.2902 17.2509C14.1062 17.3474 13.8833 17.3956 13.6216 17.3956H12.7651V16.8185H13.5052C13.6438 16.8185 13.758 16.7947 13.8478 16.747C13.9387 16.6982 14.0064 16.6311 14.0507 16.5458C14.0962 16.4593 14.1189 16.36 14.1189 16.248C14.1189 16.1349 14.0962 16.0363 14.0507 15.952C14.0064 15.8666 13.9387 15.8006 13.8478 15.7541C13.7569 15.7064 13.6416 15.6826 13.5019 15.6826H13.0162V18.5H12.296ZM16.713 18.5H15.5055V15.0938H16.723C17.0656 15.0938 17.3606 15.162 17.6078 15.2984C17.8551 15.4336 18.0452 15.6282 18.1783 15.8821C18.3125 16.1361 18.3795 16.4399 18.3795 16.7936C18.3795 17.1484 18.3125 17.4533 18.1783 17.7083C18.0452 17.9633 17.854 18.159 17.6045 18.2954C17.3561 18.4318 17.059 18.5 16.713 18.5ZM16.2257 17.883H16.6831C16.896 17.883 17.075 17.8453 17.2203 17.7699C17.3667 17.6934 17.4764 17.5753 17.5496 17.4156C17.6239 17.2548 17.661 17.0475 17.661 16.7936C17.661 16.5419 17.6239 16.3362 17.5496 16.1765C17.4764 16.0169 17.3672 15.8993 17.222 15.8239C17.0767 15.7485 16.8976 15.7108 16.6847 15.7108H16.2257V17.883ZM19.0901 18.5V15.0938H21.3454V15.6875H19.8102V16.4992H21.1957V17.0929H19.8102V18.5H19.0901Z" fill="white" />
                </svg>
                <div className="flex flex-col gap-y-1">
                    <span className="font-medium">Test</span>
                    <div className="text-sm text-colbert-500"><span>28/05/2023M</span> @ <span>10:30pm</span></div>
                </div>
                <button className="btn btn-tertiary ml-auto">Preview</button>
            </label>
        </ul>
                        </div>

                        <div className="drawer-footer">
                      
                            <div className="btn-group">
                                <button className="btn btn-md btn-secondary order-3 sm:order-1">Cancel</button>
                                <button className="btn btn-md btn-secondary order-2">Save &amp; New</button>
                                <button className="btn btn-md btn-primary order-1 sm:order-3">Save &amp; Close</button>
                            </div>
                        </div>
                  

        </div>


                </div>
            )
        
    }
}



export default DrawerContainer;




                    {/* Start Side-by-side Drawer */}
                    // <div className="drawer rounded-xl sm:rounded-none fixed z-40 top-8 shadow-2xl sm:shadow-lg bottom-0 sm:relative sm:top-auto sm:-z-1 sm:block order-2 sm:order-1 bg-white sm:w-[440px] lg:w-[540px]">
                    //     <div className="drawer-header flex border-none">
                    //         <button className="btn btn-secondary ml-auto sm:ml-0">
                    //             <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    //                 <path d="M15.0416 5.93168L13.9254 4.81543L9.49998 9.24085L5.07456 4.81543L3.95831 5.93168L8.38373 10.3571L3.95831 14.7825L5.07456 15.8988L9.49998 11.4733L13.9254 15.8988L15.0416 14.7825L10.6162 10.3571L15.0416 5.93168Z" fill="#121224" /></svg
                    //             >Close split-view
                    //         </button>
                    //         <div className="action-buttons ml-4 mr-0 sm:mr-auto">
                    //             <button>
                    //                 <svg width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    //                     <path d="M15.5423 8.02344H12.3757V3.27344H7.62565V8.02344H4.45898L10.0007 13.5651L15.5423 8.02344ZM9.20898 9.60677V4.85677H10.7923V9.60677H11.7186L10.0007 11.3247L8.28273 9.60677H9.20898ZM4.45898 15.1484H15.5423V16.7318H4.45898V15.1484Z" fill="#121224" />
                    //                 </svg>
                    //             </button>
                    //         </div>
                    //       </div>
                    //     <DocumentPreviewDrawer />
                    // </div>

                    //  {/* Start Expense Drawer */}
                    //  <div className="drawer sm:w-[540px] order-1 sm:order-2">
                    //     <div className="drawer-header">
                    //         <h2>Editing Expense</h2>
                    //         <div className="action-buttons">
                    //             <button onClick={toggleDrawer}>
                    //                 <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    //                     <path d="M15.0416 5.93168L13.9254 4.81543L9.49998 9.24085L5.07456 4.81543L3.95831 5.93168L8.38373 10.3571L3.95831 14.7825L5.07456 15.8988L9.49998 11.4733L13.9254 15.8988L15.0416 14.7825L10.6162 10.3571L15.0416 5.93168Z" fill="#121224" />
                    //                 </svg>
                    //             </button>
                    //         </div>
                    //     </div>
                    //     <div className="drawer-body pb-74">
                    //         <ExpenseDrawer />
                    //     </div>

                    //     <div className="drawer-footer">
                    //         <ExpenseSummary />
                    //         <div className="btn-group">
                    //             <button className="btn btn-md btn-secondary order-3 sm:order-1">Cancel</button>
                    //             <button className="btn btn-md btn-secondary order-2">Save &amp; New</button>
                    //             <button className="btn btn-md btn-primary order-1 sm:order-3">Save &amp; Close</button>
                    //         </div>
                    //     </div>
                    // </div>
