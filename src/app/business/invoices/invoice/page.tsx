/*
 * 
 * Test Page / Homepage
 * 
 */

import Link from 'next/link'
import PageHeader from '../../../_components/pageHeader'
import Button from '../../../_components/button'
import Image from 'next/image'


export default function Page() {
  return (
    <>
      <PageHeader title="Invoice" />

      {/* Card  */}
      <div className="p-6 mt-6 bg-white w-full border border-colbert-300 shadow-sm rounded">

        {/* Invoice + Customer Details */}
        <div className="flex flex-row justify-between border-b border-colbert-300 -mx-6 p-6">
          <div id="customer-details">
            <div className="input-group w-110">
              <label>Bill to:</label>
              <input type="text" className="w-full typeahead" placeholder="Add a customer..." />
              <svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
              </svg>
            </div>
          </div>z``

          <div id="invoice-details" className="flex flex-col w-64 gap-y-5">
            <div className="input-group">
              <label>Input number</label>
              <input type="text" className="w-full typeahead" placeholder="" />
            </div>
            <div className="input-group ">
              <label>PO number</label>
              <input type="text" className="w-full typeahead" placeholder="" />

            </div>
            <div className="input-group ">
              <label>Invoice date</label>
              <input type="text" className="w-full typeahead" placeholder="" />

            </div>
            <div className="input-group">
              <label >Due date</label>
              <input type="text" className="w-full typeahead" placeholder="No due date" />
              <svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
              </svg>
            </div>
          </div>

        </div>



        <div className="flex flex-col border-b border-colbert-300 -mx-6">

          <div className="flex flex-row justify-end p-6">
            <div className="input-group w-64">
              <label >Price item as</label>
              <input type="text" className="w-full typeahead" placeholder="No due date" />
              <svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
              </svg>
            </div>
          </div>

          {/* Line Items */}
          <div className="flex flex-row gap-x-4 data-table line-items">
            <div className="data-table-header">
              {/* <div className="cell"><input type="checkbox" /></div> */}
              <div className="cell">Item or service</div>
              <div className="cell !justify-end">Price</div>
              <div className="cell  !justify-end">Qty</div>
              <div className="cell">Tax code</div>
              <div className="cell !justify-end !text-right">GST</div>
              <div className="cell !justify-end !text-right">Line Total</div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>

            {/* Line Item Row */}
            <div className="data-table-row">
              {/* <div className="cell"><input type="checkbox" /></div> */}
              {/* Item Details */}
              <div className="cell flex-col gap-y-0.5 !items-start justify-items-start">
                <div className="input-group w-full">
                  <input type="text" className="w-full typeahead" placeholder="Item Code" />
                </div>
                <div className="input-group w-full">
                  <textarea rows={3} className="w-full" placeholder='Description of Item or Service...' />
                </div>
              </div>

              {/* Price */}
              <div className="cell !items-start">
                <div className="input-group w-full">
                  <input type="text" className="w-full text-right" placeholder="$0.00" />
                </div>
              </div>

              {/* Qty */}
              <div className="cell !items-start">
                <div className="input-group w-full">
                  <input type="text" className="w-full text-right" placeholder="$0.00" />
                </div>
              </div>

              {/* Tax Type */}
              <div className="cell !items-start">
                <div className="input-group  relative w-full">

                  <select className="w-full" placeholder="Select category...">
                    <option>Option 1</option></select><svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
                  </svg>
                </div>
              </div>

              {/* GST Amount */}
              <div className="cell !items-start !justify-end !text-right">
                <div className="py-4">$200.00</div>
              </div>

              {/* Line Total Amount */}
              <div className="cell !items-start !justify-end !text-right">
                <div className="py-4 font-semibold">$200.00</div>
              </div>
              {/* Action Button */}
              <div className="action-buttons absolute right-6 bottom-6">
                <button>
                  <span className="material-icons-outlined">delete</span>
                </button>
              </div>
            </div>

            {/* Line Item Row */}
            <div className="data-table-row">
              {/* <div className="cell"><input type="checkbox" /></div> */}
              {/* Item Details */}
              <div className="cell flex-col gap-y-0.5 !items-start justify-items-start">
                <div className="input-group w-full">
                  <input type="text" className="w-full typeahead" placeholder="Item Code" />
                </div>
                <div className="input-group w-full">
                  <textarea rows={3} className="w-full" placeholder='Description of Item or Service...' />
                </div>
              </div>

              {/* Price */}
              <div className="cell !items-start">
                <div className="input-group w-full">
                  <input type="text" className="w-full text-right" placeholder="$0.00" />
                </div>
              </div>

              {/* Qty */}
              <div className="cell !items-start">
                <div className="input-group w-full">
                  <input type="text" className="w-full text-right" placeholder="$0.00" />
                </div>
              </div>

              {/* Tax Type */}
              <div className="cell !items-start">
                <div className="input-group  relative w-full">

                  <select className="w-full" placeholder="Select category...">
                    <option>Option 1</option></select><svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
                  </svg>
                </div>
              </div>

              {/* GST Amount */}
              <div className="cell !items-start !justify-end !text-right">
                <div className="py-4">$200.00</div>
              </div>

              {/* Line Total Amount */}
              <div className="cell !items-start !justify-end !text-right">
                <div className="py-4 font-semibold">$200.00</div>
              </div>
              {/* Action Button */}
              <div className="action-buttons absolute right-6 bottom-6">
                <button>
                  <span className="material-icons-outlined">delete</span>
                </button>
              </div>
            </div>
            <div className="px-6 py-2 btn-group" >
              <Button iconBefore={<span className="material-icons-outlined" style={{ fontSize: "1.25rem", lineHeight: "unset", marginTop: "4px" }}>add_circle</span>} label="Add Line Item" size="md" buttonType="tertiary" />
              <Button iconBefore={<span className="material-icons-outlined" style={{ fontSize: "1.25rem", lineHeight: "unset", marginTop: "4px" }}>add_circle</span>} label="Add Discount" size="md" buttonType="tertiary" />
              <Image src={'/payment-group.svg'} width={200} height={120} alt="Payment Group"/>
            </div>
            
          </div>
        </div>
      </div>

      <div className="floating-action">
        <button>
          <svg width="42" height="42" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8337 11.3337H10.8337V16.3337H9.16699V11.3337H4.16699V9.66699H9.16699V4.66699H10.8337V9.66699H15.8337V11.3337Z" fill="white" />
          </svg>
        </button>
        <div className="floating-menu">
          <ul>
            <li>Create Expense</li>
            <li>Create Income</li>
            <li>Create Invoice</li>
          </ul>
        </div>
      </div>
    </>

  )
}
