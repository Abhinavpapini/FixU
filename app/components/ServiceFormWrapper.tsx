'use client'
import { Suspense } from 'react'
import ServiceForm from './ServiceForm'

function ServiceFormFallback() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading service form...</p>
      </div>
    </div>
  )
}

export default function ServiceFormWrapper() {
  return (
    <Suspense fallback={<ServiceFormFallback />}>
      <ServiceForm />
    </Suspense>
  )
}
