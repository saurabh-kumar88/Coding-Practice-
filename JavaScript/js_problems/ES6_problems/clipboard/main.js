function copy(){

  var copyText = document.querySelector('#input');
  copyText.select()
  document.execCommand("cut");
 
}

// browser.alarms.create({
//   delayInMinutes: 0.1
// });

// browser.alarms.onAlarm.addListener(copy);


navigator.clipboard.readText().then(
  clipText => document.querySelector("#input").value += clipText
);