var roomLayoutArray = initializeRoomArray();
var roomContentArray = initializeRoomContentArray();
var passageLayoutArray = initializePassageLayoutArray();
var passageContentArray = initializePassageContentArray();
var doorArray = initializeDoorArray();
var leadsToArray = initializeLeadsToArray();
var trapArray = initializeTrapArray();
var dungeonSizeArray = initializeDungeonSizeArray();
var dungeonTypeArray = initializeDungeonTypeArray();
var dungeonStartArray = initializeDungeonStartArray();
var stairArray = initializeStairArray();

window.onload = function() {

  // Button elements
  var roomRoller = document.getElementById("room-roller");
  var passageRoller = document.getElementById("passage-roller");
  var doorRoller = document.getElementById("door-roller");
  var trapRoller = document.getElementById("trap-roller");
  var dungeonRoller = document.getElementById("dungeon-roller");
  var stairRoller = document.getElementById("stair-roller");

  // Result elements
  var contentLabel = document.getElementById("content-label");
  var contentResult = document.getElementById("content-result");


  roomRoller.onclick = function() {

    var room = rollRoom();
    contentLabel.innerHTML = "Room";
    contentResult.innerHTML = room.layout;
    contentResult.innerHTML += room.content;

    return false;
  }

  passageRoller.onclick = function() {
    var passage = rollPassage();
    contentLabel.innerHTML = "Passage";
    contentResult.innerHTML = passage.layout;
    contentResult.innerHTML += passage.content;

    return false;
  }

  doorRoller.onclick = function() {
    var door = rollDoor();
    contentLabel.innerHTML = "Door";
    contentResult.innerHTML = door;

    return false;
  }

  trapRoller.onclick = function() {
    var trap = rollTrap();
    contentLabel.innerHTML = "Trap";
    contentResult.innerHTML = trap;

    return false;
  }

  dungeonRoller.onclick = function() {
    var dungeon = rollDungeon();
    contentLabel.innerHTML = "Dungeon";
    contentResult.innerHTML = dungeon;

    return false;
  }

  stairRoller.onclick = function() {
    var stair = rollStair();
    contentLabel.innerHTML = "Stair";
    contentResult.innerHTML = stair;

    return false;
  }

  return false;
}

/*********   SHARED START *********/

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

/*********   SHARED END   *********/


/*********   ROOM START *********/

function rollRoom() {

  var roomLayoutRollResult = rollDice(20);
  var roomLayoutDataObject = objectifyRoomLayoutRow(roomLayoutRollResult);

  var roomContentRollResult = rollDice(20);
  var roomContentDataObject = objectifyRoomContentRow(roomContentRollResult);

  let room = {
    layout: setRoomLayout(roomLayoutDataObject),
    content: setRoomContent(roomContentDataObject)
  }

  return room;
}

function setRoomContent(roomContentDataObject) {

  console.log("Room Content Table Row:\n" + JSON.stringify(roomContentDataObject));

  var roomContentString = ""

  if (roomContentDataObject.encounter !== "") {
    roomContentString += "<br />" + roomContentDataObject.encounter;
  }

  var isThereLoot = rollPercentile(roomContentDataObject.loot);
  if (isThereLoot) {
    roomContentString += "<br />Loot found";
  }

  var isThereClue = rollPercentile(roomContentDataObject.clue);
  if (isThereClue) {
    roomContentString += "<br />Clue found";
  }

  var isThereSecretDoor = rollPercentile(roomContentDataObject.secretDoor);
  if (isThereSecretDoor) {
    roomContentString += "<br />Secret Door found";
  }

  var isThereRandomFeature = rollPercentile(roomContentDataObject.randomFeature);
  if (isThereRandomFeature) {
    roomContentString += "<br />Random Feature found";
  }

  if (roomContentDataObject.hazard !== "") {
    roomContentString += "<br />Hazard encountered - " + roomContentDataObject.hazard;
  }

  if (roomContentDataObject.event !== "") {
    roomContentString += "<br />Event encountered - " + roomContentDataObject.event;
  }

  if (roomContentDataObject.note !== "") {
    roomContentString += "<br />" + roomContentDataObject.note;
  }

  return roomContentString;
}

