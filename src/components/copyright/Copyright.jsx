import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <Typography variant="body2" color="#fff" align="center" style={{ background: '#2E3B55', color: '#fff', height: '60px', padding: '20px' }}>
      {'Copyright © '}
      <Link color="inherit" to="/" style={{ textDecoration: 'none', color: '#fff'}}>
        Global Data Exchange | GDX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
