import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './assets/App.css';
import Category from './components/Category.jsx';
import Landing from './components/Landing.jsx';
import Navbar from './components/Navbar.jsx';
import Featured from './components/Featured.jsx';
import Working from './components/Working.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Explore from './components/Explore.jsx';
import Careers from './components/Careers.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import NotFound from './components/NotFound.jsx';
import ComingSoon from './components/ComingSoon.jsx';
import UserProfile from './components/UserProfile.jsx';
import { AuthProvider, useAuth } from './context/AuthProvider.jsx';
import Canditate from './components/Canditate.jsx';
import { useEffect,useState } from 'react';

function Home() {
  return (
    <div>
      <Landing />
      <Category />
      <Featured />
      <Featured title="New Professional" />
      <Working />
    </div>
  );
}
function ComeSoon() {
  return (
      <ComingSoon />
  );
}

const Protected = ({ children }) => {
  const { authUser, setAuthUser, userLoggedIn, setUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Check if user data exists in localStorage only once on mount
    const retrievedData = JSON.parse(localStorage.getItem('userData'));

    if (retrievedData && retrievedData.userLogged) {
      // Update authUser and userLoggedIn state if session is valid
      setAuthUser({
        name: retrievedData.Name,
        email: retrievedData.Email,
      });
      setUserLoggedIn(true);
    } else {
      // Redirect to login if not logged in
      if (!authUser && !userLoggedIn) {
        alert('You are not logged in');
        navigate('/login');
      }
    }
    setIsLoading(false); 
  }, []);

  if (isLoading) {
    // Show a loading indicator while validation is in progress
    return <div>Loading...</div>;
  }

  if (authUser || userLoggedIn) {
    return children;
  }

  return null; // Render nothing if validation fails
};



function App() {

  const location = useLocation();
  const knownPaths = [
    "/",
    "/about",
    "/careers",
    "/explore",
    "/login",
    "/register",
    "/explore/architecture",
    "/explore/graphics",
    "/explore/development",
    "/explore/illustration",
    "/explore/marketing",
    "/explore/advertisement",
    "/explore/visualarts",
    "/browse-service",
    "/browse-request",
    "/post-request",
    "/user",
    "/help",
    "/candidate/detail"
  ];



  const isKnownPath = knownPaths.includes(location.pathname);

  if (!isKnownPath) {
    return <AuthProvider><NotFound /></AuthProvider>;
  } else if (location.pathname === "/login") {
    return <AuthProvider><Login /></AuthProvider>;
  } else if (location.pathname === "/register") {
    return <AuthProvider><Register /></AuthProvider>;
  }

  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/architecture" element={<Explore />} />
          <Route path="/explore/graphics" element={<Explore />} />
          <Route path="/explore/development" element={<Explore />} />
          <Route path="/explore/illustration" element={<Explore />} />
          <Route path="/explore/marketing" element={<Explore />} />
          <Route path="/explore/advertisement" element={<Explore />} />
          <Route path="/explore/visualarts" element={<Explore />} />
          <Route path="/browse-service" element={<ComeSoon />} />
          <Route path="/browse-request" element={<ComeSoon />} />
          <Route path="/post-request" element={<ComeSoon />} />
          <Route path="/help" element={<ComeSoon />} />
          <Route path="/user" element={<Protected><UserProfile /></Protected>} />
          <Route path="/candidate/detail" element={<Protected><Canditate /></Protected>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
