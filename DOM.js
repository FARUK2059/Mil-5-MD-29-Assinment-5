// starrt banner button function

// ticket section ID
const bannerSection = document.getElementById("buy-ticket");

// button ID
const ticketSection = document.getElementById("banner");

ticketSection.onclick = function(){
    const ticketSectionPosition = bannerSection.offsetTop;
    window.scrollTo(0, ticketSectionPosition);
};





