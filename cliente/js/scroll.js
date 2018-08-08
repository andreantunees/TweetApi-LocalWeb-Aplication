window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topo").style.display = "block";
    } else {
        document.getElementById("topo").style.display = "none";
    }
}

function irTopo() {
    window.scrollTo(0,0);
}