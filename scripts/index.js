const recommendslide = new Swiper('.recommend',{
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: '.recommend .swiper-button-next',
        prevEl: '.recommend .swiper-button-prev',
    },
});

const recoDepth1 = document.querySelectorAll('.recommend_depth2');
const recoDepth2 = document.querySelectorAll('.recommend_depth3'); 

recoDepth2.forEach(item => {
    item.style.display = 'none';
});

recoDepth1.forEach(item => {
    item.addEventListener('mouseover', () => {
        recoDepth2.forEach(subItem => {
            subItem.style.display = 'flex';
        });
    });
});
recoDepth1.forEach(item => {
    item.addEventListener('mouseout', () => {
        recoDepth2.forEach(subItem => {
            subItem.style.display = 'none';
        });
    });
});
const menuTap = document.querySelectorAll('.menu_tap');
const tapDepth = document.querySelectorAll('.tap_depth');

tapDepth.forEach(item => {
    item.style.display = 'none';
});
menuTap.forEach(item => {
    item.addEventListener('mouseover', showMenu);
    item.addEventListener('mouseout', hideMenu);
});
tapDepth.forEach(item => {
    item.addEventListener('mouseover', showMenu);
    item.addEventListener('mouseout', hideMenu);
});
function showMenu() {
    tapDepth.forEach(subItem => {
        subItem.style.display = 'flex';
    });
}
function hideMenu() {
    tapDepth.forEach(subItem => {
        subItem.style.display = 'none';
    });
}

const showBtn = document.querySelector('.item1_s4');
const msgView = document.querySelector('.item1_s5');
msgView.style.display = 'none';
showBtn.addEventListener('mouseover',()=>{
    msgView.style.display = "block";
})
showBtn.addEventListener('mouseout',()=>{
    msgView.style.display = "none";
})