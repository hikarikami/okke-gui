import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';


const generateRandomItems = (numTransactions) => {
    const transactions = [];

    for (let i = 1; i <= numTransactions; i++) {
        const code =  faker.commerce.product() + "-" + faker.commerce.productMaterial() + "-" + faker.string.alpha(2);
        const supplier = faker.company.name();
        const description = faker.commerce.productDescription();
        const taxType = Math.random() < 0.5 ? 'GST' : 'GST-Free';
        const sellPrice = `$${(Math.random() * 2000).toFixed(2)}`;
        const status = ["Active"];

        transactions.push({
            code,
            supplier,
            description,
            taxType,
            sellPrice,
            status
        });
    }

    return transactions;
};

const data = generateRandomItems(5);

function TransactionsTable() {
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
                            <div className="flex flex-row gap-x-2 text-sm text-medium">
                                <div className="flex flex-row gap-x-1  w-full truncate">
                                    <div className="flex">
                                    
                                    <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>inventory_2</span>
                                    </div>
                                    <div className="w-full truncate">{item.code}</div>
                                </div>
                                <div className="font-semibold">{item.sellPrice}</div>
                            </div>
                            <div className="text-xs text-colbert-500 leading-5 line-clamp-2 ">{item.description}</div>
                        </div>
                    ))}
                </div>
            );
        } else {
            // Render Desktop Table
            return (
                <div className="data-table invoices">
                    <div className="data-table-header">
                        <div className="cell"><input type="checkbox" /></div>
                        <div className="cell">Item</div>
                        <div className="cell">Tax code</div>
                        <div className="cell !justify-end !text-right">Sell Price</div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>

                    {data.map((item, index) => (
                        <div className="data-table-row" key={index}>
                            <div className="cell"><input type="checkbox" /></div>
                            <div className="cell flex-col gap-y-0.5 !items-start">
                                <div className="font-medium flex items-center gap-x-1"> 
                                <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>inventory_2</span>
                                {item.code}
                                </div>
                                <div>
                                    <div className="text-xs text-colbert-500 line-clamp-2">{item.description}</div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="chip-container"><div className="chip emerald subtle">{item.taxType}</div></div>
                            </div>
                            <div className="cell !justify-end !text-right">
                                <div>{item.sellPrice}</div>
                            </div>
                            <div className="cell status">
                                <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>label</span>
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

export default TransactionsTable;



