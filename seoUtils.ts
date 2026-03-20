const DEFAULT_META = {
  title: "Mumma's Kitchen - Authentic Homemade Goan Pickles | Panaji, Goa",
  description: "Handcrafted spicy & sweet pickles made with traditional Goan recipes since 2021. 100% natural, no preservatives. Stuffed Mango, Raw Mango, Bimbli, Amla & more. Order via WhatsApp for delivery across Goa & India.",
  ogTitle: "Mumma's Kitchen - Authentic Homemade Goan Pickles",
  ogDescription: "Taste the tradition of Goa with handcrafted pickles made with generations of love. 9 varieties of spicy & sweet pickles. Order via WhatsApp for delivery across Goa & India.",
  ogUrl: "https://mummas-kitchen.replit.app/",
};

function setMetaTag(selector: string, attribute: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attribute, value);
}

export function updatePageMeta(meta: {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}) {
  document.title = meta.title;
  setMetaTag('meta[name="description"]', "content", meta.description);
  setMetaTag('meta[property="og:title"]', "content", meta.ogTitle);
  setMetaTag('meta[property="og:description"]', "content", meta.ogDescription);
  setMetaTag('meta[property="og:url"]', "content", meta.ogUrl);
  setMetaTag('meta[name="twitter:title"]', "content", meta.title);
  setMetaTag('meta[name="twitter:description"]', "content", meta.description);
}

export function restoreDefaultMeta() {
  updatePageMeta(DEFAULT_META);
}
