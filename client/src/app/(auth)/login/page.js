'use client'

import LoginFormComponent from '@/components/login-form'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative">
      <Image
        src="/backgroundImage.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="w-full max-w-md px-4 py-8 relative z-10">
        <LoginFormComponent />
      </div>
    </div>
  )
}

