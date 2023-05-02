const count = document.getElementById("count");

const decrement = () => {
  let newCount = Number(count.value);
  newCount--;
  count.value = newCount;
};

const increment = () => {
  let newCount = Number(count.value);
  newCount++;
  count.value = newCount;
};
