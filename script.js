'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const quis = [
  {question:"好きな食べ物は何でしょう？", 
    answers:["えび", "いくら", "牡蠣", "うに"],
    correct:"いくら"},
  {question:"得意なスポーツは何でしょう？", 
    answers:["マラソン", "バスケ", "バレー", "テニス"],
    correct:"テニス"},
  {question:"やったことあるのはどれでしょう？", 
    answers:["バンジージャンプ", "トライアスロン", "シェアハウス", "スカイダイビング"],
    correct:"バンジージャンプ"}
  ]

//Q&Aを追加
function addQuis(n) {
  let quisN = quis[n];
  //Qを追加
  document.getElementById("question").innerText = quisN.question;
  //Aを追加
  for (let i = 0; i <= 3; i++) {
    document.getElementsByTagName("button")[i].innerText = quisN.answers[i];
    //クリックした要素を取得
    const buttons = document.getElementsByTagName("button");
    buttons[i].onclick = function checkAnswer() {
      if (buttons[i].textContent === quisN.correct) {
        alert("正解！！🥰🥰🥰");
        if (n + 1 < quis.length) {
          addQuis(n + 1);
        } else {
          alert("最後まで遊んでくれてありがとう～🎉🎉🎉")
        }
      } else {
        alert("不正解…😭😭😭");
      }
    }     
  }
}

addQuis(0);
