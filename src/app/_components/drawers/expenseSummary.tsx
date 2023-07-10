import React from 'react';

const ExpenseSummary = () => {
    return (
        <div className="expense-summary flex right-0 left-0 -mx-6 mb-4  border-b  border-colbert-200 bg-white px-6 pb-4">
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="relative flex items-center">
                            Total GST
                            <button className="btn btn-tertiary btn-sm absolute left-16">
                                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.24902 12.9394V15.7519H5.06152L13.3565 7.45687L10.544 4.64438L2.24902 12.9394ZM15.5315 5.28188C15.824 4.98938 15.824 4.51688 15.5315 4.22438L13.7765 2.46937C13.484 2.17688 13.0115 2.17688 12.719 2.46937L11.3465 3.84187L14.159 6.65437L15.5315 5.28188Z" fill="#8836E7" />
                                </svg>
                                <span>Edit GST</span>
                            </button>
                        </td>
                        <td>200.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Receipt Total</td>
                        <td>200.00</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ExpenseSummary;

