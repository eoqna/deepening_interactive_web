//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]

window.onload = () => {
  const starBg = document.querySelector(".starBg");
  const title = document.querySelector(".title");

  //스크롤 이벤트
  window.addEventListener("scroll", (e) => {
    // scrollTop = document.documentElement.scrollTop;
    const scroll = this.scrollY;
    // console.log(scrollY / 5)
    starBg.style.transform = `translateY(${-scroll/3}px)`;
    title.style.transform = `translateY(${scroll/1.7}px)`;
  });

  //스크롤 이동
  setTimeout(() => {
    window.scrollTo({
      top: document.querySelector(".bottom").offsetTop
      ,behavior: "smooth"
    });
    // document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });

  }, 2000);
}


