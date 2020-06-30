
//Task 1
//Access HTML element with id tag-line.
let tagLine = document.getElementById('tag-line');
console.log(tagLine);

//Access all headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll('.bg-main-content h2');
console.log(headings);

//Create the variable collect and assign it with content of tag-line.
let collect = `
${tagLine.innerText}
--------------------
`;
console.log(collect);

//Loop through the node list of headings and append the content of each heading to variable collect
//append the textual content of each heading here
//also need to use \n 
for (let i = 0; i < headings.length; i++) {
	 collect += `${headings[i].innerText}\n`
}

//After the loop, use alert to print collect
alert(collect);



//**************Task 2******************//

//Collect all divs with the class name "box" in node list.
let div = document.getElementsByClassName("box");
console.log(div);

//Access 13th div with class name box that belongs to div with the class name bg-main-content.
let access = document.querySelectorAll(".bg-main-content .box")[12];
console.log(access);


//Create variable collect and assign it with the heading and body-text that belong to the 13th div in order to resemble the screenshot below.
let collect1 = access.querySelector('h2').innerHTML + "\n--------------------------------------------\n" ;
console.log(collect1);

let collect2 = access.querySelectorAll('p');
console.log(collect2);

for (let i = 0; i < collect2.length; i++) {
	 //append the textual content of each heading here
	 //also need to use \n 
    collect1 += `${collect2[i].innerHTML}\n`
} 
//console.log(collect1);

//Print collect.
alert(collect1); 

