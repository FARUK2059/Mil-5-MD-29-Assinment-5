// starrt banner button function

// ticket section ID
const bannerSection = document.getElementById("buy-ticket");

// button ID
const ticketSection = document.getElementById("banner");

ticketSection.onclick = function(){
    const ticketSectionPosition = bannerSection.offsetTop;
    window.scrollTo(0, ticketSectionPosition);
};


// clic ticket button function
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
        }

        else if (isSelected) {
            seat.classList.remove("selected");
            seat.classList.remove("bg-lime-600");

            selectedSeats--;
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
        console.log(selectedSeats);
    });
    
});
