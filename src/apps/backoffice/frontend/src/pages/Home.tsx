import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../components/page-container/PageContainer'

function Home() {
  return (
    <div className="container mx-auto px-4 p-5">
      <Helmet>
        <title>Aletheia | Home</title>
      </Helmet>

      <PageContainer title="HOME">
        ¡Bienvenido a la web de Admin de Aletheia!
      </PageContainer>
    </div>
  );
}

export default Home;