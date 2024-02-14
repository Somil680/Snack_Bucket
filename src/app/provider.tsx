' use client'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      window.addEventListener('load', () => {
        
      setTimeout(() => {
        setShowLoader(false)
      }, 3000)
    })}
  }, [])

  return (
    <Provider store={undefined} >
        {showLoader ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100vw',
              height: '100vh',
              background: 'white',
              zIndex: '1000',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
                lineHeight: '1.5rem',
                fontWeight: 500,
              }}
            >
              Connect together Always
            </p>
          </div>
        ) : (
          <>{children}</>
        )}
    </Provider>
  )
}
