let cp = 0;
let pp = 0;

function playRound() {
    var computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        temp = "rock";
    }
    else if (computerChoice == 2) {
        temp = "paper";
    }
    else if (computerChoice == 3) {
        temp = "scissors";
    }

    var x = event.target.id;

    document.getElementById("p2").innerHTML = ("Player's choice: " + x);
    document.getElementById("p1").innerHTML = ("Computer's choice: " + temp)

    if (x == "rock" && computerChoice == 1) {
		document.getElementById("result").innerHTML = ("Result: draw")
    }
    else if (x == "rock" && computerChoice == 2) {
        document.getElementById("result").innerHTML = ("Result: lose")
        cp= cp + 1;
    }
    else if (x == "rock" && computerChoice == 3) {
        document.getElementById("result").innerHTML = ("Result: win")
        pp= pp + 1;
    }
    
    else if (x == "paper" && computerChoice == 1) {
        document.getElementById("result").innerHTML = ("Result: win")
        pp = pp + 1;
    }
    else if (x == "paper" && computerChoice == 2) {
		document.getElementById("result").innerHTML = ("Result: draw")
    }
    else if (x == "paper" && computerChoice == 3) {
        document.getElementById("result").innerHTML = ("Result: lose")
        cp = cp + 1;
    }
    
    else if (x == "scissors" && computerChoice == 1) {
        document.getElementById("result").innerHTML = ("Result: lose")
        cp = cp + 1;
    }
    else if (x == "scissors" && computerChoice == 2) {
        document.getElementById("result").innerHTML = ("Result: win")
        pp = pp + 1;
    }
    else if (x == "scissors" && computerChoice == 3) {
		document.getElementById("result").innerHTML = ("Result: draw")
    }

    document.getElementById("p4").innerHTML = ("Computer's points: " + cp);
    document.getElementById("p5").innerHTML = ("Player's points: " + pp);

    if (cp == 5) {
        alert("Computer Wins!");
        cp = 0;
        pp = 0;
        document.getElementById("p4").innerHTML = ("Computer's points: " + cp);
        document.getElementById("p5").innerHTML = ("Player's points: " + pp);
        document.getElementById("result").innerHTML = ("Result: ");
        document.getElementById("p2").innerHTML = ("Player's choice: " );
        document.getElementById("p1").innerHTML = ("Computer's choice: " );
    }
    else if (pp == 5) {
        alert("Player Wins!");
        cp = 0;
        pp = 0;
        document.getElementById("p4").innerHTML = ("Computer's points: " + cp);
        document.getElementById("p5").innerHTML = ("Player's points: " + pp);
        document.getElementById("result").innerHTML = ("Result: ");
        document.getElementById("p2").innerHTML = ("Player's choice: " );
        document.getElementById("p1").innerHTML = ("Computer's choice: " );
    }
}