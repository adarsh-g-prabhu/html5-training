
function clicked(){
    alert("clicked the button!!!!");
}

function mouseover()
{
    const btn = document.getElementById('mouseover');
    btn.style.backgroundColor= 'blue'
}

const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
