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
        "color": "White",
        "size": "20 x 40, 22 x 44, 24 x 48, 25 x 50 cms",
        "weight": "4.00 to 10.00 lbs/dz",
        "pack": "100 dozens/ carton",
        "specs": "Superior quality",
        "img": [
            {

            }
        ]
    },
    "printed-tea-towel": {
        "title": "Printed Tea Towel",
        "color": "White based,  custom multi color print",
        "size": "45 x 67 cms",
        "weight": "65 grams",
        "pack": "20 dozens/ carton",
        "specs": "Superior quality",
        "img": [
            {

            }
        ]
    },
    "glass-cloth": {
        "title": "Glass Cloth",
        "color": "color stripped lintless glass towel",
        "size": "15 x 24, 20 x 28 cms",
        "weight": "40 grams",
        "pack": "500 gms / d",
        "specs": "85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "dish-cloth": {
        "title": "Dish Cloth",
        "color": "White based color stripped lintless cloth",
        "size": "35 x 35 cms",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "Superior quality",
        "img": [
            {

            }
        ]
    },
    "table-cloth": {
        "title": "Table Cloth",
        "color": "White, Black, Royal Blue and much more",
        "size": "150cm x 225cm",
        "weight": "---",
        "pack": "100 dozens/ carton",
        "specs": "100% LINEN",
        "img": [
            {

            }
        ]
    },
    "calico-bag": {
        "title": "Calico Bag",
        "color": "Natural Colour Off white ",   
        "size": "10×15cm，20×30cm，21×15.5cm",
        "weight": "130 gsm",
        "pack": "100 dozens/ carton",
        "specs": "100% Natural Cotton Calico",
        "img": [
            {

            }
        ]
    },
    "canvas-bag": {
        "title": "Canvas Bag",
        "color": "White, Black, Royal Blue and much more",
        "size": "40 x 40 cm",
        "weight": "340 GSM / 12 oz",
        "pack": "100 dozens/ carton",
        "specs": "100% Natural Cotton, Machine washable, 100% recyclable",
        "img": [
            {

            }
        ]
    },
    "cushion-cover": {
        "title": "Cushion Cover",
        "color": "Digital print",
        "size": "45 × 45 cm",
        "weight": "110 grams",
        "pack": "100 dozens/ carton",
        "specs": "100% Linen cotton",
        "img": [
            {

            }
        ]
    },
    "jute-bag": {
        "title": "Jute Bag",
        "color": "Contrast colour handles and trim",
        "size": "40 x 35 x 20 cm",
        "weight": "40 grams",
        "pack": "100 dozens/ carton",
        "specs": "handy, plain jute tote bag with wide gusset sides, made of durable, trendy 100% natural jute fibre, contrast colour handles and trim",
        "img": [
            {

            }
        ]
    },
    "curtain-cloth": {
        "title": "Curtain Cloth",
        "color": "White, Black, Royal Blue and much more",
        "size": "160-170cms",
        "weight": "---",
        "pack": "100 dozens/ carton",
        "specs": "100% Linen cotton",
        "img": [
            {

            }
        ]
    },
    "home-textiles": {
        "title": "Home Textiles",
        "color": "White, Black, Royal Blue and much more",
        "size": "---",
        "weight": "---",
        "pack": "100 dozens/ carton",
        "specs": "100% Linen cotton & 85% Cotton + 15% Polyester",
        "img": [
            {

            }
        ]
    },
    "draw-sheet": {
        "title": "Draw Sheet",
        "color": "White, Black and Color patterns",
        "size": "30cm x 3m",
        "weight": "---",
        "pack": "100 dozens/ carton",
        "specs": "----",
        "img": [
            {

            }
        ]
    },
    "bed-sheet": {
        "title": "Bed Sheet",
        "color": "White, Black, Royal Blue and much more colors",
        "size": "Single, Double, Queen and King",
        "weight": "---",
        "pack": "100 dozens/ carton",
        "specs": "1000TC Egyptian cotton bed sheet set, Flat Sheet and Fitted Sheet",
        "img": [
            {

            }
        ]
    },
    "thermal-blanket": {
        "title": "Thermal Blanket",
        "color": "White, Black, Royal Blue and much more colors",
        "size": "Single, Double, Queen and King",
        "weight": "----",
        "pack": "100 dozens/ carton",
        "specs": "100% Cotton",
        "img": [
            {

            }
        ]
    },  
    "face-washer": {
        "title": "Face Washer",
        "color": "White",
        "size": "12 x 12 cms",
        "weight": "200 dz & 100 dz",
        "pack": "0.75 lbs/dz and 1.00 lbs/dz",
        "specs": "White - Over locked edges, Pastel dyed-4 side hemmed edges",
        "img": [
            {

            }
        ]
    },
    "glove": {
        "title": "Glove",
        "color": "Orange, green, pink, blue and much more",
        "size": "14 x 26 cm",
        "weight": "---",
        "pack": "100 dozens/ carton",
        "specs": "Polyester cotton, Non-slip comfortable kitchen mitts,light weight, this kitchen oven gloves is quite flexible to use and easy to take on/off",
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

function goToURL(url){
// some code to go to url
    var orgin = window.location.origin
    window.location.href = orgin + "/index.html#"+ url;
}   