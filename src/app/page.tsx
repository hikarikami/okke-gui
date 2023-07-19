/*
 * 
 * Test Page / Homepage
 * 
 */

import Link from 'next/link'
import Button from '../app/_components/button'


export default function Page() {
  return (
    <>
      <h1 className="text-3xl text-colbert-900 mt-16">Home Page</h1>
      <p>This is the homepage page</p>
      <Link href="/test">Go to Test page</Link>
      <div className="flex flex-col gap-y-4 mt-4">
        <div className="flex gap-x-2">
          <Button label="Test" size="lg" buttonType="tertiary" modifier="non-colour" />
          <Button label="Test" size="lg" buttonType="tertiary" modifier="non-colour" />
          <Button label="Test" size="lg" buttonType="secondary" />
          <Button label="Test" size="lg" buttonType="primary" />
          <Button label="Test" size="lg" buttonType="call-to-action" />
        </div>
        <div className="flex gap-x-2">
          <Button label="Test" size="md" buttonType="tertiary" modifier="non-colour" />
          <Button label="Test" size="md" buttonType="tertiary" modifier="non-colour" />
          <Button label="Test" size="md" buttonType="secondary" />
          <Button label="Test" size="md" buttonType="primary" />
          <Button label="Test" size="md" buttonType="call-to-action" />
        </div>
        <div className="flex gap-x-2">
          <Button label="Test" size="sm" buttonType="tertiary" modifier="non-colour" />
          <Button label="Test" size="sm" buttonType="secondary" />
          <Button label="Test" size="sm" buttonType="primary" />
          <Button label="Test" size="sm" buttonType="call-to-action" />
        </div>
        
      </div>

      <div className="floating-action">
        <button>
          <svg width="42" height="42" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8337 11.3337H10.8337V16.3337H9.16699V11.3337H4.16699V9.66699H9.16699V4.66699H10.8337V9.66699H15.8337V11.3337Z" fill="white" />
          </svg>
        </button>
        <div className="floating-menu">
          <ul>
            <li>Create Expense</li>
            <li>Create Income</li>
            <li>Create Invoice</li>
          </ul>
        </div>
      </div>
    </>

  )
}
