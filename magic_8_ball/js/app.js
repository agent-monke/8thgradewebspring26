function shake() {
  ask_question();
  reveal_fortune();
}

function ask_question() {
  // empty for now
}

function reveal_fortune() {
  const fortunes = get_fortunes();
  const fortune = pick_random(fortunes);
  document.getElementById("fortune").textContent = fortune;
}

function pick_random(list) {
  const i = Math.floor(Math.random() * list.length);
  return list[i];
}

function flip_coin() {
  return pick_random(["Heads", "Tails"]);
}

function roll_die() {
  return pick_random([1, 2, 3, 4, 5, 6]);
}

function get_fortunes() {
  return [
    "It is certain",
    "Reply hazy try again",
    "Don't count on it",
    "Most likely",
    "Cannot predict now",
    "Outlook good",
    "My sources say no",
    "Yes",
    "Ask again later"
  ];
}
