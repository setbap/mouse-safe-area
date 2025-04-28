import { menuItems, MenuType } from "./menuData";

const chevronGenerator = (direction: "up" | "down" | "left" | "right") => {
  const rotationMap: Record<"up" | "down" | "left" | "right", number> = {
    down: 0,
    up: 180,
    left: 90,
    right: 270,
  };

  const rotate = rotationMap[direction] || 0;
  const hoverRotate = (rotate + 180) % 360;

  return `
      <svg class="w-4 h-4 transition-transform rr-${rotate} group-hover:rotate-${hoverRotate}" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    `;
};
function addDropdownToButton() {
  document.querySelectorAll("[data-has-item]").forEach((item) => {
    const chevronDirection: any =
      item.getAttribute("data-chevron-direction") || "down";
    item.innerHTML = `${item.textContent} ${chevronGenerator(
      chevronDirection
    )}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  MenueBar();
  addDropdownToButton();
});

function MenueBar() {
  const menuBar = document.getElementById("menu-bar");
  if (!menuBar) return;
  const menuBarItems = menuItems.map((item) => {
    const button = document.createElement("button");
    if (item.items) {
      button.setAttribute("data-has-item", "true");
      button.addEventListener("mouseenter", () => {
        document.querySelectorAll(".sub-menu").forEach((menu) => {
          menu.remove();
        });
        const container = document.createElement("div");
        container.classList.add("sub-menu");
        container.style.position = "absolute";
        container.style.top = `${button.offsetTop + button.offsetHeight + 8}px`;
        container.style.left = `${button.offsetLeft}px`;
        SubMenu(item.items!, container, 1);
        document.body.append(container);
      });
    }
    document.addEventListener("click", (e) => {
      if (!button.contains(e.target as Node)) {
        document.querySelectorAll(".sub-menu").forEach((menu) => {
          menu.remove();
        });
      }
    });

    button.setAttribute("data-chevron-direction", "down");
    button.classList.add("flex", "group", "items-center", "gap-1", "menu-item");
    button.textContent = item.label;
    return button;
  });
  menuBar.append(...menuBarItems);
}

function SubMenu(
  item: MenuType[],
  menuContainer: HTMLElement,
  currentLevel: number
) {
  const subMenuContainer = document.createElement("ul");
  const subMenu = document.createElement("ul");
  const classes =
    "*:border-b *:first:rounded-t-md *:last:rounded-b-md *:flex *:justify-between *:items-center *:w-full mt-1 z-10 *:hover:bg-gray-300 *:hover:text-gray-900 *:border-gray-300 rounded-lg w-32 flex flex-col justify-start items-start border-gray-300 border *:px-2 *:py-2";
  subMenu.classList.add(...classes.split(" "));

  const subItems = item.map((innerItem) => {
    const li = document.createElement("li");
    if (innerItem.items) {
      li.setAttribute("data-has-item", "true");
      li.setAttribute("data-chevron-direction", "right");

      li.addEventListener("mouseenter", () => {
        document
          .querySelectorAll(`.sub-menu-item-${currentLevel}`)
          .forEach((menu) => {
            menu.remove();
          });
        const container = document.createElement("div");
        container.classList.add("sub-menu");
        container.classList.add(`sub-menu-item-${currentLevel}`);
        container.style.position = "absolute";
        const bounding = li.getBoundingClientRect();
        container.style.top = `${bounding.top}px`;
        container.style.left = `${bounding.left + bounding.width + 8}px`;
        SubMenu(innerItem.items!, container, currentLevel + 1);
        document.body.append(container);
      });
    }
    li.classList.add("group");
    li.innerHTML = `${innerItem.label} ${
      innerItem.items ? chevronGenerator("right") : ""
    }`;
    return li;
  });
  subMenu.append(...subItems);
  subMenuContainer.append(subMenu);
  menuContainer.append(subMenuContainer);
}