function setRoomLayout(roomLayoutDataObject) {
  var roomLayoutSize = rollRoomSize(roomLayoutDataObject);
  var roomLayoutExits = rollExits(roomLayoutDataObject);
  var roomLayoutExitTypes = rollExitTypes(roomLayoutExits);
  var roomLayoutShape = roomLayoutDataObject.shape;

  var roomLayoutString = roomLayoutSize + " " + roomLayoutShape;

  if (roomLayoutExits === 0) {
    roomLayoutString += "<br />No exits.";
    return roomLayoutString;
  }

  if (roomLayoutExitTypes.doors > 0 && roomLayoutExitTypes.passages > 0) {
    roomLayoutString += "<br />" + roomLayoutExitTypes.doors + " doors and " + roomLayoutExitTypes.passages + " passages.";
    return roomLayoutString;
  }

  if (roomLayoutExitTypes.doors > 0) {
    roomLayoutString += "<br />" + roomLayoutExitTypes.doors + " doors.";
    return roomLayoutString;
  }

  if (roomLayoutExitTypes.passages > 0) {
    roomLayoutString += "<br />" + roomLayoutExitTypes.passages + " passages.";
    return roomLayoutString;
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
    [1, "1-4", "Enemies! Deadly Encounter.", 45, 75, "", "", "", "", "Roll DMG Loot table appropriate to encounter.", "Level appropriate Deadly Encounter. Loot 45%, Clue 75%. Roll DMG Loot table appropriate to encounter."],
    [2, "1-4", "Enemies! Deadly Encounter.", 45, 75, "", "", "", "", "Roll DMG Loot table appropriate to encounter.", "Level appropriate Deadly Encounter. Loot 45%, Clue 75%. Roll DMG Loot table appropriate to encounter."],
    [3, "1-4", "Enemies! Deadly Encounter.", 45, 75, "", "", "", "", "Roll DMG Loot table appropriate to encounter.", "Level appropriate Deadly Encounter. Loot 45%, Clue 75%. Roll DMG Loot table appropriate to encounter."],
    [4, "1-4", "Enemies! Deadly Encounter.", 45, 75, "", "", "", "", "Roll DMG Loot table appropriate to encounter.", "Level appropriate Deadly Encounter. Loot 45%, Clue 75%. Roll DMG Loot table appropriate to encounter."],
    [5, "5-8", "", "", "", "", "", "", "", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
    [6, "5-8", "", "", "", "", "", "", "", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
    [7, "5-8", "", "", "", "", "", "", "", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
    [8, "5-8", "", "", "", "", "", "", "", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room.", "Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."],
    [9, "9-12", "Enemies! Easy Encounter.", "", "", "", "", "", "", "Low level minions of the BBEG in this room.", "Low level minions of the BBEG in this room. Level appropriate easy encounter."],
    [10, "9-12", "Enemies! Easy Encounter.", "", "", "", "", "", "", "Low level minions of the BBEG in this room.", "Low level minions of the BBEG in this room. Level appropriate easy encounter."],
    [11, "9-12", "Enemies! Easy Encounter.", "", "", "", "", "", "", "Low level minions of the BBEG in this room.", "Low level minions of the BBEG in this room. Level appropriate easy encounter."],
    [12, "9-12", "Enemies! Easy Encounter.", "", "", "", "", "", "", "Low level minions of the BBEG in this room.", "Low level minions of the BBEG in this room. Level appropriate easy encounter."],
    [13, "13-20", "", "", "", "", "", "Quicksand", "", "DMG 110", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [14, "13-20", "Enemies! Medium Encounter.", "", "", "", "", "Shrieker", "", "Treat as level appropriate medium encounter MM138", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [15, "13-20", "", "", "", "", "", "Trap", "", "", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [16, "13-20", "Enemies! Easy Encounter.", "", "", "", "", "Violet fungus", "", "Treat as level appropriate easy encounter MM138", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [17, "13-20", "Enemies! Medium Encounter.", "", "", "", "", "", "", "", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [18, "13-20", "", "", "", "", "", "Brown mold", "", "DMG 105", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [19, "13-20", "", "", "", "", "", "Green slime", "", "DMG 105", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [20, "13-20", "", "", "", "", "", "Yellow slime", "", "DMG 105", "Dungeon Hazard. 1: sinkhole, 2: fungus, 3: trap, 4: collapsing masonry or other natural hazard, 5: wandering monster, medium difficulty, 6: Player’s choice."],
    [21, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [22, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [23, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [24, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [25, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [26, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [27, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [28, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [29, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [30, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [31, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [32, "21-32", "Enemies! Hard Encounter.", 30, 30, 30, 30, "", "", "", "Level appropriate Hard Encounter (see Chapter 16). Clue, Loot, Random, SD all 30%."],
    [33, "33-36", "", "", "", "", "", "", "NPC in room investigating.", "Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.", "NPC in room investigating. Roll again to find out what they are investigating."],
    [34, "33-36", "", "", "", "", "", "", "NPC in room investigating.", "Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.", "NPC in room investigating. Roll again to find out what they are investigating."],
    [35, "33-36", "", "", "", "", "", "", "NPC in room investigating.", "Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.", "NPC in room investigating. Roll again to find out what they are investigating."],
    [36, "33-36", "", "", "", "", "", "", "NPC in room investigating.", "Roll room contents again to find out what they are investigating. Roll QAs to determine course of action.", "NPC in room investigating. Roll again to find out what they are investigating."],
    [37, "37-40", "", 10, "", "", "", "", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.", "Enemy alive, 30%", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it. Enemy alive, 30%. Loot 10%."],
    [38, "37-40", "", 10, "", "", "", "", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.", "Enemy alive, 30%", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it / victim to it. Enemy alive, 30%. Loot 10%."],
    [39, "37-40", "", 10, "", "", "", "", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.", "Enemy alive, 30%", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it / victim to it. Enemy alive, 30%. Loot 10%."],
    [40, "37-40", "", 10, "", "", "", "", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it.", "Enemy alive, 30%", "A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it / victim to it. Enemy alive, 30%. Loot 10%."],
    [41, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [42, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [43, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [44, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [45, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [46, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [47, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [48, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [49, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [50, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [51, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [52, "41-52", "Enemies! Easy Encounter.", 20, 30, 10, "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16) Loot 20%, SD 10%, Clue 30%"],
    [53, "53-56", "", "", "", "", "", "Obstacle", "", "", "Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
    [54, "53-56", "", "", "", "", "", "Obstacle", "", "", "Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
    [55, "53-56", "", "", "", "", "", "Obstacle", "", "", "Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
    [56, "53-56", "", "", "", "", "", "Obstacle", "", "", "Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable. (Alterntively, roll on Obstacles Table, DMG p.297)"],
    [57, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [58, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [59, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [60, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [61, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [62, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [63, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [64, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [65, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [66, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [67, "57-67", "Enemies! Medium Encounter.", 30, 30, 20, "", "", "", "", "Level appropriate Medium Encounter (see Chapter 16) Loot 30%, SD 20%, Clue 30%"],
    [68, "68-71", "Enemies! Hard Encounter.", 50, "", "", "", "", "NPC near death, unconscious.", "NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp.", "NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
    [69, "68-71", "Enemies! Hard Encounter.", 50, "", "", "", "", "NPC near death, unconscious.", "NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp.", "NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
    [70, "68-71", "Enemies! Hard Encounter.", 50, "", "", "", "", "NPC near death, unconscious.", "NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp.", "NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
    [71, "68-71", "Enemies! Hard Encounter.", 50, "", "", "", "", " NPC has fought a powerful creature, and lost, but has damaged it somewhat. NPC near death, unconscious.", "NPC can be enemy or ally. 1d4 levels less than you. Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp.", "NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter. Enemy or enemies reduced to 50% hp. Loot 50%. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat."],
    [72, "72-74", "Enemies! Medium Encounter.", "", "", "", "", "", "Two creatures are engaged in battle. You stumble in just as the battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over?", "Since they are otherwise engaged, you have advantage on stealth checks to creep up. Stealth DDC is the creature's passive perception.", "Two level appropriate ([d4] 1-2: Easy, 3-4: Medium) creatures are engaged in battle with each other. You stumble in just as battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over? Since they are otherwise engaged, you have advantage on stealth checks to creep up. (DC is the creature’s passive perception)"],
    [73, "72-74", "Enemies! Medium Encounter.", "", "", "", "", "", "Two creatures are engaged in battle. You stumble in just as the battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over?", "Since they are otherwise engaged, you have advantage on stealth checks to creep up. Stealth DDC is the creature's passive perception.", "Two level appropriate ([d4] 1-2: Easy, 3-4: Medium) creatures are engaged in battle with each other. You stumble in just as battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over? Since they are otherwise engaged, you have advantage on stealth checks to creep up. (DC is the creature’s passive perception)"],
    [74, "72-74", "Enemies! Easy Encounter.", "", "", "", "", "", "Two creatures are engaged in battle. You stumble in just as the battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over?", "Since they are otherwise engaged, you have advantage on stealth checks to creep up. Stealth DDC is the creature's passive perception.", "Two level appropriate ([d4] 1-2: Easy, 3-4: Medium) creatures are engaged in battle with each other. You stumble in just as battle starts. How do you react? Hide and wait until a victor emerges? What are they fighting over? Since they are otherwise engaged, you have advantage on stealth checks to creep up. (DC is the creature’s passive perception)"],
    [75, "75-76", "", "", "", "", "", "", "Deserted but for some strange runes and symbols on the floor. Magical? Perhaps.", "Roll QA to determine.", "Deserted but for some strange runes and symbols on the floor. Magical? Perhaps."],
    [76, "75-76", "", "", "", "", "", "", "Deserted but for some strange runes and symbols on the floor. Magical? Perhaps.", "Roll QA to determine.", "Deserted but for some strange runes and symbols on the floor. Magical? Perhaps."],
    [77, "77-80", "", "", "", "", 30, "", "NPC  has just defeated a Level Appropriate Deadly Encounter.", "NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.", "Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
    [78, "77-80", "", "", "", "", 30, "", "NPC  has just defeated a Level Appropriate Deadly Encounter.", "NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.", "Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
    [79, "77-80", "", "", "", "", 30, "", "NPC  has just defeated a Level Appropriate Deadly Encounter.", "NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.", "Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
    [80, "77-80", "", "", "", "", 30, "", "NPC  has just defeated a Level Appropriate Deadly Encounter.", "NPC is 2d4 levels higher than your PC. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps. 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. CR of all encounters from here on increases by 1d4 if team up.", "Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter. Roll d4 to determine attitude. 1-2: They tell you to begone, they stake claim to this dungeon and all within it. Will fight if challenged. However, also will agree to split up and go seperate ways, perhaps 3-4: Will team up with you for the remainder of this dungeon, and split the loot, and then will depart. (CR of all encounters from here on increases by 1d4). Random, SD, Trap all 30% Roll on NPC table, skipping professions and going straight to classes. NPC level is determined above."],
    [81, "81-84", "", 30, "", "", "", "", "Room appears empty.", "Mission relevant loot chance 30%.", "Empty. Mission relevant loot chance 30%."],
    [82, "81-84", "", 30, "", "", "", "", "Room appears empty.", "Room appears empty.", "Empty. Mission relevant loot chance 30%."],
    [83, "81-84", "", 30, "", "", "", "", "Room appears empty.", "Room appears empty.", "Empty. Mission relevant loot chance 30%."],
    [84, "81-84", "", 30, "", "", "", "", "Room appears empty.", "Room appears empty.", "Empty. Mission relevant loot chance 30%."],
    [85, "85-88", "Enemies! Easy Encounter.", 30, 30, "", "", "", "", "Roll for potential NPC - 30%", "Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
    [86, "85-88", "Enemies! Easy Encounter.", 30, 30, "", "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
    [87, "85-88", "Enemies! Easy Encounter.", 30, 30, "", "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
    [88, "85-88", "Enemies! Easy Encounter.", 30, 30, "", "", "", "", "", "Level appropriate Easy Encounter (see Chapter 16). Clue, NPC, Boon all 30%"],
    [89, "89-92", "Enemies! Deadly Encounter.", "", "", "", "", "", "A relic. What is it?", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic.", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic."],
    [90, "89-92", "Enemies! Deadly Encounter.", "", "", "", "", "", "", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic.", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic."],
    [91, "89-92", "Enemies! Deadly Encounter.", "", "", "", "", "", "", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic.", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic."],
    [92, "89-92", "Enemies! Deadly Encounter.", "", "", "", "", "", "", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic.", "Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic."],
    [93, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
    [94, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
    [95, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
    [96, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
    [97, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
    [98, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
    [99, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."],
    [100, "93-100", "", 90, "", "", "", "", "BOSS / BBEG / Significant NPC Encounter!", "Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what the event is.", "BOSS / BBEG / Significant NPC Encounter! (Use the details of your story so far, Q/A tables, or Story Element Interaction Tables to determine what). Loot 90%. Roll d20. 1-19: Roll 1d4 times on Individual Treasure Table. 20: Roll once on Hoard Table. (DMG pp. 136-139."]
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
    [1, "Passage continues", "", 0, 4, "none", "none", "multiply", 10, "ft", 5, 0, "", "Passage continues d4 x 10 ft."],
    [2, "Passage continues", "Ends at a door.", 15, 0, "none", "none", "none", 0, "ft", 7, 0, "", "Passage goes 15 ft and ends at door. Go to Door Table."],
    [3, "Passage continues", "Ends at a stair.", 30, 0, "none", "none", "none", 0, "ft", 6, 0, "", "Passage goes 30 ft and ends in stairs. Go to Stairs Table."],
    [4, "Passage continues", "Turns left.", 10, 0, "none", "none", "none", 0, "ft", 5, 0, "", "Passage turns left 90 degrees."],
    [5, "Passage continues", "Turns right.", 10, 0, "none", "none", "none", 0, "ft", 5, 0, "", "Passage turns right 90 degrees."],
    [6, "Passage continues", "Leads to a dead end.", 10, 0, "none", "none", "none", 0, "ft", 8, 40, "secret door", "Passage dead ends. Return to last feature you want to explore. 40% Secret door. Notice DC (investigation) d10+7. If it is there, and found, go to Secret Door Table."],
    [7, "Passage continues", "Leads to a 4 way intersection.", 0, 4, "none", "none", "multiply", 10, "ft", 5, 0, "", "Passage continues 1d4 x 10 ft and comes to a four way intersection"],
    [8, "Passage continues", "Leads to a T-junction.", 0, 4, "none", "none", "multiply", 10, "ft", 5, 0, "", "Passage continues d4 x 10 ft and comes to a T-junction"],
    [9, "Passage continues", "Leads to a side passage on the left.", 0, 6, "none", "none", "multiply", 10, "ft", 5, 0, "", "Passage continues d6 x 10 ft and then you see a side passage leading off to the left"],
    [10, "Passage continues", "Leads to a side passage on the right.", 0, 6, "none", "none", "multiply", 10, "ft", 5, 0, "", "Passage continues d6 x 10 ft and then you see a side passage leading off to the right"],
    [11, "Passage continues", "Leads to an open doorway.", 10, 0, "none", "none", "none", 0, "ft", 3, 0, "", "Passage ends in an open entrance to a room. Go to Room Table"],
    [12, "Passage continues", "Door in left wall.", 15, 0, "none", "none", "none", 0, "ft", 7, 0, "", "Door in right wall. Go to Door Table"],
    [13, "Passage continues", "Door in right wall.", 15, 0, "none", "none", "none", 0, "ft", 7, 0, "", "Door in left wall. Go to Door Table"],
    [14, "Passage continues", "", 15, 0, "none", "none", "none", 0, "ft", 5, 40, "secret door", "Secret door on passage wall (player’s choice which wall). Roll perception DC 15. If successful, go to Secret Door. If not, roll again on Passage Table, continuing along (as your PCs didn’t notice.)"],
    [15, "Passage narrows", "", 10, 0, "none", "none", "none", 0, "ft", 5, 0, "", "Passage narrows (1d6 ÷ 2) x 10 ft. (minimum width 5 ft)"],
    [16, "Passage widens", "", 10, 0, "none", "none", "none", 0, "ft", 5, 0, "", "Passage widens (1d6 ÷ 2) x 10 ft. (minimum width 10 ft)"],
    [17, "Passage continues", "", 15, 0, "none", "none", "none", 0, "ft", 6, 0, "", "Opening to the left, stairs. Go to Stairs table"],
    [18, "Passage continues", "", 15, 0, "none", "none", "none", 0, "ft", 6, 0, "", "Opening to the right, stairs. Go to Stairs table"],
    [19, "Passage continues", "Leads to a dead end.", 15, 0, "none", "none", "none", 0, "ft", 2, 25, "secret door", "Opening in the floor, straight drop down 1d10 x 10 ft to a (1d4 roll) 1-2: Passage 3-4: Room"],
    [20, "Passage continues", "", 10, 0, "none", "none", "none", 0, "ft", 9, 100, "random architecture", "Roll on Random architecture table"]
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
    featureChance: passageLayoutRow[11],
    feature: passageLayoutRow[12],
    fullDescription: passageLayoutRow[13]
  }
  /*
  console.log(JSON.stringify(passageLayoutDataObject));
  */
  return passageLayoutDataObject;
}

function initializePassageContentArray() {
  var passageLayoutArray = [
    [1,"","","","","","","","","Empty"],
    [2,"","","","","","","","","Empty"],
    [3,"","","","","","","","","Empty"],
    [4,"","","","","","","","","Empty"],
    [5,"","","","","","","","","Empty"],
    [6,"","","","","","","","","Empty"],
    [7,"","","","","","","","","Empty"],
    [8,"","","","","","","","","Empty"],
    [9,"","","","","","","","","Empty"],
    [10,"","","","","","","","","Empty"],
    [11,"","","","","","","","","Empty"],
    [12,"","","","","","","","","Empty"],
    [13,"","","","","","","","","Empty"],
    [14,"","","","","","","","","Empty"],
    [15,"","","","","","","","","Empty"],
    [16,"","","","","","","","","Empty"],
    [17,"","","","","","","","","Empty"],
    [18,"","","","","","","","","Empty"],
    [19,"","","","","","","","","Empty"],
    [20,"","","","","","","","","Empty"],
    [21,"","","","","","","","","Empty"],
    [22,"","","","","","","","","Empty"],
    [23,"","","","","","","","","Empty"],
    [24,"","","","","","","","","Empty"],
    [25,"","","","","","","","","Empty"],
    [26,"","","","","","","","","Empty"],
    [27,"","","","","","","","","Empty"],
    [28,"","","","","","","","","Empty"],
    [29,"","","","","","","","","Empty"],
    [30,"","","","","","","","","Empty"],
    [31,"","","","","","","","","Empty"],
    [32,"","","","","","","","","Empty"],
    [33,"","","","","","","","","Empty"],
    [34,"","","","","","","","","Empty"],
    [35,"","","","","","","","","Empty"],
    [36,"","","","","","","","","Empty"],
    [37,"","","","","","","","","Empty"],
    [38,"","","","","","","","","Empty"],
    [39,"","","","","","","","","Empty"],
    [40,"","","","","","","","","Empty"],
    [41,"","","","","","","","","Empty"],
    [42,"","","","","","","","","Empty"],
    [43,"","","","","","","","","Empty"],
    [44,"","","","","","","","","Empty"],
    [45,"","","","","","","","","Empty"],
    [46,"","","","","","","","","Empty"],
    [47,"","","","","","","","","Empty"],
    [48,"","","","","","","","","Empty"],
    [49,"","","","","","","","","Empty"],
    [50,"","","","","","","","","Empty"],
    [51,"","","","","","","","","Empty"],
    [52,"","","","","","","","","Empty"],
    [53,"","","","","","","","","Empty"],
    [54,"","","","","","","","","Empty"],
    [55,"","","","","","","","","Empty"],
    [56,"","","","","","","","","Empty"],
    [57,"","","","","","","","","Empty"],
    [58,"","","","","","","","","Empty"],
    [59,"","","","","","","","","Empty"],
    [60,"","","","","","","","","Empty"],
    [61,"","","","","","","","","Empty"],
    [62,"","","","","","","","","Empty"],
    [63,"","","","","","","","","Empty"],
    [64,"","","","","","","","","Empty"],
    [65,"","","","","","","","","Empty"],
    [66,"","","","","","","","","Empty"],
    [67,"","","","","","","","","Empty"],
    [68,"","","","","","","","","Empty"],
    [69,"","","","","","","","","Empty"],
    [70,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [71,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [72,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [73,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [74,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [75,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [76,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [77,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [78,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [79,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [80,"Empty apart from rubble.","Clue",10,"You found a clue.","","","","","Empty apart from rubble. Clue 10%. Perception check DC 10 to find."],
    [81,"Empty apart from corpse.","Clue",20,"You found a clue.","","","","","Empty apart from corpse. Clue on body 20%."],
    [82,"Empty apart from corpse.","Clue",20,"You found a clue.","","","","","Empty apart from corpse. Clue on body 20%."],
    [83,"Empty apart from corpse.","Clue",20,"You found a clue.","","","","","Empty apart from corpse. Clue on body 20%."],
    [84,"Empty apart from corpse.","Clue",20,"You found a clue.","","","","","Empty apart from corpse. Clue on body 20%."],
    [85,"Empty apart from multiple corpses.","Clue",40,"You found a clue.","","","","","Empty apart from multiple corpses. Clue on a body 40%."],
    [86,"Empty apart from multiple corpses.","Clue",40,"You found a clue.","","","","","Empty apart from multiple corpses. Clue on a body 40%."],
    [87,"Empty apart from multiple corpses.","Clue",40,"You found a clue.","","","","","Empty apart from multiple corpses. Clue on a body 40%."],
    [88,"Empty apart from multiple corpses.","Clue",40,"You found a clue.","","","","","Empty apart from multiple corpses. Clue on a body 40%."],
    [89,"Enemies! Easy Encounter.","Loot",15,"You found loot.","Clue",15,"You found a clue.","","Empty apart from enemies. 1 level-appropriate easy encounter. Loot 15%, Clue 15%"],
    [90,"Enemies! Easy Encounter.","Loot",15,"You found loot.","Clue",15,"You found a clue.","","Empty apart from enemies. 1 level-appropriate easy encounter. Loot 15%, Clue 15%"],
    [91,"Enemies! Medium Encounter.","Loot",25,"You found loot.","Clue",25,"You found a clue.","","Empty apart from enemies. 1 level-appropriate medium encounter. Loot 25%, Clue 25%"],
    [92,"Enemies! Medium Encounter.","Loot",25,"You found loot.","Clue",25,"You found a clue.","","Empty apart from enemies. 1 level-appropriate medium encounter. Loot 25%, Clue 25%"],
    [93,"Enemies! Hard Encounter.","Loot",50,"You found loot.","Clue",50,"You found a clue.","","Empty apart from enemies. 1 level-appropriate hard encounter. Loot 50%, clue 50%"],
    [94,"Enemies! Hard Encounter.","Loot",50,"You found loot.","Clue",50,"You found a clue.","","Empty apart from enemies. 1 level-appropriate hard encounter. Loot 50%, clue 50%"],
    [95,"Trap!","Trap","","","","","","Roll on trap table.","Trap! Go straight to Trap Table."],
    [96,"Trap!","Trap","","","","","","Roll on trap table.","Trap! Go straight to Trap Table."],
    [97,"Trap!","Trap","","","","","","Roll on trap table.","Trap! Go straight to Trap Table."],
    [98,"Trap!","Trap","","","","","","Roll on trap table.","Trap! Go straight to Trap Table."],
    [99,"","Loot",60,"You found loot.","","","","Roll DMG individual treasure: Challenge 0-4 table. Add 30 to roll. How did this loot get here?","Loot 60%. Roll DMG individual treasure: Challenge 0-4 table. Add 30 to roll. How did this loot get here?"],
    [100,"","Loot",60,"You found loot.","","","","Roll DMG individual treasure: Challenge 0-4 table. Add 30 to roll. How did this loot get here?","Loot 60%. Roll DMG individual treasure: Challenge 0-4 table. Add 30 to roll. How did this loot get here?"]
  ];
  return passageLayoutArray;
}

function objectifyPassageContentRow(passageContentRowNum) {

  var passageContentRow = passageContentArray[passageContentRowNum - 1];

  var passageContentDataObject = {
    rollResult: passageContentRow[0],
    description: passageContentRow[1],
    feature1: passageContentRow[2],
    feature1Chance: passageContentRow[3],
    feature1Text: passageContentRow[4],
    feature2: passageContentRow[5],
    feature2Chance: passageContentRow[6],
    feature2Text: passageContentRow[7],
    note: passageContentRow[8]
  };

  console.log(JSON.stringify(passageContentDataObject));

  return passageContentDataObject;
}

function rollPassage() {
  var passageLayoutRollResult = rollDice(20);
  var passageLayoutDataObject = objectifyPassageLayoutRow(passageLayoutRollResult);

  var passageContentRollResult = rollDice(100);
  var passageContentDataObject = objectifyPassageContentRow(passageContentRollResult)

  let passage = {
    roll: passageLayoutDataObject.rollResult,
    layout: setPassageLayout(passageLayoutDataObject),
    content: setPassageContent(passageContentDataObject)
  }

  /*
  console.log(JSON.stringify(passage));
  */

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
  var passageLayoutString = passageLayoutDataObject.layout + " ";
  passageLayoutString += setPassageSize(passageLayoutDataObject);
  passageLayoutString += " " + passageLayoutDataObject.sizeSuffix + ".";
  if (passageLayoutDataObject.layoutExtended != "") {
    passageLayoutString += "<br />" + passageLayoutDataObject.layoutExtended;
  }

  var passageFeature = setPassageFeature(passageLayoutDataObject);
  if (passageFeature !== "") {
    passageLayoutString += "<br />You discover a " + passageFeature;
  }

  return passageLayoutString;
}

function setPassageContent(passageContentDataObject) {

  var passageContentString = ""
  if(passageContentDataObject.description !== "") {
    passageContentString += "<br />" + passageContentDataObject.description;
  }

  // resolve feature1
  if (passageContentDataObject.feature1 !== "") {

    if(passageContentDataObject.feature1 === "Trap") {
      passageContentString += "<br />" + rollTrap();
      console.log(passageContentString);
      return passageContentString;
    }

    var featureCheck = rollPercentile(passageContentDataObject.feature1Chance);
    if (featureCheck === true) {
      passageContentString += "<br />" + passageContentDataObject.feature1Text;
    }
  }

  // resolve feature2
  if (passageContentDataObject.feature2 !== "") {
    var featureCheck = rollPercentile(passageContentDataObject.feature2Chance);
    if (featureCheck === true) {
      passageContentString += "<br />" + passageContentDataObject.feature2Text;
    }
  }

  return passageContentString;
}

/*********   PASSAGE END   *********/

/*********   DOOR START *********/

function initializeDoorArray() {
  var doorArray = [
    [1, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [2, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [3, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [4, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [5, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [6, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [7, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [8, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [9, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [10, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [11, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [12, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [13, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [14, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [15, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [16, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [17, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [18, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [19, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [20, "1-20", "Wooden door", "", "", "", "", "", "", "", 1, "Standard wooden door, braced with metal, unlocked. Opens onto (roll d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [21, "21-25", "Iron portcullis", "Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked", 50, 14, 19, "", "", 50, 2, "Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [22, "21-25", "Iron portcullis", "Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked", 50, 14, 19, "", "", 50, 2, "Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [23, "21-25", "Iron portcullis", "Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked", 50, 14, 19, "", "", 50, 2, "Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [24, "21-25", "Iron portcullis", "Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked", 50, 14, 19, "", "", 50, 2, "Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [25, "21-25", "Iron portcullis", "Iron portcullis with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked", 50, 14, 19, "", "", 50, 2, "Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis if unlocked (roll d4 to determine: 1-2 locked, 3-4 unlocked). DC 14 thieves’ tools check to unlock, DC 19 strength check to wrench open. Is the lever trapped? Use Q/A and investigation rolls."],
    [26, "26-30", "Archway", "", "", "", "", "", "", 40, 1, "Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [27, "26-30", "Archway", "", "", "", "", "", "", 40, 1, "Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [28, "26-30", "Archway", "", "", "", "", "", "", 40, 1, "Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [29, "26-30", "Archway", "", "", "", "", "", "", 40, 1, "Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [30, "26-30", "Archway", "", "", "", "", "", "", 40, 1, "Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q/A roll with the modifier Unlikely (-2) to determine. Beyond doorway is either (d4) 1: Passage, 2: Stairs, 3-4: Room."],
    [31, "31-35", "Wooden door", "", 100, 15, 12, "", "", "", 3, "Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [32, "31-35", "Wooden door", "", 100, 15, 12, "", "", "", 3, "Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [33, "31-35", "Wooden door", "", 100, 15, 12, "", "", "", 3, "Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [34, "31-35", "Wooden door", "", 100, 15, 12, "", "", "", 3, "Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [35, "31-35", "Wooden door", "", 100, 15, 12, "", "", "", 3, "Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp. Opens into a room."],
    [36, "36-40", "Iron door", "", 100, 14, 16, "", "", "", 4, "Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [37, "36-40", "Iron door", "", 100, 14, 16, "", "", "", 4, "Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [38, "36-40", "Iron door", "", 100, 14, 16, "", "", "", 4, "Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [39, "36-40", "Iron door", "", 100, 14, 16, "", "", "", 4, "Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [40, "36-40", "Iron door", "", 100, 14, 16, "", "", "", 4, "Iron door, locked. DC 14 thieves’ tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto (roll d4) 1: Passage, 2-4: Room."],
    [41, "41-45", "Stone door", "", 100, "", "", "", "", 100, 1, "Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [42, "41-45", "Stone door", "", 100, "", "", "", "", 100, 1, "Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [43, "41-45", "Stone door", "", 100, "", "", "", "", 100, 1, "Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [44, "41-45", "Stone door", "", 100, "", "", "", "", 100, 1, "Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [45, "41-45", "Stone door", "", 100, "", "", "", "", 100, 1, "Locked and trapped stone door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2: Stairs, 3-4: Room."],
    [46, "46-50", "Secret door", "", "", "", "", "", "", "", 4, "Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [47, "46-50", "Secret door", "", "", "", "", "", "", "", 4, "Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [48, "46-50", "Secret door", "", "", "", "", "", "", "", 4, "Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [49, "46-50", "Secret door", "", "", "", "", "", "", "", 4, "Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [50, "46-50", "Secret door", "", "", "", "", "", "", "", 4, "Secret door. Does your PC know it’s there? Through to (roll d4) 1: hidden passage, 2-4: Hidden chamber."],
    [51, "51-55", "Archway", "", "", "", "", "", "", "", 5, "Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [52, "51-55", "Archway", "", "", "", "", "", "", "", 5, "Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [53, "51-55", "Archway", "", "", "", "", "", "", "", 5, "Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [54, "51-55", "Archway", "", "", "", "", "", "", "", 5, "Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [55, "51-55", "Archway", "", "", "", "", "", "", "", 5, "Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door."],
    [56, "56-60", "Stone door", "", 100, "", "", 14, "", "", 4, "Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [57, "56-60", "Stone door", "", 100, "", "", 14, "", "", 4, "Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [58, "56-60", "Stone door", "", 100, "", "", 14, "", "", 4, "Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [59, "56-60", "Stone door", "", 100, "", "", 14, "", "", 4, "Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [60, "56-60", "Stone door", "", 100, "", "", 14, "", "", 4, "Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked. Opens into 1: Passage, 2-4: Room."],
    [61, "61-75", "Wooden door", "", "", "", "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [62, "61-75", "Wooden door", "", "", "", "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [63, "61-75", "Wooden door", "", 100, 14, "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [64, "61-75", "Wooden door", "", 100, 15, "", "", "", 100, 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [65, "61-75", "Wooden door", "", 100, 16, "", "", "", 100, 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [66, "61-75", "Stone door", "", "", "", "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [67, "61-75", "Stone door", "", "", "", "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [68, "61-75", "Stone door", "", 100, 14, "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [69, "61-75", "Stone door", "", 100, 15, "", "", "", 100, 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [70, "61-75", "Stone door", "", 100, 16, "", "", "", 100, 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [71, "61-75", "Iron door", "", "", "", "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [72, "61-75", "Iron door", "", "", "", "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [73, "61-75", "Iron door", "", 100, 14, "", "", "", "", 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [74, "61-75", "Iron door", "", 100, 15, "", "", "", 100, 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [75, "61-75", "Iron door", "", 100, 16, "", "", "", 100, 4, "Roll d6. 1-2: Wooden door. 3-4: Stone door. 5-6: Iron door. Roll d6. 1-3: locked, 4-6 unlocked. Roll d6. 1: trapped, 2-6 untrapped. Roll d6. 1-2: locked, 3-6: unlocked."],
    [76, "76-80", "Wooden door", "", "", "", "", "", "", 100, 4, "Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [77, "76-80", "Archway", "", "", "", "", "", "", 100, 4, "Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [78, "76-80", "Iron door", "", "", "", "", "", "", 100, 4, "Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [79, "76-80", "Stone door", "", "", "", "", "", "", 100, 4, "Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [80, "76-80", "Iron portcullis", "", "", "", "", "", "", 100, 4, "Trapped door. DC 15 perception to find trap. If trap disarmed / avoided / triggered, roll d4 to determine what’s on the other side. 1: Passage, 2-4: Room."],
    [81, "81-85", "Wooden door", "", 100, "", "", "", 100, "", 3, "Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [82, "81-85", "Archway", "", 100, "", "", "", 100, "", 3, "Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [83, "81-85", "Iron door", "", 100, "", "", "", 100, "", 3, "Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [84, "81-85", "Stone door", "", 100, "", "", "", 100, "", 3, "Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [85, "81-85", "Iron portcullis", "", 100, "", "", "", 100, "", 3, "Locked door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon. There is a reason they do not want anyone to enter."],
    [86, "86-90", "Elemental wall", "3d8 elemental damage to pass", "", "", "", "", "", "", 1, "Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [87, "86-90", "Elemental wall", "3d8 elemental damage to pass", "", "", "", "", "", "", 1, "Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [88, "86-90", "Elemental wall", "3d8 elemental damage to pass", "", "", "", "", "", "", 1, "Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [89, "86-90", "Elemental wall", "3d8 elemental damage to pass", "", "", "", "", "", "", 1, "Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [90, "86-90", "Elemental wall", "3d8 elemental damage to pass", "", "", "", "", "", "", 1, "Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of."],
    [91, "91-95", "Stone door", "", 100, "", 16, "", "", "", 3, "Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [92, "91-95", "Stone door", "", 100, "", 16, "", "", "", 3, "Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [93, "91-95", "Stone door", "", 100, "", 16, "", "", "", 3, "Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [94, "91-95", "Stone door", "", 100, "", 16, "", "", "", 3, "Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [95, "91-95", "Stone door", "", "", "", 16, "", "", "", 3, "Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks. Opens into room."],
    [96, "96-100", "Smashed Wooden Door", "", "", "", "", "", "", "", 3, "Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [97, "96-100", "Smashed Stone door", "", "", "", "", "", "", "", 3, "Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [98, "96-100", "Smashed Iron door", "", "", "", "", "", "", "", 3, "Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [99, "96-100", "Smashed Iron portcullis", "", "", "", "", "", "", "", 3, "Door is smashed and hanging off its hinges (why?). Leads into a room."],
    [100, "96-100", "Shattered Archway", "", "", "", "", "", "", "", 3, "Door is smashed and hanging off its hinges (why?). Leads into a room."]
  ]
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
    [1,4,"passage","stairs","room","room"],
    [2,4,"passage","passage","room","room"],
    [3,4,"room","room","room","room"],
    [4,4,"passage","room","room","room"],
    [5,4,"passage","passage","passage","passage"],
    [6,4,"stairs","stairs","stairs","stairs"],
    [7,4,"door","door","door","door"],
    [8,4,"dead end","dead end","dead end","dead end"],
    [9,4,"dead end","dead end","passage","passage"]
  ]
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

  var doorString = doorDataObject.description;

  if (doorDataObject.descriptionExtended !== "") {
    doorString += "<br />" + doorDataObject.descriptionExtended;
  }


  doorString += rollLeadsTo(doorDataObject.leadsTo);
  doorString += addDoorLocks(doorDataObject);
  doorString += addDoorTraps(doorDataObject);

  return doorString;
}

function addDoorLocks(doorDataObject) {
  if (doorDataObject.locked === "") {
    return "";
  }

  var isDoorLocked = rollPercentile(doorDataObject.locked);
  if (isDoorLocked === false) {
    return "";
  }

  var doorLockString = "<br />Door locked"

  if(doorDataObject.pickLockDC !== "") {
    doorLockString += "<br />Pick lock DC" + doorDataObject.pickLockDC;
  }

  if(doorDataObject.forceLockDC !== "") {
    doorLockString += "<br />Force lock DC" + doorDataObject.forceLockDC;
  }

  if(doorDataObject.puzzleLockDC !== "") {
    doorLockString += "<br />Solve puzzle lock DC" + doorDataObject.puzzleLockDC;
  }

  return doorLockString;
}

function addDoorTraps(doorDataObject) { 
  var isDoorTrapped = rollPercentile(doorDataObject.trapped);

  if(isDoorTrapped === false) {
    return "";
  }

  var doorTrapString = "<br />Door Trapped<br />"
  doorTrapString += rollTrap();
  return doorTrapString;
}

function rollLeadsTo(leadsToNum) {
  var leadsToString = "<br />Leads to ";
  var leadsToDataObject = objectifyLeadsToRow(leadsToNum);
  console.log(JSON.stringify(leadsToDataObject));
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

/*********   DOOR END *********/

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

  var trapString = trapDataObject.type;
  trapString += "<br />Detect DC" + trapDataObject.detectDC;
  trapString += "<br />Save DC" + trapDataObject.saveDC;
  trapString += "<br />" + trapDataObject.damage;

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

  var dungeonSizeString = dungeonSizeDataObject.description + "<br />";

  if(dungeonSizeDataObject.description === "Limitless until Boss is found") {
    return dungeonSizeString;
  }
  
  var dungeonSizeRoomCount = 0;

  for (let index = 0; index < dungeonSizeDataObject.rollsNumber; index++) {
    dungeonSizeRoomCount += rollDice(dungeonSizeDataObject.diceType);
  }

  dungeonSizeRoomCount = applyModifier(dungeonSizeRoomCount, dungeonSizeDataObject.rollModifierType, dungeonSizeDataObject.rollModifierValue);
  
  dungeonSizeRoomCount += " rooms"

  dungeonSizeString += dungeonSizeRoomCount

  return dungeonSizeString;
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
  var dungeonStartString = "Start area: " + dungeonStartDataObject.area;
  return dungeonStartString;
}

function rollDungeon() {

  let dungeon = {
    type: rollDungeonType(),
    size: rollDungeonSize(),
    start: rollDungeonStart()
  }

  dungeonString = dungeon.type + "<br />" + dungeon.size + "<br />" + dungeon.start;
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

  stairString = "Stair goes " + stairDataObject.direction + " " + stairDataObject.levels + " levels";
  stairString += rollLeadsTo(stairDataObject.leadsTo);
  
  if(stairDataObject.note !=="") {
    stairString += "<br />" + stairDataObject.note;
  }

  return stairString;
}

/*********   STAIR END *********/