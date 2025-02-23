let submitbtn = document.getElementById("submit-btn");
let newsfeed = document.getElementById("newsfeed");
let textarea = document.querySelector("textarea");
let likebtn = document.getElementsByClassName("fa-heart");
userFromlocalStorge(document.getElementById("usernameTweet"));
userFromlocalStorge(document.getElementById("username"));
let tweetCounter = 0;
let tweets = [];



// check the textarea to enable tweet button
textarea.onkeyup = function() {
    if (textarea.value.length > 0) {
        submitbtn.disabled = false;
    } else {
        submitbtn.disabled = true;
    }
}

//creat tweet when click on tweet btn
submitbtn.addEventListener("click", creatEachElementtweet);

function creatEachElementtweet() {
    tweetCounter++;
    let tweetCounterClass = "tweet#" + tweetCounter;
    creatTweet(tweetCounterClass);
    creatObject();
    tweetItslfText(tweetCounterClass);
    tweetUser(tweetCounterClass);
    clearText();
    submitbtn.disabled = true;

}

// creat tweet function that creat tweet html element and add to page
function creatTweet(tweetCounterClass) {

    let arrDiv = [];
    let addClassArr = ["newTweet", "tname", "tweetItSelf", "tweetBtn", "tBtn", "tBtn"]
    arrDiv.push(document.createElement("div"));
    newsfeed.insertBefore(arrDiv[0], newsfeed.firstElementChild);
    arrDiv[0].classList.add(addClassArr[0]);
    for (let i = 1; i <= 5; i++) {
        arrDiv.push(document.createElement("div"));
        if (i <= 3) {
            arrDiv[0].appendChild(arrDiv[i]);
            arrDiv[i].classList.add(addClassArr[i], tweetCounterClass);
        } else {
            arrDiv[3].appendChild(arrDiv[i]);
            arrDiv[i].classList.add(addClassArr[i], tweetCounterClass);

        }
    }
    createBtn(arrDiv);


}

function createBtn(arrDiv) {

    let addClassArr1 = ["far", "fas", "fa-heart", "fa-retweet"]
    for (let i = 4; i <= 5; i++) {
        let s = document.createElement("i");
        arrDiv[i].appendChild(s);
        s.classList.add(addClassArr1[i - 4], addClassArr1[i - 2]);
        s.addEventListener('click', event => {
            s.classList.toggle("likebtnclick");
            if (s.classList.contains("fa-retweet")) {
                let tweetItselfclone = document.querySelector(".tweetItSelf").textContent;
                creatEachElementtweet();
                document.querySelector(".tweetItSelf").textContent = tweetItselfclone;

            }
        })

    }

}
//set  text of textarea to new tweet
function tweetItslfText(tweetCounterClass) {
    let tweetItself = document.getElementsByClassName(tweetCounterClass);
    tweetItself[1].textContent = textarea.value;
}
// get username from localstorge
function userFromLocal() {
    let user = localStorage.getItem("user");
    return user;
}
// set the user in tweetitself container
function tweetUser(tweetCounterClass) {
    let tname = document.getElementsByClassName(tweetCounterClass);

    tname[0].textContent = userFromLocal();
}
//clear content of textarea after tweet
function clearText() {
    textarea.value = "";
}

//creat object to store the tweet and push it to array
function creatObject() {
    const tweetsObject = {
        auther: localStorage.getItem("user"),
        tweetsContent: textarea.value
    }
    tweets.push(tweetsObject);
    console.log(tweets);
}
// get username from local storge 
function userFromlocalStorge(s) {
    s.textContent = localStorage.getItem("user");
}