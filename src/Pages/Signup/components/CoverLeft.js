import bg from '../../../components/images/women.png'
import React from 'react'

const CoverLeft = () => {
  return (
    <>
        <div className='cover-left'>
            <img className='img-left' src={bg} alt='cover'/>
            <div className='content-img'>
                <h1>News</h1>
                <h1>Today</h1>
                <h2>newstoday@mail.com</h2>
                <div className='text-footer'>
                    <div className='text-left'>
                        <h2>Why News Today</h2>
                        <h2>Community</h2>
                    </div>
                    <div className='text-right'>
                        <h2>Be an author</h2>
                        <h2>FAQ</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export {CoverLeft}