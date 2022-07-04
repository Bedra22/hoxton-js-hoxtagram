// solution goes here


let state = {
    images: [],
    comments: [],
}



function createimagesection() {
    let Section = document.querySelector('.image-container')

    for (let image of state.images) {

        Section.textContent = ''

        let article = document.createElement('div')
        article.className = 'image-card'

        let H2El = document.createElement('h2')
        H2El.className = 'title'
        H2El.textContent = 'Title of image goes here'

        let imgEl = document.createElement('img')
        imgEl.className = 'image'
        imgEl.src = './assets/image-placeholder.jpg'

        let divEl = document.createElement('div')
        divEl.className = 'likes-section'

        let spanEl = document.createElement('span')
        spanEl.className = 'likes'
        spanEl.textContent = '0 likes'

        let buttonEl = document.createElement('button')
        buttonEl.className = 'like-button'
        buttonEl.textContent = '♥'

        let ulEl = document.createElement('ul')
        ulEl.className = 'comments'

        let li1El = document.createElement('li')
        li1El.textContent = 'Get rid of these comments'

        let li2El = document.createElement('li')
        li2El.textContent = 'And replace them with the real ones'

        let li3El = document.createElement('li')
        li3El.textContent = 'From the server'



        ulEl.append(li1El, li2El, li3El)
        divEl.append(spanEl, buttonEl)
        article.append(H2El, imgEl, divEl, ulEl)
        Section?.append(article)
    }
}

function render() {
    createimagesection()
}
function getimagefromserver() {

    fetch("http://localhost:3000/images")
        .then(resp => resp.json())
        .then(imagefromserver => {
            state.images = imagefromserver
        })
    render()
}

getimagefromserver()

function getcommentfromserver() {
    fetch("http://localhost:3000/comments")
        .then(resp => resp.json())
        .then(commentsfromserver => {
            state.comments = commentsfromserver
        })
    render()

}

getcommentfromserver()

render()