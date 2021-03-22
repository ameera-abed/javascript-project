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
    createBtn(arrDiv);


}

function createBtn(arrDiv) {
    console.log(arrDiv);
    let addClassArr1 = ["far", "fas", "fa-heart", "fa-retweet"]
    for (let i = 4; i <= 5; i++) {
        let s = document.createElement("i");
        arrDiv[i].appendChild(s);
        s.classList.add(addClassArr1[i - 4], addClassArr1[i - 2]);

    }

}