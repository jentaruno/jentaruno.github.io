const callFormEl = document.querySelector("#inputDecision");
const callTbodyEl = document.querySelector("#callTbody");
const callTableEl = document.querySelector("#callTable");
const dissentTableEl = document.querySelector("#dissentTable");

var finalDissent = [{ key: "OG-OO", value: false },
                    { key: "OG-CG", value: false },
                    { key: "OO-CG", value: false },
                    { key: "OG-CO", value: false },
                    { key: "OO-CO", value: false },
                    { key: "CG-CO", value: false }]

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

function onInputDecision(e) {
    e.preventDefault();
    var Duplicate = checkDuplicate();
    if (!Duplicate) {
        const judge = $("judge").value;
        callTbodyEl.innerHTML += `
    <tr id=${judge}>
        <td>${judge}</td>
        <td>${$("decision1").value}${checkInterchange(1)}</td>
        <td>${$("decision2").value}${checkInterchange(2)}</td>
        <td>${$("decision3").value}${checkInterchange(3)}</td>
        <td>${$("decision4").value}</td>
        <td><a class="vue-sortable deleteBtn">🅇</a></td>
    </tr>`;
    }
}

function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn"))
        return;
    e.target.closest("tr").remove();
    calculateDissent();
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

    if (callTbodyEl.rows.length < 1) {
        $("dissentRadioStatus").innerHTML += "There are no ranks to be finalised";
        return;
    }
    //Check if all exchanges have been resolved
    var resolves = document.getElementsByClassName("resolveBtn")
    var resolvesChecked = 0;
    for (i = 0; i < resolves.length; i++) {
        if (resolves[i].checked) {
            resolvesChecked += 1;
            //Interpret the conclusions of the resolve radio buttons
            for (i = 0; i < 6; i++) {
            if (resolves[i].id === "More" + finalDissent[i].key) finalDissent[i].value = false;
            if (resolves[i].id === "Less" + finalDissent[i].key) finalDissent[i].value = true;
            }
        }
    }
    if (resolvesChecked < resolves.length / 2) {
        $("dissentRadioStatus").innerHTML = "Not resolved!";
        return;
    }
    //Calculate final rank
    var disInd = 5;
            for (let j = 3; j >= 0; j--) {
                for (let k = j - 1; k >= 0; k--) {
                    if (finalDissent[disInd].value = true)
                        finalRank[k].value += 1;
                    else
                        finalRank[j].value += 1;
                    disInd--;
                }
            }
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

