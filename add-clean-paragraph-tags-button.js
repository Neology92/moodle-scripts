const cleanParagraphs = () => {
  const editor = document.getElementById("id_onlinetext_editoreditable");
  if (editor) {
    console.log("here we are!");
    editor.innerHTML = editor.innerHTML
      .replaceAll("<p><br></p>", "<br>")
      .replaceAll("</p>", "")
      .replaceAll("<p>", "<br>");
  }
};

const addCleanButtons = () => {
  const buttonsBar = document.querySelector(".editor_atto_toolbar");

  if (buttonsBar) {
    const cleanButtonWrapper = document.createElement("div");
    cleanButtonWrapper.className = "atto_group";

    const cleanButton = document.createElement("button");
    cleanButton.innerHTML = "🧹";
    cleanButton.alt = "Clean";
    cleanButton.onclick = (e) => {
      e.preventDefault();
      cleanParagraphs();
    };

    cleanButtonWrapper.appendChild(cleanButton);
    buttonsBar.appendChild(cleanButtonWrapper);
  }
};

setTimeout(() => addCleanButtons(), 500);
