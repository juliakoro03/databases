// -- INITIALISING SUPABASE CLIENT WITH MY PROJECT URL & API KEY --

// const supabaseUrl = ''; 
// const supabaseKey = '';
// const supabase = createClient(supabaseUrl, supabaseKey);

// -------- MAIN PAGE FUNCTIONALITY (index.html) --------
// darkmode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

// TESTS

// -------- OWNER SEARCH FUNCTIONALITY (people.html) --------

// button function 
// const button1 = document.getElementById("owner-btn");
// button1.addEventListener("click", function() {
    // function code
//});

// submit button function
function displayText() {
  // needs to display the text for only when there is nothing to list
  var text = document.getElementById("textField");
  text.style.display = "block";
} 

// add submit button function for when there is data to display

// -------- VEHICLE SEARCH FUNCTIONALITY (vehicle.html) --------
 


// -------- ADD VEHICLE FUNCTIONALITY (add-vehicle.html) --------