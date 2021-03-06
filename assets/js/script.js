$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".menus").slideToggle();
        $(this).toggleClass("cross");
    });

});

let modal_image = document.querySelectorAll('.modal-click'),
    modal_body = document.querySelector('.modal-body'),
    modal_box = document.querySelector('.modal-box'),
    image_source = document.querySelector('.modal-image'),
    main_icons = document.querySelector('.portfolio-icons'),
    all_button = document.querySelector('.all-button'),
    graphic_button = document.querySelector('.graphic-button'),
    web_button = document.querySelector('.web-button'),
    flat_button = document.querySelector('.flat-button'),
    graphic_design = document.querySelectorAll('.graphic-design'),
    web_design = document.querySelectorAll('.web-design'),
    flat_design = document.querySelectorAll('.flat-design')
all_designs = document.querySelectorAll('.all'),
    input_name = document.querySelector('.name'),
    input_email = document.querySelector('.email'),
    input_message = document.querySelector('.message');

modal_image.forEach((i, index) => {
    i.addEventListener('click', () => {
        modal_body.style.display = "block";
        modal_box.style.display = "block";
        image_source.src = modal_image[index].src;
    });
})

modal_body.addEventListener('click', function () {
    modal_body.style.display = "none";
    modal_box.style.display = "none";
})

all_button.addEventListener('click', function () {
    all_designs.forEach(i => {
        i.style.display = "block";
    });

    main_icons.style.justifyContent = "space-between";
})

graphic_button.addEventListener('click', function () {
    all_designs.forEach(i => {
        i.style.display = "none";
    })

    graphic_design.forEach(j => {
        j.style.display = "block";
    })

    main_icons.style.justifyContent = "center";
})

flat_button.addEventListener('click', function () {
    all_designs.forEach(i => {
        i.style.display = "none";
    })

    flat_design.forEach(j => {
        j.style.display = "block";
    })

    main_icons.style.justifyContent = "center";
})

web_button.addEventListener('click', function () {
    all_designs.forEach(i => {
        i.style.display = "none";
    })

    web_design.forEach(j => {
        j.style.display = "block";
    })

    main_icons.style.justifyContent = "center";
})