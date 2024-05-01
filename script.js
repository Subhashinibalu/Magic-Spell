// this function is for creating elements

function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

let container = element("div", "container-fluid mt-1", "", "");

let row = element("div", "row ", "", "");

//api fetch and creating card design to display Harrypotter movie magic spells

const response = fetch("https://hp-api.onrender.com/api/spells");
response
  .then((data) => data.json())
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-3 mt-3";
      col.innerHTML = `
      <div class="card h-100">
      <div class="card-header">
      <h5 class="card-title text-center">${result[i].name}</h5>
      </div>
      <div class="card-footer text-center ">
     
      <button class ="btn">Click to know the meaning</button>
      </div>
      </div>
      `;
      row.append(col); 
    }

    //this is for displaying the meaning of the spell when the button is clicked
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let spellapi = fetch(`https://hp-api.onrender.com/api/spells`);
        spellapi
          .then((data1) => data1.json())
          .then((result1) => {
            alert(`"${result1[index].description}"  `);
          });
      });
    });
  })
  .catch((error) => {
    alert("failed to load");
  });

//appending
document.body.append(container);
container.append(row);
