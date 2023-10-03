console.log("the extension loaded!");

// Select the node that will be observed for mutations
const targetNode = document.querySelector("body");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.target.id === "glance_ssn_key") {
      const sessionKey = mutation.target.outerText;
      console.log("the session key is: ", sessionKey);
      navigator.clipboard.writeText(sessionKey);
    }
    // console.log("the mutation is ", mutation)
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
