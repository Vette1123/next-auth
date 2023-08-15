import React from 'react'

import AuthenticationPage from '@/components/authentication'

interface Props {
  children: React.ReactNode
}

function layout({ children }: Props) {
  return <AuthenticationPage>{children}</AuthenticationPage>
}

export default layout
