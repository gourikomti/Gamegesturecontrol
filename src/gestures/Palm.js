
import {Finger , FingerCurl , FingerDirection , GestureDescription} from 'fingerpose';

export const palmGesture = new GestureDescription('JUMP');

//Thumb

palmGesture.addCurl( Finger.Thumb, FingerCurl.NoCurl ,0.75 );
palmGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

// Index Finger

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    palmGesture.addCurl( finger, FingerCurl.NoCurl , 0.9);
    palmGesture.addDirection(finger, FingerDirection.VerticalUp, 0.9);
  }

  palmGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft , 0.75);

