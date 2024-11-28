'use client'

import { Button } from '@/components/ui/button'
import Form from 'next/form'
import { loginError, loginSuccess } from './actions'

export default function Page() {



  return (
    <main className='container flex flex-col gap-8 p-8'>
      <Form action={loginSuccess}>
        <Button variant={'secondary'} className='bg-green-600'>Login Succes</Button>
      </Form>
      <Form action={loginError}>
        <Button variant={'destructive'}>Login Error</Button>
      </Form>
    </main>
  )
}