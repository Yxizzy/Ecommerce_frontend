//
//
//
// w3.includeHTML(() => {
//     // Call fake api
//     fetch("api/fakeApi.js")
//         .then(res => res.text()
//             .then((text) => {
//                 return eval(text);
//             }))
//         .then((api) => {
//
//             if (location.search !== "") {
//                 const query = location.search.split("=");
//                 const str = decodeURIComponent(query[1].replace("+", " "));
//                 const data = api.searchProducts(str);
//                 w3.displayObject("productBox", data);
//                 if (data.count === 0) document.getElementById("productBox").style.display = "none";
//             } else {
//                 const data = api.getProducts();
//                 w3.displayObject("productBox", data);
//                 if (data.count === 0) document.getElementById("productBox").style.display = "none";
//             }
//
//             w3.displayObject("categories", api.getCategories());
//             w3.displayObject("colors", api.getColors());
//
//         })
//         .catch((ex) => {
//             return ex.message;
//         });
// });
