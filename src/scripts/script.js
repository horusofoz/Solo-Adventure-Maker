var roomLayoutArray = initializeRoomArray();
var roomContentArray = initializeRoomContentArray();
var passageLayoutArray = initializePassageLayoutArray();
var passageContentArray = initializePassageContentArray();
var doorArray = initializeDoorArray();
var secretDoorArray = initializeSecretDoorArray();
var leadsToArray = initializeLeadsToArray();
var trapArray = initializeTrapArray();
var dungeonSizeArray = initializeDungeonSizeArray();
var dungeonTypeArray = initializeDungeonTypeArray();
var dungeonStartArray = initializeDungeonStartArray();
var stairArray = initializeStairArray();
var obstacleArray = initializeObstacleArray();
var clueArray = initializeClueArray();
var questTypeArray = initializeQuestTypeArray();
var questSourceArray = initializeQuestSourceArray();
var encounterWildernessArray = initializeEncounterWildernessArray();
var encounterUrbanArray = initializeUrbanEncounterArray();
var encounterDungeonArray = initializeDungeonEncounterArray();
var monsterIntentionArray = initializeMonsterIntentionArray();
var monsterReactionArray = initializeMonsterReactionArray();
var verbArray = initializeVerbArray();
var nounArray = initializeNounArray();
var adjectiveArray = initializeAdjectiveArray();


window.onload = function() {

  // Dungeon Elements
  var roomRoller = document.getElementById("room-roller");
  var passageRoller = document.getElementById("passage-roller");
  var doorRoller = document.getElementById("door-roller");
  var secretDoorRoller = document.getElementById("secret-door-roller");
  var trapRoller = document.getElementById("trap-roller");
  var dungeonRoller = document.getElementById("dungeon-roller");
  var stairRoller = document.getElementById("stair-roller");
  var obstacleRoller = document.getElementById("obstacle-roller");
  var dungeonContentLabel = document.getElementById("dungeon-content-label");
  var dungeonContentResult = document.getElementById("dungeon-content-result");

  // Quest Elements  
  var questRoller = document.getElementById("quest-roller");
  var clueRoller = document.getElementById("clue-roller");
  var questContentLabel = document.getElementById("quest-content-label");
  var questContentResult = document.getElementById("quest-content-result");

  // Encounter Elements
  var encounterUrbanRoller = document.getElementById("urban-encounter-roller");
  var encounterWildernessRoller = document.getElementById("wilderness-encounter-roller");
  var encounterDungeonRoller = document.getElementById("dungeon-encounter-roller");
  var encounterCombatRoller = document.getElementById("encounter-combat-roller");
  var monsterReactionRoller = document.getElementById("monster-reaction-roller");
  var monsterIntentionRoller = document.getElementById("monster-intention-roller");
  var encounterContentLabel = document.getElementById("encounter-content-label");
  var encounterContentResult = document.getElementById("encounter-content-result");

  // Oracle Elements
  var muneQuestionRoller = document.getElementById("mune-question-roller");
  var muneInterventionRoller = document.getElementById("mune-intervention-roller");
  var muneTwneneRoller = document.getElementById("mune-twene-roller");
  var satQuestionRoller = document.getElementById("sat-question-roller");
  var oracleContentLabel = document.getElementById("oracle-content-label");
  var oracleContentResult = document.getElementById("oracle-content-result");

  // Portent Elements
  var verbToggle = document.getElementById("verb-toggle");
  var nounToggle = document.getElementById("noun-toggle");
  var adjectiveToggle = document.getElementById("adjective-toggle");
  var portentRoller = document.getElementById("portent-roller");
  var portentContentLabel = document.getElementById("portent-content-label");
  var portentContentResult = document.getElementById("portent-content-result");

  // Tab buttons
  var tabButtonDungeon = document.getElementById("tab-button-dungeon");
  var tabButtonQuest = document.getElementById("tab-button-quest");
  var tabButtonEncounter = document.getElementById("tab-button-encounter");
  var tabButtonOracle = document.getElementById("tab-button-oracle");
  var tabButtonPortent = document.getElementById("tab-button-portent");
  var tabButtonAbout = document.getElementById("tab-button-about");

  // DUNGEON BUTTON FUNCTIONS
  roomRoller.onclick = function() {
    
    var room = rollRoom();
    dungeonContentLabel.innerHTML = "Room";
    dungeonContentResult.innerHTML = room.layout;
    dungeonContentResult.innerHTML += room.content;
    return false;
  }

  passageRoller.onclick = function() {
    var passage = rollPassage();
    dungeonContentLabel.innerHTML = "Passage";
    dungeonContentResult.innerHTML = passage.layout;
    dungeonContentResult.innerHTML += passage.content;

    return false;
  }

  doorRoller.onclick = function() {
    var door = rollDoor();
    dungeonContentLabel.innerHTML = "Door";
    dungeonContentResult.innerHTML = door;

    return false;
  }

  secretDoorRoller.onclick = function() {
    var secretDoor = rollSecretDoor();
    dungeonContentLabel.innerHTML = "Secret Door";
    dungeonContentResult.innerHTML = secretDoor;

    return false;
  }

  trapRoller.onclick = function() {
    var trap = rollTrap();
    dungeonContentLabel.innerHTML = "Trap";
    dungeonContentResult.innerHTML = trap;

    return false;
  }

  dungeonRoller.onclick = function() {
    var dungeon = rollDungeon();
    dungeonContentLabel.innerHTML = "Dungeon";
    dungeonContentResult.innerHTML = dungeon;

    return false;
  }

  stairRoller.onclick = function() {
    var stair = rollStair();
    dungeonContentLabel.innerHTML = "Stair";
    dungeonContentResult.innerHTML = stair;

    return false;
  }

  obstacleRoller.onclick = function() {
    var obstacle = rollObstacle();
    dungeonContentLabel.innerHTML = "Obstacle";
    dungeonContentResult.innerHTML = obstacle;

    return false;
  }

// QUEST BUTTON FUNCTIONS
  clueRoller.onclick = function() {
    var clue = rollClue();
    questContentLabel.innerHTML = "Clue";
    questContentResult.innerHTML = clue;

    return false;
  }

  questRoller.onclick = function() {
    var quest = rollQuest();
    questContentLabel.innerHTML = "Quest";
    questContentResult.innerHTML = quest;

    return false;
  }

// ENCOUNTER BUTTON FUNCTIONS

encounterUrbanRoller.onclick = function() {
  var urbanEncounter = rollEncounterUrban();
  encounterContentLabel.innerHTML = "Urban Encounter";
  encounterContentResult.innerHTML = urbanEncounter;
}

encounterWildernessRoller.onclick = function() {
  var wildernessEncounter = rollEncounterWilderness();

  encounterContentLabel.innerHTML = "Wilderness Encounter";
  encounterContentResult.innerHTML = wildernessEncounter;
}

encounterDungeonRoller.onclick = function() {
  var dungeonEncounter = rollEncounterDungeon();

  encounterContentLabel.innerHTML = "Dungeon Encounter";
  encounterContentResult.innerHTML = dungeonEncounter;
}

encounterCombatRoller.onclick = function() {
  var combatEncounter = rollCombatEncounter();

  encounterContentLabel.innerHTML = "Combat Encounter";
  encounterContentResult.innerHTML = combatEncounter;
}

monsterIntentionRoller.onclick = function() {
  var monsterIntention = rollMonsterIntention();

  encounterContentLabel.innerHTML = "Monster Intention";
  encounterContentResult.innerHTML = monsterIntention;
}

monsterReactionRoller.onclick = function() {
  var monsterReaction = rollMonsterReaction();

  encounterContentLabel.innerHTML = "Monster Reaction";
  encounterContentResult.innerHTML = monsterReaction;
}

// ORACLE BUTTON FUNCTIONS
muneQuestionRoller.onclick = function() {
  var muneAnswer = rollMuneQuestion();
  
  oracleContentLabel.innerHTML = "MUNE Question";
  oracleContentResult.innerHTML = muneAnswer;
}

muneInterventionRoller.onclick = function() {
  var muneIntervention = rollMuneIntervention();
  
  oracleContentLabel.innerHTML = "MUNE Intervention";
  oracleContentResult.innerHTML = muneIntervention;
}

muneTwneneRoller.onclick = function() {
  var tweneResult = rollMuneTwene();
  
  oracleContentLabel.innerHTML = "MUNE TWENE";
  oracleContentResult.innerHTML = tweneResult;
}

satQuestionRoller.onclick = function() {
  var satAnswer = rollSATQuestion();
  
  oracleContentLabel.innerHTML = "SAT Question";
  oracleContentResult.innerHTML = satAnswer;
}

// PORTENT BUTTON FUNCTIONS
verbToggle.onclick = function() {
  toggleSelector(verbToggle);
}

nounToggle.onclick = function() {
  toggleSelector(nounToggle);
}

adjectiveToggle.onclick = function() {
  toggleSelector(adjectiveToggle);
}

portentRoller.onclick = function() {
  var portent = rollPortent();

  portentContentLabel.innerHTML = "Portent";
  portentContentResult.innerHTML = portent;
}

// TAB BUTTON FUNCTIONS
  tabButtonDungeon.onclick = function() {
    switchTabs("tab-dungeon");
    return false;
  }

  tabButtonQuest.onclick = function() {
    switchTabs("tab-quest");
    return false;
  }

  tabButtonOracle.onclick = function() {
    switchTabs("tab-oracle");
    return false;
  }

  tabButtonPortent.onclick = function() {
    switchTabs("tab-portent");
    return false;
  }

  tabButtonEncounter.onclick = function() {
    switchTabs("tab-encounter");
    return false;
  }

  tabButtonAbout.onclick = function() {
    switchTabs("tab-about");
    return false;
  }

  tabButtonAbout.click();

  return false;
}

/*********   SHARED START *********/

function switchTabs(tab) {
  
  // Hide all elements with class "tab-content" by default
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(tab).style.display = "flex";
}

function toggleSelector(toggleSelected) {
  toggleSelected.classList.toggle("toggle-selected");
  return false;
}

function enforceMinMaxValue(type, value, minMaxValue) {
  var result = value;
  if (type === "minimum" && value < minMaxValue) {
    result = minMaxValue;
  } else if (type === "maximum" && value > minMaxValue) {
    result = minMaxValue;
  }

  return result;
}

function applyModifier(initialValue, modifierType = "none", modifierValue = 0) {
  var result = initialValue;

  if (modifierType === "none") {
    return result
  }

  switch (modifierType) {
    case "add":
      result += modifierValue;
      break;
    case "subtract":
      result -= modifierValue;
      break;
    case "multiply":
      result *= modifierValue;
      break;
    case "divide":
      result /= modifierValue;
      break;
    case "maximum":
    case "minimum":
      result = enforceMinMaxValue(modifierType, result, modifierValue);
      break;
    default:
      console.log("Unknown  modifier - " + modifierType);
  }
  return result
}

