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
        if (drawerType == "documentPreviewDrawer") {
            return (
                // drawer-container class lets us use has selector in css to hide overflow
                <div className="drawer-container fixed overflow-auto left-0 right-0 z-40 pb-20 sm:pb-0 flex h-full w-full flex-col sm:justify-end bg-midnight-900/40 sm:flex-row" >

                   

                    {/* Start Side-by-side Drawer */}
                    <div className="drawer rounded-xl sm:rounded-none fixed z-40 top-8 shadow-2xl sm:shadow-lg bottom-0 sm:relative sm:top-auto sm:-z-1 sm:block order-2 sm:order-1 bg-white sm:w-[440px] lg:w-[540px]">
                        <div className="drawer-header flex border-none">
                            <button className="btn btn-secondary ml-auto sm:ml-0">
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0416 5.93168L13.9254 4.81543L9.49998 9.24085L5.07456 4.81543L3.95831 5.93168L8.38373 10.3571L3.95831 14.7825L5.07456 15.8988L9.49998 11.4733L13.9254 15.8988L15.0416 14.7825L10.6162 10.3571L15.0416 5.93168Z" fill="#121224" /></svg
                                >Close split-view
                            </button>
                            <div className="action-buttons ml-4 mr-0 sm:mr-auto">
                                <button>
                                    <svg width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5423 8.02344H12.3757V3.27344H7.62565V8.02344H4.45898L10.0007 13.5651L15.5423 8.02344ZM9.20898 9.60677V4.85677H10.7923V9.60677H11.7186L10.0007 11.3247L8.28273 9.60677H9.20898ZM4.45898 15.1484H15.5423V16.7318H4.45898V15.1484Z" fill="#121224" />
                                    </svg>
                                </button>
                            </div>
                          </div>
                        <DocumentPreviewDrawer />
                    </div>

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
                            <ExpenseDrawer />
                        </div>

                        <div className="drawer-footer">
                            <ExpenseSummary />
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
        else {
            return (
                <div className="drawer-container" >
                    <div className="drawer order-2 bg-white pb-24">
                        <div className="drawer-header">
                            <h2>{drawerHeader}</h2>
                            <div className="action-buttons">
                                <button onClick={toggleDrawer}>
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0416 5.93168L13.9254 4.81543L9.49998 9.24085L5.07456 4.81543L3.95831 5.93168L8.38373 10.3571L3.95831 14.7825L5.07456 15.8988L9.49998 11.4733L13.9254 15.8988L15.0416 14.7825L10.6162 10.3571L15.0416 5.93168Z" fill="#121224" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="drawer-body">
                            {drawerRender}
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
            );
        }
    }
}



export default DrawerContainer;

