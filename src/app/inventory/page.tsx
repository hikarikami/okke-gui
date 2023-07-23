/*
 * 
 * Customer Page
 * 
 */

"use client"; // This is a client component 👈🏽

import Filters from "../_components/filters"
import PageHeader from "../_components/pageHeader"
import InventoryTable from "../_components/tables/inventoryTable"
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
      <PageHeader title="Inventory" />
      <div className="w-full">
        <Filters />
        <div className="-mx-4 md:mx-0 card md:w-full mt-3 rounded-none md:rounded-md">
          <InventoryTable />
        </div>
      </div>  
    </>
  )
}












