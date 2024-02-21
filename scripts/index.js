// const seatBtn = document.getElementsByClassName("seat-btn");
// let count = 0;

// // seat count

// for (const btn of seatBtn) {
//   btn.addEventListener("click", function (e) {
//     count = count + 1;
//     document.getElementById("seat-count").innerText = count;
//   });
// }

const allBtn = document.getElementsByClassName("seat-btn");

for (const btn of allBtn){
  btn.addEventListener("click", function (event){
    const seat = console.log(event.target.parentNode.childNodes[3].innerText);



    console.log(event.target.);
  })
}


// common function for convert string into number

function getConvertedValue(id){
  const seat = document.getElementById(id).innerText;
  const convertSeat = parseInt(seat);
  return convertSeat;
}

// const result = getConvertedValue("available-seat");
// console.log(result);

