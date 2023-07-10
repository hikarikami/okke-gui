import Filters from "../_components/filters"


export default function page() {
  return (

    <>
      {/* Page Header - Refactor into component at some point */}
      <div className="mt-12 flex w-full items-center border-b border-colbert-300 py-4">
        <h1 className="text-2xl">Inventory</h1>
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

      {/* Inventory Table */}
      <div className="card w-full mt-3 mb-24">
        <div className="data-table inventory">
          <div className="data-table-header">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">Item code</div>
            <div className="cell">Tax code</div>
            <div className="cell">Purchase price</div>
            <div className="cell">Sell price</div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>

          {/**************************************
            * Row - Item
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" />
            </div>
            {/* Item Code + Description */}
            <div className="cell">
              <div className="flex flex-col gap-y-0.5">
                <div className="flex flex-row gap-x-1">
                  <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1.81348H3C2.25 1.81348 1.5 2.48848 1.5 3.31348V5.57098C1.5 6.11098 1.8225 6.57598 2.25 6.83848V15.3135C2.25 16.1385 3.075 16.8135 3.75 16.8135H14.25C14.925 16.8135 15.75 16.1385 15.75 15.3135V6.83848C16.1775 6.57598 16.5 6.11098 16.5 5.57098V3.31348C16.5 2.48848 15.75 1.81348 15 1.81348ZM14.25 15.3135H3.75V7.06348H14.25V15.3135ZM15 5.56348H3V3.31348H15V5.56348Z" fill="#121224" />
                    <path d="M11.25 9.31348H6.75V10.8135H11.25V9.31348Z" fill="#121224" />
                  </svg>
                  <div className="font-semibold">HIPPO-GREY-LG</div>
                </div>
                <div className="text-xs text-colbert-500">This is an example of an item description. We can show up to two full lines before the text starts to truncate.</div>
              </div>
            </div>
            {/* Tax Code */}
            <div className="cell">
              <div className="chip-container flex-wrap">
                <div className="chip amber subtle">Export Sales</div>
              </div>
            </div>
            {/* Purchase price */}
            <div className="cell">
              200.00
            </div>
            {/* Sale price */}
            <div className="cell">
              200.00
            </div>
            {/* Icon for pricing type */}
            <div className="cell">
              <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.056 8.87293L9.43354 2.25043C9.15604 1.97293 8.77354 1.81543 8.37604 1.81543H2.99854C2.17354 1.81543 1.49854 2.49043 1.49854 3.31543V8.69293C1.49854 9.09043 1.65604 9.47293 1.94104 9.75043L8.56354 16.3729C9.14854 16.9579 10.101 16.9579 10.686 16.3729L16.0635 10.9954C16.6485 10.4104 16.6485 9.46543 16.056 8.87293ZM9.62104 15.3154L2.99854 8.69293V3.31543H8.37604L14.9985 9.93793L9.62104 15.3154Z" fill="#121224" />
                <path d="M4.87354 6.31543C5.49486 6.31543 5.99854 5.81175 5.99854 5.19043C5.99854 4.56911 5.49486 4.06543 4.87354 4.06543C4.25221 4.06543 3.74854 4.56911 3.74854 5.19043C3.74854 5.81175 4.25221 6.31543 4.87354 6.31543Z" fill="#121224" />
              </svg>
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
            * Row - Service
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" />
            </div>
            {/* Item Code + Description */}
            <div className="cell">
              <div className="flex flex-col gap-y-0.5">
                <div className="flex flex-row gap-x-1">
                  <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16653 15.2049C9.03153 15.3399 8.79153 15.3624 8.63403 15.2049C8.49903 15.0699 8.47653 14.8299 8.63403 14.6724L11.1765 12.1299L10.119 11.0724L7.57653 13.6149C7.43403 13.7649 7.19403 13.7574 7.04403 13.6149C6.88653 13.4574 6.90903 13.2174 7.04403 13.0824L9.58653 10.5399L8.52903 9.48238L5.98653 12.0249C5.85153 12.1599 5.61153 12.1824 5.45403 12.0249C5.31153 11.8824 5.31153 11.6424 5.45403 11.4924L7.99653 8.94988L6.93153 7.89238L4.38903 10.4349C4.25403 10.5699 4.01403 10.5924 3.85653 10.4349C3.71403 10.2849 3.71403 10.0524 3.85653 9.90238L7.14153 6.61738L8.54403 8.01238C9.25653 8.72488 10.4865 8.71738 11.199 8.01238C11.934 7.27738 11.934 6.09238 11.199 5.35738L9.80403 3.96238L10.014 3.75238C10.599 3.16738 11.5515 3.16738 12.1365 3.75238L15.3165 6.93238C15.9015 7.51738 15.9015 8.46988 15.3165 9.05488L9.16653 15.2049ZM16.374 10.1199C17.544 8.94988 17.544 7.05238 16.374 5.87488L13.194 2.69488C12.024 1.52488 10.1265 1.52488 8.94903 2.69488L8.73903 2.90488L8.52903 2.69488C7.35903 1.52488 5.46153 1.52488 4.28403 2.69488L1.62903 5.34988C0.564034 6.41488 0.466534 8.07238 1.32903 9.24238L2.41653 8.15488C2.12403 7.59238 2.22153 6.87988 2.69403 6.40738L5.34903 3.75238C5.93403 3.16738 6.88653 3.16738 7.47153 3.75238L10.1415 6.42238C10.2765 6.55738 10.299 6.79738 10.1415 6.95488C9.98403 7.11238 9.74403 7.08988 9.60903 6.95488L7.14153 4.49488L2.79153 8.83738C2.05653 9.56488 2.05653 10.7574 2.79153 11.4924C3.08403 11.7849 3.45903 11.9649 3.85653 12.0174C3.90903 12.4074 4.08153 12.7824 4.38153 13.0824C4.68153 13.3824 5.05653 13.5549 5.44653 13.6074C5.49903 13.9974 5.67153 14.3724 5.97153 14.6724C6.27153 14.9724 6.64653 15.1449 7.03653 15.1974C7.08903 15.6024 7.26903 15.9699 7.56153 16.2624C7.91403 16.6149 8.38653 16.8099 8.88903 16.8099C9.39153 16.8099 9.86403 16.6149 10.2165 16.2624L16.374 10.1199Z" fill="#121224" />
                  </svg>
                  <div className="font-semibold">SHORT Consultation Fee</div>
                </div>
                <div className="text-xs text-colbert-500">This is an example of an item description. We can show up to two full lines before the text starts to truncate.</div>
              </div>
            </div>
            {/* Tax Code */}
            <div className="cell">
              <div className="chip-container flex-wrap">
                <div className="chip amber subtle">Export Sales</div>
              </div>
            </div>
            {/* Purchase price */}
            <div className="cell">
              200.00
            </div>
            {/* Sale price */}
            <div className="cell">
              200.00
            </div>
            {/* Icon for pricing type */}
            <div className="cell">
              <svg className="w-4.5" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.056 8.87293L9.43354 2.25043C9.15604 1.97293 8.77354 1.81543 8.37604 1.81543H2.99854C2.17354 1.81543 1.49854 2.49043 1.49854 3.31543V8.69293C1.49854 9.09043 1.65604 9.47293 1.94104 9.75043L8.56354 16.3729C9.14854 16.9579 10.101 16.9579 10.686 16.3729L16.0635 10.9954C16.6485 10.4104 16.6485 9.46543 16.056 8.87293ZM9.62104 15.3154L2.99854 8.69293V3.31543H8.37604L14.9985 9.93793L9.62104 15.3154Z" fill="#121224" />
                <path d="M4.87354 6.31543C5.49486 6.31543 5.99854 5.81175 5.99854 5.19043C5.99854 4.56911 5.49486 4.06543 4.87354 4.06543C4.25221 4.06543 3.74854 4.56911 3.74854 5.19043C3.74854 5.81175 4.25221 6.31543 4.87354 6.31543Z" fill="#121224" />
              </svg>
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
