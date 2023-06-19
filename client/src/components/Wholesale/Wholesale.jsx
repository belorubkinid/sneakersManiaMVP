import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider }  from '@mui/styles';

function Wholesale() {
  return (
    <ThemeProvider>
    <main>
     <div>
        <Container style={{marginTop: '150px'}} maxWidth="md">
        <Typography variant='h6' align="center" color="textSecondary" paragraph>
          
        Чтобы попасть в оптовый раздел сайта и скачать актуальный прайс, пожалуйста, запросите пароль через E-mail : tapkomania23@yandex.ru или по телефону : 8-918-123-33-03. В обращении укажите свой город, контактный телефон и электронную почту.
          </Typography >

          <div style={{display: 'flex', flexDirection: 'column', maxWidth:'25px', alignItems: 'center'}}>
          <Button size="small" variant="outlined" color="inherit">
              О нас
          </Button>
          </div>

          <Typography variant='h4' style={{marginTop: '60px'}} align="center" color="textPrimary" gutterBottom>
          Наши торговые марки:
          </Typography>
          <Typography variant='h6' align="center" color="textSecondary" paragraph>
          
          Sahab  Gambol  Cania (Thailand)
      Обувь этих марок обладает отличными характеристиками и незаменима для повседневного использования, как в поездке на курорт, так и в городской среде, и даже в качестве домашних тапочек. Высококачественные материалы с высоким содержанием натурального каучука придают этой обуви оптимальную эластичность и прочность. Продукция славится среди потребителей тем, что носится по несколько сезонов, не боится воды, хорошо подходят для пляжа, бассейна, дома и повседневной эксплуатации, оставаясь при этом удобной и красивой.
      Теперь Вы можете заказать обувь Сахаб, Гэмбол или Кания оптом и в розницу от надежного поставщика на Юге России !
            Приятных покупок !
          </Typography>
          <div>
          <Grid container spacing={2} justify="center">
              <Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
     </div>
  </main>

</ThemeProvider>
  );
}

export default Wholesale;
