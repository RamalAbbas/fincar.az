'use client'
import { Provider } from 'react-redux'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '../../../redux/app/store'

export default function Layout({ children }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </>
  )
}
