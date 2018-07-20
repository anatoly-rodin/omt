(function() {
    let countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
    let daysBlock = document.getElementById('countdown__days'),
        hoursBlock = document.getElementById('countdown__hours'),
        minsBlock = document.getElementById('countdown__mins'),
        secsBlock = document.getElementById('countdown__secs');
    
    let x = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
    
        daysBlock.innerHTML = "" + Math.floor(distance / (1000 * 60 * 60 * 24));
        hoursBlock.innerHTML = "" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minsBlock.innerHTML = "" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        secsBlock.innerHTML = "" + Math.floor((distance % (1000 * 60)) / 1000);
        
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
})();