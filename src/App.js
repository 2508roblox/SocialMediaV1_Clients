import "./App.css"
import Home from './pages/Home';
import { Profile } from './pages/ProfilePage/Profile';
import { Auth } from './pages/Auth/Auth';
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {
  let user = useSelector((state) => state.AuthReducer.user)
  return (
    <div className="App">
      <div className="blur" style={{
        position: 'absolute',
        top: '30%',
        left: '-110px'

      }}></div>
      <div className="blur" style={{
        position: 'absolute',
        top: '-120px',
        right: '10%',

      }}></div>
      <Routes>


        <Route path="SocialMedia_App/" element={user ? <Navigate to="SocialMedia_App/home" /> : <Navigate to="SocialMedia_App/auth"/>} />

          <Route path="SocialMedia_App/home" element={user ? <Home /> : <Navigate to="../auth" />} />
          <Route path="SocialMedia_App/auth" element={!user ? <Auth /> : <Navigate to="../home" />} />
          <Route path="SocialMedia_App/profile/:userID" element={user ? <Profile /> : <Navigate to="../auth" />} />

        </Routes>
    </div>
  );
}

export default App;
