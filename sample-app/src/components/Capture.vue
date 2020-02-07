<template>
<div id="capture-control">
    <div class="row mb-4">
        <div id="capture-display-div">
        <p id=capture-display>{{ timerDisplay }}</p>
        </div>
    </div>
    <div class="row mb-4">

        <div>
            <button class="btn start-capture-btn" type="button" @click="startTimer()" :disabled="captureStartDisabled">キャプチャ開始</button> |
            <button class="btn stop-capture-btn" type="button" @click="stopTimer(); customAlert();" :disabled="captureStopDisabled">キャプチャ終了</button>
            <div id="worker-div" style="display:none;"> </div>
            <div id="idAlert" v-show="idAlertShow">
                <div id="dialog-area">
                    <div id="dialog-style-box">
                    <p id="dialog-msg"></p>
                    </div>
                    <div id="dialog-display-area">
                    <div id="idAlertMessage">{{ alertMessage }}</div>
                    </div>
                </div>
                <div style="text-align:center;">
                    <button class="btn" id="upload-btn" type="button" @click="customAlertClose(); downloadProcess();">はい</button>
                    <button class="btn" id="upload-cancel-btn" type="button" @click="customAlertClose()">いいえ</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'capture-control',
  data() {
    return {
      captureStartDisabled: false,
      captureStopDisabled: true,
      alertMessage: 'キャプチャした動画をダウンロードしますか？',
      timerDisplay: '00:00:00',
      idAlertShow: false,
      worker: null,
      tracks: [],
      mediaStream: null,
      rec: null,
      chunks: [],
      bb: null,
      jsBlob: null,      
    }
  },
  methods: {
    startTimer() {
      navigator.mediaDevices.getDisplayMedia({audio: false, video: true}).then(stream => {
        this.tracks = [...stream.getTracks()]
        this.mediaStream = new MediaStream(this.tracks)
        this.rec = new MediaRecorder(this.mediaStream)
        this.chunks = []

        this.rec.ondataavailable = ev => this.chunks.push(ev.data)
        this.rec.start()

        this.captureStartDisabled = true
        this.captureStopDisabled = false

          this.bb = new Blob(["let msec = 0; let sec  = 0; let min  = 0; let hour = 0; function timerUp(){msec += 1;if (msec > 9) {msec = 0;sec += 1;}if (sec > 59) {sec = 0;min += 1;}if (min > 59) {min = 0;hour += 1;}if (sec < 10) {secNumber = '0' + sec.toString();} else {secNumber = sec;}if (min < 10) {minNumber = '0' + min.toString();} else {minNumber = min;}if (hour < 10) {hourNumber = '0' + hour.toString();} else {hourNumber = hour;}postMessage(hourNumber + ':' + minNumber + ':' + secNumber)};onmessage = function( event ){setInterval(function(){timerUp()},100)};"], {type : "text/javascript"} );
          // 上記Blob文字列をJSファイルとしてBlob作成
          this.jsBlob = window.URL.createObjectURL(this.bb)
          // jsBlobURLを使ってWeb Workerを生成
          this.worker = new Worker( this.jsBlob )

          this.worker.onmessage = function (event) {
            console.log(event.data)
              document.getElementById("capture-display").innerHTML = event.data
              //this.timerDisplay = event.data できない・・
          }
          this.worker.postMessage('')
      })
    },
    stopTimer(){
      this.rec.stop()
      // worker を終了させる場合は実行。
      this.worker.terminate()
      this.worker = null
      this.mediaStream.getTracks().forEach(track => track.stop())
    },
    customAlert(){
      // ダイアログの表示
      this.idAlertShow = true
      this.captureStartDisabled = true
      this.captureStopDisabled = true
    },
    customAlertClose(){
      // ダイアログを閉じる
      this.idAlertShow = false
      this.captureStartDisabled = false
      this.captureStopDisabled = true
      document.getElementById("capture-display").innerHTML = '00:00:00'
      // ここも仮想DOMでの更新はできず。直接DOM操作してるからthis.timerDisplay ='00:00:00'は直接DOM操作に勝てないのだろうか？
    },
    downloadProcess(){
      const webm = new Blob(this.chunks, { 'type' : 'video/webm' });
      const url = window.URL.createObjectURL(webm)
      const a = document.createElement('a')
      a.setAttribute('href', url)
      a.setAttribute('download', 'rec.webm')
      a.click()
    }


  },
  created() {
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>