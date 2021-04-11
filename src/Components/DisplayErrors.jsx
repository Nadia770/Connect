import React from 'react'

export default function DisplayErrors({status, msg}) {
  return (
    <div>
    {status} - {msg}
    </div>
  )
}
