import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PageLoader from './components/UI/PageLoader.jsx';
const Layout = lazy(() => import('./components/UI/Layout.jsx'));
const Home = lazy(() => import('./pages/Home'));
const MessageList = lazy(() => import('./pages/MessageList'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<PageLoader />}>
            <Layout />
          </Suspense>
        }
      >
        <Route path='/' element={<Navigate to='/all-chats' replace />} />
        <Route
          path='/all-chats'
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/all-chats/:id'
          element={
            <Suspense fallback={<PageLoader />}>
              <MessageList />
            </Suspense>
          }
        />
      </Route>
      <Route
        path='*'
        element={
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
