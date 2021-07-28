    function search() {
    // Declare variables
    var input, filter, table, tr, td, i, j, tds, ths, matched;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tr");

    // Loop through all table rows, and hide
    // those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tds = tr[i].getElementsByTagName("a");
        ths = tr[i].getElementsByTagName("th");
        matched = false;
        
        // leave the row header 
        if (ths.length > 0) {
            matched = true;
        }
        else {
            for (j = 0; j < tds.length; j++) {
                td = tds[j];
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    matched = true;
                    break;
                }

            }
        }
        if (matched == true) {
            tr[i].style.visibility = "visible";
        }
        else {
            tr[i].style.visibility = "collapse";
            tr[i].style.border = "none";
        }
        }
    }

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
