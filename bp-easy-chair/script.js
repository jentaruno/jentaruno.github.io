//var finalDissent = [false, false, false, false, false, false]
var finalOObeatOG;
var finalCGbeatOG;
var finalCGbeatOO;
var finalCObeatOG;
var finalCObeatOO;
var finalCObeatCG;

const benches = ["OG", "OO", "CG", "CO"];

function $(x) { return document.getElementById(x); }

function interchangeSymbol() {
    return `<svg style="display:inline" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
fill="currentColor" class="bi bi-arrow-left-right"
viewBox="0 0 16 16">
<path fill-rule="evenodd"
    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
</svg>`
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function onManualType(e) {
    $("inputDecisionStatus").innerHTML = "";

    if (e.target.checked == true) {
        $("inputDecision").style.display = "none";
        $("inputDecisionManual").style.display = "block";
        $("inputDecision").reset();
        $("inputDecisionManual").reset();
    }
    else {
        $("inputDecision").style.display = "block";
        $("inputDecisionManual").style.display = "none";
        $("inputDecision").reset();
        $("inputDecisionManual").reset();
    }
}

// If top two teams only, hide 3rd and 4th team options and change dissent calculation.
// If not, show 3rd and 4th team options.
function onTopTwo(e) {
    $("inputDecisionStatus").innerHTML = "";

    if (e.target.checked == true) {
        const elements = document.querySelectorAll(".third-fourth, .third-fourth-table");
        elements.forEach(e => { e.style.display = "none"; });
        $("decision3").required = false;
        $("decision4").required = false;
        $("finalThirdFourth").style.display = "none";
        $("decisionManual").placeholder = "1st (/) 2nd";
        $("inputDecision").reset();
        $("inputDecisionManual").reset();
    } else {
        const elements = document.querySelectorAll(".third-fourth");
        elements.forEach(e => { e.style.display = "flex"; });
        const tableElements = document.querySelectorAll(".third-fourth-table");
        tableElements.forEach(e => { e.style.display = "table-cell"; });
        $("decision3").required = true;
        $("decision4").required = true;
        $("finalThirdFourth").style.display = "inline-flex";
        $("decisionManual").placeholder = "1st (/) 2nd (/) 3rd (/) 4th"
        $("inputDecision").reset();
        $("inputDecisionManual").reset();
    }
}

function onInputDecision(e) {
    e.preventDefault();
    var isFormInvalid = validateForm();
    if (!isFormInvalid) {
        //For manual type
        if ($("manualTypeBtn").checked == true) {
            //Locate benches and ranks
            const decisionManual = $("decisionManual").value.toUpperCase();
            var decision = [{ key: "OG", value: 0, interchange: "" },
            { key: "OO", value: 0, interchange: "" },
            { key: "CG", value: 0, interchange: "" },
            { key: "CO", value: 0, interchange: "" }]
            for (let i = 0; i < decision.length; i++) {
                if (decisionManual.indexOf(decision[i].key) == -1) {
                    decision.splice(i, 1);
                    i--;
                } else {
                    decision[i].value = decisionManual.indexOf(decision[i].key);
                }
            }
            decision.sort(function (a, b) {
                return a.value - b.value;
            });
            //Check interchangeability
            for (i = 0; i < decision.length - 1; i++) {
                var part = decisionManual.substring(
                    decisionManual.indexOf(decision[i].key) + 1,
                    decisionManual.indexOf(decision[i + 1].key)
                );
                if (part.indexOf("/") != -1) {
                    decision[i].interchange = interchangeSymbol();
                }
            }
            //Add to table
            let decisionHTML = ``;
            if ($("topTwoBtn").checked == true) {
                decisionHTML = `<td>${decision[0].key}${decision[0].interchange}</td>
                <td>${decision[1].key}</td>`;
            } else {
                decisionHTML = `<td>${decision[0].key}${decision[0].interchange}</td>
                <td>${decision[1].key}${decision[1].interchange}</td>
                <td>${decision[2].key}${decision[2].interchange}</td>
                <td>${decision[3].key}</td>`;
            }
            $("callTbody").innerHTML += `
            <tr id=${$("judgeManual").value}>
                <td>${$("judgeManual").value}</td>
                ${decisionHTML}
                <td><a class="vue-sortable deleteBtn">🅇</a></td>
            </tr>`;
            $("inputDecisionManual").reset();
        }
        //For dropdown type
        else {
            let decisionHTML = ``;
            if ($("topTwoBtn").checked == true) {
                decisionHTML = `<td>${$("decision1").value}${checkInterchange(1)}</td>
                <td>${$("decision2").value}</td>`;
            } else {
                decisionHTML = `<td>${$("decision1").value}${checkInterchange(1)}</td>
                <td>${$("decision2").value}${checkInterchange(2)}</td>
                <td>${$("decision3").value}${checkInterchange(3)}</td>
                <td>${$("decision4").value}</td>`;
            }
            $("callTbody").innerHTML += `
            <tr id=${$("judge").value}>
                <td>${$("judge").value}</td>
                ${decisionHTML}
                <td><a class="vue-sortable deleteBtn">🅇</a></td>
            </tr>`;
            $("inputDecision").reset();
        }
        calculateDissent();
    }
}

function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn"))
        return;
    e.target.closest("tr").remove();
    calculateDissent();
}

