import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import useScreensize from './hooks/useScreenSize';
import DesktopLayout from './layouts/DesktopLayout';
import MobileLayout from './layouts/MobileLayout';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import { TrackContext } from './components/TrackContext';
import SearchPage from './pages/SearchPage';


const App = () => {

  const screenSize = useScreensize();
  const router = createBrowserRouter(
    createRoutesFromElements(screenSize.width > 480 ?
      <Route path='/' element={<DesktopLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/artist/:id' element={<ArtistPage />} />
        <Route path='/album/:id' element={<AlbumPage />} />
        <Route path='/search/' element={<SearchPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
      :
      <Route path='/' element={<MobileLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/artist/:id' element={<ArtistPage />} />
        <Route path='/album/:id' element={<AlbumPage />} />
        <Route path='/search/' element={<SearchPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  );


  return (
    <>
      <TrackContext>
      <RouterProvider router={router} />
      </TrackContext>
    </>
)
}

export default App