let wrap;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let isMobile = false;
let isIos = false;

const loopMobile = () => {
  mx += (x - mx) * .1;
  my += (y - my) * .1;

  wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my - 50}deg) rotateY(${mx}deg)`;
  
  window.requestAnimationFrame(loopMobile);
};

const loop = () => {
  //가속도 설정. 뒤의 값을 변경하면 가속도 값 변경
  mx += (x - mx) * .1;
  my += (y - my) * .1;

  //마우스 위치에 따른 대상의 움직임 위치 셋팅
  wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my / 10}deg) rotateY(${-mx / 10}deg)`;

  //반복 실행
  window.requestAnimationFrame(loop);
};


const mobileChk = () => {
  const mobileKeyWords = new Array('Android', 'iPhone', 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
  for ( let info in mobileKeyWords ) {
    if ( navigator.userAgent.match(mobileKeyWords[info]) != null ) {
      return true;
    }
  }

  return false;
};

const iosChk = () => {
  const mobileKeyWords = new Array('iPhone', 'iPad');
  for (let info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
          return true;
      }
  }

  return false;
};

window.onload = () => {
  wrap = document.querySelector(".contentWrap");
  isMobile = mobileChk();
  isIos = iosChk();

  const button = document.querySelectorAll("button")[0];

  button.addEventListener("click", function () {
    button.classList.add("dimd");
    wrap.classList.add("active");

    if (isMobile) {
      const mobileOrientationChk = () => {
        window.addEventListener("deviceorientation", function (event) {
          //디바이스가 움직임 감지될때 실행
          x = event.gamma;
          y = event.beta;
        });

        loopMobile();
      };
      
      //모바일이면 실행
      if(isIos){
        //ios일때만 실행
        DeviceOrientationEvent.requestPermission()
        .then(() => {
          // console.log('DeviceOrientationEvent, DeviceMotionEvent enabled');
          mobileOrientationChk();
        })
        .catch( 
          console.error 
        );

      }else{
        mobileOrientationChk();
      }
    } else {
      //pc면 실행
      window.addEventListener("mousemove", (e) => {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
        //마우스 위치값을 화면의 정가운데가 0,0이 되도록 맞춤
      });

      loop();
    }
  });
};