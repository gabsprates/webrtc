((d, w, n) => {
  console.log({ d, w, n });

  const video = d.createElement("video");
  d.body.appendChild(video);

  const openMediaDevices = () =>
    n.mediaDevices.getUserMedia({ audio: true, video: true });

  openMediaDevices().then(media => {
    video.srcObject = media;
    video.onloadedmetadata = () => {
      video.play();
    };
  });

  console.log("vai dá bom");
})(document, window, navigator);
