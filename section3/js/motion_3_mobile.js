let prev_button, next_button;
let contentWrap;
let disk_inner;
let pageNum = 0;
let totalNum = 0;
let album;
let pointBtnAll;
let bgArray = new Array();
bgArray[0] = ["#0272a4","#f6a564"];
bgArray[1] = ["#b6bfc8","#36595b"];
bgArray[2] = ["#e58e82","#6f569f"];

window.onload = function(){
  prev_button = document.querySelectorAll("button")[0];
  next_button = document.querySelectorAll("button")[1];
  
  contentWrap = document.querySelector(".contentWrap");
  disk_inner = document.querySelectorAll(".disk_inner");
  album = document.querySelectorAll(".album");
  pointBtnAll = document.querySelectorAll(".pointWrap li");
  totalNum = album.length;
  let start_X = 0;
  let end_X = 0;

  const movePage = (move) => {
    if(move === "prev") {
      if(pageNum > 0){
        pageNum --;
      }else{
        pageNum = totalNum -1;
      }
    } else if(move === "next") {
      if(pageNum < totalNum-1){
        pageNum ++;
      }else{
        pageNum = 0;
      }
    }

    pageChangeFunc();
  };

  prev_button.addEventListener("click", function(){
    movePage("prev");
  });

  next_button.addEventListener("click", function(){
    movePage("next");
  });

  for( let i = 0; i < pointBtnAll.length; i++ ){
    ((idx) => {
      pointBtnAll[idx].onclick = function() {
        // alert(idx);
        pageNum = idx;
        pageChangeFunc();
      }
    })(i);
  }

  //alert(mobileChk())

  const touchFunc = (evt) => {
    // console.log(evt.type)
    // return false;
    // evt.preventDefault();
    let type = null;
    let touch = null;
    
    switch (evt.type) {
      case "touchstart":
        type = "mousedown";
        touch = evt.changedTouches[0];
        start_X = touch.clientX;
        // console.log("start_X : " + start_X);
        end_X = 0;
        break;
      // case "touchmove":
      //     type = "mousemove";
      //     touch = evt.changedTouches[0];
      //     console.log(touch)
      // break;
      case "touchend":
        type = "mouseup";
        touch = evt.changedTouches[0];
        end_X = touch.clientX;

        //console.log("end_X : "+ end_X);

        let chkNum = start_X - end_X;
        let chkNumAbs = Math.abs(chkNum);
        //console.log(chkNum)

        if(chkNumAbs > 100){
          // //터치를 많이 했으면 실행
          if(chkNum < 0) {
            //왼쪽으로 터치
            movePage("prev");
          } else {
            //오른쪽으로 터치
            movePage("next");
            //에러가 납니다.
            //수정해보세요.
          }
        }
        break;
    }
  };

  if(mobileChk()){
    contentWrap.addEventListener("touchstart", touchFunc, false);
    // contentWrap.addEventListener("touchmove", touchFunc, false);
    contentWrap.addEventListener("touchend", touchFunc, false);
  }

  //최초실행
  // pageNum = 2;
  pageChangeFunc();
}

//여기서 모든 것을 한다.
const pageChangeFunc = () => {
  // console.log(pageNum)
  contentWrap.style.background = "linear-gradient(120deg,"+ bgArray[pageNum][0] +", "+ bgArray[pageNum][1] + ")";

  for(let i=0; i<totalNum; i++) {
    if(pageNum === i){
      //현재 컨텐츠(페이지)
      album[i].classList.add("active");
      pointBtnAll[i].classList.add("active");
    }else{
      album[i].classList.remove("active");
      pointBtnAll[i].classList.remove("active");
    }
  }

  disk_inner[pageNum].style.background = bgArray[pageNum][0];
};


const mobileChk = () => {
  const mobileKeyWords = new Array("Android", "iPhone", "iPod", "BlackBerry", "Windows CE", "SAMSUNG", "LG", "MOT", "SonyEricsson");

  for (let info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      return true;
    }
  }

  return false;
};
