/*
 * 
 * Document List
 * 
 */

import Filters from "../_components/filters";
import PageHeader from "../_components/pageHeader";


export default function page() {
  return (

    <>
    <PageHeader title="Documents"/>
      <div className="w-full">
        <Filters />
      </div>

      {/* Documents Table */}
      <div className="card w-full mt-3 mb-24">
        <div className="data-table documents">
          <div className="data-table-header">
            <div className="cell"><input type="checkbox" /></div>
            <div className="cell">File</div>
            <div className="cell">Upload date</div>
            <div className="cell">Tag/s</div>
            <div className="cell">Attached to</div>
            <div className="cell"></div>
          </div>

          {/**************************************
            * Row - Image file
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" />
            </div>
            {/* File details */}
            <div className="cell">
              <div className="flex flex-row w-full items-center justify-start gap-x-2">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5.38965" y="7.42285" width="21.2203" height="17.7875" rx="1.1114" fill="url(#paint0_linear_7263_110640)" />
                  <path d="M20.9858 20.4341C21.4861 20.4341 21.8916 20.0285 21.8916 19.5283V13.0865C21.8916 12.5862 21.4861 12.1807 20.9858 12.1807H11.5435C11.0432 12.1807 10.6377 12.5862 10.6377 13.0865V19.5283C10.6377 20.0285 11.0432 20.4341 11.5435 20.4341H20.9858ZM14.0764 15.4149L15.6395 17.2969L17.8277 14.477L20.7838 18.5583H11.7756L14.0764 15.4149Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_7263_110640" x1="15.9998" y1="7.42285" x2="15.9998" y2="29.9486" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#10B981" />
                      <stop offset="1" stop-color="#009FA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col gap-y-1">
                  <div className="font-medium">DCIMM000233082.jpg</div>
                  <div className="font-xs text-colbert-500">2.04MB</div>
                </div>
              </div>
            </div>
            <div className="cell">23/05/2023</div>
            <div className="cell">
              <div className="chip-container flex-wrap">
                <div className="chip colbert subtle"></div>
                {/* <div className="chip colbert subtle">Tax Receipt</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div> */}
              </div>
            </div>
            {/* Attached to */}
            <div className="cell">
              {/* Association list - refactor into seperate component later */}
              <div className="flex flex-col gap-y-2">
                {/* Associatated with Income */}
                <div className="association">
                  <span className="font-medium">Income:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Online Sales</span>
                </div>
                {/* Associatated with Expense */}
                <div className="association">
                  <span className="font-medium">Expense:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Entertainment, +1 More</span>
                </div>
              </div>
            </div>
            {/* Action buttons */}
            <div className="cell">
              <div className="action-buttons">
                <button>
                  <svg className="w-4.5" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49996 7.14323C10.3708 7.14323 11.0833 6.43073 11.0833 5.5599C11.0833 4.68906 10.3708 3.97656 9.49996 3.97656C8.62913 3.97656 7.91663 4.68906 7.91663 5.5599C7.91663 6.43073 8.62913 7.14323 9.49996 7.14323ZM9.49996 8.72656C8.62913 8.72656 7.91663 9.43906 7.91663 10.3099C7.91663 11.1807 8.62913 11.8932 9.49996 11.8932C10.3708 11.8932 11.0833 11.1807 11.0833 10.3099C11.0833 9.43906 10.3708 8.72656 9.49996 8.72656ZM9.49996 13.4766C8.62913 13.4766 7.91663 14.1891 7.91663 15.0599C7.91663 15.9307 8.62913 16.6432 9.49996 16.6432C10.3708 16.6432 11.0833 15.9307 11.0833 15.0599C11.0833 14.1891 10.3708 13.4766 9.49996 13.4766Z" fill="#121224" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/**************************************
            * Row - PDF file
            *************************************/}
          <div className="data-table-row">
            {/* Checkbox */}
            <div className="cell">
              <input type="checkbox" />
            </div>
            {/* File details */}
            <div className="cell">
              <div className="flex flex-row w-full items-center justify-start gap-x-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.05371" y="3.97656" width="19.8923" height="16.6732" rx="2" fill="url(#paint0_linear_7203_103191)" />
                  <path d="M6.53564 14.2543V10.1006H8.17442C8.48946 10.1006 8.75786 10.1608 8.97961 10.2811C9.20136 10.4001 9.37037 10.5657 9.48665 10.778C9.60429 10.9889 9.66311 11.2323 9.66311 11.5081C9.66311 11.784 9.60361 12.0274 9.48463 12.2383C9.36564 12.4492 9.19324 12.6135 8.96744 12.7311C8.74299 12.8488 8.47121 12.9076 8.15211 12.9076H7.10759V12.2038H8.01014C8.17915 12.2038 8.31842 12.1747 8.42794 12.1166C8.53882 12.0571 8.62129 11.9753 8.67538 11.8712C8.73082 11.7657 8.75854 11.6447 8.75854 11.5081C8.75854 11.3702 8.73082 11.2499 8.67538 11.1471C8.62129 11.043 8.53882 10.9626 8.42794 10.9058C8.31707 10.8476 8.17645 10.8186 8.00608 10.8186H7.41385V14.2543H6.53564Z" fill="white" />
                  <path d="M11.9219 14.2543H10.4495V10.1006H11.9341C12.3519 10.1006 12.7116 10.1837 13.0131 10.3501C13.3146 10.515 13.5465 10.7523 13.7088 11.0619C13.8724 11.3716 13.9542 11.7421 13.9542 12.1734C13.9542 12.6061 13.8724 12.9779 13.7088 13.2889C13.5465 13.5999 13.3133 13.8385 13.009 14.0048C12.7062 14.1712 12.3438 14.2543 11.9219 14.2543ZM11.3277 13.5019H11.8854C12.145 13.5019 12.3634 13.4559 12.5405 13.3639C12.719 13.2706 12.8529 13.1266 12.9421 12.9319C13.0327 12.7359 13.078 12.483 13.078 12.1734C13.078 11.8665 13.0327 11.6156 12.9421 11.4209C12.8529 11.2262 12.7197 11.0829 12.5426 10.991C12.3654 10.899 12.1471 10.853 11.8875 10.853H11.3277V13.5019Z" fill="white" />
                  <path d="M14.8207 14.2543V10.1006H17.5709V10.8246H15.6989V11.8144H17.3884V12.5385H15.6989V14.2543H14.8207Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_7203_103191" x1="11.9998" y1="6.10204" x2="11.9998" y2="26.2549" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF8C6E" />
                      <stop offset="1" stop-color="#E94580" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col gap-y-1">
                  <div className="font-medium">invoice-download-203322.pdf</div>
                  <div className="font-xs text-colbert-500">323kb</div>
                </div>
              </div>

            </div>
            <div className="cell">23/05/2023</div>
            <div className="cell">
              <div className="chip-container flex-wrap">
                <div className="chip colbert subtle">EOFY 2023</div>
                {/* <div className="chip colbert subtle">Tax Receipt</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div>
                <div className="chip colbert subtle">Random Tag</div> */}
              </div>
            </div>
            {/* Attached to */}
            <div className="cell">
              {/* Association list - refactor into seperate component later */}
              <div className="flex flex-col gap-y-2">
                {/* Associatated with Income */}
                <div className="association">
                  <span className="font-medium">Income:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Online Sales</span>
                </div>
                {/* Associatated with Expense */}
                <div className="association">
                  <span className="font-medium">Expense:</span><span className="text-lavender-600 hover:cursor-pointer hover:underline ml-1.5">Entertainment, +1 More</span>
                </div>
              </div>
            </div>
            {/* Action buttons */}
            <div className="cell">
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


