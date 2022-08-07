import { AppBar, Avatar, InputAdornment, Box, IconButton, Modal, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import React, { useState } from 'react';
import LogoImg from "../../../asssets/logos/Logo.png";
import "./header.css"
import RemoveQuoteIcon from "../../../asssets/images/RemoveQuote.svg"
import ShowQuoteIcon from "../../../asssets/images/ShowQuoteIcon.svg"
// import CircleIcon from "../../../asssets/images/Circle.svg"
import LogoutIcon from "../../../asssets/images/Logout.svg"
import { makeStyles } from '@mui/styles';
import SearchIcon from "../../../asssets/images/Search.svg"
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  textField: {
    width: "504px",
    height: "49px",
    borderRadius: '10px',
    border: '0px !important',
    fontSize: '12px !important',
  },
  textFieldInputProps: {
    width: "504.04px",
    height: "49.14px",
    fontSize: "12px",
    fontWeight: "200",
    fontFamily: "Arial, sans-serif",
    padding: "0px 0px 0px 10px !important",
    border: '2px solid #B6A3C2',
    borderRadius: '20px  !important',
  },
}));


export default function Header(props) {
  const classes = useStyles();

  let { addItem, groups, email, valueSearch, setValueSearch } = props

  const navigate = useNavigate();

  const [displayCloseIcon, setDisplayCloseIcon] = useState(false);
  const [displayWarningMessage, setDisplayWarningMessage] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    width: "348px",
    height: "126px",
    background: "#ffffff",
    outline: 'none',
    margin: "55px 0px 0px 1527px",
    boxShadow: "0px 3px 6px #00000029",
    display: "flex",

  };
  return (
    <>
      <AppBar style={{ background: "#F4F7FC", boxShadow: "none" }} position="fixed" >
        <Toolbar style={{ display: 'block', width: '1920px', height: '50px', minHeight: '50px', padding: '0px', backgroundColor: '#222222' }}>
          <div className='Div-header'
          >
            <img src={LogoImg} alt="LogoImg" className='Logo' onClick={() => setShowInputSearch(true)} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>

            {showInputSearch
              ? <div style={{ display: 'flex', margin: '10.71px 22.63px 0px 0px', color: "black" }}>
                <TextField
                  placeholder={"What are you looking for?"}
                  InputProps={{
                    className: classes.textFieldInputProps,
                    endAdornment:
                      <InputAdornment position="start" onClick={() => { setShowInputSearch(false); setValueSearch('') }}>
                        <img src={SearchIcon} alt="SearchIcon" style={{ width: "24px", height: "24px" }} />
                      </InputAdornment>,
                  }}
                  className={classes.textField}
                  value={valueSearch}
                  size={"small"}
                  onChange={(event) => setValueSearch(event.target.value)}
                >
                </TextField>
              </div>
              : <div
                style={{ margin: '21.84px 38.46px 0px 0px', }}
                onClick={() => setShowInputSearch(true)}
              >
                <img src={SearchIcon} alt="SearchIcon" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
              </div>
            }
            <Tooltip title="Add Item">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => addItem()}
              >
                <ControlPointIcon size="large" sx={{ color: "purple" }} />
              </IconButton>
            </Tooltip >
            <Avatar onClick={handleOpen} alt="Remy Sharp" style={{ width: '35px', height: '35px', margin: 'auto 30px auto 0px', cursor: "pointer" }} />
            <Modal
              open={open}
              onClose={handleClose}

              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ background: "unset !important" }}
              disableEnforceFocus={true}

            >
              <Box style={style}>
                <Avatar style={{ width: "69px", height: "69px", margin: "27px 0px 0px 17px" }} />
                <div style={{ display: 'block', margin: '26px 0px 0px 0px' }} >
                  <span
                    style={{
                      width: '344px', height: '21px', fontSize: '18px', fontWeight: '100',
                      backgroundColor: 'transparent', color: '#B6A3C2', margin: '0px 0px 0px 23px', letterSpacing: '0px'
                    }}
                  >
                    {email}
                  </span>
                  <div
                    style={{ display: 'flex', cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    <span
                      style={{
                        height: '18px', width: "68px", fontSize: '18px', fontWeight: '100',
                        backgroundColor: 'transparent', color: '#212529', margin: '22px 0px 0px 60px', letterSpacing: '0px'
                      }}
                    >
                      {"Log Out"}
                    </span>
                    <img src={LogoutIcon} alt="login_image" style={{ width: "20px", height: "17px", margin: '27px 0px 0px 11px' }} />
                  </div>

                </div>
              </Box>
            </Modal>

          </div>
          {displayWarningMessage &&
            <div
              style={{ display: 'flex', width: '1920px', height: '68px', background: 'linear-gradient(to bottom, #6E4C85 0%, #2D2B52 100%)' }}
              onMouseEnter={() => setDisplayCloseIcon(true)}
              onMouseLeave={() => setDisplayCloseIcon(false)}
            >
              <span
                style={{
                  width: '344px', height: '21px', fontSize: '18px', fontStyle: 'italic', fontWeight: '100',
                  backgroundColor: 'transparent', color: '#FFFFFF', margin: '24px 0px 0px 44px', letterSpacing: '0px'
                }}
              >
                {'"Anthing that can go wrong, will go wrong!"'}
              </span>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
              {displayCloseIcon &&
                <div onClick={() => setDisplayWarningMessage(false)}>
                  <img src={RemoveQuoteIcon} alt="RemoveQuoteIcon" width={"21px"} height={'21px'} style={{ margin: '23.5px 52.5px 0px 0px' }} />
                </div>
              }
            </div>
          }
          <div style={{ display: 'flex', width: '1920px', height: '80px', fontSize: '10px', backgroundColor: '#F4F7FC', color: '#9B9B9B', flexWrap: "wrap" }}>
            {groups.map((groupe, i) => (
                <div
                  key={i}
                  style={{
                    width: "423px", height: "48px", background: "white", boxShadow: "0px 3px 6px #00000029", borderRadius: "8px"
                    , margin: "20px 28.64px", display: "flex"
                  }}
                >
                  <img src={groupe.icon} alt={i} className={groupe.label === "ToDo" ? "Todo-icon" : groupe.label === "Doing" ? "Doing-icon" : groupe.label === "Done" ? "Done-icon" : ""} />

                  <Typography style={{
                    top: "182px", left: "90px", width: "50px",
                    height: "21px", color: '#212529', margin: '10px 0px 0px 10px', fontSize: "19px", letterSpacing: "0px", fontWeight: "bold"
                  }} >
                    {groupe.label}
                  </Typography>

                </div >
            ))
            }
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            {!displayWarningMessage &&
              <div onClick={() => setDisplayWarningMessage(true)}>
                <img src={ShowQuoteIcon} alt="ShowQuoteIcon" width={"24px"} height={'24px'} style={{ margin: '40px 52.51px 0px 0px' }} />
              </div>
            }
          </div>
        </Toolbar>
      </AppBar >

    </>
  );
};