// !!! branch
function onHoverRow(e) {
    let teamsLength;
    ($("topTwoBtn").checked) ? teamsLength = 2 : teamsLength = 4;
    var exchange = e.target.closest("tr").cells[0].children[1].innerHTML;
    var dissent = e.target.closest("tr").cells[2].innerHTML;
    //Repeat for all judges
    for (i = 0; i < $("callTbody").rows.length; i++) {
        for (j = 0; j < $("callTbody").rows[i].cells.length; j++)
            $("callTbody").rows[i].cells[j].style.fontWeight = "normal";
        var team = [{ key: exchange.substring(0, 2), rank: 0 },
        { key: exchange.substring(3, 5), rank: 0 }]
        //Locate teams positions
        for (var j = 1; j <= teamsLength; j++) {
            if ($("callTbody").rows[i].cells[j].innerHTML.indexOf(team[0].key) != -1)
                team[0].rank = j;
            if ($("callTbody").rows[i].cells[j].innerHTML.indexOf(team[1].key) != -1)
                team[1].rank = j;
        }
        $("callTbody").rows[i].cells[team[0].rank].style.fontWeight = "bold";
        $("callTbody").rows[i].cells[team[1].rank].style.fontWeight = "bold";
        //If already agreeing
        if (dissent.indexOf(0) != -1)
            $("callTbody").rows[i].style.backgroundColor = "#b8edde";
        //If team in left of exchange is majority
        else if (Number(dissent.substring(0, 1)) < Number(dissent.substring(2, 3))) {
            if (team[0].rank > team[1].rank)
                $("callTbody").rows[i].style.backgroundColor = "#f2bed2";
            else
                $("callTbody").rows[i].style.backgroundColor = "#b8edde";
        }
        //If team in right of exchange is minority
        else if (Number(dissent.substring(0, 1)) > Number(dissent.substring(2, 3))) {
            if (team[0].rank < team[1].rank)
                $("callTbody").rows[i].style.backgroundColor = "#b8edde";
            else
                $("callTbody").rows[i].style.backgroundColor = "#f2bed2";
        }
        //If equal votes for team in left and right
        else if (Number(dissent.substring(0, 1)) == Number(dissent.substring(2, 3))) {
            if (team[0].rank < team[1].rank)
                $("callTbody").rows[i].style.backgroundColor = "#bee5eb";
            else
                $("callTbody").rows[i].style.backgroundColor = "#fed5c0";
        }
    }
}

function onLeaveRow() {
    for (i = 0; i < $("callTbody").rows.length; i++) {
        $("callTbody").rows[i].style.backgroundColor = "";
        for (j = 0; j < $("callTbody").rows[i].cells.length; j++)
            $("callTbody").rows[i].cells[j].style.fontWeight = "normal";
    }
}

function onClearRadio(e) {
    if (!e.target.classList.contains("resolveBtn"))
        return;
    e.target.checked = false;
}

