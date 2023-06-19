import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactNav() {
  return (
    <div>
        <BottomNavigation
        style={{marginTop: '100px'}}
    >
      <BottomNavigationAction
      icon={<InstagramIcon/>}
      href={'https://www.instagram.com/tapkomania23/'}
      target={'blank'}
      />
      <BottomNavigationAction
      icon={<TelegramIcon/>}
      href={'/'}
      />
      <BottomNavigationAction
      icon={<WhatsAppIcon/>}
      href={'https://wa.me/79181113797'}
      target={'blank'}
      />
      <BottomNavigationAction
      href={'https://yandex.ru/maps/org/tapkomaniya_yug/66063787262/?ll=38.999504%2C45.021155&z=18.35'}
      target={'blank'}
      icon={<LocationOnIcon/>}
      />
    </BottomNavigation>
    </div>
  );
}

export default ContactNav;
