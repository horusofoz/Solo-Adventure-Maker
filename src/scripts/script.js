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
var verbArray = initializeVerbArray();

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

  // Oracle Elements
  var muneQuestionRoller = document.getElementById("mune-question-roller");
  var muneInterventionRoller = document.getElementById("mune-intervention-roller");
  var muneTwneneRoller = document.getElementById("mune-twene-roller");
  var satQuestionRoller = document.getElementById("sat-question-roller");
  var portentRoller = document.getElementById("portent-roller");
  var oracleContentLabel = document.getElementById("oracle-content-label");
  var oracleContentResult = document.getElementById("oracle-content-result");

  // Encounter Elements
  var encounterUrbanRoller = document.getElementById("urban-encounter-roller");
  var encounterWildernessRoller = document.getElementById("wilderness-encounter-roller");
  var encounterContentLabel = document.getElementById("encounter-content-label");
  var encounterContentResult = document.getElementById("encounter-content-result");

  // Tab buttons
  var tabButtonDungeon = document.getElementById("tab-button-dungeon");
  var tabButtonQuest = document.getElementById("tab-button-quest");
  var tabButtonOracle = document.getElementById("tab-button-oracle");
  var tabButtonEncounter = document.getElementById("tab-button-encounter");
  var tabButtonHelp = document.getElementById("tab-button-help");

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

portentRoller.onclick = function() {
  var portent = rollPortent();

  oracleContentLabel.innerHTML = "Portent";
  oracleContentResult.innerHTML = portent;
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

  tabButtonEncounter.onclick = function() {
    switchTabs("tab-encounter");
    return false;
  }

  tabButtonHelp.onclick = function() {
    switchTabs("tab-help");
    return false;
  }

  tabButtonDungeon.click();

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
    [22,"Stones patterned in a directional arrow with the words Help me under it."],
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
      break;
    case 2:
      interventionType = "Entity positive";
      break;
    case 3:
      interventionType = "Entity negative";
      break;
    case 4:
      interventionType = "Advance plot";
      break;
    case 5:
      interventionType = "Regress plot";
      break;
    case 6:
      interventionType = "Wild";
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
    [239,"Help"],
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

function rollPortent() {
  var word1 = rollVerb();
  var word2 = rollVerb();

  var portent = word1 + " " + word2;
  return portent;
}

/****** ORACLE END *********/


/******* ENCOUNTER START ***********/

function initializeUrbanEncounterArray() {
  var encounterUrbanArray = [
    [1,"You witness a crime and they have a chance to stop the criminal. If you do, you win the favor of the local constabulary. If you try to but fail, the guard gives you an opportunity to help track down the criminal. If you do nothing, you must convince the guard you are not an accomplice."],
    [2,"Stampede of pigs"],
    [3,"A cry rings out through the town. “An army is massing outside the gates!” Are they human, orc, mind flayer? You had better go and find out, or flee right now!"],
    [4,"A mysterious hooded beggar conspicuously ducks into an alley as they walk by - they appeared to have a disfigurement. Perhaps they were just trying to hide from people."],
    [5,"A guided tour proceeds past, as the guide drops a particularly tasty snippet of local knowledge which the PC was unaware of."],
    [6,"A shady figure beckons from an alley. They have wondrous items for sale, they say."],
    [7,"Two old ladies, witches of some sort by the look of them, beg you to take a creature off their hands. (Roll Creature Table, Chapter 14). “It never shuts up!” they tell you. “Please, we’ll pay you! We just want to be rid of the damnded thing!” The creature is the trapped soul of a former adventurer..."],
    [8,"Two men are arguing about something. One turns to a PC and says, "],
    [9,"Quest board with rewards for deeds done. Someone has rats in their cellar, missing townsperson in the woods neaby, simple things (or complex!) that give you little things to do that keep you exploring the city, making contacts, and earning gold/interesting items. Use Chapter 14 tables or Q/A rolls to generate."],
    [10,"A card shark/con artist is busking in the street, a large crowd gathers."],
    [11,"Two local thugs are strong arming a merchant for gold. You can help the merchant, but doing so annoys the local gang. Variation: The merchant is a thief, and the thugs are trying to recover their stolen money."],
    [12,"You notice a group of villagers attempting to put out a nearby house fire. This looks like it could easily spread to neighbouring houses, possibly affecting the whole town."],
    [13,"A peddler attempts to sell you a trinket or minor magic item."],
    [14,"A giant rat crawls out of a storm drain and gets into a fight with a dog."],
    [15,"Minor earthquake shakes things up and in the ensuing panic looters take advantage. Does the party join them, or stop them?"],
    [16,"Merchant asking for help stopping local children with slingshots."],
    [17,"A young urchin is in an ally, cornered by either thugs or stray dogs."],
    [18,"Street is having a block party tomorrow and need help setting up."],
    [19,"Someone sentenced to death: You happen across the hanging/beheading scene before it concludes, what do you do?"],
    [20,"Monster: Level appropriate easy encounter."],
    [21,"Monster: Level appropriate easy encounter."],
    [22,"Monster: Level appropriate easy encounter."],
    [23,"Monster: Level appropriate easy encounter."],
    [24,"Monster: Level appropriate easy encounter."],
    [25,"Monster: Level appropriate easy encounter."],
    [26,"A con man is selling jewels and rare components that you might need."],
    [27,"A chamber pot is emptied from above. Make a DC 13 dex save to avoid. If unsuccessful, you disadvantage all charisma and stealth related rolls until you have a bath and change clothes. (Optional: make a con save vs filth fever)."],
    [28,"A scrap of paper is pressed into your hand by a young man, who looks at you desperately before turning and running away. You turn over the note and read it. “Please help, he’s coming for us all!”"],
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
    [43,"A man tumbles out a tavern window. He’s fully dressed in nobleman’s garb. A female half-orc jumps out after him, letting out a warcry as he gets up and runs for his life screaming for help. Do you help her and run him down or do you get in her way? Possible: No matter who you help they both begin attacking you!"],
    [44,"A street dog runs past with a human hand in its mouth - wearing a large, very obvious jeweled ring. Dog chase or find out what happened to the owner of the ring (and hand)."],
    [45,"Someone's horse is spooked and charges through the streets. whether it’s dragging a wagon or just a rider, it is panicked and needs to be stopped."],
    [46,"You find a map, discarded, on the street, or just a fragment of one, which arouses your curiosity. It shows a ruin, and there is a sketch of an artifact. Magical? Perhaps a local mage could help you decode this..."],
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
    [89,"A distraught mother cannot find her child and is convinced it has been kidnapped. She is moving from person to person, begging for help."],
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


/******* ENCOUNTER END ***********/