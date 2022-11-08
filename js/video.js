var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = (video.volume*100) + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime)
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log("The current volume is " + video.volume)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = (video.volume*100) + "%"
	console.log("The current volume is " + video.volume)
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("The video is muted")
	let muteBtn = document.getElementById("mute");
	if (video.muted === false){
		video.muted = true;
		muteBtn.textContent = "Unmute"
	}
	else{
		video.muted = false;
		muteBtn.textContent = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
	console.log("The oldSchool class is added")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	console.log("The oldSchool class is removed")
});
