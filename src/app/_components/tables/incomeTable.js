import { useEffect, useState } from 'react';

const data = [
    {
        date: "19/07/2023",
        supplier: "Laura Whitman",
        description: "Invoice Payment: INV-20332",
        account: "Online Sales",
        receiptTotal: "$4,250.00",
        status: ["attached", "banked", "manual"]
    },
    {
        date: "19/07/2023",
        supplier: "Greg McGreg",
        description: "Invoice Payment: INV-20331",
        account: "Online Sales",
        receiptTotal: "$500.00",
        status: ["attached", "banked", "manual"]
    },
];

function IncomeTable() {
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
                            <div className="flex flex-row gap-x-2 text-base text-medium">
                                <div className="w-full truncate">{item.supplier}</div>
                                <div className="flex flex-row gap-x-1">
                                    <div className="flex shrink"><span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>account_balance</span></div>
                                    <div className="font-semibold">{item.receiptTotal}</div>
                                </div>
                            </div>
                            <div className="text-sm text-colbert-500">18/05/2022</div>
                            <div className="text-sm leading-6 line-clamp-2 ">{item.description}</div>
                            <div className="cell">
                                <div className="chip-container chips-lg mt-4"><div className="chip">{item.account}</div></div>
                            </div>

                            <div className="action-buttons absolute right-4 bottom-4">
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
                <div className="data-table expenses">
                    <div className="data-table-header">
                        <div className="cell"><input type="checkbox" /></div>
                        <div className="cell">Date</div>
                        <div className="cell">Customer</div>
                        <div className="cell">Description</div>
                        <div className="cell">Account</div>
                        <div className="cell !justify-end !text-right">Receipt total</div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>

                    {data.map((item, index) => (
                        <div className="data-table-row" key={index}>
                            <div className="cell"><input type="checkbox" /></div>
                            <div className="cell">{item.date}</div>
                            <div className="cell !block truncate line-clamp-1 self-center">{item.supplier}</div>
                            <div className="cell !block truncate line-clamp-1 self-center">{item.description}</div>
                            <div className="cell">
                                <div className="chip-container"><div className="chip">{item.account}</div></div>
                            </div>
                            <div className="cell gap-x-2 !justify-end !text-right">
                               
                                <div>{item.receiptTotal}</div>
                            </div>
                            <div className="cell status">
                                <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>attach_file</span>
                                <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>attach_file</span>
                                <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>attach_file</span>
                            </div>
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

export default IncomeTable;



