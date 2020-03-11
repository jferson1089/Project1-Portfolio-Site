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
})

function app (projects){
    console.log('app-projects', projects)
}

let addProject = ( ) => {
    image = projects.image
    let $img = $('<img>')
    let $div = $('<div>').setClass()
    
}

//This section is for the click function on hamburger icon
$('.menu-toggle').click(function() {
  
    $('.site-nav').toggleClass('site-nav--open', 400)
    $(this).toggleClass('open')
})