function checkDuplicate() {
    //Check Duplicate Team
    $("inputDecisionStatus").innerHTML = "";
    $("dissentRadioStatus").innerHTML = "";
    for (i = 1; i <= 4; i++)
        $("rank" + i).innerHTML = "--";

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
    //Check Duplicate Judge
    for (i = 1; i <= callTbodyEl.rows.length; i++) {
        if ($("judge").value == callTableEl.rows[i].cells[0].innerHTML) {
            for (j = 1; j <= 4; j++) {
                callTableEl.rows[i].cells[j].innerHTML = $("decision" + j).value;
                if (j < 4) callTableEl.rows[i].cells[j].innerHTML += checkInterchange(j);
            }
            return true;
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
    var dissent = [{ key: "OG-OO", interchange: 0, givingRight: 0, distance: 0, priority: 0 },
    { key: "OG-CG", interchange: 0, givingRight: 0, distance: 0, priority: 0 },
    { key: "OO-CG", interchange: 0, givingRight: 0, distance: 0, priority: 0 },
    { key: "OG-CO", interchange: 0, givingRight: 0, distance: 0, priority: 0 },
    { key: "OO-CO", interchange: 0, givingRight: 0, distance: 0, priority: 0 },
    { key: "CG-CO", interchange: 0, givingRight: 0, distance: 0, priority: 0 }];
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

    if (callTbodyEl.rows.length > 0) {
        $("callTableStatus").style.display = "none";
        //Repeat for all judges
        for (i = 0; i < callTbodyEl.rows.length; i++) {
            //Locate OG, OO, CG, CO positions
            for (var j = 1; j <= 4; j++) {
                for (var k = 0; k < 4; k++) {
                    if (callTbodyEl.rows[i].cells[j].innerHTML.indexOf(team[k].key) != -1)
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
                            if (callTbodyEl.rows[i].cells[l].innerHTML.indexOf(team[k].key) != -1)
                                leftCell = l;
                            if (callTbodyEl.rows[i].cells[l].innerHTML.indexOf(team[j].key) != -1)
                                rightCell = l;
                        }
                        if ((callTbodyEl.rows[i].cells[leftCell].innerHTML.toLowerCase().indexOf("<svg") >= 0 &&
                                team[k].rank < team[j].rank) ||
                            (callTbodyEl.rows[i].cells[rightCell].innerHTML.toLowerCase().indexOf("<svg") >= 0 &&
                                team[j].rank < team[k].rank))
                            dissent[disInd].interchange += 1;
                    }
                    disInd--;
                }
            }
        }
        //Interpret exchanges that have been agreed upon
        for (j = 0; j < 6; j++) {
            if (dissent[j].givingRight == callTbodyEl.rows.length)
                finalDissent[j].value = true;
            if (dissent[j].givingRight == 0)
                finalDissent[j].value = false;
        }
        //Rate exchanges to resolve, clearest to closest;
        //Clearest is found by a primary consideration of interchangeability,
        //Then a secondary consideration of whether many judges agree on that exchange,
        //Then a tertiary consideration of the distance of the benches in each judge's calls,
        //Then a quaternary consideration of seeing disagreements on whether both teams are in top two or bottom two for most judges,        //Then a last tiebreaker here which is whether it's the closer to the first or last exchange in the debate
        //The priority is indicated with decimals to make sure that the more secondary considerations will never weigh more than the primary ones
        var disInd = 5;
        for (let j = 3; j >= 0; j--) {
            for (let k = j - 1; k >= 0; k--) {
                dissent[disInd].priority =
                    10 * dissent[disInd].interchange
                    + Math.max(dissent[disInd].givingRight, callTbodyEl.rows.length - dissent[disInd].givingRight)
                    + 1 / (10 * dissent[disInd].distance)
                    + 0.001 * (Math.max(team[j].topTwo, callTbodyEl.rows.length - team[j].topTwo)
                                + Math.max(team[k].topTwo, callTbodyEl.rows.length - team[k].topTwo))
                    + 0.0001 * (6 - disInd);
                disInd--;
            }
        }
        dissent.sort(function (a, b) {
            return b.priority - a.priority;
        });
        //Show to user clearest to closest exchange, with metrics
        //While eliminating necessity to indicate exchanges that are unanimous
        //Also add options to resolve those exchanges
        for (i = 0; i < 6; i++) {
            if ((dissent[i].priority - (10 * dissent[i].interchange)) >= callTbodyEl.rows.length)
                continue;
            $("dissentTableStatus").style.display = "none";
            $("dissentTable").innerHTML += `
            <tr>
                <td>
                <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="More${dissent[i].key}"></input>
                ${dissent[i].key}
                <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="Less${dissent[i].key}"></input>
                </td>
                <td>${dissent[i].interchange}</td>
                <td>${(callTbodyEl.rows.length - dissent[i].givingRight)}-${dissent[i].givingRight}</td>
                <td>${Math.round((dissent[i].distance / callTbodyEl.rows.length) * 10) / 10}</td>
            </tr>`;
        }
    }
}

callFormEl.addEventListener("submit", onInputDecision);
callFormEl.addEventListener("submit", calculateDissent);
callTableEl.addEventListener("click", onDeleteRow);
dissentTableEl.addEventListener("dblclick", onClearRadio);
$("finaliseDecisionBtn").addEventListener("click", onFinalise);