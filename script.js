


    const sr =  ScrollReveal({ reset: true });
  sr.reveal("#part1,#part2",{

   duration:2000,
   Delay:200,
   distance:"100px",
   origin:"bottom",

 });

 sr.reveal("#cadreimg,.item1,.card1",{

  duration:2000,
  Delay:200,
  distance:"100px",
  origin:"bottom",


});
sr.reveal(".player",{

 duration:1000,
 Delay:100,
 distance:"300px",
 origin:"bottom",


});

sr.reveal(".sponsors h1",{

 duration:1000,
 Delay:1000,
 distance:"300px",
 origin:"right",


});
sr.reveal(".hotels .hotelimg1",{

 duration:1000,
 Delay:1000,
 distance:"300px",
 origin:"right",


});
sr.reveal(".hotels .hotelimg2",{

 duration:1000,
 Delay:1000,
 distance:"300px",
 origin:"left",


});
sr.reveal(".t1",{

 duration:1000,
 Delay:1000,
 distance:"300px",
 origin:"left",


});
sr.reveal(".t2",{

 duration:1000,
 Delay:1000,
 distance:"300px",
 origin:"right",


});
sr.reveal(".cardstorie",{

 duration:1000,
 Delay:1500,
 distance:"500px",
 origin:"bottom",


});


const menuhaffiche = document.getElementById('menuhaffiche');
const menuh = document.getElementById('menuh');
const close = document.getElementById('close');


menuhaffiche.addEventListener('click',()=>{

  menuh.style.transform = "translate(0%)";
    menuh.style.transition = "all 0.5s";
},false);

close.addEventListener('click',()=>{

  menuh.style.transform = "translate(-100%)";
    menuh.style.transition = "all 0.5s";
},false);
