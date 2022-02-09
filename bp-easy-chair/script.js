const callFormEl = document.querySelector("#inputDecision");
const callTbodyEl = document.querySelector("#callTbody");
const callTableEl = document.querySelector("#callTable");
const dissentTableEl = document.querySelector("#dissentTable");

//var finalDissent = [false, false, false, false, false, false]
var finalOObeatOG;
var finalCGbeatOG;
var finalCGbeatOO;
var finalCObeatOG;
var finalCObeatOO;
var finalCObeatCG;

function $(x) { return document.getElementById(x); }

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

function onInputDecision(e) {
    e.preventDefault();
    var Duplicate = checkDuplicate();
    if (!Duplicate) {
        const judge = $("judge").value;
        const decision1 = $("decision1").value;
        const decision2 = $("decision2").value;
        const decision3 = $("decision3").value;
        const decision4 = $("decision4").value;
        callTbodyEl.innerHTML += `
    <tr id=${judge}>
        <td>${judge}</td>
        <td>${decision1}</td>
        <td>${decision2}</td>
        <td>${decision3}</td>
        <td>${decision4}</td>
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
    var finalRankOG = 1;
    var finalRankOO = 1;
    var finalRankCG = 1;
    var finalRankCO = 1;
    $("dissentRadioStatus").innerHTML = "";
    $("rankFirst").innerHTML = "--";
    $("rankSecond").innerHTML = "--";
    $("rankThird").innerHTML = "--";
    $("rankFourth").innerHTML = "--";
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
    if (finalOObeatOG) finalRankOG += 1;
    else finalRankOO += 1;
    if (finalCGbeatOG) finalRankOG += 1;
    else finalRankCG += 1;
    if (finalCGbeatOO) finalRankOO += 1;
    else finalRankCG += 1;
    if (finalCObeatOG) finalRankOG += 1;
    else finalRankCO += 1;
    if (finalCObeatOO) finalRankOO += 1;
    else finalRankCO += 1;
    if (finalCObeatCG) finalRankCG += 1;
    else finalRankCO += 1;
    //Arrange final rank
    var finalRanks = [{ key: "OG", value: finalRankOG },
    { key: "OO", value: finalRankOO },
    { key: "CG", value: finalRankCG },
    { key: "CO", value: finalRankCO }]
    finalRanks.sort(function (a, b) {
        return a.value - b.value;
    });
    //Check if final ranks messed up (this is where my code gets a bit messy)
    var filter1 = [finalRankOG, finalRankOO, finalRankCG, finalRankCO]
    var filter2 = filter1.filter((item, index) => filter1.indexOf(item) !== index);
    if (filter2.length > 0) {
        $("dissentRadioStatus").innerHTML += "Error in dissent resolutions involving these teams:"
        for (i = 0; i < finalRanks.length; i++) {
            if (filter2.includes(finalRanks[i].value))
                $("dissentRadioStatus").innerHTML += ` ${finalRanks[i].key}`;
        }
        return;
    }
    //statusAlert();
    $("rankFirst").innerHTML = finalRanks[0].key;
    $("rankSecond").innerHTML = finalRanks[1].key;
    $("rankThird").innerHTML = finalRanks[2].key;
    $("rankFourth").innerHTML = finalRanks[3].key;
}

function checkDuplicate() {
    //Check Duplicate Team
    $("inputDecisionStatus").innerHTML = "";
    $("dissentRadioStatus").innerHTML = "";
    $("rankFirst").innerHTML = "--";
    $("rankSecond").innerHTML = "--";
    $("rankThird").innerHTML = "--";
    $("rankFourth").innerHTML = "--";
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
            callTableEl.rows[i].cells[1].innerHTML = $("decision1").value;
            callTableEl.rows[i].cells[2].innerHTML = $("decision2").value;
            callTableEl.rows[i].cells[3].innerHTML = $("decision3").value;
            callTableEl.rows[i].cells[4].innerHTML = $("decision4").value;
            return true;
        }
    }
}

function calculateDissent() {
    //0 = OG-OO, 1 = OG-CG, 2 = OO-CG, 3 = OG-CO, 4 = OO-CO, 5 = CG-CO
    var dissent = [{ key: "OG-OO", givingRight: 0, distance: 0, priority: 0},
    { key: "OG-CG", givingRight: 0, distance: 0, priority: 0},
    { key: "OO-CG", givingRight: 0, distance: 0, priority: 0},
    { key: "OG-CO", givingRight: 0, distance: 0, priority: 0},
    { key: "OO-CO", givingRight: 0, distance: 0, priority: 0},
    { key: "CG-CO", givingRight: 0, distance: 0, priority: 0}];
    var rankOG = [];
    var rankOO = [];
    var rankCG = [];
    var rankCO = [];
    var OGTopTwo = 0;
    var OOTopTwo = 0;
    var CGTopTwo = 0;
    var COTopTwo = 0;
    $("callTableStatus").style.display = "table-cell";
    $("dissentTableStatus").style.display = "table-cell";
    $("dissentTable").innerHTML = "";
    $("dissentRadioStatus").innerHTML = "";
    $("rankFirst").innerHTML = "--";
    $("rankSecond").innerHTML = "--";
    $("rankThird").innerHTML = "--";
    $("rankFourth").innerHTML = "--";
    
    if (callTbodyEl.rows.length > 0) {
        $("callTableStatus").style.display = "none";
        //Repeat for all judges
        for (i = 0; i < callTbodyEl.rows.length; i++) {
            //Locate OG, OO, CG, CO positions
            for (var j = 1; j <= 4; j++) {
                if (callTbodyEl.rows[i].cells[j].innerHTML == "OG")
                    rankOG[i] = j;
                if (callTbodyEl.rows[i].cells[j].innerHTML == "OO")
                    rankOO[i] = j;
                if (callTbodyEl.rows[i].cells[j].innerHTML == "CG")
                    rankCG[i] = j;
                if (callTbodyEl.rows[i].cells[j].innerHTML == "CO")
                    rankCO[i] = j;
            }
            //See the number of judges agreeing to these exchanges
            if (rankOO[i] < rankOG[i]) dissent[0].givingRight += 1;
            if (rankCG[i] < rankOG[i]) dissent[1].givingRight += 1;
            if (rankCG[i] < rankOO[i]) dissent[2].givingRight += 1;
            if (rankCO[i] < rankOG[i]) dissent[3].givingRight += 1;
            if (rankCO[i] < rankOO[i]) dissent[4].givingRight += 1;
            if (rankCO[i] < rankCG[i]) dissent[5].givingRight += 1;
            //See the number of judges putting top 2 for each bench
            if (rankOG[i] <= 2) OGTopTwo += 1;
            if (rankOO[i] <= 2) OOTopTwo += 1;
            if (rankCG[i] <= 2) CGTopTwo += 1;
            if (rankCO[i] <= 2) COTopTwo += 1;
            //See the distance of each bench in the call
            dissent[0].distance += Math.abs(rankOO[i] - rankOG[i]);
            dissent[1].distance += Math.abs(rankCG[i] - rankOG[i]);
            dissent[2].distance += Math.abs(rankCG[i] - rankOO[i]);
            dissent[3].distance += Math.abs(rankCO[i] - rankOG[i]);
            dissent[4].distance += Math.abs(rankCO[i] - rankOO[i]);
            dissent[5].distance += Math.abs(rankCO[i] - rankCG[i]);
        }
        //Interpret exchanges that have been agreed upon
        /* for (i = 0, i < 6, i++) {
            if (dissent[i].givingRight == callTbodyEl.rows.length)  dissent[i].doesRightWin = true;
            if (dissent[i].givingRight == 0)    dissent[i].doesRightWin = false;
        } */
        if (dissent[0].givingRight == callTbodyEl.rows.length) finalOObeatOG = true;
        if (dissent[1].givingRight == callTbodyEl.rows.length) finalCGbeatOG = true;
        if (dissent[2].givingRight == callTbodyEl.rows.length) finalCGbeatOO = true;
        if (dissent[3].givingRight == callTbodyEl.rows.length) finalCObeatOG = true;
        if (dissent[4].givingRight == callTbodyEl.rows.length) finalCObeatOO = true;
        if (dissent[5].givingRight == callTbodyEl.rows.length) finalCObeatCG = true;
        if (dissent[0].givingRight == 0) finalOObeatOG = false;
        if (dissent[1].givingRight == 0) finalCGbeatOG = false;
        if (dissent[2].givingRight == 0) finalCGbeatOO = false;
        if (dissent[3].givingRight == 0) finalCObeatOG = false;
        if (dissent[4].givingRight == 0) finalCObeatOO = false;
        if (dissent[5].givingRight == 0) finalCObeatCG = false;
        //Mirroring
        if (OGTopTwo < (callTbodyEl.rows.length / 2)) OGTopTwo = callTbodyEl.rows.length - OGTopTwo;
        if (OOTopTwo < (callTbodyEl.rows.length / 2)) OOTopTwo = callTbodyEl.rows.length - OOTopTwo;
        if (CGTopTwo < (callTbodyEl.rows.length / 2)) CGTopTwo = callTbodyEl.rows.length - CGTopTwo;
        if (COTopTwo < (callTbodyEl.rows.length / 2)) COTopTwo = callTbodyEl.rows.length - COTopTwo;
        //Rate exchanges to resolve, clearest to closest;
        //Clearest is found by a primary consideration of whether many judges agree on that exchange,
        //Then a secondary consideration of the distance of the benches in each judge's calls,
        //Then a tertiary consideration of seeing disagreements on whether both teams are in top two or bottom two for most judges,        //Then a last tiebreaker here which is whether it's the closer to the first or last exchange in the debate
        //The priority is indicated with decimals to make sure that the more secondary considerations will never weigh more than the primary ones
        dissent[0].priority = Math.max(dissent[0].givingRight, callTbodyEl.rows.length - dissent[0].givingRight)
                        + 1 / (10 * dissent[0].distance) + 0.001 * (OOTopTwo + OGTopTwo) + 0.0006;
        dissent[1].priority = Math.max(dissent[1].givingRight, callTbodyEl.rows.length - dissent[1].givingRight)
                        + 1 / (10 * dissent[1].distance) + 0.001 * (CGTopTwo + OGTopTwo) + 0.0005;
        dissent[2].priority = Math.max(dissent[2].givingRight, callTbodyEl.rows.length - dissent[2].givingRight)
                        + 1 / (10 * dissent[2].distance) + 0.001 * (CGTopTwo + OOTopTwo) + 0.0004;
        dissent[3].priority = Math.max(dissent[3].givingRight, callTbodyEl.rows.length - dissent[3].givingRight)
                        + 1 / (10 * dissent[3].distance) + 0.001 * (COTopTwo + OGTopTwo) + 0.0003;
        dissent[4].priority = Math.max(dissent[4].givingRight, callTbodyEl.rows.length - dissent[4].givingRight)
                        + 1 / (10 * dissent[4].distance) + 0.001 * (COTopTwo + OOTopTwo) + 0.0002;
        dissent[5].priority = Math.max(dissent[5].givingRight, callTbodyEl.rows.length - dissent[5].givingRight)
                        + 1 / (10 * dissent[5].distance) + 0.001 * (COTopTwo + CGTopTwo) + 0.0001;
        //Arrange clearest to closest exchange
        dissent.sort(function (a, b) {
            return b.priority - a.priority;
        });
        //Show to user clearest to closest exchange
        //While eliminating necessity to indicate exchanges that are unanimous
        //Also add options to resolve those exchanges
        for (i = 0; i < 6; i++) {
            if (dissent[i].priority >= callTbodyEl.rows.length)
                continue;
            $("dissentTableStatus").style.display = "none";
            $("dissentTable").innerHTML += `
            <tr>
                <td>
                <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="More${dissent[i].key}"></input>
                ${dissent[i].key}
                <input type="radio" class="resolveBtn" name="*${dissent[i].key}" id="Less${dissent[i].key}"></input>
                </td>
                <td>${(callTbodyEl.rows.length - dissent[i].givingRight)}-${dissent[i].givingRight}</td>
                <td>${(dissent[i].distance / callTbodyEl.rows.length).toFixed(1)}</td>
            </tr>`;
        }
    }
}



callFormEl.addEventListener("submit", onInputDecision);
callFormEl.addEventListener("submit", calculateDissent);
callTableEl.addEventListener("click", onDeleteRow);
dissentTableEl.addEventListener("dblclick", onClearRadio);
$("finaliseDecisionBtn").addEventListener("click", onFinalise);