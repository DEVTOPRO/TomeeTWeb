import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import AppStore from'../../assests/images/appstore.png';
import playstore from '../../assests/images/playstore.png';
import map_marker from '../../assests/images/map_marker.svg';
import phone from '../../assests/images/phone.svg';
import mail from '../../assests/images/mail.svg';
import Al_KhairiCare_brochure from '../../assests/files/Al_KhairiCare_brochure.pdf';

const useStyles = makeStyles((theme) => ({
  cardLayout: {
    background: '#011229',
    color: '#FFF',
    // height: 'auto',
     zIndex: '1200',
     position: 'relative',
  },
  copyRight: {
    textAlign: 'center',
    padding: '1% 0px',
    fontSize: '14px',
    fontWeight: '700',
    background: '#011229',
    color: '#FFF',
    borderTop:"1px solid #e1e1e10d",
  },
  menuStyle: {
    color: '#808894',
    cursor: 'pointer',
    padding: '0px',
    marginTop: '27px',
    fontSize: '16px',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(0.9)',
      color: 'white',
    },
    '&:active': {
      color: 'white',
      borderRadius: '7px',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  const AboutUsHandler = () => {
    props.Redirectpath('/AboutUs');
  };
  const AboutUsHandler1 = () => {
    props.Redirectpath('/');
  };
  const downloadHandler = () => {
    props.Redirectpath('/Download');
  };
  return (
  <div className={classes.cardLayout}>
    
          <div className={classes.copyRight}>
            Copyright &#169; kentwood wingstop all Right Reserved.{' '}
          </div>
        </div>
  );
}
