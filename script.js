var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("one");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("one");
}

function scrollToHeader() {
  var headerSection = document.getElementsByClassName("header")[0];
  if (headerSection) {
    headerSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToAbout() {
  var aboutSection = document.getElementsByClassName("about")[0];
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToProjects() {
  var projectSection = document.getElementsByClassName("projects")[0];
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToContact() {
  var contactSection = document.getElementsByClassName("contact")[0];
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function openFile(fileUrl) {
  window.open(fileUrl, "_blank");
}
