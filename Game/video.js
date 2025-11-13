// Global music reference for cutscenes
export let currentCutsceneMusic = null;

export function introVideoPlayer(videoSrc, onEndCallback, musicSrc = null) {
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
    video.style.objectFit = "cover";
    document.body.appendChild(video);

    // Play music
    if (musicSrc) {
        currentCutsceneMusic = new Audio(musicSrc);
        currentCutsceneMusic.loop = false;
        currentCutsceneMusic.volume = 0.5;
        currentCutsceneMusic.play().catch(err => console.warn("Music play prevented:", err));
    }

    // video play
    video.play().catch(err => console.warn("Video play prevented:", err));

    //Video bort
    video.addEventListener("ended", () => {
        video.remove();
        // Don't pause music - let it continue or be managed by next scene
        if (typeof onEndCallback === "function") {
            onEndCallback();
        }
    });
}

export function endVideoPlayer(videoSrc, onEndCallback, musicSrc = null) {
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
    video.style.objectFit = "cover";
    document.body.appendChild(video);

    // Play music
    if (musicSrc) {
        currentCutsceneMusic = new Audio(musicSrc);
        currentCutsceneMusic.loop = false;
        currentCutsceneMusic.volume = 0.5;
        currentCutsceneMusic.play().catch(err => console.warn("Music play prevented:", err));
    }

    // video play
    video.play().catch(err => console.warn("Video play prevented:", err));

    //Video bort
    video.addEventListener("ended", () => {
        video.remove();
        // Don't pause music - let it continue to credits
        if (typeof onEndCallback === "function") {
            onEndCallback();
        }
    });
}