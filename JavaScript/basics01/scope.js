/* local vs global variables*/

let iAmGlobal = 'global value'

if (true) {
    console.log(iAmGlobal);
    let iAmLocal = 'local value'
    console.log(iAmLocal);
}

    if (true) {
        king = "Ram"
        console.log(king + " " + typeof(king));
    }

// uncomment and see error    
//console.log("Trying to access iAmLocal out of scope " + iAmLocal);

