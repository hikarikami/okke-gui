/*
 * 
 * Expenses Page
 * 
 */

"use client"; // This is a client component 👈🏽

import Filters from "../_components/filters"
import PageHeader from "../_components/pageHeader"
import ExpenseTable from "../_components/tables/expenseTable"
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
      <PageHeader title="Expenses" />
      <div className="w-full">
        <Filters />
        <div className="card w-full mt-3">
          <ExpenseTable />
        </div>
      </div>
    </>
  )
}

