document.addEventListener("DOMContentLoaded", function () {
  let the_counter = document.getElementById("counter")
  let incrementButton = document.getElementById("+")
  let decrementButton = document.getElementById("-")
  let likeButton = document.getElementById("<3")
  let pauseButton = document.getElementById("pause")
  let commentForm = document.getElementById("comment-form")
  let paused = false

  setInterval(function(){
    if(!paused){
      the_counter.innerText = parseInt(the_counter.innerText) +1}
    else {
      the_counter.innerText = parseInt(the_counter.innerText)}
    }, 1000)

  incrementButton.addEventListener("click", function() {
    the_counter.innerText = parseInt(the_counter.innerText) +1})

  decrementButton.addEventListener("click", function() {
    the_counter.innerText = parseInt(the_counter.innerText)
    -1})

  pauseButton.addEventListener("click", function () {
   if(paused === false){
     paused = true;
   }
   else {
     paused = false;
   }
  })

 likeButton.addEventListener("click", function() {
   let i = the_counter.innerText;
   let likes = document.querySelector(".likes");
   let li_tag = document.createElement("li");
   //let textNode = document.createTextNode(`${i} has been liked ${j} times`)
   //let counterObj = {num: i, times: j}
   //let arr = []

     if(document.getElementById(i)){
       j++;
       let li_tag = document.getElementById(i);
       //li_tag.append(textNode)
       li_tag.innerHTML = i + " has been linked" + j + " times"
     }
     else{
       j = 1;
       li_tag.setAttribute("id", i);
       likes.append(li_tag);
       li_tag.innerHTML = i + " has been linked " + j + " times"
       //li_tag.append(textNode);
     }
 })

    commentForm.addEventListener('submit', function() {
      let comments = document.querySelector("#list ul")
      let comment = document.createElement("li")
      
      event.preventDefault()
      comment.innerText = document.querySelector("#comment-form input").value
      comments.append(comment)

    })
})
