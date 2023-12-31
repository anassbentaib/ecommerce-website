import React from 'react'
import { AppBar , Toolbar , IconButton , Badge ,MenuItem , Menu , Typography} from '@material-ui/core'
import logo from '../images/logo.png'
import Search from './EcommerceSearch'
import {ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom';


function Navbar({ totalItems }) {
  const classes = useStyles()
  const location = useLocation()

  return (
    <>
    <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography 
            component={Link} to='/' 
            variant='h6' 
             
            color='inherit'
            >
                <img 
                src={logo} 
                alt='Commerce.js' 
                height='25px'
                 className={classes.image}
                 />
                ShoppingCart
            </Typography>
            <Typography>
              <Search />
            </Typography>

            <div className={classes.grow} />
            
            {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
            
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar