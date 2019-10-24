
// // ---------------------------observer
// $(document).ready(function () {
//     var target = document.getElementById("myList");

//      var config = {//observerのsetting
//         childList: true,//子要素を変化を監視
//         subtree: true,//対象ノードとその子孫ノードに対する変更を監視
//         attributes: true,//属性に対する変更を監視
//         characterData: true//文字データの変化を監視
//         //attributeFilter: ['class','style']//特定の属性の配列変化を監視
//     };
// //note this observe method
// //observer methodを使用する宣言
//     observer.observe(target, config);
//     console.log(target)
// });

// // observerインスタンスを作成+中身が変化すれば実行される処理
// var observer = new MutationObserver(function (mutationRecords, observer) {
//     mutationRecords.forEach(function (mutation) {
//         // console.log("mutation change in ", mutation.type, " name: ",mutation.target);
//         //mutation.typeは変化した属性がなんなのかを表示
//         //li id ="ここ"を変えるとattributes(属性)
//         //li <=ここを変えるとchildlistになる？
//         //li id ="super"><a href="#">ここ</a>
//         // ここを変えるとcharacterDataになる

//         //mutation.targetは、変化した要素の値
//         //変化した要素の変化後の値を取ってくる


//     });
// });
// // var observer = new MutationObserver

// //btn押せば発火する、liを追加する処理
// function add() {
//     var index = $("ul li").length;
//     var listItem = document.createElement("li");
//     listItem.textContent = index + 1;
//     var target = document.getElementById("myList").appendChild(listItem, "before");
// }


