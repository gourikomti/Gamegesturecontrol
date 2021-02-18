import {Finger , FingerCurl , FingerDirection , GestureDescription} from 'fingerpose';

export const rightGesture = new GestureDescription('RIGHT');

//Thumb

// rightGesture.addCurl( Finger.Thumb, FingerCurl.NoCurl , 0.5 );
// rightGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);

// Index Finger

rightGesture.addCurl( Finger.Index, FingerCurl.NoCurl ,1 );
rightGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1 );
rightGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5 );
rightGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5 );

for(let finger of [ Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rightGesture.addCurl( finger, FingerCurl.FullCurl , 0.9);
   // rightGesture.addDirection(finger, FingerDirection.HorizontalRight, 0.75);
  }

// for(let finger of [Finger.Thumb,Finger.Index , Finger.Middle, Finger.Ring, Finger.Pinky]) {
//          rightGesture.addCurl( finger, FingerCurl.NoCurl , 1);
//          rightGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1);
//       }
