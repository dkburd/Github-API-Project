function getUserRepos() {
  let username=$('#username')[0].value
  console.log(username)
  fetch(`https://api.github.com/users/${username}/repos?per_page=1000`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
console.log(responseJson);  
$('#results').removeClass('hidden'); 
$('#results-list').empty();
for (let i = 0; i < responseJson.length; i++){
$('#results-list').append(
`<li>
  <h3>
    <a href="${responseJson[i].html_url}" target='blank'>
${responseJson[i].name}
  </a> 
</h3>
</li> `

)}
};

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getUserRepos();
    $( ".results").empty();
    $( ".results").removeClass('hidden');
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});