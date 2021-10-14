const removeCourses = (ids) => {
  const items = document.querySelectorAll(
    "#frontpage-course-list .courses > div"
  );
  const validatingHeader = document.querySelector(
    "#frontpage-course-list > h2"
  );

  if (validatingHeader.innerHTML === "Moje kursy") {
    items.forEach((course) => {
      if (ids.includes(course.getAttribute("data-courseid"))) course.remove();
    });
  }
};

const getIds = () =>
  window.localStorage.getItem("cdv-legacy-courses").split(",") || [];

const addCourseToLegacyItems = (id) => {
  const ids = getIds();
  window.localStorage.setItem("cdv-legacy-courses", [id, ...ids]);
  removeCourses([id]);
};

const addDeleteButtons = () => {
  const items = document.querySelectorAll(".courses > .coursebox");

  items.forEach((course) => {
    course.style.position = "relative";
    const id = course.getAttribute("data-courseid");

    const button = document.createElement("button");
    button.onclick = () => addCourseToLegacyItems(id);
    button.innerHTML = "❌";
    button.style.position = "absolute";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.width = "24px";
    button.style.height = "24px";
    button.style.right = "8px";
    button.style.top = "8px";
    button.style.background = "transparent";
    button.style.border = "none";
    course.appendChild(button);
  });
};

setTimeout(() => addDeleteButtons(), 500);
setTimeout(() => {
  const ids = getIds();
  removeCourses(ids);
}, 500);
