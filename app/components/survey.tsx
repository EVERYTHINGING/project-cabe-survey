'use client'

import { useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import Stars from './stars';

export default function Survey() {
    const [submitted, setSubmitted] = useState(false);

    const searchParams = useSearchParams()
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');
    const agencyName = searchParams.get('agencyName');
    const surveyId = searchParams.get('surveyId');

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);

        const formData = new FormData(event.currentTarget);
        const dataObj = JSON.stringify(Object.fromEntries(formData));
        console.log(dataObj)

        const response = await fetch('http://localhost:8055/flows/trigger/a4d3386d-8b9f-45cb-b623-01012c6ce83a', {
            method: 'POST',
            body: dataObj
        }).catch(rejected => {
            console.log(rejected);
        });
    }
    return (
        <div className='text-center'>
            {!submitted ? (
                <div>
                    <img className='inline-block' src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif" alt="😊" width="256" height="256" />
                    <h1 className="my-8 text-5xl font-bold">Hi, {firstName} {lastName} !</h1>
                    <h2 className="my-8 text-3xl">How would you rate your project with {agencyName} so far?</h2>
                    <form onSubmit={onSubmit}>
                        <Stars name={'rating'} />
                        <div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    <h1 className="my-8 text-5xl font-bold">Thank you !</h1>
                    <img className='inline-block' src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif" alt="😊" width="256" height="256" />
                </div>
            )}
            
        </div>
    );
}