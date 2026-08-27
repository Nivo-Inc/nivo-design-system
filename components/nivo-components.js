(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupTabs() {
    document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
      const tabs = [...tablist.querySelectorAll('[role="tab"]')];
      if (!tabs.length) return;

      const activate = (tab, moveFocus = true) => {
        tabs.forEach((candidate) => {
          const selected = candidate === tab;
          candidate.setAttribute("aria-selected", String(selected));
          candidate.tabIndex = selected ? 0 : -1;
          const panel = document.getElementById(candidate.getAttribute("aria-controls"));
          if (panel) panel.hidden = !selected;
        });
        if (moveFocus) tab.focus();
      };

      tabs.forEach((tab) => tab.addEventListener("click", () => activate(tab, false)));
      tablist.addEventListener("keydown", (event) => {
        const current = tabs.indexOf(document.activeElement);
        if (current < 0) return;
        let next = current;
        if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next !== current) {
          event.preventDefault();
          activate(tabs[next]);
        }
      });
    });
  }

  function setupDropdowns() {
    document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
      const trigger = dropdown.querySelector("[data-dropdown-trigger]");
      const menu = dropdown.querySelector('[role="menu"]');
      if (!trigger || !menu) return;
      const items = [...menu.querySelectorAll('[role="menuitem"]')];

      const close = (restoreFocus = false) => {
        menu.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
        if (restoreFocus) trigger.focus();
      };

      const open = (focusIndex = -1) => {
        menu.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
        if (focusIndex >= 0 && items[focusIndex]) items[focusIndex].focus();
      };

      trigger.addEventListener("click", () => {
        if (menu.hidden) open();
        else close();
      });

      trigger.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          open(0);
        }
        if (event.key === "ArrowUp") {
          event.preventDefault();
          open(items.length - 1);
        }
      });

      menu.addEventListener("keydown", (event) => {
        const current = items.indexOf(document.activeElement);
        if (event.key === "Escape") {
          event.preventDefault();
          close(true);
          return;
        }
        if (event.key === "Tab") {
          close();
          return;
        }
        let next = current;
        if (event.key === "ArrowDown") next = (current + 1) % items.length;
        if (event.key === "ArrowUp") next = (current - 1 + items.length) % items.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = items.length - 1;
        if (next !== current && items[next]) {
          event.preventDefault();
          items[next].focus();
        }
      });

      menu.addEventListener("click", () => close(true));
      document.addEventListener("pointerdown", (event) => {
        if (!dropdown.contains(event.target)) close();
      });
    });
  }

  function setupDialog() {
    const dialog = document.getElementById("nivo-demo-dialog");
    if (!dialog) return;
    document.querySelectorAll('[data-open-dialog="nivo-demo-dialog"]').forEach((button) => {
      button.addEventListener("click", () => dialog.showModal());
    });
    dialog.querySelectorAll("[data-close-dialog]").forEach((button) => {
      button.addEventListener("click", () => dialog.close(button.value || "cancel"));
    });
  }

  function setupDismissibleAlerts() {
    document.querySelectorAll("[data-dismissible-alert]").forEach((alert) => {
      const button = alert.querySelector(".nivo-alert-dismiss");
      if (!button) return;
      button.addEventListener("click", () => alert.remove());
    });
  }

  function showToast(title, message) {
    const region = document.querySelector(".nivo-toast-region");
    if (!region) return;
    const toast = document.createElement("div");
    toast.className = "nivo-toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = `
      <div class="nivo-toast__content">
        <p class="nivo-toast__title"></p>
        <p class="nivo-toast__message"></p>
      </div>
      <button class="nivo-alert-dismiss" type="button" aria-label="Dismiss notification">×</button>`;
    toast.querySelector(".nivo-toast__title").textContent = title;
    toast.querySelector(".nivo-toast__message").textContent = message;
    toast.querySelector("button").addEventListener("click", () => toast.remove());
    region.appendChild(toast);
    window.setTimeout(() => toast.remove(), 6000);
  }

  function setupToasts() {
    document.querySelectorAll("[data-show-toast]").forEach((button) => {
      button.addEventListener("click", () => {
        showToast("Changes saved", "Your updates are available to the team.");
      });
    });
  }

  function setupLoadingButton() {
    const button = document.getElementById("nivo-loading-demo");
    if (!button) return;
    const original = button.innerHTML;
    button.addEventListener("click", () => {
      if (button.getAttribute("aria-busy") === "true") return;
      button.setAttribute("aria-busy", "true");
      button.disabled = true;
      button.innerHTML = '<span class="nivo-button__spinner" aria-hidden="true"></span>Saving';
      window.setTimeout(() => {
        button.removeAttribute("aria-busy");
        button.disabled = false;
        button.innerHTML = original;
        showToast("Saved", "The example action completed successfully.");
      }, 1200);
    });
  }

  function setupPagination() {
    document.querySelectorAll(".nivo-pagination").forEach((pagination) => {
      const pageButtons = [...pagination.querySelectorAll("[data-page]")];
      pageButtons.forEach((button) => {
        button.addEventListener("click", () => {
          pageButtons.forEach((candidate) => candidate.removeAttribute("aria-current"));
          button.setAttribute("aria-current", "page");
        });
      });
    });
  }

  function setupSortableTables() {
    document.querySelectorAll(".nivo-table").forEach((table) => {
      table.querySelectorAll(".nivo-sort-button").forEach((button) => {
        button.addEventListener("click", () => {
          const header = button.closest("th");
          const index = [...header.parentElement.children].indexOf(header);
          const current = header.getAttribute("aria-sort");
          const direction = current === "ascending" ? "descending" : "ascending";
          table.querySelectorAll("th[aria-sort]").forEach((th) => th.setAttribute("aria-sort", "none"));
          header.setAttribute("aria-sort", direction);
          const body = table.tBodies[0];
          const rows = [...body.rows];
          rows.sort((a, b) => {
            const aCell = a.cells[index];
            const bCell = b.cells[index];
            const aValue = aCell.dataset.sortValue || aCell.textContent.trim();
            const bValue = bCell.dataset.sortValue || bCell.textContent.trim();
            const numeric = !Number.isNaN(Number(aValue)) && !Number.isNaN(Number(bValue));
            const result = numeric
              ? Number(aValue) - Number(bValue)
              : aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: "base" });
            return direction === "ascending" ? result : -result;
          });
          rows.forEach((row) => body.appendChild(row));
        });
      });
    });
  }

  function setupScrollSpy() {
    const links = [...document.querySelectorAll(".catalog-nav a[href^='#']")];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) => {
          if (link.getAttribute("href") === `#${visible.target.id}`) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-12% 0px -68% 0px", threshold: [0.1, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
  }

  setupTabs();
  setupDropdowns();
  setupDialog();
  setupDismissibleAlerts();
  setupToasts();
  setupLoadingButton();
  setupPagination();
  setupSortableTables();
  setupScrollSpy();

  if (reduceMotion) document.documentElement.dataset.reducedMotion = "true";
})();
