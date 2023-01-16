var muted = false;
var volumeState = 0;
var volumeCounter = 1;
var actualVolume = 0;

document.addEventListener("keydown", (data) => {

  if (document.activeElement === document.querySelector(`input`)) return; // Avoids using keys while the user interacts with any input, like search.
  const ytShorts = document.querySelector(
    "#shorts-player > div.html5-video-container > video"
  );

  const key = data.key.toLowerCase();

  switch (key) {
    case "s":
      console.log('asd')
      document.getElementById(`ytPlayback${getCurrentId()}`).click();
      break;

    case "j":
      console.log('xcv')
      ytShorts.currentTime -= 5;
      break;

    case "l":
      ytShorts.currentTime += 5;
      break;

    case "u":
      if (ytShorts.playbackRate > 0.25) ytShorts.playbackRate -= 0.25;
      break;

    case "i":
      ytShorts.playbackRate = 1;
      break;

    case "o":
      if (ytShorts.playbackRate < 16) ytShorts.playbackRate += 0.25;
      break;

    case "+":
      if (ytShorts.volume <= 0.975) {
        setVolume(ytShorts.volume + 0.025);
      }
      break;

    case "-":
      if (ytShorts.volume >= 0.025) {
        setVolume(ytShorts.volume - 0.025);
      }
      break;

    case "m":
      if (!muted) {
        muted = true;
        volumeState = ytShorts.volume;
        ytShorts.volume = 0;
      } else {
        muted = false;
        ytShorts.volume = volumeState;
      }
      break;
  }
  setSpeed = ytShorts.playbackRate;
});

const getCurrentId = () => {
  const videoEle = document.querySelector(
    "#shorts-player > div.html5-video-container > video"
  );

  if (videoEle) return videoEle.closest("ytd-reel-video-renderer").id;
  return null;
};

const getActionElement = (id) =>
  document.querySelector(
    `[id='${id}']  > div.overlay.style-scope.ytd-reel-video-renderer > ytd-reel-player-overlay-renderer > #actions`
  );

const setTimer = (currTime, duration) => {
  document.getElementById(
    `ytTimer${getCurrentId()}`
  ).innerText = `save`;
  // ).innerText = `${currTime}/${duration}s`;
};

const setVolumeSlider = () => {
  let index = parseFloat(getCurrentId()) + volumeCounter;
  // const volumeContainer = document.querySelectorAll(`yt-icon-button.style-scope.ytd-shorts-player-controls`)[index].parentNode;
  // const slider = document.createElement('input');

  if (!actualVolume) {
    actualVolume = 0.5;
  }

  checkVolume();

  slider.id = "volumeSliderController";
  slider.classList.add("volumeSlider");
  slider.type = 'range';
  slider.min = 0;
  slider.max = 1;
  slider.step = 0.01;
  // volumeContainer.appendChild(slider);
  slider.value = actualVolume;

  slider.addEventListener("input", (data) => {
    data.stopPropagation();
    data.preventDefault();
    data.stopImmediatePropagation();

    setVolume(data.target.value);
  });
  volumeCounter++;
};

const setVolume = (volume) => {
  const volumeContainer = document.querySelectorAll(`yt-icon-button.style-scope.ytd-shorts-player-controls`)[parseFloat(getCurrentId()) + (volumeCounter - 1)].parentNode;
  const volumeSliderController = volumeContainer.children.volumeSliderController;
  volumeSliderController.value = volume;

  const ytShorts = document.querySelector(
    "#shorts-player > div.html5-video-container > video"
  );
  ytShorts.volume = volume;
  localStorage.setItem("yt-player-volume", `{
      "data": {\"volume\":`+ volume + `,\"muted\":` + muted + `}
    }`)
}

const checkVolume = () => {
  let ytShorts = document.querySelector(
    "#shorts-player > div.html5-video-container > video"
  );
  if (JSON.parse(localStorage.getItem("yt-player-volume"))["data"]["volume"]) {
    actualVolume = JSON.parse(localStorage.getItem("yt-player-volume"))["data"]["volume"];
    ytShorts.volume = actualVolume;
  } else {
    actualVolume = ytShorts.volume;
  }
};

