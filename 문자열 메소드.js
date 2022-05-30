let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

for (let i; i<list.length; i++){
  console.log(list[i].slice(4));
};


// 금칙어 콜라
function hasCola(str) {
  if (str.indexOf('콜라') > -1){
    console.log('금칙어가 있습니다.');
  }else {
    console.log('통과');
  }
}

function hasCola2(str) {
  if (str.includes('콜라')) {
    console.log('금칙어가 있습니다.');
  }else {
    console.log('통과');
  }
}

hasCola('와 사이다가 짱이야!');   // -1
hasCola('무슨 소리, 콜라가 최고');
hasCola('콜라');   // 0

hasCola2('와 사이다가 짱이야!');   // -1
hasCola2('무슨 소리, 콜라가 최고');
hasCola2('콜라');   // 0