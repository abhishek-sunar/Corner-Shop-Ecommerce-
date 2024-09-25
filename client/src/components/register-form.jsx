'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\$$[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$)/

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  gender: Yup.string().oneOf(['Male', 'Female', 'Other']).required('Gender is required'),
  dateOfBirth: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
})

export function RegisterFormComponent() {
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
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values)
    },
  })

  return (
    (<Card className="w-full backdrop-blur-sm bg-white/70 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
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
            <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className={`bg-white/50 ${formik.errors.fullName && formik.touched.fullName ? 'border-red-500' : ''}`} />
            {formik.errors.fullName && formik.touched.fullName && (
              <Alert variant="destructive">
                <AlertDescription>{formik.errors.fullName}</AlertDescription>
              </Alert>
            )}
          </div>
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
            <Label htmlFor="phoneNumber" className="text-gray-700">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className={`bg-white/50 ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500' : ''}`} />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <Alert variant="destructive">
                <AlertDescription>{formik.errors.phoneNumber}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-gray-700">Gender</Label>
            <Select
              name="gender"
              onValueChange={(value) => formik.setFieldValue('gender', value)}
              defaultValue={formik.values.gender}>
              <SelectTrigger
                className={`bg-white/50 ${formik.errors.gender && formik.touched.gender ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formik.errors.gender && formik.touched.gender && (
              <Alert variant="destructive">
                <AlertDescription>{formik.errors.gender}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="text-gray-700">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
              className={`bg-white/50 ${formik.errors.dateOfBirth && formik.touched.dateOfBirth ? 'border-red-500' : ''}`} />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
              <Alert variant="destructive">
                <AlertDescription>{formik.errors.dateOfBirth}</AlertDescription>
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
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={`bg-white/50 ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-red-500' : ''}`} />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <Alert variant="destructive">
                <AlertDescription>{formik.errors.confirmPassword}</AlertDescription>
              </Alert>
            )}
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Register</Button>
        </form>
      </CardContent>
    </Card>)
  );
}