// const setPlaybackRate = (currSpeed) => {
const setPlaybackRate = (text, currentId, isAvailable) => {

  // <svg viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
  //   <g class="style-scope yt-icon">
  //     <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8411 11.9977C26.6778 11.9977 27.4597 12.414 27.9268 13.1082C28.6951 14.2498 28.6876 15.745 27.908 16.8789L27.1796 17.9383L27.8546 19.5037C28.257 20.4368 28.1597 21.5102 27.596 22.3558L26.4999 24V25.9977C26.4999 27.1023 25.6044 27.9977 24.4999 27.9977L11.9999 27.9976C10.8953 27.9976 9.99987 27.1022 9.99987 25.9976V12.8264C9.99987 11.9927 10.2604 11.1799 10.7449 10.5015L15.8632 3.33586C16.0776 3.03569 16.4721 2.92531 16.8112 3.07062C18.5762 3.82706 19.5347 5.74955 19.0766 7.6144L17.9999 11.9976L25.8411 11.9977ZM5 13.4999C3.89543 13.4999 3 14.3954 3 15.4999V25.9999C3 27.1045 3.89543 27.9999 5 27.9999H8V13.4999H5Z" class="style-scope yt-icon">
  //     </path>
  //   </g>
  // </svg>

  // <svg class="style-scope yt-icon">
  //   <g class="style-scope yt-icon">
  //     <path class="style-scope yt-icon" d="M25.8411 11.9977C26.6778 11.9977 27.4597 12.414 27.9268 13.1082C28.6951 14.2498 28.6876 15.745 27.908 16.8789L27.1796 17.9383L27.8546 19.5037C28.257 20.4368 28.1597 21.5102 27.596 22.3558L26.4999 24V25.9977C26.4999 27.1023 25.6044 27.9977 24.4999 27.9977L11.9999 27.9976C10.8953 27.9976 9.99987 27.1022 9.99987 25.9976V12.8264C9.99987 11.9927 10.2604 11.1799 10.7449 10.5015L15.8632 3.33586C16.0776 3.03569 16.4721 2.92531 16.8112 3.07062C18.5762 3.82706 19.5347 5.74955 19.0766 7.6144L17.9999 11.9976L25.8411 11.9977ZM5 13.4999C3.89543 13.4999 3 14.3954 3 15.4999V25.9999C3 27.1045 3.89543 27.9999 5 27.9999H8V13.4999H5Z">
  //     </path>
  //   </g>
  // </svg>



  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );


  iconSvg.setAttribute('id', 'asd');
  iconSvg.setAttribute('fill', '36px');
  iconSvg.setAttribute('height', '36px');
  iconSvg.setAttribute('viewBox', '-3 -6 36.00 36.00');
  iconSvg.setAttribute('fill', 'none');

  iconSvg.setAttribute('stroke', '#f1f1f1');
  iconSvg.classList.add(`post-icon${currentId}`);

  iconG.setAttribute('transform', 'translate(0,-289.0625)');

  iconPath.setAttribute('d', 'M 8.9999994,292.06249 H 20.999999 c 1.108,0 1.999999,0.892 1.999999,2 l 2e-6,22.00001 -8,-6 -8,6 1e-7,-22 c 0,-1.108 0.892,-1.99989 1.9999999,-2 z');
  // iconPath.setAttribute('stroke', '#ffffff');
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-width', '0.792');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('style', 'fill:#0f0f0f');
  // iconPath.setAttribute('stroke-width', '2');

  iconSvg.appendChild(iconG);
  iconG.appendChild(iconPath);

  const iconSvg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconG2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const iconPath2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );


  iconSvg2.setAttribute('fill', '36px');
  iconSvg2.setAttribute('height', '36px');
  iconSvg2.setAttribute('viewBox', '-3 -6 36.00 36.00');
  iconSvg2.setAttribute('fill', 'none');

  iconSvg2.setAttribute('stroke', '#f1f1f1');
  iconSvg2.classList.add(`post-icon${currentId}`);

  iconG2.setAttribute('transform', 'translate(0,-289.0625)');

  iconPath2.setAttribute(
    'd',
    'M 8.9999994,292.06249 H 20.999999 c 1.108,0 1.999999,0.892 1.999999,2 l 2e-6,22.00001 -8,-6 -8,6 1e-7,-22 c 0,-1.108 0.892,-1.99989 1.9999999,-2 z'
  );
  // iconPath.setAttribute('stroke', '#ffffff');
  iconPath2.setAttribute('stroke-linecap', 'round');
  iconPath2.setAttribute('stroke-width', '0.792');
  iconPath2.setAttribute('stroke-linejoin', 'round');
  iconPath2.setAttribute('style', 'fill:#f1f1f1');
  // iconPath.setAttribute('stroke-width', '2');

  iconSvg2.appendChild(iconG2);
  iconG2.appendChild(iconPath2);

  // document.getElementById(
  //   `svgId${currentId}`
  // ).innerHTML = "";

  if (isAvailable === "1") {
    document.getElementById(
      `timerContainer${currentId}`
    ).style.backgroundColor = "#f1f1f1"; // icon 1x change

    // document.getElementById(
    //   `ytPlayback${getCurrentId()}`
    // ).removeChild(document.getElementById(
    //   `ytPlayback${getCurrentId()}`
    // )).firstElementChild;

    // console.log('sssssss', document.getElementsByClassName(
    //   `post-icon${currentId}`
    // ))

    // console.log(
    //   document.querySelector(
    //     "#shorts-player > div.html5-video-container > video"
    //   )
    // )

    // document.getElementsByClassName(
    //   `post-icon${currentId}`
    // ).innerHTML = "";

    let temp = document.getElementById(
      `ytPlayback${getCurrentId()}`
    )

    // console.log('temp', temp.children[0])

    if (temp.children[0]) {
      // console.log('yyyyyy', temp.childrem)
      temp.removeChild(temp.children[0]);
    }

    document.getElementById(
      `ytPlayback${getCurrentId()}`
    ).append(iconSvg);


  } else {
    document.getElementById(
      `timerContainer${currentId}`
    ).style.backgroundColor = "#272727"; // icon 1x c

    // document.getElementById(
    //   `ytPlayback${getCurrentId()}`
    // ).removeChild(document.getElementById(
    //   `ytPlayback${getCurrentId()}`
    // )).firstElementChild;

    // document.getElementsByClassName(
    //   `post-icon${currentId}`
    // ).innerHTML = "";

    // document.getElementById(
    //   `ytPlayback${getCurrentId()}`
    // ).removeChild(document.getElementById(
    //   `ytPlayback${getCurrentId()}`
    // ).firstElementChild);


    let temp = document.getElementById(
      `ytPlayback${getCurrentId()}`
    )

    // console.log('temp', temp.children[0])

    if (temp.children[0]) {
      // console.log('yyyyyy', temp.childrem)
      temp.removeChild(temp.children[0]);
    }

    document.getElementById(
      `ytPlayback${getCurrentId()}`
    ).append(iconSvg2);


  }
  // ).innerHTML = `${currSpeed}x`; // icon 1x change
};

