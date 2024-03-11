// content.js
function displayWindowSizeAndBreakpoint() {
  const sizeDiv = document.createElement("div");
  adjustColorsBasedOnMode(sizeDiv);
  sizeDiv.style.position = "fixed";
  sizeDiv.style.bottom = "16px";
  sizeDiv.style.right = "16px";
  sizeDiv.style.padding = "5px";
  sizeDiv.style.zIndex = "10000";
  sizeDiv.style.opacity = "0.8";
  sizeDiv.style.fontSize = "10px";
  sizeDiv.style.fontWeight = "bold";
  sizeDiv.style.borderRadius = "8px";
  sizeDiv.id = "window-size-display";
  document.body.appendChild(sizeDiv);

  updateWindowSizeAndBreakpoint();
  window.addEventListener("resize", updateWindowSizeAndBreakpoint);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => adjustColorsBasedOnMode(sizeDiv));

  sizeDiv.addEventListener("mouseenter", () => {
    sizeDiv.style.opacity = "0";
  });

  sizeDiv.addEventListener("mouseleave", () => {
    sizeDiv.style.opacity = "0.8";
  });
}

function adjustColorsBasedOnMode(element) {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkMode) {
    element.style.backgroundColor = "white";
    element.style.color = "black";
  } else {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  }
}

function getBreakpoint(width) {
  if (width < 600) {
    return "xs";
  } else if (width >= 600 && width < 900) {
    return "sm";
  } else if (width >= 900 && width < 1200) {
    return "md";
  } else if (width >= 1200 && width < 1536) {
    return "lg";
  } else {
    return "xl";
  }
}

function updateWindowSizeAndBreakpoint() {
  const sizeDiv = document.getElementById("window-size-display");
  const width = window.innerWidth;
  const breakpoint = getBreakpoint(width);
  sizeDiv.textContent = `w: ${width}px, bp: ${breakpoint}`;
}

displayWindowSizeAndBreakpoint();
