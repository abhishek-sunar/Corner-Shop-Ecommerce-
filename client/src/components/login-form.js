'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from 'react'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
})

export default function LoginFormComponent() {
  const router = useRouter()
  const [loginError, setLoginError] = useState(null)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {  
      try {
        setLoginError(null)
        const { data, status } = await axios.post('http://localhost:3010/login', values)
        if (status === 200) {
          router.push("/")
        } else {
          setLoginError(data.message || 'An unexpected error occurred')
        }
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setLoginError(err.response.data.message || 'Login failed. Please try again.')
        } else {
          setLoginError('An unexpected error occurred. Please try again.')
        }
        console.error("Login error:", err)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <Card className="w-full max-w-md mx-auto backdrop-blur-sm bg-white/70 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={128}
              height={128}
              priority
            />
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`bg-white/50 ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''}`}
              aria-invalid={!!(formik.errors.email && formik.touched.email)}
              aria-describedby="email-error"
            />
            {formik.errors.email && formik.touched.email && (
              <Alert variant="destructive" id="email-error">
                <AlertDescription>{formik.errors.email}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`bg-white/50 ${formik.errors.password && formik.touched.password ? 'border-red-500' : ''}`}
              aria-invalid={!!(formik.errors.password && formik.touched.password)}
              aria-describedby="password-error"
            />
            {formik.errors.password && formik.touched.password && (
              <Alert variant="destructive" id="password-error">
                <AlertDescription>{formik.errors.password}</AlertDescription>
              </Alert>
            )}
          </div>
          {loginError && (
            <Alert variant="destructive">
              <AlertDescription>{loginError}</AlertDescription>
            </Alert>
          )}
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
          <p className='text-center'>
            Don&apos;t have an account?{' '}
            <Link href="/register" className='text-primary hover:underline'>
              Register
            </Link>{' '}
            instead.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}