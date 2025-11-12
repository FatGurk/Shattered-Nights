export function introVideoPlayer(videoSrc, onEndCallback) {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.autoplay = true;
    video.muted = true;
    video.style.position = "fixed"; 
    video.style.top = 0;
    video.style.left = 0;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.zIndex = 9999;
    video.style.objectFit = "cover"; // Fullscreen
    document.body.appendChild(video);

    // video play
    video.play().catch(err => console.warn("Video play prevented:", err));

    //Video remove
    video.addEventListener("ended", () => {
        video.remove();
        //byt t game scene
        if (typeof onEndCallback === "function") {
            onEndCallback();
        }
    });
}
export function endVideoPlayer(videoSrc, onEndCallback) {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.autoplay = true;
    video.muted = true;
    video.style.position = "fixed"; 
    video.style.top = 0;
    video.style.left = 0;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.zIndex = 9999;
    video.style.objectFit = "cover"; // Fullscreen
    document.body.appendChild(video);

    // video play
    video.play().catch(err => console.warn("Video play prevented:", err));

    //Video remove
    video.addEventListener("ended", () => {
        video.remove();
        //byt t game scene
        if (typeof onEndCallback === "function") {
            onEndCallback();
        }
    });
}