import React from 'react'
import { Metadata } from 'next'

import { AuthActionType } from '@/types/auth'
import { UserAuthForm } from '@/components/user-form'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register to create an account',
}

function RegisterPage() {
  return <UserAuthForm formType={AuthActionType.REGISTER} />
}

export default RegisterPage
