const container = document.querySelector("#container");
const content = document.createElement("div");
const headerOne = document.createElement("h3");
const headerTwo = document.createElement("h1");
const para = document.createElement("para");
const anotherPara = document.createElement("p");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    alert("Hello World");
    
});

headerOne.style.color = "blue";
headerOne.textContent = "Hey a blue h3!";

para.style.color = "red";
para.textContent = "Hey I'm red!";

content.classList.add("content");

content.setAttribute("style", "border-color: black; background: pink;");
headerTwo.textContent = "I'm in a div.";
anotherPara.textContent = "ME TOO!!!";
content.textContent = "This is the glorious text-content!";


content.appendChild(headerTwo);
content.appendChild(anotherPara);
container.appendChild(content);
container.appendChild(headerOne);
container.appendChild(para);