function onFinalise() {
    var finalRank = [{ key: "OG", value: 1 },
    { key: "OO", value: 1 },
    { key: "CG", value: 1 },
    { key: "CO", value: 1 }]
    $("dissentRadioStatus").innerHTML = "";
    for (i = 1; i <= 4; i++)
        $("rank" + i).innerHTML = "--";

    if ($("callTbody").rows.length < 1) {
        $("dissentRadioStatus").innerHTML += "There are no ranks to be finalised";
        return;
    }
    //Check if all exchanges have been resolved
    var resolves = document.getElementsByClassName("resolveBtn")
    var resolvesChecked = 0;
    for (i = 0; i < resolves.length; i++) {
        if (resolves[i].checked) {
            resolvesChecked += 1;
            //$("dissentRadioStatus").innerHTML += resolves[i].id + "<br>";
            //Interpret the conclusions of the resolve radio buttons
            /* for (i = 0; i < 6; i++) {
            if (resolves[i].id === "More" + dissent[i].key) finalDissent[i] = false;
            else    finalDissent[i] = true;
            } */
            if (resolves[i].id === "MoreOG-OO") finalOObeatOG = false;
            if (resolves[i].id === "LessOG-OO") finalOObeatOG = true;
            if (resolves[i].id === "MoreOG-CG") finalCGbeatOG = false;
            if (resolves[i].id === "LessOG-CG") finalCGbeatOG = true;
            if (resolves[i].id === "MoreOO-CG") finalCGbeatOO = false;
            if (resolves[i].id === "LessOO-CG") finalCGbeatOO = true;
            if (resolves[i].id === "MoreOG-CO") finalCObeatOG = false;
            if (resolves[i].id === "LessOG-CO") finalCObeatOG = true;
            if (resolves[i].id === "MoreOO-CO") finalCObeatOO = false;
            if (resolves[i].id === "LessOO-CO") finalCObeatOO = true;
            if (resolves[i].id === "MoreCG-CO") finalCObeatCG = false;
            if (resolves[i].id === "LessCG-CO") finalCObeatCG = true;
        }
    }
    if (resolvesChecked < resolves.length / 2) {
        $("dissentRadioStatus").innerHTML = "Not resolved!";
        return;
    }
    //Calculate final rank
    if (finalOObeatOG) finalRank[0].value += 1;
    else finalRank[1].value += 1;
    if (finalCGbeatOG) finalRank[0].value += 1;
    else finalRank[2].value += 1;
    if (finalCGbeatOO) finalRank[1].value += 1;
    else finalRank[2].value += 1;
    if (finalCObeatOG) finalRank[0].value += 1;
    else finalRank[3].value += 1;
    if (finalCObeatOO) finalRank[1].value += 1;
    else finalRank[3].value += 1;
    if (finalCObeatCG) finalRank[2].value += 1;
    else finalRank[3].value += 1;
    //Arrange final ranks
    finalRank.sort(function (a, b) {
        return a.value - b.value;
    });
    //Check if final ranks messed up (this is where my code gets a bit messy)
    var filter1 = [finalRank[0].value, finalRank[1].value, finalRank[2].value, finalRank[3].value]
    var filter2 = filter1.filter((item, index) => filter1.indexOf(item) !== index);
    if (filter2.length > 0) {
        $("dissentRadioStatus").innerHTML += "Error in dissent resolutions involving these teams:"
        for (i = 0; i < finalRank.length; i++) {
            if (filter2.includes(finalRank[i].value))
                $("dissentRadioStatus").innerHTML += ` ${finalRank[i].key}`;
        }
        return;
    }
    //statusAlert();
    for (i = 1; i <= 4; i++)
        $("rank" + i).innerHTML = finalRank[i - 1].key;
}

function restrictLetters() {
    var regex = /[^cgo\s\/]/gi;
    $("decisionManual").value = $("decisionManual").value.replace(regex, "");
}

