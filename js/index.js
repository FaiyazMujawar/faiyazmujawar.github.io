const sections = document.querySelectorAll("section");
const anchors = document.querySelectorAll("header ul a");

const options = {
  threshold: 0.7,
};

function highlightAnchor(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      let child = null
      anchors.forEach((anchor) => {
        child = anchor.children[0];
        child.classList.remove("highlight")
        if (anchor === activeAnchor) {
          child.classList.add("highlight");
        }
      });
    }
  });
}

let observer = new IntersectionObserver(highlightAnchor, options);

sections.forEach((section) => observer.observe(section));
