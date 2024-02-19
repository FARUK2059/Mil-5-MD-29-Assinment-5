// starrt banner button function

// ticket section ID
const bannerSection = document.getElementById("buy-ticket");

// button ID
const ticketSection = document.getElementById("banner");

ticketSection.onclick = function(){
    const ticketSectionPosition = bannerSection.offsetTop;
    window.scrollTo(0, ticketSectionPosition);
};


// clic ticket button function and color
let selectedSeats = 0 ;
let seats = document.querySelectorAll('.busseat');

seats.forEach((seat) => {
    seat.addEventListener("click", function() {
        let isSelected = seat.classList.contains("selected");
        // console.log(isSelected);

        if (!isSelected && selectedSeats < 4) {
            seat.classList.add("selected");
            seat.classList.add("bg-lime-600");

            selectedSeats++;

            document.getElementById('totalSeats').innerText = 40 - selectedSeats;
            document.getElementById('select-seat-count').innerText = selectedSeats;
            document.getElementById("total-seat-price").innerText = 550 * selectedSeats;
            document.getElementById("grend-total-price").innerText = 550 * selectedSeats;

            const priceContainer = document.getElementById("priceContainer");
            const div = document.createElement("div");
            div.classList.add("flex", "justify-around");
            div.innerHTML = `
                <p>${btn.textContent}</p>
                <p>Economy</p>
                <p>550</p>
            `;
            priceContainer.appendChild(div);

        }

        else if (isSelected) {
            seat.classList.remove("selected");
            seat.classList.remove("bg-lime-600");

            selectedSeats--;
            document.getElementById('totalSeats').innerText = 40 - selectedSeats;
            document.getElementById('select-seat-count').innerText = selectedSeats;
            document.getElementById("total-seat-price").innerText = 550 * selectedSeats;
            document.getElementById("grend-total-price").innerText = 550 * selectedSeats;

        }

        if (selectedSeats == 4) {
            seats.forEach(btn => {
                if (!btn.classList.contains("selected")) {
                    btn.disable = true;
                }
            });
            
        }
        
        else {
            seats.forEach(btn => {
                btn.disable = false;
            });
        }
        
    });  
});

// next button disebolity
function nextBtnDisAndEna() {
    const nextButton = document.getElementById("next");
    const inputnumber = document.getElementById("number").value;
    nextButton.disabled = !(selectedSeats > 0 && inputnumber.trim());

}
document.getElementById("number").addEventListener('input', nextBtnDisAndEna);
nextBtnDisAndEna();



//  go to next step

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function play(){
    hideElementById('first-page');
    showElementById('second-step');  
}



