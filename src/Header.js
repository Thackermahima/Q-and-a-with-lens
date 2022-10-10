import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Tooltip, Box } from "@mui/material";
// import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { api, utils } from "@epnsproject/frontend-sdk-staging";
// import { WorldIDWidget, WidgetProps } from "@worldcoin/id";
import Dropdown from 'react-bootstrap/Dropdown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CreateProfileModal from "./Lens/CreateProfileModal";
import { LensAuthContext } from './Context/LensContext';
import LandingPage from "./LandingPage";

function Header() {
  // const notify = () => toast("You are logged in!");
  const [loading, setLoading] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [value, setValue] = useState();

  const lensAuthContext = React.useContext(LensAuthContext);
  const { profile, login, disconnectWallet, update } = lensAuthContext;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const [anchorLogin, setAnchorLogin] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(false);

  

 

  // const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;




  //-------------- Unstoable Domain ----------------------------

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};




    // const bookContext = React.useContext(BookContext);
    // const { login, disconnect } = bookContext;





  return (


    <AppBar color="inherit" position="fixed" sx={{ height: "70px" }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
       

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: "8px" }}>
 
<LandingPage />
        <CreateProfileModal />

        {
              profile &&
               
                <Button className='m-2' style={{ background: '#488E53', color: 'white', textTransform: 'capitalize' }} onClick={disconnectWallet}>
                      Disconnect
                            </Button>
              
        }

       {
                                
              !profile && <Button className='m-2' style={{ background: '#488E72', color: 'white', textTransform: 'capitalize' }} onClick={login}>
                       Login
                          </Button>
                            }          

                            <p>{profile.handle}</p>
   

        </div>


      </Toolbar>
    </AppBar>

  )
}

export default Header;