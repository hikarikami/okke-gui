import { useEffect, useState } from 'react';

const data = [
    {
      code: "Premium Laptop-001",
      description:
        "This premium laptop is designed for high performance and productivity. It features the latest technology and a sleek design.",
      sellPrice: "$1500.00",
      taxType: "Non-GST",
      status: ["active"],
    },
    {
      code: "Smartphone-002",
      description:
        "Stay connected with this advanced smartphone. It comes with a powerful camera, long-lasting battery, and a vibrant display.",
      sellPrice: "$800.00",
      taxType: "Non-GST",
      status: ["active"],
    },
    {
      code: "Ultra HD Smart TV-003",
      description:
        "Experience the world of entertainment in stunning Ultra HD resolution with this smart TV. Enjoy a wide range of apps and features.",
      sellPrice: "$1200.00",
      taxType: "Non-GST",
      status: ["active"],
    },
    {
      code: "High-Performance Gaming PC-004",
      description:
        "Dominate your gaming opponents with this high-performance gaming PC. It's equipped with top-of-the-line hardware for smooth gameplay.",
      sellPrice: "$2500.00",
      taxType: "Non-GST",
      status: ["active"],
    },
    {
      code: "Wireless Earbuds-005",
      description:
        "Listen to your favorite music on the go with these comfortable wireless earbuds. They offer crisp audio and long battery life.",
      sellPrice: "$100.00",
      taxType: "Non-GST",
      status: ["active"],
    },
    // Continue adding 45 more items here...
    {
      code: "Designer Sunglasses-050",
      description:
        "Protect your eyes in style with these designer sunglasses. They offer 100% UV protection and a fashionable look.",
      sellPrice: "$180.00",
      taxType: "Non-GST",
      status: ["active"],
    },
  ];
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
                            <div className="flex flex-row gap-x-2 text-base text-medium">
                                <div className="flex flex-row gap-x-1  w-full truncate">
                                    <div className="flex">
                                    
                                    <span className="material-icons-outlined" style={{ fontSize: "1.125rem", lineHeight: "unset" }}>inventory_2</span>
                                    </div>
                                    <div className="w-full truncate">{item.code}</div>
                                </div>
                                <div className="font-semibold">{item.sellPrice}</div>
                            </div>
                            <div className="text-sm text-colbert-500 leading-6 line-clamp-2 ">{item.description}</div>
                            


                        </div>
                    ))}
                </div>
            );
        } else {
            // Render Desktop Table
            return (
                <div className="data-table inventory">
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

export default InventoryTable;



