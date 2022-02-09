const callFormEl = document.querySelector("#inputDecision");
const callTbodyEl = document.querySelector("#callTbody");
const callTableEl = document.querySelector("#callTable");
const dissentTableEl = document.querySelector("#dissentTable");

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
    var dissent = [{ key: "OG-OO", givingLeft: 0, givingRight: 0, distance: 0, priority: 0},
    { key: "OG-CG", givingLeft: 0, givingRight: 0, distance: 0, priority: 0},
    { key: "OO-CG", givingLeft: 0, givingRight: 0, distance: 0, priority: 0},
    { key: "OG-CO", givingLeft: 0, givingRight: 0, distance: 0, priority: 0},
    { key: "OO-CO", givingLeft: 0, givingRight: 0, distance: 0, priority: 0},
    { key: "CG-CO", givingLeft: 0, givingRight: 0, distance: 0, priority: 0}];
    var rankOG = [];
    var rankOO = [];
    var rankCG = [];
    var rankCO = [];
    var OObeatOG = 0;
    var CGbeatOG = 0;
    var CGbeatOO = 0;
    var CObeatOG = 0;
    var CObeatOO = 0;
    var CObeatCG = 0;
    var OGTopTwo = 0;
    var OOTopTwo = 0;
    var CGTopTwo = 0;
    var COTopTwo = 0;
    var DistanceOOOG = 0;
    var DistanceCGOG = 0;
    var DistanceCGOO = 0;
    var DistanceCOOG = 0;
    var DistanceCOOO = 0;
    var DistanceCOCG = 0;
    var PriorityOOOG = 0;
    var PriorityCGOG = 0;
    var PriorityCGOO = 0;
    var PriorityCOOG = 0;
    var PriorityCOOO = 0;
    var PriorityCOCG = 0;
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
            if (rankOO[i] < rankOG[i]) OObeatOG += 1;
            if (rankCG[i] < rankOG[i]) CGbeatOG += 1;
            if (rankCG[i] < rankOO[i]) CGbeatOO += 1;
            if (rankCO[i] < rankOG[i]) CObeatOG += 1;
            if (rankCO[i] < rankOO[i]) CObeatOO += 1;
            if (rankCO[i] < rankCG[i]) CObeatCG += 1;
            //See the number of judges putting top 2 for each bench
            if (rankOG[i] <= 2) OGTopTwo += 1;
            if (rankOO[i] <= 2) OOTopTwo += 1;
            if (rankCG[i] <= 2) CGTopTwo += 1;
            if (rankCO[i] <= 2) COTopTwo += 1;
            //See the distance of each bench in the call
            DistanceOOOG += Math.abs(rankOO[i] - rankOG[i]);
            DistanceCGOG += Math.abs(rankCG[i] - rankOG[i]);
            DistanceCGOO += Math.abs(rankCG[i] - rankOO[i]);
            DistanceCOOG += Math.abs(rankCO[i] - rankOG[i]);
            DistanceCOOO += Math.abs(rankCO[i] - rankOO[i]);
            DistanceCOCG += Math.abs(rankCO[i] - rankCG[i]);
        }
        /* $("dissentTable").innerHTML =    OObeatOG + "/" + callTbodyEl.rows.length + " judges think OO beats OG <br>" +
                                            CGbeatOG + "/" + callTbodyEl.rows.length + " judges think CG beats OG <br>" +
                                            CGbeatOO + "/" + callTbodyEl.rows.length + " judges think CG beats OO <br>" +
                                            CObeatOG + "/" + callTbodyEl.rows.length + " judges think CO beats OG <br>" +
                                            CObeatOO + "/" + callTbodyEl.rows.length + " judges think CO beats OO <br>" +
                                            CObeatCG + "/" + callTbodyEl.rows.length + " judges think CO beats CG <br>" +
                                            OGTopTwo + "/" + callTbodyEl.rows.length + " judges think OG is in top 2 <br>" +
                                            OOTopTwo + "/" + callTbodyEl.rows.length + " judges think OO is in top 2 <br>" +
                                            CGTopTwo + "/" + callTbodyEl.rows.length + " judges think CG is in top 2 <br>" +
                                            COTopTwo + "/" + callTbodyEl.rows.length + " judges think CO is in top 2 <br>"; */
        //Interpret exchanges that have been agreed upon
        if (OObeatOG == callTbodyEl.rows.length) finalOObeatOG = true;
        if (CGbeatOG == callTbodyEl.rows.length) finalCGbeatOG = true;
        if (CGbeatOO == callTbodyEl.rows.length) finalCGbeatOO = true;
        if (CObeatOG == callTbodyEl.rows.length) finalCObeatOG = true;
        if (CObeatOO == callTbodyEl.rows.length) finalCObeatOO = true;
        if (CObeatCG == callTbodyEl.rows.length) finalCObeatCG = true;
        if (OObeatOG == 0) finalOObeatOG = false;
        if (CGbeatOG == 0) finalCGbeatOG = false;
        if (CGbeatOO == 0) finalCGbeatOO = false;
        if (CObeatOG == 0) finalCObeatOG = false;
        if (CObeatOO == 0) finalCObeatOO = false;
        if (CObeatCG == 0) finalCObeatCG = false;
        //If function is called by the "+" button, it updates the dissent table (exchanges to discuss)
        //Mirror the calls that show a minority number of the panel (1/5 think OO>OG becomes 4/5 think OG>OO)
        var mirroredOObeatOG = OObeatOG;
        var mirroredCGbeatOG = CGbeatOG;
        var mirroredCGbeatOO = CGbeatOO;
        var mirroredCObeatOG = CObeatOG;
        var mirroredCObeatOO = CObeatOO;
        var mirroredCObeatCG = CObeatCG;
        //
        if (OObeatOG < (callTbodyEl.rows.length / 2)) mirroredOObeatOG = callTbodyEl.rows.length - OObeatOG;
        if (CGbeatOG < (callTbodyEl.rows.length / 2)) mirroredCGbeatOG = callTbodyEl.rows.length - CGbeatOG;
        if (CGbeatOO < (callTbodyEl.rows.length / 2)) mirroredCGbeatOO = callTbodyEl.rows.length - CGbeatOO;
        if (CObeatOG < (callTbodyEl.rows.length / 2)) mirroredCObeatOG = callTbodyEl.rows.length - CObeatOG;
        if (CObeatOO < (callTbodyEl.rows.length / 2)) mirroredCObeatOO = callTbodyEl.rows.length - CObeatOO;
        if (CObeatCG < (callTbodyEl.rows.length / 2)) mirroredCObeatCG = callTbodyEl.rows.length - CObeatCG;
        //
        if (OGTopTwo < (callTbodyEl.rows.length / 2)) OGTopTwo = callTbodyEl.rows.length - OGTopTwo;
        if (OOTopTwo < (callTbodyEl.rows.length / 2)) OOTopTwo = callTbodyEl.rows.length - OOTopTwo;
        if (CGTopTwo < (callTbodyEl.rows.length / 2)) CGTopTwo = callTbodyEl.rows.length - CGTopTwo;
        if (COTopTwo < (callTbodyEl.rows.length / 2)) COTopTwo = callTbodyEl.rows.length - COTopTwo;
        //Rate exchanges to resolve, clearest to closest;
        //Clearest is found by a primary consideration of whether many judges agree on that exchange,
        //Then a secondary consideration of the distance of the benches in each judge's calls,
        //Then a tertiary consideration of seeing disagreements on whether both teams are in top two or bottom two for most judges,        //Then a last tiebreaker here which is whether it's the closer to the first or last exchange in the debate
        //The priority is indicated with decimals to make sure that the more secondary considerations will never weigh more than the primary ones
        PriorityOOOG = mirroredOObeatOG + 1 / (10 * DistanceOOOG) + 0.001 * (OOTopTwo + OGTopTwo) + 0.0006;
        PriorityCGOG = mirroredCGbeatOG + 1 / (10 * DistanceCGOG) + 0.001 * (CGTopTwo + OGTopTwo) + 0.0005;
        PriorityCGOO = mirroredCGbeatOO + 1 / (10 * DistanceCGOO) + 0.001 * (CGTopTwo + OOTopTwo) + 0.0004;
        PriorityCOOG = mirroredCObeatOG + 1 / (10 * DistanceCOOG) + 0.001 * (COTopTwo + OGTopTwo) + 0.0003;
        PriorityCOOO = mirroredCObeatOO + 1 / (10 * DistanceCOOO) + 0.001 * (COTopTwo + OOTopTwo) + 0.0002;
        PriorityCOCG = mirroredCObeatCG + 1 / (10 * DistanceCOCG) + 0.001 * (COTopTwo + CGTopTwo) + 0.0001;
        //Arrange clearest to closest exchange
        var clearestCall = [{ key: "OG-OO", value: PriorityOOOG },
        { key: "OG-CG", value: PriorityCGOG },
        { key: "OO-CG", value: PriorityCGOO },
        { key: "OG-CO", value: PriorityCOOG },
        { key: "OO-CO", value: PriorityCOOO },
        { key: "CG-CO", value: PriorityCOCG }];
        clearestCall.sort(function (a, b) {
            return b.value - a.value;
        });
        //Show to user clearest to closest exchange
        //While eliminating necessity to indicate exchanges that are unanimous
        //Also add options to resolve those exchanges
        for (i = 0; i < 6; i++) {
            if (clearestCall[i].value >= callTbodyEl.rows.length)
                continue;
            $("dissentTableStatus").style.display = "none";
            $("dissentTable").innerHTML += `
            <tr>
                <td>
                <input type="radio" class="resolveBtn" name="*${clearestCall[i].key}" id="More${clearestCall[i].key}"></input>
                ${clearestCall[i].key}
                <input type="radio" class="resolveBtn" name="*${clearestCall[i].key}" id="Less${clearestCall[i].key}"></input>
                </td>
                <td>${clearestCall[i].value}
                </td>
            </tr>`;
        }
    }
}



callFormEl.addEventListener("submit", onInputDecision);
callFormEl.addEventListener("submit", calculateDissent);
callTableEl.addEventListener("click", onDeleteRow);
dissentTableEl.addEventListener("dblclick", onClearRadio);
$("finaliseDecisionBtn").addEventListener("click", onFinalise);