

import { Helmet } from 'react-helmet-async';
import { Search, ImageBox } from './components/index';
import MainLayout from './layout/MainLayoute';

function App({pageTitle}) {

  return (
    <>
      <MainLayout>
        <Helmet>
          <title>{pageTitle}</title>{" "}
        </Helmet>

        <Search />
        <ImageBox />


      </MainLayout>
    </>
  )
}

export default App
