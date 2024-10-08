const siteURL = '//127.0.0.1:8000/'
const styleURL = siteURL + 'static/css/bookmarklet.css'
const minWidth = 250
const minHeight = 250

// load CSS
let head = document.getElementsByTagName('head')[0]
let link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.hred = siteURL + '?r=' + Math.floor(Math.random()*9999999999999999)
head.appendChild(link)

// load HTML
let body = document.getElementsByTagName('body')[0]
boxHTML = `
    <div id="bookmarklet">
        <a href="#" id="close">&times;</a>
        <h1>Select an image to bookmark:</h1>
        <div class="Images"></div>
    </div>`
body.innerHTML += boxHTML

const bookmarkletLaunch = () => {
    let bookmarklet = document.getElementById('bookmarklet')
    let imagesFound = bookmarklet.querySelector('.images')

    // clear images found
    imagesFound.innerHTML = ''
    // display bookmarklet
    bookmarklet.style.display = 'block'

    // close event
    bookmarklet.querySelector('#close').addEventListener('click', () => {
        bookmarklet.style.display = 'none'
    })

    // find images in the DOM with the minimum dimensions
    let images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]')
    images.forEach(image => {
        if(image.naturalWidth >= minWidth && image.naturalHeight >= minHeight) {
            let imageFound = document.createElement('img')
            imageFound.src = image.src
            imagesFound.append(imageFound)
        }
    })

    // select image event
    imagesFound.querySelectorAll('img').forEach(image => {
        image.addEventListener('click', (e) => {
            imageSelected = e.target
            bookmarklet.style.display = 'none'
            window.open(siteURL + 'images/create/?url=' + 
                        encodeURIComponent(imageSelected.src) +
                        '&title=' +
                        encodeURIComponent(document.title),
                        '_blank')
        })
    })
}

// launch the bookmarklet
bookmarkletLaunch()