'use client'

import { LoginFormComponent } from '@/components/login-form';

export default function LoginPageComponent() {
  return (
    (<div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgroundImage.png?height=1080&width=1920')",
      }}>
      <div className="w-full max-w-md px-4 py-8">
        <LoginFormComponent />
      </div>
    </div>)
  );
}