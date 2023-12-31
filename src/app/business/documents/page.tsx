/*
 * 
 * Document List
 * 
 */
"use client"; // This is a client component 👈🏽


import PageHeader from "../../_components/pageHeader";
import DocumentsTable from "../../_components/tables/documentsTable"
import CustomerTable from "../../_components/tables/customerTable";

import Filters from "../../_components/filters"


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

    <div className="">
    <PageHeader title="Documents" />
      <div className="w-full">
        <Filters />
        <div className="-mx-4 md:mx-0 mb-8 card md:w-full mt-3 rounded-none md:rounded-md">
          <DocumentsTable />
        </div>
      </div>  
    </div>

  )
}


