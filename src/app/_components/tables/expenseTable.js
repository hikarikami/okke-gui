import { useEffect, useState } from 'react';

const data = [
    {
        date: "date",
        supplier: "ABC Plumbing Inc.",
        description: "Purchased a large range of quality plumbing goods, as well as a variety of well-priced services from Mr. ABC himself.",
        account: "account",
        receiptTotal: "$3,250.00"
    },
    {
        date: "date",
        supplier: "Terry's Terrific Terrariums, Tiles, Toasters & More",
        description: "description",
        account: "account",
        receiptTotal: "$3,250.00"
    },
];

function ExpenseTable() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check the viewport size on component mount and resize events
        function handleResize() {
            setIsMobileView(window.innerWidth <= 768);
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
                                    <div className="flex shrink ml-auto md:hidden"><span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>account_balance</span></div>
                                    <div>{item.receiptTotal}</div>
                                </div>
                            </div>
                            <div className="text-sm text-colbert-500">18/05/2022</div>
                            <div className="text-sm leading-6 line-clamp-2 ">{item.description}</div>
                            <div className="cell">
                                <div className="chip-container chips-lg mt-4"><div className="chip">Marketing & Advertising</div></div>
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
                        <div className="cell">Supplier</div>
                        <div className="cell">Description</div>
                        <div className="cell">Account</div>
                        <div className="cell">Receipt total</div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>

                    {data.map((item, index) => (
                        <div className="data-table-row" key={index}>
                            <div className="cell"><input type="checkbox" /></div>
                            <div className="cell">18/05/2022</div>
                            <div className="cell">{item.supplier}</div>
                            <div className="cell">This is an example of a longish description that no longer truncates, and wraps to the next line and then truncates after 2 lines of text.</div>
                            <div className="cell">
                                <div className="chip-container"><div className="chip">Marketing & Advertising</div></div>
                            </div>
                            <div className="cell gap-x-2">
                                <div className="flex md:hidden"><span className="material-icons-outlined">account_balance</span></div>
                                <div>200.00</div>
                            </div>
                            <div className="cell status">
                                <span className="material-icons-outlined">attach_file</span>
                                <span className="material-icons-outlined">attach_file</span>
                                <span className="material-icons-outlined">attach_file</span>
                            </div>
                            <div className="cell">
                                <div className="action-buttons">
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

export default ExpenseTable;



