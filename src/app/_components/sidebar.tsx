
import React from 'react';
import Navlinks from './navlinks';

const Sidebar = () => {
    return (
        <>
            {/*Logo */}
            <nav className="hidden sm:flex flex-col w-16 lg:w-[264px] overflow-hidden z-20 p-1 lg:p-4 self-stretch min-h-screen items-start border-r border-colbert-300 bg-midnight-900 pt-4 transition-size duration-300 delay-75 ease-in-out">
                <svg className="logo w-8 lg:w-24 pl-4" viewBox="0 0 113 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7125_125731)">
                        <path d="M13.1506 10.1289C20.6316 10.1289 26.3015 15.6202 26.3015 22.8156C26.3015 30.0114 20.6316 35.5026 13.1506 35.5026C5.66999 35.5026 0 30.0114 0 22.8156C0 15.6202 5.66999 10.1289 13.1506 10.1289ZM13.1506 29.6799C16.8673 29.6799 19.6307 26.7449 19.6307 22.8156C19.6307 18.9338 16.8673 15.9989 13.1506 15.9989C9.48177 15.9989 6.67055 18.9338 6.67055 22.8156C6.67055 26.7449 9.48177 29.6799 13.1506 29.6799V29.6799Z" fill="#fff" />
                        <path d="M52.9198 35.031H44.7881L37.422 25.669L34.3129 29.0432V35.031H27.8555V0H34.3129V20.489L43.1619 10.5092H51.2933L41.8226 20.8694L52.9198 35.031Z" fill="#fff" />
                        <path d="M77.9823 35.031H69.8506L62.4845 25.669L59.3754 29.0432V35.031H52.918V0H59.3754V20.489L68.2244 10.5092H76.3558L66.8851 20.8694L77.9823 35.031Z" fill="#fff" />
                        <path d="M99.9855 25.088H81.0214C81.8791 27.9757 84.3567 30.0114 87.7398 30.0114C90.4081 30.0114 92.6475 28.7331 93.8387 26.6027L99.1278 28.9698C96.9836 32.8044 92.8857 35.5026 87.5493 35.5026C80.0687 35.5026 74.3984 30.0114 74.3984 22.8156C74.3984 15.6202 79.9733 10.1289 87.3111 10.1289C95.554 10.1289 101.319 16.9457 99.9855 25.088ZM81.1168 20.2121H93.5529C92.6953 17.4663 90.3606 15.6202 87.3111 15.6202C84.4045 15.6202 82.0222 17.4663 81.1168 20.2121Z" fill="#fff" />
                        <path d="M109.833 10.511L111.333 7.931L109.042 6.61719L107.543 9.19723L106.044 6.61719L103.753 7.931L105.253 10.511H102.254V13.1385H112.832V10.511H109.833Z" fill="#fff" />
                    </g>
                    <defs>
                        <clipPath id="clip0_7125_125731">
                            <rect width="112.832" height="35.5044" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                {/* Nav Links  */}
                <div className="w-full flex flex-col gap-y-1.5 mt-6">
                <Navlinks href="/business/expenses" label="Expenses" />
                <Navlinks href="/business/income" label="Income" />
                <Navlinks href="/business/documents" label="Documents" />
                <Navlinks href="/business/customers" label="Customers" />
                <Navlinks href="/business/inventory" label="Inventory" />
                <Navlinks href="/business/bank-accounts" label="Bank Accounts" />
                <Navlinks href="/business/invoices" label="Invoices" />
                <Navlinks href="/business/transactions" label="Transactions" />
                <Navlinks href="/" label="Back To Test Page" />
                </div>
            </nav>
        </>
    );
};

export default Sidebar;

