// let input = document.querySelectorAll("input"),
//     form = document.querySelector(".box"),
//     right = document.querySelector(".right"); 


// form.addEventListener("submit", (e) => {
// e.preventDefault();

// let users = [
//   {
//     kitob: input[0].value,
//     Muallif: input[1].value,
//     Miqdori: input[2].value,
//   },
// ];

// if (
//   users[0].kitob === "" ||
//   users[0].Muallif === "" ||
//   users[0].kitob === null ||
//   users[0].Muallif === null
// ) {
//   alert("Ma'lumotlaringizni kiriting");
// } else {
//   let newDiv = document.createElement("div");
//   newDiv.innerHTML = `<div id='row'><h2 class='alert alert-danger'>
//     Kitob Nomi: ${users[0].kitob} -- Kitob muallifi: ${users[0].Muallif} -- Miqdori: ${users[0].Miqdori} -- tavsiya qilish: ${input[2].checked ? "Yo'q" : "Ha"} <button class='btn btn-danger' onclick="remove(this)">Delete</button></h2></div>`;
//   right.append(newDiv);
//   form.reset();
// }
// });

// function remove(btn) {
// btn.closest("div").remove();
// }


let input = document.querySelectorAll('input'),
    form = document.querySelector('.box'),
    right = document.querySelector('.right');

    form.addEventListener('submit', (e) => {
     e.preventDefault();

     let users = [
      {
       kitob:input[0].value,
       Muallif:input[1].value,
       Miqdori:input[2].value
      },
     ];

     if (
      users[0].kitob === "" ||
      users[0].Muallif === "" ||
      users[0].kitob === null ||
      users[0].Muallif === null 
     ) {
      alert('Malumotlaringizni kiriting');
     } else {
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `<div id="row"><h2 class="alert alert-danger">
      Kitob Nomi: ${users[0].kitob} --- Kitob muallifi: ${users[0].Muallif} --- Kitob Miqdori: ${users[0].Miqdori} Tavsiya qilish: ${input[2].checked ? "Yo'q" : "Ha"} -- <button class='btn btn-danger' onclick='remove(this)'>Delete</button>
      </h2></div>`;
      right.append(newDiv)
      form.reset();
     }
    });

     function remove(btn) {
    btn.closest('div').remove();
}
