import {Finger , FingerCurl , FingerDirection , GestureDescription} from 'fingerpose';

export const leftGesture = new GestureDescription('LEFT');

leftGesture.addCurl( Finger.Index, FingerCurl.NoCurl ,1 );
leftGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, .75 );

for(let finger of [ Finger.Middle, Finger.Ring, Finger.Pinky]) {
    leftGesture.addCurl( finger, FingerCurl.FullCurl , 0.9);
   // rightGesture.addDirection(finger, FingerDirection.HorizontalRight, 0.75);
  }