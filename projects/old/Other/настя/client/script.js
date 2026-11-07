const getPartners = async () =>{
  try{
    const response = await axios.get("http://localhost:3000/api/partners");

    if(response.status !== 200){
      throw new Error(`HTTP error! status:${response.status}`);
    }

    const partners = response.data.data;
    const container = document.getElementById("partners-container");

    if(!container){
      throw new Error(`Element with id 'partners-container' do not exist`);
    }

    container.innerHTML = partners.map(partner =>`
      <tr data-id="${partner.id}">
        <td>${partner.id}</td>
        <td>${partner.name}</td>
        <td>${partner.type}</td>
        <td>${partner.rating}</td>
        <td>${partner.phone_number}</td>
        <td>
        <button class="btn-delete" data-id=${partner.id}>Delete</button>
        <button class="btn-edit" data-id=${partner.id}>Edit</button>
        </td>
      </tr>
    `).join('');
  }catch(err){
    console.error("Failed to retrieve partner information: ", err);
    alert(`Failed to retrieve partner information ${err.message}`)
  }
};

const postPartners = () =>{
  const form = document.getElementById("AddPartnerForm");
  form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      type: document.getElementById("type").value,
      address: document.getElementById("address").value,
      rating: document.getElementById("rating").value,
      director_name: document.getElementById("director_name").value,
      email: document.getElementById("email").value,
      phone_number: document.getElementById("phone_number").value,
    };
    console.log(data);

    axios.post("http://localhost:3000/postPartner", data)
    .then(() =>{
      alert("Partner was added");
      form.reset();
      getPartners();
    })
    .catch((err)=>{
      console.error("Failed to add partner: ", err);
      alert("Failed to add partner")
    });
  })
};

const deletePartner =() =>{
  document.addEventListener("click", (event) =>{
    if(event.target.classList.contains('btn-delete')){
      event.preventDefault();
      const id = event.target.dataset.id;
      const partnerName = event.target.closest('tr').querySelector('td:nth-child(2)').textContent;

      if(confirm(`Are you sure you want to delete ${partnerName}`)){
        axios.delete(`http://localhost:3000/api/partners/${id}`)
        .then (response =>{
          alert(response.data.message);
          getPartners();
        })
        .catch(err =>{
          console.error("Failed to delete: ", err);
          alert("Failed to delete partner");
        });
      }
    }
  });
};

const editPartners = () =>{
  document.addEventListener('click', async(e) =>{
    if(e.target.classList.contains('btn-edit')){
      e.preventDefault();
      const id = e.target.dataset.id;

      try{
        const response = await axios.get(`http://localhost:3000/api/partners/${id}`);
        if(response.status !== 200) throw new Error('Failed to fetch partner data');
        const partner = response.data;
        
        document.getElementById('edit-id').value = partner.id;
        document.getElementById('edit-name').value = partner.name;  
        document.getElementById('edit-type').value = partner.type;
        document.getElementById('edit-rating').value = partner.rating;
        document.getElementById('edit-address').value = partner.address; 
        document.getElementById('edit-phone').value = partner.phone_number;
        document.getElementById('edit-email').value = partner.email;
        document.getElementById('edit-director').value = partner.director_name;  
        
        document.getElementById('edit-modal').style.display = 'block';
      }catch(error){
        console.error('Error loading partner data: ', error);
        alert(`Coudnt load partner data ${error.message}`);
      }
    }
  });
  document.getElementById('edit-partner-form').addEventListener('submit', async(e) =>{
    e.preventDefault();
    const data ={
      name: document.getElementById('edit-name').value,
      type: document.getElementById('edit-type').value,
      rating: document.getElementById('edit-rating').value,
      address: document.getElementById('edit-address').value,
      phone_number: document.getElementById('edit-phone').value,
      email: document.getElementById('edit-email').value,
      director_name: document.getElementById('edit-director').value
    };
    const id = document.getElementById('edit-id').value;

    try {
      const response = await axios.put(`http://localhost:3000/api/partners/${id}`, data);
      if(response.status !== 200) throw new Error('Update failed');

      alert('Changes saved successfully');
      document.getElementById('edit-modal').style.display = 'none';
      await getPartners();
    } catch(error){
      console.error('Error updating partner:  ', error);
      alert(`Failed to save changes: ${error.response?.data?.message || error.message}`)
    }
  });

  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('edit-modal').style.display = 'none';
  });
  window.addEventListener('click', (e) =>{
    if(e.target === document.getElementById('edit-modal')){
      document.getElementById('edit-modal').style.display = 'none'
    }
  });
};



document.addEventListener("DOMContentLoaded", () =>{
  getPartners();
  postPartners();
  deletePartner();
  editPartners();
})