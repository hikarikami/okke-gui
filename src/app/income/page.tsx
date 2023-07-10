import Filters from "../_components/filters"


/** Expenses Page */
export default function page() {
  return (

    <>
    {/* Page Header - Refactor into component at some point */}
    <div className="mt-12 flex w-full items-center border-b border-colbert-300 py-4">
        <h1 className="text-2xl">Income</h1>
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

      {/* Expense Table */}
      <div className="card w-full mt-3">
        <div className="data-table expenses">
          <div className="data-table-header">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">Date</div>
            <div className="cell">Supplier</div>
            <div className="cell">Description</div>
            <div className="cell">Account</div>
            <div className="cell">receipt total</div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="data-table-row">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">18/05/2022</div>
            <div className="cell">Terry  s Tiles</div>
            <div className="cell">This is an example of a description</div>
            <div className="cell">
              <div className="chip-container"><div className="chip">Marketing & Advertising</div></div>
            </div>
            <div className="cell">200.00</div>
            <div className="cell status">
              <svg className="w-4.5" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2060_157261)">
                  <path d="M11.1666 4.3099V11.9766C11.1666 13.4499 9.97331 14.6432 8.49998 14.6432C7.02665 14.6432 5.83331 13.4499 5.83331 11.9766V3.64323C5.83331 2.72323 6.57998 1.97656 7.49998 1.97656C8.41998 1.97656 9.16665 2.72323 9.16665 3.64323V10.6432C9.16665 11.0099 8.86665 11.3099 8.49998 11.3099C8.13331 11.3099 7.83331 11.0099 7.83331 10.6432V4.3099H6.83331V10.6432C6.83331 11.5632 7.57998 12.3099 8.49998 12.3099C9.41998 12.3099 10.1666 11.5632 10.1666 10.6432V3.64323C10.1666 2.1699 8.97331 0.976562 7.49998 0.976562C6.02665 0.976562 4.83331 2.1699 4.83331 3.64323V11.9766C4.83331 14.0032 6.47331 15.6432 8.49998 15.6432C10.5266 15.6432 12.1666 14.0032 12.1666 11.9766V4.3099H11.1666Z" fill="#121224" />
                </g>
                <defs>
                  <clipPath id="clip0_2060_157261">
                    <rect width="16" height="16" fill="white" transform="translate(0.5 0.3125)" />
                  </clipPath>
                </defs>
              </svg><svg className="w-4.5" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2060_157261)">
                  <path d="M11.1666 4.3099V11.9766C11.1666 13.4499 9.97331 14.6432 8.49998 14.6432C7.02665 14.6432 5.83331 13.4499 5.83331 11.9766V3.64323C5.83331 2.72323 6.57998 1.97656 7.49998 1.97656C8.41998 1.97656 9.16665 2.72323 9.16665 3.64323V10.6432C9.16665 11.0099 8.86665 11.3099 8.49998 11.3099C8.13331 11.3099 7.83331 11.0099 7.83331 10.6432V4.3099H6.83331V10.6432C6.83331 11.5632 7.57998 12.3099 8.49998 12.3099C9.41998 12.3099 10.1666 11.5632 10.1666 10.6432V3.64323C10.1666 2.1699 8.97331 0.976562 7.49998 0.976562C6.02665 0.976562 4.83331 2.1699 4.83331 3.64323V11.9766C4.83331 14.0032 6.47331 15.6432 8.49998 15.6432C10.5266 15.6432 12.1666 14.0032 12.1666 11.9766V4.3099H11.1666Z" fill="#121224" />
                </g>
                <defs>
                  <clipPath id="clip0_2060_157261">
                    <rect width="16" height="16" fill="white" transform="translate(0.5 0.3125)" />
                  </clipPath>
                </defs>
              </svg>
              <svg className="w-4.5" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2060_157261)">
                  <path d="M11.1666 4.3099V11.9766C11.1666 13.4499 9.97331 14.6432 8.49998 14.6432C7.02665 14.6432 5.83331 13.4499 5.83331 11.9766V3.64323C5.83331 2.72323 6.57998 1.97656 7.49998 1.97656C8.41998 1.97656 9.16665 2.72323 9.16665 3.64323V10.6432C9.16665 11.0099 8.86665 11.3099 8.49998 11.3099C8.13331 11.3099 7.83331 11.0099 7.83331 10.6432V4.3099H6.83331V10.6432C6.83331 11.5632 7.57998 12.3099 8.49998 12.3099C9.41998 12.3099 10.1666 11.5632 10.1666 10.6432V3.64323C10.1666 2.1699 8.97331 0.976562 7.49998 0.976562C6.02665 0.976562 4.83331 2.1699 4.83331 3.64323V11.9766C4.83331 14.0032 6.47331 15.6432 8.49998 15.6432C10.5266 15.6432 12.1666 14.0032 12.1666 11.9766V4.3099H11.1666Z" fill="#121224" />
                </g>
                <defs>
                  <clipPath id="clip0_2060_157261">
                    <rect width="16" height="16" fill="white" transform="translate(0.5 0.3125)" />
                  </clipPath>
                </defs>
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
          <div className="data-table-row">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">18/05/2022</div>
            <div className="cell">Terry  s Tiles</div>
            <div className="cell">This is an example of much longer description that should truncate</div>
            <div className="cell">
              <div className="chip-container">
                <div className="chip">Marketing & Advertising</div>
                <div className="chip">+1</div>
              </div>
            </div>
            <div className="cell">200.00</div>
            <div className="cell status">
              <svg className="w-4.5" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2060_157261)">
                  <path d="M11.1666 4.3099V11.9766C11.1666 13.4499 9.97331 14.6432 8.49998 14.6432C7.02665 14.6432 5.83331 13.4499 5.83331 11.9766V3.64323C5.83331 2.72323 6.57998 1.97656 7.49998 1.97656C8.41998 1.97656 9.16665 2.72323 9.16665 3.64323V10.6432C9.16665 11.0099 8.86665 11.3099 8.49998 11.3099C8.13331 11.3099 7.83331 11.0099 7.83331 10.6432V4.3099H6.83331V10.6432C6.83331 11.5632 7.57998 12.3099 8.49998 12.3099C9.41998 12.3099 10.1666 11.5632 10.1666 10.6432V3.64323C10.1666 2.1699 8.97331 0.976562 7.49998 0.976562C6.02665 0.976562 4.83331 2.1699 4.83331 3.64323V11.9766C4.83331 14.0032 6.47331 15.6432 8.49998 15.6432C10.5266 15.6432 12.1666 14.0032 12.1666 11.9766V4.3099H11.1666Z" fill="#121224" />
                </g>
                <defs>
                  <clipPath id="clip0_2060_157261">
                    <rect width="16" height="16" fill="white" transform="translate(0.5 0.3125)" />
                  </clipPath>
                </defs>
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
