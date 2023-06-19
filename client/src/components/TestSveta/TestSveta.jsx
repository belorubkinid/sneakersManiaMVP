import { Container,  Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import { useSelector } from 'react-redux';
import SendOrder from './Btn.SendOrder';
import { useState } from 'react';

function TestSveta() {

  const [dialogOpen, setDialogOpen] = useState(true);
  const { User } = useSelector(state => state.usersReducer)
  console.log('user', User);
  const dialogClick = () => {
    setDialogOpen(Boolean(User));
  }
  const dialogClickClose = () => {
    setDialogOpen(false);
  }

  return (
    <>
    <Container sx={{mt: '1rem'}}
            style={{paddingTop: '1.5rem'}}>

    <Box mr={3}>
    <Dialog style={{align:"center"}} open={dialogOpen} onClose={dialogClickClose} >
        <DialogContent  align="center">
          <DialogTitle>
           Чтобы сделать заказ,
        <br />
        автоизируйтесь или зарегистрируйтесь
          </DialogTitle>
      <DialogContentText style={{maxWidth: '80%'}} maxWidth="xs">
       
        <Button style={{marginTop: '30px'}} onClick={dialogClick}  color="inherit" variant="outlined">Войти или создать аккаунт</Button>
      </DialogContentText>
        </DialogContent>
     </Dialog>
    </Box>
   </Container>
   <SendOrder />
</>
  );
}

export default TestSveta;
