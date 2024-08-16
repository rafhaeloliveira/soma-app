import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { HighlightCard } from '@/components/HighlightCard';
import { ProductCard } from '@/components/ProductCard';
import { useLoading } from '@/config/context/LoadingContext';
import { getAllProducts } from '@/redux/actions/product.actions';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const mockup = {
  url: "https://lojafarm.vteximg.com.br/arquivos/ids/3279159-640-960/328440_07071_1-REGATA-QUADRADA-ESTAMPADA-FARM-RIO.jpg?v=638416136031500000"
}

export default function HomeScreen() {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector((state) => state.products);

  const { showLoading, hideLoading } = useLoading()

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [loading]);

  return (
    <Container fullWidth fullHeight>
      <ScrollView>
        <HighlightCard
          imageUri={mockup.url}
          title="FARM RIO 2024"
          callToAction={'Coleção'}
        />

        <Grid>
          {products.map(item => (
            <ProductCard
              key={`product-${item.id}`}
              title={item.title}
              price={item.price}
              productId={item.id}
              imageUrl={item.image}
            />
          ))}
        </Grid>
      </ScrollView>
    </Container>
  );
}
