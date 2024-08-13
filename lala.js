let me= document.querySelector('#me');

let me1 = document.getElementById('me1');
let tl = gsap.timeline();

me.addEventListener('mouseover',()=>{
    
    tl.to(me1,{
        autoAlpha:1,
        y:-20,
        opacity:0.5,
    })
    tl.to(me,{
       autoAlpha:0,                
    })
})
gsap.to('.ball img',{
    rotate:360,
    duration:2,
    
    scrollTrigger:{
        trigger:'.ball img',
        scroller:'body',
        start:'top 30%',
        end:'top 0%',
        scrub:2       
    }
})
tl.from('.page1 h4',{
    y:-20,
    duration:1,
    opacity:0,
    scale:0,
    stagger:0.2,
    ease:'black.out'
    
})
gsap.from('.page1',{
    y:50,
    duration:1,
    opacity:0,
})
//pageee 22222222

gsap.to('.pin',{
    transform:'translateX(-38%)',
    scrollTrigger:{
        trigger:'.page2',
        scroller:'body',
        scrub:2,
        pin:true,
        start:'top 00%'
    }

})



