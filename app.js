((d, w, n) => {
  console.log({ d, w, n });

  const mDevices = n.mediaDevices;

  const ul = d.querySelector("#media-devices");
  const log = d.querySelector("#log");
  const video = d.querySelector("#video");

  // functions
  const listDevices = () => {
    mDevices
      .enumerateDevices()
      .then(devices => {
        ul.innerHTML = "";
        devices.forEach(device => {
          const li = d.createElement("li");
          li.innerHTML = `<small>${device.kind}</small><br /><strong>${device.label}</strong>`;
          ul.appendChild(li);
        });
      })
      .catch(console.error);
  };

  const playVideo = media => {
    video.srcObject = media;
    video.onloadedmetadata = () => {
      video.play();
    };
  };

  const logThat = text => {
    const date = `\n\n👆---- ${new Date().toLocaleString()} -----\n\n`;
    log.textContent = JSON.stringify(text) + date + log.textContent;
  };
  // functions

  mDevices
    .getUserMedia({ audio: true, video: true })
    .then(playVideo)
    .catch(console.error);

  listDevices();

  mDevices.addEventListener("devicechange", event => {
    logThat(event);
    listDevices();
  });

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
})(document, window, navigator);
