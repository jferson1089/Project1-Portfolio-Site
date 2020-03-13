console.log('JS is up and running')


let url = 'https://docs.google.com/spreadsheets/d/11VTYvZzzxHV_I867DbtkGCGE9T6Ld8V5kEhqJI_fVQI/edit#gid=0'
let id = '11VTYvZzzxHV_I867DbtkGCGE9T6Ld8V5kEhqJI_fVQI'

let source =`https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

fetch(source)
  .then( response => response.json() ) //this converts date from string back into an object
  .then( data => {
  console.log('data', data)//this provides us access to the parsed data
  let projects = data.feed.entry.map(project => {
    // console.log('project', project.gsx$title.$t)
    return {
      title: project.gsx$title.$t,
      image: project.gsx$image.$t,
      description:project.gsx$description.$t,
      url:project.gsx$url.$t
      
    }
  })
  app(projects)
  showSlides()
})

function app (projects){
    console.log('app-projects', projects)

    

    projects.forEach( container => {
        let $li = $(`<div class="imageContainer"><h2 class='title'>${container.title}</h2><a href='${container.url}'><img src='${container.image}' class='containerImage' style="width:150px;height:100px;"></img></a><p>${container.description}</p></div>`)
      
        $('.section1').append($li);




        
        let $slide=$(`<div class=slideBox fade>
<a href='${container.url}'>
<img src='${container.image}' style ='width: 500px; height:200px;'></a>
<div>${container.title} - ${container.description} </div>`)

$('div.slideshow-container').append($slide)

      })
      






    }  

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slideBox");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
    }





//This section is for the click function on hamburger icon. resources linked on style sheet.
$('.menu-toggle').click(function() {
  
    $('.site-nav').toggleClass('site-nav--open', 400)
    $(this).toggleClass('open')
})