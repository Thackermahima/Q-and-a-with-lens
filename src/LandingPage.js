import React from 'react'
    import { Link } from "react-router-dom";
    import Button from '@mui/material/Button';
const LandingPage = () => {
  return (
        <div className="container-fluid landigpage-contain">
          <div className="landing-img" >
    
                <Link to="/question">
                <Button className='m-2' style={{ background: '#488E53', color: 'white', textTransform: 'capitalize' }}>
                      Ask Question
                            </Button>
              
            </Link>
          </div>
    
        </div>
      )
    }
    
   

export default LandingPage