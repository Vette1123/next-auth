import React from 'react'
import { Metadata } from 'next'

import { AuthActionType } from '@/types/auth'
import { UserAuthForm } from '@/components/user-form'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

function LoginPage() {
  return <UserAuthForm formType={AuthActionType.LOGIN} />
}

export default LoginPage
