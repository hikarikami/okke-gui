import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';


const generateRandomBankAccounts = (numItems) => {
    const accounts = [];

    for (let i = 1; i <= numItems; i++) {
       
        const bank = "Bank of " + faker.company.name();
        const description = faker.commerce.productDescription();
        const accountBalance = `$${(Math.random() * 100000).toFixed(2)}`;
        const connectedAccount = `xxxx-${faker.number.bigInt({ max: 9999n, min: 1000n })}`;
        const status = ["Active"];

        accounts.push({
            bank,
            description,
            connectedAccount,
            accountBalance,
            status
        });
    }

    return accounts;
};

const data = generateRandomBankAccounts(2);

function InventoryTable() {
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
                                        <span className="material-icons-outlined text-emerald-500" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>rss_feed</span>
                                    </div>
                                    <div className="text-emerald-600 w-full truncate">{item.bank}</div>
                                </div>
                                <div className="font-semibold">{item.accountBalance}</div>
                            </div>
                            <div className="text-xs text-colbert-500 leading-5 line-clamp-2 ">{item.description}</div>
                        </div>
                    ))}
                </div>
            );
        } else {
            // Render Desktop Table
            return (
                <div className="data-table bank-accounts">
                    <div className="data-table-header">
                        <div className="cell"><input type="checkbox" /></div>
                        <div className="cell">Account</div>
                        <div className="cell">Status</div>
                        <div className="cell">Bank Feed</div>
                        <div className="cell !justify-end !text-right">Current Balance</div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>
                    {data.map((item, index) => (
                        <div className="data-table-row" key={index}>
                            <div className="cell"><input type="checkbox" /></div>
                            {/* Bank name + Description */}
                            <div className="cell flex-col gap-y-0.5 !items-start">
                                <div className="font-medium flex items-center gap-x-1">
                                    <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>account_balance</span>
                                    {item.bank}
                                </div>
                                <div>
                                    <div className="text-xs text-colbert-500 line-clamp-2">{item.description}</div>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="chip-container"><div className="chip emerald subtle">{item.status}</div></div>
                            </div>
                            {/* Linked to feed details */}
                            <div className="cell">
                                <div className="flex flex-col overflow-hidden gap-y-0.5">
                                    <div className="text-sm flex flex-row gap-x-0.5">
                                    <span className="material-icons-outlined text-emerald-500" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>rss_feed</span>
                                        <span>Joint Savings Account 01</span>
                                    </div>
                                    <div className="text-xs text-colbert-500 block truncate nowrap">
                                        {item.connectedAccount}
                                    </div>
                                </div>
                            </div>
                            {/* Account balance */}
                            <div className="cell !justify-end !text-right">
                                <div>{item.accountBalance}</div>
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

export default InventoryTable;



