const loginPage = () => {
    window.location.href = "./login.html"   
}


let cards = document.getElementById("links")

function chiqar(data) {
    cards.innerHTML = null

    data.forEach((item) => {
        const li = document.createElement("li")
        li.className = "link"

        li.innerHTML = `
        <img class="book-img" src=${item.rasm} width="300px" height="400px"/>

                        <div class="book-info">
                            <h2 class="book-type">${item.KitobNomi}</h2>
                            <p class="author">${item.Yozuvchisi}</p>
                            <p class="year">${item.Yili}</p>



                            <div class="buttons">
                                <button class="btn">Bookmark</button>
                                <button class="btn2">Info</button>
                            </div>
                            <button class="btn3" onclick="">Read</button>
                        </div>
        `

        cards.appendChild(li)
    })
}

chiqar(data)