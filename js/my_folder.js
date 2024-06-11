function update_service_section (){
    //services section
    let my_services = JSON.parse(localStorage.getItem('services'));
    const services_element = document.querySelector('#services> .container > .row');
    services_element.innerHTML=''; //resets html content
    
    my_services.forEach(service => {
        //new element created as a wrapper element
        const my_div_element = document.createElement('div');
        my_div_element.classList.add('col-sm-6', 'col-md-4');
        my_div_element.innerHTML= service.htmlContent;
    
        //creating a like button
        const like_btn_element = document.createElement('button');
        like_btn_element.classList.add('btn',service.liked ? 'liked-btn' : 'like-btn');
        like_btn_element.id = service.id;
        like_btn_element.addEventListener('click', like_service);
        like_btn_element.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
        //done creating like button element and adding it as a child to my_div_element
        
        my_div_element.querySelector('button').innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
        my_div_element.querySelector('button').addEventListener('click', delete_service);
        my_div_element.querySelector('.single-service').appendChild(like_btn_element);
        services_element.appendChild(my_div_element);
        
    }); 
}

function update_experience_section(){
    //job experience section
    let my_job_exp = JSON.parse(localStorage.getItem('job_exp'));
    const experience_element = document.querySelector('#experience > .container > .row');
    experience_element.innerHTML=''; //resets html content    
    
    my_job_exp.forEach(experience => {
        //new element created as a wrapper element
        const my_div_element = document.createElement('div');
        my_div_element.classList.add('col-md-6');
        my_div_element.innerHTML= experience.htmlContent;
    
        //creating a like button
        const like_btn_element = document.createElement('button');
        like_btn_element.classList.add('btn',experience.liked ? 'liked-btn' : 'like-btn');
        like_btn_element.id = experience.id;
        like_btn_element.addEventListener('click', like_experience);
        like_btn_element.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
        //done creating like button element and adding it as a child to my_div_element
        
        my_div_element.querySelector('button').innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        my_div_element.querySelector('button').addEventListener('click', delete_job_exp);
        my_div_element.querySelector('.exp-column').appendChild(like_btn_element);
        experience_element.appendChild(my_div_element);
        
    });
}

function update_testimmonial_section(){
    //testimonials section
    let my_testimonials = JSON.parse(localStorage.getItem('testimonials'));
    const testimonial_element = document.querySelector('.testimonials>  .container > .row');
    testimonial_element.innerHTML=''; //resets html content
    
    my_testimonials.forEach(testimonial => {
        //new element created as a wrapper element
        const my_div_element = document.createElement('div');
        my_div_element.classList.add('col-md-6', 'col-lg-4');
        my_div_element.innerHTML= testimonial.htmlContent;
        
        //creating a like button
        const like_btn_element = document.createElement('button');
        like_btn_element.classList.add('btn',testimonial.liked ? 'liked-btn' : 'like-btn');
        like_btn_element.id = testimonial.id;
        like_btn_element.addEventListener('click', like_testimonial);
        like_btn_element.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>'
        //done creating like button element and adding it as a child to my_div_element
        
        
        
        my_div_element.querySelector('button').innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
        my_div_element.querySelector('button').addEventListener('click', delete_testimonial);
        my_div_element.querySelector('.blockquote').appendChild(like_btn_element);
    
        testimonial_element.appendChild(my_div_element);
        
    });
}

//delete event functions
function delete_service(e){
    let my_services=JSON.parse(localStorage.getItem('services'));
    my_services= my_services.filter((service) =>  Number(service.id) !== Number(e.currentTarget.id));
    localStorage.setItem('services', JSON.stringify(my_services));
    update_service_section()
}
function delete_job_exp(e){
    let my_exp=JSON.parse(localStorage.getItem('job_exp'));//gets current data from local storage
    my_exp= my_exp.filter((job_exp) =>  Number(job_exp.id) !== Number(e.currentTarget.id));//updates data
    localStorage.setItem('job_exp', JSON.stringify(my_exp));//stores back in localstorage
    update_experience_section()
}
function delete_testimonial(e){
    let my_reviews=JSON.parse(localStorage.getItem('testimonials'));
    my_reviews= my_reviews.filter((testimonial) =>  Number(testimonial.id) !== Number(e.currentTarget.id));
    localStorage.setItem('testimonials', JSON.stringify(my_reviews));
    update_testimmonial_section()
}
//end of delete event functions

//like button event functions
function like_service(e){
    //gets all rthe current service data
    let my_services=JSON.parse(localStorage.getItem('services'));
    
    //loops through each loop determining previous value and new value
    my_services = my_services.map((service)=>{
        
        //checks if we working on correct data
        if(Number(service.id) === Number(e.currentTarget.id)){
            if(service.liked){
                service.liked = false;
                e.currentTarget.classList.remove('liked-btn')
                e.currentTarget.classList.add('like-btn')
                return service;
            }else{
                service.liked = true;
                e.currentTarget.classList.remove('like-btn')
                e.currentTarget.classList.add('liked-btn')
                return service
            }
        } 
        return service
    })
    localStorage.setItem('services', JSON.stringify(my_services));
}

function like_experience(e){
    //gets all the current experience data
    let my_experiences=JSON.parse(localStorage.getItem('job_exp'));
    
    //loops through each loop determining previous value and new value
    my_experiences = my_experiences.map((experience)=>{
        
        //checks if we working on correct data
        if(Number(experience.id) === Number(e.currentTarget.id)){
            if(experience.liked){
                experience.liked = false;
                e.currentTarget.classList.remove('liked-btn')
                e.currentTarget.classList.add('like-btn')
                return experience;
            }else{
                experience.liked = true;
                e.currentTarget.classList.remove('like-btn')
                e.currentTarget.classList.add('liked-btn')
                return experience
            }
        } 
        return experience
    })
    localStorage.setItem('job_exp', JSON.stringify(my_experiences));
}

function like_testimonial(e){
    //gets all rthe current service data
    let my_testimonials=JSON.parse(localStorage.getItem('testimonials'));
    
    //loops through each loop determining previous value and new value
    my_testimonials = my_testimonials.map((testimonial)=>{
        
        //checks if we working on correct data
        if(Number(testimonial.id) === Number(e.currentTarget.id)){
            if(testimonial.liked){
                testimonial.liked = false;
                e.currentTarget.classList.remove('liked-btn')
                e.currentTarget.classList.add('like-btn')
                return testimonial;
            }else{
                testimonial.liked = true;
                e.currentTarget.classList.remove('like-btn')
                e.currentTarget.classList.add('liked-btn')
                return testimonial
            }
        } 
        return testimonial
    })
    localStorage.setItem('testimonials', JSON.stringify(my_testimonials));
}

//renders the UI for first time
update_service_section();
update_experience_section();
update_testimmonial_section()
//end of rendering UI