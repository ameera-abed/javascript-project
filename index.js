let submitbtn = document.getElementById("submit-btn");
let newsfeed = document.getElementById("newsfeed");

//tweet button when we click on it
submitbtn.onclick = function() {
        creatTweet();
    }
    // creat tweet function that creat tweet html element and add to page
function creatTweet() {
    let comment = document.createComment("creat new tweet");
    let arrDiv = [];
    let addClassArr = ["newTweet", "tname", "tweetItSelf", "tweetBtn", "tBtn", "tBtn"]
    arrDiv.push(document.createElement("div"));
    newsfeed.appendChild(arrDiv[0]);
    arrDiv[0].classList.add(addClassArr[0]);
    for (let i = 1; i <= 5; i++) {
        arrDiv.push(document.createElement("div"));
        if (i <= 3) {
            arrDiv[0].appendChild(arrDiv[i]);
            arrDiv[i].classList.add(addClassArr[i]);
        } else {
            arrDiv[3].appendChild(arrDiv[i]);
            arrDiv[i].classList.add(addClassArr[i]);
        }
    }


}