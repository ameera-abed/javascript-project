let submitbtn = document.getElementById("submit-btn");


// tweet button when we click on it
//submitbtn.onclick = function {

//}
// creat tweet function that creat tweet html element and add to page
function creatTweet() {
    let comment = document.createComment("creat new tweet");
    let arrDiv = [];
    for (let i = 0; i <= 6; i++) {
        arrDiv.push(document.createElement("div"));
    }
    console.log(arrDiv);

}
creatTweet();