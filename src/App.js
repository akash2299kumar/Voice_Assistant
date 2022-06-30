import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';
import Nav from './Component/Nav'

const App = () =>  {
  const commands = [ {
    command: 'reset',
    callback:({resetTranscript}) => resetTranscript()
  },
  {
    command: 'open *',
    callback: (site) => {
      window.open('http://' +site +'.com')
    }
  },

]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    
   <>
    <div className='yo'>
    <Nav />
      
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <div className='btn'>
      <button onClick={SpeechRecognition.startListening({continuous: true, language: 'en-GB'})}><i className="stop fa-solid fa-microphone-lines"></i></button>
      <button onClick={SpeechRecognition.stopListening}><i className="stop fa-solid fa-microphone-lines-slash"></i></button>
      <button onClick={resetTranscript}><i className="stop fa-solid fa-arrows-rotate"></i></button>
      </div>
      <div className='trans'>
      <p>{transcript}</p>
      </div>
      
    </div>
    </>
  );
};
export default App;