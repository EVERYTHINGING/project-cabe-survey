'use client'
 
import { useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import Stars from './stars';
 
export default function Survey() {
  const searchParams = useSearchParams()
 
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const agency = searchParams.get('agency');
  const key = searchParams.get('key');
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
  return (
    <div className='text-center'>
        <img className='inline-block' src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif" alt="😊" width="256" height="256" />
        <h1 className="my-8 text-5xl font-bold">Hi, {firstName} {lastName} !</h1>
        <h2 className="my-8 text-3xl">How would you rate your project with {agency} so far?</h2>
        <form onSubmit={onSubmit}>
            <Stars name={'rating'} />
            <div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}