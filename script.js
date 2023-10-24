var arr = [
    {dp:"media/img1.JPG",story:"media/img1.JPG"},
    {dp:"media/img2.JPG",story:"media/img2.JPG"},
    {dp:"media/img3.JPG",story:"media/img3.JPG"},
    {dp:"media/img4.JPG",story:"media/img4.JPG"},
    {dp:"media/img5.JPG",story:"media/img5.JPG"},
]

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

stories.innerHTML = clutter
stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
    },2000)
})