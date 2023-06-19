import { useSelector } from 'react-redux';
import AdminCard from '../AdminCard/AdminCard.jsx';
import { Grid } from "@mui/material";

function AdminProductList() {
  const { products } = useSelector(state => state.productsReducer);
  const { user } = useSelector(state => state.usersReducer)

  return (
    <>
{  (user.role === 'admin') ? <><h3>Все товары</h3><Grid container spacing={10}>
        {products?.length && products.map(product => (
          <Grid key={product.id} item xs={3}>
            <div>
              <AdminCard product={product} />
            </div>
          </Grid>
        ))}
      </Grid></> : <>Ты не админ!</>}
    </>
  );
}

export default AdminProductList;
