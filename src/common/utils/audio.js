import newMessageSound from "../../assets/audio/new-message.mp3";

class NotificationAudio {
  audio = new Audio(newMessageSound);
  play() {
    var playedPromise = this.audio.play();
    if (playedPromise) {
      playedPromise.catch((e) => {});
    }
  }
}

export default new NotificationAudio();
