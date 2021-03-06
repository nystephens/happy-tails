$('.doggie').on('click', async function (evt) {
    evt.preventDefault();
    let dogbtn = $(this).attr('id')

    let shift = moment().hour()
    console.log(dogbtn, shift)
    let dogObj;
    let volunteer;
    let potty;
    
    if($('#walk-check').val()) {
        volunteer = $(this).data('v_id')
    } else {
        volunteer = null;
    }
    if($('#potty-check').val()) {
        potty = $(this).data('v_id')
    } else {
        potty = null;
    }
     if( shift >= 0 && shift <= 11 ) {
        dogObj = {
            has_walked_am: volunteer,
            has_potty_am: potty
        }
     } else {
        dogObj = {
            has_walked_pm: volunteer,
            has_potty_pm: potty
        }
     }
     console.log(dogObj);
     

     // api call c_id update pass dogObj
     const response =  await fetch(`/api/canine/:${c_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            has_walked_am,
            has_potty_am,
            has_walked_pm,
            has_potty_pm
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    
})
//  document.querySelector(`${canine.c_id}`).addEventListener('submit', editFormHandler);


