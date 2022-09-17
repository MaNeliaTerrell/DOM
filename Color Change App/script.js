const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
];


// ===== CHALLENGE =====
      // 1. Create A Function (generate)
      // Function should get a random color from the COLORS_ARRAY
    const randomColors = Math.floor(Math.random() * COLORS_ARRAY.length);

    // Grab ul, body, button from HTML

    const body = document.querySelector('body')
    const button = document.getElementById("#generate-color")
    const ul = document.getElementById('#color-list')

    // Event listener for button
      
    button.addEventListener('click',function(e){
        console.log(e.target);)
    li.addEventListener('click',function(e){
        console.log(e.target);)
      // Create a li element
    const li = document.createElement('li')

    // colors on the li element  
    // Add the color name to the li text
    li.textContent = randomColors
 
    //    Set the background color of the li to the random colors

    body.style.backgroundColor = randomColors 

      // Append the li to the ul

    ul.appendChild(li)
     
    //  
// 2. Create Function (reset)
      // Should remove all li children from the ul. 
    function reset(){
        const children = ul.querySelectorAll('li') 

    }
      
      // Should set background color to white.
      body.style.backgroundColor = 'white' 