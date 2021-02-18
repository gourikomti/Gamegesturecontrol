import React, {useRef , useState} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
//import logo from './logo.svg';
import Webcam from  "react-webcam";
import './App.css';
import {drawHand} from './utilities';
import {palmGesture} from './gestures/Palm';
import {rightGesture} from './gestures/right';
import {leftGesture} from './gestures/left';

import * as fp from 'fingerpose';
import handimage from './hand.jpg';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const[emo , setEmo] = useState(null);

 const runHandpose = async () =>{
   const net = await handpose.load()
   console.log('handpose model loaded')

   setInterval(() => {
     detect(net);
   },100);
 
 };

 const detect = async (net) =>{
   if(typeof webcamRef.current !== "undefined" &&
      webcamRef.current!==null &&
      webcamRef.current.video.readyState === 4
   ){
   //getting currrent video peoperties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;
    
    // setting properties to video
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;
    
    // setting properties to canvas
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    //make detections

    const hand = await net.estimateHands(video);


    if(hand.length > 0){
      const GE = new fp.GestureEstimator([
        // fp.Gestures.VictoryGesture,
        // fp.Gestures.ThumbsUpGesture,
        leftGesture,
        rightGesture,
        palmGesture
      ]);

      const gesture = await GE.estimate(hand[0].landmarks , 8.8);

      console.log(gesture)
      if(gesture.gestures !== undefined && gesture.gestures.length > 0){
        const confidence = gesture.gestures.map((prediction)=> prediction.confidence);
        const maxIndex = confidence.indexOf(Math.max.apply(null, confidence));

        setEmo(gesture.gestures[maxIndex].name);
        console.log(emo);

      }
    }

    const ctx = canvasRef.current.getContext("2d");
    drawHand(hand, ctx);


     }
 };

 runHandpose();


  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webcamRef}
        style = {{
          position :"absolute",
          marginLeft :"auto",
          marginRight :"auto",
          left :0,
          right :0,
          textAlign :"center",
          zindex :9,
          width : 640,
          height : 430
        }}/>

        <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "centre",
          zindex: 9,
          width: 640,
          height: 480,
        }}/>
        

        )
        
      </header>
    </div>
  ); 
}

export default App;
