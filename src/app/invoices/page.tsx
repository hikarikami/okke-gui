/*
 * 
 * Invoice List
 * 
 */

import Filters from "../_components/filters"
import PageHeader from "../_components/pageHeader"

export default function page() {
  return (

    <>
      <PageHeader title="Invoices" />
      <div className="w-full">
        <Filters />
      </div>

      {/* Invoice Table */}
      <div className="card w-full mt-3 mb-24">
        <div className="data-table invoices">
          <div className="data-table-header">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">Invoice details</div>
            <div className="cell">Issue date</div>
            <div className="cell">Due date</div>
            <div className="cell">Status</div>
            <div className="cell">Balance due</div>
            <div className="cell"></div>
          </div>

          <div className="data-table-row">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-row gap-x-1">
                  <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 12.3135H10.5V13.8135H5.25V12.3135ZM5.25 9.31348H12.75V10.8135H5.25V9.31348ZM5.25 6.31348H12.75V7.81348H5.25V6.31348ZM14.25 3.31348H11.115C10.8 2.44348 9.975 1.81348 9 1.81348C8.025 1.81348 7.2 2.44348 6.885 3.31348H3.75C3.645 3.31348 3.5475 3.32098 3.45 3.34348C3.1575 3.40348 2.895 3.55348 2.6925 3.75598C2.5575 3.89098 2.445 4.05598 2.37 4.23598C2.295 4.40848 2.25 4.60348 2.25 4.81348V15.3135C2.25 15.516 2.295 15.7185 2.37 15.8985C2.445 16.0785 2.5575 16.236 2.6925 16.3785C2.895 16.581 3.1575 16.731 3.45 16.791C3.5475 16.806 3.645 16.8135 3.75 16.8135H14.25C15.075 16.8135 15.75 16.1385 15.75 15.3135V4.81348C15.75 3.98848 15.075 3.31348 14.25 3.31348ZM9 3.12598C9.3075 3.12598 9.5625 3.38098 9.5625 3.68848C9.5625 3.99598 9.3075 4.25098 9 4.25098C8.6925 4.25098 8.4375 3.99598 8.4375 3.68848C8.4375 3.38098 8.6925 3.12598 9 3.12598ZM14.25 15.3135H3.75V4.81348H14.25V15.3135Z" fill="#121224" />
                  </svg>
                  <div className="font-semibold">#000232</div>
                </div>
                <div className="text-xs text-colbert-500 hover:text-lavender-600 hover:underline">Laura Appleseed</div>
              </div>
            </div>
            <div className="cell">23/05/2023</div>
            <div className="cell">23/05/2023</div>
            <div className="cell">
              <div className="chip-container flex-wrap">
                <div className="chip amber subtle">Awaiting payment</div>
              </div>
            </div>
            <div className="cell">
              <div className="flex flex-col w-full gap-y-1 text-right">
                <div className="font-semibold">200.00</div>
                <div className="text-xs text-colbert-500">Total: 1,000.00</div>
              </div>
            </div>
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

          <div className="data-table-row">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-row gap-x-1">
                  <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 12.3135H10.5V13.8135H5.25V12.3135ZM5.25 9.31348H12.75V10.8135H5.25V9.31348ZM5.25 6.31348H12.75V7.81348H5.25V6.31348ZM14.25 3.31348H11.115C10.8 2.44348 9.975 1.81348 9 1.81348C8.025 1.81348 7.2 2.44348 6.885 3.31348H3.75C3.645 3.31348 3.5475 3.32098 3.45 3.34348C3.1575 3.40348 2.895 3.55348 2.6925 3.75598C2.5575 3.89098 2.445 4.05598 2.37 4.23598C2.295 4.40848 2.25 4.60348 2.25 4.81348V15.3135C2.25 15.516 2.295 15.7185 2.37 15.8985C2.445 16.0785 2.5575 16.236 2.6925 16.3785C2.895 16.581 3.1575 16.731 3.45 16.791C3.5475 16.806 3.645 16.8135 3.75 16.8135H14.25C15.075 16.8135 15.75 16.1385 15.75 15.3135V4.81348C15.75 3.98848 15.075 3.31348 14.25 3.31348ZM9 3.12598C9.3075 3.12598 9.5625 3.38098 9.5625 3.68848C9.5625 3.99598 9.3075 4.25098 9 4.25098C8.6925 4.25098 8.4375 3.99598 8.4375 3.68848C8.4375 3.38098 8.6925 3.12598 9 3.12598ZM14.25 15.3135H3.75V4.81348H14.25V15.3135Z" fill="#121224" />
                  </svg>
                  <div className="font-semibold">#000233</div>
                </div>
                <div className="text-xs text-colbert-500 hover:text-lavender-600 hover:underline">Laura Appleseed</div>
              </div>
            </div>
            <div className="cell">23/05/2023</div>
            <div className="cell">23/05/2023</div>
            <div className="cell">
              <div className="chip-container flex-wrap">
                <div className="chip amber subtle">Awaiting payment</div>
              </div>
            </div>
            <div className="cell">
              <div className="flex flex-col w-full gap-y-1 text-right">
                <div className="font-semibold">200.00</div>
                <div className="text-xs text-colbert-500">Total: 1,000.00</div>
              </div>
            </div>
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
    </>

  )
}
