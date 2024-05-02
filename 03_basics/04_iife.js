// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log('DB Connected');
// }
// chai()

(function chai(){
    console.log('DB Connected');
})();
// (function definition)(execution)

// IIFE -> Jo fn immediately execute ho jaiye
// If upar 1st IIFE fn me semicolon ni lgynge to niche wla iife fn ni chalega so apply semicolon khud se.

(function aurcode(name){
    console.log(`DB connected two ${name}`);
})('Abhishek');

//Unnamed IIFE
(( name ) => {
    console.log(`DB connected three ${name}`);
})('Abhishek')