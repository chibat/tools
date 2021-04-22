import React from 'react'

export default function Logo({ size = 75 }: { size?: number }) {
  return (
    <img src="/tool/logo.svg" height={size} title="Aleph.js" />
  )
}
