// script.js
//enquiry page
document.addEventListener("DOMContentLoaded", function () {
  const orgType = document.getElementById("orgType");
  const npoOptions = document.getElementById("npoOptions");

  orgType.addEventListener("change", function () {
    if (orgType.value === "npo") {
      npoOptions.style.display = "block";
    } else {
      npoOptions.style.display = "none";
    }
  });
});
