import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
import { StrictMode } from 'react';
import NoteApp from './NoteApp/App';
import Playground from './Playground';
import UserPage from './pages/users/UserPage';
// import Playground from './Playground';
// import UserPage from './pages/users/UserPage';


const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
   {/*    <Playground />
      <UserPage /> */}
      {<NoteApp />}
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
