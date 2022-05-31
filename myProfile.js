window.addEventListener("DOMContentLoaded", event => {
console.log("This is my Profile Page.");
   
    const head = document.createElement("h1");
    head.innerText = "Amira Selwa Ounzar";
    document.body.appendChild(head);
    head.setAttribute("class", "name");

    const pic = document.createElement("div");
    //pic.innerText = " ";
    pic.setAttribute("class", "image");
    document.body.appendChild(pic);
   

    const para = document.createElement("p");
    para.innerText = "I am a sophomore at ISI.";
    document.body.appendChild(para);

    // const list = document.createElement("ul");

    // const listItem1 = document.createElement("li");
    // const listItem1Content = document.createTextNode("I love to read books!");

    // listItem1.appendChild(listItem1Content);
    // list.append(listItem1);
    // document.body.appendChild(list);
    
    // const listItem2 = document.createElement("li");
    // const listItem2Content = document.createTextNode("I like to write Poetry.");

    // listItem2.appendChild(listItem2Content);
    // list.append(listItem2);
    // document.body.appendChild(list);
    
    // const listItem3 = document.createElement("li");
    // const listItem3Content = document.createTextNode("I like to cook food.");

    // listItem3.appendChild(listItem3Content);
    // list.append(listItem3);
    // document.body.appendChild(list);

    // const listItem4 = document.createElement("li");
    // const listItem4Content = document.createTextNode("I like to make art and paint.");

    // listItem4.appendChild(listItem4Content);
    // list.append(listItem4);
    // document.body.appendChild(list);

    const time = document.createElement("div");
      let date = new Date(); 
      time.innerHTML = date ;
    document.body.appendChild(time); 

    const list = document.createElement("ul");
     list.setAttribute("class", "my-details")

    list.setAttribute("id","details");
    document.body.appendChild(list);
    // Node.appendChild("ul");

  

    const detailsArr = [
        "<li>I like to drink Iced chai tea lattes</li>",
        "<li>I have 1 cat and 3 sisters</li>",
        "<li>My favorite food is sushi.</li>",
        "<li>On the weekends, I read or hang out with my friends</li>",
        `<li>I live in Irving, Texas, and it's currently ${date} here.</li>`
      ];
      
      
      const liString = detailsArr.join(" ");
      const listElement = document.getElementById("details");
      listElement.innerHTML = liString;

      let li = document.querySelectorAll("li");
      li.forEach(function(ele) {
        ele.className = "detail";
      });
      

      
  });
