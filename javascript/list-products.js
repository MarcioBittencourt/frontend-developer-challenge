const api = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/'
const paginatedProductsEndpoint = 'products?page='
var page = 0

function moreProducts() {
    var request = new XMLHttpRequest()
    page++

    request.open('GET', api + paginatedProductsEndpoint + page, true)

    request.onload = function () {
        var data = JSON.parse(this.response)
        const root = document.getElementById('root')

        const row = document.createElement('row')
        row.setAttribute('class', 'row')
        root.appendChild(row)

        data.products.forEach(product => {
            const col = document.createElement('div')
            col.setAttribute('class', 'col-sm-3 col-md-3 col-lg-3 col-xl-3')
            row.appendChild(col)

            const card = document.createElement('div')
            card.setAttribute('class', 'card mb-4 shadow-sm form-group')
            col.appendChild(card)

            const img = document.createElement('img')
            img.setAttribute('src', 'http:' + product.image)
            card.appendChild(img)

            const cardBody = document.createElement('div')
            cardBody.setAttribute('class', 'card-body')
            card.appendChild(cardBody)

            const cardTitle = document.createElement('h6')
            cardTitle.setAttribute('class', 'crd-title')
            cardTitle.innerHTML = product.name
            cardBody.appendChild(cardTitle)

            const cardDescription = document.createElement('p')
            cardDescription.setAttribute('class', 'card-text')
            cardDescription.innerHTML = product.description
            cardBody.appendChild(cardDescription)

            const cardOldPrice = document.createElement('p')
            cardOldPrice.innerHTML = 'De: R$: ' + product.oldPrice
            cardBody.appendChild(cardOldPrice)

            const cardNewPrice = document.createElement('h6')
            cardNewPrice.innerHTML = 'Por: R$: ' + product.price
            cardBody.appendChild(cardNewPrice)

            const installments = document.createElement('p')
            installments.innerHTML = 'ou ' + product.installments.count + 'x ' + 'de ' + 'R$: ' + product.installments.value
            cardBody.appendChild(installments)

            const button = document.createElement("button")
            button.setAttribute('type', 'button')
            button.setAttribute('class', 'btn btn-outline-success form-control')
            button.innerHTML = 'Comprar'
            cardBody.appendChild(button)
        })
    }

    request.send()
}