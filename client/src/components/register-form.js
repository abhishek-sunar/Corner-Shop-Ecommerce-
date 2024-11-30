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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from 'react'

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Phone number is required'),
  gender: Yup.string().oneOf(['Male', 'Female', 'Other'], 'Invalid gender selection').required('Gender is required'),
  dateOfBirth: Yup.date().max(new Date(), "Date of birth can't be in the future").required('Date of birth is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export default function RegisterFormComponent() {
  const router = useRouter()
  const [registerError, setRegisterError] = useState(null)

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      gender: 'Male',
      dateOfBirth: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setSubmitting }) => {  
      try {
        setRegisterError(null)
        const { data, status } = await axios.post('http://localhost:3010/register', values)
        if (status === 201) {
          router.push("/login")
        } else {
          setRegisterError(data.message || 'An unexpected error occurred')
        }
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setRegisterError(err.response.data.message || 'Registration failed. Please try again.')
        } else {
          setRegisterError('An unexpected error occurred. Please try again.')
        }
        console.error("Registration error:", err)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <Card className="w-full max-w-md mx-auto backdrop-blur-sm bg-white/70 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
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
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className={`bg-white/50 ${formik.errors.fullName && formik.touched.fullName ? 'border-red-500' : ''}`}
              aria-invalid={!!(formik.errors.fullName && formik.touched.fullName)}
              aria-describedby="fullName-error"
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <Alert variant="destructive" id="fullName-error">
                <AlertDescription>{formik.errors.fullName}</AlertDescription>
              </Alert>
            )}
          </div>
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
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className={`bg-white/50 ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500' : ''}`}
              aria-invalid={!!(formik.errors.phoneNumber && formik.touched.phoneNumber)}
              aria-describedby="phoneNumber-error"
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <Alert variant="destructive" id="phoneNumber-error">
                <AlertDescription>{formik.errors.phoneNumber}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              name="gender"
              onValueChange={(value) => formik.setFieldValue('gender', value)}
              defaultValue={formik.values.gender}
            >
              <SelectTrigger className={`bg-white/50 ${formik.errors.gender && formik.touched.gender ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formik.errors.gender && formik.touched.gender && (
              <Alert variant="destructive" id="gender-error">
                <AlertDescription>{formik.errors.gender}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
              className={`bg-white/50 ${formik.errors.dateOfBirth && formik.touched.dateOfBirth ? 'border-red-500' : ''}`}
              aria-invalid={!!(formik.errors.dateOfBirth && formik.touched.dateOfBirth)}
              aria-describedby="dateOfBirth-error"
            />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
              <Alert variant="destructive" id="dateOfBirth-error">
                <AlertDescription>{formik.errors.dateOfBirth}</AlertDescription>
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
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={`bg-white/50 ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-red-500' : ''}`}
              aria-invalid={!!(formik.errors.confirmPassword && formik.touched.confirmPassword)}
              aria-describedby="confirmPassword-error"
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <Alert variant="destructive" id="confirmPassword-error">
                <AlertDescription>{formik.errors.confirmPassword}</AlertDescription>
              </Alert>
            )}
          </div>
          {registerError && (
            <Alert variant="destructive">
              <AlertDescription>{registerError}</AlertDescription>
            </Alert>
          )}
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Registering...' : 'Register'}
          </Button>
          <p className='text-center'>
            Already have an account?{' '}
            <Link href="/" className='text-primary hover:underline'>
              Login
            </Link>{' '}
            instead.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}