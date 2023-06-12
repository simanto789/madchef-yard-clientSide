import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorimage from '../../assets/error.jpg'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section class="d-flex justify-content-center align-items-center bg-light vh-100 p-4">
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <img src={errorimage} alt="" />
    <div class="text-center">
      <h2 className='mb-2'>
            <span>Error</span> {status || 404}
          </h2>
          <p className='mb-2'>
            {error?.message}
          </p>
      <a href="/" class="btn btn-danger">
        Back to homepage
      </a>
    </div>
  </div>
</section>

  )
}

export default ErrorPage