function rollDice(diceType) {

  if (diceType === 0) {
    return 0
  }

  min = Math.ceil(1);
  max = Math.floor(diceType);
  return result = Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollPercentile(threshold, modifierType = "none", modifierValue = 0) {
  var initialValue = rollDice(100);
  result = applyModifier(initialValue, modifierType, modifierValue);

  if (result <= threshold) {
    return true;
  }

  return false;
}

function rollLeadsTo(leadsToNum) {
  var leadsToString = "";
  var leadsToDataObject = objectifyLeadsToRow(leadsToNum);
  var leadsToRoll = rollDice(leadsToDataObject.diceType);
  
  switch(leadsToRoll) {
    case 1:
      leadsToString += leadsToDataObject.result1;
      break;
    case 2:
      leadsToString += leadsToDataObject.result2;
      break;
    case 3:
      leadsToString += leadsToDataObject.result3;
      break;
    case 4:
      leadsToString += leadsToDataObject.result1;
      break;
    default:
      // code block
  }

  return leadsToString;
}

/*********   SHARED END   *********/

/*********   ROOM START *********/

function rollRoom() {

  var roomLayoutRollResult = rollDice(20);
  var roomLayoutDataObject = objectifyRoomLayoutRow(roomLayoutRollResult);

  var roomContentRollResult = rollDice(100);

  var modifier = document.getElementById("dungeon-content-modifier").value;
  modifier = parseInt(modifier, 10);

  document.getElementById("dungeon-content-modifier").value = "";

  if(modifier > 0) {
    roomContentRollResult += modifier;
    roomContentRollResult = enforceMinMaxValue("maximum", roomContentRollResult, 100);
  }

  var roomContentDataObject = objectifyRoomContentRow(roomContentRollResult);

  let room = {
    layout: setRoomLayout(roomLayoutDataObject),
    content: setRoomContent(roomContentDataObject)
  }

  return room;
}

function setRoomContent(roomContentDataObject) {

  /*console.log("Room Content Table Row:\n" + JSON.stringify(roomContentDataObject));*/

  var roomContentString = "<br />CONTENTS"

  if (roomContentDataObject.encounter !== "") {
    roomContentString += "<br />ENEMIES: " + roomContentDataObject.encounter;
  }

  // Resolve Found Bits
  var isThereClue = rollPercentile(roomContentDataObject.clue);
  var isThereLoot = rollPercentile(roomContentDataObject.loot);
  var isThereRandomFeature = rollPercentile(roomContentDataObject.randomFeature);
  var isThereSecretDoor = rollPercentile(roomContentDataObject.secretDoor);

  if(isThereClue || isThereLoot || isThereRandomFeature || isThereSecretDoor) {
    var foundString = "<br />FOUND:";

    if (isThereClue) {
      foundString += " Clue";
    }

    if (isThereLoot) {
      foundString += " Loot";
    }
    
    if (isThereSecretDoor) {
      foundString += " Secret Door";
    }
  
    
    if (isThereRandomFeature) {
      foundString += " Random Feature";
    }
    roomContentString += foundString;
  }

  if (roomContentDataObject.hazard !== "") {
    roomContentString += "<br />HAZARD: " + roomContentDataObject.hazard;
  }

  if (roomContentDataObject.event !== "") {
    roomContentString += "<br />EVENT: " + roomContentDataObject.event;
  }

  if (roomContentDataObject.note !== "") {
    roomContentString += "<br />NOTE: " + roomContentDataObject.note;
  }

  return roomContentString;
}

function setRoomLayout(roomLayoutDataObject) {
  var roomLayoutSize = rollRoomSize(roomLayoutDataObject);
  var roomLayoutExits = rollExits(roomLayoutDataObject);
  var roomLayoutExitTypes = rollExitTypes(roomLayoutExits);
  var roomLayoutShape = roomLayoutDataObject.shape;

  var roomLayoutString = "LAYOUT<br />"
  roomLayoutString += "SIZE: " + roomLayoutSize + "<br />";
  roomLayoutString += "SHAPE: " + roomLayoutShape + "<br />";

  roomLayoutString += "<br />EXITS<br />"

  if (roomLayoutExits === 0) {
    roomLayoutString += "No exits<br />";
    return roomLayoutString;
  }

  if (roomLayoutExitTypes.doors > 0) {
    roomLayoutString += "DOORS: " + roomLayoutExitTypes.doors + "<br />";
  }

  if (roomLayoutExitTypes.passages > 0) {
    roomLayoutString += "PASSAGES: " + roomLayoutExitTypes.passages + "<br />";
  }

  return roomLayoutString;
}

function initializeRoomArray() {
  var roomLayoutArray = [
    [1, "1-2", "Rectangular", "(d4x10) ft x (d4x10) ft", 2, 4, "multiply", 10, "none", "", 4, "multiply", 10, "none", "", "", 6, "subtract", 1, "none", "", "Rectangular, dimensions (d4x10) ft x (d4x10) ft. 1d6 exits (including the one you entered by)"],
    [2, "1-2", "Rectangular", "(d4x10) ft x (d4x10) ft", 2, 4, "multiply", 10, "none", "", 4, "multiply", 10, "none", "", "", 6, "subtract", 1, "none", "", "Rectangular, dimensions (d4x10) ft x (d4x10) ft. 1d6 exits (including the one you entered by)"],
    [3, "3-4", "Square", "(d4+1) x 10 ft. on all sides", 1, 4, "add", 1, "multiply", 10, "", "none", "", "none", "", "on all sides", 4, "none", "", "none", "", "Square, (d4+1) x 10 ft. on all sides, 1d4 exits."],
    [4, "3-4", "Square", "(d4+1) x 10 ft. on all sides", 1, 4, "add", 1, "multiply", 10, "", "none", "", "none", "", "on all sides", 4, "none", "", "none", "", "Square, (d4+1) x 10 ft. on all sides, 1d4 exits."],
    [5, "5-6", "Square", "(d6+1) x 10 ft. on all sides", 1, 6, "add", 1, "multiply", 10, "", "none", "", "none", "", "on all sides", 6, "none", "", "none", "", "Square (d6 +1) x 10 ft. on all sides, 1d6 exits"],
    [6, "5-6", "Square", "(d6+1) x 10 ft. on all sides", 1, 6, "add", 1, "multiply", 10, "", "none", "", "none", "", "on all sides", 6, "none", "", "none", "", "Square (d6 +1) x 10 ft. on all sides, 1d6 exits"],
    [7, "7-8", "Square", "(d8+1) x 10 ft. on all sides", 1, 8, "add", 1, "multiply", 10, "", "none", "", "none", "", "on all sides", 8, "none", "", "none", "", "Square, (d8+1) x 10 ft. on all sides, 1d8 exits"],
    [8, "7-8", "Square", "(d8+1) x 10 ft. on all sides", 1, 8, "add", 1, "multiply", 10, "", "none", "", "none", "", "on all sides", 8, "none", "", "none", "", "Square, (d8+1) x 10 ft. on all sides, 1d8 exits"],
    [9, "9-10", "Rectangular", "(d4+1)x10 ft x (d8+1) x10 ft", 2, 4, "add", 1, "multiply", 10, 8, "add", 1, "multiply", 10, "", 6, "none", "", "none", "", "Rectangle, (d4+1)x10 ft x (d8+1) x10 ft, 1d6 exits"],
    [10, "9-10", "Rectangular", "(d4+1)x10 ft x (d8+1) x10 ft", 2, 4, "add", 1, "multiply", 10, 8, "add", 1, "multiply", 10, "", 6, "none", "", "none", "", "Rectangle, (d4+1)x10 ft x (d8+1) x10 ft, 1d6 exits"],
    [11, "11-12", "Rectangular", "(d6+1)x10 ft x (d8+2) x10 ft", 2, 6, "add", 1, "multiply", 10, 8, "add", 2, "multiply", 10, "", 6, "none", "", "none", "", "Rectangle, (d6+1) x10 ft x (d6+2) x 10 ft, 1d6 exits"],
    [12, "11-12", "Rectangular", "(d6+1)x10 ft x (d8+2) x10 ft", 2, 6, "add", 1, "multiply", 10, 8, "add", 2, "multiply", 10, "", 6, "none", "", "none", "", "Rectangle, (d6+1) x10 ft x (d6+2) x 10 ft, 1d6 exits"],
    [13, "13-14", "Circular", "d4 x 10 diameter", 1, 4, "none", "", "multiply", 10, "", "none", "", "none", "", "diameter", 4, "none", "", "none", "", "Circular, d4 x 10 diameter, d4 exits"],
    [14, "13-14", "Circular", "d4 x 10 diameter", 1, 4, "none", "", "multiply", 10, "", "none", "", "none", "", "diameter", 4, "none", "", "none", "", "Circular, d4 x 10 diameter, d4 exits"],
    [15, "15", "Triangular", "d6x10 down one side", 1, 6, "none", "", "multiply", 10, "", "none", "", "none", "", "down one side", 4, "none", "", "none", "", "Triangular, d6x10 down one side, other sides whatever shape fits best, d4 exits"],
    [16, "16", "Pentagonal", "d4 x 10 ft. across", 1, 4, "none", "", "multiply", 10, "", "none", "", "none", "", "across", 4, "subtract", 2, "minimum", 1, "Pentagonal, d4 x 10 ft. across, d4-2 exits (minimum 1)"],
    [17, "17", "Hexagonal", "d6 x 10 ft. across", 1, 6, "none", "", "multiply", 10, "", "none", "", "none", "", "across", 4, "subtract", 1, "minimum", 1, "Hexagonal, d6 x 10 ft. across, d4-1 exits (minimum 1)"],
    [18, "18", "Octagonal", "d6 x 10 ft. across", 1, 6, "none", "", "multiply", 10, "", "none", "", "none", "", "across", 4, "subtract", 1, "minimum", 1, "Octagonal, d6 x 10 ft. across, d4-1 exits (minimum 1)"],
    [19, "19", "Trapezoidal", "d6 x 10 ft. across", 1, 6, "none", "", "multiply", 10, "", "none", "", "none", "", "across", "", "none", "", "none", "", "Trapezoidal, d6 x 10 ft roughly on each side."],
    [20, "20", "Rough cave", "d12 x 10 width (approx)", 1, 12, "none", "", "multiply", 10, "", "none", "", "none", "", "width (approx)", "", "none", "", "none", "", "Rough cave, d12 x 10 width (approx)"]
  ];
  return roomLayoutArray;
}

function rollExitTypes(exitsCount) {

  var exitTypes = {
    doors: 0,
    passages: 0
  }

  for (let step = 0; step < exitsCount; step++) {
    if (rollDice(2) === 1) {
      exitTypes.doors += 1;
    } else {
      exitTypes.passages += 1;
    }
  }

  return exitTypes;
}

function rollExits(roomLayoutDataObject) {
  var result = rollDice(roomLayoutDataObject.exitDiceType); // Get initial value from dice roll
  result = applyModifier(result, roomLayoutDataObject.exitDiceEarlyModifierType, roomLayoutDataObject.exitDiceEarlyModifierValue); // Apply early modifiers
  result = applyModifier(result, roomLayoutDataObject.exitDiceLateModifierType, roomLayoutDataObject.exitDiceLateModifierValue); // Apply late modifiers
  return result;
}

function rollRoomSize(roomLayoutDataObject) {
  var roomSizeValue1 = 0;
  roomSizeValue1 = rollDice(roomLayoutDataObject.sizeDice1Type);
  roomSizeValue1 += applyModifier(roomSizeValue1, roomLayoutDataObject.sizeDice1EarlyModifierType, roomLayoutDataObject.sizeDice1EarlyModifierValue);
  roomSizeValue1 = applyModifier(roomSizeValue1, roomLayoutDataObject.sizeDice1LateModifierType, roomLayoutDataObject.sizeDice1LateModifierValue);
  var roomSizeString = roomSizeValue1 + " ft";

  if (roomLayoutDataObject.sizeDiceRolls === 2) {
    var roomSizeValue2 = 0;
    roomSizeValue2 = rollDice(roomLayoutDataObject.sizeDice2Type);
    roomSizeValue2 = applyModifier(roomSizeValue2, roomLayoutDataObject.sizeDice2EarlyModifierType, roomLayoutDataObject.sizeDice2EarlyModifierValue);
    roomSizeValue2 = applyModifier(roomSizeValue2, roomLayoutDataObject.sizeDice2LateModifierType, roomLayoutDataObject.sizeDice2LateModifierValue);

    roomSizeString += " x " + roomSizeValue2 + " ft";
  }

  if (roomLayoutDataObject.sizeSuffix != "") {
    roomSizeString += " " + roomLayoutDataObject.sizeSuffix;
  }

  return roomSizeString;
}

function objectifyRoomLayoutRow(roomLayoutRowNum) {

  var roomLayoutRow = roomLayoutArray[roomLayoutRowNum - 1]

  var roomLayoutDataObject = {
    rollResult: roomLayoutRow[0],
    rollResultRange: roomLayoutRow[1],
    shape: roomLayoutRow[2],
    sizeLabel: roomLayoutRow[3],
    sizeDiceRolls: roomLayoutRow[4],
    sizeDice1Type: roomLayoutRow[5],
    sizeDice1EarlyModifierType: roomLayoutRow[6],
    sizeDice1EarlyModifierValue: roomLayoutRow[7],
    sizeDice1LateModifierType: roomLayoutRow[8],
    sizeDice1LateModifierValue: roomLayoutRow[9],
    sizeDice2Type: roomLayoutRow[10],
    sizeDice2EarlyModifierType: roomLayoutRow[11],
    sizeDice2EarlyModifierValue: roomLayoutRow[12],
    sizeDice2LateModifierType: roomLayoutRow[13],
    sizeDice2LateModifierValue: roomLayoutRow[14],
    sizeSuffix: roomLayoutRow[15],
    exitDiceType: roomLayoutRow[16],
    exitDiceEarlyModifierType: roomLayoutRow[17],
    exitDiceEarlyModifierValue: roomLayoutRow[18],
    exitDiceLateModifierType: roomLayoutRow[19],
    exitDiceLateModifierValue: roomLayoutRow[20],
    description: roomLayoutRow[21]
  }
  /*
  console.log(JSON.stringify(roomLayoutDataObject));
  */
  return roomLayoutDataObject;
}

function initializeRoomContentArray() {
  var roomContentArray = [
  [1,"1-4","Deadly Encounter",45,75,0,0,"","","Roll DMG Loot table appropriate to Encounter","Level appropriate Deadly Encounter Loot 45%, Clue 75%. Roll DMG Loot table appropriate to Encounter"],
  [2,"1-4","Deadly Encounter",45,75,0,0,"","","Roll DMG Loot table appropriate to Encounter","Level appropriate Deadly Encounter Loot 45%, Clue 75%. Roll DMG Loot table appropriate to Encounter"],
  [3,"1-4","Deadly Encounter",45,75,0,0,"","","Roll DMG Loot table appropriate to Encounter","Level appropriate Deadly Encounter Loot 45%, Clue 75%. Roll DMG Loot table appropriate to Encounter"],
  [4,"1-4","Deadly Encounter",45,75,0,0,"","","Roll DMG Loot table appropriate to Encounter","Level appropriate Deadly Encounter Loot 45%, Clue 75%. Roll DMG Loot table appropriate to Encounter"],
  [5,"5-8","",0,0,0,0,"","","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
  [6,"5-8","",0,0,0,0,"","","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
  [7,"5-8","",0,0,0,0,"","","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
  [8,"5-8","",0,0,0,0,"","","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.","Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
  [9,"9-12","Easy Encounter",0,0,0,0,"","","Low level minions of the BBEG in this room.","Low level minions of the BBEG in this room. Level appropriate easy Encounter"],
  [10,"9-12","Easy Encounter",0,0,0,0,"","","Low level minions of the BBEG in this room.","Low level minions of the BBEG in this room. Level appropriate easy Encounter"],
  [11,"9-12","Easy Encounter",0,0,0,0,"","","Low level minions of the BBEG in this room.","Low level minions of the BBEG in this room. Level appropriate easy Encounter"],
  [12,"9-12","Easy Encounter",0,0,0,0,"","","Low level minions of the BBEG in this room.","Low level minions of the BBEG in this room. Level appropriate easy Encounter"],
  [13,"13-20","",0,0,0,0,"Quicksand - See DMG 110","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [14,"13-20","Medium Encounter",0,0,0,0,"Shrieker - Treat as level appropriate medium encounter - See MM138","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [15,"13-20","",0,0,0,0,"Trap","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [16,"13-20","Easy Encounter",0,0,0,0,"Violet fungus - Treat as level appropriate easy encounter - See MM138","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [17,"13-20","Medium Encounter",0,0,0,0,"","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [18,"13-20","",0,0,0,0,"Brown mold - See DMG 105","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [19,"13-20","",0,0,0,0,"Green slime - See DMG 105","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [20,"13-20","",0,0,0,0,"Yellow slime - See DMG 105","","","Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
  [21,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [22,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [23,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [24,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [25,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [26,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [27,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [28,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [29,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [30,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [31,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [32,"21-32","Hard Encounter",30,30,30,30,"","","","Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
  [33,"33-36","",0,0,0,0,"","NPC in room investigating.","Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.","NPC in room investigating. Roll again to find out what they are investigating."],
  [34,"33-36","",0,0,0,0,"","NPC in room investigating.","Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.","NPC in room investigating. Roll again to find out what they are investigating."],
  [35,"33-36","",0,0,0,0,"","NPC in room investigating.","Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.","NPC in room investigating. Roll again to find out what they are investigating."],
  [36,"33-36","",0,0,0,0,"","NPC in room investigating.","Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.","NPC in room investigating. Roll again to find out what they are investigating."],
  [37,"37-40","",10,0,0,0,"","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.","Enemy alive, 30%","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it. Enemy alive, 30%. Loot 10%."],
  [38,"37-40","",10,0,0,0,"","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.","Enemy alive, 30%","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it / victim to it. Enemy alive, 30%. Loot 10%."],
  [39,"37-40","",10,0,0,0,"","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.","Enemy alive, 30%","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it / victim to it. Enemy alive, 30%. Loot 10%."],
  [40,"37-40","",10,0,0,0,"","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.","Enemy alive, 30%","A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it / victim to it. Enemy alive, 30%. Loot 10%."],
  [41,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [42,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [43,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [44,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [45,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [46,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [47,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [48,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [49,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [50,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [51,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [52,"41-52","Easy Encounter",20,30,10,0,"","","","Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
  [53,"53-56","",0,0,0,0,"Obstacle","","","Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
  [54,"53-56","",0,0,0,0,"Obstacle","","","Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
  [55,"53-56","",0,0,0,0,"Obstacle","","","Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
  [56,"53-56","",0,0,0,0,"Obstacle","","","Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
  [57,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [58,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [59,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [60,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [61,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [62,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [63,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [64,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [65,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [66,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [67,"57-67","Medium Encounter",30,30,20,0,"","","","Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
  [68,"68-71","Hard Encounter",50,0,0,0,"","NPC near death, unconscious.","NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp.","NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
  [69,"68-71","Hard Encounter",50,0,0,0,"","NPC near death, unconscious.","NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp.","NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
  [70,"68-71","Hard Encounter",50,0,0,0,"","NPC near death, unconscious.","NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp.","NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
  [71,"68-71","Hard Encounter",50,0,0,0,""," NPC has fought a powerful creature, and lost, but has damaged it somewhat. NPC near death, unconscious.","NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp.","NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
  [72,"72-74","Medium Encounter",0,0,0,0,"","Two creatures are engaged in battle. You stumble in just as the battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over?","Since they are otherwise engaged, you have advantage on stealth checks to creep up. Stealth DC is the creature's passive perception.","Two level appropriate ([d4] 1-2: Easy, 3-4: Medium) creatures are engaged in battle with each other. You stumble in just as battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over? Since they are otherwise engaged, you have advantage on stealth checks to creep up. (DC is the creature’s passive perception)"],
  [73,"72-74","Medium Encounter",0,0,0,0,"","Two creatures are engaged in battle. You stumble in just as the battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over?","Since they are otherwise engaged, you have advantage on stealth checks to creep up. Stealth DC is the creature's passive perception.","Two level appropriate ([d4] 1-2: Easy, 3-4: Medium) creatures are engaged in battle with each other. You stumble in just as battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over? Since they are otherwise engaged, you have advantage on stealth checks to creep up. (DC is the creature’s passive perception)"],
  [74,"72-74","Easy Encounter",0,0,0,0,"","Two creatures are engaged in battle. You stumble in just as the battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over?","Since they are otherwise engaged, you have advantage on stealth checks to creep up. Stealth DDC is the creature's passive perception.","Two level appropriate ([d4] 1-2: Easy, 3-4: Medium) creatures are engaged in battle with each other. You stumble in just as battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over? Since they are otherwise engaged, you have advantage on stealth checks to creep up. (DC is the creature’s passive perception)"],
  [75,"75-76","",0,0,0,0,"","Deserted but for some strange runes and symbols on the floor. Magical? Perhaps.","Roll QA to determine.","Deserted but for some strange runes and symbols on the floor. Magical? Perhaps."],
  [76,"75-76","",0,0,0,0,"","Deserted but for some strange runes and symbols on the floor. Magical? Perhaps.","Roll QA to determine.","Deserted but for some strange runes and symbols on the floor. Magical? Perhaps."],
  [77,"77-80","",0,0,0,30,"","NPC  has just defeated a Level Appropriate Deadly Encounter","NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.","Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
  [78,"77-80","",0,0,0,30,"","NPC  has just defeated a Level Appropriate Deadly Encounter","NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.","Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
  [79,"77-80","",0,0,0,30,"","NPC  has just defeated a Level Appropriate Deadly Encounter","NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.","Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
  [80,"77-80","",0,0,0,30,"","NPC  has just defeated a Level Appropriate Deadly Encounter","NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.","Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
  [81,"81-84","",30,0,0,0,"","Room appears empty.","Mission relevant loot chance 30%.","Empty. Mission relevant loot chance 30%."],
  [82,"81-84","",30,0,0,0,"","Room appears empty.","Room appears empty.","Empty. Mission relevant loot chance 30%."],
  [83,"81-84","",30,0,0,0,"","Room appears empty.","Room appears empty.","Empty. Mission relevant loot chance 30%."],
  [84,"81-84","",30,0,0,0,"","Room appears empty.","Room appears empty.","Empty. Mission relevant loot chance 30%."],
  [85,"85-88","Easy Encounter",30,30,0,0,"","","Roll for potential NPC - 30%","Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
  [86,"85-88","Easy Encounter",30,30,0,0,"","","","Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
  [87,"85-88","Easy Encounter",30,30,0,0,"","","","Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
  [88,"85-88","Easy Encounter",30,30,0,0,"","","","Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
  [89,"89-92","Deadly Encounter",0,0,0,0,"","A relic. What is it?","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic.","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic."],
  [90,"89-92","Deadly Encounter",0,0,0,0,"","","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic.","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic."],
  [91,"89-92","Deadly Encounter",0,0,0,0,"","","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic.","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic."],
  [92,"89-92","Deadly Encounter",0,0,0,0,"","","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic.","Accursed or blessed relic, guarded by level appropriate deadly Encounter Q/A rolls to determine nature of relic."],
  [93,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
  [94,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
  [95,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
  [96,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
  [97,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
  [98,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
  [99,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
  [100,"93-100","",90,0,0,0,"","BOSS / BBEG / Significant NPC Encounter!","Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.","BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."]
];
  return roomContentArray;

}

function objectifyRoomContentRow(roomContentRowNum) {

  var roomContentRow = roomContentArray[roomContentRowNum - 1]

  var roomContentDataObject = {
    rollResult: roomContentRow[0],
    rollResultRange: roomContentRow[1],
    encounter: roomContentRow[2],
    loot: roomContentRow[3],
    clue: roomContentRow[4],
    secretDoor: roomContentRow[5],
    randomFeature: roomContentRow[6],
    hazard: roomContentRow[7],
    event: roomContentRow[8],
    note: roomContentRow[9],
    fullDescription: roomContentRow[10]
  }
  /*
  console.log(JSON.stringify(roomContentDataObject));
  */
  return roomContentDataObject;
}

/*********   ROOM END *********/

/*********   PASSAGE START *********/

function initializePassageLayoutArray() {
  var passageLayoutArray = [
    [1,"Passage continues","",0,4,"none","none","multiply",10,"ft",5,"Passage continues d4 x 10 ft."],
    [2,"Passage continues","End at a door",15,0,"none","none","none",0,"ft",7,"Passage goes 15 ft and ends at door. Go to Door Table."],
    [3,"Passage continues","Ends at a stair.",30,0,"none","none","none",0,"ft",6,"Passage goes 30 ft and ends in stairs. Go to Stairs Table."],
    [4,"Passage continues","Turns left.",10,0,"none","none","none",0,"ft",5,"Passage turns left 90 degrees."],
    [5,"Passage continues","Turns right.",10,0,"none","none","none",0,"ft",5,"Passage turns right 90 degrees."],
    [6,"Passage continues","Leads to a dead end.",10,0,"none","none","none",0,"ft",8,"Passage dead ends. Return to last feature you want to explore. 40% Secret door. Notice DC (investigation) d10+7. If it is there, and found, go to Secret Door Table."],
    [7,"Passage continues","Leads to a 4 way intersection.",0,4,"none","none","multiply",10,"ft",5,"Passage continues 1d4 x 10 ft and comes to a four way intersection"],
    [8,"Passage continues","Leads to a T-junction.",0,4,"none","none","multiply",10,"ft",5,"Passage continues d4 x 10 ft and comes to a T-junction"],
    [9,"Passage continues","Leads to a side passage on the left.",0,6,"none","none","multiply",10,"ft",5,"Passage continues d6 x 10 ft and then you see a side passage leading off to the left"],
    [10,"Passage continues","Leads to a side passage on the right.",0,6,"none","none","multiply",10,"ft",5,"Passage continues d6 x 10 ft and then you see a side passage leading off to the right"],
    [11,"Passage continues","Leads to an open doorway.",10,0,"none","none","none",0,"ft",3,"Passage ends in an open entrance to a room. Go to Room Table"],
    [12,"Passage continues","Door in left wall.",15,0,"none","none","none",0,"ft",7,"Door in right wall. Go to Door Table"],
    [13,"Passage continues","Door in right wall.",15,0,"none","none","none",0,"ft",7,"Door in left wall. Go to Door Table"],
    [14,"Passage continues","",15,0,"none","none","none",0,"ft",5,"Secret door on passage wall (player’s choice which wall). Roll perception DC 15. If successful, go to Secret Door. If not, roll again on Passage Table, continuing along (as your PCs didn’t notice.)"],
    [15,"Passage narrows","",10,0,"none","none","none",0,"ft",5,"Passage narrows (1d6 ÷ 2) x 10 ft. (minimum width 5 ft)"],
    [16,"Passage widens","",10,0,"none","none","none",0,"ft",5,"Passage widens (1d6 ÷ 2) x 10 ft. (minimum width 10 ft)"],
    [17,"Passage continues","",15,0,"none","none","none",0,"ft",6,"Opening to the left, stairs. Go to Stairs table"],
    [18,"Passage continues","",15,0,"none","none","none",0,"ft",6,"Opening to the right, stairs. Go to Stairs table"],
    [19,"Passage continues","Leads to a dead end.",15,0,"none","none","none",0,"ft",2,"Opening in the floor, straight drop down 1d10 x 10 ft to a (1d4 roll) 1-2: Passage 3-4: Room"],
    [20,"Passage continues","",10,0,"none","none","none",0,"ft",9,"Roll on Random architecture table"]
  ];

  return passageLayoutArray;

}

function objectifyPassageLayoutRow(passageLayoutRowNum) {

  var passageLayoutRow = passageLayoutArray[passageLayoutRowNum - 1]

  var passageLayoutDataObject = {
    rollResult: passageLayoutRow[0],
    layout: passageLayoutRow[1],
    layoutExtended: passageLayoutRow[2],
    setSize: passageLayoutRow[3],
    sizeDiceType: passageLayoutRow[4],
    sizeDiceEarlyModifierType: passageLayoutRow[5],
    sizeDiceEarlyModifierValue: passageLayoutRow[6],
    sizeDiceLateModifierType: passageLayoutRow[7],
    sizeDiceLateModifierValue: passageLayoutRow[8],
    sizeSuffix: passageLayoutRow[9],
    leadsTo: passageLayoutRow[10],
    fullDescription: passageLayoutRow[13]
  }
  /*
  console.log(JSON.stringify(passageLayoutDataObject));
  */
  return passageLayoutDataObject;
}

function initializePassageContentArray() {
  var passageContentArray = [
    [1,"","",0,0,5,5,0,"Empty"],
    [2,"","",0,0,5,5,0,"Empty"],
    [3,"","",0,0,5,5,0,"Empty"],
    [4,"","",0,0,5,5,0,"Empty"],
    [5,"","",0,0,5,5,0,"Empty"],
    [6,"","",0,0,5,5,0,"Empty"],
    [7,"","",0,0,5,5,0,"Empty"],
    [8,"","",0,0,5,5,0,"Empty"],
    [9,"","",0,0,5,5,0,"Empty"],
    [10,"","",0,0,5,5,0,"Empty"],
    [11,"","",0,0,5,5,0,"Empty"],
    [12,"","",0,0,5,5,0,"Empty"],
    [13,"","",0,0,5,5,0,"Empty"],
    [14,"","",0,0,5,5,0,"Empty"],
    [15,"","",0,0,5,5,0,"Empty"],
    [16,"","",0,0,5,5,0,"Empty"],
    [17,"","",0,0,5,5,0,"Empty"],
    [18,"","",0,0,5,5,0,"Empty"],
    [19,"","",0,0,5,5,0,"Empty"],
    [20,"","",0,0,5,5,0,"Empty"],
    [21,"","",0,0,5,5,0,"Empty"],
    [22,"","",0,0,5,5,0,"Empty"],
    [23,"","",0,0,5,5,0,"Empty"],
    [24,"","",0,0,5,5,0,"Empty"],
    [25,"","",0,0,5,5,0,"Empty"],
    [26,"","",0,0,5,5,0,"Empty"],
    [27,"","",0,0,5,5,0,"Empty"],
    [28,"","",0,0,5,5,0,"Empty"],
    [29,"","",0,0,5,5,0,"Empty"],
    [30,"","",0,0,5,5,0,"Empty"],
    [31,"","",0,0,5,5,0,"Empty"],
    [32,"","",0,0,5,5,0,"Empty"],
    [33,"","",0,0,5,5,0,"Empty"],
    [34,"","",0,0,5,5,0,"Empty"],
    [35,"","",0,0,5,5,0,"Empty"],
    [36,"","",0,0,5,5,0,"Empty"],
    [37,"","",0,0,5,5,0,"Empty"],
    [38,"","",0,0,5,5,0,"Empty"],
    [39,"","",0,0,5,5,0,"Empty"],
    [40,"","",0,0,5,5,0,"Empty"],
    [41,"","",0,0,5,5,0,"Empty"],
    [42,"","",0,0,5,5,0,"Empty"],
    [43,"","",0,0,5,5,0,"Empty"],
    [44,"","",0,0,5,5,0,"Empty"],
    [45,"","",0,0,5,5,0,"Empty"],
    [46,"","",0,0,5,5,0,"Empty"],
    [47,"","",0,0,5,5,0,"Empty"],
    [48,"","",0,0,5,5,0,"Empty"],
    [49,"","",0,0,5,5,0,"Empty"],
    [50,"","",0,0,5,5,0,"Empty"],
    [51,"","",0,0,5,5,0,"Empty"],
    [52,"","",0,0,5,5,0,"Empty"],
    [53,"","",0,0,5,5,0,"Empty"],
    [54,"","",0,0,5,5,0,"Empty"],
    [55,"","",0,0,5,5,0,"Empty"],
    [56,"","",0,0,5,5,0,"Empty"],
    [57,"","",0,0,5,5,0,"Empty"],
    [58,"","",0,0,5,5,0,"Empty"],
    [59,"","",0,0,5,5,0,"Empty"],
    [60,"","",0,0,5,5,0,"Empty"],
    [61,"","",0,0,5,5,0,"Empty"],
    [62,"","",0,0,5,5,0,"Empty"],
    [63,"","",0,0,5,5,0,"Empty"],
    [64,"","",0,0,5,5,0,"Empty"],
    [65,"","",0,0,5,5,0,"Empty"],
    [66,"","",0,0,5,5,0,"Empty"],
    [67,"","",0,0,5,5,0,"Empty"],
    [68,"","",0,0,5,5,0,"Empty"],
    [69,"","",0,0,5,5,0,"Empty"],
    [70,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [71,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [72,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [73,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [74,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [75,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [76,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [77,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [78,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [79,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [80,"Empty apart from rubble.",0,10,0,5,5,0,"Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [81,"Empty apart from corpse.",0,20,0,5,5,0,"Empty apart from corpse. Clue on body 20%."],
    [82,"Empty apart from corpse.",0,20,0,5,5,0,"Empty apart from corpse. Clue on body 20%."],
    [83,"Empty apart from corpse.",0,20,0,5,5,0,"Empty apart from corpse. Clue on body 20%."],
    [84,"Empty apart from corpse.",0,20,0,5,5,0,"Empty apart from corpse. Clue on body 20%."],
    [85,"Empty apart from multiple corpses.",0,40,0,5,5,0,"Empty apart from multiple corpses. Clue on a body 40%."],
    [86,"Empty apart from multiple corpses.",0,40,0,5,5,0,"Empty apart from multiple corpses. Clue on a body 40%."],
    [87,"Empty apart from multiple corpses.",0,40,0,5,5,0,"Empty apart from multiple corpses. Clue on a body 40%."],
    [88,"Empty apart from multiple corpses.",0,40,0,5,5,0,"Empty apart from multiple corpses. Clue on a body 40%."],
    [89,"","Easy Encounter",15,15,5,5,0,"Empty apart from enemies. 1 level-appropriate easy Encounter Loot 15%, Clue 15%"],
    [90,"","Easy Encounter",15,15,5,5,0,"Empty apart from enemies. 1 level-appropriate easy Encounter Loot 15%, Clue 15%"],
    [91,"","Medium Encounter",25,25,5,5,0,"Empty apart from enemies. 1 level-appropriate medium Encounter Loot 25%, Clue 25%"],
    [92,"","Medium Encounter",25,25,5,5,0,"Empty apart from enemies. 1 level-appropriate medium Encounter Loot 25%, Clue 25%"],
    [93,"","Hard Encounter",50,50,5,5,0,"Empty apart from enemies. 1 level-appropriate hard Encounter Loot 50%, clue 50%"],
    [94,"","Hard Encounter",50,50,5,5,0,"Empty apart from enemies. 1 level-appropriate hard Encounter Loot 50%, clue 50%"],
    [95,"","",0,0,5,5,100,"Trap! Go straight to Trap Table."],
    [96,"","",0,0,5,5,100,"Trap! Go straight to Trap Table."],
    [97,"","",0,0,5,5,100,"Trap! Go straight to Trap Table."],
    [98,"","",0,0,5,5,100,"Trap! Go straight to Trap Table."],
    [99,"","",0,60,5,5,0,"Loot 60%. Roll DMG individual treasure: Challenge 0-4 table. Add 30 to roll. How did this loot get here?"],
    [100,"","",0,60,5,5,0,"Loot 60%. Roll DMG individual treasure: Challenge 0-4 table. Add 30 to roll. How did this loot get here?"]
  ];
  return passageContentArray;
}

function objectifyPassageContentRow(passageContentRowNum) {

  var passageContentRow = passageContentArray[passageContentRowNum - 1];

  var passageContentDataObject = {
    rollResult: passageContentRow[0],
    description: passageContentRow[1],
    encounter: passageContentRow[2],
    clue: passageContentRow[3],
    loot: passageContentRow[4],
    secretDoor: passageContentRow[5],
    randomFeature: passageContentRow[6],
    trap: passageContentRow[7],
    descriptionFull: passageContentRow[8],
  };

  console.log(JSON.stringify(passageContentDataObject));

  return passageContentDataObject;
}

function rollPassage() {
  var passageLayoutRollResult = rollDice(20);
  var passageLayoutDataObject = objectifyPassageLayoutRow(passageLayoutRollResult);

  var passageContentRollResult = rollDice(100);

  var modifier = document.getElementById("dungeon-content-modifier").value;
  modifier = parseInt(modifier, 10);
  document.getElementById("dungeon-content-modifier").value = "";

  if(modifier > 0) {
    passageContentRollResult += modifier;
    passageContentRollResult = enforceMinMaxValue("maximum", passageContentRollResult, 100);
  }

  var passageContentDataObject = objectifyPassageContentRow(passageContentRollResult)

  let passage = {
    roll: passageLayoutDataObject.rollResult,
    layout: setPassageLayout(passageLayoutDataObject),
    content: setPassageContent(passageContentDataObject)
  }

  console.log(JSON.stringify(passage));

  return passage;
}

function setPassageSize(passageLayoutDataObject) {
  if (passageLayoutDataObject.setSize != 0) {
    return passageLayoutDataObject.setSize;
  }

  var passageSize = rollDice(passageLayoutDataObject.sizeDiceType);
  passageSize = applyModifier(passageSize, passageLayoutDataObject.sizeDiceEarlyModifierType, passageLayoutDataObject.sizeDiceEarlyModifierValue);
  passageSize = applyModifier(passageSize, passageLayoutDataObject.sizeDiceLateModifierType, passageLayoutDataObject.sizeDiceLateModifierValue);
  return passageSize;
}

function setPassageFeature(passageLayoutDataObject) {
  if (passageLayoutDataObject.feature === "") {
    return "";
  }

  isRandomFeatureThere = rollPercentile(passageLayoutDataObject.featureChance)
  if (isRandomFeatureThere) {
    return passageLayoutDataObject.feature
  }
  return "";
}

function setPassageLayout(passageLayoutDataObject) {

  var passageLayoutString = "LAYOUT <br />";

  passageLayoutString += passageLayoutDataObject.layout + " ";
  passageLayoutString += setPassageSize(passageLayoutDataObject);
  passageLayoutString += " " + passageLayoutDataObject.sizeSuffix + ".";
  if (passageLayoutDataObject.layoutExtended != "") {
    passageLayoutString += "<br />" + passageLayoutDataObject.layoutExtended;
  }
  return passageLayoutString;
}

function setPassageContent(passageContentDataObject) {

  var passageContentString = ""

  // Resolve found bits
  var isThereClue = rollPercentile(passageContentDataObject.clue);
  var isThereLoot = rollPercentile(passageContentDataObject.loot);
  var isThereSecretDoor = rollPercentile(passageContentDataObject.secretDoor);
  var isThereRandomFeature = rollPercentile(passageContentDataObject.randomFeature);

  if(passageContentDataObject.encounter != "" || isThereClue || isThereLoot || isThereSecretDoor || isThereRandomFeature) {
    passageContentString += "<br /><br />CONTENTS";
  }
  
  /*
  if(passageContentDataObject.description !== "") {
    passageContentString += "<br />DESCRIPTION: " + passageContentDataObject.description;
  }
  */

  if(passageContentDataObject.encounter != "") {
    passageContentString += "<br />ENEMIES: " + passageContentDataObject.encounter;
  }

  if(isThereClue || isThereLoot || isThereSecretDoor || isThereRandomFeature) {
    var foundString = "<br />FOUND:";
    foundCount = 0;

    if(isThereClue) {
      foundString += " Clue";
      foundCount++;
    }

    if(isThereLoot) {
      if(foundCount > 0) {foundString += ",";}
      foundString += " Loot";
      foundCount++;
    }

    if(isThereSecretDoor) {
      if(foundCount > 0) {foundString += ",";}
      foundString += " Secret Door";
      foundCount++;
    }

    if(isThereRandomFeature) {
      if(foundCount > 0) {foundString += ",";}
      foundString += "  Random Feature";
      foundCount++;
    }
    passageContentString += foundString;
  }
  
  if(passageContentDataObject.trap !== 0) {
    passageContentString += "<br /><br />TRAP<br />" + rollTrap();
  }

  return passageContentString;
}

/*********   PASSAGE END   *********/

/*********   DOOR START *********/

function initializeDoorArray() {
  var doorArray = [
    [1,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [2,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [3,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [4,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [5,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [6,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [7,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [8,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [9,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [10,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [11,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [12,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [13,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [14,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [15,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [16,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [17,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [18,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [19,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [20,"1-20","Wooden door","",0,0,0,0,0,0,1,"Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [21,"21-25","Iron portcullis","Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked",50,14,19,0,0,50,2,"Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [22,"21-25","Iron portcullis","Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked",50,14,19,0,0,50,2,"Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [23,"21-25","Iron portcullis","Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked",50,14,19,0,0,50,2,"Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [24,"21-25","Iron portcullis","Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked",50,14,19,0,0,50,2,"Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [25,"21-25","Iron portcullis","Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked",50,14,19,0,0,50,2,"Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [26,"26-30","Archway","",0,0,0,0,0,40,1,"Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [27,"26-30","Archway","",0,0,0,0,0,40,1,"Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [28,"26-30","Archway","",0,0,0,0,0,40,1,"Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [29,"26-30","Archway","",0,0,0,0,0,40,1,"Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [30,"26-30","Archway","",0,0,0,0,0,40,1,"Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [31,"31-35","Wooden door","",100,15,12,0,0,0,3,"Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [32,"31-35","Wooden door","",100,15,12,0,0,0,3,"Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [33,"31-35","Wooden door","",100,15,12,0,0,0,3,"Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [34,"31-35","Wooden door","",100,15,12,0,0,0,3,"Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [35,"31-35","Wooden door","",100,15,12,0,0,0,3,"Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [36,"36-40","Iron door","",100,14,16,0,0,0,4,"Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [37,"36-40","Iron door","",100,14,16,0,0,0,4,"Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [38,"36-40","Iron door","",100,14,16,0,0,0,4,"Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [39,"36-40","Iron door","",100,14,16,0,0,0,4,"Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [40,"36-40","Iron door","",100,14,16,0,0,0,4,"Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [41,"41-45","Stone door","",100,14,12,0,0,100,1,"Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [42,"41-45","Stone door","",100,15,12,0,0,100,1,"Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [43,"41-45","Stone door","",100,16,16,0,0,100,1,"Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [44,"41-45","Stone door","",100,15,16,0,0,100,1,"Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [45,"41-45","Stone door","",100,16,16,0,0,100,1,"Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [46,"46-50","Secret door","Q/A role to see if PC finds it.",0,0,0,0,0,0,4,"Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [47,"46-50","Secret door","Q/A role to see if PC finds it.",0,0,0,0,0,0,4,"Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [48,"46-50","Secret door","Q/A role to see if PC finds it.",0,0,0,0,0,0,4,"Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [49,"46-50","Secret door","Q/A role to see if PC finds it.",0,0,0,0,0,0,4,"Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [50,"46-50","Secret door","Q/A role to see if PC finds it.",0,0,0,0,0,0,4,"Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [51,"51-55","Archway","",0,0,0,0,0,0,5,"Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [52,"51-55","Archway","",0,0,0,0,0,0,5,"Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [53,"51-55","Archway","",0,0,0,0,0,0,5,"Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [54,"51-55","Archway","",0,0,0,0,0,0,5,"Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [55,"51-55","Archway","",0,0,0,0,0,0,5,"Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [56,"56-60","Stone door","",100,0,0,14,0,0,4,"Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [57,"56-60","Stone door","",100,0,0,14,0,0,4,"Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [58,"56-60","Stone door","",100,0,0,14,0,0,4,"Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [59,"56-60","Stone door","",100,0,0,14,0,0,4,"Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [60,"56-60","Stone door","",100,0,0,14,0,0,4,"Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [61,"61-75","Wooden door","",0,0,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [62,"61-75","Wooden door","",0,0,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [63,"61-75","Wooden door","",100,14,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [64,"61-75","Wooden door","",100,15,0,0,0,100,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [65,"61-75","Wooden door","",100,16,0,0,0,100,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [66,"61-75","Stone door","",0,0,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [67,"61-75","Stone door","",0,0,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [68,"61-75","Stone door","",100,14,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [69,"61-75","Stone door","",100,15,0,0,0,100,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [70,"61-75","Stone door","",100,16,0,0,0,100,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [71,"61-75","Iron door","",0,0,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [72,"61-75","Iron door","",0,0,0,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [73,"61-75","Iron door","",100,14,18,0,0,0,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [74,"61-75","Iron door","",100,15,18,0,0,100,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [75,"61-75","Iron door","",100,16,18,0,0,100,4,"Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [76,"76-80","Wooden door","",0,0,0,0,0,100,4,"Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [77,"76-80","Archway","",0,0,0,0,0,100,4,"Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [78,"76-80","Iron door","",0,0,0,0,0,100,4,"Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [79,"76-80","Stone door","",0,0,0,0,0,100,4,"Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [80,"76-80","Iron portcullis","",0,0,0,0,0,100,4,"Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [81,"81-85","Wooden door","",100,0,0,0,100,0,3,"Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [82,"81-85","Archway","",100,0,0,0,100,0,3,"Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [83,"81-85","Iron door","",100,0,0,0,100,0,3,"Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [84,"81-85","Stone door","",100,0,0,0,100,0,3,"Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [85,"81-85","Iron portcullis","",100,0,0,0,100,0,3,"Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [86,"86-90","Elemental wall","3d8 elemental damage to pass",0,0,0,0,0,0,1,"Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [87,"86-90","Elemental wall","3d8 elemental damage to pass",0,0,0,0,0,0,1,"Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [88,"86-90","Elemental wall","3d8 elemental damage to pass",0,0,0,0,0,0,1,"Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [89,"86-90","Elemental wall","3d8 elemental damage to pass",0,0,0,0,0,0,1,"Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [90,"86-90","Elemental wall","3d8 elemental damage to pass",0,0,0,0,0,0,1,"Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [91,"91-95","Heavy Stone door","",100,0,16,0,0,0,3,"Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [92,"91-95","Heavy Stone door","",100,0,16,0,0,0,3,"Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [93,"91-95","Heavy Stone door","",100,0,16,0,0,0,3,"Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [94,"91-95","Heavy Stone door","",100,0,16,0,0,0,3,"Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [95,"91-95","Heavy Stone door","",100,0,16,0,0,0,3,"Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [96,"96-100","Smashed Wooden Door","",0,0,0,0,0,0,3,"Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [97,"96-100","Smashed Stone door","",0,0,0,0,0,0,3,"Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [98,"96-100","Smashed Iron door","",0,0,0,0,0,0,3,"Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [99,"96-100","Smashed Iron portcullis","",0,0,0,0,0,0,3,"Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [100,"96-100","Shattered Archway","",0,0,0,0,0,0,3,"Door is smashed and hanging off its hinges (why?). Leads into a room."]
  ];
  return doorArray;
}

function objectifyDoorRow(doorRowNum) {
  var doorRow = doorArray[doorRowNum - 1];

  var doorDataObject = {
    rollResult: doorRow[0],
    rollResultRange: doorRow[1],
    description: doorRow[2],
    descriptionExtended: doorRow[3],
    locked: doorRow[4],
    pickLockDC: doorRow[5],
    forceLockDC: doorRow[6],
    puzzleLockDC: doorRow[7],
    requiresKey: doorRow[8],
    trapped: doorRow[9],
    leadsTo: doorRow[10],
    descriptionFull: doorRow[11]
  }
  return doorDataObject;
}

function initializeLeadsToArray() {
  var leadsToArray = [
    [1,4,"Passage","Stairs","Room","Room"],
    [2,4,"Passage","Passage","Room","Room"],
    [3,4,"Room","Room","Room","Room"],
    [4,4,"Passage","Room","Room","Room"],
    [5,4,"Passage","Passage","Passage","Passage"],
    [6,4,"Stairs","Stairs","Stairs","Stairs"],
    [7,4,"Door","Door","Door","Door"],
    [8,4,"Dead End","Dead End","Dead End","Dead End"],
    [9,4,"Dead End","Dead End","Passage","Passage"]
  ];
  return leadsToArray;
}

function objectifyLeadsToRow(leadsToRowNum) {
  var leadsToRow = leadsToArray[leadsToRowNum - 1];

  var leadsToDataObject = {
    type: leadsToRow[0],
    diceType: leadsToRow[1],
    result1: leadsToRow[2],
    result2: leadsToRow[3],
    result3: leadsToRow[4],
    result4: leadsToRow[5]
  }

  return leadsToDataObject;
}

function rollDoor() {
  var doorRollResult = rollDice(100);
  var doorDataObject = objectifyDoorRow(doorRollResult);

  var doorString = "TYPE: " + doorDataObject.description;

  if (doorDataObject.descriptionExtended !== "") {
    doorString += "<br />NOTE: " + doorDataObject.descriptionExtended;
  }

  doorString += "<br />LEADS TO: " + rollLeadsTo(doorDataObject.leadsTo);
  doorString += addDoorLocks(doorDataObject);
  doorString += addDoorTraps(doorDataObject);

  return doorString;
}

function addDoorLocks(doorDataObject) {

  console.log(JSON.stringify(doorDataObject));

  if (doorDataObject.locked === "") {
    return "";
  }

  var isDoorLocked = rollPercentile(doorDataObject.locked);
  if (isDoorLocked === false) {
    return "";
  }

  var doorLockString = "<br /><br />LOCK"

  if(doorDataObject.pickLockDC !== 0) {
    doorLockString += "<br />PICK DC: " + doorDataObject.pickLockDC;
  }

  if(doorDataObject.forceLockDC !== 0) {
    doorLockString += "<br />FORCE DC: " + doorDataObject.forceLockDC;
  }

  if(doorDataObject.puzzleLockDC !== 0) {
    doorLockString += "<br />PUZZLE DC:" + doorDataObject.puzzleLockDC;
  }

  if(doorDataObject.requiresKey !== 0) {
    doorLockString += "<br />Requires a key.";
  }

  return doorLockString;
}

function addDoorTraps(doorDataObject) { 
  var isDoorTrapped = rollPercentile(doorDataObject.trapped);

  if(isDoorTrapped === false) {
    return "";
  }

  var doorTrapString = "<br /><br />TRAP<br />"
  doorTrapString += rollTrap();
  return doorTrapString;
}



/*********   DOOR END *********/

/********* SECRET DOOR START *********/

function initializeSecretDoorArray() {
  var secretDoorArray = [
    [1,0,3,"Add 40","Secret door opens into a room. +40 to Room Contents table roll"],
    [2,0,3,"Add 40","Secret door opens into a room. +40 to Room Contents table roll"],
    [3,0,5,"Add 40","Secret door opens onto passage. Roll passage table, + 40 to Passage Contents roll."],
    [4,0,5,"Add 40","Secret door opens onto passage. Roll passage table, + 40 to Passage Contents roll."],
    [5,100,2,"Add 50","Trapped secret door. Roll on trap table, then on (d4) 1-2: Passage, 3-4: Room. Add 50 to your Passage Contents or Room Contents roll."],
    [6,100,2,"Add 50","Trapped secret door. Roll on trap table, then on (d4) 1-2: Passage, 3-4: Room. Add 50 to your Passage Contents or Room Contents roll."]
  ];
  
  return secretDoorArray;
}

function objectifySecretDoorRow(secretDoorRowNum) {
  var secretDoorRow = secretDoorArray[secretDoorRowNum - 1];

  var secretDoorDataObject = {
    rollResult: secretDoorRow[0],
    trappedChance: secretDoorRow[1],
    leadsTo: secretDoorRow[2],
    leadsToModifier: secretDoorRow[3]
  };
  return secretDoorDataObject
}

function rollSecretDoor() {
  var secretDoorRollResult = rollDice(6);
  var secretDoorDataObject = objectifySecretDoorRow(secretDoorRollResult);

  var secretDoorString = "";
  
  var secretDoorLeadsTo = rollLeadsTo(secretDoorDataObject.leadsTo);

  secretDoorString += "LEADS TO: " + secretDoorLeadsTo;

  secretDoorString += "<br />NOTE: " + secretDoorDataObject.leadsToModifier + " modifier to contents roll";

  if(secretDoorDataObject.trappedChance > 0) {
    secretDoorTrap = rollTrap();
    secretDoorString += "<br /><br />TRAP<br />" + secretDoorTrap;
  }


  return secretDoorString;
}

/********* SECRET DOOR END *********/

/*********   TRAP START *********/

function initializeTrapArray() {
  var trapArray = [
      [1,"1-6","Poison darts",11,10,"(PC level -3) d6 (min 1d6)"],
      [2,"1-6","Poison darts",11,10,"(PC level -3) d6 (min 1d6)"],
      [3,"1-6","Poison darts",11,10,"(PC level -3) d6 (min 1d6)"],
      [4,"1-6","Poison darts",11,10,"(PC level -3) d6 (min 1d6)"],
      [5,"1-6","Poison darts",11,10,"(PC level -3) d6 (min 1d6)"],
      [6,"1-6","Poison darts",11,10,"(PC level -3) d6 (min 1d6)"],
      [7,"7-12","Collapsing Roof",11,10,"(PC level -2) d6 (min 1d6)"],
      [8,"7-12","Collapsing Roof",11,10,"(PC level -2) d6 (min 1d6)"],
      [9,"7-12","Collapsing Roof",11,10,"(PC level -2) d6 (min 1d6)"],
      [10,"7-12","Collapsing Roof",11,10,"(PC level -2) d6 (min 1d6)"],
      [11,"7-12","Collapsing Roof",11,10,"(PC level -2) d6 (min 1d6)"],
      [12,"7-12","Collapsing Roof",11,10,"(PC level -2) d6 (min 1d6)"],
      [13,"13-19","Simple Pit",11,11,"(PC level -1) d6 (min 1d6)"],
      [14,"13-19","Simple Pit",11,11,"(PC level -1) d6 (min 1d6)"],
      [15,"13-19","Simple Pit",11,11,"(PC level -1) d6 (min 1d6)"],
      [16,"13-19","Simple Pit",11,11,"(PC level -1) d6 (min 1d6)"],
      [17,"13-19","Simple Pit",11,11,"(PC level -1) d6 (min 1d6)"],
      [18,"13-19","Simple Pit",11,11,"(PC level -1) d6 (min 1d6)"],
      [19,"13-19","Simple Pit",11,11,"(PC level -1) d6 (min 1d6)"],
      [20,"20-26","Hidden pit",11,12,"(PC level -1) d6 (min 1d6)"],
      [21,"20-26","Hidden pit",11,12,"(PC level -1) d6 (min 1d6)"],
      [22,"20-26","Hidden pit",11,12,"(PC level -1) d6 (min 1d6)"],
      [23,"20-26","Hidden pit",11,12,"(PC level -1) d6 (min 1d6)"],
      [24,"20-26","Hidden pit",11,12,"(PC level -1) d6 (min 1d6)"],
      [25,"20-26","Hidden pit",11,12,"(PC level -1) d6 (min 1d6)"],
      [26,"20-26","Hidden pit",11,12,"(PC level -1) d6 (min 1d6)"],
      [27,"27-32","Locking pit",11,12,"(PC level) d6"],
      [28,"27-32","Locking pit",11,12,"(PC level) d6"],
      [29,"27-32","Locking pit",11,12,"(PC level) d6"],
      [30,"27-32","Locking pit",11,12,"(PC level) d6"],
      [31,"27-32","Locking pit",11,12,"(PC level) d6"],
      [32,"27-32","Locking pit",11,12,"(PC level) d6"],
      [33,"33-38","Spiked pit",12,13,"(PC level) d6"],
      [34,"33-38","Spiked pit",12,13,"(PC level) d6"],
      [35,"33-38","Spiked pit",12,13,"(PC level) d6"],
      [36,"33-38","Spiked pit",12,13,"(PC level) d6"],
      [37,"33-38","Spiked pit",12,13,"(PC level) d6"],
      [38,"33-38","Spiked pit",12,13,"(PC level) d6"],
      [39,"39-44","Rolling sphere",12,14,"(PC level) d6"],
      [40,"39-44","Rolling sphere",12,14,"(PC level) d6"],
      [41,"39-44","Rolling sphere",12,14,"(PC level) d6"],
      [42,"39-44","Rolling sphere",12,14,"(PC level) d6"],
      [43,"39-44","Rolling sphere",12,14,"(PC level) d6"],
      [44,"39-44","Rolling sphere",12,14,"(PC level) d6"],
      [45,"45-50","Scything blade",13,14,"(PC level + 1) d6"],
      [46,"45-50","Scything blade",13,14,"(PC level + 1) d6"],
      [47,"45-50","Scything blade",13,14,"(PC level + 1) d6"],
      [48,"45-50","Scything blade",13,14,"(PC level + 1) d6"],
      [49,"45-50","Scything blade",13,14,"(PC level + 1) d6"],
      [50,"45-50","Scything blade",13,14,"(PC level + 1) d6"],
      [51,"51-56","Spell trap - Firebolt",14,15,"(PC level + 1) d6"],
      [52,"51-56","Spell trap - Lightning",14,15,"(PC level + 1) d6"],
      [53,"51-56","Spell trap - Ray of frost",14,15,"(PC level + 1) d6"],
      [54,"51-56","Spell trap - Eldritch blast",14,15,"(PC level + 1) d6"],
      [55,"51-56","Spell trap - Lightning",14,15,"(PC level + 1) d6"],
      [56,"51-56","Spell trap - Firebolt",14,15,"(PC level + 1) d6"],
      [57,"57-63","Spell trap - Magic missile",14,15,"(PC level + 1) d6"],
      [58,"57-63","Spell trap - Magic missile",14,15,"(PC level + 1) d6"],
      [59,"57-63","Spell trap - Magic missile",14,15,"(PC level + 1) d6"],
      [60,"57-63","Spell trap - Magic missile",14,15,"(PC level + 1) d6"],
      [61,"57-63","Spell trap - Magic missile",14,15,"(PC level + 1) d6"],
      [62,"57-63","Spell trap - Magic missile",14,15,"(PC level + 1) d6"],
      [63,"57-63","Spell trap - Magic missile",14,15,"(PC level + 1) d6"],
      [64,"64-69","Poison gas",15,16,"(PC level + 1) d6"],
      [65,"64-69","Poison gas",15,16,"(PC level + 1) d6"],
      [66,"64-69","Poison gas",15,16,"(PC level + 1) d6"],
      [67,"64-69","Acid Spray",15,16,"(PC level + 1) d6"],
      [68,"64-69","Acid Spray",15,16,"(PC level + 1) d6"],
      [69,"64-69","Acid Spray",15,16,"(PC level + 1) d6"],
      [70,"70-76","Room fills with water",15,16,"(PC level + 2) d6"],
      [71,"70-76","Room fills with water",15,16,"(PC level + 2) d6"],
      [72,"70-76","Room fills with water",15,16,"(PC level + 2) d6"],
      [73,"70-76","Room fills with water",15,16,"(PC level + 2) d6"],
      [74,"70-76","Room fills with water",15,16,"(PC level + 2) d6"],
      [75,"70-76","Room fills with water",15,16,"(PC level + 2) d6"],
      [76,"70-76","Room fills with water",15,16,"(PC level + 2) d6"],
      [77,"77-82","Walls begin closing",16,17,"(PC level + 2) d6"],
      [78,"77-82","Walls begin closing",16,17,"(PC level + 2) d6"],
      [79,"77-82","Walls begin closing",16,17,"(PC level + 2) d6"],
      [80,"77-82","Walls begin closing",16,17,"(PC level + 2) d6"],
      [81,"77-82","Walls begin closing",16,17,"(PC level + 2) d6"],
      [82,"77-82","Walls begin closing",16,17,"(PC level + 2) d6"],
      [83,"83-88","Spears come out of floor",17,18,"(PC level + 2) d6"],
      [84,"83-88","Spears come out of floor",17,18,"(PC level + 2) d6"],
      [85,"83-88","Spears come out of floor",17,18,"(PC level + 2) d6"],
      [86,"83-88","Spears come out of floor",17,18,"(PC level + 2) d6"],
      [87,"83-88","Spears come out of floor",17,18,"(PC level + 2) d6"],
      [88,"83-88","Spears come out of floor",17,18,"(PC level + 2) d6"],
      [89,"89-93","Spiked grate drops",17,19,"(PC level x 1.5 rounded up) d6"],
      [90,"89-93","Spiked grate drops",17,19,"(PC level x 1.5 rounded up) d6"],
      [91,"89-93","Spiked grate drops",17,19,"(PC level x 1.5 rounded up) d6"],
      [92,"89-93","Spiked grate drops",17,19,"(PC level x 1.5 rounded up) d6"],
      [93,"89-93","Spiked grate drops",17,19,"(PC level x 1.5 rounded up) d6"],
      [94,"94-100","Trapdoor - Snake Pit",18,20,"(PC level x 2) d6"],
      [95,"94-100","Trapdoor - Snake Pit",18,20,"(PC level x 2) d6"],
      [96,"94-100","Trapdoor - Snake Pit",18,20,"(PC level x 2) d6"],
      [97,"94-100","Trapdoor - Snake Pit",18,20,"(PC level x 2) d6"],
      [98,"94-100","Trapdoor - Acid Pit",18,20,"(PC level x 2) d6"],
      [99,"94-100","Trapdoor - Acid Pit",18,20,"(PC level x 2) d6"],
      [100,"94-100","Trapdoor - Acid Pit",18,20,"(PC level x 2) d6"]
    ]
    return trapArray;
}

function objectifyTrapRow(trapRowNum) {
  var trapRow = trapArray[trapRowNum - 1];

  var trapDataObject = {
    rollResult: trapRow[0],
    rollResultRange: trapRow[1],
    type: trapRow[2],
    detectDC: trapRow[3],
    saveDC: trapRow[4],
    damage: trapRow[5]
  }
  return trapDataObject;
}

function rollTrap() {
  var trapRollResult = rollDice(100);
  var trapDataObject = objectifyTrapRow(trapRollResult);
  
  var trapString = "TYPE: " + trapDataObject.type;
  trapString += "<br />DETECT DC: " + trapDataObject.detectDC;
  trapString += "<br />SAVE DC: " + trapDataObject.saveDC;
  trapString += "<br />DAMAGE: " + trapDataObject.damage;

  return trapString;
}

/*********   TRAP END *********/

/*********   DUNGEON START *********/

function initializeDungeonSizeArray() {
  var dungeonSizeArray = [
    [1,"1-3","Tiny",1,4,2,"add","rooms","1d4+2 rooms"],
    [2,"1-3","Tiny",1,4,2,"add","rooms","1d4+2 rooms"],
    [3,"1-3","Tiny",1,4,2,"add","rooms","1d4+2 rooms"],
    [4,"4-8","Small",1,6,4,"add","rooms","1d6+4 rooms"],
    [5,"4-8","Small",1,6,4,"add","rooms","1d6+4 rooms"],
    [6,"4-8","Small",1,6,4,"add","rooms","1d6+4 rooms"],
    [7,"4-8","Small",1,6,4,"add","rooms","1d6+4 rooms"],
    [8,"4-8","Small",4,6,4,"add","rooms","1d6+4 rooms"],
    [9,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [10,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [11,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [12,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [13,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [14,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [15,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [16,"9-16","Medium",4,4,6,"add","rooms","4d4+6 rooms"],
    [17,"17-18","Large",5,6,12,"add","rooms","5d6+12 rooms"],
    [18,"17-18","Large",5,6,12,"add","rooms","5d6+12 rooms"],
    [19,"19","Huge",10,6,24,"add","rooms","10d6+24 rooms"],
    [20,"20","Limitless until Boss is found",0,0,0,"","","Until Boss is found"]
  ]
  return dungeonSizeArray;
}

function objectifyDungeonSizeRow(dungeonSizeRowNum) {
  var dungeonSizeRow = dungeonSizeArray[dungeonSizeRowNum -1];

  var dungeonSizeDataObject = {
    rollResult: dungeonSizeRow[0],
    rollResultRange: dungeonSizeRow[1],
    description: dungeonSizeRow[2],
    rollsNumber: dungeonSizeRow[3],
    diceType: dungeonSizeRow[4],
    rollModifierValue: dungeonSizeRow[5],
    rollModifierType: dungeonSizeRow[6],
    suffix: dungeonSizeRow[7],
    text: dungeonSizeRow[8]
  }

  return dungeonSizeDataObject;
}

function rollDungeonSize() {
  var dungeonSizeRollResult = rollDice(20);
  var dungeonSizeDataObject = objectifyDungeonSizeRow(dungeonSizeRollResult);

  if(dungeonSizeDataObject.description === "Limitless until Boss is found") {
    let dungeonSize = {
      sizeLabel: dungeonSizeDataObject.description,
      rooms: "Unlimited",
    }
    
    return dungeonSize;
  }
  
  var dungeonSizeRoomCount = 0;

  for (let index = 0; index < dungeonSizeDataObject.rollsNumber; index++) {
    dungeonSizeRoomCount += rollDice(dungeonSizeDataObject.diceType);
  }

  dungeonSizeRoomCount = applyModifier(dungeonSizeRoomCount, dungeonSizeDataObject.rollModifierType, dungeonSizeDataObject.rollModifierValue);

  let dungeonSize = {
    sizeLabel: dungeonSizeDataObject.description,
    rooms: dungeonSizeRoomCount,
  }

  return dungeonSize;
}

function initializeDungeonTypeArray() {
  var dungeonTypeArray = [
    [1,"Lair"],
    [2,"Tomb / Crypt"],
    [3,"Abandoned stronghold"],
    [4,"Temple or shrine"],
    [5,"Natural caves"],
    [6,"Maze"],
    [7,"Mine"],
    [8,"Planar Gate"],
    [9,"Guild / cult headquarters"],
    [10,"Death Trap"]
  ]
  return dungeonTypeArray;
}

function objectifyDungeonTypeRow(dungeonTypeRowNum) {
  var dungeonTypeRow = dungeonTypeArray[dungeonTypeRowNum-1];
  
  var dungeonTypeDataObject = {
    rollResult: dungeonTypeRow[0],
    type: dungeonTypeRow[1]
  }

  return dungeonTypeDataObject;
}

function rollDungeonType() {
  var dungeonTypeRollResult = rollDice(10);
  var dungeonTypeDataObject = objectifyDungeonTypeRow(dungeonTypeRollResult);

  return dungeonTypeDataObject.type;
}

function initializeDungeonStartArray() {
  var dungeonStartArray = [
    [1,"Passage"],
    [2,"Room"],
    [3,"Door"],
    [4,"Stairs"]
  ];
  return dungeonStartArray;
}

function objectifyDungeonStartRow(dungeonStartRow) {
  var dungeonStartRow = dungeonStartArray[dungeonStartRow - 1];

  var dungeonStartDataObject = {
    rollResult: dungeonStartRow[0],
    area: dungeonStartRow[1]
  }

  return dungeonStartDataObject;
}

function rollDungeonStart() {
  var dungeonStartRollResult = rollDice(4);
  var dungeonStartDataObject = objectifyDungeonStartRow(dungeonStartRollResult);
  return dungeonStartDataObject.area;
}

function rollDungeon() {

  var dungeonSize = rollDungeonSize();

  let dungeon = {
    type: rollDungeonType(),
    size: dungeonSize.sizeLabel,
    rooms: dungeonSize.rooms,
    start: rollDungeonStart()
  }

  dungeonString = "Type: " + dungeon.type;
  dungeonString += "<br />Size: " + dungeon.size;
  dungeonString += "<br />Rooms: " + dungeon.rooms;
  dungeonString += "<br />Start Area: " + dungeon.start;
  return dungeonString;
}

/*********   DUNGEON END *********/

/*********   STAIR START *********/

function initializeStairArray() {
  var stairArray = [
    [1,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [2,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [3,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [4,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [5,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [6,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [7,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [8,"1-8","Down",1,2,"","Down one level to a (d4) 1-2: Room, 3-4: Passage."],
    [9,"9","Down",1,3,"Add 15 to Room Contents roll","Down one level to a room, add 15 to Room Contents roll"],
    [10,"10","Down",1,3,"Add 30 to Room Contents roll","Down one level to a room, add 30 to Room Contents roll"],
    [11,"11","Down",1,5,"","Down one level to a passage"],
    [12,"12","Down",1,5,"Add 15 to Passage Contents roll","Down one level to a passage, add 15 to Passage Contents roll"],
    [13,"13","Down",1,5,"Add 30 to Passage Contents roll","Down one level to a passage, add 30 to Passage Contents roll"],
    [14,"14","Down",2,2,"","Down two levels to a (d4) 1-2: Passage, 3-4: Room"],
    [15,"15","Up",1,3,"Add 15 to Room Contents roll","Up one level to a room, add 15 to your Room Contents roll"],
    [16,"16","Up",1,3,"Add 30 to Room Contents roll","Up one level to a room, add 30 to your Room Contents roll"],
    [17,"17","Up",1,5,"","Up one level to a passage"],
    [18,"18","Up",1,5,"Add 15 to Passage Contents roll","Up one level to a passage, add 15 to Passage Contents roll"],
    [19,"19","Up",1,5,"Add 30 to Passage Contents roll","Up one level to a passage, add 30 to Passage Contents roll"],
    [20,"20","Up",2,2,"","Up two levels to a (d4) 1-2: Passage, 3-4: Room"]
  ];

  return stairArray;
}

function objectifyStairRow(stairRowNum) {
  var stairRow = stairArray[stairRowNum-1];
  var stairDataObject = {
    rollResult: stairRow[0],
    rollResultRange: stairRow[1],
    direction: stairRow[2],
    levels: stairRow[3],
    leadsTo: stairRow[4],
    note: stairRow[5],
    text: stairRow[6]
  }
  return stairDataObject;
}

function rollStair() {
  var stairRollResult = rollDice(20);
  var stairDataObject = objectifyStairRow(stairRollResult);

  var stairString = "";
  stairString += "DIRECTION: " + stairDataObject.direction;
  stairString += "<br />LEVELS: " + stairDataObject.levels;
  stairString += "<br />LEADS TO: " + rollLeadsTo(stairDataObject.leadsTo);
/*
  stairString = "Stair goes " + stairDataObject.direction + " " + stairDataObject.levels + " levels";
  stairString += "<br />" + rollLeadsTo(stairDataObject.leadsTo);
  */
  if(stairDataObject.note !=="") {
    stairString += "<br />NOTE: " + stairDataObject.note;
  }

  return stairString;
}

/*********   STAIR END *********/

/*********   OBSTACLE START *********/

function initializeObstacleArray() {
  var obstacleArray = [
    [1,"1","Antilife aura","Radius of 1d10 × 10 ft.","",1,1,10,"multiply",10,"radius",0,0,"none",0,"","While in the aura, living creatures can’t regain hit points"],
    [2,"2","Battering winds","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Reduce speed by half, impose disadvantage on ranged attack rolls"],
    [3,"3","Blade barrier blocks passage","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","3d8 piercing damage to pass"],
    [4,"4–8","Cave-in","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Passage blocked"],
    [5,"4–8","Cave-in","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Passage blocked"],
    [6,"4–8","Cave-in","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Passage blocked"],
    [7,"4–8","Cave-in","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Passage blocked"],
    [8,"4–8","Cave-in","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Passage blocked"],
    [9,"9–12","Chasm","1d4 × 10 ft. wide and 2d6 × 10 ft. deep,","",2,1,10,"multiply",10,"wide",2,10,"multiply",10,"deep","Possibly connected to other levels of the dungeon"],
    [10,"9–12","Chasm","1d4 × 10 ft. wide and 2d6 × 10 ft. deep,","",2,1,10,"multiply",10,"wide",2,10,"multiply",10,"deep","Possibly connected to other levels of the dungeon"],
    [11,"9–12","Chasm","1d4 × 10 ft. wide and 2d6 × 10 ft. deep,","",2,1,10,"multiply",10,"wide",2,10,"multiply",10,"deep","Possibly connected to other levels of the dungeon"],
    [12,"9–12","Chasm","1d4 × 10 ft. wide and 2d6 × 10 ft. deep,","",2,1,10,"multiply",10,"wide",2,10,"multiply",10,"deep","Possibly connected to other levels of the dungeon"],
    [13,"13–14","Flooding","2d10 ft. of water in the area","",1,1,10,"none",0,"of water in the area",2,10,"multiply",10,"deep","Create nearby upward-sloping passages, raised floors, or rising stairs to contain the water"],
    [14,"13–14","Flooding","2d10 ft. of water in the area","",1,1,10,"none",0,"of water in the area",0,0,"none",0,"","Create nearby upward-sloping passages, raised floors, or rising stairs to contain the water"],
    [15,"15","Lava","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","50% chance of stone bridge crossing it"],
    [16,"16","Overgrown mushrooms","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Must be hacked down to proceed. 25% chance of a mold or fungus dungeon hazard hidden among them."],
    [17,"17","Poisonous gas","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Deals 1d6 poison damage per minute of exposure"],
    [18,"18","Reverse gravity","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","Effect causes creatures to fall toward the ceiling"],
    [19,"19","Wall of fire blocks passage","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","3d8 elemental damage to pass"],
    [20,"20","Wall of force blocks passage","Immediate area","Immediate area",0,0,0,"none",0,"",0,0,"none",0,"","3d8 elemental damage to pass"]
  ];
  return obstacleArray;
};

function objectifyObstacleRow(obstacleRowNum) {
  var obstacleRow = obstacleArray[obstacleRowNum - 1];
  var obstacleDataObject = {
    rollResult: obstacleRow[0],
    rollResultRange: obstacleRow[1],
    type: obstacleRow[2],
    sizeText: obstacleRow[3],
    sizeSuffix: obstacleRow[4],
    sizeDiceRollsNumber: obstacleRow[5],
    sizeDice1Rolls: obstacleRow[6],
    sizeDice1Type: obstacleRow[7],
    sizeDice1modifierType: obstacleRow[8],
    sizeDice1modifierValue: obstacleRow[9],
    sizeDice1Suffix: obstacleRow[10],
    sizeDice2Rolls: obstacleRow[11],
    sizeDice2Type: obstacleRow[12],
    sizeDice2modifierType: obstacleRow[13],
    sizeDice2modifierValue: obstacleRow[14],
    sizeDice2Suffix: obstacleRow[15],
    notes: obstacleRow[16]
  }
  console.log(JSON.stringify(obstacleDataObject));
  return obstacleDataObject;
}

function rollObstacle() {
  var obstacleRollResult = rollDice(20);
  var obstacleDataObject = objectifyObstacleRow(obstacleRollResult);

  var obstacleString = "TYPE: " + obstacleDataObject.type;

  if(obstacleDataObject.sizeDiceRollsNumber == 0) {
    obstacleString += "<br />SIZE: Affects " + obstacleDataObject.sizeText;
    obstacleString += "<br />NOTE: " + obstacleDataObject.notes;
    return obstacleString;
  }

  var obstacleAffectedAreaNum1 = 0;

  for(let index = 0; index < obstacleDataObject.sizeDice1Rolls; index++) {
    obstacleAffectedAreaNum1 += rollDice(obstacleDataObject.sizeDice1Type);
  }
  obstacleAffectedAreaNum1 = applyModifier(obstacleAffectedAreaNum1, obstacleDataObject.sizeDice1modifierType, obstacleDataObject.sizeDice1modifierValue);
  obstacleString += "<br />SIZE: " + obstacleAffectedAreaNum1 + " ft"
  obstacleString += " " + obstacleDataObject.sizeDice1Suffix;
  
  if(obstacleDataObject.sizeDiceRollsNumber == 2) {
    var obstacleAffectedAreaNum2 = 0;

    for(let index = 0; index < obstacleDataObject.sizeDice2Rolls; index++) {
      obstacleAffectedAreaNum2 += rollDice(obstacleDataObject.sizeDice1Type);
    }

    obstacleAffectedAreaNum2 = applyModifier(obstacleAffectedAreaNum2, obstacleDataObject.sizeDice2modifierType, obstacleDataObject.sizeDice2modifierValue);
    obstacleString += " x " + obstacleAffectedAreaNum2 + " ft";
    obstacleString += " " + obstacleDataObject.sizeDice2Suffix;
  }

  obstacleString += "<br />NOTE: " + obstacleDataObject.notes;

  return obstacleString;
}

/*********   OBSTACLE END *********/

/******* CLUE START ***********/

function initializeClueArray() {
  var clueArray = [
    [1,"A broken arrow of a distinctive type."],
    [2,"The monster’s / NPCs weapon has dried blood on it. But what type?"],
    [3,"The carcass or area has a strange odour."],
    [4,"There is a strange noise coming from somewhere in this area."],
    [5,"You see tracks leading off from this area."],
    [6,"1d10 platinum pieces in an ornately embroidered pouch. The embroidery mentions someone’s name."],
    [7,"Magical compass, player has to figure out the command word to activate it."],
    [8,"The corpse is gripping an envelope. The wax sealed with an unknown sigil."],
    [9,"You see fresh blood stains splattered on the wall. One part is still trickling down as you enter the room."],
    [10,"The body is covered in map symbols"],
    [11,"The body is covered in runic tattoos."],
    [12,"The body is contorted, showing evidence of reconstructive surgery to head and chest cavity, with attachments & implants below the skin"],
    [13,"The body is branded with a number, directly behind the neck"],
    [14,"The body has a significant number of healed wounds, suggesting ongoing punishment and whipping"],
    [15,"An old wooden toy-horse, that you were used to play with as a child and that you forgot until now"],
    [16,"You hear loud Ravens/Crows nonstop cawing nearby."],
    [17,"You find a pendant with a missing piece."],
    [18,"You find sacks of bloody corn and wheat."],
    [19,"You notice a bright flash of purplish light just out of the corner of your eye"],
    [20,"The room/corpse is covered in a thin layer of frost."],
    [21,"A note with only the name of the nearby town written in it."],
    [22,"Stones patterned in a directional arrow with the words about me under it."],
    [23,"Part of a map"],
    [24,"Broken weapon with runes on it"],
    [25,"A holy symbol"],
    [26,"An adventurer’s backpack containing a journal, with entries that stop abruptly."],
    [27,"A rope hanging from above. It appears to have been crudely hacked at the bottom end."],
    [28,"Graffiti on the wall. “Beware the Great Hall!”"],
    [29,"In the floor is a hole, and beside it a spade. It appears as if someone started digging and then gave up. Or..."],
    [30,"A bear or man trap sitting in a pool of blood. Perhaps a severed limb nearby."],
    [31,"Tracks, only they are made out in flour."],
    [32,"A broken lantern"],
    [33,"An empty coffin, the lid broken"],
    [34,"Lying on the floor, a glass chess piece."],
    [35,"Broken blade of a sword"],
    [36,"Singing, distant and mournful."],
    [37,"Whispering, from somewhere in the room, disembodied. It stops and starts again, unnervingly."],
    [38,"A pile of carefully stacked stones is situated in the middle of this area"],
    [39,"Loud thumping from either above or below the current area you are in"],
    [40,"You notice a loose brick in the wall. Peering behind it, you find a hidden scroll. What is written on it? (Q/A or situations table)"],
    [41,"A hole has been bashed through the wall into an adjoining chamber. This chamber doesn’t appear to have any other way in or out."],
    [42,"A pack and its contents strewn across the ground. (Suggests live or dead NPC somewhere in the dungeon)"],
    [43,"There is rubble here, but it has been swept to the walls in neat piles by someone, obviously using a broom."],
    [44,"You hear whispering right behind you, but when you turn, no one is there."],
    [45,"A severed hand covered in stitches lies on the floor"],
    [46,"A book of hand-sketched images of various humanoids, some of them with large red crosses through them."],
    [47,"A body is here, and has been savaged, as if by a wild animal."],
    [48,"A shield lies on the ground in two pieces. Whatever ripped through this obviously possesses great strength"],
    [49,"A platinum piece, glued to the floor."],
    [50,"A small ray of light shines through a crack in the ceiling"],
    [51,"A trail of blood, as if a body were being dragged, leads away. It stops suddenly."],
    [52,"A long list of names, all of them crossed out except for the last 5-10. Close to the end is the PCs name."],
    [53,"A detailed colour map of the local area, marked with several previously unknown ruins."],
    [54,"A chill wind, as if someone opened a door onto an arctic tundra, blows through this area briefly"],
    [55,"You hear the sound of metal being dragged across stone. It continues for a while and then stops."],
    [56,"Suddenly you realize your footfalls have become completely silent"],
    [57,"Ball bearings or caltrops litter the floor in this area."],
    [58,"Geometric shapes drawn in chalk on the floor"],
    [59,"The floor is covered by a rug. A close inspection will reveal some spots of a dark liquid, possibly blood..."],
    [60,"A map of a labyrinth neatly made on a piece of parchment."],
    [61,"A letter of recommendation from a noble no-one has heard of."],
    [62,"The remains of an adventurer lie slumped against the wall. In his hand he holds a vial or a note."],
    [63,"Hurried footsteps, coming from somewhere up ahead."],
    [64,"A small beast (cockroach?) sits in an alcove. As you pass, it speaks to you!"],
    [65,"Bucket of entrails from an unknown creature"],
    [66,"Target practice dummy is nearby"],
    [67,"The sound of glass smashing comes from somewhere, echoing off the walls."],
    [68,"A fine dagger with a retracting blade. Who did it belong to?"],
    [69,"A piece of shell that looks like it came from a large egg"],
    [70,"The wall has been carved away, and a large standing stone has been placed in the newly formed alcove. It is covered in strange writing."],
    [71,"A large roast meal is laid out on a table, complete with place settings. It is steaming hot and looks delicious, but it totally untouched."],
    [72,"Goblin graffiti on the walls"],
    [73,"A large collection of animal bones, organized into a pile."],
    [74,"A cauldron sits in the corner."],
    [75,"A hand… it looks severed, but the odd thing is that its made of stone."],
    [76,"You find a stone jar containing teeth of all descriptions."],
    [77,"An adventurer’s journal. Reading through, you see the entries stop suddenly"],
    [78,"A table and single chair is in the corner. The table is spattered with large globs of wax."],
    [79,"An empty net on the ground, torn to shreds."],
    [80,"A stack of clay tablets, all with indecipherable runes"],
    [81,"A lute, but the neck has been smashed from the body and is dangling by the strings."],
    [82,"The shrunken head of a kobold"],
    [83,"Book containing a history of the world - not of this world though."],
    [84,"A well, in the middle of the dungeon. A rope hangs down from its top."],
    [85,"You step on a stone and hear a click..."],
    [86,"A clanking sound, followed by a hissing sound, from somewhere below..."],
    [87,"A jar of pickled eyes."],
    [88,"There is a campfire circle containing a prepared fire, but it has not been lit."],
    [89,"Hammered to a nearby door or affixed to the wall is a piece of framed parchment - completely blank."],
    [90,"An empty brandy bottle."],
    [91,"A six-sided dice that is all ones."],
    [92,"A halfling’s skull, intact except for a perfect circle removed at the top."],
    [93,"A large assortment of clay pots in alcoves, all containing noxious-smelling liquids."],
    [94,"A weapons rack is on the wall, containing several ancient, rusted weapons. A few of these might be able to be restored if taken to an expert."],
    [95,"A steady flow of moisture down a nearby wall leads you to think you might be below a body of water."],
    [96,"The sound of children’s laughter, echoing from every direction"],
    [97,"A bag of feathers. A successful nature check (DC 12) reveals them to be from a harpy."],
    [98,"You find a parchment containing what looks like a recipe for a particular kind of potion."],
    [99,"A pouch of spell components"],
    [100,"Magic item! Relevant to quest. Roll once on a magic item table (d4) 1-2: A, 3-4: B"]
  ];
  return clueArray;
}

function objectifyClueRow(clueRowNum) {
  var clueRow = clueArray[clueRowNum - 1];
  var clueDataObject = {
    rollResult: clueRow[0],
    text: clueRow[1]
  };
  return clueDataObject;
}

function rollClue() {
  var clueRollResult = rollDice(100);
  var clueDataObject = objectifyClueRow(clueRollResult);
  return clueDataObject.text;
}

/******* CLUE END ***********/


/******* QUEST START ***********/

function initializeQuestTypeArray() {
  var questTypeArray = [
    [1,"Unjust killing","Revenge"],
    [2,"Unjust killing","Revenge"],
    [3,"Unjust killing","Revenge"],
    [4,"Unjust killing","Revenge"],
    [5,"Crime committed, criminal disappeared","Apprehend / Bounty Hunt"],
    [6,"Crime committed, criminal disappeared","Apprehend / Bounty Hunt"],
    [7,"Crime committed, criminal disappeared","Apprehend / Bounty Hunt"],
    [8,"Crime committed, criminal disappeared","Apprehend / Bounty Hunt"],
    [9,"Item lost","Retrieval"],
    [10,"Item lost","Retrieval"],
    [11,"Item lost","Retrieval"],
    [12,"Item lost","Retrieval"],
    [13,"Tyrant(s) threaten town / business / population (monster / humanoid)","Repel / Sabotage / Deceive / Sabotage / Extort / Entrap"],
    [14,"Tyrant(s) threaten town / business / population (monster / humanoid)","Repel / Sabotage / Deceive / Sabotage / Extort / Entrap"],
    [15,"Tyrant(s) threaten town / business / population (monster / humanoid)","Repel / Sabotage / Deceive / Sabotage / Extort / Entrap"],
    [16,"Tyrant(s) threaten town / business / population (monster / humanoid)","Repel / Sabotage / Deceive / Sabotage / Extort / Entrap"],
    [17,"Environmental disturbance / Strange Weather / Infestation / Plague","Investigate / Solve"],
    [18,"Environmental disturbance / Strange Weather / Infestation / Plague","Investigate / Solve"],
    [19,"Environmental disturbance / Strange Weather / Infestation / Plague","Investigate / Solve"],
    [20,"Environmental disturbance / Strange Weather / Infestation / Plague","Investigate / Solve"],
    [21,"Magical chaos / Curse","Investigate / Lift curse / destroy magic"],
    [22,"Magical chaos / Curse","Investigate / Lift curse / destroy magic"],
    [23,"Magical chaos / Curse","Investigate / Lift curse / destroy magic"],
    [24,"Magical chaos / Curse","Investigate / Lift curse / destroy magic"],
    [25,"Kidnapping / Hostage situation","Rescue / Recover"],
    [26,"Kidnapping / Hostage situation","Rescue / Recover"],
    [27,"Kidnapping / Hostage situation","Rescue / Recover"],
    [28,"Kidnapping / Hostage situation","Rescue / Recover"],
    [29,"Adventurer left some time ago, but is lost","Rescue"],
    [30,"Adventurer left some time ago, but is lost","Rescue"],
    [31,"Adventurer left some time ago, but is lost","Rescue"],
    [32,"Adventurer left some time ago, but is lost","Rescue"],
    [33,"Something is rumoured, but undiscovered (Artefact, legendary place)","Explore / Discover"],
    [34,"Something is rumoured, but undiscovered (Artefact, legendary place)","Explore / Discover"],
    [35,"Something is rumoured, but undiscovered (Artefact, legendary place)","Explore / Discover"],
    [36,"Something is rumoured, but undiscovered (Artefact, legendary place)","Explore / Discover"],
    [37,"Riches rumoured within secure, guarded place","Loot"],
    [38,"Riches rumoured within secure, guarded place","Loot"],
    [39,"Riches rumoured within secure, guarded place","Loot"],
    [40,"Riches rumoured within secure, guarded place","Loot"],
    [41,"Invasion","Repel / Divert"],
    [42,"Invasion","Repel / Divert"],
    [43,"Invasion","Repel / Divert"],
    [44,"Invasion","Repel / Divert"],
    [45,"Person suspected of something","Spy / Gather information"],
    [46,"Person suspected of something","Spy / Gather information"],
    [47,"Person suspected of something","Spy / Gather information"],
    [48,"Person suspected of something","Spy / Gather information"],
    [49,"Important item / message / person needs transporting","Transport / smuggle / escort"],
    [50,"Important item / message / person needs transporting","Transport / smuggle / escort"],
    [51,"Important item / message / person needs transporting","Transport / smuggle / escort"],
    [52,"Important item / message / person needs transporting","Transport / smuggle / escort"],
    [53,"Nefarious / dangerous item being transported","Waylay / Hijack"],
    [54,"Nefarious / dangerous item being transported","Waylay / Hijack"],
    [55,"Nefarious / dangerous item being transported","Waylay / Hijack"],
    [56,"Nefarious / dangerous item being transported","Waylay / Hijack"],
    [57,"Dangerous item exposed / up for grabs","Find / Destroy"],
    [58,"Dangerous item exposed / up for grabs","Find / Destroy"],
    [59,"Dangerous item exposed / up for grabs","Find / Destroy"],
    [60,"Dangerous item exposed / up for grabs","Find / Destroy"],
    [61,"Corrupt noble","Investigate / Implicate / Incriminate / Expose"],
    [62,"Corrupt noble","Investigate / Implicate / Incriminate / Expose"],
    [63,"Corrupt noble","Investigate / Implicate / Incriminate / Expose"],
    [64,"Corrupt noble","Investigate / Implicate / Incriminate / Expose"],
    [65,"Commodity shortage (goods, workforce)","Transport supplies"],
    [66,"Commodity shortage (goods, workforce)","Transport supplies"],
    [67,"Commodity shortage (goods, workforce)","Transport supplies"],
    [68,"Commodity shortage (goods, workforce)","Transport supplies"],
    [69,"Mystery unresolved","Research / Explore / Decode"],
    [70,"Mystery unresolved","Research / Explore / Decode"],
    [71,"Mystery unresolved","Research / Explore / Decode"],
    [72,"Mystery unresolved","Research / Explore / Decode"],
    [73,"Adventurer thrown into life-threatening situation (environmental or otherwise)","Survive"],
    [74,"Adventurer thrown into life-threatening situation (environmental or otherwise)","Survive"],
    [75,"Adventurer thrown into life-threatening situation (environmental or otherwise)","Survive"],
    [76,"Adventurer thrown into life-threatening situation (environmental or otherwise)","Survive"],
    [77,"Worthy creature’s life threatened (humanoid / animal / monster)","Protect, eliminate threat"],
    [78,"Worthy creature’s life threatened (humanoid / animal / monster)","Protect, eliminate threat"],
    [79,"Worthy creature’s life threatened (humanoid / animal / monster)","Protect, eliminate threat"],
    [80,"Worthy creature’s life threatened (humanoid / animal / monster)","Protect, eliminate threat"],
    [81,"Execution of innocent party planned","Prevent"],
    [82,"Execution of innocent party planned","Prevent"],
    [83,"Execution of innocent party planned","Prevent"],
    [84,"Execution of innocent party planned","Prevent"],
    [85,"Siege (anything from a small party of goblins surrounding a farmhouse to an army of Imperial Blades surrounding a city!)","Break"],
    [86,"Siege (anything from a small party of goblins surrounding a farmhouse to an army of Imperial Blades surrounding a city!)","Break"],
    [87,"Siege (anything from a small party of goblins surrounding a farmhouse to an army of Imperial Blades surrounding a city!)","Break"],
    [88,"Siege (anything from a small party of goblins surrounding a farmhouse to an army of Imperial Blades surrounding a city!)","Break"],
    [89,"Huge battle about to erupt","Negotiate / Prepare / Mediate / Participate"],
    [90,"Huge battle about to erupt","Negotiate / Prepare / Mediate / Participate"],
    [91,"Huge battle about to erupt","Negotiate / Prepare / Mediate / Participate"],
    [92,"Huge battle about to erupt","Negotiate / Prepare / Mediate / Participate"],
    [93,"Spiritually beneficial place rumoured","Visit / Gain boon"],
    [94,"Spiritually beneficial place rumoured","Visit / Gain boon"],
    [95,"Spiritually beneficial place rumoured","Visit / Gain boon"],
    [96,"Spiritually beneficial place rumoured","Visit / Gain boon"],
    [97,"Foolish individual committed innocent blunder","PC hired to conceal evidence / Return item / Placate"],
    [98,"Foolish individual committed innocent blunder","PC hired to conceal evidence / Return item / Placate"],
    [99,"Foolish individual committed innocent blunder","PC hired to conceal evidence / Return item / Placate"],
    [100,"Foolish individual committed innocent blunder","PC hired to conceal evidence / Return item / Placate"]
  ];
  return questTypeArray;
};

function objectifyQuestTypeRow(questTypeRowNum) {
  var questTypeRow = questTypeArray[questTypeRowNum - 1];
  var questTypeDataObject = {
    rollResult: questTypeRow[0],
    problem: questTypeRow[1],
    objective: questTypeRow[2]
  };
  return questTypeDataObject;
}

function rollQuestType() {
  var questTypeRollResult = rollDice(100);
  var questTypeDataObject = objectifyQuestTypeRow(questTypeRollResult);
  return questTypeDataObject;
}

function initializeQuestSourceArray() {
  var questSourceArray = [
    [1,"Notice board"],
    [2,"Notice board"],
    [3,"Notice board"],
    [4,"NPC"],
    [5,"NPC"],
    [6,"NPC"],
    [7,"Tavern rumour"],
    [8,"Tavern rumour"],
    [9,"Tavern rumour"],
    [10,"Stumble into situation"],
    [11,"Stumble into situation"],
    [12,"Stumble into situation"],
    [13,"Stumble into situation"],
    [14,"Guild affiliate"],
    [15,"Guild affiliate"],
    [16,"Guild affiliate"],
    [17,"Fellow adventurer"],
    [18,"Fellow adventurer"],
    [19,"Fellow adventurer"],
    [20,"Mysterious scroll with info on it"],
    [21,"Mysterious scroll with info on it"],
    [22,"Mysterious scroll with info on it"],
    [23,"Hidden piece of paper inside a basic reward / purchase a PC makes"],
    [24,"Hidden piece of paper inside a basic reward / purchase a PC makes"],
    [25,"Hidden piece of paper inside a basic reward / purchase a PC makes"],
    [26,"Treasure map"],
    [27,"Treasure map"],
    [28,"Treasure map"],
    [29,"Found journal - Owner missing"],
    [30,"Found journal - Owner missing"],
    [31,"Found journal - Owner missing"],
    [32,"Partial map"],
    [33,"Partial map"],
    [34,"Partial map"],
    [35,"Inheritance - be it a place, an item, or a title."],
    [36,"Inheritance - be it a place, an item, or a title."],
    [37,"Inheritance - be it a place, an item, or a title."],
    [38,"Geas or Quest Spell"],
    [39,"Geas or Quest Spell"],
    [40,"Geas or Quest Spell"],
    [41,"Unholy visions"],
    [42,"Unholy visions"],
    [43,"Unholy visions"],
    [44,"A lost map or letter found"],
    [45,"A lost map or letter found"],
    [46,"A lost map or letter found"],
    [47,"Sent on mission by friend or relative"],
    [48,"Sent on mission by friend or relative"],
    [49,"Sent on mission by friend or relative"],
    [50,"A dream"],
    [51,"A dream"],
    [52,"A dream"],
    [53,"Local temple gives you the quest"],
    [54,"Local temple gives you the quest"],
    [55,"Local temple gives you the quest"],
    [56,"Rumour picked up at guard station"],
    [57,"Rumour picked up at guard station"],
    [58,"Rumour picked up at guard station"],
    [59,"Merchant’s Guild / merchants"],
    [60,"Merchant’s Guild / merchants"],
    [61,"Merchant’s Guild / merchants"],
    [62,"Noble family entrusts you"],
    [63,"Noble family entrusts you"],
    [64,"Noble family entrusts you"],
    [65,"Event sparks a memory"],
    [66,"Event sparks a memory"],
    [67,"Event sparks a memory"],
    [68,"Divine inspiration"],
    [69,"Divine inspiration"],
    [70,"Divine inspiration"],
    [71,"Overheard conversation"],
    [72,"Overheard conversation"],
    [73,"Overheard conversation"],
    [74,"Passing traveller"],
    [75,"Passing traveller"],
    [76,"Passing traveller"],
    [77,"Entrusted with delivering a parcel. Something compels you to peek inside!"],
    [78,"Entrusted with delivering a parcel. Something compels you to peek inside!"],
    [79,"Entrusted with delivering a parcel. Something compels you to peek inside!"],
    [80,"Herald makes proclamation in market square"],
    [81,"Herald makes proclamation in market square"],
    [82,"Herald makes proclamation in market square"],
    [83,"Herald makes proclamation in market square"],
    [84,"Orders from higher command, guild or society (from afar perhaps)"],
    [85,"Orders from higher command, guild or society (from afar perhaps)"],
    [86,"Orders from higher command, guild or society (from afar perhaps)"],
    [87,"Orders from higher command, guild or society (from afar perhaps)"],
    [88,"Note on dead creature"],
    [89,"Note on dead creature"],
    [90,"Note on dead creature"],
    [91,"You awake with a map tattooed on you!"],
    [92,"You awake with a map tattooed on you!"],
    [93,"You awake with a map tattooed on you!"],
    [94,"Natural disaster reveals something"],
    [95,"Natural disaster reveals something"],
    [96,"Natural disaster reveals something"],
    [97,"Natural disaster reveals something"],
    [98,"A friend has died as a result of this situation, you must avenge!"],
    [99,"A friend has died as a result of this situation, you must avenge!"],
    [100,"A friend has died as a result of this situation, you must avenge!"]
  ];
  return questSourceArray;
}

function objectifyQuestSourceRow(questSourceRowNum) {
  var questSourceRow = questSourceArray[questSourceRowNum - 1];
  var questSourceDataObject = {
    rollResult: questSourceRow[0],
    source: questSourceRow[1]
  };
  return questSourceDataObject;
}

function rollQuestSource() {
  var questSourceRollResult = rollDice(100);
  var questSourceDataObject = objectifyQuestSourceRow(questSourceRollResult);
  return questSourceDataObject;
}

function rollQuest() {
  var questType = rollQuestType();
  var questSource = rollQuestSource();

  var result = "PROBLEM: " + questType.problem;
  result += "<br />OBJECTIVE: " + questType.objective;
  result += "<br />SOURCE: " + questSource.source;
  result += "<br /><br />Ask the Oracle to clear up the What, Why, When, Where, How and Who of your quest.";
  result += "<br />If still unsure, use a Portent to provide inspiration.";
  return result;
}

/******* QUEST END ***********/

/****** ORACLE START *********/

function rollMuneQuestion() {
  var answer = "";
  var rollResult = rollDice(6);
  var interventionPoints = 0;
  
  if(rollResult == 6) {
    interventionPoints++;
  }

  var muneModifier = document.getElementById("mune-question-modifier").value;

  if(muneModifier !== "") {
    var modifierRollResult = rollDice(6);

    if(modifierRollResult == 6) {
      interventionPoints++;
    }

    if(muneModifier === "Likely") {
      rollResult = Math.max(rollResult, modifierRollResult)
    }
    else {
      rollResult = Math.min(rollResult, modifierRollResult)
    }
    document.getElementById("mune-question-modifier").value = "";
  }

  switch(rollResult) {
    case 1:
      answer = "No, and...";
      break;
    case 2:
      answer = "No";
      break;
    case 3:
      answer = "No, but...";
      break;
    case 4:
      answer = "Yes, but...";
      break;
    case 5:
      answer = "Yes";
      break;
    case 6:
      answer = "Yes, and..."
      break;
  }

  if(interventionPoints == 1) {
    answer += "<br /><br />Add 1 Intervention Point";
  }

  if(interventionPoints == 2) {
    answer += "<br /><br />Add 2 Intervention Points";
  }

  return answer;
}

function rollMuneIntervention() {
  var interventionType = "";
  var rollResult = rollDice(6);
  
  switch(rollResult) {
    case 1:
      interventionType = "New entity";
      interventionType += "<br /><br />A new entity appears. Maybe this introduction is beneficial to you, maybe not. The specifics can be gleaned from asking the oracle, with some potential help from a Portent.";
      break;
    case 2:
      interventionType = "Entity positive";
      interventionType += "<br /><br />Something bad happens to an entity. The specifics of which can be determined by asking the Oracle with some optional help from a Portent.";
      break;
    case 3:
      interventionType = "Entity negative";
      interventionType += "<br /><br />Something bad happens to an entity. The specifics of which can be determined by asking the Oracle with some optional help from a Portent.";
      break;
    case 4:
      interventionType = "Advance plot";
      interventionType += "<br /><br />Advancing a plot pushes an unresolved hook in a certain direction. A plot advancement should always see the adventure progress and does so by helping a certain goal or plot point.";
      break;
    case 5:
      interventionType = "Regress plot";
      interventionType += "<br /><br />Regressing a plot pushes an unresolved hook in a certain direction. A plot regression should always see the adventure progress and does so by hindering a certain goal or plot point.";
      break;
    case 6:
      interventionType = "Wild";
      interventionType += "<br /><br />Wild Interventions simulate the completely unexpected. It can be good, bad, neutral, or downright crazy. This allows for sudden twists of fate, such as a dragon swooping down to attack the village and allowing the slaves to escape in the ensuing chaos.<br /><br />Because a wild Intervention is so vague in what it can represent, you kinda have to use a Portent to figure out what the heck it actually means."
      break;
  }

  return interventionType;
}

function rollMuneTwene() {
  var result = "";
  var rollResult = rollDice(10);
  
  switch(rollResult) {
    case 1:
      result = "Increase simple element";
      break;
    case 2:
      result = "Decrease simple element";
      break;
    case 3:
      result = "Add simple element";
      break;
    case 4:
      result = "Remove simple element";
      break;
    case 5:
      result = "Increase major element";
      break;
    case 6:
      result = "Decrease major element";
      break;
    case 7:
      result = "Add major element";
      break;
    case 8:
      result = "Remove major element";
      break;
    case 9:
      result = "Wild positive";
      break;
    case 10:
      result = "Wild negative";
      break;
  }

  return result;
}

function rollSATQuestion() {
  var answer = "";
  var rollResult = rollDice(20);

  var questionModifier = document.getElementById("sat-question-modifier").value;
  document.getElementById("sat-question-modifier").value = "0";

  questionModifier = parseInt(questionModifier, 10);
  rollResult += questionModifier; 
  
  rollResult = enforceMinMaxValue("minimum", rollResult, 1);
  rollResult = enforceMinMaxValue("maximum", rollResult, 20);
  
  switch(rollResult) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        answer = "No";
        break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        answer = "Maybe";
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        answer = "Yes";
      break;
    case 20:
        answer = "Yes";
		answer += " add 1 Intervention Point";
		break;
    default:
	  answer = rollResult + " " + "ERROR GENERATING ANSWER. PLEASE ADVISE DEV";
  }

  return answer;
}

/****** ORACLE END *********/


/******* ENCOUNTER START ***********/

function initializeUrbanEncounterArray() {
  var encounterUrbanArray = [
    [1,"You witness a crime and they have a chance to stop the criminal. If you do, you win the favor of the local constabulary. If you try to but fail, the guard gives you an opportunity to about track down the criminal. If you do nothing, you must convince the guard you are not an accomplice."],
    [2,"Stampede of pigs"],
    [3,"A cry rings out through the town. “An army is massing outside the gates!” Are they human, orc, mind flayer? You had better go and find out, or flee right now!"],
    [4,"A mysterious hooded beggar conspicuously ducks into an alley as they walk by - they appeared to have a disfigurement. Perhaps they were just trying to hide from people."],
    [5,"A guided tour proceeds past, as the guide drops a particularly tasty snippet of local knowledge which the PC was unaware of."],
    [6,"A shady figure beckons from an alley. They have wondrous items for sale, they say."],
    [7,"Two old ladies, witches of some sort by the look of them, beg you to take a creature off their hands. (Roll Creature Table, Chapter 14). “It never shuts up!” they tell you. “Please, we’ll pay you! We just want to be rid of the damnded thing!” The creature is the trapped soul of a former adventurer..."],
    [8,"Two men are arguing about something. One turns to a PC and says, "],
    [9,"Quest board with rewards for deeds done. Someone has rats in their cellar, missing townsperson in the woods neaby, simple things (or complex!) that give you little things to do that keep you exploring the city, making contacts, and earning gold/interesting items. Use Chapter 14 tables or Q/A rolls to generate."],
    [10,"A card shark/con artist is busking in the street, a large crowd gathers."],
    [11,"Two local thugs are strong arming a merchant for gold. You can about the merchant, but doing so annoys the local gang. Variation: The merchant is a thief, and the thugs are trying to recover their stolen money."],
    [12,"You notice a group of villagers attempting to put out a nearby house fire. This looks like it could easily spread to neighbouring houses, possibly affecting the whole town."],
    [13,"A peddler attempts to sell you a trinket or minor magic item."],
    [14,"A giant rat crawls out of a storm drain and gets into a fight with a dog."],
    [15,"Minor earthquake shakes things up and in the ensuing panic looters take advantage. Does the party join them, or stop them?"],
    [16,"Merchant asking for about stopping local children with slingshots."],
    [17,"A young urchin is in an ally, cornered by either thugs or stray dogs."],
    [18,"Street is having a block party tomorrow and need about setting up."],
    [19,"Someone sentenced to death: You happen across the hanging/beheading scene before it concludes, what do you do?"],
    [20,"Monster: Level appropriate easy encounter."],
    [21,"Monster: Level appropriate easy encounter."],
    [22,"Monster: Level appropriate easy encounter."],
    [23,"Monster: Level appropriate easy encounter."],
    [24,"Monster: Level appropriate easy encounter."],
    [25,"Monster: Level appropriate easy encounter."],
    [26,"A con man is selling jewels and rare components that you might need."],
    [27,"A chamber pot is emptied from above. Make a DC 13 dex save to avoid. If unsuccessful, you disadvantage all charisma and stealth related rolls until you have a bath and change clothes. (Optional: make a con save vs filth fever)."],
    [28,"A scrap of paper is pressed into your hand by a young man, who looks at you desperately before turning and running away. You turn over the note and read it. “Please about, he’s coming for us all!”"],
    [29,"A member of the local guard asks you what your business is in town."],
    [30,"“Stop, thief!” You feel your arms being grabbed. The local guard apprehend you,accusing you of stealing jewels belonging to a noble/royal. Searching your clothes, and/or bag, they successfully turn up the jewels in question. You, however, have never seen them before."],
    [31,"A lady / young man on a balcony blows you a kiss and then runs away."],
    [32,"A beggar crouches in a dark corner, clearly diseased."],
    [33,"Someone mistakes you for a mercenary, famous performer, or an old friend. They have face blindness. 2% of the population have it."],
    [34,"A bard strikes up a song and starts following you around."],
    [35,"A beggar notices the group and offers to guide them around in exchange for coin."],
    [36,"Bar fight bursts out into the street and may involve the PC."],
    [37,"Propositioned. Person of the night propositions a player. But they may not be all they seem..."],
    [38,"A drunkard sees you and mistakes them for friends or enemies or perhaps throws up on you."],
    [39,"A person who claims to be a fan of the PC begins to follow them around"],
    [40,"Snake Oil Salesman has gathered a crowd, and has actors in the group to fool people into buying worthless potions. Bonus: they're not worthless, but definitely not as advertised. A healing potion that's really gaseous form? Make Q/A rolls to determine results."],
    [41,"Group of smugglers coming out of a sewer grate with a crate of goods."],
    [42,"An old female fortune teller beckons to you from her tent."],
    [43,"A man tumbles out a tavern window. He’s fully dressed in nobleman’s garb. A female half-orc jumps out after him, letting out a warcry as he gets up and runs for his life screaming for about. Do you about her and run him down or do you get in her way? Possible: No matter who you about they both begin attacking you!"],
    [44,"A street dog runs past with a human hand in its mouth - wearing a large, very obvious jeweled ring. Dog chase or find out what happened to the owner of the ring (and hand)."],
    [45,"Someone's horse is spooked and charges through the streets. whether it’s dragging a wagon or just a rider, it is panicked and needs to be stopped."],
    [46,"You find a map, discarded, on the street, or just a fragment of one, which arouses your curiosity. It shows a ruin, and there is a sketch of an artifact. Magical? Perhaps a local mage could about you decode this..."],
    [47,"A drunk just wakes up nearby. “Wha… where am I?! My… my weapons! My belongings! They’re gone!”"],
    [48,"You stop to listen to a talented storyteller relate a story about a famous adventurer and his beast companion. Part of the story is unresolved, however, and gets you thinking..."],
    [49,"You feel a thwack in the side of your head, and turn to see that a bunch of drunk young nobles are pelting passers by with rotten vegetables, laughing as they do so!"],
    [50,"Monster: Level appropriate medium encounter."],
    [51,"Monster: Level appropriate medium encounter."],
    [52,"Monster: Level appropriate medium encounter."],
    [53,"Monster: Level appropriate medium encounter."],
    [54,"Monster: Level appropriate medium encounter."],
    [55,"Monster: Level appropriate medium encounter."],
    [56,"Your sharp eye spots a pickpocket deftly relieve a noblewoman of an expensive necklace."],
    [57,"A wizard is carrying a bagful of potions when suddenly the bag rips (perhaps it catches on a nail sticking out of a building, or it catches on a passing cart) and several potions drop out and smash on the ground, exploding with various dramatic effects."],
    [58,"A jeweller emerges from his shop, screaming that he’s been robbed by dwarves. A nearby dwarf asks him for proof, but all he has to say is, “Of course it’s dwarves, they lust after gems constantly!”"],
    [59,"A female priest is castigating a businesswoman who has set up her wares before the temple (of Lathander, perhaps? Any good-aligned god). Except this business is no ordinary business - a female slaver is parading her wares, selling slaves to whoever’s buying."],
    [60,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics / dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use oracle questions or portents to find out what."],
    [61,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics / dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use oracle questions or portents to find out what."],
    [62,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics / dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use oracle questions or portents to find out what."],
    [63,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. use oracle questions or portents to found out what."],
    [64,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. use oracle questions or portents to found out what."],
    [65,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. use oracle questions or portents to found out what."],
    [66,"NPC met, who gives PC information about possible quest. Generate quest. (Optional)"],
    [67,"NPC met, who gives PC information about possible quest. Generate quest. (Optional)"],
    [68,"NPC met, who gives PC information about possible quest. Generate quest. (Optional)"],
    [69,"NPC met, who gives PC information about possible quest. Generate quest. (Optional)"],
    [70,"Monster: Level-appropriate hard encounter. Monster on the loose, marauding through the streets."],
    [71,"Monster: Level-appropriate hard encounter. Monster on the loose, marauding through the streets."],
    [72,"Monster: Level-appropriate hard encounter. Monster on the loose, marauding through the streets."],
    [73,"Monster: Level-appropriate hard encounter. Monster on the loose, marauding through the streets."],
    [74,"Monster: Level-appropriate hard encounter. Monster on the loose, marauding through the streets."],
    [75,"Monster: Level-appropriate hard encounter. Monster on the loose, marauding through the streets."],
    [76,"You are stopped by the local guard who want to congratulate you on your recent successful quest. How do they know?"],
    [77,"the rumour goes, something is going on in the sacred catacombs beneath the PC hears a rumour about a job that a local priest might have. Apparently, or so streets."],
    [78,"You pass a house which is all boarded up, the gates locked. A passerby informs you that this is the house of a local nobleman who hasn’t been seen in years."],
    [79,"You see a dice game going on in an alley off the street you are walking down."],
    [80,"A cleric stands atop a box on the roadside, spouting vitriol and nasty rumours about the town’s leader or leaders. The cleric has attracted quite a crowd."],
    [81,"A group of protestors has set up outside the Town Hall, protesting the new road which is planned to run right through the middle of their settlement, some distance out of town."],
    [82,"A merchant asks you to mind his cart for him while he chases a thief who has stolen merchandise from it. He then leaves, and doesn’t return for a very long time..."],
    [83,"A street urchin appears, promising divine favour if the PC comes and volunteers an hour of service at a nearby temple."],
    [84,"A shopkeeper is attacking a wasp nest outside of his shop with a broom. He dislodges it and it crashes to the ground, engulfing him in a Swarm of Insects!"],
    [85,"Two half-orcs are engaged in a full-on brawl outside a nearby tavern. Apparently one thinks the other cheated at dice."],
    [86,"Religious pilgrims making their way quietly through the streets are being mocked and jeered by a group of elven teenagers"],
    [87," A tattered cloak blows up the street. Catching hold of it, you find a note in one of its pockets."],
    [88,"Someone has released a hallucinogenic substance into the air, and people are in various states of intoxication."],
    [89,"A distraught mother cannot find her child and is convinced it has been kidnapped. She is moving from person to person, begging for about."],
    [90,"A sudden gust of wind whips through the town, sending stalls toppling over, hats flying, stacks of parchment fluttering down the street. Perhaps the PC discovers something as a result."],
    [91,"A dwarf, armed with greataxe, is threatening a cowering halfling, who is shaking with fear. The dwarf is living with rage, but has just been disarmed by the town guard. What’s the situation here? Has the halfling wronged him in some way?"],
    [92,"An overturned cart ahead is causing gridlock - the street is jammed with traffic."],
    [93,"“Ay oop luv, looking for a good time?” A prostitute (any sex or race) begins soliciting you earnestly."],
    [94,"Suddenly, out of the blue, you see a mage of some sort simply appear in the middle of the street/alley."],
    [95,"NPC appears with quest"],
    [96,"NPC appears with quest"],
    [97,"NPC appears with quest"],
    [98,"NPC appears with quest"],
    [99,"NPC appears with quest"],
    [100,"Monster: Level appropriate deadly encounter."]
  ];
  return encounterUrbanArray;
};

function objectifyEncounterUrbanRow(encounterUrbanRowNum) {
  
  console.log(JSON.stringify(encounterUrbanRow));
  
  var encounterUrbanRow = encounterUrbanArray[encounterUrbanRowNum - 1];

  var encounterUrbanDataObject = {
    rollResult: encounterUrbanRow[0],
    text: encounterUrbanRow[1]
  };
  return encounterUrbanDataObject;
}

function rollEncounterUrban() {
  var encounterUrbanRollResult = rollDice(100);
  var encounterUrbanDataObject = objectifyEncounterUrbanRow(encounterUrbanRollResult);
  var encounterUrbanString = encounterUrbanDataObject.text;
  return encounterUrbanString;
}

function initializeEncounterWildernessArray() {
  var encounterWildernessArray = [
    [1,"Small dungeon or crypt found. Purpose and history unknown."],
    [2,"Small dungeon or crypt found. Purpose and history unknown."],
    [3,"Small dungeon or crypt found. Purpose and history unknown."],
    [4,"Small dungeon or crypt found. Purpose and history unknown."],
    [5,"Ready-made camp found, or cosy cave, that could potentially be used as shelter for the night, or a base while exploring. Inhabited?"],
    [6,"A small creek, babbling pleasantly. Or a large crack, bubbling pungently."],
    [7,"A storm on the horizon, lightning dancing underneath dark grey clouds."],
    [8,"A sinkhole has opened up nearby."],
    [9,"Abandoned, empty town."],
    [10,"Abandoned, empty town."],
    [11,"NPC met, who gives PC information about possible quest. Generate a quest."],
    [12,"NPC met, who gives PC information about possible quest. Generate a quest."],
    [13,"NPC met, who gives PC information about possible quest. Generate a quest."],
    [14,"NPC met, who gives PC information about possible quest. Generate a quest."],
    [15,"NPC met, who gives PC information about possible quest. Generate a quest."],
    [16,"Abandoned campsite found. Use Q/A rolls to find out more."],
    [17,"A tree with what looks like Druid markings."],
    [18,"You find survivors of some sort of attack, and they have a tale to tell..."],
    [19,"Plundered barrow / burial mound. But did they get everything? And what still waits there? (50% mostly empty)"],
    [20,"On the road, a dropped item. A backpack, a purse with interesting contents / a hat with a note\ntucked inside / an engraved ring… could be anything. Use Q/A roll to with a note tucked inside / an engraved ring… could be anything. Use Q/A roll to find out details."],
    [21,"Interesting traveller. This character has obviously seen some things..."],
    [22,"Cemetery. Some of the graves have been looted, and most of the tombstones are so old that the names have worn off."],
    [23,"Prisoner(s) being escorted in a heavily-armoured cart."],
    [24,"Interesting geological feature. Use Q/A mechanic to find out what."],
    [25,"You find a discarded backpack with some intriguing contents."],
    [26,"An odd noise is coming from some distance ahead..."],
    [27,"Strange lights in the nearby hills are attracting your attention."],
    [28,"You stumble across an orchard, filled with ripe and delicious fruit. The owner is nowhere in sight."],
    [29,"Bounty hunters, searching for a fugitive. “You seen anyone?” (Who they are working for is unclear)"],
    [30,"Sudden and abrupt change in weather"],
    [31,"Abandoned mine, dwarven or otherwise."],
    [32,"You hear howling in the distance. It could be wolves, but the sound is strange somehow..."],
    [33,"Debris from a recent, large battle. Who fought here, and who won? How recent was this?"],
    [34,"Humanoid corpse. 25% you find a clue"],
    [35,"A bird (or some other creature – roll Creature Table Chapter 14) begins talking to you, in fluent Common! And not just mindless parroting..."],
    [36,"A royal/noble personage and their entourage passes in an opulent carriage."],
    [37,"A flock of birds (vultures? ravens?) circles over a point somewhere overhead"],
    [38,"You find an old, ruined monument. Is it to a god, a famous local figure, or something else?"],
    [39,"A traveller with information/warning about a situation in the next settlement."],
    [40,"Unmarked settlement: town/village/hamlet. Human?"],
    [41,"You reach a bridge over a small river. The bridge is washed out. Travellers are waiting here, unsure what to do."],
    [42,"You find an injured beast"],
    [43,"A farmer invites you into his house for a meal, and possibly some of his home brew ale/mead as well"],
    [44,"Overturned/broken-down cart. Is it attended?"],
    [45,"Monster ambush. Level-appropriate easy encounter. Go to Chapter 16."],
    [46,"Monster ambush. Level-appropriate easy encounter."],
    [47,"Monster ambush. Level-appropriate easy encounter."],
    [48,"Monster ambush. Level-appropriate easy encounter."],
    [49,"Monster ambush. Level-appropriate easy encounter."],
    [50,"Monster ambush. Level-appropriate easy encounter."],
    [51,"An animal wanders across your path. It glances up at you but doesn’t seem particularly bothered by your presence."],
    [52,"Trapped creature (humanoid? monster? What type of trap?)"],
    [53,"An abandoned/ruined structure of some kind, which may or may not have a subterranean component."],
    [54,"An abandoned/ruined structure of some kind, which may or may not have a subterranean component."],
    [55,"An abandoned/ruined structure of some kind, which may or may not have a subterranean component."],
    [56,"An old hermit. What’s he babbling about?"],
    [57,"A creepy and unsettling token/sign."],
    [58,"Traveling merchant"],
    [59,"A traveling adventurer who is impressed and wants to join your party."],
    [60,"Monster Encounter: Level-appropriate medium encounter."],
    [61,"Monster Encounter: Level-appropriate medium encounter."],
    [62,"Monster Encounter: Level-appropriate medium encounter."],
    [63,"Monster Encounter: Level-appropriate medium encounter."],
    [64,"Monster Encounter: Level-appropriate medium encounter."],
    [65,"Monster Encounter: Level-appropriate medium encounter."],
    [66,"A traveller, resting by the side of the road, begins pointing and laughing uproariously at you. Is she mad?"],
    [67,"Heavily-guarded transport passes."],
    [68,"Travelling sage/archivist"],
    [69,"Bandits (human or otherwise) demand a toll from you."],
    [70,"Monster: Level appropriate hard encounter."],
    [71,"Monster: Level appropriate hard encounter."],
    [72,"Monster: Level appropriate hard encounter."],
    [73,"Monster: Level appropriate hard encounter."],
    [74,"Monster: Level appropriate hard encounter."],
    [75,"Monster: Level appropriate hard encounter."],
    [76,"A starving family begging for food or gold"],
    [77,"A tribe who owns the land demands a tribute from you for passage (and in return will escort you through – whether you like it or not)."],
    [78,"A travelling troupe of performers (80% Friendly)"],
    [79,"A travelling merchant, but his wares are not the ordinary. Indeed, much of it is illegal in some way. Is he a smuggler? A drug dealer? A heist thief?"],
    [80,"Hunters/travellers/adventurers. Camped up and relaxing."],
    [81,"You see a low rocky hill, where faces have been carved into the rocks, along with the shapes of various beasts. It is artfully done, and seems to tell some sort of story."],
    [82,"You see a track leading away from the road and into the forest/hills. Who knows where it leads..."],
    [83,"Bandits waylay you and demand all your money"],
    [84,"On a lonely stretch of road, you see a lone cabin, but cannot tell if it is inhabited or not."],
    [85,"A long-forgotten battlefield. How many died here?"],
    [86,"A tower, visible off the road some distance."],
    [87,"Patrol from the nearest settlement"],
    [88,"Unmarked settlement"],
    [89,"The road disappears and the place looks nothing like on the map."],
    [90,"NPC appears with quest."],
    [91,"NPC appears with quest."],
    [92,"NPC appears with quest."],
    [93,"NPC appears with quest."],
    [94,"NPC appears with quest."],
    [95,"Monster! Level-appropriate encounter. 1-3: Hard, 4: Deadly."],
    [96,"Monster! Level-appropriate encounter. 1-3: Hard, 4: Deadly."],
    [97,"Monster! Level-appropriate encounter. 1-3: Hard, 4: Deadly."],
    [98,"Monster! Level-appropriate encounter. 1-3: Hard, 4: Deadly."],
    [99,"Monster! Level-appropriate encounter. 1-3: Hard, 4: Deadly."],
    [100,"Monster! Level-appropriate encounter. 1-3: Hard, 4: Deadly."]
  ];
  return encounterWildernessArray;
}

function objectifyEncounterWildernessRow(encounterWildernessRowNum) {
  var encounterWildernessRow = encounterWildernessArray[encounterWildernessRowNum - 1];
  var encounterWildernessDataObject = {
    rollResult: encounterWildernessRow[0],
    text: encounterWildernessRow[1]
  };
  console.log(JSON.stringify(encounterWildernessDataObject));
  return encounterWildernessDataObject;
}

function rollEncounterWilderness() {
  var encounterWildernessRollResult = rollDice(100);
  var encounterWildernessDataObject = objectifyEncounterWildernessRow(encounterWildernessRollResult);
  var encounterWildernessString = encounterWildernessDataObject.text;
  return encounterWildernessString;
}

function initializeDungeonEncounterArray() {
  var encounterDungeonArray = [
    [1,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics /dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use Q/A rolls or Story Element Interaction tables (chapter 14) to find out what."],
    [2,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics /dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use Q/A rolls or Story Element Interaction tables (chapter 14) to find out what."],
    [3,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics /dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use Q/A rolls or Story Element Interaction tables (chapter 14) to find out what."],
    [4,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics /dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use Q/A rolls or Story Element Interaction tables (chapter 14) to find out what."],
    [5,"Something occurs, or you find something, that requires a (roll d10) 1: acrobatics /dex check or save, 2: strength or athletics check, 3: stealth check, 4: con check or save, 5: int check, 6: investigation check, 7: arcana check, 8: history check, 9: nature check, 10: religion check. Use Q/A rolls or Story Element Interaction tables (chapter 14) to find out what."],
    [6,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. Use Q/A rolls or Story Element Interaction Tables (chapter 14) to find out what."],
    [7,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. Use Q/A rolls or Story Element Interaction Tables (chapter 14) to find out what."],
    [8,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. Use Q/A rolls or Story Element Interaction Tables (chapter 14) to find out what."],
    [9,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. Use Q/A rolls or Story Element Interaction Tables (chapter 14) to find out what."],
    [10,"Something occurs, or you find something, that requires a (roll d10), 1: animal handling check, 2: insight check, 3: survival check, 4: medicine check 5: perception check, 6: persuasion check, 7: performance check, 8: deception check, 9: inimidation check, 10: charisma check. Use Q/A rolls or Story Element Interaction Tables (chapter 14) to find out what."],
    [11,"NPC gives you information about possible quest. Go to Chapter 7 and generate a quest, which you may or may not accept. (Generate NPC as well – Chapter 13)."],
    [12,"NPC gives you information about possible quest. Go to Chapter 7 and generate a quest, which you may or may not accept. (Generate NPC as well – Chapter 13)."],
    [13,"NPC gives you information about possible quest. Go to Chapter 7 and generate a quest, which you may or may not accept. (Generate NPC as well – Chapter 13)."],
    [14,"NPC gives you information about possible quest. Go to Chapter 7 and generate a quest, which you may or may not accept. (Generate NPC as well – Chapter 13)."],
    [15,"NPC gives you information about possible quest. Go to Chapter 7 and generate a quest, which you may or may not accept. (Generate NPC as well – Chapter 13)."],
    [16,"Monster: Level-appropriate easy encounter."],
    [17,"Monster: Level-appropriate easy encounter."],
    [18,"Monster: Level-appropriate easy encounter."],
    [19,"Monster: Level-appropriate easy encounter."],
    [20,"Monster: Level-appropriate easy encounter."],
    [21,"Monster: Level-appropriate medium encounter."],
    [22,"Monster: Level-appropriate medium encounter."],
    [23,"Monster: Level-appropriate medium encounter."],
    [24,"Monster: Level-appropriate medium encounter."],
    [25,"Monster: Level-appropriate medium encounter."],
    [26,"Monster: Level appropriate hard encounter."],
    [27,"Monster: Level appropriate hard encounter."],
    [28,"Monster: Level appropriate hard encounter."],
    [29,"Monster: Level appropriate hard encounter."],
    [30,"Monster: Level appropriate hard encounter."],
    [31,"Level appropriate deadly encounter. Your PC might want to flee!"],
    [32,"Level appropriate deadly encounter. Your PC might want to flee!"],
    [33,"Level appropriate deadly encounter. Your PC might want to flee!"],
    [34,"Level appropriate deadly encounter. Your PC might want to flee!"],
    [35,"Level appropriate deadly encounter. Your PC might want to flee!"],
    [36,"Dead beast or monster carcass. What happened here?"],
    [37,"You find a strange growth in this area, on the dungeon walls. Is it a moss of some kind?"],
    [38,"Part of the floor has crumbled away, revealing a black, empty space below."],
    [39,"A door covered in moss, with a large knocker. Looks like it’s been transplanted here from someone’s garden."],
    [40,"You enter a tomblike area. All of the coffins are child-sized."],
    [41,"Strange vines have grown all through here, creeping around the stonework and gradually, over time, destroying parts of the masonry. How did they get in here?"],
    [42,"You see a statue of a wizard in the middle of this area. The plaque beneath reads “I am Fennishaw Eldsight. Speak my name and bring me to life, if you dare!”"],
    [43,"You hear voices ahead, and turn the corner to see a barbarian parleying with an ogre! Apparently they are discussing what the ogre’s price is for releasing the half-orc he is currently holding hostage."],
    [44,"A voice repeatedly whispers, “What do you seek?” No matter how you respond, it repeats the same question. (Perhaps until you give the true answer, at which point, you may get what you seek, but not as you expected!) Who does this voice belong to, if anyone?"],
    [45,"The ceiling above you opens, and an unexpected NPC falls through screaming, hitting the ground in front of you! Roll NPC Tables to find out who it is."],
    [46,"This area is home to a mining operation. Enslaved humanoid children are toiling away, loading rocks into mine carts for ore processing. Their masters whip and force them to continue on, despite their obvious fatigue."],
    [47,"A middle-aged woman is slumped against the wall, sobbing. She is dressed in rags."],
    [48,"From nowhere, you hear a booming voice: “Take up your weapon, adventurer! You dare to trespass here, now you will face me in battle!” But no one appears. At least not yet… You hear laughing..."],
    [49,"Suddenly a vision flickers before you, a vision of your ultimate goal in this dungeon. You do not recognize the room, but get some prior information about what you might be headed towards."],
    [50,"TRAP! Roll on Traps table to find out what."],
    [51,"TRAP! Roll on Traps table to find out what."],
    [52,"TRAP! Roll on Traps table to find out what."],
    [53,"TRAP! Roll on Traps table to find out what."],
    [54,"TRAP! Roll on Traps table to find out what."],
    [55,"TRAP! Roll on Traps table to find out what."],
    [56,"Graffiti on the wall: “Stop! Bridge out ahead! Go back, your doom is at hand!”"],
    [57,"Nearby, you hear a dog barking madly, then another voice telling it to shut up!"],
    [58,"You hear screaming, very faint, as if from far, far away."],
    [59,"You round the next corner and see two humanoids engaged in a heated quarrel."],
    [60,"Make a perception check, DC 14. If unsuccessful, you suddenly notice your pack is lighter. Randomly choose one item from your inventory (perhaps figure out a way to randomly roll for it). It has been stolen! You might get it back, but then again..."],
    [61,"You come to a door on which a parchment is nailed. “Dungeon caretaker. Enquiries/complaints within.”"],
    [62,"Suddenly the wall behind you explodes, and two adventurers enter through it. One is a goliath who has just punched his way through the masonry, the other appears to be a halfling sorcerer."],
    [63,"Ahead, two orc guards sit at a guard post. They appear to be playing dice."],
    [64,"A giant rat runs past you, closely followed by three hungry-looking goblins. They pay you no attention."],
    [65,"As you move through this area, make a perception check, DC 15. If you fail, you do not see a glyph on the wall and trigger an alarm spell! What comes to check?"],
    [66,"In a corner, a huge pile of rubbish festers. It is being picked through by some horrid beast or other."],
    [67,"You get the distinct impression that you are being followed. You even fancy you can smell whoever it is, and they smell rank."],
    [68,"You happen upon a massacre. The corpses of a dozen humanoids lie scattered."],
    [69,"A mist swirls about your feet."],
    [70,"You feel a hard shove in your back. When you turn to look, is anyone there?"],
    [71,"Roll perception, DC 14. If successful you notice something in your periphery. A stone in the wall shuts with a scrape. Investigation roll, DC 12, to find the mechanism to open it. Beyond is a (d4) 1-2: passage, 3-4: room, containing an encounter (d4) 1: Easy, 2: Medium, 3: Hard, 4: No encounter. Clue 75%, Individual Loot 50%."],
    [72,"An old timer, clearly mad, is perched on a soapbox to the side of this passage, ranting about the current state of political affairs to an audience of one slightly amused boggart."],
    [73,"As you round the next corner, you catch sight of a lone humanoid. Make a stealth check, DC 14. If successful, you stay hidden and watch as they move a stone in the wall, place something behind it, then replace the stone. Then they depart."],
    [74,"You come across a proper dungeon - a locked room with bars, in which you see several ragged-looking prisoners. “Quick, break us out!” one of them exclaims when he sees you."],
    [75,"You come across an ornate door, attended by a spectral figure dressed in opulent clothes. The thing is non-hostile, and manning this door, like a doorman. Roll a d4. On a 1: He praises you and your obvious prowess as an adventurer. He seems to know a lot. The spectral doorman admits opens the door for you. On a 2: He begins insulting you, pointing out how awful your clothes are, how ugly you are, how terrible you smell! Make a wisdom check, DC 15. If you succeed, he congratulates you on your poise in the face of abuse and lets you through the door. On 3-4: He begins debating with you as to why you shouldn’t be admitted through the door. Make an intelligence check or a persuasion check, DC 14. If successful, you win the debate and he lets you through the door. The spectral doorkeeper cannot be attacked or moved. And the door only opens for him. (40% boss encounter)."],
    [76,"A kindly little goblin appears with hat in hand, and begs your help in ridding him of a problem. He has just returned from a trip to the nearest town to find that his home has been taken over! Two levels down, his humble little abode that he shares with his wife and two little goblings, has been invaded by a horrible (insert level appropriate hard encounter here). If he could get your assistance in getting rid of this scourge, he will reward you with all his profits from his recent sales trip - 250 gp! And his wife will cook you a delicious pot of Tunnelslug Stew, finest in the dungeon, they say!"],
    [77,"You run into some rival adventurers, who happen to be there following the same leads as you. Will you team up with these NPCs? (Use NPC tables to determine who they are, skipping Profession and going straight to Class Tables)."],
    [78,"You take one more step and… boom! You are in an utterly unfamiliar part of the dungeon. Abandon the map you have so far. You have stepped through a portal, and now are not even sure you are in the same dungeon, realm, or world! Where have you been transported?"],
    [79,"You find a secret entrance to an opulent room, lined with bookshelves. A fire crackles in the hearth, and richly-patterned rugs and furniture decorate this cosy space. Who lives here?"],
    [80,"You find small circular openings in the walls. Each contains a scroll. Withdrawing them, you see that they bear writing from some ancient civilization. These could be of great worth to an archaeologist, but first you will need to get them translated. What secrets do they hold? (Roll a d8. The scrolls are in 1: Infernal, 2: Abyssal, 3: Celestial, 4: Draconic, 5: Druidic, 6: Giant, 7: Primordial, 8: Undercommon. If you happen to speak the resultant language, use Q/A rolls to determine what they contain. Perhaps a quest! Or some valuable knowledge. They might be worth something, too, to the right buyer)."],
    [81,"1d4-1 humanoids are arguing and do not notice your approach. One is a commander, the other(s) subordinate. The subordinate has failed in the execution of some task. The rest of your story will hopefully provide the context here. If you choose to attack, this will be a (d4) 1: Easy, 2-3: Medium, 4: Hard encounter. You may choose an appropriate enemy based on the encounter guidelines in Chapter 16. Individual loot 50% (roll twice, once for each humanoid)"],
    [82,"You find the shrine of a long-forgotten deity. (Loot Hoard 30%). Perhaps this deity tries to commune with you, attempting to find a new worshipper?"],
    [83,"You see an ornate historical mural on a nearby wall, faded but obviously painted / carved by a master artist. As you watch, the figures in the mural come to life and begin to play out a scene hitherto unknown to you. You gain knowledge of this episode of history, and possibly of some previously undiscovered location/quest/relic associated with it. (Consult the history of your setting / use Q/A rolls to find out what… player’s choice!)"],
    [84,"You enter a chamber where a sacrificial ceremony is taking place. Several humanoids are gathered around a plinth, about to sacrifice a live beast. Who knows what the outcome of this ritual will be?"],
    [85,"You get the feeling you are being stalked by something, some invisible force. You see shadows, hear noises, feel a presence, but every time you turn you see nothing. Perhaps it will show itself eventually. Perhaps it is another adventurer, or perhaps… something more sinister."],
    [86,"In the next room, a gnome sits at a table in a sparse room before a chess board. He invites you to play. Playing requires a DC 15 deception or intelligence check. If successful, the gnome will gift you with a useful trinket of gnomish invention, or 50 gp. If unsuccessful, you surrender an item of 50 gp worth. You can refuse this"],
    [87,"You find an underground tavern, where dungeon denizens like to stop and get an ale every now and then before returning to their murderous exploits! It’s called The Delver’s Rest and the patronage is steady! (If this is too silly, re-roll)."],
    [88,"You find a secret door to a chamber where an alchemist is busy preparing potions and tinctures of all kinds. He might be open to bartering, but is currently trying to prepare something that will “stop all hell breaking out in this place.” If you try to attack him, you find he is protected by an impenetrable magic barrier, which only he can let down."],
    [89,"You find a dimensional door into a forest, but can’t be sure if this wilderness is real, or simply an illusion to lead you into even greater danger."],
    [90,"In this area are some pools of greyish-green slime of unknown nature. Q/A and nature rolls to determine more about their nature."],
    [91,"If the party are holding torches, or there are torches or candles present in the area, something blows them all out suddenly."],
    [92,"The area is filled with a thick mist/fog, that hangs heavy and low to the ground."],
    [93,"In the distance a small girl dressed in rags can be seen standing near the wall. If players move toward her, she will turn and run through the nearest wall and disappear."],
    [94,"To the far side three skeletons hang on manacles, if they are inspected 1d6 rats will jump out at the PCs."],
    [95,"The ground here is earthen and covered with a top soil. It smells heavily of must and dirt. Root-like tendrils will start to appear out of the ground and start to grow up the walls."],
    [96,"A player is bitten on the hand (causing minimal if no damage). What did it?"],
    [97,"A low rumble, then a deep cracking noise is heard directly above. The area shakes slightly, dust and small debris falls from the ceiling, then it stops."],
    [98,"A bard has stopped in this area to belt out a quick song to try and lift his own spirits. He’s been lost down here for days! He tells you that he’s managed to find his way up to this level with some difficulty, but that this dungeon descends many levels downward. He was held captive by some kind of humanoid until just recently. He’s absolutely starving, having had to subsist on dungeon moss and tunnelslugs for weeks."],
    [99,"You hear the sound of something heavy being dragged, coming from up ahead."],
    [100,"A large group of humanoids comes running down the tunnel towards you, their expressions showing absolute, abject terror. “RUN!” the lead one yells at you. “Save yourself, run, now!!!” Behind them, you see something BIG following..."]
  ];

  return encounterDungeonArray;
}

function objectifyEncounterDungeonRow(encounterDungeonRowNum) {
  
  console.log(JSON.stringify(encounterDungeonRow));
  
  var encounterDungeonRow = encounterDungeonArray[encounterDungeonRowNum - 1];

  var encounterDungeonDataObject = {
    rollResult: encounterDungeonRow[0],
    text: encounterDungeonRow[1]
  };
  return encounterDungeonDataObject;
}

function rollEncounterDungeon() {
  var encounterDungeonRollResult = rollDice(100);
  var encounterDungeonDataObject = objectifyEncounterDungeonRow(encounterDungeonRollResult);
  var encounterDungeonString = encounterDungeonDataObject.text;
  return encounterDungeonString;
}

function rollCombatEncounter() {
  var answer = "";
  var rollResult = rollDice(6);

  switch(rollResult) {
    case 1:
    case 2:
      answer = "Easy";
      break;
    case 3:
    case 4:
      answer = "Medium";
      break;
    case 5:
      answer = "Hard";
      break;
    case 6:
      answer = "Deadly"
      break;
  }

  return answer;
}

function initializeMonsterIntentionArray() {
  var monsterIntentionArray = [
    [1,"Monster flees, scared witless at the sight of you!"],
    [2,"Monster flees, scared witless at the sight of you!"],
    [3,"Monster flees, scared witless at the sight of you!"],
    [4,"Monster flees, scared witless at the sight of you!"],
    [5,"Monster is curious and will stay some distance away, checking you out before approaching; if a beast, may be open to befriending. Make charisma check with advantage. If successful, you could take as companion."],
    [6,"Monster is curious and will stay some distance away, checking you out before approaching; if a beast, may be open to befriending. Make charisma check with advantage. If successful, you could take as companion."],
    [7,"Monster is curious and will stay some distance away, checking you out before approaching; if a beast, may be open to befriending. Make charisma check with advantage. If successful, you could take as companion."],
    [8,"Monster is curious and will stay some distance away, checking you out before approaching; if a beast, may be open to befriending. Make charisma check with advantage. If successful, you could take as companion."],
    [9,"Monster is curious and will stay some distance away, checking you out before approaching; if a beast, may be open to befriending. Make charisma check with advantage. If successful, you could take as companion."],
    [10,"Monster will stalk you, always staying well out of range, perhaps waiting for you to become wounded or disadvantaged in some way."],
    [11,"Monster will stalk you, always staying well out of range, perhaps waiting for you to become wounded or disadvantaged in some way."],
    [12,"Monster will stalk you, always staying well out of range, perhaps waiting for you to become wounded or disadvantaged in some way."],
    [13,"Monster will stalk you, always staying well out of range, perhaps waiting for you to become wounded or disadvantaged in some way."],
    [14,"Monster will stalk you, always staying well out of range, perhaps waiting for you to become wounded or disadvantaged in some way."],
    [15,"Monster will stay at distance and make ranged attacks, picking away at you. If you try to come near, it will flee."],
    [16,"Monster will stay at distance and make ranged attacks, picking away at you. If you try to come near, it will flee."],
    [17,"Monster will stay at distance and make ranged attacks, picking away at you. If you try to come near, it will flee."],
    [18,"Monster will stay at distance and make ranged attacks, picking away at you. If you try to come near, it will flee."],
    [19,"Monster will stay at distance and make ranged attacks, picking away at you. If you try to come near, it will flee."],
    [20,"Monster may want you caught and kept alive rather than killed. It will fight you to the point of unconsciousness, and then will take you away and attempt to keep you alive for some purpose."],
    [21,"Monster may want you caught and kept alive rather than killed. It will fight you to the point of unconsciousness, and then will take you away and attempt to keep you alive for some purpose."],
    [22,"Monster may want you caught and kept alive rather than killed. It will fight you to the point of unconsciousness, and then will take you away and attempt to keep you alive for some purpose."],
    [23,"Monster may want you caught and kept alive rather than killed. It will fight you to the point of unconsciousness, and then will take you away and attempt to keep you alive for some purpose."],
    [24,"Monster may want you caught and kept alive rather than killed. It will fight you to the point of unconsciousness, and then will take you away and attempt to keep you alive for some purpose."],
    [25,"Monster is highly alert and on guard. Any stealth checks to approach it are made at disadvantage"],
    [26,"Monster is highly alert and on guard. Any stealth checks to approach it are made at disadvantage"],
    [27,"Monster is highly alert and on guard. Any stealth checks to approach it are made at disadvantage"],
    [28,"Monster is highly alert and on guard. Any stealth checks to approach it are made at disadvantage"],
    [29,"Monster is highly alert and on guard. Any stealth checks to approach it are made at disadvantage"],
    [30,"Monster is highly alert and on guard. Any stealth checks to approach it are made at disadvantage"],
    [31,"Monster simply attacks, purely out of instinct."],
    [32,"Monster simply attacks, purely out of instinct."],
    [33,"Monster simply attacks, purely out of instinct."],
    [34,"Monster simply attacks, purely out of instinct."],
    [35,"Monster simply attacks, purely out of instinct."],
    [36,"Monster simply attacks, purely out of instinct."],
    [37,"Monster simply attacks, purely out of instinct."],
    [38,"Monster simply attacks, purely out of instinct."],
    [39,"Monster simply attacks, purely out of instinct."],
    [40,"Monster simply attacks, purely out of instinct."],
    [41,"Monster simply attacks, purely out of instinct."],
    [42,"Monster simply attacks, purely out of instinct."],
    [43,"Monster simply attacks, purely out of instinct."],
    [44,"Monster simply attacks, purely out of instinct."],
    [45,"Monster simply attacks, purely out of instinct."],
    [46,"Monster simply attacks, purely out of instinct."],
    [47,"Monster simply attacks, purely out of instinct."],
    [48,"Monster simply attacks, purely out of instinct."],
    [49,"Monster simply attacks, purely out of instinct."],
    [50,"Monster simply attacks, purely out of instinct."],
    [51,"Monster simply attacks, purely out of instinct."],
    [52,"Monster simply attacks, purely out of instinct."],
    [53,"Monster simply attacks, purely out of instinct."],
    [54,"Monster simply attacks, purely out of instinct."],
    [55,"Monster simply attacks, purely out of instinct."],
    [56,"Monster simply attacks, purely out of instinct."],
    [57,"Monster simply attacks, purely out of instinct."],
    [58,"Monster simply attacks, purely out of instinct."],
    [59,"Monster simply attacks, purely out of instinct."],
    [60,"Monster simply attacks, purely out of instinct."],
    [61,"Monster simply attacks, purely out of instinct."],
    [62,"Monster simply attacks, purely out of instinct."],
    [63,"Monster simply attacks, purely out of instinct."],
    [64,"Monster simply attacks, purely out of instinct."],
    [65,"Monster simply attacks, purely out of instinct."],
    [66,"Monster simply attacks, purely out of instinct."],
    [67,"Monster simply attacks, purely out of instinct."],
    [68,"Monster simply attacks, purely out of instinct."],
    [69,"Monster simply attacks, purely out of instinct."],
    [70,"Monster simply attacks, purely out of instinct."],
    [71,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [72,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [73,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [74,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [75,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [76,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [77,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [78,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [79,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [80,"Monster views this area as its territory and you as a challenger. It attacks immediately, trying to drive you backward. It might make strength checks to push you back."],
    [81,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [82,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [83,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [84,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [85,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [86,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [87,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [88,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [89,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [90,"Monster has offspring (or something it wants to protect) nearby, and sees you as a threat. It attacks immediately, possibly guarding a certain area."],
    [91,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [92,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [93,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [94,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [95,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [96,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [97,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [98,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [99,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."],
    [100,"Monster barrels straight into combat, seeing your presence here as a personal affront. It is incited to extreme rage."]
  ];
  return monsterIntentionArray;
};

function objectifyMonsterIntentionRow(MonsterIntentionRowNum) {
  
  var MonsterIntentionRow = monsterIntentionArray[MonsterIntentionRowNum - 1];

  var MonsterIntentionDataObject = {
    rollResult: MonsterIntentionRow[0],
    text: MonsterIntentionRow[1]
  };
  return MonsterIntentionDataObject;
};

function rollMonsterIntention() {
  var MonsterIntentionRollResult = rollDice(100);
  var MonsterIntentionDataObject = objectifyMonsterIntentionRow(MonsterIntentionRollResult);
  var MonsterIntentionString = MonsterIntentionDataObject.text;
  return MonsterIntentionString;
}

function initializeMonsterReactionArray() {
  var monsterReactionArray = [
    [1,"If monster has dropped to less than 50% hp, it flees (provoking an opportunity attack if necessary), taking double movement."],
    [2,"If monster has dropped to less than 50% hp, it flees (provoking an opportunity attack if necessary), taking double movement."],
    [3,"If monster has dropped to less than 50% hp, it flees (provoking an opportunity attack if necessary), taking double movement."],
    [4,"If monster has dropped to less than 50% hp, it flees (provoking an opportunity attack if necessary), taking double movement."],
    [5,"f you scored 25% or more of the creature’s hp in damage during the last round, creature makes a wis check (DC=PC's wisdom intimidation modifier). If it fails, it moves away from you quickly (taking dash), and provoking an opportunity attack if necessary. If it succeeds, it attacks normally."],
    [6,"f you scored 25% or more of the creature’s hp in damage during the last round, creature makes a wis check (DC=PC's wisdom intimidation modifier). If it fails, it moves away from you quickly (taking dash), and provoking an opportunity attack if necessary. If it succeeds, it attacks normally."],
    [7,"f you scored 25% or more of the creature’s hp in damage during the last round, creature makes a wis check (DC=PC's wisdom intimidation modifier). If it fails, it moves away from you quickly (taking dash), and provoking an opportunity attack if necessary. If it succeeds, it attacks normally."],
    [8,"f you scored 25% or more of the creature’s hp in damage during the last round, creature makes a wis check (DC=PC's wisdom intimidation modifier). If it fails, it moves away from you quickly (taking dash), and provoking an opportunity attack if necessary. If it succeeds, it attacks normally."],
    [9,"If you scored 50% or more of the creature’s hp in damage during the last round, creature makes a wisdom check (DC=PC's wisdom+intimidation mod). If it fails, the creature disengages and then moves away from the PC up to its movement allowance. Otherwise, it attacks normally"],
    [10,"If you scored 50% or more of the creature’s hp in damage during the last round, creature makes a wisdom check (DC=PC's wisdom+intimidation mod). If it fails, the creature disengages and then moves away from the PC up to its movement allowance. Otherwise, it attacks normally"],
    [11,"If you scored 50% or more of the creature’s hp in damage during the last round, creature makes a wisdom check (DC=PC's wisdom+intimidation mod). If it fails, the creature disengages and then moves away from the PC up to its movement allowance. Otherwise, it attacks normally"],
    [12,"If you scored 50% or more of the creature’s hp in damage during the last round, creature makes a wisdom check (DC=PC's wisdom+intimidation mod). If it fails, the creature disengages and then moves away from the PC up to its movement allowance. Otherwise, it attacks normally"],
    [13,"Creature makes an attack, then moves away, provoking an opportunity attack if necessary"],
    [14,"Creature makes an attack, then moves away, provoking an opportunity attack if necessary"],
    [15,"Creature makes an attack, then moves away, provoking an opportunity attack if necessary"],
    [16,"Creature makes an attack, then moves away, provoking an opportunity attack if necessary"],
    [17,"If there is more than one enemy attacking the PC, they all attack and then move away in different directions. PC can only choose one on which to make an opportunity attack."],
    [18,"If there is more than one enemy attacking the PC, they all attack and then move away in different directions. PC can only choose one on which to make an opportunity attack."],
    [19,"If there is more than one enemy attacking the PC, they all attack and then move away in different directions. PC can only choose one on which to make an opportunity attack."],
    [20,"If there is more than one enemy attacking the PC, they all attack and then move away in different directions. PC can only choose one on which to make an opportunity attack."],
    [21,"If there is more than one enemy attacking the PC, one stays in melee and attacks, while another stays at ranged or disengages and moves away to make ranged attacks (if it has ranged attacks), possibly risking an attack of opportunity if enemy has hp to spare. Otherwise, it stays in melee. If there is only one creature, it attacks as normal."],
    [22,"If there is more than one enemy attacking the PC, one stays in melee and attacks, while another stays at ranged or disengages and moves away to make ranged attacks (if it has ranged attacks), possibly risking an attack of opportunity if enemy has hp to spare. Otherwise, it stays in melee. If there is only one creature, it attacks as normal."],
    [23,"If there is more than one enemy attacking the PC, one stays in melee and attacks, while another stays at ranged or disengages and moves away to make ranged attacks (if it has ranged attacks), possibly risking an attack of opportunity if enemy has hp to spare. Otherwise, it stays in melee. If there is only one creature, it attacks as normal."],
    [24,"If there is more than one enemy attacking the PC, one stays in melee and attacks, while another stays at ranged or disengages and moves away to make ranged attacks (if it has ranged attacks), possibly risking an attack of opportunity if enemy has hp to spare. Otherwise, it stays in melee. If there is only one creature, it attacks as normal."],
    [25,"If there is more than one enemy attacking the PC, they move to flank the PC on opposite sides."],
    [26,"If there is more than one enemy attacking the PC, they move to flank the PC on opposite sides."],
    [27,"If there is more than one enemy attacking the PC, they move to flank the PC on opposite sides."],
    [28,"If there is more than one enemy attacking the PC, they move to flank the PC on opposite sides."],
    [29,"If combat has not yet started, the monster is busy with something else and does not initially see the PC as a threat. If the PC does not attack, they can probably pass without any incident."],
    [30,"If combat has not yet started, the monster is busy with something else and does not initially see the PC as a threat. If the PC does not attack, they can probably pass without any incident."],
    [31,"If combat has not yet started, the monster is busy with something else and does not initially see the PC as a threat. If the PC does not attack, they can probably pass without any incident."],
    [32,"If combat has not yet started, the monster is busy with something else and does not initially see the PC as a threat. If the PC does not attack, they can probably pass without any incident."],
    [33,"Creature uses its main attack"],
    [34,"Creature uses its main attack"],
    [35,"Creature uses its main attack"],
    [36,"Creature uses its main attack"],
    [37,"Creature uses its main attack"],
    [38,"Creature uses its main attack"],
    [39,"Creature uses its main attack"],
    [40,"Creature uses its main attack"],
    [41,"Creature uses its main attack"],
    [42,"Creature uses its main attack"],
    [43,"Creature uses its main attack"],
    [44,"Creature uses its main attack"],
    [45,"Creature uses its main attack"],
    [46,"Creature uses its main attack"],
    [47,"Creature uses its main attack"],
    [48,"Creature uses its main attack"],
    [49,"Creature uses its main attack"],
    [50,"Creature uses its main attack"],
    [51,"Creature uses its main attack"],
    [52,"Creature uses its main attack"],
    [53,"Creature uses its main attack"],
    [54,"Creature uses its main attack"],
    [55,"Creature uses its main attack"],
    [56,"Creature uses its main attack"],
    [57,"Creature uses its main attack"],
    [58,"Creature uses its main attack"],
    [59,"Creature uses its main attack"],
    [60,"Creature uses its main attack"],
    [61,"Creature uses its main attack"],
    [62,"Creature uses its main attack"],
    [63,"Creature uses its main attack"],
    [64,"Creature uses its main attack"],
    [65,"Creature uses its main attack"],
    [66,"Creature uses its main attack"],
    [67,"Creature uses its main attack"],
    [68,"Creature uses its main attack"],
    [69,"Creature uses its main attack"],
    [70,"Creature uses its main attack"],
    [71,"Creature uses its main attack"],
    [72,"Creature uses its main attack"],
    [73,"Roll on Random Combat Event Table (eg Slips, Trips and Flying Turnips, or any random event table)."],
    [74,"Roll on Random Combat Event Table (eg Slips, Trips and Flying Turnips, or any random event table)."],
    [75,"Roll on Random Combat Event Table (eg Slips, Trips and Flying Turnips, or any random event table)."],
    [76,"Roll on Random Combat Event Table (eg Slips, Trips and Flying Turnips, or any random event table)."],
    [77,"Enemy takes your presence here as a personal affront, and attempts to intimidate you. It makes an intimidation check against your wisdom (as DC). If it succeeds, make your next attack at disadvantage. If it fails, it goes straight into melee brawl."],
    [78,"Enemy takes your presence here as a personal affront, and attempts to intimidate you. It makes an intimidation check against your wisdom (as DC). If it succeeds, make your next attack at disadvantage. If it fails, it goes straight into melee brawl."],
    [79,"Enemy takes your presence here as a personal affront, and attempts to intimidate you. It makes an intimidation check against your wisdom (as DC). If it succeeds, make your next attack at disadvantage. If it fails, it goes straight into melee brawl."],
    [80,"Enemy takes your presence here as a personal affront, and attempts to intimidate you. It makes an intimidation check against your wisdom (as DC). If it succeeds, make your next attack at disadvantage. If it fails, it goes straight into melee brawl."],
    [81,"Monster inspiration: If the monster has a feat that needs to recharge, it recharges automatically without needing to make a roll."],
    [82,"Monster inspiration: If the monster has a feat that needs to recharge, it recharges automatically without needing to make a roll."],
    [83,"Monster inspiration: If the monster has a feat that needs to recharge, it recharges automatically without needing to make a roll."],
    [84,"Monster inspiration: If the monster has a feat that needs to recharge, it recharges automatically without needing to make a roll."],
    [85,"If your last attack missed, the creature feels a swelling of courage. It makes a wisdom check (DC=PC Charisma). If it succeeds, it attacks with advantage. If unsuccessful, it attacks as normal"],
    [86,"If your last attack missed, the creature feels a swelling of courage. It makes a wisdom check (DC=PC Charisma). If it succeeds, it attacks with advantage. If unsuccessful, it attacks as normal"],
    [87,"If your last attack missed, the creature feels a swelling of courage. It makes a wisdom check (DC=PC Charisma). If it succeeds, it attacks with advantage. If unsuccessful, it attacks as normal"],
    [88,"If your last attack missed, the creature feels a swelling of courage. It makes a wisdom check (DC=PC Charisma). If it succeeds, it attacks with advantage. If unsuccessful, it attacks as normal"],
    [89,"If the creature won initiative, then it was aware of your presence (even though it may not have appeared to be) and has a surprise attack readied."],
    [90,"If the creature won initiative, then it was aware of your presence (even though it may not have appeared to be) and has a surprise attack readied."],
    [91,"If the creature won initiative, then it was aware of your presence (even though it may not have appeared to be) and has a surprise attack readied."],
    [92,"If the creature won initiative, then it was aware of your presence (even though it may not have appeared to be) and has a surprise attack readied."],
    [93,"Creature makes an intelligence or perception check (whichever is highest) with the DC being the PC’s main combat\ ability (strength or dex). If successful (and if appropriate for the monster), it discerns information about the PC’s combat skill. If it is obviously outclassed, it will take the dash action to get as far from the PC as possible (provoking an opportunity attack if necessary). If it is equally matched or clearly superior to the PC, the PC makes their next attack at disadvantage."],
    [94,"Creature makes an intelligence or perception check (whichever is highest) with the DC being the PC’s main combat\ ability (strength or dex). If successful (and if appropriate for the monster), it discerns information about the PC’s combat skill. If it is obviously outclassed, it will take the dash action to get as far from the PC as possible (provoking an opportunity attack if necessary). If it is equally matched or clearly superior to the PC, the PC makes their next attack at disadvantage."],
    [95,"Creature makes an intelligence or perception check (whichever is highest) with the DC being the PC’s main combat\ ability (strength or dex). If successful (and if appropriate for the monster), it discerns information about the PC’s combat skill. If it is obviously outclassed, it will take the dash action to get as far from the PC as possible (provoking an opportunity attack if necessary). If it is equally matched or clearly superior to the PC, the PC makes their next attack at disadvantage."],
    [96,"Creature makes an intelligence or perception check (whichever is highest) with the DC being the PC’s main combat\ ability (strength or dex). If successful (and if appropriate for the monster), it discerns information about the PC’s combat skill. If it is obviously outclassed, it will take the dash action to get as far from the PC as possible (provoking an opportunity attack if necessary). If it is equally matched or clearly superior to the PC, the PC makes their next attack at disadvantage."],
    [97,"Monster roars for help / reinforcements, in its own tongue. Make a d100 roll. On a roll of 10 or below, another one of its type appears in two rounds. (This only happens once)"],
    [98,"Monster roars for help / reinforcements, in its own tongue. Make a d100 roll. On a roll of 10 or below, another one of its type appears in two rounds. (This only happens once)"],
    [99,"Monster roars for help / reinforcements, in its own tongue. Make a d100 roll. On a roll of 10 or below, another one of its type appears in two rounds. (This only happens once)"],
    [100,"Monster roars for help / reinforcements, in its own tongue. Make a d100 roll. On a roll of 10 or below, another one of its type appears in two rounds. (This only happens once)"]
  ];
  return monsterReactionArray;
};

function objectifyMonsterReactionRow(monsterReactionRowNum) {
  
  var monsterReactionRow = monsterReactionArray[monsterReactionRowNum - 1];

  var monsterReactionDataObject = {
    rollResult: monsterReactionRow[0],
    text: monsterReactionRow[1]
  };
  return monsterReactionDataObject;
};

function rollMonsterReaction() {
  var monsterReactionRollResult = rollDice(100);
  var monsterReactionDataObject = objectifyMonsterReactionRow(monsterReactionRollResult);
  var monsterReactionString = monsterReactionDataObject.text;
  return monsterReactionString;
}
/******* ENCOUNTER END ***********/

/******* PORTENT START ***********/

function initializeVerbArray() {
  var verbArray = [
    [1,"Boast"],
    [2,"Fret"],
    [3,"Salute"],
    [4,"Exhibit"],
    [5,"Preach"],
    [6,"Deliver"],
    [7,"Infringe"],
    [8,"Jostle"],
    [9,"Avert"],
    [10,"Sob"],
    [11,"Lurk"],
    [12,"Bet"],
    [13,"Glimpse"],
    [14,"Restrain"],
    [15,"Bribe"],
    [16,"Collapse"],
    [17,"Distress"],
    [18,"Escape"],
    [19,"Dispute"],
    [20,"Assassinate"],
    [21,"Plead"],
    [22,"Concoct"],
    [23,"Destroy"],
    [24,"Resurrect"],
    [25,"Provide"],
    [26,"Offend"],
    [27,"Bargain"],
    [28,"Free"],
    [29,"Parade"],
    [30,"Solicit"],
    [31,"Enquire"],
    [32,"Bestow"],
    [33,"Alert"],
    [34,"Demolish"],
    [35,"Infect"],
    [36,"Prohibit"],
    [37,"Drink"],
    [38,"Queue"],
    [39,"Revolt"],
    [40,"Prowl"],
    [41,"Infest"],
    [42,"Gob"],
    [43,"Contact"],
    [44,"Harass"],
    [45,"Antagonize"],
    [46,"Force"],
    [47,"Deface"],
    [48,"Dash"],
    [49,"Disrupt"],
    [50,"Shove"],
    [51,"Banish"],
    [52,"Condemn"],
    [53,"Despair"],
    [54,"Ban"],
    [55,"Inflict"],
    [56,"Assault"],
    [57,"Seize"],
    [58,"Flirt"],
    [59,"Frustrate"],
    [60,"Push"],
    [61,"Overpower"],
    [62,"Lament"],
    [63,"Aid"],
    [64,"Raid"],
    [65,"Guard"],
    [66,"Cremate"],
    [67,"Bite"],
    [68,"Blab"],
    [69,"Involve"],
    [70,"Dupe"],
    [71,"Experiment"],
    [72,"Discipline"],
    [73,"Hit"],
    [74,"Spill"],
    [75,"Address"],
    [76,"Fall"],
    [77,"Confiscate"],
    [78,"Disturb"],
    [79,"Nag"],
    [80,"Dispel"],
    [81,"Discuss"],
    [82,"Bother"],
    [83,"Rebel"],
    [84,"Smash"],
    [85,"Riot"],
    [86,"Arrange"],
    [87,"Apprehend"],
    [88,"Pursue"],
    [89,"Intimidate"],
    [90,"Disgrace"],
    [91,"Choke"],
    [92,"Fling"],
    [93,"Decorate"],
    [94,"Beg"],
    [95,"Inspect"],
    [96,"Shout"],
    [97,"Careen"],
    [98,"Astonish"],
    [99,"Oppress"],
    [100,"Research"],
    [101,"End"],
    [102,"Ship"],
    [103,"Look"],
    [104,"Aggravate"],
    [105,"Persecute"],
    [106,"Laugh"],
    [107,"Ensnare"],
    [108,"Beckon"],
    [109,"Misspell"],
    [110,"Flee"],
    [111,"Congregate"],
    [112,"Interfere"],
    [113,"Silence"],
    [114,"Command"],
    [115,"Rescue"],
    [116,"Inflame"],
    [117,"Abuse"],
    [118,"Defuse"],
    [119,"Give"],
    [120,"Grapple"],
    [121,"Grieve"],
    [122,"Declare"],
    [123,"Fund"],
    [124,"Overhear"],
    [125,"Foretell"],
    [126,"Sell"],
    [127,"Enrage"],
    [128,"Resist"],
    [129,"Ransack"],
    [130,"Scare"],
    [131,"Persuade"],
    [132,"Faint"],
    [133,"Endorse"],
    [134,"Lose"],
    [135,"Remark"],
    [136,"Praise"],
    [137,"Agitate"],
    [138,"Prophesize"],
    [139,"Goggle"],
    [140,"Confront"],
    [141,"Implore"],
    [142,"Duplicate"],
    [143,"Goad"],
    [144,"Capture"],
    [145,"Leap"],
    [146,"Broadcast"],
    [147,"Ask"],
    [148,"Pollute"],
    [149,"Deride"],
    [150,"Bemoan"],
    [151,"Exclaim"],
    [152,"Interrogate"],
    [153,"Purchase"],
    [154,"Insult"],
    [155,"Secure"],
    [156,"Intoxicate"],
    [157,"Demand"],
    [158,"Badmouth"],
    [159,"Beguile"],
    [160,"Disgust"],
    [161,"Build"],
    [162,"Cheat"],
    [163,"Crowd"],
    [164,"Caress"],
    [165,"Enlighten"],
    [166,"Falsify"],
    [167,"Enrich"],
    [168,"Bleed"],
    [169,"Obscure"],
    [170,"Decay"],
    [171,"Pronounce"],
    [172,"Enroll"],
    [173,"Enlist"],
    [174,"Punch"],
    [175,"Enshrine"],
    [176,"Jaywalk"],
    [177,"Sing"],
    [178,"Blunder"],
    [179,"Scamper"],
    [180,"Enforce"],
    [181,"Mesmerize"],
    [182,"Invite"],
    [183,"Annihilate"],
    [184,"Display"],
    [185,"Dazzle"],
    [186,"Fake"],
    [187,"Disguise"],
    [188,"Beautify"],
    [189,"Loot"],
    [190,"Bellow"],
    [191,"Disappear"],
    [192,"Congratulate"],
    [193,"Gossip"],
    [194,"Perform"],
    [195,"Recite"],
    [196,"Infuriate"],
    [197,"Patrol"],
    [198,"Repair"],
    [199,"Spy"],
    [200,"Endanger"],
    [201,"Impede"],
    [202,"Entice"],
    [203,"Charm"],
    [204,"Catch"],
    [205,"Break"],
    [206,"Besiege"],
    [207,"Crown"],
    [208,"Endear"],
    [209,"Dress"],
    [210,"Gaze"],
    [211,"Mock"],
    [212,"Drown"],
    [213,"Dishonor"],
    [214,"Fracture"],
    [215,"Evacuate"],
    [216,"Aim"],
    [217,"Debate"],
    [218,"Denounce"],
    [219,"Alarm"],
    [220,"Stop"],
    [221,"March"],
    [222,"Leer"],
    [223,"Bewilder"],
    [224,"Provoke"],
    [225,"Punish"],
    [226,"Strike"],
    [227,"Rush"],
    [228,"Exaggerate"],
    [229,"Argue"],
    [230,"Deduce"],
    [231,"Strangle"],
    [232,"Massacre"],
    [233,"Startle"],
    [234,"Excavate"],
    [235,"Fuss"],
    [236,"Bow"],
    [237,"Reward"],
    [238,"Dismount"],
    [239,"about"],
    [240,"Hurtle"],
    [241,"Humiliate"],
    [242,"Gamble"],
    [243,"Rob"],
    [244,"Observe"],
    [245,"Hamper"],
    [246,"Injure"],
    [247,"Exchange"],
    [248,"Defeat"],
    [249,"Rage"],
    [250,"Sleep"],
    [251,"Complain"],
    [252,"Displease"],
    [253,"Barter"],
    [254,"Ignite"],
    [255,"Prosecute"],
    [256,"Distill"],
    [257,"Imprison"],
    [258,"Stab"],
    [259,"Assemble"],
    [260,"Attack"],
    [261,"Babble"],
    [262,"Plunder"],
    [263,"Collaborate"],
    [264,"Pelt"],
    [265,"Belch"],
    [266,"Attempt"],
    [267,"Defend"],
    [268,"Carve"],
    [269,"Climb"],
    [270,"Chase"],
    [271,"Segregate"],
    [272,"Contaminate"],
    [273,"Scrounge"],
    [274,"Narrate"],
    [275,"Execute"],
    [276,"Jeer"],
    [277,"Erect"],
    [278,"Pounce"],
    [279,"Corrupt"],
    [280,"Appeal"],
    [281,"Evict"],
    [282,"Customize"],
    [283,"Dare"],
    [284,"Betray"],
    [285,"Mimic"],
    [286,"Accuse"],
    [287,"Show"],
    [288,"Bid"],
    [289,"Query"],
    [290,"Gift"],
    [291,"Drum"],
    [292,"Alter"],
    [293,"Arise"],
    [294,"Dance"],
    [295,"Brag"],
    [296,"Evade"],
    [297,"Scavenge"],
    [298,"Engineer"],
    [299,"Cook"],
    [300,"Obstruct"],
    [301,"Kiss"],
    [302,"Mutilate"],
    [303,"Conceal"],
    [304,"Earn"],
    [305,"Notify"],
    [306,"Drag"],
    [307,"Entangle"],
    [308,"Forge"],
    [309,"Applaud"],
    [310,"Deal"],
    [311,"Mutate"],
    [312,"Quarrel"],
    [313,"Petition"],
    [314,"Bash"],
    [315,"Search"],
    [316,"Gallop"],
    [317,"Frighten"],
    [318,"Parley"],
    [319,"Befriend"],
    [320,"Enter"],
    [321,"Bait"],
    [322,"Divert"],
    [323,"Dodge"],
    [324,"Blame"],
    [325,"Explode"],
    [326,"Near"],
    [327,"Disperse"],
    [328,"Dig"],
    [329,"Giggle"],
    [330,"Disarm"],
    [331,"Escort"],
    [332,"Decompose"],
    [333,"Reveal"],
    [334,"Instigate"],
    [335,"Kick"],
    [336,"Murder"],
    [337,"Conflict"],
    [338,"Annoy"],
    [339,"Construct"],
    [340,"Bless"],
    [341,"Elude"],
    [342,"Entertain"],
    [343,"Run"],
    [344,"Gleam"],
    [345,"Claim"],
    [346,"Enchant"],
    [347,"Bewitch"],
    [348,"Hold"],
    [349,"Disrespect"],
    [350,"Maim"],
    [351,"Celebrate"],
    [352,"Blurt"],
    [353,"Attend"],
    [354,"Follow"],
    [355,"Harm"],
    [356,"Enlarge"],
    [357,"Love"],
    [358,"Freeze"],
    [359,"Bawl"],
    [360,"Recount"],
    [361,"Blast"],
    [362,"Ridicule"],
    [363,"Manhandle"],
    [364,"Amuse"],
    [365,"Arouse"],
    [366,"Order"],
    [367,"Play"],
    [368,"Gesture"],
    [369,"Protect"],
    [370,"Steal"],
    [371,"Examine"],
    [372,"Fumble"],
    [373,"Overturn"],
    [374,"Approach"],
    [375,"Glare"],
    [376,"Conjure"],
    [377,"Contestconverse"],
    [378,"Rejoice"],
    [379,"Collide"],
    [380,"Decree"],
    [381,"Ambush"],
    [382,"Belittle"],
    [383,"Compliment"],
    [384,"Promote"],
    [385,"Consider"],
    [386,"Meddle"],
    [387,"Investigate"],
    [388,"Scream"],
    [389,"Employ"],
    [390,"Exclude"],
    [391,"Gather"],
    [392,"Speak"],
    [393,"Deceive"],
    [394,"Corner"],
    [395,"Challenge"],
    [396,"Discover"],
    [397,"Practice"],
    [398,"Avenge"],
    [399,"Berate"],
    [400,"Expose"],
    [401,"Flaunt"],
    [402,"Auction"],
    [403,"Spit"],
    [404,"Hurry"],
    [405,"Abolish"],
    [406,"Forgive"],
    [407,"Pry"],
    [408,"Stage"],
    [409,"Barricade"],
    [410,"Lecture"],
    [411,"Foresee"],
    [412,"Mob"],
    [413,"Fashion"],
    [414,"Engage"],
    [415,"Confuse"],
    [416,"Inform"],
    [417,"Penalize"],
    [418,"Slaughter"],
    [419,"Abandon"],
    [420,"Lunge"],
    [421,"Kill"],
    [422,"Drop"],
    [423,"Frame"],
    [424,"Devour"],
    [425,"Hide"],
    [426,"Amaze"],
    [427,"Market"],
    [428,"Eat"],
    [429,"Decline"],
    [430,"Bark"],
    [431,"Renege"],
    [432,"Grab"],
    [433,"Baptize"],
    [434,"Irritate"],
    [435,"Protest"],
    [436,"Dedicate"],
    [437,"Inspire"],
    [438,"Consecrate"],
    [439,"Proclaim"],
    [440,"Audition"],
    [441,"Dump"],
    [442,"Damage"],
    [443,"Bequeath"],
    [444,"Discriminate"],
    [445,"Enjoy"],
    [446,"Seduce"],
    [447,"Carry"],
    [448,"Joke"],
    [449,"Arrest"],
    [450,"Recruit"],
    [451,"Subdue"],
    [452,"Suffer"],
    [453,"Summon"],
    [454,"Surround"],
    [455,"Suspect"],
    [456,"Take"],
    [457,"Taunt"],
    [458,"Tease"],
    [459,"Tempt"],
    [460,"Terrify"],
    [461,"Terrorize"],
    [462,"Thank"],
    [463,"Threaten"],
    [464,"Throw"],
    [465,"Torment"],
    [466,"Torture"],
    [467,"Trade"],
    [468,"Transform"],
    [469,"Translate"],
    [470,"Transport"],
    [471,"Dream"],
    [472,"Trap"],
    [473,"Travel"],
    [474,"Tug"],
    [475,"Unite"],
    [476,"Unleash"],
    [477,"Unload"],
    [478,"Unveil"],
    [479,"Vandalize"],
    [480,"Vanish"],
    [481,"Victimize"],
    [482,"Violate"],
    [483,"Volunteer"],
    [484,"Wait"],
    [485,"Warn"],
    [486,"Wave"],
    [487,"Weep"],
    [488,"Welcome"],
    [489,"Whittle"],
    [490,"Wield"],
    [491,"Win"],
    [492,"Wink"],
    [493,"Witness"],
    [494,"Worship"],
    [495,"Wound"],
    [496,"Wreck"],
    [497,"Wrestle"],
    [498,"Write"],
    [499,"Yell"],
    [500,"Yield"]
  ];
  return verbArray;
}

function objectifyVerbRow(verbRowNum) {
  var verbRow = verbArray[verbRowNum - 1];
  let verbDataObject = {
    rollResult: verbRow[0],
    verb: verbRow[1],
  };
  return verbDataObject;
}

function rollVerb() {
  var verbRollResult = rollDice(500);
  var verb = objectifyVerbRow(verbRollResult);
  var answer = verb.verb;

  return answer;
}

function initializeNounArray() {
  var nounArray = [
  [2,"Magazine"],
  [3,"Corner"],
  [4,"Alternative"],
  [5,"University"],
  [6,"Complaint"],
  [7,"Gold"],
  [8,"Shower"],
  [9,"Analysis"],
  [10,"Professor"],
  [11,"Steak"],
  [12,"Pair"],
  [14,"Cycle"],
  [15,"Human"],
  [16,"Prize"],
  [17,"Member"],
  [18,"Property"],
  [19,"Insect"],
  [20,"Skirt"],
  [21,"Extension"],
  [22,"Definition"],
  [23,"Help"],
  [24,"Opportunity"],
  [25,"Sad"],
  [26,"Screw"],
  [27,"Effective"],
  [28,"File"],
  [29,"Morning"],
  [30,"Sell"],
  [31,"Mix"],
  [32,"Hell"],
  [33,"Essay"],
  [34,"Channel"],
  [35,"Structure"],
  [36,"Night"],
  [37,"Author"],
  [38,"Wall"],
  [39,"Shoulder"],
  [40,"Business"],
  [41,"Prior"],
  [42,"Highlight"],
  [43,"Screen"],
  [44,"Object"],
  [45,"Pleasure"],
  [46,"Bake"],
  [47,"Draft"],
  [48,"Reception"],
  [49,"Dear"],
  [50,"Tonight"],
  [51,"Occasion"],
  [52,"Shirt"],
  [53,"Pie"],
  [54,"Progress"],
  [55,"Student"],
  [56,"Garage"],
  [57,"Leg"],
  [58,"Bedroom"],
  [59,"Anxiety"],
  [60,"Push"],
  [61,"Hair"],
  [62,"Shot"],
  [63,"Fill"],
  [64,"Resist"],
  [65,"Regular"],
  [66,"Patient"],
  [67,"Hang"],
  [68,"Tackle"],
  [69,"Hide"],
  [70,"Suck"],
  [71,"Condition"],
  [72,"Reason"],
  [73,"Reserve"],
  [74,"Recommendation"],
  [75,"Volume"],
  [76,"Consequence"],
  [77,"Discount"],
  [78,"Procedure"],
  [79,"Cabinet"],
  [80,"Diamond"],
  [81,"Dress"],
  [82,"Check"],
  [83,"Part"],
  [84,"Serve"],
  [85,"Satisfaction"],
  [86,"Produce"],
  [87,"Conference"],
  [88,"Kind"],
  [89,"Guitar"],
  [90,"Apple"],
  [91,"Group"],
  [92,"Lie"],
  [93,"Pace"],
  [94,"Experience"],
  [95,"Lock"],
  [96,"Nothing"],
  [97,"It"],
  [98,"Construction"],
  [99,"Course"],
  [100,"Meat"],
  [101,"Vehicle"],
  [102,"Report"],
  [103,"Function"],
  [104,"Individual"],
  [105,"Sport"],
  [106,"Fact"],
  [107,"Independent"],
  [108,"Ratio"],
  [109,"Interaction"],
  [110,"One"],
  [111,"Finish"],
  [112,"Rich"],
  [113,"Loss"],
  [114,"Trust"],
  [115,"Inevitable"],
  [116,"Account"],
  [117,"Career"],
  [118,"Load"],
  [119,"Market"],
  [120,"Son"],
  [121,"Bottom"],
  [122,"Result"],
  [123,"Sympathy"],
  [124,"Box"],
  [125,"Dependent"],
  [126,"Basis"],
  [127,"Passenger"],
  [128,"Commission"],
  [129,"Orange"],
  [130,"Pack"],
  [131,"Maintenance"],
  [132,"Excuse"],
  [133,"Pollution"],
  [134,"Style"],
  [135,"Single"],
  [136,"Bridge"],
  [137,"Miss"],
  [138,"Cancer"],
  [139,"Sink"],
  [140,"Strength"],
  [141,"Error"],
  [142,"While"],
  [143,"Wood"],
  [144,"Practice"],
  [145,"Storage"],
  [146,"Chocolate"],
  [147,"Feedback"],
  [148,"Poet"],
  [149,"Sort"],
  [150,"Tooth"],
  [151,"Care"],
  [152,"Dish"],
  [153,"Shame"],
  [154,"Maximum"],
  [155,"Head"],
  [156,"Interest"],
  [157,"Way"],
  [158,"Mouse"],
  [159,"Guard"],
  [160,"Analyst"],
  [161,"Idea"],
  [162,"Advance"],
  [163,"Spare"],
  [164,"Monitor"],
  [165,"Sector"],
  [166,"Reading"],
  [167,"Potato"],
  [168,"Rise"],
  [169,"Fly"],
  [170,"Bit"],
  [171,"Swimming"],
  [172,"Quality"],
  [173,"Stroke"],
  [174,"Skin"],
  [175,"Animal"],
  [176,"Cost"],
  [177,"Age"],
  [178,"Stomach"],
  [179,"Reflection"],
  [180,"Visit"],
  [181,"Leave"],
  [182,"Boot"],
  [183,"Lunch"],
  [184,"Net"],
  [185,"Ticket"],
  [186,"Carry"],
  [187,"Neat"],
  [188,"Scene"],
  [189,"Selection"],
  [190,"Politics"],
  [191,"Test"],
  [192,"Implement"],
  [193,"Research"],
  [194,"Budget"],
  [195,"Wife"],
  [196,"Visual"],
  [197,"Officer"],
  [198,"Cousin"],
  [199,"Upper"],
  [200,"Aspect"],
  [201,"Television"],
  [202,"Bench"],
  [203,"Agreement"],
  [204,"Coast"],
  [205,"Horse"],
  [206,"Sky"],
  [207,"Weather"],
  [208,"Let"],
  [209,"Home"],
  [210,"Mess"],
  [211,"Dot"],
  [212,"Copy"],
  [213,"Self"],
  [214,"Winner"],
  [215,"Coach"],
  [216,"Ship"],
  [217,"Winter"],
  [218,"System"],
  [219,"Specific"],
  [220,"Childhood"],
  [221,"Lay"],
  [222,"Escape"],
  [223,"Beautiful"],
  [224,"Version"],
  [225,"Dream"],
  [226,"Pause"],
  [227,"Oven"],
  [228,"Bat"],
  [229,"Anything"],
  [230,"Cell"],
  [231,"Worry"],
  [232,"Insurance"],
  [233,"Delay"],
  [234,"Anger"],
  [235,"Deposit"],
  [236,"Annual"],
  [237,"Bird"],
  [238,"Tree"],
  [239,"Record"],
  [240,"Store"],
  [241,"Poem"],
  [242,"Stage"],
  [243,"Outcome"],
  [244,"Reply"],
  [245,"Wait"],
  [246,"Phone"],
  [247,"Senior"],
  [248,"String"],
  [249,"Charity"],
  [250,"Gap"],
  [251,"Question"],
  [252,"Recognition"],
  [253,"Instance"],
  [254,"Table"],
  [255,"Challenge"],
  [256,"Noise"],
  [257,"Win"],
  [258,"Courage"],
  [259,"Category"],
  [260,"Friend"],
  [261,"Regret"],
  [262,"Capital"],
  [263,"Wing"],
  [264,"Fold"],
  [265,"You"],
  [266,"Neck"],
  [267,"Method"],
  [268,"Statement"],
  [269,"Marketing"],
  [270,"Bitter"],
  [271,"Shopping"],
  [272,"Passion"],
  [273,"Investment"],
  [274,"Official"],
  [275,"Writing"],
  [276,"Original"],
  [277,"Keep"],
  [278,"Action"],
  [279,"Eat"],
  [280,"Hate"],
  [281,"Fault"],
  [282,"Spray"],
  [283,"Medicine"],
  [284,"Price"],
  [285,"Ease"],
  [286,"Rule"],
  [287,"Population"],
  [288,"Baby"],
  [289,"Project"],
  [290,"Start"],
  [291,"Tomorrow"],
  [292,"Perception"],
  [293,"Schedule"],
  [294,"Maybe"],
  [295,"Drawing"],
  [296,"Brush"],
  [297,"Fall"],
  [298,"Fire"],
  [299,"Board"],
  [300,"Sugar"],
  [301,"Teach"],
  [302,"Attack"],
  [303,"Competition"],
  [304,"Ring"],
  [305,"Department"],
  [306,"Foundation"],
  [307,"Signal"],
  [308,"Anywhere"],
  [309,"Rope"],
  [310,"Lecture"],
  [311,"Emergency"],
  [312,"Silver"],
  [313,"Fail"],
  [314,"North"],
  [315,"Negative"],
  [316,"Election"],
  [317,"Option"],
  [318,"Proof"],
  [319,"Transportation"],
  [320,"Final"],
  [321,"Cry"],
  [322,"Street"],
  [323,"Recover"],
  [324,"Sentence"],
  [325,"Diet"],
  [326,"Relief"],
  [327,"Respect"],
  [328,"Employee"],
  [329,"Broad"],
  [330,"Police"],
  [331,"Studio"],
  [332,"Character"],
  [333,"Lead"],
  [334,"Disk"],
  [335,"Sign"],
  [336,"Cut"],
  [337,"Witness"],
  [338,"Desk"],
  [339,"Inflation"],
  [340,"Pressure"],
  [341,"Heavy"],
  [342,"Family"],
  [343,"Cash"],
  [344,"News"],
  [345,"Activity"],
  [346,"Difficulty"],
  [347,"Feature"],
  [348,"Return"],
  [349,"Drama"],
  [350,"Memory"],
  [351,"Moment"],
  [352,"Point"],
  [353,"Site"],
  [354,"Bone"],
  [355,"Comment"],
  [356,"Drive"],
  [357,"Risk"],
  [358,"Pull"],
  [359,"Shoot"],
  [360,"Resolve"],
  [361,"Sense"],
  [362,"Disaster"],
  [363,"Player"],
  [364,"Issue"],
  [365,"Economics"],
  [366,"Path"],
  [367,"Ball"],
  [368,"Minor"],
  [369,"Engineering"],
  [370,"Party"],
  [371,"Gate"],
  [372,"Gift"],
  [373,"Nature"],
  [374,"Beach"],
  [375,"Button"],
  [376,"Promise"],
  [377,"Second"],
  [378,"Payment"],
  [379,"Stick"],
  [380,"Equal"],
  [381,"Bank"],
  [382,"Prompt"],
  [383,"Motor"],
  [384,"Still"],
  [385,"Birthday"],
  [386,"Plan"],
  [387,"Brick"],
  [388,"Membership"],
  [389,"Location"],
  [390,"Depression"],
  [391,"Permission"],
  [392,"Divide"],
  [393,"Discipline"],
  [394,"Sandwich"],
  [395,"Meaning"],
  [396,"Strike"],
  [397,"Conclusion"],
  [398,"Patience"],
  [399,"Metal"],
  [400,"Face"],
  [401,"Scratch"],
  [402,"Fan"],
  [403,"Floor"],
  [404,"Nation"],
  [405,"Grocery"],
  [406,"Order"],
  [407,"Building"],
  [408,"Foot"],
  [409,"Shape"],
  [410,"Strain"],
  [411,"Problem"],
  [412,"Grab"],
  [413,"Mountain"],
  [414,"Kiss"],
  [415,"Championship"],
  [416,"Focus"],
  [417,"Count"],
  [418,"Form"],
  [419,"Joke"],
  [420,"Web"],
  [421,"Homework"],
  [422,"Boat"],
  [423,"Vacation"],
  [424,"Tongue"],
  [425,"Salt"],
  [426,"Combination"],
  [427,"Long"],
  [428,"Green"],
  [429,"Listen"],
  [430,"Consist"],
  [431,"Many"],
  [432,"Mixture"],
  [433,"Platform"],
  [434,"Read"],
  [435,"Closet"],
  [436,"Reputation"],
  [437,"Save"],
  [438,"Session"],
  [439,"Glove"],
  [440,"Black"],
  [441,"Priority"],
  [442,"Rent"],
  [443,"Contest"],
  [444,"Village"],
  [445,"Change"],
  [446,"Mother"],
  [447,"Company"],
  [448,"Tool"],
  [449,"Split"],
  [450,"Camera"],
  [451,"Math"],
  [452,"Chance"],
  [453,"Glass"],
  [454,"Claim"],
  [455,"Process"],
  [456,"Culture"],
  [457,"Slice"],
  [458,"Kid"],
  [459,"Race"],
  [460,"Move"],
  [461,"Hearing"],
  [462,"Will"],
  [463,"Cap"],
  [464,"Disease"],
  [465,"Breath"],
  [466,"Gain"],
  [467,"Unique"],
  [468,"Figure"],
  [469,"Wash"],
  [470,"Boss"],
  [471,"Development"],
  [472,"Expert"],
  [473,"Worth"],
  [474,"Mortgage"],
  [475,"Active"],
  [476,"Assignment"],
  [477,"Value"],
  [478,"Cold"],
  [479,"Landscape"],
  [480,"Sample"],
  [481,"Spite"],
  [482,"Room"],
  [483,"Weight"],
  [484,"Fat"],
  [485,"Revolution"],
  [486,"Science"],
  [487,"Raise"],
  [488,"Remove"],
  [489,"Weird"],
  [490,"Study"],
  [491,"Ideal"],
  [492,"Ask"],
  [493,"Training"],
  [494,"Technology"],
  [495,"Law"],
  [496,"Manner"],
  [497,"Series"],
  [498,"Supermarket"],
  [499,"Departure"],
  [500,"Reaction"],
  [501,"Minimum"],
  [502,"Worker"],
  [503,"Model"],
  [504,"Boy"],
  [505,"Release"],
  [506,"Plate"],
  [507,"Court"],
  [508,"Nobody"],
  [509,"Relationship"],
  [510,"Security"],
  [511,"Border"],
  [512,"Link"],
  [513,"Laugh"],
  [514,"High"],
  [515,"Stand"],
  [516,"Hospital"],
  [517,"Talk"],
  [518,"Distribution"],
  [519,"Wave"],
  [520,"Attitude"],
  [521,"Significance"],
  [522,"Examination"],
  [523,"Airport"],
  [524,"Put"],
  [525,"Device"],
  [526,"Card"],
  [527,"Spring"],
  [528,"Pattern"],
  [529,"Cable"],
  [530,"Respond"],
  [531,"Arm"],
  [532,"Resource"],
  [533,"Suspect"],
  [534,"Local"],
  [535,"Light"],
  [536,"Beat"],
  [537,"Context"],
  [538,"Year"],
  [539,"Resident"],
  [540,"Profit"],
  [541,"Punch"],
  [542,"Convert"],
  [543,"Farm"],
  [544,"Reward"],
  [545,"Shift"],
  [546,"Glad"],
  [547,"Brave"],
  [548,"Pension"],
  [549,"Quarter"],
  [550,"Print"],
  [551,"Plane"],
  [552,"Accident"],
  [553,"Repeat"],
  [554,"Judge"],
  [555,"Event"],
  [556,"Airline"],
  [557,"Food"],
  [558,"Few"],
  [559,"External"],
  [560,"Client"],
  [561,"Dirt"],
  [562,"Word"],
  [563,"Sensitive"],
  [564,"Usual"],
  [565,"Thought"],
  [566,"Emotion"],
  [567,"Soil"],
  [568,"Dig"],
  [569,"Detail"],
  [570,"Most"],
  [571,"Atmosphere"],
  [572,"Car"],
  [573,"Church"],
  [574,"Royal"],
  [575,"Office"],
  [576,"Freedom"],
  [577,"Grade"],
  [578,"Growth"],
  [579,"County"],
  [580,"Feeling"],
  [581,"City"],
  [582,"Emphasis"],
  [583,"Heat"],
  [584,"Plenty"],
  [585,"Pain"],
  [586,"Story"],
  [587,"Leather"],
  [588,"Refrigerator"],
  [589,"Apartment"],
  [590,"Picture"],
  [591,"Earth"],
  [592,"Touch"],
  [593,"Spirit"],
  [594,"Blind"],
  [595,"Pen"],
  [596,"Brief"],
  [597,"Presence"],
  [598,"Background"],
  [599,"Country"],
  [600,"Consideration"],
  [601,"Carpet"],
  [602,"Kill"],
  [603,"Anybody"],
  [604,"Script"],
  [605,"Historian"],
  [606,"Item"],
  [607,"Promotion"],
  [608,"Hand"],
  [609,"Track"],
  [610,"Valuable"],
  [611,"Passage"],
  [612,"Look"],
  [613,"National"],
  [614,"Representative"],
  [615,"Shock"],
  [616,"Communication"],
  [617,"Limit"],
  [618,"War"],
  [619,"Boyfriend"],
  [620,"Painting"],
  [621,"Month"],
  [622,"Trade"],
  [623,"Wine"],
  [624,"Director"],
  [625,"Crack"],
  [626,"Document"],
  [627,"Throat"],
  [628,"Support"],
  [629,"Level"],
  [630,"Life"],
  [631,"Week"],
  [632,"Middle"],
  [633,"Management"],
  [634,"Answer"],
  [635,"Other"],
  [636,"Steal"],
  [637,"Special"],
  [638,"Scheme"],
  [639,"Lawyer"],
  [640,"Letter"],
  [641,"Intention"],
  [642,"Hold"],
  [643,"Lab"],
  [644,"Comfort"],
  [645,"Flower"],
  [646,"Affair"],
  [647,"Potential"],
  [648,"Break"],
  [649,"Difference"],
  [650,"Preference"],
  [651,"Decision"],
  [652,"Spend"],
  [653,"Cup"],
  [654,"Chest"],
  [655,"She"],
  [656,"Health"],
  [657,"Cow"],
  [658,"Professional"],
  [659,"Republic"],
  [660,"Initial"],
  [661,"Profile"],
  [662,"Common"],
  [663,"Pin"],
  [664,"Phrase"],
  [665,"Desire"],
  [666,"Policy"],
  [667,"Go"],
  [668,"Shine"],
  [669,"Stock"],
  [670,"Incident"],
  [671,"Junior"],
  [672,"Solid"],
  [673,"Entry"],
  [674,"Fruit"],
  [675,"Stretch"],
  [676,"School"],
  [677,"Public"],
  [678,"Customer"],
  [679,"Spot"],
  [680,"Following"],
  [681,"Good"],
  [682,"Post"],
  [683,"Low"],
  [684,"Grandmother"],
  [685,"Bonus"],
  [686,"Nose"],
  [687,"Master"],
  [688,"Parent"],
  [689,"Objective"],
  [690,"Father"],
  [691,"Treat"],
  [692,"State"],
  [693,"General"],
  [694,"Specialist"],
  [695,"Curve"],
  [696,"Bar"],
  [697,"Female"],
  [698,"Relation"],
  [699,"Energy"],
  [700,"Use"],
  [701,"Marriage"],
  [702,"Dimension"],
  [703,"Delivery"],
  [704,"Obligation"],
  [705,"Soup"],
  [706,"Library"],
  [707,"Mistake"],
  [708,"Blame"],
  [709,"Stress"],
  [710,"Psychology"],
  [711,"Row"],
  [712,"Guy"],
  [713,"Dance"],
  [714,"Drawer"],
  [715,"Simple"],
  [716,"Comparison"],
  [717,"Power"],
  [718,"Tower"],
  [719,"Surround"],
  [720,"Birth"],
  [721,"Awareness"],
  [722,"Play"],
  [723,"Air"],
  [724,"Nerve"],
  [725,"Ice"],
  [726,"Mom"],
  [727,"Blood"],
  [728,"Tea"],
  [729,"Education"],
  [730,"Smile"],
  [731,"Bag"],
  [732,"Solution"],
  [733,"Protection"],
  [734,"Importance"],
  [735,"Tour"],
  [736,"Salad"],
  [737,"Teaching"],
  [738,"Housing"],
  [739,"Team"],
  [740,"Stop"],
  [741,"Ride"],
  [742,"Edge"],
  [743,"Work"],
  [744,"Reveal"],
  [745,"Fear"],
  [746,"Trash"],
  [747,"Coffee"],
  [748,"Case"],
  [749,"Virus"],
  [750,"Music"],
  [751,"Opening"],
  [752,"Message"],
  [753,"Jump"],
  [754,"Weekend"],
  [755,"Love"],
  [756,"Guest"],
  [757,"College"],
  [758,"Depth"],
  [759,"Software"],
  [760,"Chip"],
  [761,"Equivalent"],
  [762,"Society"],
  [763,"Spread"],
  [764,"Male"],
  [765,"Shelter"],
  [766,"Crash"],
  [767,"Garbage"],
  [768,"Theory"],
  [769,"Revenue"],
  [770,"Demand"],
  [771,"Hurt"],
  [772,"Film"],
  [773,"Gear"],
  [774,"Appearance"],
  [775,"Dinner"],
  [776,"Park"],
  [777,"Battle"],
  [778,"Example"],
  [779,"Failure"],
  [780,"Pipe"],
  [781,"Establishment"],
  [782,"Travel"],
  [783,"Extreme"],
  [784,"Yard"],
  [785,"Lake"],
  [786,"Football"],
  [787,"Hire"],
  [788,"Quantity"],
  [789,"Peace"],
  [790,"Tale"],
  [791,"Goal"],
  [792,"Wonder"],
  [793,"Design"],
  [794,"Material"],
  [795,"Effect"],
  [796,"Rock"],
  [797,"Committee"],
  [798,"House"],
  [799,"Future"],
  [800,"Response"],
  [801,"Employer"],
  [802,"Gene"],
  [803,"Burn"],
  [804,"Fix"],
  [805,"Menu"],
  [806,"Collection"],
  [807,"Audience"],
  [808,"Wheel"],
  [809,"Song"],
  [810,"South"],
  [811,"Sail"],
  [812,"Agent"],
  [813,"Source"],
  [814,"Employ"],
  [815,"Gas"],
  [816,"Buyer"],
  [817,"Knife"],
  [818,"Bath"],
  [819,"Drop"],
  [820,"Calm"],
  [821,"Roll"],
  [822,"Temperature"],
  [823,"Unit"],
  [824,"Thing"],
  [825,"Dare"],
  [826,"Tax"],
  [827,"Paint"],
  [828,"Benefit"],
  [829,"Mention"],
  [830,"Chemical"],
  [831,"Control"],
  [832,"Key"],
  [833,"Vegetable"],
  [834,"Heart"],
  [835,"Mission"],
  [836,"Initiative"],
  [837,"Uncle"],
  [838,"Midnight"],
  [839,"Contract"],
  [840,"Plant"],
  [841,"Combine"],
  [842,"Champion"],
  [843,"Sir"],
  [844,"Responsibility"],
  [845,"Sex"],
  [846,"Score"],
  [847,"Shake"],
  [848,"Comfortable"],
  [849,"Newspaper"],
  [850,"Impression"],
  [851,"Piano"],
  [852,"Season"],
  [853,"Bike"],
  [854,"Appointment"],
  [855,"Pay"],
  [856,"Army"],
  [857,"Rub"],
  [858,"Elevator"],
  [859,"Impact"],
  [860,"Art"],
  [861,"Exercise"],
  [862,"Damage"],
  [863,"Climate"],
  [864,"Lift"],
  [865,"Transition"],
  [866,"Habit"],
  [867,"Opinion"],
  [868,"Fuel"],
  [869,"Reach"],
  [870,"Inside"],
  [871,"Vast"],
  [872,"Expression"],
  [873,"Snow"],
  [874,"Red"],
  [875,"Station"],
  [876,"Cross"],
  [877,"Balance"],
  [878,"Tap"],
  [879,"Fee"],
  [880,"Role"],
  [881,"Time"],
  [882,"Major"],
  [883,"River"],
  [884,"Couple"],
  [885,"Increase"],
  [886,"Complex"],
  [887,"Tradition"],
  [888,"Recipe"],
  [889,"Mobile"],
  [890,"Designer"],
  [891,"Wake"],
  [892,"Mud"],
  [893,"Cigarette"],
  [894,"Mirror"],
  [895,"Union"],
  [896,"Income"],
  [897,"Kick"],
  [898,"Exit"],
  [899,"Brother"],
  [900,"Network"],
  [901,"Breast"],
  [902,"Signature"],
  [903,"Club"],
  [904,"Video"],
  [905,"Town"],
  [906,"Creative"],
  [907,"Description"],
  [908,"Half"],
  [909,"Remote"],
  [910,"Outside"],
  [911,"Mail"],
  [912,"Call"],
  [913,"Information"],
  [914,"Concert"],
  [915,"Hour"],
  [916,"Total"],
  [917,"Blow"],
  [918,"Feel"],
  [919,"Priest"],
  [920,"Extent"],
  [921,"Estate"],
  [922,"Might"],
  [923,"Range"],
  [924,"March"],
  [925,"Possible"],
  [926,"Register"],
  [927,"Two"],
  [928,"Tourist"],
  [929,"Survey"],
  [930,"Purchase"],
  [931,"Guarantee"],
  [932,"Buddy"],
  [933,"Towel"],
  [934,"Watch"],
  [935,"Breakfast"],
  [936,"Ear"],
  [937,"Negotiation"],
  [938,"Medium"],
  [939,"Classic"],
  [940,"Attempt"],
  [941,"If"],
  [942,"Secretary"],
  [943,"Classroom"],
  [944,"Poetry"],
  [945,"Exchange"],
  [946,"Present"],
  [947,"Minute"],
  [948,"Personality"],
  [949,"Resort"],
  [950,"Leadership"],
  [951,"Cause"],
  [952,"Hope"],
  [953,"Clock"],
  [954,"Land"],
  [955,"Candy"],
  [956,"President"],
  [957,"Service"],
  [958,"Square"],
  [959,"Hurry"],
  [960,"Friendship"],
  [961,"Lesson"],
  [962,"Run"],
  [963,"Girlfriend"],
  [964,"Water"],
  [965,"Hello"],
  [966,"Space"],
  [967,"Today"],
  [968,"Jacket"],
  [969,"Cake"],
  [970,"Chart"],
  [971,"Cover"],
  [972,"Spiritual"],
  [973,"Bother"],
  [974,"Flight"],
  [975,"Stupid"],
  [976,"Enthusiasm"],
  [977,"Particular"],
  [978,"Code"],
  [979,"Photo"],
  [980,"Employment"],
  [981,"Body"],
  [982,"Conflict"],
  [983,"Presentation"],
  [984,"Base"],
  [985,"Operation"],
  [986,"Muscle"],
  [987,"Scale"],
  [988,"Angle"],
  [989,"Primary"],
  [990,"Engine"],
  [991,"Positive"],
  [992,"Argument"],
  [993,"Yesterday"],
  [994,"Blank"],
  [995,"Rate"],
  [996,"Sale"],
  [997,"Belt"],
  [998,"Confusion"],
  [999,"Handle"],
  [1000,"Title"],
  [1001,"Bunch"],
  [1002,"Log"],
  [1003,"Meet"],
  [1004,"International"],
  [1005,"Instruction"],
  [1006,"Command"],
  [1007,"Tough"],
  [1008,"Pop"],
  [1009,"Discussion"],
  [1010,"Temporary"],
  [1011,"Soft"],
  [1012,"Section"],
  [1013,"Window"],
  [1014,"Profession"],
  [1015,"Topic"],
  [1016,"Match"],
  [1017,"Display"],
  [1018,"Status"],
  [1019,"Swim"],
  [1020,"Craft"],
  [1021,"Oil"],
  [1022,"Candle"],
  [1023,"Child"],
  [1024,"Sick"],
  [1025,"Beer"],
  [1026,"People"],
  [1027,"Meeting"],
  [1028,"Dark"],
  [1029,"Credit"],
  [1030,"Exam"],
  [1031,"Bad"],
  [1032,"Success"],
  [1033,"Entrance"],
  [1034,"Private"],
  [1035,"Internet"],
  [1036,"Share"],
  [1037,"Permit"],
  [1038,"Rush"],
  [1039,"Surprise"],
  [1040,"Substance"],
  [1041,"Alarm"],
  [1042,"Injury"],
  [1043,"Candidate"],
  [1044,"Wear"],
  [1045,"Target"],
  [1046,"Warning"],
  [1047,"Application"],
  [1048,"Abuse"],
  [1049,"Assist"],
  [1050,"List"],
  [1051,"District"],
  [1052,"Task"],
  [1053,"Speaker"],
  [1054,"Daughter"],
  [1055,"Quote"],
  [1056,"Commercial"],
  [1057,"Sea"],
  [1058,"Highway"],
  [1059,"Attention"],
  [1060,"Understanding"],
  [1061,"Man"],
  [1062,"Grand"],
  [1063,"Can"],
  [1064,"Smell"],
  [1065,"Driver"],
  [1066,"Celebration"],
  [1067,"Agency"],
  [1068,"Woman"],
  [1069,"Upstairs"],
  [1070,"Contribution"],
  [1071,"Dad"],
  [1072,"Counter"],
  [1073,"Effort"],
  [1074,"Internal"],
  [1075,"Grass"],
  [1076,"Joint"],
  [1077,"Pound"],
  [1078,"Sister"],
  [1079,"Teacher"],
  [1080,"Text"],
  [1081,"Deep"],
  [1082,"Roof"],
  [1083,"Trick"],
  [1084,"Hole"],
  [1085,"Distance"],
  [1086,"Debate"],
  [1087,"Opposite"],
  [1088,"Inspector"],
  [1089,"Golf"],
  [1090,"Conversation"],
  [1091,"Welcome"],
  [1092,"Writer"],
  [1093,"Give"],
  [1094,"Catch"],
  [1095,"Review"],
  [1096,"Native"],
  [1097,"Mine"],
  [1098,"Region"],
  [1099,"Traffic"],
  [1100,"Product"],
  [1101,"Try"],
  [1102,"Bread"],
  [1103,"Knee"],
  [1104,"Crazy"],
  [1105,"Term"],
  [1106,"Setting"],
  [1107,"Guide"],
  [1108,"Organization"],
  [1109,"Familiar"],
  [1110,"Physics"],
  [1111,"Truth"],
  [1112,"Cheek"],
  [1113,"Possibility"],
  [1114,"Fish"],
  [1115,"Mode"],
  [1116,"Double"],
  [1117,"Concept"],
  [1118,"Phase"],
  [1119,"Funny"],
  [1120,"Paper"],
  [1121,"Owner"],
  [1122,"Literature"],
  [1123,"Rice"],
  [1124,"Guidance"],
  [1125,"Ladder"],
  [1126,"Weakness"],
  [1127,"Tear"],
  [1128,"Act"],
  [1129,"Map"],
  [1130,"Brain"],
  [1131,"Economy"],
  [1132,"Percentage"],
  [1133,"White"],
  [1134,"Bathroom"],
  [1135,"Dead"],
  [1136,"Tie"],
  [1137,"Guess"],
  [1138,"Train"],
  [1139,"Job"],
  [1140,"Industry"],
  [1141,"Mate"],
  [1142,"Mark"],
  [1143,"Pride"],
  [1144,"Game"],
  [1145,"Front"],
  [1146,"Efficiency"],
  [1147,"Juice"],
  [1148,"Philosophy"],
  [1149,"Due"],
  [1150,"Editor"],
  [1151,"Sand"],
  [1152,"Environment"],
  [1153,"Hat"],
  [1154,"Crew"],
  [1155,"Luck"],
  [1156,"Resolution"],
  [1157,"Back"],
  [1158,"Nasty"],
  [1159,"Advertising"],
  [1160,"Great"],
  [1161,"Formal"],
  [1162,"Advice"],
  [1163,"Savings"],
  [1164,"Western"],
  [1165,"Clothes"],
  [1166,"Hall"],
  [1167,"Bend"],
  [1168,"Period"],
  [1169,"Dog"],
  [1170,"Sleep"],
  [1171,"Spell"],
  [1172,"Swing"],
  [1173,"Smoke"],
  [1174,"Package"],
  [1175,"Dealer"],
  [1176,"Stay"],
  [1177,"Rain"],
  [1178,"Data"],
  [1179,"User"],
  [1180,"Measurement"],
  [1181,"Lady"],
  [1182,"Mall"],
  [1183,"Top"],
  [1184,"Line"],
  [1185,"Band"],
  [1186,"Requirement"],
  [1187,"Twist"],
  [1188,"Taste"],
  [1189,"Penalty"],
  [1190,"Computer"],
  [1191,"Surgery"],
  [1192,"Influence"],
  [1193,"Cat"],
  [1194,"Access"],
  [1195,"Bottle"],
  [1196,"Speed"],
  [1197,"Ordinary"],
  [1198,"Assistant"],
  [1199,"Lack"],
  [1200,"Brown"],
  [1201,"Contact"],
  [1202,"Deal"],
  [1203,"Egg"],
  [1204,"Cancel"],
  [1205,"Silly"],
  [1206,"Shoe"],
  [1207,"Beginning"],
  [1208,"Entertainment"],
  [1209,"Community"],
  [1210,"Dust"],
  [1211,"God"],
  [1212,"Wedding"],
  [1213,"Image"],
  [1214,"Jury"],
  [1215,"Suit"],
  [1216,"Ground"],
  [1217,"Movie"],
  [1218,"Pitch"],
  [1219,"Doctor"],
  [1220,"Award"],
  [1221,"Book"],
  [1222,"Principle"],
  [1223,"Concentrate"],
  [1224,"Administration"],
  [1225,"Safety"],
  [1226,"Adult"],
  [1227,"Walk"],
  [1228,"Turn"],
  [1229,"Thanks"],
  [1230,"Hook"],
  [1231,"Restaurant"],
  [1232,"Sweet"],
  [1233,"Secret"],
  [1234,"Nurse"],
  [1235,"Rest"],
  [1236,"Reference"],
  [1237,"Appeal"],
  [1238,"Program"],
  [1239,"Page"],
  [1240,"Basket"],
  [1241,"Amount"],
  [1242,"Place"],
  [1243,"Independence"],
  [1244,"Truck"],
  [1245,"Bear"],
  [1246,"Charge"],
  [1247,"End"],
  [1248,"Singer"],
  [1249,"Clerk"],
  [1250,"Language"],
  [1251,"Blue"],
  [1252,"Recording"],
  [1253,"Notice"],
  [1254,"Bid"],
  [1255,"Youth"],
  [1256,"Estimate"],
  [1257,"Step"],
  [1258,"Alcohol"],
  [1259,"Eye"],
  [1260,"Article"],
  [1261,"Chicken"],
  [1262,"Wind"],
  [1263,"Ability"],
  [1264,"Imagination"],
  [1265,"Personal"],
  [1266,"Island"],
  [1267,"Voice"],
  [1268,"Novel"],
  [1269,"Theme"],
  [1270,"Stable"],
  [1271,"Slip"],
  [1272,"Layer"],
  [1273,"Drag"],
  [1274,"Aside"],
  [1275,"Engineer"],
  [1276,"Chapter"],
  [1277,"Queen"],
  [1278,"Quit"],
  [1279,"Variety"],
  [1280,"Direction"],
  [1281,"Advantage"],
  [1282,"Honey"],
  [1283,"Cookie"],
  [1284,"Fun"],
  [1285,"Manufacturer"],
  [1286,"Associate"],
  [1287,"Currency"],
  [1288,"Improvement"],
  [1289,"Campaign"],
  [1290,"Husband"],
  [1291,"Young"],
  [1292,"Illegal"],
  [1293,"Join"],
  [1294,"Buy"],
  [1295,"Routine"],
  [1296,"Proposal"],
  [1297,"Star"],
  [1298,"Whereas"],
  [1299,"Drink"],
  [1300,"Grandfather"],
  [1301,"Cream"],
  [1302,"Tension"],
  [1303,"Main"],
  [1304,"Affect"],
  [1305,"Living"],
  [1306,"Sun"],
  [1307,"Slide"],
  [1308,"Pool"],
  [1309,"Finding"],
  [1310,"Peak"],
  [1311,"Factor"],
  [1312,"History"],
  [1313,"Branch"],
  [1314,"Tennis"],
  [1315,"Actor"],
  [1316,"Association"],
  [1317,"Make"],
  [1318,"Variation"],
  [1319,"Finance"],
  [1320,"Partner"],
  [1321,"Farmer"],
  [1322,"Height"],
  [1323,"Note"],
  [1324,"Chain"],
  [1325,"Bite"],
  [1326,"Beyond"],
  [1327,"Rip"],
  [1328,"Pass"],
  [1329,"Subject"],
  [1330,"Seat"],
  [1331,"Explanation"],
  [1332,"Telephone"],
  [1333,"Leading"],
  [1334,"Tell"],
  [1335,"Average"],
  [1336,"Devil"],
  [1337,"Being"],
  [1338,"Flow"],
  [1339,"Mind"],
  [1340,"Area"],
  [1341,"Name"],
  [1342,"Possession"],
  [1343,"Iron"],
  [1344,"Pick"],
  [1345,"Working"],
  [1346,"Salary"],
  [1347,"Request"],
  [1348,"Abroad"],
  [1349,"Past"],
  [1350,"Funeral"],
  [1351,"Fishing"],
  [1352,"Money"],
  [1353,"Indication"],
  [1354,"Coat"],
  [1355,"Performance"],
  [1356,"Press"],
  [1357,"Type"],
  [1358,"Big"],
  [1359,"Pizza"],
  [1360,"Mouth"],
  [1361,"Trouble"],
  [1362,"View"],
  [1363,"Reality"],
  [1364,"Strategy"],
  [1365,"Manager"],
  [1366,"Replacement"],
  [1367,"Quiet"],
  [1368,"Safe"],
  [1369,"Interview"],
  [1370,"Purple"],
  [1371,"Natural"],
  [1372,"Confidence"],
  [1373,"Somewhere"],
  [1374,"Perspective"],
  [1375,"Baseball"],
  [1376,"Parking"],
  [1377,"Evening"],
  [1378,"West"],
  [1379,"Cloud"],
  [1380,"Force"],
  [1381,"Evidence"],
  [1382,"Tank"],
  [1383,"Concern"],
  [1384,"Feed"],
  [1385,"Chemistry"],
  [1386,"Stranger"],
  [1387,"Storm"],
  [1388,"Duty"],
  [1389,"Road"],
  [1390,"Camp"],
  [1391,"Strip"],
  [1392,"Zone"],
  [1393,"Hunt"],
  [1394,"Hit"],
  [1395,"Inspection"],
  [1396,"Struggle"],
  [1397,"Search"],
  [1398,"Calendar"],
  [1399,"Death"],
  [1400,"Till"],
  [1401,"Staff"],
  [1402,"Afternoon"],
  [1403,"Host"],
  [1404,"Girl"],
  [1405,"Show"],
  [1406,"Cook"],
  [1407,"Raw"],
  [1408,"Sing"],
  [1409,"Brilliant"],
  [1410,"Assistance"],
  [1411,"Excitement"],
  [1412,"Sound"],
  [1413,"Constant"],
  [1414,"Forever"],
  [1415,"Current"],
  [1416,"Bell"],
  [1417,"Bus"],
  [1418,"Set"],
  [1419,"Drunk"],
  [1420,"Person"],
  [1421,"Addition"],
  [1422,"Harm"],
  [1423,"Skill"],
  [1424,"Collar"],
  [1425,"Connection"],
  [1426,"Draw"],
  [1427,"Chair"],
  [1428,"Bill"],
  [1429,"Panic"],
  [1430,"Number"],
  [1431,"Ambition"],
  [1432,"Database"],
  [1433,"World"],
  [1434,"King"],
  [1435,"Length"],
  [1436,"Wealth"],
  [1437,"Clue"],
  [1438,"Side"],
  [1439,"Sock"],
  [1440,"Relative"],
  [1441,"Invite"],
  [1442,"Debt"],
  [1443,"Necessary"],
  [1444,"Assumption"],
  [1445,"Class"],
  [1446,"Summer"],
  [1447,"Nail"],
  [1448,"Hotel"],
  [1449,"Tone"],
  [1450,"Garden"],
  [1451,"Government"],
  [1452,"Day"],
  [1453,"Bet"],
  [1454,"Switch"],
  [1455,"Bicycle"],
  [1456,"Speech"],
  [1457,"Fight"],
  [1458,"Position"],
  [1459,"Door"],
  [1460,"Machine"],
  [1461,"Wrap"],
  [1462,"Finger"],
  [1463,"Equipment"],
  [1464,"Round"],
  [1465,"Tune"],
  [1466,"Media"],
  [1467,"Standard"],
  [1468,"Meal"],
  [1469,"Leader"],
  [1470,"Situation"],
  [1471,"League"],
  [1472,"Dump"],
  [1473,"Purpose"],
  [1474,"Block"],
  [1475,"Degree"],
  [1476,"Horror"],
  [1477,"Tip"],
  [1478,"Offer"],
  [1479,"Ruin"],
  [1480,"Normal"],
  [1481,"Piece"],
  [1482,"Physical"],
  [1483,"Stuff"],
  [1484,"Kitchen"],
  [1485,"Shop"],
  [1486,"Refuse"],
  [1487,"Impress"],
  [1488,"East"],
  [1489,"Choice"],
  [1490,"Lip"],
  [1491,"Trainer"],
  [1492,"Whole"],
  [1493,"Suggestion"],
  [1494,"Mood"],
  [1495,"Trip"],
  [1496,"Frame"],
  [1497,"Radio"],
  [1498,"Holiday"],
  [1499,"Criticism"],
  [1500,"Judgment"],
  [1501,"Field"],
  [1502,"Bowl"],
  [1503,"Plastic"],
  [1504,"Preparation"],
  [1505,"Doubt"],
  [1506,"Loan"],
  [1507,"Pot"],
  [1508,"Wish"],
  [1509,"Matter"],
  [1510,"Gather"],
  [1511,"Click"],
  [1512,"Knowledge"],
  [1513,"Rough"],
  [1514,"Fortune"],
  [1515,"Introduction"],
  [1516,"Arrival"],
  [1517,"Toe"],
  [1518,"Address"],
  [1519,"Repair"],
  [1520,"Bug"]
  ];
  return nounArray;
}

function objectifyNounRow(nounRowNum) {
  var nounRow = nounArray[nounRowNum - 1];
  let nounDataObject = {
    rollResult: nounRow[0],
    noun: nounRow[1],
  };
  return nounDataObject;
}

function rollNoun() {
  var nounRollResult = rollDice(1520);
  var noun = objectifyNounRow(nounRollResult);
  var answer = noun.noun;

  return answer;
}

function initializeAdjectiveArray() {
  var adjectiveArray = [
    [1,"What"],
    [2,"Every"],
    [3,"Special"],
    [4,"Winter"],
    [5,"Sufficient"],
    [6,"Nervous"],
    [7,"Brilliant"],
    [8,"Thin"],
    [9,"Various"],
    [10,"Red"],
    [11,"Which"],
    [12,"According"],
    [13,"Medical"],
    [14,"Proof"],
    [15,"Weekly"],
    [16,"Plastic"],
    [17,"Specific"],
    [18,"Big"],
    [19,"Glad"],
    [20,"Outside"],
    [21,"Ill"],
    [22,"Economy"],
    [23,"Trick"],
    [24,"Square"],
    [25,"Significant"],
    [26,"Narrow"],
    [27,"Basic"],
    [28,"Healthy"],
    [29,"Middle"],
    [30,"After"],
    [31,"Suspicious"],
    [32,"Far"],
    [33,"Horror"],
    [34,"Original"],
    [35,"Pure"],
    [36,"Airline"],
    [37,"Any"],
    [38,"Angry"],
    [39,"Expensive"],
    [40,"Local"],
    [41,"Personal"],
    [42,"Purple"],
    [43,"Friendly"],
    [44,"Even"],
    [45,"Ago"],
    [46,"Serious"],
    [47,"Used"],
    [48,"Boring"],
    [49,"Educational"],
    [50,"Express"],
    [51,"Ok"],
    [52,"Corner"],
    [53,"Rare"],
    [54,"Conscious"],
    [55,"Adult"],
    [56,"Terrible"],
    [57,"Select"],
    [58,"Status"],
    [59,"Period"],
    [60,"Weak"],
    [61,"Electrical"],
    [62,"Anxious"],
    [63,"One"],
    [64,"Primary"],
    [65,"Environmental"],
    [66,"Brown"],
    [67,"Agent"],
    [68,"Similar"],
    [69,"Rough"],
    [70,"Both"],
    [71,"Dangerous"],
    [72,"Guilty"],
    [73,"Only"],
    [74,"Daughter"],
    [75,"Unique"],
    [76,"Representative"],
    [77,"Party"],
    [78,"Specialist"],
    [79,"Round"],
    [80,"Active"],
    [81,"Independent"],
    [82,"Psychological"],
    [83,"Lucky"],
    [84,"Small"],
    [85,"Quick"],
    [86,"Extreme"],
    [87,"Strict"],
    [88,"Royal"],
    [89,"Apart"],
    [90,"Comprehensive"],
    [91,"Several"],
    [92,"Brave"],
    [93,"Critical"],
    [94,"Actual"],
    [95,"Remote"],
    [96,"Then"],
    [97,"Motor"],
    [98,"Dependent"],
    [99,"Creative"],
    [100,"Immediate"],
    [101,"Mobile"],
    [102,"National"],
    [103,"Relevant"],
    [104,"Many"],
    [105,"Cheap"],
    [106,"Valuable"],
    [107,"Upstairs"],
    [108,"Rich"],
    [109,"Full"],
    [110,"Nasty"],
    [111,"Hard"],
    [112,"Car"],
    [113,"Afraid"],
    [114,"Otherwise"],
    [115,"Confident"],
    [116,"Famous"],
    [117,"Logical"],
    [118,"Leather"],
    [119,"Informal"],
    [120,"Bitter"],
    [121,"Known"],
    [122,"Plane"],
    [123,"Familiar"],
    [124,"His"],
    [125,"Home"],
    [126,"Inner"],
    [127,"Silly"],
    [128,"Silver"],
    [129,"Willing"],
    [130,"Enough"],
    [131,"West"],
    [132,"Minimum"],
    [133,"Swimming"],
    [134,"Due"],
    [135,"Emotional"],
    [136,"Foreign"],
    [137,"Difficult"],
    [138,"Yellow"],
    [139,"Sweet"],
    [140,"Inevitable"],
    [141,"Wonderful"],
    [142,"High"],
    [143,"Normal"],
    [144,"Particular"],
    [145,"Annual"],
    [146,"Certain"],
    [147,"Poor"],
    [148,"Whole"],
    [149,"Day"],
    [150,"Equivalent"],
    [151,"Kind"],
    [152,"Master"],
    [153,"Cold"],
    [154,"Fast"],
    [155,"Main"],
    [156,"Unable"],
    [157,"Dramatic"],
    [158,"Nearby"],
    [159,"Plus"],
    [160,"Intelligent"],
    [161,"Kitchen"],
    [162,"Resident"],
    [163,"Substantial"],
    [164,"Sure"],
    [165,"South"],
    [166,"Thick"],
    [167,"Solid"],
    [168,"Fresh"],
    [169,"Designer"],
    [170,"Aggressive"],
    [171,"External"],
    [172,"Clear"],
    [173,"Financial"],
    [174,"Bright"],
    [175,"Electronic"],
    [176,"Free"],
    [177,"Huge"],
    [178,"Neat"],
    [179,"Grand"],
    [180,"Extension"],
    [181,"Unhappy"],
    [182,"Hot"],
    [183,"Former"],
    [184,"Vegetable"],
    [185,"Either"],
    [186,"Remarkable"],
    [187,"Beginning"],
    [188,"First"],
    [189,"Busy"],
    [190,"Little"],
    [191,"Internal"],
    [192,"Straight"],
    [193,"Double"],
    [194,"Junior"],
    [195,"Nice"],
    [196,"Maximum"],
    [197,"Key"],
    [198,"Able"],
    [199,"Honest"],
    [200,"Complex"],
    [201,"Pretty"],
    [202,"Another"],
    [203,"Safe"],
    [204,"Individual"],
    [205,"Slow"],
    [206,"Calm"],
    [207,"Fair"],
    [208,"Numerous"],
    [209,"Broad"],
    [210,"Much"],
    [211,"Still"],
    [212,"Necessary"],
    [213,"Recent"],
    [214,"Animal"],
    [215,"Unfair"],
    [216,"Inside"],
    [217,"Initial"],
    [218,"Exact"],
    [219,"Next"],
    [220,"Possible"],
    [221,"Afternoon"],
    [222,"Routine"],
    [223,"Money"],
    [224,"Administrative"],
    [225,"Formal"],
    [226,"Excellent"],
    [227,"Left"],
    [228,"FALSE"],
    [229,"Senior"],
    [230,"Effective"],
    [231,"Fat"],
    [232,"Least"],
    [233,"Direct"],
    [234,"Realistic"],
    [235,"Head"],
    [236,"Pretend"],
    [237,"Simple"],
    [238,"Reasonable"],
    [239,"Visible"],
    [240,"Forward"],
    [241,"Some"],
    [242,"This"],
    [243,"Mean"],
    [244,"Loose"],
    [245,"Separate"],
    [246,"Alone"],
    [247,"Helpful"],
    [248,"Wide"],
    [249,"Mother"],
    [250,"Professional"],
    [251,"That"],
    [252,"Few"],
    [253,"Distinct"],
    [254,"Regular"],
    [255,"Cool"],
    [256,"Tough"],
    [257,"Loud"],
    [258,"Glass"],
    [259,"Proper"],
    [260,"Empty"],
    [261,"Aware"],
    [262,"House"],
    [263,"Young"],
    [264,"Strong"],
    [265,"Accurate"],
    [266,"Sharp"],
    [267,"Useful"],
    [268,"Open"],
    [269,"Private"],
    [270,"Standard"],
    [271,"Stupid"],
    [272,"Comfortable"],
    [273,"Alternative"],
    [274,"Budget"],
    [275,"Federal"],
    [276,"Same"],
    [277,"Interesting"],
    [278,"Suitable"],
    [279,"Efficient"],
    [280,"Successful"],
    [281,"Good"],
    [282,"Drunk"],
    [283,"Salt"],
    [284,"Female"],
    [285,"Commercial"],
    [286,"Hour"],
    [287,"Low"],
    [288,"Dirty"],
    [289,"Downtown"],
    [290,"Pregnant"],
    [291,"Living"],
    [292,"Chemical"],
    [293,"Upset"],
    [294,"Responsible"],
    [295,"Clean"],
    [296,"Joint"],
    [297,"Shot"],
    [298,"Impossible"],
    [299,"Old"],
    [300,"Time"],
    [301,"Lonely"],
    [302,"Right"],
    [303,"Raw"],
    [304,"Previous"],
    [305,"Sad"],
    [306,"Patient"],
    [307,"Holiday"],
    [308,"Crazy"],
    [309,"New"],
    [310,"Opening"],
    [311,"Sensitive"],
    [312,"Incident"],
    [313,"Capable"],
    [314,"Negative"],
    [315,"More"],
    [316,"Embarrassed"],
    [317,"Less"],
    [318,"Funny"],
    [319,"Expert"],
    [320,"Amazing"],
    [321,"Overall"],
    [322,"Common"],
    [323,"Mad"],
    [324,"Dry"],
    [325,"Top"],
    [326,"Front"],
    [327,"Sexual"],
    [328,"Waste"],
    [329,"TRUE"],
    [330,"Obvious"],
    [331,"Technical"],
    [332,"Weird"],
    [333,"Public"],
    [334,"Consistent"],
    [335,"Mission"],
    [336,"Background"],
    [337,"Western"],
    [338,"Potential"],
    [339,"Secure"],
    [340,"Green"],
    [341,"Exciting"],
    [342,"Better"],
    [343,"Scared"],
    [344,"Curious"],
    [345,"General"],
    [346,"Major"],
    [347,"Soft"],
    [348,"Southern"],
    [349,"Natural"],
    [350,"Firm"],
    [351,"Ready"],
    [352,"Present"],
    [353,"Historical"],
    [354,"Sea"],
    [355,"Positive"],
    [356,"Born"],
    [357,"Wise"],
    [358,"Human"],
    [359,"Wrong"],
    [360,"Own"],
    [361,"Other"],
    [362,"Minor"],
    [363,"Heavy"],
    [364,"Visual"],
    [365,"Unusual"],
    [366,"Typical"],
    [367,"Frequent"],
    [368,"Global"],
    [369,"East"],
    [370,"Away"],
    [371,"Great"],
    [372,"Vast"],
    [373,"Last"],
    [374,"Prize"],
    [375,"Physical"],
    [376,"Best"],
    [377,"Plenty"],
    [378,"Sick"],
    [379,"Asleep"],
    [380,"Lower"],
    [381,"Character"],
    [382,"Acceptable"],
    [383,"Ugly"],
    [384,"Subject"],
    [385,"Brief"],
    [386,"Most"],
    [387,"Opposite"],
    [388,"Material"],
    [389,"Past"],
    [390,"Stock"],
    [391,"Happy"],
    [392,"Long"],
    [393,"Ordinary"],
    [394,"Super"],
    [395,"Feeling"],
    [396,"Working"],
    [397,"Choice"],
    [398,"Wild"],
    [399,"Connect"],
    [400,"Appropriate"],
    [401,"Desperate"],
    [402,"Pleasant"],
    [403,"Dear"],
    [404,"Practical"],
    [405,"Minute"],
    [406,"Odd"],
    [407,"Tight"],
    [408,"Strange"],
    [409,"Quiet"],
    [410,"Worth"],
    [411,"Legal"],
    [412,"Live"],
    [413,"Mental"],
    [414,"Fun"],
    [415,"These"],
    [416,"Proud"],
    [417,"Easy"],
    [418,"All"],
    [419,"Dress"],
    [420,"Unlikely"],
    [421,"Traditional"],
    [422,"Evening"],
    [423,"No"],
    [424,"Mountain"],
    [425,"Wooden"],
    [426,"Eastern"],
    [427,"Dead"],
    [428,"Such"],
    [429,"Lost"],
    [430,"Training"],
    [431,"Powerful"],
    [432,"Hungry"],
    [433,"Medium"],
    [434,"Political"],
    [435,"Wine"],
    [436,"Emergency"],
    [437,"Upper"],
    [438,"Chance"],
    [439,"Complete"],
    [440,"Classic"],
    [441,"Popular"],
    [442,"Important"],
    [443,"Alive"],
    [444,"Smart"],
    [445,"Extra"],
    [446,"Spare"],
    [447,"Street"],
    [448,"Slight"],
    [449,"Official"],
    [450,"Gross"],
    [451,"North"],
    [452,"Life"],
    [453,"Cute"],
    [454,"Business"],
    [455,"Tall"],
    [456,"Just"],
    [457,"Available"],
    [458,"Future"],
    [459,"Tiny"],
    [460,"Single"],
    [461,"Action"],
    [462,"Additional"],
    [463,"Spiritual"],
    [464,"Fine"],
    [465,"Existing"],
    [466,"Entire"],
    [467,"Leading"],
    [468,"Game"],
    [469,"Late"],
    [470,"Over"],
    [471,"Final"],
    [472,"Parking"],
    [473,"Large"],
    [474,"Signal"],
    [475,"Correct"],
    [476,"Decent"],
    [477,"Sudden"],
    [478,"Level"],
    [479,"Competitive"],
    [480,"Real"],
    [481,"Savings"],
    [482,"Equal"],
    [483,"Usual"],
    [484,"Close"],
    [485,"Each"],
    [486,"Secret"],
    [487,"Content"],
    [488,"Neither"],
    [489,"Latter"],
    [490,"Automatic"],
    [491,"Think"],
    [492,"Smooth"],
    [493,"Fit"],
    [494,"Total"],
    [495,"Objective"],
    [496,"Flat"],
    [497,"Beautiful"],
    [498,"Prior"],
    [499,"Relative"],
    [500,"Impressive"],
    [501,"White"],
    [502,"Temporary"],
    [503,"Constant"],
    [504,"Civil"],
    [505,"Male"],
    [506,"Dark"],
    [507,"Massive"],
    [508,"United"],
    [509,"Severe"],
    [510,"Different"],
    [511,"Warm"],
    [512,"Illegal"],
    [513,"Short"],
    [514,"Work"],
    [515,"Chicken"],
    [516,"International"],
    [517,"Cultural"],
    [518,"Sorry"],
    [519,"Perfect"],
    [520,"Novel"],
    [521,"Native"],
    [522,"Ideal"],
    [523,"Deep"],
    [524,"Careful"],
    [525,"Capital"],
    [526,"Current"],
    [527,"Gold"]
  ];
  return adjectiveArray;
}

function objectifyAdjectiveRow(adjectiveRowNum) {
  var adjectiveRow = adjectiveArray[adjectiveRowNum - 1];
  let adjectiveDataObject = {
    rollResult: adjectiveRow[0],
    adjective: adjectiveRow[1],
  };
  return adjectiveDataObject;
}

function rollAdjective() {
  var adjectiveRollResult = rollDice(527);
  var adjective = objectifyAdjectiveRow(adjectiveRollResult);
  var answer = adjective.adjective;

  return answer;
}

function getWordTypesSelected() {
  var isVerbsSelected = document.getElementById("verb-toggle").classList.contains("toggle-selected");
  var isNounsSelected = document.getElementById("noun-toggle").classList.contains("toggle-selected");
  var isAdjectivesSelected = document.getElementById("adjective-toggle").classList.contains("toggle-selected");
  
  let wordTypes = [];

  if(isVerbsSelected === false && isNounsSelected === false && isAdjectivesSelected === false) {
    wordTypes.push("none");
    return wordTypes;
  }

  if(isVerbsSelected === true) {
    wordTypes.push("verbs");
  }
  if(isNounsSelected === true) {
    wordTypes.push("nouns");
  }
  if(isAdjectivesSelected === true) {
    wordTypes.push("adjectives");
  }
  return wordTypes;
}

function rollPortent() {
  
  var wordCount = document.getElementById("portent-word-number-modifier").value
  var wordTypes = getWordTypesSelected();
  var portent = "";

  if(wordTypes.includes("none")) {
    portent = "You must select one or more word types for a Portent.";
    return portent;
  }

  for(let i = 0; i < wordCount; i++) {

    var randomWordType = wordTypes[Math.floor(Math.random() * wordTypes.length)];

    switch(randomWordType) {
      case "verbs":
      portent += rollVerb();
        break;
      case "nouns":
        portent += rollNoun();
        break;
      case "adjectives":
        portent += rollAdjective();
        break;
    }

    if((i + 1) < wordCount) {
      portent += "<br /><br />";
    }
  }
  return portent;
}



/******* PORTENT END ***********/