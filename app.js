let faqSection = document.getElementsByClassName("faq-section");
let buttons = document.getElementsByClassName("button");

let faqPara = document.getElementsByClassName("faq-para");

let newPara = document.createElement('p');

console.log(faqSection.length)

for(let i = 0; i < faqSection.length; i++) {



    faqSection[i].addEventListener("click", function(e) {

        console.log(e.target.classList)
        if(buttons[i].classList.contains("fa-plus")) {

            [].forEach.call(buttons, function(button) {
                button.classList.remove("fa-minus");
                button.classList.add("fa-plus");
            });


            [].forEach.call(faqPara, function(para) {

                if(para.classList.contains("show")) {
                    para.classList.remove("show");
                    para.classList.add("hide");
                }
            });

            buttons[i].className = "fa fa-minus fa-2x button";
            faqPara[i].classList.remove("hide");
            faqPara[i].classList.add("show");
        } else {
            buttons[i].className = "fa fa-plus fa-2x button";
            faqPara[i].classList.remove("show");
            faqPara[i].classList.add("hide");
        }
        
    });

}