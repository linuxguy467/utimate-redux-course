export const turnOn = () => {
  let a = 1;
  sendSignalA(a);
  // sendSignalB(b);
  console.log('TV is on');
};

const sendSignalA = (signal) => console.log(`Signal ${signal} is sent`);
// const sendSignalB = (signal) => console.log(`Signal ${signal} is sent`);
