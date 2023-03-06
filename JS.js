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
