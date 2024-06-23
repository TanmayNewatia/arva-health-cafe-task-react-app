import React from 'react'

const Navbar = () => {
    return (
        <header className='h-[80px] w-screen flex justify-center items-center fixed top-0 bg-[#EDF0EF] z-50'>
            <div className="flex justify-between items-center w-11/12">
                <a className="navbar-brand" href="/"><img src="/logo.png" alt="Cafe" className='w-[50px]' /></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <ul className="text-black flex justify-center items-center gap-4">
                    <li className="nav-item">
                        <a className="text-black" href="/">Sign In</a>
                    </li>
                </ul>
                {/* <div>
                    <p>
                        Cart
                    </p>
                    <p>
                        Profile
                    </p>
                </div> */}
            </div>
        </header>
    )
}

export default Navbar