function validateForm() {
    $("inputDecisionStatus").innerHTML = "";

    // For top two only
    if ($("topTwoBtn").checked == true) {
        if ($("manualTypeBtn").checked == true) {
            // Check that two different teams are placed
            let teamCount = 0;
            benches.forEach(e => {
                let re = new RegExp(e, "g");
                let count = ($("decisionManual").value.toUpperCase().match(re) || []).length;
                if (count > 1) {
                    teamCount += 3;
                }
                teamCount += count;
            });
            if (teamCount != 2) {
                $("inputDecisionStatus").innerHTML += "Please make sure you enter only two different teams.";
                return true;
            }
        } else {
            // Check for duplicates
            if ($("decision1").value == $("decision2").value) {
                $("inputDecisionStatus").innerHTML += "The same team cannot get two different ranks";
                return true;
            }
        }
    }

    //For manual type
    else if ($("manualTypeBtn").checked == true) {
        //Check if all teams placed
        if ($("decisionManual").value.toUpperCase().indexOf("OG") == -1 ||
            $("decisionManual").value.toUpperCase().indexOf("OO") == -1 ||
            $("decisionManual").value.toUpperCase().indexOf("CG") == -1 ||
            $("decisionManual").value.toUpperCase().indexOf("CO") == -1) {
            $("inputDecisionStatus").innerHTML += "One or more teams have not been placed in the call";
            return true;
        }
        //Check duplicate teams
        if (($("decisionManual").value.toUpperCase().match(/OG/g) || []).length > 1 ||
            ($("decisionManual").value.toUpperCase().match(/OO/g) || []).length > 1 ||
            ($("decisionManual").value.toUpperCase().match(/CG/g) || []).length > 1 ||
            ($("decisionManual").value.toUpperCase().match(/CO/g) || []).length > 1) {
            $("inputDecisionStatus").innerHTML += "The same team cannot get two different ranks";
            return true;
        }
    }

    //For dropdown type
    else {
        //Check Duplicate Team
        var teamarray = [];
        for (i = 1; i <= 4; i++) {
            teamarray[i] = $("decision" + i).value;
        }
        for (i = 1; i <= 4; i++) {
            for (j = i + 1; j <= 4; j++) {
                if (i == j || teamarray[i] == "" || teamarray[j] == "")
                    continue;
                if (teamarray[i] == teamarray[j]) {
                    $("inputDecisionStatus").innerHTML += "The same team cannot get two different ranks";
                    return true;
                }
            }
        }
    }

    //Check duplicate judge
    for (i = 1; i <= $("callTbody").rows.length; i++) {
        if ($("callTable").rows[i].cells[0].innerHTML == $("judge").value ||
            $("callTable").rows[i].cells[0].innerHTML == $("judgeManual").value) {
            $("callTable").deleteRow(i);
        }
    }
}

function checkInterchange(num) {
    switch (num) {
        case 1:
            if ($("interchange1-2").checked)
                return interchangeSymbol();
            else return "";
        case 2:
            if ($("interchange2-3").checked)
                return interchangeSymbol();
            else return "";
        case 3:
            if ($("interchange3-4").checked)
                return interchangeSymbol();
            else return "";
        default: return "";;
    }
}

