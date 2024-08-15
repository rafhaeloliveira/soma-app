import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { HighlightCard } from '@/components/HighlightCard';
import { ProductCard } from '@/components/ProductCard';
import { ScrollView } from 'react-native';

const mockup = {
  url: "https://lojafarm.vteximg.com.br/arquivos/ids/3279159-640-960/328440_07071_1-REGATA-QUADRADA-ESTAMPADA-FARM-RIO.jpg?v=638416136031500000"
}

export default function HomeScreen() {
  return (
    <Container fullWidth fullHeight>
      <ScrollView>
        <HighlightCard
          imageUri={mockup.url}
          title="FARM RIO 2024"
          callToAction={'Coleção'}
        />

        <Grid>
          <ProductCard title="Roupa 1" price={666} productId={'1'}  />
          <ProductCard title="Roupa 2" price={666} productId={'2'} />
          <ProductCard title="Roupa 3" price={666} productId={'3'} />
          <ProductCard title="Roupa 4" price={666} productId={'4'} />
          <ProductCard title="Roupa 5" price={666} productId={'5'} />
          <ProductCard title="Roupa 6" price={666} productId={'6'} /> 
        </Grid>
      </ScrollView>
    </Container>
  );
}
