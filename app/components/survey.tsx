'use client'

import { useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import Stars from './stars';
import Scale from './scale';
import Question from './question';
import Openended from './openended';

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
        let dataObj = {
            surveyId: surveyId,
            ...Object.fromEntries(formData) 
        }

        const directusUrl = process.env.DIRECTUS_URL || 'https://dii1kdhm.clj5khk.gcp.restack.it';
        
        const response = await fetch(`${directusUrl}/flows/trigger/a4d3386d-8b9f-45cb-b623-01012c6ce83a`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataObj)
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
                    <form onSubmit={onSubmit}>
                        <Question title={`How would you rate your project with ${agencyName} so far?`} />
                        <Stars name='stars1' num={5} default='5' />

                        <Question title={`Is there anything you think they should know your relationship with ${agencyName}?`} />
                        <Openended name='openended1' placeholder='Yes?' />

                        <Question title={`How much do you agree with the statement: “${agencyName} has a solid understanding of my business”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree1' />

                        <Question title={`How much do you agree with the statement: “${agencyName} is able to come up with new, innovative ways to achieve my goals”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree2' />

                        <Question title={`How much do you agree with the statement: “${agencyName} brings a lot of creative thinking to the work”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree3' />

                        <Question title={`How much do you agree with the statement: “${agencyName} creatively communicates ideas about our product or brand”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree4' />

                        <Question title={`How much do you agree with the statement: “${agencyName} consistently brings me new ideas about my business”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree5' />

                        <Question title={`How much do you agree with the statement: “${agencyName} consistently does research into our consumes, category and competitors”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree6' />

                        <Question title={`How much do you agree with the statement: “${agencyName} is good at listening to and incorporating our feedback”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree7' />

                        <Question title={`How much do you agree with the statement: “${agencyName} always gets back to us in a timely and organized way when we have a specific need or request.”`} />
                        <Scale options={['strongly disagree', 'somewhat agree', 'strongly agree', 'completely agree']} name='agree8' />

                        <Question title={<>{`How likely are you to recommend ${agencyName} to a colleague?`} <br/>{`1 [not at all likely] - 10 [completely likely]`}</>} />
                        <Stars name='stars2' num={10} default='10' />

                        <Question title={`If you had to choose today, how likely would you be to continue working with ${agencyName}`} />
                        <Scale options={['not at all likely', 'somewhat likely', 'very likely', 'completely likely']} name='likely1' />
                        
                        <Question title={`What is the best thing that ${agencyName} has done in the last few weeks?`} />
                        <Openended name='openended2' placeholder='Yes?' />

                        <Question title={`What is one thing you want ${agencyName} to change about how they engage with you?`} />
                        <Openended name='openended3' placeholder='Yes?' />
                        <div className='my-8'>
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