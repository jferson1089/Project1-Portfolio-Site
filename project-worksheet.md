# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete (1 Bug)
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

For my Portfolio, I would like to build a Mobile webpage that sizes up to tablet and thant desktop. The overall idea for my portoflio is simple and styled. I would like An about me section, an contact section, some links for my GitHub and my Linkedin account. Then depending on mobile or deskop I would like one to two areas that has a carousel feature to display projects.

## Google Sheet

Include link to your google sheet here.  Here is the sample [Joe had used in class](https://docs.google.com/spreadsheets/d/15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk/edit#gid=0) 

## Wireframes
Figma Layout: 
 https://www.figma.com/file/lrFbBtfvl58gY9pBrwzvEJ/Untitled?node-id=0%3A1
 
 Additional Hand Drawn Wire Framing:
 Mobile:https://res.cloudinary.com/jferson1089/image/upload/v1583728467/image0_qzterw.jpg
 Desktop/Tablet:https://res.cloudinary.com/jferson1089/image/upload/v1583728467/image1_lzyffp.jpg
 Time/Priority Matrix: https://res.cloudinary.com/jferson1089/image/upload/v1583728467/image2_a0ko1h.jpg

## Time/Priority Matrix 

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

Photo of Time priority Matrix: https://res.cloudinary.com/jferson1089/image/upload/v1583728467/image2_a0ko1h.jpg
A.Html,Css, JavaScript, and jquery : High priority: 4 hours minimum
B.Coloring (basic styling): Medium Prioirty: 1 Hour
C. Layout (Grid and Flexbox): High Priority: 1 Hour
D. Carousel: Medium Priority : 4 Hours
E. Fixed on Scroll Nav Bar : Low Priority : 5 Hours
F. Hamburger Menu : High Priority : 3 Hours (probably much less)
G. Contact Form (Full Working?) : High Priority: 5 Hours (Seems to be the biggest issue currently)
H. API from Google Form : High Priority : Time : Review in Class?

From the Time priority Matrix I have reached a total of 24 Hours rounding up a bit for troubleshooting and the need to research any type of specific features

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

****MVP: A working contact form!

****MVP: Working Display of Projects

****-MVP: Any javascript or jQuery functions work from mobile to tablet to desktop.

****-MVP: Any images loading properly and styles
****-MVP : Hamburger Menu for Mobile (Even though it is needed for project, if the Nav bar works hamburger menu might not be top priority)
 


****-PostMVP : An on hover description box for the projects
****PostMVP: Any type of Desktop only features such as cursor and on hover functions
-PostMVP: Using the Nav bar to Scroll down the page, needs to work or it is pointless to be there.
-PostMVP : Advanced Coloring or Advanced CSS styling
-PostMVP : Fixed Nav bar


#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Html and Css layout : Grid | High | 2.5 |	5|5	|
| Hamburger Menu | High| 3 | 2.5	|	2.5|
| Working with API | H | 3hrs| 6 | 6|
| Adding Form | High | 5| 2 | 2 |
|Coloring| Low | 1 | 1	|	|
|Carousel | Low | 4 	|	4| 4|
|Additional Styling| Low| 2|	|	|
| Total | H | 17hrs| 22 |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 -Currently Going to Attempt to Build Everything on my Own. Will place documentation for any type of code I look at in this section.
 
 #### https://www.youtube.com/watch?v=eVvhNAnOf1A
 -Used this video to show me how to link a google form to collect data from my contact form and add it into a google sheet (Would like to improve this, but for time sake will most likely leave as is.)
 
 
 #### Hamburger Menu
-https://codepen.io/fgregorydfw/pen/XBKVwg
-I would like to implement a similiar design for my hamburger menu. This one is responsive to screen size
-This section required alot of the same styling due to the border radius curved effect coming out then sizing to the box. I really liked this style. Changes original colors and fonts.
-Used a similair span element in h1 tag thought it looked very clean and precise compared to original header layout.


#### Slideshow
https://www.w3schools.com/howto/howto_js_slideshow.asp
-Went with a timed slideshow for mobile. Used this resource for the javascript and timing. Injected the images and container in with jquery

#### https://www.youtube.com/watch?v=TOjD8iX7hV0&feature=youtu.be

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
<article> 
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScPZ0irlg-ezzRgiHTRqyeMXhGkhjv-4GkzJoPEGiawTiRC0A/formResponse" target="_self" method="POST">
        <input type="text" placeholder=" Name.." name="entry.1257656603">
        <input type="text" placeholder=" Email.." name="entry.1175475185">
        <input type="text" class="textbox" placeholder="Type Here.." name="entry.1376384118">
        <button>Contact Me</button>
        </form></article>
```
Above is my form box with linking into the google forms and google spreadsheet to record responses. I used this method for time saving, currently it still brings up a google "submitted" box which I would like to remove if I have time to look into it. So using youtube video linked above, after creating the form you can inspect the elements of each particular box and set them appropriately. Then you make your form action the url of the google form and it links it up. The Form, inputs, and button where created and styled by me.



## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
