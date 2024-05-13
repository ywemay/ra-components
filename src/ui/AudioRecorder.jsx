import React, { useState } from 'react';
import { Button, ButtonGroup } from "@mui/material";
import RecordIcon from '@mui/icons-material/FiberManualRecord';
import StopIcon from '@mui/icons-material/Stop';
import SendIcon from '@mui/icons-material/Send';

export const AudioRecorder = ({url, length}) => {
  const [audioBlob, setAudioBlob] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const handleStartRecording = () => {
    const chunks = [];
    const stream = navigator.mediaDevices.getUserMedia({ audio: true });
    
    stream.then((mediaStream) => {
      const recorder = new MediaRecorder(mediaStream);
      setMediaRecorder(recorder);

      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
      };

      recorder.start();
      setRecording(true);
      setTimeout(() => {
        if (recorder.state === 'recording') {
          recorder.stop();
          setRecording(false);
        }
      }, length || 30000); // Record audio for 30 seconds
    });
  };

  const handleStopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleToggleRecording = () => {
    if (recording) {
      handleStopRecording();
    } else {
      handleStartRecording();
    }
  };

  const handleSendAudio = () => {
    if (audioBlob) {
      const formData = new FormData();
      const ogg = new File([audioBlob], 'speech.ogg');
      formData.set('audio', ogg, 'speech.ogg');
      formData.append('lang', 'English');

      fetch(url || 'http://localhost/translate_audio', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Audio sent successfully:', data);
      })
      .catch(error => {
        console.error('Error sending audio:', error);
      });
    }
  };

  return (
    <ButtonGroup>
      <Button 
        onClick={handleToggleRecording} 
        startIcon={ recording ? <StopIcon /> : <RecordIcon />}
      >
        {recording ? 'Stop Recording' : 'Start Recording'}
      </Button>
      <Button 
        startIcon={<SendIcon />}
        onClick={handleSendAudio} 
        disabled={!audioBlob}
      >
        Send Audio
      </Button>
    </ButtonGroup>
  );
};