function calculateDissent() {
    //0 = OG-OO, 1 = OG-CG, 2 = OO-CG, 3 = OG-CO, 4 = OO-CO, 5 = CG-CO
    var dissent = [{ key: "OG-OO", order: 0, interchange: 0, givingRight: 0, distance: 0, color: "black" },
    { key: "OG-CG", order: 1, interchange: 0, givingRight: 0, distance: 0, color: "black" },
    { key: "OO-CG", order: 2, interchange: 0, givingRight: 0, distance: 0, color: "black" },
    { key: "OG-CO", order: 3, interchange: 0, givingRight: 0, distance: 0, color: "black" },
    { key: "OO-CO", order: 4, interchange: 0, givingRight: 0, distance: 0, color: "black" },
    { key: "CG-CO", order: 5, interchange: 0, givingRight: 0, distance: 0, color: "black" }];
    //0 = OG, 1 = OO, 2 = CG, 4 = OO
    var team = [{ key: "OG", rank: 0, topTwo: 0 },
    { key: "OO", rank: 0, topTwo: 0 },
    { key: "CG", rank: 0, topTwo: 0 },
    { key: "CO", rank: 0, topTwo: 0 }]
    $("callTableStatus").style.display = "table-cell";
    $("dissentTableStatus").style.display = "table-cell";
    $("dissentTable").innerHTML = "";
    $("dissentRadioStatus").innerHTML = "";
    for (i = 1; i <= 4; i++)
        $("rank" + i).innerHTML = "--";

    if ($("callTbody").rows.length > 0) {
        $("callTableStatus").style.display = "none";

        // If top two only, switch to other function
        if ($("topTwoBtn").checked == true) {
            onDissentTopTwo();
            return;
        }

        //Repeat for all judges
        for (i = 0; i < $("callTbody").rows.length; i++) {
            //Locate OG, OO, CG, CO positions
            for (var j = 1; j <= 4; j++) {
                for (var k = 0; k < 4; k++) {
                    if ($("callTbody").rows[i].cells[j].innerHTML.indexOf(team[k].key) != -1)
                        team[k].rank = j;
                }
            }
            //See the number of judges agreeing to these exchanges
            var disInd = 5;
            for (let j = 3; j >= 0; j--) {
                for (let k = j - 1; k >= 0; k--) {
                    if (team[j].rank < team[k].rank)
                        dissent[disInd].givingRight += 1;
                    disInd--;
                }
            }
            //See the number of judges putting top 2 for each bench
            for (j = 0; j < 4; j++) {
                if (team[j].rank <= 2) team[j].topTwo += 1
            }
            //See the distance of each bench in the call
            var disInd = 5;
            for (let j = 3; j >= 0; j--) {
                for (let k = j - 1; k >= 0; k--) {
                    dissent[disInd].distance += Math.abs(team[j].rank - team[k].rank);
                    disInd--;
                }
            }
            //See the number of judges indicating interchangeability
            var disInd = 5;
            for (let j = 3; j >= 0; j--) {
                for (let k = j - 1; k >= 0; k--) {
                    if (Math.abs(team[j].rank - team[k].rank) == 1) {
                        let leftCell = 0;
                        let rightCell = 0;
                        for (let l = 1; l <= 4; l++) {
                            if ($("callTbody").rows[i].cells[l].innerHTML.indexOf(team[k].key) != -1)
                                leftCell = l;
                            if ($("callTbody").rows[i].cells[l].innerHTML.indexOf(team[j].key) != -1)
                                rightCell = l;
                        }
                        if (($("callTbody").rows[i].cells[leftCell].innerHTML.toLowerCase().indexOf("<svg") >= 0 &&
                            team[k].rank < team[j].rank) ||
                            ($("callTbody").rows[i].cells[rightCell].innerHTML.toLowerCase().indexOf("<svg") >= 0 &&
                                team[j].rank < team[k].rank))
                            dissent[disInd].interchange += 1;
                    }
                    disInd--;
                }
            }
        }
        //Arrange table rows
        dissent.sort(function (a, b) { a.order - b.order; });
        //Show team comparisons in the debate
        //Also add options to resolve those exchanges
        if ($("callTbody").rows.length > 1) {
            for (i = 0; i < 6; i++) {
                //Check if exchange already agreed upon
                function check(num) {
                    if (Math.max(dissent[i].givingRight, $("callTbody").rows.length - dissent[i].givingRight)
                        >= $("callTbody").rows.length) {
                        dissent[i].color = "#868e96";
                        if (num == 0 && num == dissent[i].givingRight)
                            return "checked";
                        if (num == 1 && dissent[i].givingRight == $("callTbody").rows.length)
                            return "checked";
                        else return "";
                    }
                }
                $("dissentTableStatus").style.display = "none";
                //Add team comparisons to table
                $("dissentTable").innerHTML += `
            <tr>
                <td>
                <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="More${dissent[i].key}" ${check(0)}></input>
                <span style="color:${dissent[i].color}">${dissent[i].key}</span>
                <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="Less${dissent[i].key}" ${check(1)}></input>
                </td>
                <td>${dissent[i].interchange}</td>
                <td>${($("callTbody").rows.length - dissent[i].givingRight)}-${dissent[i].givingRight}</td>
            </tr>`;
            }
        }
    }
}

// Handles dissent for top two only
// Calls dissent calculation function
// If there is more than one judge,
// - clears team comparisons placeholder
// - displays dissents on table
function onDissentTopTwo() {
    let dissent = calculateDissentTopTwo();
    if ($("callTbody").rows.length > 1) {
        $("dissentTableStatus").style.display = "none";
        displayDissents(dissent);
    }
}

// Reads call table
// Returns the dissents with team key, interchangeability, results of the dissent
function calculateDissentTopTwo() {
    // Construct dissents data structure
    let dissent = [];
    for (i = 1; i <= 3; i++) {
        for (j = 0; j < i; j++) {
            dissent.push({
                key: benches[j] + "-" + benches[i],
                interchange: 0,
                givingRight: 0,
                color: "black"
            });
        }
    }

    // Repeat for all judges
    for (let i = 0; i < $("callTbody").rows.length; i++) {
        // Locate OG, OO, CG, CO positions
        let teamRanks = [];
        for (let j = 1; j < $("callTbody").rows[i].cells.length - 1; j++) {
            let cellValue = $("callTbody").rows[i].cells[j].innerHTML;
            teamRanks.unshift(cellValue.substring(0, 2));
            if (cellValue.indexOf("<svg") != -1) {
                teamRanks.unshift("/");
            }
        }

        // Calculate dissents based on OG, OO, CG, CO positions
        let teamRanksString = teamRanks.join("");
        let index = 0;
        for (let j = 1; j <= 3; j++) {
            for (k = 0; k < j; k++) {
                // Log dissents
                if (teamRanks.indexOf(benches[j]) > teamRanks.indexOf(benches[k])) {
                    dissent[index].givingRight++;
                }
                // Log interchangeability
                if (teamRanksString.indexOf(benches[j] + "/" + benches[k]) != -1 ||
                    teamRanksString.indexOf(benches[k] + "/" + benches[j]) != -1) {
                    dissent[index].interchange++;
                }
                // Log if all judges agree, color is grey. Otherwise, color is black
                let agreement = Math.max(dissent[index].givingRight, $("callTbody").rows.length - dissent[index].givingRight);
                console.log("agree", agreement + "/" + $("callTbody").rows.length);
                if (agreement == $("callTbody").rows.length) {
                    dissent[index].color = "#868e96";
                } else {
                    dissent[index].color = "black";
                }
                index++;
            }
        }
    }

    return dissent;
}

