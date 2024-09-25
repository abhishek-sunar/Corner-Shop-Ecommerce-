import { RegisterFormComponent } from '@/components/register-form'

export default function RegisterPage() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: "url('/backgroundImage.png?height=1080&width=1920')",
      }}
    >
      <div className="w-full max-w-md">
        <RegisterFormComponent />
      </div>
    </div>
  )
}