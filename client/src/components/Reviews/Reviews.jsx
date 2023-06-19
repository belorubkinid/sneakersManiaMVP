import { useEffect } from 'react';
import { Grid, Container, Typography, Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { initRewiewsListAC } from '../../redux/actionCreators/reviewsAC';
import ReviewsCard from './ReviewsCard';
import { useNavigate } from 'react-router-dom'

function Reviews() {
  const {comment} = useSelector(state => state.reviewsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
      fetch('/reviews', {
        credentials: 'include',
      })
      .then(data => data.json())
      .then(data => {console.log('reviews!', data.comment)
    return data
  })
      .then(data => {
        console.log(data);
        if(data.message === 'sucsess') {
          dispatch(initRewiewsListAC(data.comment))
        } else if (data.message === 'nopComments') {
          console.log('noComments');
        } else (console.log(data.error))})
      .catch(error => error.message)
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
    <Container sx={{mt: '1rem'}}
            style={{paddingTop: '1.5rem'}}>

              <div>

              <Container  sx={{ p: 3 }} maxWidth="sm">
                <Typography variant='h4' align="center" color="textPrimary" gutterBottom>
                  Отзывы
                </Typography>
              <Typography variant='h6' align="center" color="textSecondary" gutterBottom>
                Уважаемые покупатели, на этой страничке Вы можете оставить свой отзыв
              </Typography>
              <Typography variant='h6' align="center" color="textSecondary" gutterBottom>
                Спасибо за Ваше мнение !
              </Typography>
              <Box sx={{ '& button': { m: 1 } }}>
               <Button  variant="outlined" onClick={()=>{navigate('/addreviews')}}  color="inherit">ОСТАВИТЬ ОТЗЫВ</Button>
               <Button to variant="outlined" target="_blank" href='https://yandex.ru/maps/org/tapkomaniya_yug/66063787262/' color="inherit">ОТЗЫВЫ НА ЯНДЕКС</Button>
               <Button variant="outlined" target="_blank" href="https://www.google.ru/maps/place/%D0%A2%D0%B0%D0%BF%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%AE%D0%B3/@45.021658,38.999233,15z/data=!4m5!3m4!1s0x0:0x7adb46b7ae607a25!8m2!3d45.0214375!4d38.9990577"  color="inherit">ОТЗЫВЫ НА GOOGLE</Button>
              </Box>
              </Container>
              </div>

                  <Box mr={3}>
    </Box>

    <Grid container spacing={2}>
    {(comment?.length)? comment.map(comment => (
              <ReviewsCard  key={comment.id} reviews={comment}/>
          )) : <></>}
   </Grid>
   </Container>
   
   </>
  );
}

export default Reviews;
