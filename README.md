# Unit 3 Creative Practice: Visual Coding and Physical Computing
This repository contains information and code for the physical computing unit for the Diploma in Creative Computing of the Creative Computing Institute.

The Unit will be using Arduino's to explore physical computing. It will also explore how physical and digital computing can be integrated to create interactive systems. By using the idea of play you will be creating interactive physical systems using a range of inputs and outputs. 

## Physical Computing
 Physical computing allows you to create programmed systems that are manifested with physical objects. This could be objects that sense and interact with the world, that respond to data, that send data that change other systems, or a mixture of the three.

## Assessment
To be added add link to brief

## Play
In this unit you will be creating a physical computing project based around play. Play can be many things, it could be a game, imaginary situations or explorational. It is enjoyable, imaginative, mainly voluntary and active.

## References
These are some of the materials I used as reference when writing this unit:

Arduino projects book [pdf](https://bastiaanvanhengel.files.wordpress.com/2016/06/arduino_projects_book.pdf)

Instructables [website](https://www.instructables.com/) - various Arduino projects

Arduino [website](https://www.arduino.cc/)

Rules of play - game design fundamentals by Katie Salen Tekinbaş and Eric Zimmerman 

Seriously Considering Play - Designing interactive learning environments based on the blending of microworlds, simulations, and games by Lloyd P. Rieber 1996

The Infinite Playground, A players guide to the imagination - Bernard De Koven with Holly Gramazio

## Resources
These are some useful resources that don't fit into a particular week.

[Catt Small on The Full Story: Presenting Complete Ideas](https://www.youtube.com/watch?v=B3Qj_f1UrmA). Really good breakdown on how you can desing the content for slide presentations.

## Safety 

In this unit you will be working with electricity and electrical components. Safety has to be considered when working with electricity. When working on Arduino projects: 

- Make sure that the Arduino is disconnected from its power source when you are attaching components, this power source maybe through the USB attachment to your computer or an external battery. 
- All the projects in the book either use 5V (power from the USB) or 9V (through a battery). At this point you shouldn't go above this voltage for the Arduino.
- If a component gets overly hot, or you smell burning disconnect the power supply from the Arduino. 
- There are some components that will overheat if they are not connected correctly, such as the temperature sensor, if it starts to get hot, disconnect the power supply 
- Capacitors need to have the power and ground going to the correct pin, it they don’t they can explode 

## Week 1 - Thursday 22nd October 2020: Introduction to JavaScript and Node.js
If you want to mix physical components with digital interfaces and create visual outputs, a browser page is a good way to do it. This means getting to know some web languages including HTML, CSS and JavaScript. This workshop will be an introduction to JavaScript and Node.js, as well Socket.io a library that lets you create multiuser interactive web pages. It will also be an introduction to the unit, showing examples of physical computing projects, and introducing the idea of play.

### Week 1 materials
Week 1 [slides](https://developdata.github.io/unit3_week_01)

Getting started [with JavaScript]( https://glitch.com/edit/#!/start-javascript)

Setting up [Node.js]( https://glitch.com/edit/#!/start-nodeapp)

Introduction to [Websockets]( https://glitch.com/edit/#!/start-sockets)

### Homework
Go back through all three glitch projects, play around with them and remix them.

Install the Arduino integrated development environment (IDE) onto your computer.

If you haven't got Node.js installed on your computer, install it, in week four we will start creating a web server that will take in data from an Arduino.  

I've put instructions for these installations in the week 1 [README](https://github.com/developdata/CCIDiploma-Unit3/tree/master/week_1#installing-nodejs). 

Download [visual studio code](https://visualstudio.microsoft.com/free-developer-offers/) its a free development environment. 

## Week 2 - Thursday 29th October 2020: Introduction to Arduino
This workshop is an introduction to Arduino. There will be a demonstration on setting up the Arduino programming environment and getting started with some basic components. You will start to connect components to an Arduino and write a short program.

### Week 2 materials
Week 2 [slides](https://developdata.github.io/unit3_slides/week_02/#0)

Arduino projects book [pdf](https://bastiaanvanhengel.files.wordpress.com/2016/06/arduino_projects_book.pdf). I have added some notes at the bottom of this Readme file about some of the projects.

Week 2 [folder](https://github.com/developdata/CCIDiploma-Unit3/tree/master/week_2)

### Homework
Over the next four weeks, small groups you will be working through the Arduino project book as homework. 

## Week 3 play
This week will be a look at how games are designed, this should help you think about what you want to develop during this unit, and how to incorporate play into the piece.

### Week 3 materials
Week 3 [slides](https://developdata.github.io/unit3_slides/week_03/#0)

The Pig game [link](https://game-design.glitch.me/) for game

The Pig game [link](https://glitch.com/~game-design) for code

Write your rules exercise code [link](https://glitch.com/edit/#!/write-your-rules?path=README.md%3A1%3A0)

Arduino projects book [pdf](https://bastiaanvanhengel.files.wordpress.com/2016/06/arduino_projects_book.pdf).


### Week 3 references
[Deconstructing games as play: Progress, power, fantasy, and self](https://www.researchgate.net/publication/257682638_Deconstructing_games_as_play_Progress_power_fantasy_and_self) Catherine Milne, Cult Stud of Sci Educ (2012) 7:761–765 DOI 10.1007/s11422-012-9462-7

The Infinite playground – A players guide to Imagination, Bernard De Koven with Holly Gramazio 

Finite and Infinite Games[link](https://jamescarse.com/wp/?page_id=61) James Carse

Rules of play - game design fundamentals, Katie Salen Tekinbaş and Eric Zimmerman 

[How Electricity Works](https://howtomechatronics.com/learn/electricity/electric-charge-how-electricity-works/)

Hello Lampost - [Hello Lamp Post Singapore](https://vimeo.com/283965358)  

[The Moving Forest] (https://vimeo.com/1848454)

[Introdbots](https://www.masterdigitaldesign.com/case/introbots)  

[And] (https://www.behance.net/gallery/69142363/Introbots) 

[Line wobbler]https://wobblylabs.com/projects/wobbler()  

[The crown fountain](https://jaumeplensa.com/works-and-projects/public-space/the-crown-fountain-2004 ) 

[Constell-Action](https://pangenerator.com/projects/constellaction/) 

### Week 3 homework
Make sure that Node.js is installed on you computer

Watch these videos on Electricty

[What is Electric Charge and How Electricity Works](https://howtomechatronics.com/learn/electricity/electric-charge-how-electricity-works/)

[What is Electricity](https://learn.sparkfun.com/tutorials/what-is-electricity/all)

[Voltage, Current, Resistance, and Ohm's Law](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/all)

## Week 4 - Thursday 12th November 2020: Arduino Data to a Web Page
This week you will be sending data from an Arduino to a web page, via a local Node.js server on your computer. The data will be a button click, the web page will say how many times the button has been clicked then the page is opened. 

### Week 4 materials
[Slides](https://developdata.github.io/unit3_slides/week_04/#0)

[w3schools introduction to Node.js](https://www.w3schools.com/nodejs/nodejs_intro.asp)

[About Node Package Manager (npm)](https://docs.npmjs.com/about-npm)

### Week 4 homework
Go through the Arduino project book in your groups of three

Update the Arduino code so that it also sends data when the button is released. Update the application code so it does something with this new data.

### Week 4 References
[NodeBots - JavaScript robotics](https://nodebots.io/)

[Drone programming with JavaScript and Node.js](https://medium.com/maestral-solutions/programming-the-ar-drone-2-0-using-javascript-and-node-js-part-1-10bb946c60e5)

## Week 5 - Thursday 19th November 2020: Creating Web Pages with HTML and CSS
Today’s workshop is all about creating web pages. It will concentrate on HTML and CSS which are used in the creation of web pages. The aim of this workshop is to get you familiar with HTML and CSS, understand what each does and how to write them.

There are 3 videos to get you started, then I have gathered some online resources so you can explore the area you are interested in. As there are quite a few I have listed them in the [week 5 folder.](https://github.com/developdata/CCIDiploma-Unit3/tree/master/week_5)

### Week 5 materials
[Slides](https://developdata.github.io/unit3_slides/week_05/#0)

[Week 5 Folder](https://github.com/developdata/CCIDiploma-Unit3/tree/master/week_5)

### Week 5 homework
The homework for this week will be to continue to go through the Arduino project book. Also go through any of the resources that interest you in the shared document.

Also, see how you could add JavaScript to the web pages in the workshop, how could you change content and make the pages interactive.

## Week 6 - Arduino: Analog and Digital Inputs and Outputs
This weeks workshop is on analog and digital input and output pins (IO) on the Arduino.

### Week 6 materials
[Slides](https://developdata.github.io/unit3_slides/week_06/#0)

[Week 5 Folder](https://github.com/developdata/CCIDiploma-Unit3/tree/master/week_6)

## Homework
Continue with the Arduino project book.

Continue going through the resources from week 5.

If you can work with Node.js and serialport, go back through the week 4 videos and see if you can get the button data to the web page. Look at the set up for the two buttons today and send that data to the front end.

## Week 7 - Structure and Code - developing web pages
This week's workshop builds on week 5 and looks at how to structure a web site, and how to construct a web page. I will walk through the process of thinking about what you want to make, and how to get that on a web page. Then I will walk through putting a P5.js project onto a web page. The workshop should give you a better understanding of the structure of websites and how JavaScript can be used to make them interactive.

There are some optional resources, one walks through publishing a web site on GitHub pages.

## Resources
[GitHub page for Week 7](https://github.com/developdata/CCIDiploma-Unit3/tree/master/week_7)

[Slides](https://developdata.github.io/unit3_slides/week_07/#0)

### Homework
Take one of your P5.js project and put it on a web page. Use CSS to style the web page and place the p5.js canvas within it, so it looks like a designed web page.

There is a shared document for this workshop, I'll will give you the link during the workshop. When you have made your page, I would like you to take a screen shot and paste it into this document. If you upload your page to GitHub pages, put in the link as well.

Really push the design of the page, use CSS so the page looks complete.

# Week 8 - The structure of physical computing projects: breaking down the process
The aim this week is to think about how physical projects are made; the different components and systems and how they link together. This will be then put into practice by planning out then building a remix of one of the Arduino projects in the Arduino project groups. This will be undertaken in small groups and can be completed as homework.

## Resources
[GitHub page for Week 8](https://github.com/developdata/CCIDiploma-Unit3/tree/master/week_8)

[Slides](https://developdata.github.io/unit3_slides/week_08/#0)

## Homework
In small groups design and build a remix of one of the projects in the Arduino project book. Base it around play and include a user interaction. In the shared document (I'll share the link during the workshop) write a few paragraphs to describe the project, how you broke it down into sections and the decisions you made in building it, include pictures of sketches and the final outcome.

## Arduino Project Book notes 
As I’ve been going through the project book again, I’ve been noting down things that might be helpful, things that I had to do slightly differently, or didn’t give me the expected result. 

### Project 2 – Spaceship interface 
I found that the LED’s were quite faint in this project, I initially didn’t think it was working, but when I made my workspace darker, I could see they were coming on correctly. 

### Project 3 – Love-o-meter 
I initially had the temperature sensor the wrong way around, it became very hot, if this happens unplug the Arduino from the power source. As the serial monitor is used in this project it is also easy to see that the temperature is too high, as it will show in the monitor. 

### Project 5 – Mood Cue 
This project uses capacitors, so make sure that they are the right way round, with the cathode going to ground. 

I also found that the header pins were too short, I ended up using my own leads and not connecting the servo directly to the breadboard but via the leads. Also, on my servo the white lead twists as it leaves the servo, so it is attached to the centre pin when I attached it to the Arduino. This is something you could check if your servo doesn’t work. You can this this in the picture below, as well as the leads connecting the servo to the breadboard. 

![Servo connected to breadboard](images/arduino1.jpg) 

There is a potentiometer in this project, in the book it looks like all pins are placed on one side of the breadboard. I couldn’t do this with the potentiometer I had so I had the middle pin on the other side of the breadboard and the wire for that pin was on the same side. The photo below illustrates this.  

![Potentiometer connected to breadboard](images/arduino2.jpg) 
