(function () {
  const version = "20260608-textfix";
  const files = [
    "2024-1.js",
    "2024-2.js",
    "2024-4.js",
    "2025-1.js",
    "2025-2.js",
    "2026-1.js",
    "2026-2.js"
  ];

  const baseUrl = new URL(".", document.currentScript.src);
  document.write(files.map((file) => {
    const src = new URL(file, baseUrl);
    src.searchParams.set("v", version);
    return `<script src="${src.href}"><\/script>`;
  }).join(""));
}());
