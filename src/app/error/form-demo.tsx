'use client'

import { useActionState, useRef } from 'react'
import { submitForm } from './actions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


export default function FormDemo() {
    const formRef = useRef<HTMLFormElement>(null!)
    const [state, action, isPending] = useActionState(submitForm, {
        success: '',
    })

    return (
        <div className='bg-slate-900 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-4'>
                Form with Expected Error Handling (useActionState)
            </h2>
            <form ref={formRef} action={action} className='space-y-4'>
                <div>
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-100'
                    >
                        Email
                    </label>
                    <Input
                        type='email'
                        id='email'
                        name='email'
                        disabled={isPending}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                </div>
                <div className='space-x-2'>
                    <Button
                        type='submit'
                        name='action'
                        value='submit'
                        disabled={isPending}
                        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                    >
                        Submit
                    </Button>
                    <Button
                        disabled={isPending}
                        type='button'
                        formAction={action}
                    >
                        Submit by Input
                    </Button>
                    <Button
                        type='submit'
                        name='action'
                        value='expected-error'
                        className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50'
                    >
                        Trigger Expected Error
                    </Button>
                </div>
            </form>

            <Button
                className='mt-2'
                type='button'
                onClick={e => {
                    e.preventDefault()
                    formRef.current.requestSubmit()
                }}
                disabled={isPending}
            >
                Programmatic submit
            </Button>

            {state.error && <p className='mt-4 text-red-500'>{state.error}</p>}
            {state.success && (
                <p className='mt-4 text-green-500'>{state.success}</p>
            )}
        </div>
    )
}
