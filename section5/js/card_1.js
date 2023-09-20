//트윈맥스 설명 
//https://greensock.com/docs/

//tweenMax easing
//https://greensock.com/docs/v3/Eases

//멋진 페이지 모음
//https://greensock.com/showcase/

let windowWidth;
let windowHeight;

window.onload = () => {
  const _cards = document.querySelectorAll(".cardItem");
  const _button1 = document.querySelectorAll("button")[0];
  const _button2 = document.querySelectorAll("button")[1];

  const resize = () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    cardSetting();
  };
  
  //초기화, 리셋 버튼 클릭시 실행
  const cardSetting = () => {
    _cards.forEach((item, i) => {
      //console.log(item)
      TweenMax.to(item, 1, {
        top : windowHeight / 2 - (i * 40),
        left : windowWidth / 2 + (i * 40 - 200),
        rotation : 0,
        ease : Power3.easeInOut, 
        delay : i * .2
      });
    });
  };

  const cardRandom = () => {
    _cards.forEach((item, i) => {
      TweenMax.to(item, 1, {
        top : Math.random() * windowHeight,
        left : Math.random() * windowWidth, 
        rotation : Math.random()*180, 
        ease : Power4.easeInOut, 
        delay : i * .1
      }); 
    });
  };

  // _cards.forEach((item, i) => {
  //   item.addEventListener("mouseover", () => {
  //     // item.style.left = windowWidth / 2 - 100;
  //     TweenMax.to(item, 0.2, {
  //       top : windowHeight / 2 - (i * 40),
  //       left : windowWidth / 2 + (i * 40 - 190),
  //       rotation : 0,
  //       ease : Power3.easeInOut, 
  //       // delay : i * .2
  //     });
  //   });
  // });

  // _cards.forEach((item, i) => {
  //   item.addEventListener("mouseleave", () => {
  //     TweenMax.to(item, 0.5, {
  //       top : windowHeight / 2 - (i * 40),
  //       left : windowWidth / 2 + (i * 40 - 200),
  //       rotation : 0,
  //       ease : Power3.easeInOut, 
  //       // delay : i * .2
  //     });
  //   });
  // });

  _button1.addEventListener("click", (e) => {
    cardRandom();
  });

  _button2.addEventListener("click", (e) => {
    cardSetting();
  });

  window.addEventListener("resize", () => {
    resize();
  });

  resize();
}


