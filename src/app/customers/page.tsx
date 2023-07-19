/*
 * 
 * Customer Page
 * 
 */

"use client"; // This is a client component 👈🏽

import Filters from "../_components/filters"
import PageHeader from "../_components/pageHeader"
import CustomerTable from "../_components/tables/customerTable"
import { useEffect, useState } from 'react';


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
      <PageHeader title="Customers" />
      <div className="w-full">
        <Filters />
        <div className="card w-full mt-3">
          <CustomerTable />
        </div>
      </div>  
    </>
  )
}












