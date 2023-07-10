import React from 'react';

const ExpenseDrawer = () => {
    return (

            <div className="expense">
                <div>
                    <form className="mt-4 flex flex-col gap-y-5">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="input-group compact w-full sm:w-48">
                                <label>Date<span className="text-tangerine-400">*</span></label>
                                <input type="text" className="w-full" placeholder="dd/mm/yyyy" />
                            </div>
                            <div className="input-group compact w-full">
                                <label>Reference number</label>
                                <input type="text" className="w-full" placeholder="" />
                            </div>
                        </div>
                        <div className="relative flex flex-col sm:flex-row gap-4">
                            <div className="input-group compact w-full sm:w-48">
                                <label>Amount<span className="text-tangerine-400">*</span></label>
                                <input type="text" className="w-full" placeholder="0.00" />
                            </div>
                            <div className="input-group compact relative w-full">
                                <label>Categorise as<span className="text-tangerine-400">*</span></label>
                                <select className="w-full" placeholder="Select category...">
                                    <option>Option 1</option></select
                                ><svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
                                </svg>
                            </div>
                            <div className="append-button floating">
                                <button className="btn btn-tertiary">Split expense</button>
                            </div>
                        </div>
                        <div className="input-group compact relative mt-10 w-full">
                            <label>Payment type is<span className="text-tangerine-400">*</span></label>
                            <select className="w-full" placeholder="Select category...">
                                <option>Bank deposit</option>
                                <option>Cash</option>
                                <option>Mixed payment</option></select
                            ><svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
                            </svg>
                        </div>
                        <div className="input-group compact w-full">
                            <label>Supplier</label>
                            <input type="text" className="w-full" placeholder="" />
                        </div>
                        <div className="input-group compact w-full">
                            <label>Description</label>
                            <textarea type="text" className="w-full" placeholder="Enter a description if required." rows="5"></textarea>
                        </div>
                    </form>

                    <div className="attachments pb-8 sm:pb-4">
                        <h4 className="font-semibold mt-6 mb-4">Attachment</h4>
                        <div className="attachment">
                            <div className="attachment-thumbnail">
                                <svg viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5.17665" y="8.84766" width="46.1044" height="38.6437" rx="2" fill="url(#paint0_linear_739_26318)" />
                                    <path d="M39.3976 37.1358C40.2979 37.1358 41.0277 36.406 41.0277 35.5057V20.8351C41.0277 19.9349 40.2979 19.2051 39.3976 19.2051H18.2068C17.3065 19.2051 16.5767 19.9349 16.5767 20.8351V35.5057C16.5767 36.406 17.3065 37.1358 18.2068 37.1358H39.3976ZM24.0478 26.2315L27.4438 30.3203L32.1982 24.194L38.6206 33.0606H19.049L24.0478 26.2315Z" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_739_26318" x1="28.2289" y1="8.84766" x2="28.2289" y2="57.7853" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#10B981" />
                                            <stop offset="1" stop-color="#009FA9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-col text-left">
                                <div className="attachment-name">receipt-2022232.png</div>
                                <div className="attachment-details">204kb</div>
                            </div>
                            <div className="action-buttons">
                                <button>
                                    <svg width="19" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12.9375H17V15.9375H14V17.9375H19V12.9375ZM7 9.9375H10V7.9375H5V12.9375H7V9.9375ZM21 3.9375H3C1.9 3.9375 1 4.8375 1 5.9375V19.9375C1 21.0375 1.9 21.9375 3 21.9375H21C22.1 21.9375 23 21.0375 23 19.9375V5.9375C23 4.8375 22.1 3.9375 21 3.9375ZM21 19.9475H3V5.9275H21V19.9475Z" fill="#121224" />
                                    </svg>
                                </button>
                                <button>
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.49996 7.14323C10.3708 7.14323 11.0833 6.43073 11.0833 5.5599C11.0833 4.68906 10.3708 3.97656 9.49996 3.97656C8.62913 3.97656 7.91663 4.68906 7.91663 5.5599C7.91663 6.43073 8.62913 7.14323 9.49996 7.14323ZM9.49996 8.72656C8.62913 8.72656 7.91663 9.43906 7.91663 10.3099C7.91663 11.1807 8.62913 11.8932 9.49996 11.8932C10.3708 11.8932 11.0833 11.1807 11.0833 10.3099C11.0833 9.43906 10.3708 8.72656 9.49996 8.72656ZM9.49996 13.4766C8.62913 13.4766 7.91663 14.1891 7.91663 15.0599C7.91663 15.9307 8.62913 16.6432 9.49996 16.6432C10.3708 16.6432 11.0833 15.9307 11.0833 15.0599C11.0833 14.1891 10.3708 13.4766 9.49996 13.4766Z" fill="#121224" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
};

export default ExpenseDrawer;

