let editButton = document.querySelector('.editButton')
let userData = localStorage.getItem('userData')
let userCard = document.querySelector('.userDataCard')


userCard.innerHTML = `<p>country id : ${JSON.parse(userData).country_id}</p>
<p>entity id : ${JSON.parse(userData).entity_id}</p>
<p>entity name : ${JSON.parse(userData).entity_name}</p>
<p>entity type : ${JSON.parse(userData).entity_type}</p>
<p>organization level abbreviation : ${JSON.parse(userData).organization_level_abbreviation}</p>
<p>organization level id : ${JSON.parse(userData).organization_level_id}</p>
<p>shipping : ${JSON.parse(userData).permissions.Shipping.map(elem => elem)}</p>
<p>users management : ${JSON.parse(userData).permissions['Users Management'].map(elem => elem)}</p>
<p>region id : ${JSON.parse(userData).region_id}</p>
<p>user email : ${JSON.parse(userData).user_email}</p>
<p>user id : ${JSON.parse(userData).user_id}</p>
<p>user name : ${JSON.parse(userData).user_name}</p>
<p>user phone: ${JSON.parse(userData).user_phone}</p>
<p>user role: ${JSON.parse(userData).user_role}</p>
`


editButton.addEventListener('click', () => {
    document.querySelector('#modal-js').classList.add('is-active');
})

function closeModal() {
    const modal = document.getElementById('modal-js');
    modal.classList.remove('is-active');
}