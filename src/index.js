import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
}; //未完了リストから要素削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //完了リストに追加
    const addText = completeButton.parentNode;
    //TODO内容
    const text = addText.firstElementChild.innerText;

    //div以下を初期化
    addText.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteText = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteText);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addText.appendChild(li);
    addText.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addText);
  });

  //buttonタグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの小要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
