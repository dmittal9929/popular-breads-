
fetch('https://popularbreadapi.herokuapp.com/products', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	}
})
.then(res => {
	return res.json()
})
.then(data => {
	console.log(data)
	let content = '';
	for(let i = 0; i < data.length; i++){
		content = content + `<div class="col-12 col-lg-4" style="padding : 4vh 5vw">
		<div class="card">
		<img class="card-img-top" height="250px" src='${data[i].image}' alt="Card image cap">
		<div class="card-body">
		<h5 class="card-title">${data[i].name}</h5></div></div></div>`
	}
	document.getElementsByTagName('footer')[0].style.display = 'block';
	document.getElementById("loader").style.display = 'none'
	document.getElementById("products-list").innerHTML = content;
})