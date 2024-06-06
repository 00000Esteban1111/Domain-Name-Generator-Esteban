const prefixes = ["best", "top", "my", "your", "the"];
const middles = ["McDonalds", "Apple", "Google", "Amazon", "Facebook"];
const suffixes = ["store", "shop", "site", "place", "world"];
const images = {
  McDonalds:
    "https://www.imprentaonline.net/blog/wp-content/webpc-passthru.php?src=https://www.imprentaonline.net/blog/wp-content/uploads/rotulo-mcdonals.png&nocache=1",
  Apple: "https://miro.medium.com/v2/resize:fit:457/0*yUYU-OPX8KS5iolW.jpg",
  Google:
    "https://mitsloanreview.mx/wp-content/uploads/2023/05/logo-de-google-300x200.jpg",
  Amazon: "https://sm.ign.com/t/ign_es/tag/a/amazon-2/amazon-2_v18u.300.jpg",
  Facebook:
    "https://cotejo.info/Cotejo.info/wp-content/uploads/2022/03/Banner-FB-COTEJO-300x200.jpg"
};

document.getElementById("generateDomain").addEventListener("click", () => {
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const domainName = `${randomPrefix}${randomMiddle}${randomSuffix}.com`;

  document.getElementById("domainName").textContent = domainName;
  const domainImageElement = document.getElementById("domainImage");
  domainImageElement.src = images[randomMiddle];
  domainImageElement.style.display = "block";
});
