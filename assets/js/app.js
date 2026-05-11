// ============================================
  // LOGO INJECTION
  // ============================================
  const LOGO_DATA_URI = "assets/images/image-01-fb972a7d6516e6bb.png";
  document.querySelectorAll('[data-logo]').forEach(el => { el.src = LOGO_DATA_URI; });

  // Product photo data for carousel use
  window.__PRODUCT_PHOTOS = {
    'burberry-bape': 'assets/images/image-02-415d9ce321b02692.jpg',
    'travis-scott-sp5der': 'assets/images/image-03-8e3b5a6b195eb2a5.jpg',
    'bape-sanrio-hello-kitty-pink': 'assets/images/image-04-b4ed04725dc30c59.jpg',
    'vale-forever-religion-zip-up': 'assets/images/image-05-0b496c94fb3e8620.jpg',
    'vale-forever-collage-zip-up': 'assets/images/image-06-8467940874d76daf.jpg',
    'supreme-arabic-box-logo-black': 'assets/images/image-07-161043a996ea13ff.jpg',
    'supreme-arabic-box-logo-white': 'assets/images/image-08-4937a813d8138327.jpg',
    'Maison-Mihara-Yasuhiro-peterson': 'assets/images/image-09-f269c8fb87e644b3.jpg',
    'hellstar-cartoon-cross': 'assets/images/image-10-ba63fe09483f25a4.jpg',
    'denim-tears-the-cotton-wreath-shorts-pink': 'assets/images/image-11-2ac6792dc9ad1821.jpg',
    'denim-tears-the-cotton-wreath-shorts-royal-blue': 'assets/images/image-12-b29a983fe4b44b48.jpg',
    'denim-tears-the-cotton-wreath-shorts-black': 'assets/images/image-13-ab2470f3eb45da10.jpg',
    'denim-tears-the-cotton-wreath-shorts-grey': 'assets/images/image-14-0ff4b26e14d4a9fa.jpg',
    'denim-tears-the-cotton-wreath-shorts-brown': 'assets/images/image-15-062ae6d84b4a7c01.jpg',
    'denim-tears-the-cotton-wreath-shorts-monochrome': 'assets/images/image-16-fbd41e2f61367c74.jpg',
    'denim-tears-the-cotton-wreath-shorts-navy': 'assets/images/image-16-fbd41e2f61367c74.jpg',
    'vale-forever-valley-target-tee': 'assets/images/image-17-aa32762d1a607220.jpg',
    'vale-forever-big-dogs-long-sleeve': 'assets/images/image-18-089bcfac47cd91b7.jpg',
    'nike-air-force-1-low-white': 'assets/images/image-19-996e2222f157af88.jpg',
    'nike-air-force-1-low-black': 'assets/images/image-20-3c413f7157977cfd.jpg',
    'bape-inter-miami-camo-tee-black': 'assets/images/image-21-41e15a5cfd3a5588.jpg',
    'bape-inter-miami-camo-tee-grey': 'assets/images/image-22-dbcc010c3c5a1133.jpg',
    'sp5der-pnk-v2-hoodie-black': 'assets/images/image-23-f8977e657154df3f.jpg',
    'sp5der-pnk-v2-hoodie-pink': 'assets/images/image-24-dd251578af6da838.jpg',
    'sp5der-web-hoodie-sky-blue': 'assets/images/image-25-f05a2e05e4f52ff7.jpg',
    'sp5der-og-web-hoodie-pink': 'assets/images/image-26-7db40d601a3bae13.jpg',
    'stussy-basic-tee-white': 'assets/images/image-27-1b7819252dc4068f.jpg',
    'stussy-roller-tee-black': 'assets/images/image-28-69d2fb6ca4a25340.jpg',
    'stussy-basic-tee-black': 'assets/images/image-29-404878385c553a69.jpg',
    'stussy-basic-pigment-dyed-tee-black': 'assets/images/image-30-8e4cca8b4e4b2957.jpg',
    'stussy-8ball-pigment-dyed-tee-black': 'assets/images/image-31-282a0bd457eb88a5.jpg',
    'stussy-fuzzy-dice-tee-black': 'assets/images/image-32-1c3c23ec624b9215.jpg',
    'stussy-world-tour-tee-black': 'assets/images/image-33-2ac83d2faf4fc990.jpg',
    'stussy-x-patta-sound-connection-tee-black': 'assets/images/image-34-b48e5b4b85fa3259.jpg',
    'supreme-hanes-boxer-briefs-4pack-black': 'assets/images/image-46-3c81cddf165031e1.jpg',
    'supreme-hanes-boxer-briefs-4pack-white': 'assets/images/image-47-57c0216263732c9b.jpg',
    'supreme-hanes-boxer-briefs-2pack-pink': 'assets/images/image-48-0709b69a0d391fe7.jpg',
    'supreme-hanes-boxer-briefs-2pack-grey': 'assets/images/image-49-fbdc20e8ef3a3fe3.jpg',
    hellstar: "assets/images/image-36-6f6ef9e21d666a79.jpg",
    galleryDept: "assets/images/image-37-9671922d33f8055d.jpg",
    valeDevils: "assets/images/image-38-32f279145da0fee3.jpg",
    valeForever: "assets/images/image-39-9a50f135952dec77.jpg",
    bape: "assets/images/image-40-25e2bd0fe011608d.jpg",
    sp5der: "assets/images/image-41-09bf220909b539f8.jpg",
    mmyHank: "assets/images/image-42-27678e4fc1818638.jpg",
    supremeSatin: "assets/images/image-43-7f6dadb5afb8da28.jpg",
    bapeBroken: "assets/images/image-44-9b936bff28caf4fd.jpg",
    bapeSakura: "assets/images/image-45-a32871ea2de76f5b.jpg"
  };


  // ============================================
  // DATA — Brands & Products
  // ============================================
  const BRANDS = {
    hellstar: { name: 'Hellstar', count: 24, desc: "Founded in Los Angeles in 2020, Hellstar Studios fuses cosmic graphics with elevated heavyweight construction. Every piece authenticated and graded before listing." },
    'denim-tears': { name: 'Denim Tears', count: 18, desc: "Tremaine Emory's politically-charged label exploring the African-American experience through fashion. Cotton wreath motifs and limited-run drops." },
    corteiz: { name: 'Corteiz', count: 31, desc: "Clint419's London-born guerrilla label. Cult drops, Alcatraz logo, and 'Rules The World' philosophy. Notoriously hard to source." },
    'chrome-hearts': { name: 'Chrome Hearts', count: 9, desc: "Richard Stark's American luxury house — sterling silver, hand-distressed leather, and gothic motifs since 1988. Authenticated grails only." },
    stussy: { name: 'Stüssy', count: 14, desc: "Shawn Stüssy's foundational streetwear label. Heavyweight tees, crown logo basics, and curated collaborations from the Tribe." },
    sp5der: { name: 'Sp5der', count: 22, desc: "Young Thug's Atlanta-born label — web graphics, vivid color, and that unmistakable spider on rhinestone-heavy fits." },
    supreme: { name: 'Supreme', count: 11, desc: "James Jebbia's downtown New York institution. Box logos, weekly drops, and the most replicated brand in streetwear — only verified pieces here." },
    bape: { name: 'Bape', count: 16, desc: "Nigo's A Bathing Ape — camo, sharks, and college tees that defined Y2K Tokyo streetwear. Vintage and current cuts available." },
    rhude: { name: 'Rhude', count: 8, desc: "Rhuigi Villaseñor's California-meets-luxury label. Track jackets, racing motifs, and elevated essentials with a vintage soul." },
    'palm-angels': { name: 'Palm Angels', count: 19, desc: "Francesco Ragazzi's LA skate-meets-Milan-luxury imprint. Track pants, broken glass logos, and runway-finished basics." },
    kith: { name: 'Kith', count: 27, desc: "Ronnie Fieg's NY institution. Premium basics, exclusive collabs (Versace, BMW, Star Wars), and the Treats cereal bar energy." },
    'gallery-dept': { name: 'Gallery Dept', count: 12, desc: "Josué Thomas's LA-based art-meets-apparel label. Hand-painted, distressed, and reworked vintage pieces with the unmistakable upside-down logo." },
    'vale-forever': { name: 'Vale Forever', count: 7, desc: "Underground LA label specializing in heavily distressed, rhinestone-detailed pieces. Vintage-washed cottons with patchwork applique work." },
    'maison-mihara-yasuhiro': { name: 'Maison Mihara Yasuhiro', count: 5, desc: "Tokyo-based avant-garde designer Mihara Yasuhiro reimagines silhouettes with hand-distressed details and his iconic warped 'OG Sole.' A Japanese master of the elevated everyday." },
    nike: { name: 'Nike', count: 2, desc: "The original American sport-and-streetwear icon. Timeless silhouettes — Air Force 1, Dunk, Cortez — and current grail collabs. Authenticated and graded by Shopped By Thread." },
  };

  const PRODUCTS = {
    'hellstar-records-iii': {
      brand: 'hellstar',
      name: 'Records Vol. III Hoodie',
      price: 385,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached. No flaws, defects, or signs of wear. Stored in archival conditions.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'sold', M: 'avail', L: 'avail', XL: 'avail', XXL: 'sold' },
      desc: "From the third volume of Hellstar's seminal Records series. Heavyweight French terry construction, oversized box fit, with the signature dual-print graphic on chest and back. Authenticated and graded by Shopped By Thread."
    },
    'denim-tears-cotton-wreath': {
      brand: 'denim-tears',
      name: 'Cotton Wreath Crewneck',
      price: 420,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'cream',
      sizes: { S: 'avail', M: 'avail', L: 'sold', XL: 'avail' },
      desc: "Tremaine Emory's signature cotton wreath embroidered on heavyweight French terry. A continuation of Denim Tears' exploration of African-American history through clothing."
    },
    'chrome-hearts-cemetery': {
      brand: 'chrome-hearts',
      name: 'Cemetery Cross Tee — Black',
      price: 725,
      priceWas: 850,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'Grail',
      sizes: { S: 'sold', M: 'avail', L: 'sold', XL: 'sold' },
      desc: "Chrome Hearts' iconic cemetery cross graphic on a heavyweight black tee. Made in USA. Authenticated tag, hand-stitched, with the unmistakable Chrome Hearts construction quality."
    },
    'corteiz-guerillaz': {
      brand: 'corteiz',
      name: 'Guerillaz Cargo Pants',
      price: 240,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached. Stored flat in archival conditions.',
      variant: 'stone',
      sizes: { '28': 'avail', '30': 'avail', '32': 'avail', '34': 'sold', '36': 'avail' },
      desc: "Corteiz's iconic Guerillaz cargo silhouette. Heavyweight ripstop, oversized leg, with the Alcatraz logo embroidered on the back pocket. London exclusive — notoriously hard to source."
    },
    'stussy-8ball': {
      brand: 'stussy',
      name: 'Born and Raised 8-Ball',
      price: 95,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'bone',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Stüssy's iconic 8-ball graphic, the Born And Raised colorway. Heavyweight cotton tee, garment-dyed, with the Tribe stamp on the inside neck. Brand new with original tags."
    },
    'bape-shark': {
      brand: 'bape',
      name: 'Shark Full-Zip Hoodie — Blue',
      price: 540,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'charcoal',
      sizes: { S: 'sold', M: 'avail', L: 'avail', XL: 'sold' },
      desc: "Bape's signature shark face full-zip hoodie in blue camo colorway. Full ape head graphic, signature camo throughout, tiger embroidery on the hood. The streetwear classic."
    },
    'sp5der-web': {
      brand: 'sp5der',
      name: 'Web Hoodie — Dusty Blue',
      price: 310,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with tags. Sealed.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Sp5der's iconic web graphic in dusty blue. The Young Thug-affiliated cult favorite. Heavyweight cotton fleece, oversized fit, signature spider arch print on the chest with the full web below."
    },
    'rhude-moonlight': {
      brand: 'rhude',
      name: 'Moonlight Track Jacket',
      price: 465,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'taupe',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Rhuigi Villaseñor's signature track silhouette in moonlight colorway. Vintage-inspired racing motifs, premium nylon construction, and that unmistakable Rhude attention to detail."
    },
    'mmy-hank-low': {
      brand: 'maison-mihara-yasuhiro',
      name: 'Hank OG Sole Canvas Low',
      price: 395,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new in box with all original accessories.',
      variant: 'cream',
      tag: 'New',
      sizes: { '8': 'avail', '9': 'avail', '10': 'avail', '11': 'avail' },
      desc: "Mihara Yasuhiro's signature Hank low-top in black canvas with the iconic warped, hand-finished 'OG Sole.' Each pair is crafted so the soles look organically melted — no two are exactly alike. Brand new in box."
    },
    'supreme-satin-applique-hoodie': {
      brand: 'supreme',
      name: 'Satin Applique Hooded Sweatshirt',
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached. From Supreme FW24.',
      variant: 'charcoal',
      tag: 'FW24',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Supreme FW24 Satin Applique Hooded Sweatshirt in black. Heavyweight cotton fleece with the signature satin Supreme logo running vertically across the back panel and hood. Heritage Box Logo construction, brand new with tags."
    },
    'bape-broken-college-tee': {
      brand: 'bape',
      name: 'Broken College Tee',
      price: 60,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached. From Bape SS23.',
      variant: 'charcoal',
      tag: 'SS23',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Bape SS23 Broken College Tee in black. Signature Bape college arch logo with the iconic ape head graphic, cleverly disrupted/'broken' across the chest. 100% cotton, brand new with tags."
    },
    'bape-sakura-tree-tee': {
      brand: 'bape',
      name: 'Sakura Tree Tee',
      price: 60,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Bape Sakura Tree Tee in black. Cherry blossom tree silhouette forming the iconic ape head, with falling petals and 'A Bathing Ape' wordmark. Soft cotton, classic boxy fit, brand new with tags."
    },
    'gallery-dept-gpatch': {
      brand: 'gallery-dept',
      name: 'G-Patch Fucked Up Logo Hoodie',
      price: 540,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Gallery Dept's signature upside-down logo hoodie with the multi-color G-patches on the hood. Vintage-washed black heavyweight cotton, oversized fit. Brand new with original tags."
    },
    'vale-forever-classico': {
      brand: 'vale-forever',
      name: 'Black Classico Zip Up Hoodie',
      price: 320,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Vale Forever's signature Classico zip-up in vintage-washed black with rhinestone detailing across the body and 'Valley of Dreams' patchwork applique on the chest. Heavyweight cotton, brand new with tags."
    },
    'vale-forever-devils': {
      brand: 'vale-forever',
      name: 'Devils Advocate Long-Sleeve Tee',
      price: 285,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Vale Forever's Devils Advocate long-sleeve in vintage-washed black. Vintage horror-poster graphic across the chest with 'Valley Sport Dept' branding, sleeve hits down both arms. Heavyweight cotton, brand new with tags."
    },


    'burberry-bape': {
      brand: 'bape',
      name: "A Bathing Ape Check by Bathing Tee",
      price: 60,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. A Bathing Ape Check by Bathing Tee authenticated by Shopped By Thread.",
    },
    'travis-scott-sp5der': {
      brand: 'sp5der',
      name: "Travis Scott Cactus Jack x Sp5der Days Before Rodeo III Tee",
      price: 60,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'SS24',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Travis Scott Cactus Jack x Sp5der Days Before Rodeo III Tee authenticated by Shopped By Thread.",
    },
    'bape-sanrio-hello-kitty-pink': {
      brand: 'bape',
      name: "BAPE x Sanrio Characters Hello Kitty Camo Full Zip Hoodie (Ladies)",
      price: 120,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'red',
      tag: 'FW24',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. BAPE x Sanrio Characters Hello Kitty Camo Full Zip Hoodie (Ladies) authenticated by Shopped By Thread.",
    },
    'vale-forever-religion-zip-up': {
      brand: 'vale-forever',
      name: "Vale Forever Religion Zip Up Top",
      price: 120,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'charcoal',
      tag: 'SS26',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Vale Forever Religion Zip Up Top authenticated by Shopped By Thread.",
    },
    'vale-forever-collage-zip-up': {
      brand: 'vale-forever',
      name: "Vale Forever Collage Zip Up Top \"Mardi Gras\"",
      price: 120,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Vale Forever Collage Zip Up Top \"Mardi Gras\" authenticated by Shopped By Thread.",
    },
    'supreme-arabic-box-logo-black': {
      brand: 'supreme',
      name: "Supreme Arabic Box Logo Tee",
      price: 60,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'charcoal',
      tag: 'SS26',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Supreme Arabic Box Logo Tee authenticated by Shopped By Thread.",
    },
    'supreme-arabic-box-logo-white': {
      brand: 'supreme',
      name: "Supreme Arabic Box Logo Tee",
      price: 60,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'SS26',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Supreme Arabic Box Logo Tee authenticated by Shopped By Thread.",
    },
    'Maison-Mihara-Yasuhiro-peterson': {
      brand: 'maison-mihara-yasuhiro',
      name: "Maison Mihara Yasuhiro Peterson OG Sole Canvas Low",
      price: 250,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'blue',
      tag: '2023',
      sizes: { '7': 'avail', '8': 'avail', '9': 'avail', '10': 'avail', '11': 'avail', '12': 'avail' },
      desc: "Brand new with original tags. Maison Mihara Yasuhiro Peterson OG Sole Canvas Low authenticated by Shopped By Thread.",
    },
    'hellstar-cartoon-cross': {
      brand: 'hellstar',
      name: "Hellstar Cartoon Cross T-shirt",
      price: 60,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Hellstar Cartoon Cross T-shirt authenticated by Shopped By Thread.",
    },
    'denim-tears-the-cotton-wreath-shorts-pink': {
      brand: 'denim-tears',
      name: "Denim Tears The Cotton Wreath Shorts",
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'red',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Denim Tears The Cotton Wreath Shorts authenticated by Shopped By Thread.",
    },
    'denim-tears-the-cotton-wreath-shorts-royal-blue': {
      brand: 'denim-tears',
      name: "Denim Tears The Cotton Wreath Shorts",
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'blue',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Denim Tears The Cotton Wreath Shorts authenticated by Shopped By Thread.",
    },
    'denim-tears-the-cotton-wreath-shorts-black': {
      brand: 'denim-tears',
      name: "Denim Tears The Cotton Wreath Shorts",
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Denim Tears The Cotton Wreath Shorts authenticated by Shopped By Thread.",
    },
    'denim-tears-the-cotton-wreath-shorts-grey': {
      brand: 'denim-tears',
      name: "Denim Tears The Cotton Wreath Shorts",
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Denim Tears The Cotton Wreath Shorts authenticated by Shopped By Thread.",
    },
    'denim-tears-the-cotton-wreath-shorts-brown': {
      brand: 'denim-tears',
      name: "Denim Tears The Cotton Wreath Shorts",
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'rust',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Denim Tears The Cotton Wreath Shorts authenticated by Shopped By Thread.",
    },
    'denim-tears-the-cotton-wreath-shorts-monochrome': {
      brand: 'denim-tears',
      name: "Denim Tears The Cotton Wreath Shorts",
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Denim Tears The Cotton Wreath Shorts authenticated by Shopped By Thread.",
    },
    'denim-tears-the-cotton-wreath-shorts-navy': {
      brand: 'denim-tears',
      name: "Denim Tears The Cotton Wreath Shorts",
      price: 80,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Brand new with original tags. Denim Tears The Cotton Wreath Shorts authenticated by Shopped By Thread.",
    },
    'vale-forever-valley-target-tee': {
      brand: 'vale-forever',
      name: "Valley Target Tee — Vale Lives Dreams",
      price: 120,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'charcoal',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Vale Forever's vintage-washed charcoal tee with the iconic green target and 'Valley · Vale Lives Dreams' graphic. Heavyweight cotton, oversized fit. Brand new with original tags.",
    },
    'vale-forever-big-dogs-long-sleeve': {
      brand: 'vale-forever',
      name: "Valley Sport Dept Big Dogs Long-Sleeve",
      price: 120,
      cond: 'Brand New / Tagged',
      condDetail: 'Brand new with original tags attached. Authenticated by Shopped By Thread.',
      variant: 'ink',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Vale Forever's 'Valley Sport Dept' long-sleeve in vintage-washed black with the chained rottweiler graphic and sleeve hits. Heavyweight cotton, boxy fit. Brand new with original tags.",
    },
    'nike-air-force-1-low-white': {
      brand: 'nike',
      name: "Air Force 1 '07 Low — Triple White",
      price: 70,
      cond: 'Brand New / Boxed',
      condDetail: 'Brand new in original Nike box. Authenticated by Shopped By Thread.',
      variant: 'cream',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { '7': 'avail', '8': 'avail', '9': 'avail', '10': 'avail', '11': 'avail', '12': 'avail' },
      desc: "Nike's enduring Air Force 1 Low in the original triple white colorway. Full-grain leather upper, Air-cushioned sole, classic AF-1 silhouette. Brand new in box.",
    },
    'nike-air-force-1-low-black': {
      brand: 'nike',
      name: "Air Force 1 '07 Low — Triple Black",
      price: 70,
      cond: 'Brand New / Boxed',
      condDetail: 'Brand new in original Nike box. Authenticated by Shopped By Thread.',
      variant: 'ink',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { '7': 'avail', '8': 'avail', '9': 'avail', '10': 'avail', '11': 'avail', '12': 'avail' },
      desc: "Nike's Air Force 1 Low in the all-black colorway. Full-grain leather upper, Air-cushioned sole, classic AF-1 silhouette. Brand new in box.",
    },
   'bape-inter-miami-camo-tee-black': {
      brand: 'bape',
      name: "Inter Miami CF Camo Tee — Black",
      price: 60,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Nigo's A Bathing Ape × Inter Miami CF — the first soccer-club collaboration in BAPE's recent run. Tonal black camo with pink Miami crests and pink ape head emblem. Brand new with original tags. BAPE runs small — size up.",
    },
    'bape-inter-miami-camo-tee-grey': {
      brand: 'bape',
      name: "Inter Miami CF Camo Tee — White",
      price: 60,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'bone',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Nigo's A Bathing Ape × Inter Miami CF in the white camo colorway. Tonal grey-and-white BAPE camo with Inter Miami's pink crests preserved on the front. Brand new with original tags. BAPE runs small — size up.",
    },
    'sp5der-pnk-v2-hoodie-black': {
      brand: 'sp5der',
      name: "P*NK V2 Hoodie — Black",
      price: 99,
      priceWas: 299,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'Hot',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Young Thug's Sp5der P*NK V2 in the black colorway — punk-rocked spider script in pink applique, multicolor star scatter, signature web graphic across the back. Heavyweight fleece, boxy fit. Brand new with original tags.",
    },
    'sp5der-pnk-v2-hoodie-pink': {
      brand: 'sp5der',
      name: "P*NK V2 Hoodie — Hot Pink",
      price: 99,
      priceWas: 299,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'red',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Sp5der's signature hot-pink hoodie with the V2 spider script and full web graphic. From Young Thug's Atlanta-born label — the color that put Sp5der on every feed. Brand new with original tags.",
    },
    'sp5der-web-hoodie-sky-blue': {
      brand: 'sp5der',
      name: "Web Hoodie — Sky Blue",
      price: 99,
      priceWas: 299,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'blue',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Sp5der's classic Web hoodie in sky blue — tonal white web sprawl and spider wordmark across the chest. Heavyweight fleece. Brand new with original tags.",
    },
    'sp5der-og-web-hoodie-pink': {
      brand: 'sp5der',
      name: "OG Web Hoodie — Pink",
      price: 99,
      priceWas: 299,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'red',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Sp5der's original Web hoodie released in the soft pink colorway — the silhouette that built the brand. White spider script and full web graphic. Heavyweight fleece, boxy fit. Brand new with original tags.",
    },
    'stussy-basic-tee-white': {
      brand: 'stussy',
      name: "Basic Stüssy Tee — White",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Stüssy's foundational Basic logo tee in white — the signature scrawl on heavyweight cotton. Shawn Stüssy's wordmark, since 1980. Brand new with original tags.",
    },
    'stussy-roller-tee-black': {
      brand: 'stussy',
      name: "Roller Dice Tee — Black",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Stüssy's rolling-dice graphic on a heavyweight black tee. The Tribe stamp inside the neck, signature scrawl above. Brand new with original tags.",
    },
    'stussy-basic-tee-black': {
      brand: 'stussy',
      name: "Basic Stüssy Tee — Black",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'Hot',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Stüssy's foundational Basic logo tee in black — the signature scrawl on heavyweight cotton. The piece every Tribe rotation runs through. Brand new with original tags.",
    },
    'stussy-basic-pigment-dyed-tee-black': {
      brand: 'stussy',
      name: "Basic Pigment-Dyed Tee — Black",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "The Basic Stüssy tee in pigment-dyed black — garment-dyed for a faded, lived-in finish that softens with every wash. Heavyweight cotton, signature scrawl. Brand new with original tags.",
    },
    'stussy-8ball-pigment-dyed-tee-black': {
      brand: 'stussy',
      name: "8-Ball Pigment-Dyed Tee — Black",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Stüssy's iconic 8-ball graphic on pigment-dyed black cotton — the signature scrawl above, the cue-ball below. Garment-dyed for a vintage finish. Brand new with original tags.",
    },
    'stussy-fuzzy-dice-tee-black': {
      brand: 'stussy',
      name: "Fuzzy Dice Tee — Black",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Stüssy's fuzzy-dice graphic — the rearview-mirror staple — on heavyweight black cotton. Signature scrawl above, dice rolling below. Brand new with original tags.",
    },
    'stussy-world-tour-tee-black': {
      brand: 'stussy',
      name: "World Tour Tee — Black",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "The Stüssy World Tour back-print tee — Santa Ana, Brooklyn, Venice. The Tribe's chapter list, rendered in classic Stüssy scrawl. Heavyweight cotton, brand new with original tags.",
    },
    'stussy-x-patta-sound-connection-tee-black': {
      brand: 'stussy',
      name: "Stüssy × Patta Sound Connection Tee — Black",
      price: 49,
      priceWas: 99,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new with original tags attached.',
      variant: 'ink',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Stüssy × Patta — the Amsterdam-LA cross-Atlantic capsule. The Sound Connection graphic on heavyweight black cotton, with both house emblems sharing the chest. Brand new with original tags.",
    },
    'supreme-hanes-boxer-briefs-4pack-black': {
      brand: 'supreme',
      name: "Supreme × Hanes Boxer Briefs (4-Pack) — Black",
      price: 25,
      priceWas: 79,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new in the original sealed Supreme × Hanes pack.',
      variant: 'ink',
      tag: 'Hot',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Supreme × Hanes 4-pack boxer briefs in black — the box-logo waistband, the Hanes construction, the Supreme drop. Sealed pack of four, brand new.",
    },
    'supreme-hanes-boxer-briefs-4pack-white': {
      brand: 'supreme',
      name: "Supreme × Hanes Boxer Briefs (4-Pack) — White",
      price: 25,
      priceWas: 79,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new in the original sealed Supreme × Hanes pack.',
      variant: 'cream',
      tag: 'New',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Supreme × Hanes 4-pack boxer briefs in white — the box-logo waistband on classic white Hanes. The most-asked-about everyday Supreme drop. Sealed pack of four, brand new.",
    },
    'supreme-hanes-boxer-briefs-2pack-pink': {
      brand: 'supreme',
      name: "Supreme × Hanes Boxer Briefs (2-Pack) — Pink",
      price: 40,
      priceWas: 79,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new in the original sealed Supreme × Hanes pack.',
      variant: 'red',
      tag: 'In Stock',
      tagAlt: true,
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Supreme × Hanes boxer briefs in soft pink — limited 2-pack colorway with the iconic box-logo waistband. Brand new, original sealed packaging.",
    },
    'supreme-hanes-boxer-briefs-2pack-grey': {
      brand: 'supreme',
      name: "Supreme × Hanes Boxer Briefs (2-Pack) — Heather Grey",
      price: 40,
      priceWas: 79,
      cond: 'Brand New / Tagged',
      condDetail: 'Item is brand new in the original sealed Supreme × Hanes pack.',
      variant: 'stone',
      sizes: { S: 'avail', M: 'avail', L: 'avail', XL: 'avail' },
      desc: "Supreme × Hanes boxer briefs in heather grey — limited 2-pack with the box-logo waistband on heathered Hanes cotton. Brand new, original sealed packaging.",
    },  
  };

  // Helper: get all products for a brand
  function productsByBrand(brandSlug) {
    return Object.entries(PRODUCTS)
      .filter(([_, p]) => p.brand === brandSlug)
      .map(([id, p]) => ({ id, ...p }));
  }


  // ============================================
  // STATE — Cart
  // ============================================
  const state = {
    cart: [], // { productId, size }
  };

  function addToCart(productId, size) {
    state.cart.push({ productId, size, addedAt: Date.now() });
    updateCartCount();
    showToast(`Added to cart · ${PRODUCTS[productId].name} (${size})`);
  }

  function removeFromCart(idx) {
    state.cart.splice(idx, 1);
    updateCartCount();
    renderCart();
  }

 // ============================================
  // WHOLESALE TIER LOGIC
  // ============================================
  // 4 quantity-based pricing tiers
  const WHOLESALE_TIERS = [
    { min: 1,   max: 10, discount: 0.25, name: 'Tier 1' },
    { min: 11,  max: 49, discount: 0.35, name: 'Tier 2' },
    { min: 50,  max: 99, discount: 0.50, name: 'Tier 3' },
    { min: 100, max: Infinity, discount: 0.60, name: 'Tier 4' },
  ];

  function getWholesaleTier(unitCount) {
    return WHOLESALE_TIERS.find(t => unitCount >= t.min && unitCount <= t.max)
      || WHOLESALE_TIERS[0];
  }

  function bestWholesaleTier() {
    return WHOLESALE_TIERS[WHOLESALE_TIERS.length - 1];
  }

  function wholesalePriceAtTier(retailPrice, tier) {
    return Math.round(retailPrice * (1 - tier.discount));
  }

  function currentCartTier() {
    return getWholesaleTier(state.cart.length);
  }

  function nextTierNudge() {
    const count = state.cart.length;
    const current = getWholesaleTier(count);
    const currentIdx = WHOLESALE_TIERS.indexOf(current);
    if (currentIdx >= WHOLESALE_TIERS.length - 1) return null;
    const next = WHOLESALE_TIERS[currentIdx + 1];
    const needed = next.min - count;
    return { needed, discount: next.discount, tier: next };
  }

  function cartTotal() {
    const isWholesale = document.body.classList.contains('is-wholesale');
    if (isWholesale) {
      const tier = currentCartTier();
      return state.cart.reduce((sum, item) => {
        const p = PRODUCTS[item.productId];
        if (!p) return sum;
        return sum + wholesalePriceAtTier(p.price, tier);
      }, 0);
    }
    return state.cart.reduce((sum, item) => {
      const p = PRODUCTS[item.productId];
      return p ? sum + p.price : sum;
    }, 0);
  } 

  function updateCartCount() {
    document.querySelector('.header__cart-count').textContent = `[${state.cart.length}]`;
  }


  // ============================================
  // TOAST
  // ============================================
  let toastTimer;
  function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
  }


  // ============================================
  // NAVIGATION
  // ============================================
  // ============================================
  // PAGE TRANSITIONS (cinematic crossfade system)
  // ============================================
  // Depth map — used to figure out direction of navigation.
  // Going to deeper depth = forward push. Shallower = backward pull.
  // Same depth = soft fade. Cart/account get their own special transitions.
  const VIEW_DEPTH = {
    home: 0,
    brand: 1,
    brands: 1,
    product: 2,
    cart: 1,
    account: 1,
    about: 1,
    contact: 1,
    privacy: 1,
    terms: 1,
    authentication: 1,
  };
  let _currentView = 'home';
  let _navigationLock = false;  // Prevents rapid-fire double-navigations

  function pickTransition(fromView, toView) {
    // Special cases first
    if (toView === 'cart') return 'cart-whoosh';
    if (toView === 'account' || fromView === 'account') return 'account-reveal';

    const fromDepth = VIEW_DEPTH[fromView] ?? 0;
    const toDepth = VIEW_DEPTH[toView] ?? 0;
    if (toDepth > fromDepth) return 'forward-push';
    if (toDepth < fromDepth) return 'backward-pull';
    return 'soft-fade';  // Same depth (e.g., product -> product, brand -> brand)
  }

  function navigate(view, params = {}) {
    if (_navigationLock) return;
    if (view === _currentView && Object.keys(params).length === 0) return;

    const fromView = _currentView;
    const transition = pickTransition(fromView, view);
    _navigationLock = true;

    const fromEl = document.querySelector('.view--active');
    const toEl = document.getElementById('view-' + view);
    if (!toEl) { _navigationLock = false; return; }

    // Hydrate the destination view BEFORE animating in (so content is ready)
    if (view === 'brand') hydrateBrand(params.brand || 'hellstar');
    if (view === 'brands') hydrateAllBrands();
    if (view === 'product') hydrateProduct(params.product || 'hellstar-records-iii');
    if (view === 'cart') renderCart();
    if (view === 'account') hydrateAccount();

    // Phase 1: animate OUT current view (if any)
    if (fromEl && fromEl !== toEl) {
      fromEl.classList.add('view-leaving', 'view-leaving--' + transition);
    }

    // Phase 2: after exit duration, swap views and animate IN new one
    const exitDuration = 180;  // matches CSS transition timing
    setTimeout(() => {
      // Hide all views, show only the target
      document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('view--active', 'view-leaving',
          'view-leaving--soft-fade', 'view-leaving--forward-push',
          'view-leaving--backward-pull', 'view-leaving--cart-whoosh',
          'view-leaving--account-reveal');
      });
      toEl.classList.add('view--active', 'view-entering', 'view-entering--' + transition);
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Phase 3: kick off the entry animation on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          toEl.classList.remove('view-entering--' + transition);
          // After enter animation completes, clean up
          setTimeout(() => {
            toEl.classList.remove('view-entering');
            _currentView = view;
            _navigationLock = false;
          }, 220);
        });
      });
    }, exitDuration);
  }

  // Global event delegation for [data-nav]
  document.body.addEventListener('click', (e) => {
    const navEl = e.target.closest('[data-nav]');
    if (!navEl) return;
    e.preventDefault();
    navigate(navEl.dataset.nav, {
      brand: navEl.dataset.brand,
      product: navEl.dataset.product,
    });
  });

  // Keyboard accessibility for [data-nav] elements that aren't <a>/<button>
  // (e.g., the clickable hero tiles use role=link tabindex=0)
  document.body.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const navEl = e.target.closest('[data-nav]');
    if (!navEl) return;
    // Only fire on elements that don't natively handle Enter/Space (links/buttons do)
    const tag = navEl.tagName.toLowerCase();
    if (tag === 'a' || tag === 'button') return;
    e.preventDefault();
    navigate(navEl.dataset.nav, {
      brand: navEl.dataset.brand,
      product: navEl.dataset.product,
    });
  });


  // ============================================
  // PRODUCT CARD RENDERER (used in multiple views)
  // ============================================
  function productCardHTML(id, p) {
    const tagHTML = p.tag
      ? `<span class="product__tag${p.tagAlt ? ' product__tag--alt' : ''}">${p.tag}</span>`
      : '';
  const currentTier = currentCartTier();
    const wholesale = wholesalePriceAtTier(p.price, currentTier);
    const priceWas = p.priceWas ? `<span class="product__price-was">$${p.priceWas}</span>` : '';
    const sizesHTML = Object.entries(p.sizes).map(([s, status]) =>
      `<div class="product__size${status === 'sold' ? ' sold' : ''}" data-size="${s}">${s}</div>`
    ).join('');

    // Real product photo if we have one for this id.
    // Try direct lookup first (new bulk-imported products), then legacy short-key map.
    const PHOTO_KEY_BY_PRODUCT_ID = {
      'hellstar-records-iii': 'hellstar',
      'gallery-dept-gpatch': 'galleryDept',
      'vale-forever-classico': 'valeForever',
      'vale-forever-devils': 'valeDevils',
      'bape-shark': 'bape',
      'sp5der-web': 'sp5der',
      'mmy-hank-low': 'mmyHank',
      'supreme-satin-applique-hoodie': 'supremeSatin',
      'bape-broken-college-tee': 'bapeBroken',
      'bape-sakura-tree-tee': 'bapeSakura',
    };
    let photoB64 = window.__PRODUCT_PHOTOS?.[id]; // direct lookup by product id
    if (!photoB64) {
      const photoKey = PHOTO_KEY_BY_PRODUCT_ID[id];
      photoB64 = photoKey ? window.__PRODUCT_PHOTOS?.[photoKey] : null;
    }
    const hasPhoto = !!photoB64;
    const photoHTML = hasPhoto
      ? `<img class="product__photo" src="${photoB64}" alt="${p.name}">`
      : '';
    const placeholderHTML = hasPhoto ? '' : `
      <div class="product__img product__img--no-photo">
        <span class="product__img-brand">${BRANDS[p.brand].name}</span>
        <span class="product__img-pending">Photo coming soon</span>
      </div>`;
    const photoClasses = hasPhoto ? ' product--has-photo product--photo-light' : '';

    return `
      <div class="product product--${p.variant}${photoClasses}" data-nav="product" data-product="${id}">
        <div class="product__img-wrap">
          ${tagHTML}
          <div class="product__zoom">⊕</div>
          ${photoHTML}
          ${placeholderHTML}
          <div class="product__overlay">
            <div class="product__overlay-label">Quick add — select size</div>
            <div class="product__sizes">${sizesHTML}</div>
          </div>
        </div>
        <div class="product__info">
          <div>
            <div class="product__brand">${BRANDS[p.brand].name}</div>
            <div class="product__name">${p.name}</div>
            <div class="product__cond">${p.cond}</div>
          </div>
          <div class="product__price">
            <span class="price-retail">$${p.price}${priceWas}</span>
            <span class="price-wholesale">$${wholesale}</span>
            <span class="price-retail-strike">$${p.price}</span>
          </div>
        </div>
      </div>`;
  }


  // ============================================
  // HYDRATE BRAND PAGE
  // ============================================
  // Filter state — applied to brand pages
  const brandFilters = {
    sort: 'newest',
    size: '',
    price: '',
    inStockOnly: true,
  };
  let _activeBrandSlug = null;

  function applyBrandFilters(items) {
    let filtered = items.slice();

    // In-stock filter: at least one size available
    if (brandFilters.inStockOnly) {
      filtered = filtered.filter(p =>
        Object.values(p.sizes).some(s => s !== 'sold')
      );
    }
    // Size filter
    if (brandFilters.size) {
      filtered = filtered.filter(p =>
        p.sizes[brandFilters.size] && p.sizes[brandFilters.size] !== 'sold'
      );
    }
    // Price filter
    if (brandFilters.price) {
      const [min, max] = brandFilters.price.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }
    // Sorting
    if (brandFilters.sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (brandFilters.sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (brandFilters.sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    // 'newest' = original order

    return filtered;
  }

  function hydrateBrand(slug) {
    const brand = BRANDS[slug];
    if (!brand) return;
    _activeBrandSlug = slug;
    document.getElementById('brand-name').textContent = brand.name;
    document.getElementById('brand-crumb').textContent = brand.name;
    document.getElementById('brand-count').textContent = brand.count;
    document.getElementById('brand-desc').textContent = brand.desc;
    renderBrandGrid();
  }

  function renderBrandGrid() {
    if (!_activeBrandSlug) return;
    const allItems = productsByBrand(_activeBrandSlug);
    const items = applyBrandFilters(allItems);
    document.getElementById('brand-filter-count').textContent = `${items.length} result${items.length !== 1 ? 's' : ''} shown`;

    const grid = document.getElementById('brand-product-grid');
    const brand = BRANDS[_activeBrandSlug];
    if (items.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1; padding:80px 0; text-align:center; font-family:var(--mono); font-size:11px; letter-spacing:0.14em; color:var(--ink-soft); text-transform:uppercase;">No matches — try removing some filters</div>`;
    } else {
      grid.innerHTML = items.map(p => productCardHTML(p.id, p)).join('');
    }
  }


  // ============================================
  // HYDRATE PRODUCT DETAIL
  // ============================================
  function hydrateProduct(id) {
    const p = PRODUCTS[id];
    if (!p) return;
    const brand = BRANDS[p.brand];

    document.getElementById('pd-brand').textContent = brand.name;
    document.getElementById('pd-brand').dataset.brand = p.brand;
    document.getElementById('pd-name').textContent = p.name;
    // Update price display with retail / wholesale options
    const wholesalePrice = Math.round(p.price * 0.65);
    document.getElementById('pd-price').innerHTML = `
      <span class="price-retail">$${p.price}</span>
      <span class="price-wholesale">$${wholesalePrice}</span>
      <span class="price-retail-strike">$${p.price}</span>
    `;
    // Tease line (only for non-wholesale visitors)
    const isWholesalePD = document.body.classList.contains('is-wholesale');
    const bestTier = bestWholesaleTier();
    const bestPrice = wholesalePriceAtTier(p.price, bestTier);
    const teaseEl = document.getElementById('pd-wholesale-tease');
    if (teaseEl) {
      if (!isWholesalePD) {
        teaseEl.innerHTML = `
          <span class="pd__tease-price">Wholesale from $${bestPrice}</span>
          <span class="pd__tease-meta">${Math.round(bestTier.discount*100)}% off at ${bestTier.min}+ units</span>
          <a class="pd__tease-link" id="pd-tease-apply">Apply for wholesale →</a>
        `;
        teaseEl.style.display = '';
      } else {
        teaseEl.style.display = 'none';
      }
    }
    // Upgrade nudge (only for wholesale buyers)
    const nudgeEl = document.getElementById('pd-wholesale-nudge');
    if (nudgeEl) {
      if (isWholesalePD) {
        const currentTierPD = currentCartTier();
        const nudge = nextTierNudge();
        if (nudge) {
          nudgeEl.innerHTML = `★ Add ${nudge.needed} more item${nudge.needed!==1?'s':''} to unlock ${Math.round(nudge.discount*100)}% off`;
          nudgeEl.style.display = '';
        } else {
          nudgeEl.innerHTML = `★ Maximum wholesale tier active (${Math.round(currentTierPD.discount*100)}% off)`;
          nudgeEl.style.display = '';
        }
      } else {
        nudgeEl.style.display = 'none';
      }
    }
    document.getElementById('pd-cond').textContent = p.cond;
    document.getElementById('pd-main-img').textContent = brand.name;
    document.getElementById('pd-crumb-brand').textContent = brand.name;
    document.getElementById('pd-crumb-brand').dataset.brand = p.brand;
    document.getElementById('pd-crumb-name').textContent = p.name;
    document.getElementById('pd-description').textContent = p.desc;
    document.getElementById('pd-cond-trigger').textContent = `Condition · ${p.cond}`;
    document.getElementById('pd-cond-content').textContent = p.condDetail;

    // Was-price
    const wasEl = document.getElementById('pd-price-was');
    if (p.priceWas) { wasEl.textContent = `$${p.priceWas}`; wasEl.style.display = ''; }
    else { wasEl.style.display = 'none'; }

    // Variant background
    const main = document.getElementById('pd-main');
    main.className = 'pd__main pd__main--' + p.variant;

    // Inject real product photo if available.
    // Mirror productCardHTML lookup order: direct id first, then legacy short-key map.
    const PHOTO_KEY_BY_PRODUCT_ID = {
      'hellstar-records-iii': 'hellstar',
      'gallery-dept-gpatch': 'galleryDept',
      'vale-forever-classico': 'valeForever',
      'vale-forever-devils': 'valeDevils',
      'bape-shark': 'bape',
      'sp5der-web': 'sp5der',
      'mmy-hank-low': 'mmyHank',
      'supreme-satin-applique-hoodie': 'supremeSatin',
      'bape-broken-college-tee': 'bapeBroken',
      'bape-sakura-tree-tee': 'bapeSakura',
    };
    let photo = window.__PRODUCT_PHOTOS?.[id]; // direct lookup by product id
    if (!photo) {
      const photoKey = PHOTO_KEY_BY_PRODUCT_ID[id];
      photo = photoKey ? window.__PRODUCT_PHOTOS?.[photoKey] : null;
    }
    // Clear any prior photo
    const existingPhoto = main.querySelector('.pd__photo');
    if (existingPhoto) existingPhoto.remove();
    const placeholderText = main.querySelector('.pd__main-img');
    if (photo) {
      const photoImg = document.createElement('img');
      photoImg.className = 'pd__photo';
      photoImg.src = photo;
      photoImg.alt = p.name;
      main.appendChild(photoImg);
      main.classList.add('pd__main--photo');
      if (placeholderText) placeholderText.style.display = 'none';
    } else {
      // Fallback to gradient + brand text
      main.classList.remove('pd__main--photo');
      if (placeholderText) {
        placeholderText.style.display = '';
        placeholderText.textContent = brand.name;
      }
    }

    // Sizes
    const sizesEl = document.getElementById('pd-sizes');
    sizesEl.innerHTML = '';
    Object.entries(p.sizes).forEach(([s, status]) => {
      const btn = document.createElement('button');
      btn.className = 'pd__size' + (status === 'sold' ? ' sold' : '');
      btn.textContent = s;
      if (status !== 'sold') {
        btn.addEventListener('click', () => {
          sizesEl.querySelectorAll('.pd__size').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          const addBtn = document.getElementById('pd-add');
          addBtn.disabled = false;
          const isWholesale = document.body.classList.contains('is-wholesale');
const displayPrice = isWholesale ? wholesalePriceAtTier(p.price, currentCartTier()) : p.price;          addBtn.textContent = `Add to cart — $${displayPrice}`;
          addBtn.dataset.size = s;
        });
      }
      sizesEl.appendChild(btn);
    });

    // Add button
    const addBtn = document.getElementById('pd-add');
    addBtn.disabled = true;
    addBtn.textContent = 'Select a size';
    addBtn.onclick = () => {
      if (!addBtn.dataset.size) return;
      addToCart(id, addBtn.dataset.size);
      const isWholesale = document.body.classList.contains('is-wholesale');
const displayPrice = isWholesale ? wholesalePriceAtTier(p.price, currentCartTier()) : p.price;      const orig = `Add to cart — $${displayPrice}`;
      addBtn.textContent = 'Added ✓';
      setTimeout(() => { addBtn.textContent = orig; }, 1400);
    };

    // Accordions
    document.querySelectorAll('#view-product .pd__accordion-item').forEach(item => {
      const trig = item.querySelector('.pd__accordion-trigger');
      trig.onclick = () => item.classList.toggle('open');
    });

    // Related: prefer same-brand products first, then fill with others
    const sameBrandItems = Object.entries(PRODUCTS).filter(([k, prod]) => prod.brand === p.brand && k !== id);
    const otherItems = Object.entries(PRODUCTS).filter(([k, prod]) => prod.brand !== p.brand && k !== id);
    const related = [...sameBrandItems, ...otherItems].slice(0, 4);
    document.getElementById('pd-related-grid').innerHTML =
      related.map(([k, prod]) => productCardHTML(k, prod)).join('');
  }


  // ============================================
  // RENDER CART
  // ============================================
  function renderCart() {
    const grid = document.getElementById('cart-grid');
    const count = state.cart.length;
    document.getElementById('cart-page-count').textContent = `${count} item${count !== 1 ? 's' : ''}`;

    if (count === 0) {
      grid.innerHTML = `
        <div class="cart-empty">
          <h2 class="cart-empty__title">Your cart is <em>empty</em></h2>
          <p class="cart-empty__sub">Once you add pieces, they'll appear here.</p>
          <a class="cart-empty__cta" data-nav="home">← Continue shopping</a>
        </div>`;
      return;
    }

    const subtotal = cartTotal();
    const shipping = subtotal >= 300 ? 0 : 18;
    const total = subtotal + shipping;

    const linesHTML = state.cart.map((item, idx) => {
      const p = PRODUCTS[item.productId];
      if (!p) return '';
      const brand = BRANDS[p.brand];
      const isWholesale = document.body.classList.contains('is-wholesale');
      const cartTier = currentCartTier();
      const displayPrice = isWholesale ? wholesalePriceAtTier(p.price, cartTier) : p.price;
      const wholesaleNote = isWholesale ? ` <span style="font-family:var(--mono);font-size:10px;letter-spacing:0.14em;color:var(--ink-soft);">${cartTier.name.replace('Tier ', 'T')}</span>` : '';;
      return `
        <div class="cart-line">
          <div class="cart-line__img cart-line__img--${p.variant}" data-nav="product" data-product="${item.productId}">${brand.name}</div>
          <div>
            <div class="cart-line__brand">${brand.name}</div>
            <div class="cart-line__name">${p.name}</div>
            <div class="cart-line__meta">Size ${item.size} · ${p.cond}</div>
            <a class="cart-line__remove" data-remove="${idx}">Remove</a>
          </div>
          <div class="cart-line__price">$${displayPrice}${wholesaleNote}</div>
        </div>`;
    }).join('');

   const isWholesaleCart = document.body.classList.contains('is-wholesale');
    const cartTier = currentCartTier();
    const nudge = nextTierNudge();
    let tierBlock = '';
    if (isWholesaleCart) {
      const tierLabel = `<div class="cart-summary__row" style="border-top:1px solid var(--line);padding-top:12px;margin-top:8px;"><span>Wholesale tier</span><span>${cartTier.name} (${Math.round(cartTier.discount*100)}% off)</span></div>`;
      const nudgeLabel = nudge
        ? `<div class="cart-summary__nudge" style="font-family:var(--mono);font-size:11px;letter-spacing:0.08em;color:var(--ink-soft);padding:8px 0;text-transform:uppercase;">★ Add ${nudge.needed} more item${nudge.needed!==1?'s':''} for ${Math.round(nudge.discount*100)}% off</div>`
        : `<div class="cart-summary__nudge" style="font-family:var(--mono);font-size:11px;letter-spacing:0.08em;color:var(--ink-soft);padding:8px 0;text-transform:uppercase;">★ Top tier unlocked</div>`;
      tierBlock = tierLabel + nudgeLabel;
    }
    grid.innerHTML = `
      <div>${linesHTML}</div>
      <aside class="cart-summary">
        <div class="cart-summary__title">Order Summary</div>
        <div class="cart-summary__row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
        <div class="cart-summary__row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span></div>
        <div class="cart-summary__row"><span>Authentication</span><span>Included</span></div>
        ${tierBlock}
        <div class="cart-summary__row cart-summary__row--total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
        <button class="cart-summary__checkout" id="cart-request-order-btn">Request order →</button>
        <p class="cart-summary__note">We'll confirm availability and arrange payment within 4 hours.</p>
      </aside>`;

    // Wire remove buttons
    grid.querySelectorAll('[data-remove]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        removeFromCart(parseInt(el.dataset.remove, 10));
      });
    });

    // Wire Request Order button
    const requestBtn = document.getElementById('cart-request-order-btn');
    if (requestBtn) {
      requestBtn.addEventListener('click', () => openRequestOrderModal());
    }

    // Wire mock checkout
    grid.querySelector('.cart-summary__checkout')?.addEventListener('click', () => {
      showToast('Stripe checkout will be wired in Phase 2');
    });
  }


  // ============================================
  // ============================================
  // SPLASH DISMISS (with cinematic curtain reveal)
  // ============================================
  // Lock body scroll on page load so the splash is a true gate
  document.body.classList.add('splash-locked');
  document.documentElement.classList.add('splash-locked');

  // Block touchmove events on the splash panel during scroll-attempt to prevent
  // iOS rubber-banding revealing content beneath
  const splashEl = document.getElementById('splash');
  if (splashEl) {
    splashEl.addEventListener('touchmove', (e) => {
      // Allow form scrolling within the panel itself, but block document scroll
      const panel = e.target.closest('.splash__panel');
      if (!panel) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  document.getElementById('enterBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const splashEl = document.getElementById('splash');

    // Function that hard-resets scroll using every method available.
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Step 1: unlock body BEFORE removing splash class.
    document.body.classList.remove('splash-locked');
    document.documentElement.classList.remove('splash-locked');
    resetScroll();

    // Step 2: trigger the splash exit animation
    splashEl.classList.add('hidden');
    document.body.classList.add('is-entering');

    // Step 3: reset scroll multiple times during the transition
    setTimeout(resetScroll, 50);
    setTimeout(resetScroll, 200);
    setTimeout(resetScroll, 450);

    // Step 4: AFTER the exit animation completes, hard-remove the splash
    // with display:none so it can't leave any phantom layout/paint behind.
    // Mobile transition is ~400ms; desktop is ~1.15s. Use 1300ms to be safe.
    setTimeout(() => {
      splashEl.style.display = 'none';
      resetScroll();
    }, 1300);

    // Clean up the entering class after animations finish
    setTimeout(() => document.body.classList.remove('is-entering'), 2400);
  });


  // ============================================
  // BRAND BAR & GRID — wire to brand page
  // ============================================
  function slugify(text) {
    return text.toLowerCase()
      .replace(/ü/g, 'u').replace(/é/g, 'e').replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  // Brand bar links → brand page (skip "All Brands" → home)
  document.querySelectorAll('.brandbar a').forEach((a, idx) => {
    if (idx === 0) { a.dataset.nav = 'home'; return; }
    const slug = slugify(a.textContent.trim());
    if (BRANDS[slug]) {
      a.dataset.nav = 'brand';
      a.dataset.brand = slug;
    }
  });

  // Brand grid tiles → brand page
  document.querySelectorAll('#view-home .brand-tile').forEach(tile => {
    const nameEl = tile.querySelector('.brand-tile__name');
    const text = nameEl?.textContent.trim() || '';
    if (text.toLowerCase().includes('view all')) {
      tile.dataset.nav = 'home';
      return;
    }
    const slug = slugify(text);
    if (BRANDS[slug]) {
      tile.dataset.nav = 'brand';
      tile.dataset.brand = slug;
    }
  });


  // ============================================
  // HOME PAGE PRODUCT CARDS — wire to product detail
  // ============================================
  // Map data-name on existing cards to product IDs
  const NAME_TO_ID = {
    'Hellstar Records Hoodie': 'hellstar-records-iii',
    'Denim Tears Sweatshirt': 'denim-tears-cotton-wreath',
    'Chrome Hearts Tee': 'chrome-hearts-cemetery',
    'Corteiz Cargo': 'corteiz-guerillaz',
    'Stüssy 8 Ball': 'stussy-8ball',
    'Bape Shark': 'bape-shark',
    'Sp5der Hoodie': 'sp5der-web',
    'Rhude Track': 'rhude-moonlight',
  };
  document.querySelectorAll('#view-home .product').forEach(card => {
    const id = NAME_TO_ID[card.dataset.name];
    if (id) {
      card.dataset.nav = 'product';
      card.dataset.product = id;
    }
  });


  // ============================================
  // QUICK-ADD on product cards (event delegation, works on all views)
  // ============================================
  document.body.addEventListener('click', (e) => {
    const sizeBtn = e.target.closest('.product__size');
    if (!sizeBtn) return;
    e.stopPropagation();
    e.preventDefault();
    if (sizeBtn.classList.contains('sold')) return;

    const productCard = sizeBtn.closest('.product');
    const productId = productCard?.dataset.product;
    if (!productId) return;

    const size = sizeBtn.dataset.size || sizeBtn.textContent.trim();
    addToCart(productId, size);

    const orig = sizeBtn.textContent;
    sizeBtn.style.background = 'var(--ink)';
    sizeBtn.style.color = 'var(--bg)';
    sizeBtn.textContent = '✓';
    setTimeout(() => {
      sizeBtn.style.background = '';
      sizeBtn.style.color = '';
      sizeBtn.textContent = orig;
    }, 1100);
  }, true);


  // ============================================
  // PRODUCT CARD CLICK-TO-ZOOM (only when clicking image area, not size or nav)
  // ============================================
  // (Keeping the modal but only firing on direct click of img-wrap, not bubbling from size buttons)
  // Actually, we now want clicking the card to NAVIGATE to product page, not open zoom.
  // Zoom is only available from the product detail page main image.
  const zoom = document.getElementById('zoom');
  const zoomContent = document.getElementById('zoomContent');
  const zoomImg = document.getElementById('zoomImg');

  // Wire PD main image to open zoom
  document.getElementById('pd-main').addEventListener('click', () => {
    const main = document.getElementById('pd-main');
    const img = document.getElementById('pd-main-img');
    zoomImg.textContent = img.textContent;
    zoomContent.style.background = getComputedStyle(main).background;
    zoom.classList.add('active');
  });

  zoom.addEventListener('click', (e) => {
    if (e.target === zoom || e.target.classList.contains('zoom__close')) {
      zoom.classList.remove('active');
      zoomImg.style.transform = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      zoom.classList.remove('active');
      zoomImg.style.transform = '';
    }
  });

  zoomContent.addEventListener('mousemove', (e) => {
    const rect = zoomContent.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
    zoomImg.style.transform = `scale(2.4) translate(${-x * 0.4}%, ${-y * 0.4}%)`;
  });
  zoomContent.addEventListener('mouseleave', () => {
    zoomImg.style.transform = 'scale(1) translate(0, 0)';
  });


  // ============================================
  // CMD+K focuses search
  // ============================================
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      document.querySelector('.search input').focus();
    }
  });


  // ============================================
  // NEW DROPS CAROUSEL
  // ============================================
  (function initCarousel() {
    const track = document.getElementById('drops-track');
    const prevBtn = document.getElementById('drops-prev');
    const nextBtn = document.getElementById('drops-next');
    const progress = document.getElementById('drops-progress');
    const carousel = document.getElementById('drops-carousel');
    if (!track || !prevBtn || !nextBtn) return;

    // Featured products to show in the carousel — order matters
    const FEATURED_IDS = [
      'hellstar-records-iii',
      'gallery-dept-gpatch',
      'vale-forever-devils',
      'vale-forever-classico',
      'bape-shark',
      'sp5der-web',
      'mmy-hank-low',
    ];

    // Build slides
    track.innerHTML = FEATURED_IDS.map(id => {
      const p = PRODUCTS[id];
      if (!p) return '';
      // Use existing productCardHTML helper - wrap in a slide div
      return `<div class="carousel__slide">${productCardHTML(id, p)}</div>`;
    }).join('');

    // For Hellstar and Denim Tears specifically, swap in the real photo
    const photoMap = {
      'hellstar-records-iii': document.querySelector('img.product__photo[alt*="Hellstar"]'),
      'denim-tears-cotton-wreath': document.querySelector('img.product__photo[alt*="Denim Tears Cotton Wreath"]'),
    };
    // Find slide cards and inject photo if available (won't work on first render
    // since productCardHTML doesn't include photos by default; handled by --has-photo class)
    // For now, the photos render via the existing approach using the body is hidden;
    // simpler: post-process by replacing the placeholder text card with the photo card
    // for products that have product--has-photo in original markup.
    //
    // Since FEATURED list mostly mirrors original, we just use the basic productCardHTML.
    // The Hellstar + Denim Tears photos were on the homepage grid; that grid is now gone,
    // so we need to bring those photos into the carousel directly.
    const hellstarSlide = track.querySelector('[data-product="hellstar-records-iii"]');
    const galleryDeptSlide = track.querySelector('[data-product="gallery-dept-gpatch"]');
    const valeDevilsSlide = track.querySelector('[data-product="vale-forever-devils"]');
    const valeSlide = track.querySelector('[data-product="vale-forever-classico"]');
    const bapeSlide = track.querySelector('[data-product="bape-shark"]');
    const sp5derSlide = track.querySelector('[data-product="sp5der-web"]');
    const mmyHankSlide = track.querySelector('[data-product="mmy-hank-low"]');

    // Inject Hellstar photo (cream backdrop)
    if (hellstarSlide) {
      const wrap = hellstarSlide.querySelector('.product__img-wrap');
      const text = wrap.querySelector('.product__img');
      if (text) text.style.display = 'none';
      const img = document.createElement('img');
      img.className = 'product__photo';
      img.alt = 'Hellstar';
      img.src = (window.__PRODUCT_PHOTOS?.hellstar || '');
      wrap.insertBefore(img, text);
      hellstarSlide.classList.add('product--has-photo', 'product--photo-light');
    }
    // Inject Gallery Dept photo
    if (galleryDeptSlide) {
      const wrap = galleryDeptSlide.querySelector('.product__img-wrap');
      const text = wrap.querySelector('.product__img');
      if (text) text.style.display = 'none';
      const img = document.createElement('img');
      img.className = 'product__photo';
      img.alt = 'Gallery Dept';
      img.src = (window.__PRODUCT_PHOTOS?.galleryDept || '');
      wrap.insertBefore(img, text);
      galleryDeptSlide.classList.add('product--has-photo', 'product--photo-light');
    }
    // Inject Stussy photo
    if (valeDevilsSlide) {
      const wrap = valeDevilsSlide.querySelector('.product__img-wrap');
      const text = wrap.querySelector('.product__img');
      if (text) text.style.display = 'none';
      const img = document.createElement('img');
      img.className = 'product__photo';
      img.alt = 'Vale Forever — Devils Advocate';
      img.src = (window.__PRODUCT_PHOTOS?.valeDevils || '');
      wrap.insertBefore(img, text);
      valeDevilsSlide.classList.add('product--has-photo', 'product--photo-light');
    }
    // Inject Vale Forever photo
    if (valeSlide) {
      const wrap = valeSlide.querySelector('.product__img-wrap');
      const text = wrap.querySelector('.product__img');
      if (text) text.style.display = 'none';
      const img = document.createElement('img');
      img.className = 'product__photo';
      img.alt = 'Vale Forever';
      img.src = (window.__PRODUCT_PHOTOS?.valeForever || '');
      wrap.insertBefore(img, text);
      valeSlide.classList.add('product--has-photo', 'product--photo-light');
    }
    // Inject Bape photo
    if (bapeSlide) {
      const wrap = bapeSlide.querySelector('.product__img-wrap');
      const text = wrap.querySelector('.product__img');
      if (text) text.style.display = 'none';
      const img = document.createElement('img');
      img.className = 'product__photo';
      img.alt = 'Bape';
      img.src = (window.__PRODUCT_PHOTOS?.bape || '');
      wrap.insertBefore(img, text);
      bapeSlide.classList.add('product--has-photo', 'product--photo-light');
    }
    // Inject Sp5der photo
    if (sp5derSlide) {
      const wrap = sp5derSlide.querySelector('.product__img-wrap');
      const text = wrap.querySelector('.product__img');
      if (text) text.style.display = 'none';
      const img = document.createElement('img');
      img.className = 'product__photo';
      img.alt = 'Sp5der';
      img.src = (window.__PRODUCT_PHOTOS?.sp5der || '');
      wrap.insertBefore(img, text);
      sp5derSlide.classList.add('product--has-photo', 'product--photo-light');
    }
    // Inject MMY Hank photo
    if (mmyHankSlide) {
      const wrap = mmyHankSlide.querySelector('.product__img-wrap');
      const text = wrap.querySelector('.product__img');
      if (text) text.style.display = 'none';
      const img = document.createElement('img');
      img.className = 'product__photo';
      img.alt = 'Maison Mihara Yasuhiro';
      img.src = (window.__PRODUCT_PHOTOS?.mmyHank || '');
      wrap.insertBefore(img, text);
      mmyHankSlide.classList.add('product--has-photo', 'product--photo-light');
    }

    // Slide navigation
    let currentIndex = 0;
    let slidesPerView = window.innerWidth <= 720 ? 1 : 3;
    const totalSlides = FEATURED_IDS.length;

    function maxIndex() {
      return Math.max(0, totalSlides - slidesPerView);
    }

    function update() {
      const slideEl = track.children[0];
      if (!slideEl) return;
      const slideWidth = slideEl.getBoundingClientRect().width;
      const trackStyle = window.getComputedStyle(track);
      const gap = parseFloat(trackStyle.gap) || 24;
      const offset = currentIndex * (slideWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;

      // Update buttons
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex();

      // Update dots
      const dots = progress.querySelectorAll('.carousel__dot');
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
    }

    function buildDots() {
      const max = maxIndex();
      progress.innerHTML = '';
      for (let i = 0; i <= max; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel__dot';
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => { currentIndex = i; update(); resetAutoplay(); });
        progress.appendChild(dot);
      }
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      update();
      resetAutoplay();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = Math.min(maxIndex(), currentIndex + 1);
      update();
      resetAutoplay();
    });

    // Touch / swipe support
    let touchStartX = 0, touchEndX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const dx = touchEndX - touchStartX;
      if (Math.abs(dx) > 40) {
        if (dx < 0 && currentIndex < maxIndex()) currentIndex++;
        else if (dx > 0 && currentIndex > 0) currentIndex--;
        update();
        resetAutoplay();
      }
    }, { passive: true });

    // Autoplay
    let autoplayTimer;
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        if (currentIndex >= maxIndex()) currentIndex = 0;
        else currentIndex++;
        update();
      }, 2500);
    }
    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
    }
    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    // Pause on hover (desktop), pause when off-screen
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Re-calculate on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        slidesPerView = window.innerWidth <= 720 ? 1 : 3;
        currentIndex = Math.min(currentIndex, maxIndex());
        buildDots();
        update();
      }, 150);
    });

    // Init
    buildDots();
    update();
    startAutoplay();
  })();


  // ============================================
  // BRAND PAGE FILTERS
  // ============================================
  function initFilterPill(pillId, dropdownId, valueId, filterKey, labelMap) {
    const pill = document.getElementById(pillId);
    const dropdown = document.getElementById(dropdownId);
    const valueEl = document.getElementById(valueId);
    if (!pill || !dropdown) return;

    pill.addEventListener('click', (e) => {
      // Don't toggle if clicking inside the dropdown
      if (e.target.closest('.filter-dropdown')) return;
      // Close other open pills
      document.querySelectorAll('.filter-pill.open').forEach(p => {
        if (p !== pill) p.classList.remove('open');
      });
      pill.classList.toggle('open');
    });

    dropdown.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const value = btn.dataset[filterKey] || '';
        brandFilters[filterKey] = value;
        if (valueEl && labelMap) valueEl.textContent = labelMap[value] || btn.textContent;
        else if (valueEl) valueEl.textContent = btn.textContent;
        // Update active state in dropdown
        dropdown.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        pill.classList.remove('open');
        renderBrandGrid();
      });
    });
  }

  initFilterPill('filter-sort', 'filter-sort-dropdown', 'filter-sort-value', 'sort', {
    'newest': 'Newest', 'price-low': 'Price ↑', 'price-high': 'Price ↓', 'name': 'A → Z'
  });
  initFilterPill('filter-size', 'filter-size-dropdown', 'filter-size-value', 'size', {
    '': 'Size', 'S': 'Size: S', 'M': 'Size: M', 'L': 'Size: L', 'XL': 'Size: XL'
  });
  initFilterPill('filter-price', 'filter-price-dropdown', 'filter-price-value', 'price', {
    '': 'Price', '0-200': 'Under $200', '200-400': '$200 — $400', '400-600': '$400 — $600', '600-99999': '$600+'
  });

  // In-stock toggle pill
  const stockPill = document.getElementById('filter-stock');
  if (stockPill) {
    stockPill.addEventListener('click', () => {
      brandFilters.inStockOnly = !brandFilters.inStockOnly;
      stockPill.classList.toggle('active', brandFilters.inStockOnly);
      renderBrandGrid();
    });
  }

  // Click outside any filter pill closes the dropdown
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-pill')) {
      document.querySelectorAll('.filter-pill.open').forEach(p => p.classList.remove('open'));
    }
  });


  // ============================================
  // FORMSPREE — Email & SMS capture, wholesale apply
  // ============================================
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgzppgd';

  function isValidEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((s || '').trim());
  }
  function isValidPhone(s) {
    // Accept any string with at least 7 digits in it
    const digits = (s || '').replace(/\D/g, '');
    return digits.length >= 7;
  }

  async function submitToFormspree(payload) {
    // Use URLSearchParams (form-urlencoded) — Formspree accepts this format
    // and unlike FormData, it doesn't trigger Safari's DataCloneError when
    // browser content blockers / share sheet / autofill APIs are active.
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => {
      params.append(k, v == null ? '' : String(v));
    });
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    if (!res.ok) {
      let msg = `HTTP ${res.status}`;
      try { const data = await res.json(); if (data?.error) msg = data.error; } catch {}
      throw new Error(msg);
    }
    return res.json();
  }

  // ----- SPLASH EMAIL -----
  const splashEmailInput = document.getElementById('splash-email');
  const splashEmailBtn = document.getElementById('splash-email-btn');
  const splashEmailRow = splashEmailInput?.closest('.splash__form-row');
  const splashStatus = document.getElementById('splash-form-status');

  function setSplashStatus(msg, type) {
    if (!splashStatus) return;
    splashStatus.textContent = msg;
    splashStatus.className = 'splash__form-status show ' + (type === 'ok' ? 'splash__form-status--ok' : 'splash__form-status--err');
    if (type === 'ok') {
      setTimeout(() => splashStatus.classList.remove('show'), 4500);
    }
  }

  async function handleSplashEmail() {
    const email = splashEmailInput.value.trim();
    if (!isValidEmail(email)) {
      setSplashStatus('Please enter a valid email', 'err');
      splashEmailInput.focus();
      return;
    }
    splashEmailRow.classList.add('locked');
    setSplashStatus('Sending...', 'ok');
    try {
      await submitToFormspree({
        type: 'newsletter_signup',
        email: email,
        source: 'splash_screen',
      });
      splashEmailRow.classList.remove('locked');
      splashEmailRow.classList.add('success');
      splashEmailBtn.textContent = 'Subscribed ✓';
      splashEmailInput.value = '';
      setSplashStatus("Your 20% off code is on the way — check your email", 'ok');
    } catch (err) {
      splashEmailRow.classList.remove('locked');
      const detail = err?.message ? ` (${err.message})` : '';
      setSplashStatus('Connection issue — try again' + detail, 'err');
      console.error('Formspree submit error:', err);
    }
  }

  if (splashEmailBtn && splashEmailInput) {
    splashEmailBtn.addEventListener('click', handleSplashEmail);
    splashEmailInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); handleSplashEmail(); }
    });
  }

  // ----- SPLASH PHONE (optional, for SMS) -----
  const splashPhoneInput = document.getElementById('splash-phone');
  const splashPhoneBtn = document.getElementById('splash-phone-btn');
  const splashPhoneRow = splashPhoneInput?.closest('.splash__form-row');

  async function handleSplashPhone() {
    const phone = splashPhoneInput.value.trim();
    if (!isValidPhone(phone)) {
      setSplashStatus('Please enter a valid phone number', 'err');
      splashPhoneInput.focus();
      return;
    }
    splashPhoneRow.classList.add('locked');
    setSplashStatus('Sending...', 'ok');
    try {
      await submitToFormspree({
        type: 'sms_signup',
        phone: phone,
        source: 'splash_screen',
      });
      splashPhoneRow.classList.remove('locked');
      splashPhoneRow.classList.add('success');
      splashPhoneBtn.textContent = 'Sent ✓';
      splashPhoneInput.value = '';
      setSplashStatus("Your 20% off code is on the way via SMS", 'ok');
    } catch (err) {
      splashPhoneRow.classList.remove('locked');
      setSplashStatus('Something went wrong — try again', 'err');
      console.error('Formspree submit error:', err);
    }
  }

  if (splashPhoneBtn && splashPhoneInput) {
    splashPhoneBtn.addEventListener('click', handleSplashPhone);
    splashPhoneInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); handleSplashPhone(); }
    });
  }

  // ----- WHOLESALE APPLY MODAL -----
  const applyModal = document.getElementById('apply-modal');
  const applyLink = document.getElementById('gate-apply-link');
  const applyClose = document.getElementById('apply-modal-close');
  const applyBackdrop = document.getElementById('apply-modal-backdrop');
  const applySubmit = document.getElementById('apply-submit');
  const applyStatus = document.getElementById('apply-status');

  function setApplyStatus(msg, type) {
    if (!applyStatus) return;
    applyStatus.textContent = msg;
    applyStatus.className = 'apply-modal__status show ' + (type === 'ok' ? 'apply-modal__status--ok' : 'apply-modal__status--err');
  }

  function openApplyModal() {
    applyModal.classList.add('active');
    setApplyStatus('', '');
    document.body.style.overflow = 'hidden';
  }
  function closeApplyModal() {
    applyModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  applyLink?.addEventListener('click', openApplyModal);
  applyClose?.addEventListener('click', closeApplyModal);
  applyBackdrop?.addEventListener('click', closeApplyModal);

  applySubmit?.addEventListener('click', async () => {
    const business = document.getElementById('apply-business').value.trim();
    const name = document.getElementById('apply-name').value.trim();
    const email = document.getElementById('apply-email').value.trim();
    const phone = document.getElementById('apply-phone-input').value.trim();
    const message = document.getElementById('apply-message').value.trim();

    if (!business || !name) {
      setApplyStatus('Business name and your name required', 'err');
      return;
    }
    if (!isValidEmail(email)) {
      setApplyStatus('Please enter a valid email', 'err');
      return;
    }
    applySubmit.disabled = true;
    applySubmit.textContent = 'Submitting...';
    setApplyStatus('Sending application...', 'ok');
    try {
      await submitToFormspree({
        type: 'wholesale_application',
        business_name: business,
        contact_name: name,
        email: email,
        phone: phone || '(not provided)',
        message: message || '(not provided)',
        source: 'wholesale_gate',
      });
      applySubmit.textContent = 'Submitted ✓';
      setApplyStatus("Application received — we'll be in touch within 48 hours", 'ok');
      // Close modal after 2.5s
      setTimeout(() => {
        closeApplyModal();
        // Reset for next time
        document.getElementById('apply-business').value = '';
        document.getElementById('apply-name').value = '';
        document.getElementById('apply-email').value = '';
        document.getElementById('apply-phone-input').value = '';
        document.getElementById('apply-message').value = '';
        applySubmit.disabled = false;
        applySubmit.textContent = 'Submit Application →';
      }, 2500);
    } catch (err) {
      applySubmit.disabled = false;
      applySubmit.textContent = 'Submit Application →';
      setApplyStatus('Something went wrong — try again', 'err');
      console.error('Formspree submit error:', err);
    }
  });

  // Esc closes apply modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && applyModal?.classList.contains('active')) {
      closeApplyModal();
    }
    if (e.key === 'Escape' && document.getElementById('size-guide-modal')?.classList.contains('active')) {
      closeSizeGuide();
    }
  });


  // ----- REQUEST ORDER MODAL -----
  const requestOrderModal = document.getElementById('request-order-modal');
  const requestOrderClose = document.getElementById('request-order-close');
  const requestOrderBackdrop = document.getElementById('request-order-backdrop');
  const requestOrderSubmit = document.getElementById('request-order-submit');
  const requestOrderStatus = document.getElementById('request-order-status');
  const requestOrderSummary = document.getElementById('request-order-summary');

  function setRequestOrderStatus(msg, type) {
    if (!requestOrderStatus) return;
    requestOrderStatus.textContent = msg;
    requestOrderStatus.className = 'apply-modal__status show ' + (type === 'ok' ? 'apply-modal__status--ok' : 'apply-modal__status--err');
  }

  function populateOrderSummary() {
    if (!requestOrderSummary) return;
    const isWholesale = document.body.classList.contains('is-wholesale');

    if (state.cart.length === 0) {
      requestOrderSummary.innerHTML = '<div class="request-order-empty">Your cart is empty</div>';
      return;
    }

    let subtotal = 0;
    const linesHTML = state.cart.map(item => {
      const p = PRODUCTS[item.productId];
      if (!p) return '';
 const summaryTier = currentCartTier();
      const displayPrice = isWholesale ? wholesalePriceAtTier(p.price, summaryTier) : p.price;     subtotal += displayPrice;
      return `
        <div class="request-order-line">
          <div class="request-order-line__name">
            ${p.name}
            <small>Size ${item.size}</small>
          </div>
          <div class="request-order-line__price">$${displayPrice}</div>
        </div>`;
    }).join('');

    const orderTier = currentCartTier();
    const wholesaleNote = isWholesale
 `<div class="request-order-summary__wholesale-note">★ Wholesale pricing applied (${orderTier.name} · ${Math.round(orderTier.discount*100)}% off · ${state.cart.length} units)</div>`
    requestOrderSummary.innerHTML = `
      <div class="request-order-summary__title">Your selection (${state.cart.length} item${state.cart.length !== 1 ? 's' : ''})</div>
      ${linesHTML}
      <div class="request-order-summary__total">
        <span>Total</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      ${wholesaleNote}
    `;
  }

  function openRequestOrderModal() {
    if (state.cart.length === 0) return;
    populateOrderSummary();
    setRequestOrderStatus('', '');
    // Pre-fill from Clerk user if logged in
    if (clerkUser) {
      const firstEl = document.getElementById('request-firstname');
      const lastEl = document.getElementById('request-lastname');
      const emailEl = document.getElementById('request-email');
      if (firstEl && !firstEl.value) firstEl.value = clerkUser.firstName || '';
      if (lastEl && !lastEl.value) lastEl.value = clerkUser.lastName || '';
      if (emailEl && !emailEl.value) emailEl.value = clerkUser.primaryEmailAddress?.emailAddress || '';
    }
    requestOrderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeRequestOrderModal() {
    requestOrderModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  requestOrderClose?.addEventListener('click', closeRequestOrderModal);
  requestOrderBackdrop?.addEventListener('click', closeRequestOrderModal);

  requestOrderSubmit?.addEventListener('click', async () => {
    const firstName = document.getElementById('request-firstname').value.trim();
    const lastName = document.getElementById('request-lastname').value.trim();
    const email = document.getElementById('request-email').value.trim();
    const phone = document.getElementById('request-phone').value.trim();
    const address = document.getElementById('request-address').value.trim();
    const payment = document.getElementById('request-payment').value;
    const notes = document.getElementById('request-notes').value.trim();

    if (!firstName || !lastName) {
      setRequestOrderStatus('Name required', 'err');
      return;
    }
    if (!isValidEmail(email)) {
      setRequestOrderStatus('Valid email required', 'err');
      return;
    }
    if (!isValidPhone(phone)) {
      setRequestOrderStatus('Valid phone required', 'err');
      return;
    }
    if (!address) {
      setRequestOrderStatus('Shipping address required', 'err');
      return;
    }
    if (!payment) {
      setRequestOrderStatus('Select a payment method', 'err');
      return;
    }
    if (state.cart.length === 0) {
      setRequestOrderStatus('Your cart is empty', 'err');
      return;
    }

    requestOrderSubmit.disabled = true;
    requestOrderSubmit.textContent = 'Submitting...';
    setRequestOrderStatus('Sending order request...', 'ok');

    // Build the order summary as a readable string for the email
    const isWholesale = document.body.classList.contains('is-wholesale');
    let subtotal = 0;
    const submitTier = currentCartTier();
    const itemsList = state.cart.map(item => {
      const p = PRODUCTS[item.productId];
      if (!p) return '';
const displayPrice = isWholesale ? wholesalePriceAtTier(p.price, submitTier) : p.price;      subtotal += displayPrice;
      return `${p.name} / Size ${item.size} / $${displayPrice}`;
    }).join('\n');

    try {
      await submitToFormspree({
        type: 'order_request',
        customer_name: `${firstName} ${lastName}`,
        customer_email: email,
        customer_phone: phone,
        shipping_address: address,
        payment_method: payment,
        is_wholesale: isWholesale ? 'YES (35% off applied)' : 'No (retail)',
        notes: notes || '(none)',
        items: itemsList,
        subtotal: `$${subtotal.toFixed(2)}`,
        item_count: state.cart.length,
        source: 'cart_request_order',
      });

      requestOrderSubmit.textContent = 'Submitted ✓';
      setRequestOrderStatus("Order received. We'll reach out within 4 hours to confirm availability and arrange payment.", 'ok');

      // Clear cart after a moment
      setTimeout(() => {
        state.cart = [];
        updateCartCount();
        renderCart();
        // Reset form
        document.getElementById('request-firstname').value = '';
        document.getElementById('request-lastname').value = '';
        document.getElementById('request-email').value = '';
        document.getElementById('request-phone').value = '';
        document.getElementById('request-address').value = '';
        document.getElementById('request-payment').value = '';
        document.getElementById('request-notes').value = '';
        requestOrderSubmit.disabled = false;
        requestOrderSubmit.textContent = 'Submit Order Request →';
        closeRequestOrderModal();
      }, 3000);
    } catch (err) {
      requestOrderSubmit.disabled = false;
      requestOrderSubmit.textContent = 'Submit Order Request →';
      setRequestOrderStatus('Something went wrong — try again', 'err');
      console.error('Order request submission error:', err);
    }
  });

  // Esc closes request order modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && requestOrderModal?.classList.contains('active')) {
      closeRequestOrderModal();
    }
  });


  // ----- CONTACT FORM (on contact page) -----
  document.getElementById('contact-submit')?.addEventListener('click', async () => {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value.trim();
    const statusEl = document.getElementById('contact-status');

    function setStatus(msg, type) {
      if (!statusEl) return;
      statusEl.textContent = msg;
      statusEl.className = 'apply-modal__status show ' + (type === 'ok' ? 'apply-modal__status--ok' : 'apply-modal__status--err');
    }

    if (!name) { setStatus('Name required', 'err'); return; }
    if (!isValidEmail(email)) { setStatus('Valid email required', 'err'); return; }
    if (!subject) { setStatus('Please select a subject', 'err'); return; }
    if (!message || message.length < 5) { setStatus('Message too short', 'err'); return; }

    const btn = document.getElementById('contact-submit');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      await submitToFormspree({
        type: 'contact_inquiry',
        name: name,
        email: email,
        subject: subject,
        message: message,
        source: 'contact_page',
      });
      setStatus("Got it — we'll be in touch within 4 hours.", 'ok');
      btn.textContent = 'Sent ✓';
      // Clear form after success
      setTimeout(() => {
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-subject').value = '';
        document.getElementById('contact-message').value = '';
        btn.disabled = false;
        btn.textContent = 'Send message →';
      }, 3500);
    } catch (err) {
      btn.disabled = false;
      btn.textContent = 'Send message →';
      setStatus('Something went wrong — try again', 'err');
      console.error('Contact submit error:', err);
    }
  });

  // About page → wholesale apply CTA
  document.getElementById('about-wholesale-cta')?.addEventListener('click', () => {
    document.getElementById('apply-modal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  // Wholesale tease link on product detail -> opens apply modal
  document.body.addEventListener('click', (e) => {
    if (e.target?.id === 'pd-tease-apply') {
      e.preventDefault();
      document.getElementById('wholesale-apply-modal')?.classList.add('open');
    }
  });


  // ----- AUTH PAGE: Interactive process cards -----
  // Click any card to expand it. Use arrow keys to navigate. Swipe on touch.
  function setupAuthCards() {
    const cards = document.querySelectorAll('.auth-card[data-auth-card]');
    const dots = document.querySelectorAll('.auth-cards__dot[data-auth-dot]');
    if (!cards.length) return;

    let currentIdx = 0;
    cards.forEach((c, i) => { if (c.classList.contains('auth-card--active')) currentIdx = i; });

    function activate(idx) {
      idx = Math.max(0, Math.min(cards.length - 1, idx));
      currentIdx = idx;
      cards.forEach((c, i) => {
        const isActive = i === idx;
        c.classList.toggle('auth-card--active', isActive);
        c.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      });
      dots.forEach((d, i) => {
        d.classList.toggle('auth-cards__dot--active', i === idx);
      });
    }

    cards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        // Don't toggle off if user clicked an already-active card — keep it open
        if (idx !== currentIdx) {
          activate(idx);
        }
      });
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        activate(idx);
      });
    });

    // Arrow key navigation when an auth card is focused
    cards.forEach(card => {
      card.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          activate(currentIdx + 1);
          cards[currentIdx]?.focus();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          activate(currentIdx - 1);
          cards[currentIdx]?.focus();
        }
      });
    });

    // Touch swipe on the cards row (mobile)
    const row = document.getElementById('auth-cards-row');
    if (row) {
      let touchStartX = 0;
      let touchEndX = 0;
      row.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      row.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
          if (diff < 0) activate(currentIdx + 1);
          else activate(currentIdx - 1);
        }
      }, { passive: true });
    }
  }
  // Run once on load — cards always exist (in DOM even if view isn't active)
  setupAuthCards();


  // ----- SIZE GUIDE MODAL -----
  const sizeGuideModal = document.getElementById('size-guide-modal');
  const sizeGuideLink = document.getElementById('pd-size-guide-link');
  const sizeGuideClose = document.getElementById('size-guide-close');
  const sizeGuideBackdrop = document.getElementById('size-guide-backdrop');

  function openSizeGuide() {
    sizeGuideModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSizeGuide() {
    sizeGuideModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  sizeGuideLink?.addEventListener('click', openSizeGuide);
  sizeGuideClose?.addEventListener('click', closeSizeGuide);
  sizeGuideBackdrop?.addEventListener('click', closeSizeGuide);

  // Tab switching in size guide
  document.querySelectorAll('.size-guide-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.sizeTab;
      document.querySelectorAll('.size-guide-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.size-guide-content').forEach(c => {
        c.style.display = c.dataset.sizeTabContent === targetTab ? '' : 'none';
      });
    });
  });


  // ============================================
  // ALL BRANDS PAGE
  // ============================================
  function hydrateAllBrands() {
    const grid = document.getElementById('brands-page-grid');
    const countEl = document.getElementById('brands-page-count');
    if (!grid) return;

    // Sorted alphabetically by display name
    const allBrands = Object.entries(BRANDS).sort((a, b) =>
      a[1].name.localeCompare(b[1].name)
    );
    if (countEl) countEl.textContent = `${allBrands.length} brands`;

    // Map brand slug to logo image base64 if we have one
    const BRAND_LOGOS = {
      'hellstar': 'assets/images/image-46-c4dc279ea6b54830.png',
      'denim-tears': 'assets/images/image-47-264c30257ba2cf3b.png',
      'corteiz': 'assets/images/image-48-310b45d0f6d633c9.png',
      'chrome-hearts': 'assets/images/image-49-6960d03233b92885.png',
      'stussy': 'assets/images/image-50-383c63f3431c2aa8.png',
      'sp5der': 'assets/images/image-51-162436ca6b595e6c.png',
      'supreme': 'assets/images/image-52-af811dbe692ae32a.png',
      'bape': 'assets/images/image-53-c1b2c7695baf7ca6.png',
      'rhude': 'assets/images/image-54-5fd2dd5d0d38abff.png',
      'palm-angels': 'assets/images/image-55-b1589b18a75640ae.png',
      'kith': 'assets/images/image-56-85fffa4b09520ac7.png',
    };
    // Note: Gallery Dept, Vale Forever, Maison Mihara Yasuhiro have no logos —
    // they'll render with text-only tiles, which still look clean.

    grid.innerHTML = allBrands.map(([slug, brand]) => {
      const logo = BRAND_LOGOS[slug];
      const logoHTML = logo
        ? `<div class="brand-tile__logo"><img src="data:image/png;base64,${logo}" alt="${brand.name}"></div>`
        : `<div class="brand-tile__logo brand-tile__logo--text"><span>${brand.name}</span></div>`;
      const tileClass = logo ? 'brand-tile brand-tile--has-logo' : 'brand-tile';
      return `
        <div class="${tileClass}" data-nav="brand" data-brand="${slug}" role="link" tabindex="0">
          <span class="brand-tile__count">${brand.count} pieces</span>
          ${logoHTML}
          <span class="brand-tile__name">${brand.name}</span>
          <span class="brand-tile__arrow">→</span>
        </div>`;
    }).join('');
  }


  // ============================================
  // SEARCH OVERLAY
  // ============================================
  const searchOverlay = document.getElementById('search-overlay');
  const searchTrigger = document.getElementById('search-trigger');
  const searchClose = document.getElementById('search-overlay-close');
  const searchBackdrop = document.getElementById('search-overlay-backdrop');
  const searchInput = document.getElementById('search-overlay-input');
  const searchResults = document.getElementById('search-overlay-results');

  function openSearchOverlay() {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 50);
    renderSearchResults('');
  }
  function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
  }

  searchTrigger?.addEventListener('click', openSearchOverlay);
  searchTrigger?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSearchOverlay(); }
  });
  searchClose?.addEventListener('click', closeSearchOverlay);
  searchBackdrop?.addEventListener('click', closeSearchOverlay);

  // Cmd+K / Ctrl+K to open search anywhere
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay.classList.contains('active')) {
        closeSearchOverlay();
      } else {
        openSearchOverlay();
      }
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearchOverlay();
    }
  });

  // Live search on input
  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();

    if (!q) {
      // No query — show a hint
      searchResults.innerHTML = `
        <div class="search-overlay__hint">
          Search by product name, brand, or tag (e.g. "FW24", "Bape", "hoodie")
        </div>`;
      return;
    }

    // Match products by name, description, brand name, or tag
    const productMatches = Object.entries(PRODUCTS).filter(([id, p]) => {
      const brandName = (BRANDS[p.brand]?.name || '').toLowerCase();
      const haystack = [
        p.name.toLowerCase(),
        brandName,
        (p.tag || '').toLowerCase(),
        (p.variant || '').toLowerCase(),
        (p.desc || '').toLowerCase(),
      ].join(' ');
      return haystack.includes(q);
    });

    // Match brands by name
    const brandMatches = Object.entries(BRANDS).filter(([slug, b]) =>
      b.name.toLowerCase().includes(q)
    );

    if (productMatches.length === 0 && brandMatches.length === 0) {
      searchResults.innerHTML = `
        <div class="search-empty">
          <div class="search-empty__title">No matches for "${query}"</div>
          <div class="search-empty__sub">Try a different search term</div>
        </div>`;
      return;
    }

    let html = '';

    if (brandMatches.length > 0) {
      html += `<div class="search-overlay__section-title">Brands</div>`;
      html += brandMatches.map(([slug, b]) => `
        <div class="search-result search-result--brand" data-search-target="brand" data-search-slug="${slug}" tabindex="0">
          <div class="search-result__brand-label">Brand</div>
          <div class="search-result__info">
            <div class="search-result__brand">View brand</div>
            <div class="search-result__name">${b.name}</div>
          </div>
          <div class="search-result__price">${b.count} pieces</div>
        </div>`).join('');
    }

    if (productMatches.length > 0) {
      html += `<div class="search-overlay__section-title">Products</div>`;
      html += productMatches.map(([id, p]) => {
        const brandName = BRANDS[p.brand]?.name || '';
        // Product photo if we have one
        const PHOTO_KEY_BY_PRODUCT_ID = {
          'hellstar-records-iii': 'hellstar',
          'gallery-dept-gpatch': 'galleryDept',
          'vale-forever-classico': 'valeForever',
          'vale-forever-devils': 'valeDevils',
          'bape-shark': 'bape',
          'sp5der-web': 'sp5der',
          'mmy-hank-low': 'mmyHank',
          'supreme-satin-applique-hoodie': 'supremeSatin',
          'bape-broken-college-tee': 'bapeBroken',
          'bape-sakura-tree-tee': 'bapeSakura',
        };
        const photoKey = PHOTO_KEY_BY_PRODUCT_ID[id];
        const photoB64 = window.__PRODUCT_PHOTOS?.[id] || (photoKey ? window.__PRODUCT_PHOTOS?.[photoKey] : null);
        const thumb = photoB64
          ? `<img class="search-result__thumb" src="${photoB64}" alt="${p.name}">`
          : `<div class="search-result__brand-label">${brandName.split(' ')[0].slice(0,4)}</div>`;
        return `
          <div class="search-result" data-search-target="product" data-search-slug="${id}" tabindex="0">
            ${thumb}
            <div class="search-result__info">
              <div class="search-result__brand">${brandName}</div>
              <div class="search-result__name">${p.name}</div>
            </div>
            <div class="search-result__price">$${p.price}</div>
          </div>`;
      }).join('');
    }

    searchResults.innerHTML = html;

    // Wire click handlers on results
    searchResults.querySelectorAll('.search-result').forEach(result => {
      result.addEventListener('click', () => {
        const target = result.dataset.searchTarget;
        const slug = result.dataset.searchSlug;
        closeSearchOverlay();
        if (target === 'brand') {
          navigate('brand', { brand: slug });
        } else if (target === 'product') {
          navigate('product', { product: slug });
        }
      });
      result.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') result.click();
      });
    });
  }


  // ============================================
  // CLERK AUTH (custom UI)
  // ============================================
  // Clerk is loaded asynchronously via the script tag in <head>.
  // We poll until window.Clerk is ready, then initialize.
  let clerkReady = false;
  let clerkUser = null;

  async function initClerk() {
    if (!window.Clerk) {
      // Try again in 200ms — Clerk loads async
      setTimeout(initClerk, 200);
      return;
    }
    try {
      await window.Clerk.load({
        // Customizations: keep the layout simple, we use our own UI
        appearance: {
          variables: {
            colorPrimary: '#0E0E0E',
            colorBackground: '#F4F1EA',
            fontFamily: '"DM Sans", system-ui, sans-serif',
          },
        },
      });
      clerkReady = true;
      clerkUser = window.Clerk.user;
      updateAuthUI();
      // Listen for auth state changes
      window.Clerk.addListener(({ user }) => {
        clerkUser = user;
        updateAuthUI();
      });
    } catch (err) {
      console.error('Clerk init failed:', err);
    }
  }
  initClerk();

  function updateAuthUI() {
    const loggedOutBtn = document.getElementById('header-account-link');
    const loggedInBtn = document.getElementById('header-account-loggedin');
    const avatar = document.getElementById('header-avatar');
    const accountName = document.getElementById('header-account-name');

    if (clerkUser) {
      // Show avatar/initial + name
      const first = clerkUser.firstName || clerkUser.username || '';
      const last = clerkUser.lastName || '';
      const display = (first || clerkUser.primaryEmailAddress?.emailAddress?.split('@')[0] || 'You');
      const initials = ((first[0] || '') + (last[0] || '')).toUpperCase()
        || (clerkUser.primaryEmailAddress?.emailAddress?.[0] || 'U').toUpperCase();

      if (loggedOutBtn) loggedOutBtn.style.display = 'none';
      if (loggedInBtn) loggedInBtn.style.display = '';
      if (avatar) avatar.textContent = initials;
      if (accountName) accountName.textContent = display;
    } else {
      if (loggedOutBtn) loggedOutBtn.style.display = '';
      if (loggedInBtn) loggedInBtn.style.display = 'none';
    }
  }

  // ----- Auth modal control -----
  const authModal = document.getElementById('auth-modal');
  function openAuthModal(tab = 'signin') {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Clear any prior status
    document.getElementById('auth-signin-status').className = 'apply-modal__status';
    document.getElementById('auth-signup-status').className = 'apply-modal__status';
    // Switch to the right tab
    document.querySelectorAll('.auth-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.authTab === tab);
    });
    document.querySelectorAll('.auth-content').forEach(c => {
      c.style.display = c.dataset.authContent === tab ? '' : 'none';
    });
  }
  function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('header-account-link')?.addEventListener('click', () => {
    openAuthModal('signin');
  });

  // Logged-in pill click → go to account page
  document.getElementById('header-account-loggedin')?.addEventListener('click', () => {
    navigate('account');
  });

  document.getElementById('auth-modal-close')?.addEventListener('click', closeAuthModal);
  document.getElementById('auth-modal-backdrop')?.addEventListener('click', closeAuthModal);

  // Tab switching
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.authTab;
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.auth-content').forEach(c => {
        c.style.display = c.dataset.authContent === target ? '' : 'none';
      });
    });
  });

  function setAuthStatus(elId, msg, type) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = msg;
    el.className = 'apply-modal__status show ' + (type === 'ok' ? 'apply-modal__status--ok' : 'apply-modal__status--err');
  }

  // ----- Sign in (email + password) -----
  document.getElementById('auth-signin-submit')?.addEventListener('click', async () => {
    if (!clerkReady) { setAuthStatus('auth-signin-status', 'Auth still loading...', 'err'); return; }
    const email = document.getElementById('auth-signin-email').value.trim();
    const password = document.getElementById('auth-signin-password').value;
    if (!email || !password) {
      setAuthStatus('auth-signin-status', 'Email and password required', 'err');
      return;
    }
    const btn = document.getElementById('auth-signin-submit');
    btn.disabled = true;
    btn.textContent = 'Signing in...';
    try {
      const result = await window.Clerk.client.signIn.create({
        identifier: email,
        password: password,
      });
      if (result.status === 'complete') {
        await window.Clerk.setActive({ session: result.createdSessionId });
        setAuthStatus('auth-signin-status', 'Welcome back ✓', 'ok');
        setTimeout(() => {
          closeAuthModal();
          btn.disabled = false;
          btn.textContent = 'Sign in →';
        }, 800);
      } else {
        setAuthStatus('auth-signin-status', 'Need additional verification', 'err');
        btn.disabled = false;
        btn.textContent = 'Sign in →';
      }
    } catch (err) {
      const msg = err?.errors?.[0]?.longMessage || err?.errors?.[0]?.message || 'Sign in failed';
      setAuthStatus('auth-signin-status', msg, 'err');
      btn.disabled = false;
      btn.textContent = 'Sign in →';
    }
  });

  // Submit on Enter key in signin fields
  ['auth-signin-email', 'auth-signin-password'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') document.getElementById('auth-signin-submit').click();
    });
  });

  // ----- Sign up (email + password) -----
  document.getElementById('auth-signup-submit')?.addEventListener('click', async () => {
    if (!clerkReady) { setAuthStatus('auth-signup-status', 'Auth still loading...', 'err'); return; }
    const firstName = document.getElementById('auth-signup-firstname').value.trim();
    const lastName = document.getElementById('auth-signup-lastname').value.trim();
    const email = document.getElementById('auth-signup-email').value.trim();
    const password = document.getElementById('auth-signup-password').value;

    if (!email || !password) {
      setAuthStatus('auth-signup-status', 'Email and password required', 'err');
      return;
    }
    if (password.length < 8) {
      setAuthStatus('auth-signup-status', 'Password must be 8+ characters', 'err');
      return;
    }
    const btn = document.getElementById('auth-signup-submit');
    btn.disabled = true;
    btn.textContent = 'Creating...';
    try {
      const signUp = await window.Clerk.client.signUp.create({
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        emailAddress: email,
        password: password,
      });
      if (signUp.status === 'complete') {
        await window.Clerk.setActive({ session: signUp.createdSessionId });
        setAuthStatus('auth-signup-status', 'Account created ✓', 'ok');
        setTimeout(() => {
          closeAuthModal();
          btn.disabled = false;
          btn.textContent = 'Create account →';
        }, 800);
      } else {
        // If email verification is required despite our settings, prepare it
        setAuthStatus('auth-signup-status', `Status: ${signUp.status}`, 'err');
        btn.disabled = false;
        btn.textContent = 'Create account →';
      }
    } catch (err) {
      const msg = err?.errors?.[0]?.longMessage || err?.errors?.[0]?.message || 'Sign up failed';
      setAuthStatus('auth-signup-status', msg, 'err');
      btn.disabled = false;
      btn.textContent = 'Create account →';
    }
  });

  ['auth-signup-firstname', 'auth-signup-lastname', 'auth-signup-email', 'auth-signup-password'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') document.getElementById('auth-signup-submit').click();
    });
  });

  // ----- Social sign-in (Google / Apple) -----
  async function socialSignIn(strategy) {
    if (!clerkReady) return;
    try {
      await window.Clerk.client.signIn.authenticateWithRedirect({
        strategy: strategy,
        redirectUrl: window.location.origin,
        redirectUrlComplete: window.location.origin,
      });
    } catch (err) {
      console.error('Social signin error:', err);
      setAuthStatus('auth-signin-status', 'Social sign-in failed', 'err');
    }
  }
  document.getElementById('auth-google-signin')?.addEventListener('click', () => socialSignIn('oauth_google'));
  document.getElementById('auth-google-signup')?.addEventListener('click', () => socialSignIn('oauth_google'));
  document.getElementById('auth-apple-signin')?.addEventListener('click', () => socialSignIn('oauth_apple'));
  document.getElementById('auth-apple-signup')?.addEventListener('click', () => socialSignIn('oauth_apple'));

  // Forgot password — open Clerk's hosted flow
  document.getElementById('auth-forgot-link')?.addEventListener('click', () => {
    if (!clerkReady) return;
    window.Clerk.openSignIn({ initialStep: 'reset-password' });
  });

  // Esc closes auth modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal?.classList.contains('active')) {
      closeAuthModal();
    }
  });


  // ----- Account page hydration -----
  function hydrateAccount() {
    if (!clerkUser) {
      // Not logged in — redirect home and prompt sign-in
      navigate('home');
      setTimeout(() => openAuthModal('signin'), 200);
      return;
    }
    const u = clerkUser;
    const fullName = [u.firstName, u.lastName].filter(Boolean).join(' ') || u.username || '';
    const email = u.primaryEmailAddress?.emailAddress || '—';
    const created = u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '—';

    // Title — if name available, "Hi, {firstName}", else "Your account"
    const title = u.firstName ? `Hi, <em>${u.firstName}</em>` : 'Your <em>account</em>';
    document.getElementById('account-name').innerHTML = title;
    document.getElementById('account-email').textContent = email;
    document.getElementById('account-fullname').textContent = fullName || '—';
    document.getElementById('account-email-detail').textContent = email;
    document.getElementById('account-member-since').textContent = created;

    // Wholesale status
    const isWholesale = document.body.classList.contains('is-wholesale');
    const badge = document.getElementById('account-wholesale-badge');
    const body = document.getElementById('account-wholesale-body');
    if (isWholesale) {
      badge.textContent = 'Wholesale Active';
      badge.className = 'account-card__badge account-card__badge--gold';
      body.innerHTML = '<p class="account-card__text">You\'re currently browsing with wholesale pricing active. All prices show the wholesale rate (35% off retail).</p>';
    } else {
      badge.textContent = 'Retail';
      badge.className = 'account-card__badge';
    }
  }

  // Sign out button
  document.getElementById('account-signout')?.addEventListener('click', async () => {
    if (!clerkReady) return;
    await window.Clerk.signOut();
    navigate('home');
  });

  // Manage profile (open Clerk's user profile component)
  document.getElementById('account-manage-profile')?.addEventListener('click', () => {
    if (!clerkReady) return;
    window.Clerk.openUserProfile();
  });

  // Apply for wholesale (link to apply modal we already built)
  document.getElementById('account-apply-wholesale')?.addEventListener('click', () => {
    document.getElementById('apply-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Add address (placeholder)
  document.getElementById('account-add-address')?.addEventListener('click', () => {
    if (!clerkReady) return;
    window.Clerk.openUserProfile();
  });


  // ============================================
  // WHOLESALE GATE
  // ============================================
  const WHOLESALE_PASSCODE = 'THREAD2026';  // Change this to your real passcode
  const gate = document.getElementById('gate');
  const gateInput = document.getElementById('gate-input');
  const gateError = document.getElementById('gate-error');

  function openGate() {
    gate.classList.add('active');
    gateError.classList.remove('show');
    gateInput.value = '';
    setTimeout(() => gateInput.focus(), 100);
  }

  function closeGate() {
    gate.classList.remove('active');
  }

  function tryUnlock() {
    const entered = gateInput.value.trim().toUpperCase();
    if (entered === WHOLESALE_PASSCODE) {
      // Success — flip to wholesale mode and close gate
      document.body.classList.add('is-wholesale');
      gate.classList.remove('active');
      // Re-render any active view so prices update everywhere
      const activeView = document.querySelector('.view.view--active');
      if (activeView?.id === 'view-product') {
        const productId = document.querySelector('#pd-name')?.textContent;
        // Find product by name and re-hydrate
        const productEntry = Object.entries(PRODUCTS).find(([_, p]) => p.name === productId);
        if (productEntry) hydrateProduct(productEntry[0]);
      } else if (activeView?.id === 'view-brand') {
        const brandSlug = document.getElementById('brand-crumb')?.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        if (brandSlug && BRANDS[brandSlug]) hydrateBrand(brandSlug);
      } else if (activeView?.id === 'view-cart') {
        renderCart();
      }
      showToast('Wholesale access granted');
    } else {
      gateError.classList.remove('show');
      // re-trigger animation
      void gateError.offsetWidth;
      gateError.classList.add('show');
      gateInput.value = '';
      gateInput.focus();
    }
  }

  document.getElementById('gate-submit').addEventListener('click', tryUnlock);
  gateInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryUnlock();
  });
  document.getElementById('gate-back').addEventListener('click', closeGate);
  document.getElementById('footer-wholesale').addEventListener('click', openGate);
  document.getElementById('header-wholesale').addEventListener('click', () => {
    // If already authenticated, clicking the pill opens an "exit" prompt
    // via a brief toast, otherwise opens the gate normally.
    if (document.body.classList.contains('is-wholesale')) {
      showToast('Wholesale mode active · click ribbon to exit');
    } else {
      openGate();
    }
  });

  // Exit wholesale mode
  document.getElementById('wholesale-exit').addEventListener('click', () => {
    document.body.classList.remove('is-wholesale');
    // Re-render to update prices
    const activeView = document.querySelector('.view.view--active');
    if (activeView?.id === 'view-cart') renderCart();
    showToast('Switched to retail view');
  });