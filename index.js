let submitbtn = document.getElementById("submit-btn");
let newsfeed = document.getElementById("newsfeed");
let textarea = document.querySelector("textarea");
let likebtn = document.getElementsByClassName("fa-heart");
let tweetCounter = 0;



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
                console.log(tweetItselfclone);
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
    console.log("tname");
    tname[0].textContent = userFromLocal();
}
//clear content of textarea after tweet
function clearText() {
    textarea.value = "";
}
//like btn 


//likebtn[tweetCounter].addEventListener("click", function() {
//  likebtn[0].classList.toggle("likebtnclick");
//});
//setInterval(clicklike(), 100);

/*function clicklike() {
    let r = document.querySelectorAll('.fa-heart');
    console.log(r);
    for (let j = 0; j < r.length; j++) {
        r[j].addEventListener('click', event => {
            r[j].classList.toggle("likebtnclick");
        })
    }
}*/