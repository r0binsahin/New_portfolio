import { aboutModalToggle } from "./functions/aboutModal";
import { contactIconsFooter } from "./functions/contactIcons";
import { mainTag } from "./functions/maintag";
import { modalToggle } from "./functions/contactModal";
import { displayMobileNav } from "./functions/navbar";
import { projectCards } from "./functions/projectCards";
import { hideMobileNav } from "./functions/hideMobileNav";
import { displayLinkBox } from "./functions/displayLinkBox";
import { displayMySkills } from "./functions/displayMySkills";
import { desktopContactModalToggle } from "./functions/desktopContactModal";
import { displayOtherProjects } from "./functions/displayOtherProjects";

displayMobileNav();
hideMobileNav();
mainTag();
desktopContactModalToggle();
projectCards();
displayMySkills();
displayOtherProjects();
contactIconsFooter();
modalToggle();
aboutModalToggle();
displayLinkBox();
