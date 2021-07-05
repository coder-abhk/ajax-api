require('regenerator-runtime/runtime');
const axios = require("axios");


// bindings
const xhr__container = document.querySelector(".xhr");
const fetch__container = document.querySelector(".fetch");
const axios__container = document.querySelector(".axios");


// xhr api
const xhrRequestHandler = () => {
	const method = "GET";
	const isAsync = true;
	const uri = "https://jsonplaceholder.typicode.com/albums"
	// create xhr object
	const xhr = new XMLHttpRequest();

	// established a connection to server api
	xhr.open(method, uri, isAsync);

	// handling data onload
	xhr.addEventListener("load", function() {
		if (this.readyState === 4) {
			const albums = JSON.parse(this.responseText).slice(0, 5);
			albums.map(album => {
				xhr__container.innerHTML += `<ul class="album">
					<li>${album.title}</li>
				</ul>`
			})
		}
	});

	// send response to server api
	xhr.send({ message: "finished" });
}

const xhrBtn = document.getElementById("xhrButton");
xhrBtn.addEventListener("click", (e) => {
	e.preventDefault();
	xhrRequestHandler();
	xhrBtn.style.display = "none";
}, false)

// xhr api end line



// fetch api handler
const fetchApiHandler = () => {
	const fetchUri = "https://jsonplaceholder.typicode.com/users";
	const fetchMethod = "GET";
	fetch(fetchUri, {
			method: fetchMethod
		})
		.then(res => res.json())
		.then(users => {
			users.map(user => {
				fetch__container.innerHTML += `<ul class="user">
					<li>${user.name}</li>
				</ul>`
			})
		})
		.catch(err => console.error(err.message))
}

const fetchBtn = document.getElementById("fetchButton");

fetchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	fetchApiHandler();
	fetchBtn.style.display = "none";
})


// axios api handler
const axiosApiHandler = () => {
	const todosUri = "https://jsonplaceholder.typicode.com/todos";
	axios.get(todosUri).then(res => {
		const todos = res.data.splice(0, 5)
		todos.map(todo => {
			axios__container.innerHTML += `<ul class="user">
					<li>${todo.title}</li>
				</ul>`
		})
	}).catch(err => console.error(err.message));
}

const axiosBtn = document.getElementById("axiosButton");
axiosBtn.addEventListener("click", (e) => {
	e.preventDefault();
	axiosApiHandler();
	axiosBtn.style.display = "none";
}, false);