'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from 'next/link'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
})

export function LoginFormComponent() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values)
    },
  })

  return (
    (<Card className="w-full backdrop-blur-sm bg-white/70 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <Image
              src="/logo.png?height=128&width=128"
              alt="Company Logo"
              layout="fill"
              objectFit="contain" />
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`bg-white/50 ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''}`} />
            {formik.errors.email && formik.touched.email && (
              <Alert variant="destructive">
                <AlertDescription>{formik.errors.email}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`bg-white/50 ${formik.errors.password && formik.touched.password ? 'border-red-500' : ''}`} />
            {formik.errors.password && formik.touched.password && (
              <Alert variant="destructive">
                <AlertDescription>{formik.errors.password}</AlertDescription>
              </Alert>
            )}
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Login</Button>
          <p className='text-center'>Don't have an account? <Link href="/register" className='text-gray-700'> Register</Link> instead.</p>

        </form>
      </CardContent>
    </Card>)
  );
}