function updateOfferURL() {
    const newURL = prompt("Enter the new offer URL:");
    if (newURL) {
      document.querySelector(".button").href = newURL;
    }
  }
