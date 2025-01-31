import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './actual-UI/Navbar.jsx';
import Footer from './actual-UI/Footer.jsx';
import Landing from './actual-UI/Landing.jsx';
import Login from './actual-UI/Login.jsx';
import Register from './actual-UI/Register.jsx';
import Careers from './actual-UI/Careers.jsx';
import Job_Search from './actual-UI/Job_Search.jsx';
import JobSeekerUI from './jobbers-UI/JobSeekerUI.jsx';
import { AuthContext } from './context/AuthProvider.jsx';
import Profile from './jobbers-UI/UserProfile.jsx';
import Exampl from './actual-UI/Example.jsx';

const App = () => {
  const { userLoggedIn } = useContext(AuthContext);

  const DynamicComponent = ({ children }) => {
    if (children) {
      if (userLoggedIn) {
        return (<>
          {children}
          <Footer />
        </>)
      } else {
        return (<>
          <Navbar />
          {children}
          <Footer />
        </>)
      }
    } else {
      if (userLoggedIn) {
        return (<>
          <JobSeekerUI />
          <Footer />
        </>)
      } else {
        return (<>
          <Navbar />
          <Landing />
          <Footer />
        </>)
      }
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DynamicComponent />} />
        <Route path="/job_search" element={<DynamicComponent> <Job_Search /> </DynamicComponent>} />
        <Route path="/careers" element={<DynamicComponent><Careers /></DynamicComponent>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/example" element={<Exampl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
