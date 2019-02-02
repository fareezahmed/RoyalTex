var products = {
    "tea-towel": {
        "title": "Tea Towel",
        "color": "White base, color as shown in the images",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "Hemmed, Over locked edges available.",
        "img": [
            {

            }
        ]
    },
    "apron": {
        "title": "Apron",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "bath-towel": {
        "title": "Bath Towel",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "printed-tea-towel": {
        "title": "Printed Tea Towel",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "glass-cloth": {
        "title": "Glass Cloth",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "dish-cloth": {
        "title": "Dish Cloth",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "table-cloth": {
        "title": "Table Cloth",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "calico-bag": {
        "title": "Calico Bag",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "canvas-bag": {
        "title": "Canvas Bag",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "cushion-cover": {
        "title": "Cushion Cover",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "jute-bag": {
        "title": "Jute Bag",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "curtain-cloth": {
        "title": "Curtain Cloth",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "home-textiles": {
        "title": "Home Textiles",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "draw-sheet": {
        "title": "Draw Sheet",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "bed-sheet": {
        "title": "Bed Sheet",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "thermal-blanket": {
        "title": "Thermal Blanket",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "face-washer": {
        "title": "Face Washer",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "glove": {
        "title": "Glove",
        "color": "White, Black, Royal Blue and much more",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    }
}

var urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get('pro');

console.log(page);
if(page) {
    $('.product-title').text(products[page].title);
    $('.product-color').text(products[page].color);
    $('.product-size').text(products[page].size);
    $('.product-weight').text(products[page].weight);
    $('.product-pack').text(products[page].pack);
    $('.product-specs').text(products[page].specs);
    $('.product-image').attr('src', 'images/pdp/' + page + '.jpg');
}

console.log(products);

$('.project-gallery .grid-item .single-img').each(function( index ) {
    var link = $( this ).find('h6 a')[0].href.split('?pro=');
    console.log( index + ": " + link[1]);
    var productID = link[1];
    $('.product-color').text(products[productID].color);
  });