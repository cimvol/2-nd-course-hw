function PlaySeasons (a) {
    a = prompt('To find out the season, enter the value of the month');
    if (a <= 2 || a == 12)  {
        alert ('Seasons - Winter');
    } else if (a >= 2 && a <= 5) 
    {
        alert ('Seasons - Spring');
    }
    else if (a > 5 && a <= 8) {
    alert ('Seasons - Summer');
    }
    else if (a > 8 && a <= 11) {
        alert ('Seasons - Autumn');
    }
    else if (a > 12) {
        alert('Wrong!!! This month error does not exist');
    }
}

function PlayRemember () {
    let  arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
      alert(arr);
    let  arr1 = arr.sort();
    alert(arr1);
    let answer1 = prompt('write the first element');
    let answer2 = prompt('write the last element');
    let reply1 = 'Яблоко';
    let reply2 = 'Мандарин';
      if (answer1.toUpperCase() === reply1.toUpperCase() && answer2.toUpperCase() === reply2.toUpperCase())  {
          alert ('Сongratulations you answered correctly !!!'); 
        } 
          else if (answer1.toUpperCase() !== reply1.toUpperCase() && answer2.toUpperCase() === reply2.toUpperCase() || answer1.toUpperCase() === reply1.toUpperCase() && answer2.toUpperCase() !== reply2.toUpperCase()) {
                  alert ('You were close to winning');
              }
              else if  (answer1.toUpperCase() !== reply1.toUpperCase() && answer2.toUpperCase() !== reply2.toUpperCase()) {
                alert('You answered incorrectly, please try again');
              }
      }
      
      
      
  
  