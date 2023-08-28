import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';


const generateRandomIncome = (numCustomers) => {
    const income = [];

    for (let i = 1; i <= numCustomers; i++) {
        const date = faker.date.anytime().toLocaleDateString();
        const fileName = "DCIM00000" + faker.airline.flightNumber() + ".png";
        const tag = faker.commerce.productName();
        const account = Math.random() < 0.5 ? 'Online Sales' : 'Interest Received';
        const receiptTotal = `$${(Math.random() * 5000).toFixed(2)}`;
        const status = ["attached"];

        income.push({
            date,
            fileName,
            tag,
            account,
            receiptTotal,
            status,
        });
    }

    return income;
};

const data = generateRandomIncome(5);


function DocumentsTable() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check the viewport size on component mount and resize events
        function handleResize() {
            setIsMobileView(window.innerWidth <= 1201);
        }

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Render the data table based on viewport size
    const renderDataTable = () => {
        if (isMobileView) {
            // Render mobile list
            return (
                <div className="data-table">
                    {data.map((item, index) => (
                        <div className="data-table-row" key={index}>
                            <div className="flex flex-row gap-x-1 text-sm text-medium items-center">
                                <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5.38965" y="7.42285" width="21.2203" height="17.7875" rx="1.1114" fill="url(#paint0_linear_7263_110640)" />
                                    <path d="M20.9858 20.4341C21.4861 20.4341 21.8916 20.0285 21.8916 19.5283V13.0865C21.8916 12.5862 21.4861 12.1807 20.9858 12.1807H11.5435C11.0432 12.1807 10.6377 12.5862 10.6377 13.0865V19.5283C10.6377 20.0285 11.0432 20.4341 11.5435 20.4341H20.9858ZM14.0764 15.4149L15.6395 17.2969L17.8277 14.477L20.7838 18.5583H11.7756L14.0764 15.4149Z" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_7263_110640" x1="15.9998" y1="7.42285" x2="15.9998" y2="29.9486" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#10B981" />
                                            <stop offset="1" stop-color="#009FA9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="w-full truncate">{item.fileName}</div>
                            </div>
                            {/* Date */}
                            <div className="text-xs text-colbert-500">{item.date}</div>
                            {/* Tag/s */}
                            <div className="cell">
                                <div className="chip-container chips-md flex-wrap">
                                    <div className="chip colbert subtle">{item.tag}</div>
                                </div>
                            </div>
                            {/* Attached to */}
                            <div className="cell mt-4">
                                {/* Association list - refactor into seperate component later */}
                                <div className="flex flex-col gap-y-2">
                                    {/* Associatated with Income */}
                                    <div className="association">
                                        <span className="font-medium">Income:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Online Sales</span>
                                    </div>
                                    {/* Associatated with Expense */}
                                    <div className="association">
                                        <span className="font-medium">Expense:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Entertainment, +1 More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="action-buttons absolute right-4 top-4">
                                <button>
                                    <span className="material-icons-outlined">more_vert</span>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            );
        } else {
            // Render Desktop Table
            return (
                <div className="data-table documents">
                    <div className="data-table-header">
                        <div className="cell"><input type="checkbox" /></div>
                        <div className="cell">File</div>
                        <div className="cell">Upload date</div>
                        <div className="cell">Tag/s</div>
                        <div className="cell">Attached to</div>
                        <div className="cell"></div>
                    </div>

                    {data.map((item, index) => (
                        <div className="data-table-row" key={index}>
                            <div className="cell"><input type="checkbox" /></div>
                            {/* File details */}
                            <div class="cell">
                                <div className="flex flex-row w-full items-center justify-start gap-x-2">
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5.38965" y="7.42285" width="21.2203" height="17.7875" rx="1.1114" fill="url(#paint0_linear_7263_110640)" />
                                        <path d="M20.9858 20.4341C21.4861 20.4341 21.8916 20.0285 21.8916 19.5283V13.0865C21.8916 12.5862 21.4861 12.1807 20.9858 12.1807H11.5435C11.0432 12.1807 10.6377 12.5862 10.6377 13.0865V19.5283C10.6377 20.0285 11.0432 20.4341 11.5435 20.4341H20.9858ZM14.0764 15.4149L15.6395 17.2969L17.8277 14.477L20.7838 18.5583H11.7756L14.0764 15.4149Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_7263_110640" x1="15.9998" y1="7.42285" x2="15.9998" y2="29.9486" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#10B981" />
                                                <stop offset="1" stop-color="#009FA9" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="flex flex-col gap-y-0.5">
                                        <div className="font-sm font-medium">{item.fileName}</div>
                                        <div className="text-xs text-colbert-500">2.04MB</div>
                                    </div>
                                </div>
                            </div>
                            {/* File date */}
                            <div className="cell">{item.date}</div>
                            {/* Tag/s */}
                            <div className="cell">
                                <div className="chip-container flex-wrap">
                                    <div className="chip colbert subtle">{item.tag}</div>
                                </div>
                            </div>
                            {/* Attached to */}
                            <div className="cell">
                                {/* Association list - refactor into seperate component later */}
                                <div className="flex flex-col gap-y-2">
                                    {/* Associatated with Income */}
                                    <div className="association">
                                        <span className="font-medium">Income:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Online Sales</span>
                                    </div>
                                    {/* Associatated with Expense */}
                                    <div className="association">
                                        <span className="font-medium">Expense:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Entertainment, +1 More</span>
                                    </div>
                                </div>
                            </div>
                            {/* Action Menu to */}
                            <div className="cell">
                                <div className="action-buttons absolute right-4">
                                    <button>
                                        <span className="material-icons-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            );
        }
    };

    return (
        <div className="expense-table">
            {renderDataTable()}
        </div>
    );
}

export default DocumentsTable;



