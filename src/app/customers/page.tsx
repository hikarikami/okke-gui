import Filters from "../_components/filters"


export default function page() {
  return (

    <>
      {/* Page Header - Refactor into component at some point */}
      <div className="mt-12 flex w-full items-center border-b border-colbert-300 py-4">
        <h1 className="text-2xl">Customers</h1>
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

      {/* Customer Table */}
      <div className="card w-full mt-3">
        <div className="data-table customers">
          <div className="data-table-header">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">Customer</div>
            <div className="cell">Customer ID</div>
            <div className="cell">Phone number</div>
            <div className="cell">Total Outstanding</div>
            <div className="cell"></div>
          </div>

          {/**************************************
            * Row - Person or Individual
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" /></div>
            <div className="cell">
              {/* Customer Name + Email */}
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-row gap-x-1">
                  <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.81348C9.825 4.81348 10.5 5.48848 10.5 6.31348C10.5 7.13848 9.825 7.81348 9 7.81348C8.175 7.81348 7.5 7.13848 7.5 6.31348C7.5 5.48848 8.175 4.81348 9 4.81348ZM9 12.3135C11.025 12.3135 13.35 13.281 13.5 13.8135H4.5C4.6725 13.2735 6.9825 12.3135 9 12.3135ZM9 3.31348C7.3425 3.31348 6 4.65598 6 6.31348C6 7.97098 7.3425 9.31348 9 9.31348C10.6575 9.31348 12 7.97098 12 6.31348C12 4.65598 10.6575 3.31348 9 3.31348ZM9 10.8135C6.9975 10.8135 3 11.8185 3 13.8135V15.3135H15V13.8135C15 11.8185 11.0025 10.8135 9 10.8135Z" fill="#121224" />
                  </svg>
                  <div className="font-semibold">John McGregor</div>
                </div>
                <a className="text-xs text-colbert-500">john@johnsplumbing.com</a>
              </div>
            </div>
            {/* Customer Code */}
            <div className="cell">CUST001</div>
            {/* Customer Phone Number */}
            <div className="cell">0404822085</div>
            <div className="cell">
              $200.00
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
            * Row - Business or Company
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" /></div>
            {/* Business Name + Email */}
            <div className="cell">
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-row gap-x-1">
                  <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5.56348V2.56348H1.5V16.0635H16.5V5.56348H9ZM4.5 14.5635H3V13.0635H4.5V14.5635ZM4.5 11.5635H3V10.0635H4.5V11.5635ZM4.5 8.56348H3V7.06348H4.5V8.56348ZM4.5 5.56348H3V4.06348H4.5V5.56348ZM7.5 14.5635H6V13.0635H7.5V14.5635ZM7.5 11.5635H6V10.0635H7.5V11.5635ZM7.5 8.56348H6V7.06348H7.5V8.56348ZM7.5 5.56348H6V4.06348H7.5V5.56348ZM15 14.5635H9V13.0635H10.5V11.5635H9V10.0635H10.5V8.56348H9V7.06348H15V14.5635ZM13.5 8.56348H12V10.0635H13.5V8.56348ZM13.5 11.5635H12V13.0635H13.5V11.5635Z" fill="#121224" />
                  </svg>

                  <div className="font-semibold">Websites 'R Us</div>
                </div>
                <div className="text-xs text-colbert-500 hover:text-lavender-600 hover:underline">sales@websites-r-us.com.au</div>
              </div>
            </div>
            {/* Customer Code */}
            <div className="cell">BUSI001</div>
            {/* Customer Phone Number */}
            <div className="cell">0404822085</div>
            <div className="cell">
              $200.00
            </div>
            <div className="cell">
              {/* Action buttons */}
              <div className="action-buttons">
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
