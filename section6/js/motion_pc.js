let wrap;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;

const loop = () => {
  //가속도 설정. 뒤의 값을 변경하면 가속도 값 변경
  mx += (x - mx) * 0.1;
  my += (y - my) * 0.1;

  // //마우스 위치에 따른 대상의 움직임 위치 셋팅
  wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my / 10}deg) rotateY(${-mx / 10}deg)`;

  //반복 실행
  window.requestAnimationFrame(loop);
};

window.onload = () => {
  wrap = document.querySelector(".contentWrap");

  window.addEventListener("mousemove", (e) => {
    // console.log(e.clientY-window.innerHeight / 2)
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
    //마우스 위치값을 화면의 정가운데가 0,0이 되도록 맞춤
    // console.log(x, y);
  });

  loop();
};

