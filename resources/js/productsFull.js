function showModal(event) {
    document.getElementById('launch-modal-img').setAttribute('src', event.target.getAttribute('data-src'));
    document.getElementById('launch-modal').click();
}

const s = localStorage.getItem("page");
if(s === 'Breads'){
    document.getElementById("pills-bread-tab").click();
}
else if(s === 'Pav and Bun'){
    document.getElementById("pills-pav-tab").click();
}
else if(s === 'Toast'){
    document.getElementById("pills-toast-tab").click();
}
else if(s === 'Other Bakery Items'){
    document.getElementById("pills-bakery-tab").click();
}

window.onload = () => {
    fetch("https://popularbreadapi.herokuapp.com/products?tag=bread", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(res => {
            let content = "";
            for (let i = 0; i < res.length; i++) {
    
                content = content + `<div class="col-12 col-lg-4 aos-init aos-animate" data-aos="zoom-in" style="padding: 25px;">
                                                    <div class="card">
                                                        <img src=${res[i].image} class="card-img-top" alt="breads" style=" width:100%">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="color: black; font-weight: 1000; min-height: 60px;">${res[i].name}</h5>
                                                            <p class="card-text" style="color: black; font-size: 17px; min-height:130px">${res[i].description}</p>
                                                            <button data-src=${res[i].nvalue} onclick="showModal(event)" class='btn btn-primary'>Nutrition value</button>
                                                        </div>
                                                    </div>
                                                </div>`
            }
    
            document.getElementById("bread-products").innerHTML = content;
    
    
    
        })
    
    // Pav
    
    fetch("https://popularbreadapi.herokuapp.com/products?tag=pav", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(res => {
            let content = "";
            for (let i = 0; i < res.length; i++) {
    
                content = content + `<div class="col-12 col-lg-4 aos-init aos-animate" data-aos="zoom-in" style="padding: 25px;">
                                                    <div class="card">
                                                        <img src=${res[i].image} class="card-img-top" alt="breads" style=" width:100%">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="color: black; font-weight: 1000; min-height: 60px;">${res[i].name}</h5>
                                                            <p class="card-text" style="color: black; font-size: 17px; min-height:130px">${res[i].description}</p>
                                                            <button data-src=${res[i].nvalue} onclick="showModal(event)" class='btn btn-primary'>Nutrition value</button>
                                                        </div>
                                                    </div>
                                                </div>`
            }
    
            document.getElementById("pav-products").innerHTML = content;
    
        })
    
    // Toast
    
    fetch("https://popularbreadapi.herokuapp.com/products?tag=toast", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(res => {
            let content = "";
            for (let i = 0; i < res.length; i++) {
    
                content = content + `<div class="col-12 col-lg-4 aos-init aos-animate" data-aos="zoom-in" style="padding: 25px;">
                                                    <div class="card">
                                                        <img src=${res[i].image} class="card-img-top" alt="breads" style=" width:100%">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="color: black; font-weight: 1000; min-height: 60px;">${res[i].name}</h5>
                                                            <p class="card-text" style="color: black; font-size: 17px; min-height:130px">${res[i].description}</p>
                                                            <button data-src=${res[i].nvalue} onclick="showModal(event)" class='btn btn-primary'>Nutrition value</button>
                                                        </div>
                                                    </div>
                                                </div>`
            }
    
            document.getElementById("toast-products").innerHTML = content;
    
        })
    
    // Bakery
    
    fetch("https://popularbreadapi.herokuapp.com/products?tag=bakery", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(res => {
            let content = "";
            for (let i = 0; i < res.length; i++) {
    
                content = content + `<div class="col-12 col-lg-4 aos-init aos-animate" data-aos="zoom-in" style="padding: 25px;">
                                                    <div class="card">
                                                        <img src=${res[i].image} class="card-img-top" alt="breads" style=" width:100%;">
                                                        <div class="card-body">
                                                            <h5 class="card-title" style="color: black; font-weight: 1000; min-height: 60px;">${res[i].name}</h5>
                                                            <p class="card-text" style="color: black; font-size: 17px; min-height:130px;">${res[i].description}</p>
                                                            <button data-src=${res[i].nvalue} onclick="showModal(event)" class='btn btn-primary'>Nutrition value</button>
                                                        </div>
                                                    </div>
                                                </div>`
            }
    
            document.getElementById("bakery-products").innerHTML = content;
    
        })
    
    
    
}