var injectedItem = new Set();
var lastTime = -1;
var lastSpeed = 0;
var setSpeed = 1;

const timer = setInterval(() => {
  const ytShorts = document.querySelector(
    "#shorts-player > div.html5-video-container > video"
  );

  var currentId = getCurrentId();
  var actionList = getActionElement(currentId);

  if (injectedItem.has(currentId)) {

    var currTime = Math.round(ytShorts.currentTime);
    var currSpeed = ytShorts.playbackRate;

    if (currTime !== lastTime) {
      setTimer(currTime, Math.round(ytShorts.duration || 0));
      lastTime = currTime;
    }
    if (currSpeed != lastSpeed) {
      // setPlaybackRate('cvb');
      lastSpeed = currSpeed;
    }
  } else {
    lastTime = -1;
    lastSpeed = 0;

    if (actionList) {
      //Container div
      const timerContainer = document.createElement("div");
      timerContainer.classList.add("betterYT-container");
      timerContainer.id = `timerContainer${currentId}`;

      // Timer
      const ytTimer = document.createElement("div");
      var para0 = document.createElement("p");
      para0.classList.add("betterYT");
      para0.id = `ytTimer${currentId}`;
      ytTimer.appendChild(para0); // time

      // Playback Rate
      const ytPlayback = document.createElement("div");
      var para1 = document.createElement("p");
      para1.classList.add("betterYT");
      para1.classList.add("playBack");
      para1.id = `ytPlayback${currentId}`;

      para1.onclick = function () {
        // console.log(`${currentId}`);
        // setPlaybackRate('asd')


        const embeddedUrl = document.querySelector(
          "#shorts-player > div.ytp-chrome-top > div.ytp-title > div.ytp-title-text > a"
        ).href;

        let embeddedUrlId = embeddedUrl.substring(embeddedUrl.indexOf('=') + 1)

        // // chrome.storage.local.clear(function () {
        // //   var error = chrome.runtime.lastError;
        // //   if (error) {
        // //     console.error(error);
        // //   }
        // //   // do something more
        // // });
        // // chrome.storage.sync.clear(); // callback is optional

        // chrome.storage.local.get().then((result) => {
        //   let size = Object.keys(result).length;

        //   let idsObj = {}

        //   if (size === 0) {
        //     idsObj['0'] = embeddedUrlId;
        //   } else {
        //     idsObj[Number(Object.keys(result)[size - 1]) + 1] = embeddedUrlId;
        //   }

        //   chrome.storage.local.set(idsObj).then(() => {
        //     // console.log("Value is set to " + "one");
        //   });
        // });

        // chrome.storage.local.get().then((result) => {
        //   // console.log("Value currently is " + result.embeddedUrlId);
        //   // console.log(JSON.stringify(result))
        // });


        console.log('ee')

        let idsObj = {}
        let urlExists = localStorage.getItem(embeddedUrlId)

        console.log('urlExists', urlExists)

        if (!urlExists) {
          setPlaybackRate('added', currentId, "1");
          localStorage.setItem(embeddedUrlId, embeddedUrlId)
          idsObj[embeddedUrlId] = "add";
        } else {
          setPlaybackRate('add', currentId, "0");
          localStorage.removeItem(embeddedUrlId)
          idsObj[embeddedUrlId] = "remove";
        }

        // idsObj[embeddedUrlId] = "search";

        chrome.runtime.sendMessage(idsObj, function (res) { console.log('asd--', res) });

      };

      ytPlayback.appendChild(para1); // icon 1x

      timerContainer.appendChild(ytPlayback); // icon 1x
      actionList.insertBefore(timerContainer, actionList.children[1]);
      actionList.insertBefore(ytTimer, actionList.children[2]);
      injectedItem.add(currentId);

      const embeddedUrl = document.querySelector(
        "#shorts-player > div.ytp-chrome-top > div.ytp-title > div.ytp-title-text > a"
      ).href;

      let embeddedUrlId = embeddedUrl.substring(embeddedUrl.indexOf('=') + 1)

      let urlExists = localStorage.getItem(embeddedUrlId)

      if (urlExists) {
        setPlaybackRate('added', currentId, "1");
      } else {
        setPlaybackRate('add', currentId, "0");
      }

      ytShorts.playbackRate = setSpeed;
      // setPlaybackRate(setSpeed);


      setTimer(currTime || 0, Math.round(ytShorts.duration || 0));

      timerContainer.addEventListener("click", (data) => {


        ytShorts.playbackRate = 1;
        setSpeed = ytShorts.playbackRate;
      });
    }
    setVolumeSlider();
  }
  checkVolume();
}, 100);
