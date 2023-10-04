const targetNode = document.querySelector("body");
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.target.id === "glance_ssn_key") {
      const sessionKey = mutation.target.outerText;
      navigator.clipboard.writeText(sessionKey).catch((error) => {
        console.log("Session key copy failed: ", error);
      });
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
