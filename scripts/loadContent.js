const loadComponent = async (file, element) => {
  const loadEle = document.getElementById(`${element}`);
  try {
    await fetch(`/components/${file}`)
      .then((response) => {
        if (!response.ok) throw new Error("Error: " + response.status);
        return response.text();
      })
      .then((data) => (loadEle.innerHTML = data));
  } catch (error) {
    console.log(error);
  }
};

loadComponent("header.html", "headerHolder");
// loadComponent("player.html", "playerHolder");
