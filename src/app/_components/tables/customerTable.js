import { useEffect, useState } from 'react';

const data = [
    {
        id: "LAU001",
        type: "PERS",
        businessName: "",
        customerName: "Laura Whitman But Even Longer Than Usual",
        phoneNumber: "0404822085",
        email: "laura.whiteman@gmail.com",
        totalOutstanding: "$4,250.00",
        status: ["active"]
    },
    {
        id: "BUS001",
        itemType: "BUS",
        businessName: "The Really, Really, Really Long Name Company",
        customerName: "Henry",
        phoneNumber: "0404822085",
        email: "henry@longcompanyname.com",
        totalOutstanding: "$144,001.20",
        status: ["active"]
    }
];

function CustomerTable() {
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
                                <div className="flex flex-row gap-x-1  w-full truncate">
                                    <div className="flex">
                                    {/* icon based on type */}
                                    {item.type == 'PERS' ? <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>person</span> : <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>business</span> }
                                    </div>
                                    <div className="w-full truncate">{item.customerName}</div>
                                </div>
                                <div className="font-semibold">{item.totalOutstanding}</div>
                            </div>
                            <div className="text-sm text-colbert-500">{item.email}</div>
                            <div className="text-sm leading-6 line-clamp-2 ">{item.description}</div>


                        </div>
                    ))}
                </div>
            );
        } else {
            // Render Desktop Table
            return (
                <div className="data-table customers">
                    <div className="data-table-header">
                        <div className="cell"><input type="checkbox" /></div>
                        <div className="cell">Customer</div>
                        <div className="cell">Customer ID</div>
                        <div className="cell">Phone Number</div>
                        <div className="cell !justify-end !text-right">Total Outstanding total</div>
                        <div className="cell"></div>
                    </div>

                    {data.map((item, index) => (
                        <div className="data-table-row" key={index}>
                            <div className="cell"><input type="checkbox" /></div>
                            <div className="cell flex-col gap-y-0.5 !items-start">
                                <div className="font-medium flex items-center gap-x-1"> 
                                {item.type == 'PERS' ? <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>person</span> : <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>business</span> }
                                {item.customerName}
                                </div>
                                <div>
                                    <div className="text-xs text-colbert-500">{item.email}</div>
                                </div>
                            </div>
                            <div className="cell !block truncate line-clamp-1 self-center">{item.id}</div>
                            <div className="cell !block truncate line-clamp-1 self-center">{item.phoneNumber}</div>
                            <div className="cell !justify-end !text-right">
                                <div>{item.totalOutstanding}</div>
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

export default CustomerTable;



