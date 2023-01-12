import {FormControl, FormGroup, Slider, Checkbox, FormControlLabel, Tooltip} from '@mui/material';
import { useState, useEffect } from 'react';
import { pink } from '@mui/material/colors';
import {TbCopy} from 'react-icons/tb';
import {BiRightArrowAlt} from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import Zoom from '@mui/material/Zoom';
import { fontFamily } from '@mui/system';

function App() {

  useEffect(() => {
    document.title = "PassMake"
  }, [])

  const [length, setLength] = useState(7);
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0);

  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(false);
  const [unicode, setUnicode] = useState(false);
  const [smile, setSmile] = useState(false);

  var checks = [upper,lower,numbers,special,unicode,smile];
  var checkCount = checks.filter(check => check === true).length;


  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specialArray = ['!', '@', '#', '£', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '='];
  const greeks = ['Γ', 'Δ', 'Θ', 'Λ', 'Ξ', 'Π', 'Ω', 'Σ'];

  const handleLength = (event, newValue) => {
    setLength(newValue);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const randomNum = (len) => {
    return Math.floor(Math.random() * (len - 1 + 1));
  }

  const notify = () => toast.success('Password Copied');

  const handleCopy = () => {
    if(password !== ''){
    navigator.clipboard.writeText(password)
    notify();
    }
    else{
      toast.error("Generate A Password")
    }
  }
  
  const generatePassword = () => {

    if(checkCount === 0){
      toast.error("Select Option(s)")
      return;
    }

    setPassword('');
    let newPass = '';
    let smileFlag = true;
    
    while(newPass.length < length){
      if(smile && newPass.length === length - 2 && smileFlag){
        newPass += ':)';
        smileFlag = false;
      }
      if(upper){
        let index = randomNum(upperCase.length);
        newPass += upperCase[index]
      }
      if(smile && newPass.length === length - 2 && smileFlag){
        newPass += ':)';
        smileFlag = false;
      }
      if(lower && newPass.length < length){
        let index = randomNum(lowerCase.length);
        newPass += lowerCase[index]
      }
      if(smile && newPass.length === length - 2 && smileFlag){
        newPass += ':)';
        smileFlag = false;
      }
      if(numbers && newPass.length < length){
        let index = randomNum(numbersArray.length);
        newPass += numbersArray[index]
      }
      if(smile && newPass.length === length - 2 && smileFlag){
        newPass += ':)';
        smileFlag = false;
      }
      if(special && newPass.length < length){
        let index = randomNum(specialArray.length);
        newPass += specialArray[index]
      }
      if(smile && newPass.length === length - 2 && smileFlag){
        newPass += ':)';
        smileFlag = false;
      }
      if(unicode && newPass.length < length){
        let index = randomNum(greeks.length);
        newPass += greeks[index]
      }
      if(smile && newPass.length === length - 2 && smileFlag){
        newPass += ':)';
        smileFlag = false;
      }
      
    }
    
    setPassword(newPass);
    toast('Password Generated', {
      icon: '🎉',
    });
  }


  return (
    <div className=" bg-[#0E0D12] h-screen w-full text-white font-semibold font-[jetbrains]">
      <Toaster />
      <div className=" flex flex-col  justify-center items-center h-screen">

          <h1 className=' text-[#686671] text-xl mb-5'><span className=' text-white'>Pass</span><span className=' text-[#A3FEAE]'>Make</span></h1>

          <div className="bg-[#23222A] w-[500px] h-[80px] rounded-[3px]">


            <div className=" flex justify-between items-center w-full h-full px-7 drop-shadow-lg">
              <h1 className=' text-2xl drop-shadow-lg'>{password}</h1>  
              <p onClick={() => handleCopy()} className={`  text-3xl hover:cursor-pointer transition-all hover:text-[#7dc185] ${password === '' ? 'text-[#A3FEAE]/30 hover:cursor-not-allowed' : 'text-[#A3FEAE]'}`}><TbCopy /></p>
            </div>

          </div>

        <div className="bg-[#23222A] w-[500px] h-auto rounded-[3px] mt-10 flex flex-col px-7 py-7"> 

          <div className=" flex w-auto justify-between items-center">

              <h1 className='mb-4'>Length</h1>
              <h1 className='mb-4 text-[30px] text-[#A3FEAE]'>{length}</h1>
            </div>

            <Slider sx={{color: '#A3FEAE'}} min={7} max={20} value={length} onChange={handleLength} aria-label="Default" valueLabelDisplay="auto" />

            <div className=" flex justify-evenly w-auto h-auto flex-wrap">
              <FormGroup className=' mt-4'>
                <FormControlLabel control={<Checkbox style={{color: '#A3FEAE'}} defaultChecked />} label="Uppercase" value={upper} onChange={() => setUpper(!upper)}  />
              </FormGroup>
              
              <FormGroup className=' mt-4'>
                <FormControlLabel control={<Checkbox style={{color: '#A3FEAE'}} defaultChecked />} label="Lowercase" value={lower} onChange={() => setLower(!lower)}  />
              </FormGroup>
              
              <FormGroup className=' mt-4'>
                <FormControlLabel control={<Checkbox style={{color: '#A3FEAE'}} defaultChecked />} label="Numbers" value={numbers} onChange={() => setNumbers(!numbers)}  />
              </FormGroup>
              
              <FormGroup className=' mt-4 relative right-[9px]'>
                <FormControlLabel control={<Checkbox style={{color: '#A3FEAE'}}  />} label="Special" value={special} onChange={() => setSpecial(!special)}  />
              </FormGroup>

              <FormGroup className=' mt-4'>
                <FormControlLabel control={<Checkbox style={{color: '#A3FEAE'}}  />} label="Unicode" value={unicode} onChange={() => setUnicode(!unicode)}  />
              </FormGroup>

              <FormGroup className=' mt-4 relative left-[5px]'>
                <FormControlLabel control={<Checkbox style={{color: '#A3FEAE'}}  />} label="Smile" value={smile} onChange={() => setSmile(!smile)}  />
              </FormGroup>
            
            </div>

            <div className="w-auto h-[75px] bg-[#191820] mt-[7px]">

              <div className=" flex w-full h-full justify-between items-center px-7">
                <h1 className=' text-[#686671]'>STRENGTH</h1>
                <h1 className={` text-2xl ${checkCount <= 2 ? 'text-red-400' : checkCount === 3 || checkCount === 4 || checkCount === 5 ? 'text-yellow-400' : checkCount === 6 ? 'text-green-400' : null}`}>{checkCount <= 2 ? 'WEAK' : checkCount === 3 || checkCount === 4 || checkCount === 5 ? 'MEDIUM' : checkCount === 6 ? 'STRONG' : null}</h1>
              </div>

            </div>

            <div className="w-auto ease-out h-[75px] hover:rounded-md transition-all hover:bg-[#7dc185] hover:border-[3px] hover:border-[#A3FEAE] bg-[#A3FEAE] mt-5 hover:cursor-pointer" onClick={() => generatePassword()}>
              <div className=" flex w-full h-full justify-center items-center">
                <h1 className=' text-black text-xl'>GENERATE</h1>
                <p className=' text-black text-2xl relative left-5'><BiRightArrowAlt /></p>
              </div>
            </div>

        </div>

        <div className=" flex gap-7 items-center justify-center w-auto h-auto relative top-[47px] text-3xl">
          <a href="https://github.com/miranamer"><Tooltip TransitionComponent={Zoom} placement="top" title="Github"><h1 className=' hover:cursor-pointer hover:scale-150 transition-all hover:text-purple-400 duration-300'><AiFillGithub /></h1></Tooltip></a>
          <a href="https://twitter.com"><Tooltip TransitionComponent={Zoom} placement="top" title="Twitter"><h1 className=' hover:cursor-pointer hover:scale-150 transition-all hover:text-blue-400 duration-300'><BsTwitter /></h1></Tooltip></a>
          <a href="https://instagram.com"><Tooltip TransitionComponent={Zoom} placement="top" title="Instagram"><h1 className=' hover:cursor-pointer hover:scale-150 transition-all hover:text-pink-400 duration-300'><AiFillInstagram /></h1></Tooltip></a>
        </div>

      </div>

    </div>
  );
}

export default App;
