const service_btns = [...document.querySelectorAll('.service-btn > i')];

//checks if local storage exists if not then one is created
if (localStorage.getItem('services') === null) {
    localStorage.setItem('services', JSON.stringify([]));
}

service_btns.forEach((element, index)=>{
    element.parentElement.id=index;
    const saved_items =JSON.parse(localStorage.getItem('services'));

    saved_items.forEach((item)=>{
        if(Number(item.id) === index){
            //updates element UI by updating Css classes
            element.parentElement.classList.remove('save-btn');
            element.parentElement.classList.add('saved-btn');
        }
    })

    //a click event for each of the bookmark buttons
    element.addEventListener('click', (e)=>{
        //gets the latest and current items saved in local storage
        let current_services = JSON.parse(localStorage.getItem('services'));
        
        //checks if item is already earmarked and if so it does neccesary actions and returns
        if(e.target.parentElement.classList.contains('saved-btn')){
            current_services = current_services.filter((item) => e.target.parentElement.id !== item.id);
            
            //updates element UI by updating Css classes
            e.target.parentElement.classList.remove('saved-btn');
            e.target.parentElement.classList.add('save-btn');

            //updates local storage
            localStorage.setItem('services', JSON.stringify(current_services));
            return
        }

        //adds new item to all previous items
        current_services.push({
            id : e.target.parentElement.id,
            liked:false,
            htmlContent : e.target.parentElement.parentElement.parentElement.innerHTML
        });

        //updates local storage
        localStorage.setItem('services', JSON.stringify(current_services));
        alert('You have '+totalItems()+' items saved');
        
        //update element UI by updating necessary Css classes
        e.target.parentElement.classList.remove("save-btn");
        e.target.parentElement.classList.add("saved-btn");
    })
})

//counts how many items saved for later
function totalItems(){
    let current_job_exp = JSON.parse(localStorage.getItem('job_exp')?localStorage.getItem('job_exp'):'[]');  
    let current_testimonials = JSON.parse(localStorage.getItem('testimonials')?localStorage.getItem('testimonials'):'[]');
    let current_services = JSON.parse(localStorage.getItem('services')?localStorage.getItem('services'):'[]');
    return (current_job_exp.length+current_services.length+current_testimonials.length);
}