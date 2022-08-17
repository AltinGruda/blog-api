const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deletePost)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function deletePost(){
    const postTitle = this.parentNode.childNodes[3].innerText
    const postContent = this.parentNode.childNodes[7].innerText
    try{
        const response = await fetch('deletePost', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'postTitleS': postTitle,
              'postContentS': postContent
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const postTitle = this.parentNode.childNodes[3].innerText
    const postContent = this.parentNode.childNodes[7].innerText
    const tLikes = Number(this.parentNode.childNodes[9].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'postTitleS': postTitle,
              'postContentS': postContent,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(postTitle, postContent, tLikes)
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}