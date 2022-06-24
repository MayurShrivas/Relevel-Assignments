/* Given `n` piece of sweet, help peter and john divide it among themselves such thatboth get an
equal number of sweets. Note that can not be broken into sub-pieces. You have to tell if
it is possible to make such distribution or not based upon n number of pieces. i.e., possible outpur : `yes` or `no`.*/

function verify(n){
    return (n <= 2
        ? false
        : (n % 2 == 0
            ? true
            : false)) ;
}
let n = 8;
console .log((verify (n) ? "Yes" :"No") + "\n");
