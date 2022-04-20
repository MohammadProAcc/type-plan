import React, { useState } from 'react'
import { LoginStep } from 'types'
import { Layout } from './Layout'

export const LoginPage: React.FC = () => {

  const [loginStep, setLoginStep] = useState<LoginStep>(LoginStep.loginRequest)

  return (
    <Layout>
    </Layout>
  )
}