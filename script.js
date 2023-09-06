const updateTime = () => {
  const now = new Date();

  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  dateElement.textContent = now.toLocaleDateString("en-US", options);
  timeElement.textContent = now.toLocaleTimeString();
};

setInterval(updateTime, 1000);

updateTime();
