const showTab = (tabNumber) => {
    // This function will display the specified tab of the form..
    let formTab = document.getElementsByClassName("form__tab");

    formTab[tabNumber].style.display = "block";

    //... and fix the Previous/Next buttons:
    if (tabNumber == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (tabNumber == (formTab.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit"
    } else {
        document.getElementById("nextBtn").innerHTML = "Next"
    }
}

const nextPrev = (tabNumber) => {

    // This function will figure out which tab to display
    let formTab = document.getElementsByClassName("form__tab")

    // Hide the current tab:
    formTab[currentTab].style.display = "none";

    // Increase or decrease the current tab by 1:
    currentTab = currentTab + tabNumber;

    // if you have reached the end of the form...
    if (currentTab >= formTab.length) {
        // ... the form gets submitted:
        document.getElementById("makeClaimForm").submit();
        return false;
    }

    // Otherwise, display the correct tab:
    showTab(currentTab);
}

let currentTab = 0 // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