// Displays dissents on the team comparisons table
function displayDissents(dissent) {
    // Check if an exchange is already resolved
    // If yes, return checked so that the radio is checked already
    function checkResolved(left, index) {
        if ((left && dissent[index].givingRight == 0) ||
            (!left && dissent[index].givingRight == $("callTbody").rows.length)) {
            return "checked";
        } else {
            return "";
        }
    }
    // Repeat for all team comparisons
    for (let i = 0; i < dissent.length; i++) {
        $("dissentTable").innerHTML +=
            `<tr>
            <td>
            <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="More${dissent[i].key}" ${checkResolved(true, i)}></input>
            <span style="color:${dissent[i].color}">${dissent[i].key}</span>
            <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="Less${dissent[i].key}" ${checkResolved(false, i)}></input>
            </td>
            <td>${dissent[i].interchange}</td>
            <td>${($("callTbody").rows.length - dissent[i].givingRight)}-${dissent[i].givingRight}</td>
        </tr>`
    }
}

sorttable = {
    init: function () {
        // quit if this function has already been called
        if (arguments.callee.done) return;
        // flag this function so we don't do the same thing twice
        arguments.callee.done = true;
        // kill the timer
        if (_timer) clearInterval(_timer);

        if (!document.createElement || !document.getElementsByTagName) return;

        sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/;

        forEach(document.getElementsByTagName('table'), function (table) {
            if (table.className.search(/\bsortable\b/) != -1) {
                sorttable.makeSortable(table);
            }
        });

    },

    makeSortable: function (table) {
        // Safari doesn't support table.tHead, sigh
        if (table.tHead == null) table.tHead = table.getElementsByTagName('thead')[0];

        if (table.tHead.rows.length != 1) return; // can't cope with two header rows

        // work through each column and calculate its type
        headrow = table.tHead.rows[0].cells;
        for (var i = 0; i < headrow.length; i++) {
            // manually override the type with a sorttable_type attribute
            if (!headrow[i].className.match(/\bsorttable_nosort\b/)) { // skip this col
                mtch = headrow[i].className.match(/\bsorttable_([a-z0-9]+)\b/);
                if (mtch) { override = mtch[1]; }
                if (mtch && typeof sorttable["sort_" + override] == 'function') {
                    headrow[i].sorttable_sortfunction = sorttable["sort_" + override];
                } else {
                    headrow[i].sorttable_sortfunction = sorttable.sort_numeric;
                }
                // make it clickable to sort
                headrow[i].sorttable_columnindex = i;
                headrow[i].sorttable_tbody = table.tBodies[0];
                dean_addEvent(headrow[i], "click", sorttable.innerSortFunction = function (e) {

                    if (this.className.search(/\bsorttable_sorted\b/) != -1) {
                        // if we're already sorted by this column, just
                        // reverse the table, which is quicker
                        sorttable.reverse(this.sorttable_tbody);
                        this.className = this.className.replace('sorttable_sorted',
                            'sorttable_sorted_reverse');
                        this.removeChild(document.getElementById('sorttable_sortfwdind'));
                        sortrevind = document.createElement('span');
                        sortrevind.id = "sorttable_sortrevind";
                        sortrevind.className = "mr-auto vue-sort-key text-muted";
                        sortrevind.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="vertical-align:bottom" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-chevrons-up">
              <polyline points="17 11 12 6 7 11"></polyline>
              <polyline points="17 18 12 13 7 18"></polyline>
          </svg>`;
                        this.appendChild(sortrevind);
                        return;
                    }
                    if (this.className.search(/\bsorttable_sorted_reverse\b/) != -1) {
                        // if we're already sorted by this column in reverse, just
                        // re-reverse the table, which is quicker
                        sorttable.reverse(this.sorttable_tbody);
                        this.className = this.className.replace('sorttable_sorted_reverse',
                            'sorttable_sorted');
                        this.removeChild(document.getElementById('sorttable_sortrevind'));
                        sortfwdind = document.createElement('span');
                        sortfwdind.id = "sorttable_sortfwdind";
                        sortfwdind.className = "mr-auto vue-sort-key text-muted";
                        sortfwdind.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="vertical-align:bottom" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-chevrons-down">
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
          </svg>
          `;
                        this.appendChild(sortfwdind);
                        return;
                    }

                    // remove sorttable_sorted classes
                    theadrow = this.parentNode;
                    forEach(theadrow.childNodes, function (cell) {
                        if (cell.nodeType == 1) { // an element
                            cell.className = cell.className.replace('sorttable_sorted_reverse', '');
                            cell.className = cell.className.replace('sorttable_sorted', '');
                        }
                    });
                    sortfwdind = document.getElementById('sorttable_sortfwdind');
                    if (sortfwdind) { sortfwdind.parentNode.removeChild(sortfwdind); }
                    sortrevind = document.getElementById('sorttable_sortrevind');
                    if (sortrevind) { sortrevind.parentNode.removeChild(sortrevind); }

                    this.className += ' sorttable_sorted';
                    sortfwdind = document.createElement('span');
                    sortfwdind.id = "sorttable_sortfwdind";
                    sortfwdind.className = "mr-auto vue-sort-key text-muted";
                    sortfwdind.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="vertical-align:bottom" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-chevrons-down">
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
        `;
                    this.appendChild(sortfwdind);

                    // build an array to sort. This is a Schwartzian transform thing,
                    // i.e., we "decorate" each row with the actual sort key,
                    // sort based on the sort keys, and then put the rows back in order
                    // which is a lot faster because you only do getInnerText once per row
                    row_array = [];
                    col = this.sorttable_columnindex;
                    rows = this.sorttable_tbody.rows;
                    for (var j = 0; j < rows.length; j++) {
                        //For chronological
                        if (col == 0) {
                            let orderTeam = 0;
                            switch ($("dissentTable").rows[j].cells[col].children[1].innerHTML) {
                                case "OG-OO": orderTeam = 0; break;
                                case "OG-CG": orderTeam = 1; break;
                                case "OO-CG": orderTeam = 2; break;
                                case "OG-CO": orderTeam = 3; break;
                                case "OO-CO": orderTeam = 4; break;
                                case "CG-CO": orderTeam = 5; break;
                                default: orderTeam = 0;
                            }
                            row_array[row_array.length] = [orderTeam, rows[j]];
                        }
                        //For interchangeability
                        if (col == 1) {
                            row_array[row_array.length] = [$("dissentTable").rows[j].cells[col].innerHTML, rows[j]];
                        }
                        //For dissent rate
                        if (col == 2) {
                            let dissentRate = Math.min(Number($("dissentTable").rows[j].cells[col].innerHTML.substring(0, 1)),
                                Number($("dissentTable").rows[j].cells[col].innerHTML.substring(2, 3)));
                            row_array[row_array.length] = [dissentRate, rows[j]];
                        }
                    }
                    row_array.sort(this.sort_numeric);

                    tb = this.sorttable_tbody;
                    for (var j = 0; j < row_array.length; j++) {
                        tb.appendChild(row_array[j][1]);
                    }

                    delete row_array;
                });
            }
        }
    },

    reverse: function (tbody) {
        // reverse the rows in a tbody
        newrows = [];
        for (var i = 0; i < tbody.rows.length; i++) {
            newrows[newrows.length] = tbody.rows[i];
        }
        for (var i = newrows.length - 1; i >= 0; i--) {
            tbody.appendChild(newrows[i]);
        }
        delete newrows;
    },

    sort_numeric: function (a, b) {
        aa = parseFloat(a[0].replace(/[^0-9.-]/g, ''));
        if (isNaN(aa)) aa = 0;
        bb = parseFloat(b[0].replace(/[^0-9.-]/g, ''));
        if (isNaN(bb)) bb = 0;
        return aa - bb;
    },

}

/* for Mozilla/Opera9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", sorttable.init, false);
}

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function () {
        if (/loaded|complete/.test(document.readyState)) {
            sorttable.init(); // call the onload handler
        }
    }, 10);
}

/* for other browsers */
window.onload = sorttable.init;

// written by Dean Edwards, 2005
// with input from Tino Zijdel, Matthias Miller, Diego Perini

// http://dean.edwards.name/weblog/2005/10/add-event/

function dean_addEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else {
        // assign each event handler a unique ID
        if (!handler.$$guid) handler.$$guid = dean_addEvent.guid++;
        // create a hash table of event types for the element
        if (!element.events) element.events = {};
        // create a hash table of event handlers for each element/event pair
        var handlers = element.events[type];
        if (!handlers) {
            handlers = element.events[type] = {};
            // store the existing event handler (if there is one)
            if (element["on" + type]) {
                handlers[0] = element["on" + type];
            }
        }
        // store the event handler in the hash table
        handlers[handler.$$guid] = handler;
        // assign a global event handler to do all the work
        element["on" + type] = handleEvent;
    }
};
// a counter used to create unique IDs
dean_addEvent.guid = 1;

function removeEvent(element, type, handler) {
    if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
    } else {
        // delete the event handler from the hash table
        if (element.events && element.events[type]) {
            delete element.events[type][handler.$$guid];
        }
    }
};

function handleEvent(event) {
    var returnValue = true;
    // grab the event object (IE uses a global event object)
    event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
    // get a reference to the hash table of event handlers
    var handlers = this.events[event.type];
    // execute each event handler
    for (var i in handlers) {
        this.$$handleEvent = handlers[i];
        if (this.$$handleEvent(event) === false) {
            returnValue = false;
        }
    }
    return returnValue;
};

function fixEvent(event) {
    // add W3C standard event methods
    event.preventDefault = fixEvent.preventDefault;
    event.stopPropagation = fixEvent.stopPropagation;
    return event;
};
fixEvent.preventDefault = function () {
    this.returnValue = false;
};
fixEvent.stopPropagation = function () {
    this.cancelBubble = true;
}

// Dean's forEach: http://dean.edwards.name/base/forEach.js
/*
    forEach, version 1.0
    Copyright 2006, Dean Edwards
    License: http://www.opensource.org/licenses/mit-license.php
*/

// array-like enumeration
if (!Array.forEach) { // mozilla already supports this
    Array.forEach = function (array, block, context) {
        for (var i = 0; i < array.length; i++) {
            block.call(context, array[i], i, array);
        }
    };
}

// generic enumeration
Function.prototype.forEach = function (object, block, context) {
    for (var key in object) {
        if (typeof this.prototype[key] == "undefined") {
            block.call(context, object[key], key, object);
        }
    }
};

// character enumeration
String.forEach = function (string, block, context) {
    Array.forEach(string.split(""), function (chr, index) {
        block.call(context, chr, index, string);
    });
};

// globally resolve forEach enumeration
var forEach = function (object, block, context) {
    if (object) {
        var resolve = Object; // default
        if (object instanceof Function) {
            // functions have a "length" property
            resolve = Function;
        } else if (object.forEach instanceof Function) {
            // the object implements a custom forEach method so use that
            object.forEach(block, context);
            return;
        } else if (typeof object == "string") {
            // the object is a string
            resolve = String;
        } else if (typeof object.length == "number") {
            // the object is array-like
            resolve = Array;
        }
        resolve.forEach(object, block, context);
    }
};

$("helpBtn").addEventListener("click", function () { $("helpModal").style.display = "block"; })
$("closeHelpBtn").addEventListener("click", function () { $("helpModal").style.display = "none"; })
window.addEventListener("click", function (event) { if (event.target == $("helpModal")) $("helpModal").style.display = "none"; })
$("decisionManual").addEventListener("keyup", restrictLetters);
$("manualTypeBtn").addEventListener("click", onManualType);
$("topTwoBtn").addEventListener("click", onTopTwo);
$("inputDecision").addEventListener("submit", onInputDecision);
$("inputDecisionManual").addEventListener("submit", onInputDecision);
$("callTable").addEventListener("click", onDeleteRow);
$("dissentTable").addEventListener("mouseover", onHoverRow);
$("dissentTable").addEventListener("mouseleave", onLeaveRow);
$("dissentTable").addEventListener("dblclick", onClearRadio);
$("finaliseDecisionBtn").addEventListener("click", onFinalise);