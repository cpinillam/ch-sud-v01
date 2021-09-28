
async function main() {
    const canvas = document.querySelector('canvas');
    const canvasContext = canvas.getContext('2d');
    const canvasAspectRatio = canvas.width / canvas.height;  
    
    const video = document.createElement('video');
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsinline = true;
    video.src = "http://okgooru.es/melquiades/video-final-v05.mp4";
    const maskImage = document.createElement('img');
    maskImage.src = "./img/layout/ink-hero.png";


  
    await Promise.all([
    video.play(),
      new Promise((resolve) => maskImage.addEventListener('load', resolve, {once: true})),
    ]);
  
    const videoAspectRatio = video.videoWidth / video.videoHeight;
  
    const [frameWidth, frameHeight] = canvasAspectRatio <= videoAspectRatio ? [canvas.height * videoAspectRatio, canvas.height] : [canvas.width, canvas.width / videoAspectRatio];
  
    const [frameTop, frameLeft] = [(canvas.height - frameHeight) / 2, (canvas.width - frameWidth) / 2];
  
    const maskAspectRatio = maskImage.naturalWidth / maskImage.naturalHeight;
  
    const [maskWidth, maskHeight] = canvasAspectRatio <= maskAspectRatio ? [canvas.width, canvas.width / maskAspectRatio] : [canvas.height * maskAspectRatio, canvas.height];
  
    const [maskTop, maskLeft] = [(canvas.height - maskHeight) / 2, (canvas.width - maskWidth) / 2];
  
    requestAnimationFrame(function frame() {
      canvasContext.globalCompositeOperation = 'destination-over';
      canvasContext.drawImage(maskImage, maskLeft, maskTop, maskWidth, maskHeight);
      canvasContext.globalCompositeOperation = 'source-in';
      canvasContext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, frameLeft, frameTop, frameWidth, frameHeight);
      requestAnimationFrame(frame);
    });
    
    canvas.addEventListener('click', () =>{

    
      video.muted = !video.muted ? true : false;
      })
   
  }
  
  
  self.addEventListener('DOMContentLoaded', () => main().catch(console.error), {once: true});  








