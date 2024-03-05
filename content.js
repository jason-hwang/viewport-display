// content.js
function displayWindowSizeAndBreakpoint() {
  const sizeDiv = document.createElement("div");
  sizeDiv.style.position = "fixed";
  sizeDiv.style.bottom = "16px";
  sizeDiv.style.right = "16px";
  sizeDiv.style.backgroundColor = "black";
  sizeDiv.style.color = "white";
  sizeDiv.style.padding = "5px";
  sizeDiv.style.zIndex = "10000";
  sizeDiv.style.fontSize = "10px";
  sizeDiv.style.fontWeight = "bold";
  sizeDiv.style.borderRadius = "8px";
  sizeDiv.id = "window-size-display";
  sizeDiv.style.pointerEvents = "none";
  document.body.appendChild(sizeDiv);

  updateWindowSizeAndBreakpoint();
  window.addEventListener("resize", updateWindowSizeAndBreakpoint);
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
