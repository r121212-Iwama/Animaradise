document.getElementById("start-sb").addEventListener("click", (e) => {
    // ボタンイベントのキャンセル
    e.preventDefault()
    // 入力チェック
    console.log("clicked!!")
    document.getElementById('menu-sb').style.display = "none"

})
// const start = () =>{
//     console.log("clicked!!")
//     document.getElementById('start-sb').style.display = "none"
// }