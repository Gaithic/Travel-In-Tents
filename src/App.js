import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainComponent from './component/MainComponent/MainComponent';
import { EmailView, SignupView, UserView, SettingPassword} from './component/Signup/SignupComponent';

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<MainComponent/>} />
          <Route path="/email" element={<EmailView/>}/>
          <Route path="/signup" element={<SignupView/>}/>
          <Route path='/user-info' element={<UserView/>}/>
          <Route path='/setting-password' element={<SettingPassword/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
