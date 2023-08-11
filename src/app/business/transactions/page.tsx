/*
 * 
 * Bank Transactions
 * 
 */
"use client"; // This is a client component 👈🏽

import Filters from "../../_components/filters"
import PageHeader from "../../_components/pageHeader"
import TransactionsTable from "../../_components/tables/transactionsTable"



/**
 * 
 *    container
 *      card
 *        data-table with filter
 *          filter-component
            data-table-component
              data-table-header
              data-table-body
              data-table-footer
 */

export default function page() {
  return (
    <>
    <PageHeader title="Transactions" />
    <div className="w-full">
      <Filters />
      <div className="-mx-4 md:mx-0 card md:w-full mt-3 rounded-none md:rounded-md">
        <TransactionsTable />
      </div>

      
      {/* Transaction Table */}
      <div className="card w-full mt-3 mb-24">
        <div className="data-table transactions">
          <div className="data-table-header">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">Transaction date</div>
            <div className="cell">Credit</div>
            <div className="cell">Debit</div>
            <div className="cell">Allocation</div>
            <div className="cell"></div>
          </div>

          {/**************************************
            * Row - Automatched with entry
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" /></div>
            <div className="cell">
              {/* Date + Description */}
              <div className="flex flex-col gap-y-1">
                <div className="text-sm">18/05/2023</div>
                <div className="text-xs text-colbert-500">AGL ltd pty AUS, SA, #00022141 Xx1299</div>
              </div>
            </div>
            {/* Credit */}
            <div className="cell">
            </div>
            {/* Debit */}
            <div className="cell">
              200.00
            </div>
            {/* Allocation Type - Matched */}
            <div className="cell">
              <div className="automatched flex flex-col overflow-hidden">
                <div className="text-xs font-medium flex flex-row gap-x-1">
                  <svg width="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3335 4.98047H8.66683V6.3138H11.3335C12.4335 6.3138 13.3335 7.2138 13.3335 8.3138C13.3335 9.4138 12.4335 10.3138 11.3335 10.3138H8.66683V11.6471H11.3335C13.1735 11.6471 14.6668 10.1538 14.6668 8.3138C14.6668 6.4738 13.1735 4.98047 11.3335 4.98047ZM7.3335 10.3138H4.66683C3.56683 10.3138 2.66683 9.4138 2.66683 8.3138C2.66683 7.2138 3.56683 6.3138 4.66683 6.3138H7.3335V4.98047H4.66683C2.82683 4.98047 1.3335 6.4738 1.3335 8.3138C1.3335 10.1538 2.82683 11.6471 4.66683 11.6471H7.3335V10.3138ZM5.3335 7.64714H10.6668V8.98047H5.3335V7.64714Z" fill="#121224" />
                  </svg>
                  Found Existing Expense</div>
                <div className="text-sm block truncate nowrap">
                  <div className="flex flex-row gap-x-2"><span>AGL Ltd.</span><div className="text-colbert-300">|</div><div>17/05/2023</div></div>
                </div>
                <div className="chip-container flex-wrap mt-1">
                  <div className="chip amber subtle">Utilities</div>
                  <div className="chip">+1</div>
                </div>
              </div>
            </div>
            {/* Action Buttons + Confirm Button */}
            <div className="cell gap-x-2">
              <button className="btn btn-sm btn-primary ">Confirm</button>
              <div className="action-buttons">
                <button className="block sm:hidden">Edit Entry</button>
                <button>
                  <svg className="w-4.5" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49996 7.14323C10.3708 7.14323 11.0833 6.43073 11.0833 5.5599C11.0833 4.68906 10.3708 3.97656 9.49996 3.97656C8.62913 3.97656 7.91663 4.68906 7.91663 5.5599C7.91663 6.43073 8.62913 7.14323 9.49996 7.14323ZM9.49996 8.72656C8.62913 8.72656 7.91663 9.43906 7.91663 10.3099C7.91663 11.1807 8.62913 11.8932 9.49996 11.8932C10.3708 11.8932 11.0833 11.1807 11.0833 10.3099C11.0833 9.43906 10.3708 8.72656 9.49996 8.72656ZM9.49996 13.4766C8.62913 13.4766 7.91663 14.1891 7.91663 15.0599C7.91663 15.9307 8.62913 16.6432 9.49996 16.6432C10.3708 16.6432 11.0833 15.9307 11.0833 15.0599C11.0833 14.1891 10.3708 13.4766 9.49996 13.4766Z" fill="#121224" />
                  </svg>
                </button>
              </div>
            </div>
          </div>


          {/**************************************
            * Row - New created by smart rule
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" /></div>
            {/* Date + Description */}
            <div className="cell">
              <div className="flex flex-col gap-y-1 ">
                <div className="text-sm">18/05/2023</div>
                <div className="text-xs text-colbert-500">Transfer to TR Nguyen PayID Phone004 from Commbank app - Ryan Food.</div>
              </div>
            </div>
            {/* Credit */}
            <div className="cell">
              {/* Debit */}
            </div>
            <div className="cell">
              200.00
            </div>
            {/* Allocation Type - Created by rule */}
            <div className="cell">
              <div className="flex flex-col overflow-hidden gap-y-0.5">
                <div className="text-xs font-medium flex flex-row gap-x-1">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3332 6.64714V5.3138C13.3332 4.58047 12.7332 3.98047 11.9998 3.98047H9.99984C9.99984 2.8738 9.1065 1.98047 7.99984 1.98047C6.89317 1.98047 5.99984 2.8738 5.99984 3.98047H3.99984C3.2665 3.98047 2.6665 4.58047 2.6665 5.3138V6.64714C1.55984 6.64714 0.666504 7.54047 0.666504 8.64713C0.666504 9.7538 1.55984 10.6471 2.6665 10.6471V13.3138C2.6665 14.0471 3.2665 14.6471 3.99984 14.6471H11.9998C12.7332 14.6471 13.3332 14.0471 13.3332 13.3138V10.6471C14.4398 10.6471 15.3332 9.7538 15.3332 8.64713C15.3332 7.54047 14.4398 6.64714 13.3332 6.64714ZM11.9998 13.3138H3.99984V5.3138H11.9998V13.3138ZM5.99984 9.3138C5.4465 9.3138 4.99984 8.86714 4.99984 8.3138C4.99984 7.76047 5.4465 7.3138 5.99984 7.3138C6.55317 7.3138 6.99984 7.76047 6.99984 8.3138C6.99984 8.86714 6.55317 9.3138 5.99984 9.3138ZM10.9998 8.3138C10.9998 8.86714 10.5532 9.3138 9.99984 9.3138C9.4465 9.3138 8.99984 8.86714 8.99984 8.3138C8.99984 7.76047 9.4465 7.3138 9.99984 7.3138C10.5532 7.3138 10.9998 7.76047 10.9998 8.3138ZM5.33317 10.6471H10.6665V11.9805H5.33317V10.6471Z" fill="#121224" />
                  </svg>
                  <span>Expense Created</span>
                </div>
                <div className="text-sm block truncate nowrap">
                  <div className="flex flex-row gap-x-2">
                    <span>Woolworths AUS</span><div className="text-colbert-300">|</div><div><span>Rule:</span><span className="inline-block text-lavender-700 hover:underline hover:text-800 ml-1">Electricity Bills</span></div>
                  </div>
                </div>
                <div className="chip-container chips-sm flex-wrap mt-1">
                  <div className="chip emerald subtle">Food & Beverages</div>
                  {/* <div className="chip colbert subtle">Tax Receipt</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div> */}
                </div>
              </div>
            </div>
            {/* Action Buttons + Confirm Button */}
            <div className="cell gap-x-2"><button className="btn btn-sm btn-primary ">Confirm</button>
              <div className="action-buttons">
                <button className="block sm:hidden">Edit Entry</button>
                <button>
                  <svg className="w-4.5" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49996 7.14323C10.3708 7.14323 11.0833 6.43073 11.0833 5.5599C11.0833 4.68906 10.3708 3.97656 9.49996 3.97656C8.62913 3.97656 7.91663 4.68906 7.91663 5.5599C7.91663 6.43073 8.62913 7.14323 9.49996 7.14323ZM9.49996 8.72656C8.62913 8.72656 7.91663 9.43906 7.91663 10.3099C7.91663 11.1807 8.62913 11.8932 9.49996 11.8932C10.3708 11.8932 11.0833 11.1807 11.0833 10.3099C11.0833 9.43906 10.3708 8.72656 9.49996 8.72656ZM9.49996 13.4766C8.62913 13.4766 7.91663 14.1891 7.91663 15.0599C7.91663 15.9307 8.62913 16.6432 9.49996 16.6432C10.3708 16.6432 11.0833 15.9307 11.0833 15.0599C11.0833 14.1891 10.3708 13.4766 9.49996 13.4766Z" fill="#121224" />
                  </svg>
                </button>
              </div>
            </div>
          </div>


          {/**************************************
            * Row - No Match / New Entry
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" />
            </div>
            {/* Date + Description */}
            <div className="cell">
              <div className="flex flex-col gap-y-1">
                <div className="text-sm">18/05/2023</div>
                <div className="text-xs text-colbert-500">Paypal AU Transfer ID 2201 Xx1299</div>
              </div>
            </div>
            {/* Credit */}
            <div className="cell">
              200.00
            </div>
            {/* Debit */}
            <div className="cell">
            </div>
            {/* Allocation Type - No match / Create new */}
            <div className="cell">
              <button className="btn btn-sm btn-secondary colour">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 10.0645H9.75V14.5645H8.25V10.0645H3.75V8.56445H8.25V4.06445H9.75V8.56445H14.25V10.0645Z" fill="#8836E7" />
                </svg>
                Create Entry
                </button>
            </div>
             {/* Action Buttons + Confirm Button */}
            <div className="cell">
              <div className="action-buttons">
                <button className="block sm:hidden">Edit Entry</button>
                <button>
                  <svg className="w-4.5" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49996 7.14323C10.3708 7.14323 11.0833 6.43073 11.0833 5.5599C11.0833 4.68906 10.3708 3.97656 9.49996 3.97656C8.62913 3.97656 7.91663 4.68906 7.91663 5.5599C7.91663 6.43073 8.62913 7.14323 9.49996 7.14323ZM9.49996 8.72656C8.62913 8.72656 7.91663 9.43906 7.91663 10.3099C7.91663 11.1807 8.62913 11.8932 9.49996 11.8932C10.3708 11.8932 11.0833 11.1807 11.0833 10.3099C11.0833 9.43906 10.3708 8.72656 9.49996 8.72656ZM9.49996 13.4766C8.62913 13.4766 7.91663 14.1891 7.91663 15.0599C7.91663 15.9307 8.62913 16.6432 9.49996 16.6432C10.3708 16.6432 11.0833 15.9307 11.0833 15.0599C11.0833 14.1891 10.3708 13.4766 9.49996 13.4766Z" fill="#121224" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    
  )
}
