const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // 検索ボックスが空ではない場合のみ検索語を受け付けるようにします
  if (searchInput.value !== '') {
    // No.1
    myHistoty = myHistory.unshift('searchInput.value');
    // 表示中の一覧を空にして、同じ項目が表示されないようにして、
    // 結果は検索語が入力される度に毎回作り直されます。
    list.innerHTML = '';

    // 配列をループして、リスト内の全ての検索語を表示します
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 配列の長さが 5以上になったら一番古い検索語を削除します
    if (myHistory.length >= 5) {
      // No.2
        myHistry.pop();
    }

    // 次の検索語を受け付けるため、検索ボックスを空にしてフォーカスします
    searchInput.value = '';
    searchInput.focus();
  }
}
