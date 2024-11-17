import { SignUp } from '@clerk/nextjs'
import React from 'react'
import AuthLayout from '../../Layout';

const page = () => {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}

export default page
