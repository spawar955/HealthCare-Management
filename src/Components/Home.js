import React from 'react' 

const Home = () => {
    return (
        <div className='Homepage'>  
            <div className="intro">
                <div className="intro-title">Patient</div>
                <div className="intro-details"><div style={{marginBottom:"20px"}}>As a patient You can- </div>   
                    <ul>
                        <li> See your medical history</li>
                        <li> Book appointments</li>
                        <li> Choose your doctor</li>
                    </ul>
                </div>
                <div className='go-to-login'>                
                    <button><a href='/LoginPatient'>Login as Patient</a></button>
                </div>
            </div>
            <div className="intro">
                <div className="intro-title">Doctor</div>
                <div className="intro-details"><div style={{marginBottom:"20px"}}>As a Doctor You can- </div>
                    <ul>
                        <li> See patient's history</li>
                        <li> Maintain your profile through a dashboard </li>
                        <li> Get patients easily</li>
                    </ul>
                </div>
                <div className='go-to-login'>                
                    <button><a href='/LoginDoctor'>Login as Doctor</a></button>
                </div>
            </div>
                
        
        </div>
    )

}

export default Home 