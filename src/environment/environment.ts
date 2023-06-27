export const socialMedia = {
    twitter:'https://twitter.com/overbowlershead',
    instagram:'https://instagram.com/arvindh_adiya?igshid=ZDdkNTZiNTM=',
    linkedin:'https://www.linkedin.com/in/arvindhKM',
    github:'https://github.com/ShockStan',
    email:'aaaeroa@gmail.com'
}
export const gitHub = {
    flight:'https://github.com/ShockStan/Flight-Tkt-Booking-Angular',
    email:'https://github.com/ShockStan/SendMailGmailAPINodeJS',
    cricket:'https://github.com/ShockStan/cricket-api-v1',
    portfolio:'https://github.com/ShockStan/portfolio',
    spring:'https://github.com/ShockStan/flight-tkt-booking-api',
    thymeleaf:'https://github.com/ShockStan/springboot-thymeleaf-posgresql-PBKDF2',
    python:'https://github.com/ShockStan/Django-OnlineMarkerPlace-SportsEquipment',
    swing:'https://github.com/ShockStan/TicTacToe-Bingo-JavaSwing',
    c:'https://github.com/ShockStan/Find-replace-a-word-in-all-files-in-a-directory',
    demo:'https://github.com/ShockStan/company-website-demo'
}
export const youTube = {
    flight:'https://www.youtube.com/watch?v=yyW23LwwSnQ',
    cricket:'https://www.youtube.com/watch?v=OEIqVBXdbTY',
    portfolio:'',
    thymeleaf:'https://www.youtube.com/watch?v=6wE-SZE0eT8',
    python:'https://www.youtube.com/watch?v=Bz2XkhYT4bk',
    swing:'https://www.youtube.com/watch?v=GJ2tBSXKiGQ',
    demo:'https://youtu.be/aTZy5L6QtVU'
}
export const links = {
    flight:'https://tripsterflight.netlify.app',
    cricket:'',
    portfolio:'https://shockstan-arvindh.netlify.app',
    spring:'https://flightticket-6dst.onrender.com/flights'
}
export const projects=[
    {
    name:'Ticket Booking App',
    tech:[' Angular ', ' Java ', ' SpringBoot ', ' MongoDB ', ' TailwindCSS '],
    caption:'Angular Ticket Booking',
    desc:'Angular Ticket Booking App with Spring Boot API. You can select seats, book tickets and download them.',
    link:links.flight,
    github:gitHub.flight,
    youtube:youTube.flight,
    image:'flight.svg'
  },{
    name:'Automatic Email Reply',
    tech:['NodeJS','GoogleAPI'],
    caption:'Program to send automatic replies to received mails',
    desc: 'NodeJS app made with Google Gmail API, where reply is sent to every new eamil received in inbox and then added to separate label',
    github:gitHub.email,
    image:'email.svg'
  },{
    name:'Review App',
    tech:['React', 'Java', 'SpringBoot', 'BootStrap', 'MongoDB'],
    caption:'Carousal display showcase in React',
    desc:'Full Stack App built React and Spring Boot. You can see my favorite cricket players stats and watch them play, and also give rating to them.',
    link:links.cricket,
    github: gitHub.cricket,
    youtube:youTube.cricket,
    image:'cricket.svg'
  },{
    name:'Portfolio',
    tech:['Angular','TailwindCSS'],
    caption:'Showcase my best',
    desc:'You get to see my protfolio and check out projects I have built, skills I know and lot more. And this is that.',
    link:links.portfolio,
    github: gitHub.portfolio,
    youtube:youTube.portfolio,
    image:'portfolio.svg'
  },{
    name:'Rest API',
    tech:['Java', 'SpringBoot', 'MongoDB'],
    caption:'Spring Boot API',
    desc:'Rest API built using Spring Boot with MongoDB. You perform GET, POST, PATCH and DELETE requests.',
    link:links.spring,
    github: gitHub.spring,
    image:'spring.svg'
  },{
    name:'User Management',
    tech:['Java', 'SpringBoot', 'Thymeleaf', 'PostgreSQL','TailwindCSS'],
    caption:'Web App with Thymeleaf UI',
    desc:'Spring Boot app with UI built using Thymeleaf templates. PBKDF2 password encryption is used for authentication.',
    github: gitHub.thymeleaf,
    youtube:youTube.thymeleaf,
    image:'thymeleaf.svg'
  },{
    name:'E-Commerce',
    tech:['Python', 'Django', 'TailwindCSS'],
    caption:'eCommerce with Django',
    desc:'Online Market Place built using Django, a web framework based on Python. It has sign up/login feature, messaging and other features.',
    github: gitHub.python,
    youtube:youTube.python,
    image:'python.svg'
  },{
    name:'Showcase',
    tech:['Angular','TailwindCSS'],
    caption:'Demo website',
    desc:'A basic demo website for tour planning company, made using Angular',
    github:gitHub.demo,
    youtube:youTube.demo,
    image:'website-demo.svg'
  },{
    name:'Tic-Tac-Toe & Bingo',
    tech:['Java'],
    caption:'GUI with Java Swing',
    desc:'GUI based games developed with Java Swing, a GUI widget tool.',
    github: gitHub.swing,
    youtube:youTube.swing,
    image:'swing.svg'
  },{
    name:'Word Search program',
    tech:['C++'],
    caption: 'Search for words in files',
    desc:'C++ program to search for a specific word in all files in a directory. The program searches only for the exact word, even if its surrounded by punctuations.',
    github: gitHub.c,
    image:'c.svg'
  },
];
export const about = {
  bio:'Hi there, I am Arvindh. A full stack web developer who specialises in aNGular and Java.',
  experience:'Yes, a 22 year old fresher who graduated college a year back.',
  education:{course:'B.Tech, textile technology',year:'2022',percentage:'83%'},
  join:'Available to start immediately.'
}