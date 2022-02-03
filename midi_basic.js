if (navigator.requestMIDIAccess){
  navigator.requestMIDIAccess().then(success, failure);
}

// let music;

const start = document.querySelector("button");
start.addEventListener('click', () => {
  const music = new Audio('Te_Papa_Door_Slam-BD.wav');
})


function success(midiAcess){
  console.log(midiAcess);
  // midiAcess.onstatechange = updateDevice;
  midiAcess.addEventListener("statechange", updateDevice);
  const inputs = midiAcess.inputs;
  console.log(inputs)

  inputs.forEach((input) => {
    console.log(input);
    input.addEventListener("midimessage", handleInput)
  })
}


// 144 is noteon, 128 is noteoff

function handleInput(input){
  console.log(input)
  const command = input.data[0];
  const note = input.data[1];
  const velo = input.data[2];
  if (command == 144){
    let sound = "audio" + (note - 35) + "_1.wav"
    console.log(command, note, velo)
    const music = new Audio(sound)
    music.play()};
}


function updateDevice(event){
  console.log(event);
  // console.log('Name: ${event.port.name}, State: ${event.port.state}');
}


function failure() {
  console.log("Couldn't find device")
}
