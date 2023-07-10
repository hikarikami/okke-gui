import Filters from "../_components/filters"

// Bank Accounts

export default function page() {
  return (

    <>
      {/* Page Header - Refactor into component at some point */}
      <div className="mt-12 flex w-full items-center border-b border-colbert-300 py-4">
        <h1 className="text-2xl">Bank Accounts</h1>
        <div className="ml-auto hidden sm:flex">
          <div className="btn-group">
            <button className="btn btn-secondary">Options</button>
            <button className="btn btn-primary ">New Expense</button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Filters />
      </div>

      {/* Start Table */}
      <div className="card w-full mt-3 mb-24">
        <div className="data-table bank-accounts">
          <div className="data-table-header">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">Account</div>

            <div className="cell">Linked to feed</div>
            <div className="cell">Current balance</div>
            <div className="cell">Status</div>
            <div className="cell"></div>
          </div>


          {/**************************************
            * Row - Account with connected feed
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" />
            </div>
             {/* Bank name + Description */}
            <div className="cell">
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-row gap-x-1">
                  <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 8.56348H3.75V13.8135H5.25V8.56348ZM9.75 8.56348H8.25V13.8135H9.75V8.56348ZM16.125 15.3135H1.875V16.8135H16.125V15.3135ZM14.25 8.56348H12.75V13.8135H14.25V8.56348ZM9 3.50848L12.9075 5.56348H5.0925L9 3.50848ZM9 1.81348L1.875 5.56348V7.06348H16.125V5.56348L9 1.81348Z" fill="#121224" />
                  </svg>
                  <div className="font-semibold ">Commonwealth Bank</div>
                </div>
                <div className="text-xs text-colbert-500">This is an example of an item description. We can show up to two full lines before the text starts to truncate.</div>
              </div>
            </div>
            {/* Linked to feed details */}
            <div className="cell">
              <div className="flex flex-col overflow-hidden gap-y-0.5">
                <div className="text-sm flex flex-row gap-x-0.5">
                  <svg className="w-4.5 self-center" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.26681 13.5003C5.06946 13.5003 5.72014 12.8496 5.72014 12.047C5.72014 11.2443 5.06946 10.5936 4.26681 10.5936C3.46416 10.5936 2.81348 11.2443 2.81348 12.047C2.81348 12.8496 3.46416 13.5003 4.26681 13.5003Z" fill="#10B981" />
                    <path d="M2.81348 3.12695V5.01362C7.50014 5.01362 11.3001 8.81362 11.3001 13.5003H13.1868C13.1868 7.77362 8.54014 3.12695 2.81348 3.12695ZM2.81348 6.90029V8.78695C5.41348 8.78695 7.52681 10.9003 7.52681 13.5003H9.41348C9.41348 9.85362 6.46014 6.90029 2.81348 6.90029Z" fill="#10B981" />
                  </svg>
                  <span>Joint Savings Account 01</span>
                </div>
                <div className="text-xs text-colbert-500 block truncate nowrap">
                  xxxx-5171
                </div>
              </div>
            </div>
            {/* Current Balance */}
            <div className="cell">
              200.00
            </div>
            {/* Status */}
            <div className="cell">
              <div className="chip-container chips-sm flex-wrap mt-1">
                <div className="chip indigo subtle">Active</div>
              </div>
            </div>
              {/* Action buttons */}
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

           {/**************************************
            * Row - Account without feed
            *************************************/}
          <div className="data-table-row">
            <div className="cell">
                {/* Checkbox */}
              <input type="checkbox" />
            </div>
            {/* Bank name + Description */}
            <div className="cell">
              <div className="flex flex-col gap-y-1 ">
                <div className="cell">
                  <div className="flex flex-col gap-y-1 ">
                    <div className="flex flex-row gap-x-1">
                      <svg className="w-4.5 self-center" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 8.56348H3.75V13.8135H5.25V8.56348ZM9.75 8.56348H8.25V13.8135H9.75V8.56348ZM16.125 15.3135H1.875V16.8135H16.125V15.3135ZM14.25 8.56348H12.75V13.8135H14.25V8.56348ZM9 3.50848L12.9075 5.56348H5.0925L9 3.50848ZM9 1.81348L1.875 5.56348V7.06348H16.125V5.56348L9 1.81348Z" fill="#121224" />
                      </svg>
                      <div className="font-semibold ">Commonwealth Bank</div>
                    </div>
                    <div className="text-xs text-colbert-500">Main bank account used for business.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Linked to feed details */}
            <div className="cell">
              <div className="automatched flex flex-col overflow-hidden gap-y-0.5">
                <div className="text-sm flex flex-row gap-x-1">
                  <span className="italic text-colbert-500 text-xs">No feed</span>
                </div>
              </div>
            </div>
             {/* Current Balance */}
            <div className="cell">
              200.00
            </div>
             {/* Status */}
            <div className="cell">
              <div className="chip-container chips-sm flex-wrap mt-1">
                <div className="chip indigo subtle">Active</div>
              </div>
            </div>
            {/* Action buttons */}
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
