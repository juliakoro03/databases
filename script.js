// -- INITIALISING SUPABASE CLIENT WITH MY PROJECT URL & API KEY --
// supplying the type definitions to supabase-js first
import { createClient } from '@supabase/supabase-js'
import { Database, Tables, Enums } from './database.types.ts';
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

const supabaseUrl = 'https://xcyzaslwqzwecvzwpdfu.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjeXphc2x3cXp3ZWN2endwZGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NTM1NzUsImV4cCI6MjA2MTQyOTU3NX0.bi_UxiR9_3jZQ9l8rIlbfnw8hUgIm_0ftgCctUp5LZI';
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase
.from("people")
.select();

// darkmode & lightmode for all pages
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch-button')

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

// -------- MAIN PAGE FUNCTIONALITY (index.html) --------
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