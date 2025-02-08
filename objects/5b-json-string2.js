const store = `[
{"id": "prod4vog",
    "fields": {
        "company": "ikea",
        "colors": ["#FF1234", "#222"],
        "featured": true,
        "price": 990,
        "genre":"white-black-chair"
    }
},
{"id": "prod4vpr",
    "fields": {
        "company": "ikea",
        "colors": ["#AB199", "#222"],
        "featured": true,
        "price": 880,
        "genre":"black-black-chair"
    }
}]`

console.log(JSON.parse(store))