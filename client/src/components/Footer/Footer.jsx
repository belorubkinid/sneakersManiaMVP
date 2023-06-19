import { Typography, Box } from '@mui/material'
import ConnectionForm from '../ConnectionForm/ConnectionForm';
import ContactNav from '../ContactNav/ContactNav';

function Footer() {

  return (
    <>
    <ContactNav/>
    <div  style={{ width: '100%',marginTop: '20px', paddingBottom: '2%',paddingTop: '50px' , backgroundColor: "rgba(219, 219, 219, 0.91)", paddingLeft: "50px", display: "flex", flexDirection: "column"}}>
      <ConnectionForm/>
      <footer>
                <hr style={{marginTop: "50px",}} />
        <Box 
              sx={{
                maxWidth: "1000px",
                margin: "auto",
                paddingTop: "20px"
              }}
        >
        <Typography  align="left" color="textSecondary">
        Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: tapkomania23.ru . 
        <br />
        <br />
        Юридическая информация: ИП Кудрявцева Ирина Станиславовна ОГРНИП 304230925900039 ИНН 230900021505
        </Typography>
        <br />
        <Typography align="center" color="textSecondary">
        © SneakersMania 2022 Все права защищены.
        </Typography>
        </Box>
      </footer>
    </div>
    </>
  );
}

export default Footer;
