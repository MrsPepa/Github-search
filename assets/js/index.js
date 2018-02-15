

let display = document.querySelector('.display');

fetch('https://api.github.com/users/drpepper')
  .then(function(response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    //Let's make some HTML!
    let html = `<h2><a href="${data.html_url}">${data.login}</a></h2>
      <p>${data.name}</p>
      <p>Followers: ${data.followers}</p>
    `;

    //Put that HTML on the page
    display.innerHTML = html;
  });

/*function addUser(user) {
  console.log(user);
  $('#user').html(`<div class="card col-md-6 offset-md-3 col-xs-12">
    <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${user.name || ''}</h5>
      <h6>@${user.login}</h6>
      <p class="card-text">${user.bio || ''}</p>
      <a href="${user.html_url}" class="btn btn-primary">Stalkear coder</a>
    </div>
  </div>`);
}

$('#search-form').submit(function(e) {
  e.preventDefault();
  
  var searchedUser = $('#github-username').val();
  
  $.ajax({
    url: `https://api.github.com/users/${searchedUser}`
  }).done(addUser);
});*/