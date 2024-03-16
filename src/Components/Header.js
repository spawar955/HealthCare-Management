import React from 'react' 

const Header = () => {
       
    return (
        <>
            <div className="navbar bg-body-tertiary">
                <div className="logo">
                        <a href='/'><img src="Logo.png" alt="Logo" /></a>
                </div>
                <div className="navvbar">
                    <div className="nav" ><a className='subclass' href="/">Home</a></div> 
                    <div className="nav"><a className='subclass2' href="/">Login</a></div>
                </div>
                <div className="headerLogin">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>  
        
        </>
    )

}

export default Header 