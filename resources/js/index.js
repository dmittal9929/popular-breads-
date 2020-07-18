$('.carousel').carousel({
    interval: 2000
})

new fullpage('#fullpage', {
    licenseKey: '8MI@?ID!k1',
    navigation: true,
    anchors: ["aboutus", '', "csr", "collaborators", "factories", "feedback", "contactus"],
    scrollingSpeed: 1000,
    navigation: true,
    responsiveHeight: 330,
    navigationPosition: 'right',
    showActiveTooltip: true,
    verticalCentered: true,
    fitToSection: true,
    scrollOverflow: true,
    autoScrolling: true
});

document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', () => {
    if (document.querySelectorAll('[aria-expanded]')[0].getAttribute('aria-expanded') === 'false') {
        document.getElementsByTagName('nav')[0].style.backgroundColor = 'white';
    } else {
        document.getElementsByTagName('nav')[0].style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    }
})

function emailVerify(event) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (event.target == undefined) {
        if (re.test(event)) {
            return true;
        } else {
            return false;
        }
    }
    else {
        let email = event.target.value;
        if (re.test(email)) {
            event.target.style.borderColor = "Green";
            return true;
        } else {
            event.target.style.borderColor = "Red";
            return false;
        }
    }
}

function nameVerify(event) {
    if (event.target == undefined) {
        if (event.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    else {
        let name = event.target.value;
        if (name.length > 0) {
            event.target.style.borderColor = "Green";
            return true;
        } else {
            event.target.style.borderColor = "Red";
            return false;
        }
    }
}

function verify(event) {
    if (event.target == undefined) {
        if (event.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        let message = event.target.value;
        if (message.length > 0) {
            event.target.style.borderColor = "Green";
            return true;
        } else {
            event.target.style.borderColor = "Red";
            return false;
        }
    }
}

function phoneVerify(event) {
    if (event.target == undefined) {
        if (event.length > 9) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        let message = event.target.value;
        if (message.length > 9) {
            event.target.style.borderColor = "Green";
            return true;
        } else {
            event.target.style.borderColor = "Red";
            return false;
        }
    }
}


function validateContactUs(obj) {
    if (nameVerify(obj.name) && phoneVerify(obj.contact_number) && emailVerify(obj.email_id) && verify(obj.description) && verify(obj.address)) {
        return true;
    }
    return false;
}
function validateFeedback(obj) {
    if (nameVerify(obj.name) && phoneVerify(obj.contact) && emailVerify(obj.email) && verify(obj.product) && verify(obj.description)) {
        return true;
    }
    return false;
}

window.onload = () => {
    document.getElementById('submit').addEventListener('click', (e) => {
        let name = document.getElementById('name').value;
        let email_id = document.getElementById('email').value;
        let contact_number = document.getElementById('phone').value;
        let address = document.getElementById('location').value;
        let description = document.getElementById('comment').value;
        let data = { name, contact_number, email_id, description, address }
        if (validateContactUs(data)) {
            // fetch call
            document.getElementById('submit').innerHTML = "Submitting..."
            fetch('https://popularbreadapi.herokuapp.com/enquiry', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('phone').value = "";
                    document.getElementById('location').value = "";
                    document.getElementById('comment').value = "";
                    document.getElementById('submit').innerHTML = "Submit"
                    return res.json();
                })
                .then(data => {
                    if (data.msg === undefined) {
                        document.getElementById('submit').innerHTML = 'Submit'
                        Swal.fire(
                            'Oopppsss..',
                            'There was some technical glitch!',
                            'error'
                        )
                    } else {
                        document.getElementById('submit').innerHTML = 'Submit'
                        Swal.fire(
                            'Submitted',
                            'Successfully submitted the details',
                            'success'
                        )
                    }
                })
                .catch(err => {
                    console.log(err)
                    Swal.fire(
                        'Oopppsss..',
                        'There was some internal error!',
                        'error'
                    )
                })
        } else {
            Swal.fire(
                'Oopppsss..',
                'Please enter all the fields correctly',
                'error'
            )
        }
    })

    document.getElementById('submitFB').addEventListener('click', (e) => {
        let name = document.getElementById('nameFB').value;
        let email = document.getElementById('emailFB').value;
        let contact = document.getElementById('phoneFB').value;
        let product = document.getElementById('productFB').value;
        let description = document.getElementById('commentFB').value;
        let data = { name, contact, email, product, description }
        console.log(data)
        if (validateFeedback(data)) {
            document.getElementById('submitFB').innerHTML = "Submitting..."
            fetch('https://popularbreadapi.herokuapp.com/feedback', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    document.getElementById('submitFB').innerHTML = "Submit"
                    document.getElementById('nameFB').value = "";
                    document.getElementById('emailFB').value = "";
                    document.getElementById('phoneFB').value = "";
                    document.getElementById('productFB').value = "";
                    document.getElementById('commentFB').value = "";
                    return res.json();
                })
                .then(data => {
                    if (data.msg === undefined) {
                        document.getElementById('submit').innerHTML = 'Submit'
                        Swal.fire(
                            'Oopppsss..',
                            'There was some technical glitch!',
                            'error'
                        )
                    } else {
                        document.getElementById('submit').innerHTML = 'Submit'
                        Swal.fire(
                            'Submitted',
                            'Successfully submitted the details',
                            'success'
                        )
                    }
                })
                .catch(err => {
                    console.log(err)
                    Swal.fire(
                        'Oopppsss..',
                        'There was some internal error!',
                        'error'
                    )

                })
        } else {
            Swal.fire(
                'Oopppsss..',
                'Please enter all the fields correctly',
                'error'
            )
        }
    })

    document.getElementById("prod-bread").addEventListener('click', (e) => {
		e.preventDefault();
		localStorage.setItem('page', 'Breads');
		window.location.href = "productsFull.html";
	})
    document.getElementById("prod-pav").addEventListener('click', (e) => {
		e.preventDefault();
		localStorage.setItem('page', 'Pav and Bun');
		window.location.href = "productsFull.html";
	})
	document.getElementById("prod-toast").addEventListener('click', (e) => {
		e.preventDefault();
		localStorage.setItem('page', 'Toast');
		window.location.href = "productsFull.html";
	})
	document.getElementById("prod-bakery").addEventListener('click', (e) => {
		e.preventDefault();
		localStorage.setItem('page', 'Other Bakery Items');
		window.location.href = "productsFull.html";
	})
}