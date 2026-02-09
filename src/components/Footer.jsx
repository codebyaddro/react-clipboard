import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full border-y border-gray-500/50 text-center'>
            <p className='py-5'>&copy; {new Date().getFullYear()} - All righs reserved - <a target='_blank' href="https://codebyaddro.com">codebyaddro</a></p>
        </footer>
    )
}

export default Footer