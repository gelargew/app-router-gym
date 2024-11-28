'use server'

import { redirect } from "next/navigation"

export const loginSuccess = async () => {
  redirect('/redirect/success')
}

export const loginError = async () => {
  redirect('/redirect/error')
}