import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Navbar from '../components/navbar/Navbar';
import Copyright from '../components/copyright/Copyright';

// Images
import ProfileScreen from '../images/ProfileScreen-Edit.png';
import postman from '../images/postman.png';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Business = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      
      <div className="contentWrapper" style={{ display: 'flex', width: '100vw', height: '100vh', flexDirection: 'row', backgroundColor: '#4e524f'}}>
        <div className="contentRight" style={{ alignItems: 'center', justifyContent: 'center', padding: '50px', color: '#fff' }}>
          <h1 style={{marginTop: '25%'}}>Data Protection through MISSO</h1>
          <br/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus dignissim dui, vel vestibulum libero tincidunt at. Curabitur magna diam, dictum eu purus at, suscipit mollis justo. Pellentesque fringilla risus ut lorem vulputate, in suscipit libero maximus. Donec vitae rhoncus libero, vitae malesuada sem. Integer condimentum erat eget rutrum faucibus. Mauris vehicula varius sapien mattis malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rhoncus molestie interdum. Aenean malesuada tortor magna, vitae rutrum nulla aliquet non. Cras ac nisl ut ex volutpat tincidunt. Pellentesque ac arcu non quam hendrerit pellentesque. Integer sit amet orci efficitur, consequat tortor id, rhoncus purus. Donec tincidunt dictum odio vitae mattis. Donec vitae felis ut velit interdum tempor. Nam dignissim metus id hendrerit pulvinar.
          </p>
          <br/>
          <p>Cras ac nisl ut ex volutpat tincidunt. Pellentesque ac arcu non quam hendrerit pellentesque. Integer sit amet orci efficitur, consequat tortor id, rhoncus purus. Donec tincidunt dictum odio vitae mattis. Donec vitae felis ut velit interdum tempor. Nam dignissim metus id hendrerit pulvinar.</p>
          <br />
          <Link to="/developers">
          <Button color="primary" variant="outlined" className={classes.link} style={{color: '#fff', background: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)', left: '-10px'}}>
            Developers
          </Button>
          </Link>
        </div>
        <div className="contentLeft" style={{ alignItems: 'center', justifyContent: 'center'}}>
          <img src={ProfileScreen} alt="Business Profile" style={{ height: '800px', padding: '50px' }} />
        </div>
      </div>

      <div className="contentWrapper" style={{ display: 'flex', width: '100vw', height: '100vh', flexDirection: 'row', backgroundColor: '#fff'}}>
        <div className="contentLeft" style={{ alignItems: 'center', justifyContent: 'center'}}>
          <img src={postman} alt="Business Profile" style={{ height: '500px', padding: '50px', marginTop: '18%' }} />
        </div>
        <div className="contentRight" style={{ alignItems: 'center', justifyContent: 'center', padding: '50px', color: '#000' }}>
          <h1 style={{marginTop: '25%'}}>Keeping your data safe, and in your control!</h1>
          <br/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus dignissim dui, vel vestibulum libero tincidunt at. Curabitur magna diam, dictum eu purus at, suscipit mollis justo. Pellentesque fringilla risus ut lorem vulputate, in suscipit libero maximus. Donec vitae rhoncus libero, vitae malesuada sem. Integer condimentum erat eget rutrum faucibus. Mauris vehicula varius sapien mattis malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rhoncus molestie interdum. Aenean malesuada tortor magna, vitae rutrum nulla aliquet non. Cras ac nisl ut ex volutpat tincidunt. Pellentesque ac arcu non quam hendrerit pellentesque. Integer sit amet orci efficitur, consequat tortor id, rhoncus purus. Donec tincidunt dictum odio vitae mattis. Donec vitae felis ut velit interdum tempor. Nam dignissim metus id hendrerit pulvinar.
          </p>
          
          <br />
          <Link to="/customers">
          <Button color="primary" variant="outlined" className={classes.link} style={{color: '#fff', background: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)', left: '-10px'}}>
            Customers
          </Button>
          </Link>
        </div>
      </div>

      <Copyright />
    </div>
  )
}

export default Business
