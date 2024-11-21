'use server'

import { revalidatePath } from 'next/cache'

type DefaultState = {
  error: string;
  success?: undefined;
} | {
  success: string;
  error?: undefined;
} | null

export async function submitForm(prevState: DefaultState ,formData: FormData) {
  const email = formData.get('email')
  const action = formData.get('action')

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log(action)
  // Unexpected error
  if (action === 'unexpected-error') {
    throw new Error('This is an unexpected error')
  }

  // Expected error handling

  if (!email) {
    return { error: 'Email is required' }
  }

  if (action === 'expected-error') {
    return { error: 'This is an expected error' }
  }



  // Success case
  revalidatePath('/')
  return { success: `Form submitted successfully for ${email}` }
}



