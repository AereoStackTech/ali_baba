export type Language = 'fr' | 'ar';

export interface Translations {
  // Top bar & Brand
  brandName: string;
  brandTagline: string;
  navSpecialties: string;
  navMenu: string;
  navStory: string;
  navLocation: string;
  callUs: string;
  cartButton: string;
  cartShort: string;

  // Hero
  heroKickerLocation: string;
  heroKickerType: string;
  heroKickerPrice: string;
  heroTitleLead: string;
  heroTitleHighlight: string;
  heroTitleEnd: string;
  heroDescription: string;
  factExpressTitle: string;
  factExpressDesc: string;
  factChoicesTitle: string;
  factChoicesDesc: string;
  factOpenTitle: string;
  factOpenDesc: string;
  ctaExploreMenu: string;
  ctaPreorder: string;
  ctaWhatsApp: string;
  heroLocationNote: string;
  heroSpecialtyBadge: string;
  heroSpecialtySub: string;
  heroSpecialtyPriceNet: string;
  heroSpecialtyRanking: string;
  heroSaucesIncluded: string;
  heroSaucesList: string;
  heroPortionFormat: string;
  heroPortionDesc: string;
  heroSpecialtyOrderCta: string;

  // Specialties Section
  specialtiesBadge: string;
  specialtiesTitle: string;
  specialtiesDesc: string;
  badgeSpecialty: string;
  badgePopular: string;
  readyIn: string;
  btnCustomize: string;
  btnAdd: string;

  // Menu Section
  menuKicker: string;
  menuKickerPrice: string;
  menuKickerFresh: string;
  menuTitle: string;
  menuDesc: string;
  searchPlaceholder: string;
  clearSearch: string;
  catAll: string;
  catShawarma: string;
  catSandwiches: string;
  catPlatters: string;
  catSides: string;
  catBeverages: string;
  filterFavorites: string;
  showingItems: string;
  itemsAvailable: string;
  searchResultsFor: string;
  noItemsFound: string;
  noItemsDesc: string;
  resetFilters: string;

  // Item Modal
  modalCustomization: string;
  stepBread: string;
  stepSauces: string;
  saucesSelected: string;
  stepExtras: string;
  stepInstructions: string;
  instructionsPlaceholder: string;
  addToOrder: string;

  // Cart & Pre-order Drawer
  cartTitle: string;
  cartItemsCount: string;
  cartItemSingular: string;
  cartEmptyTitle: string;
  cartEmptyDesc: string;
  cartEmptyCta: string;
  perUnit: string;
  labelBread: string;
  labelSauces: string;
  labelExtras: string;
  labelNote: string;
  preorderSectionTitle: string;
  labelName: string;
  namePlaceholder: string;
  labelPhone: string;
  phonePlaceholder: string;
  labelServiceMode: string;
  serviceTakeaway: string;
  serviceDineIn: string;
  labelPickupTime: string;
  labelKitchenNotes: string;
  kitchenNotesPlaceholder: string;
  timeOption1: string;
  timeOption2: string;
  timeOption3: string;
  timeOption4: string;
  timeOption5: string;
  timeOption6: string;
  totalAtCounter: string;
  btnSendWhatsApp: string;
  btnDirectWebOrder: string;
  paymentDisclaimer: string;
  errorNameRequired: string;
  errorPhoneRequired: string;

  // Order Success Modal
  orderConfirmedBadge: string;
  orderTicketLabel: string;
  orderThanksMsg: string;
  orderReadyAtLabel: string;
  orderSummaryLabel: string;
  orderTotalToPay: string;
  btnCallSnack: string;
  btnGpsDirections: string;
  btnCloseSuccess: string;

  // Safi Story Section
  storyBadge: string;
  storyTitle: string;
  storyP1: string;
  storyP2: string;
  storyPillar1Title: string;
  storyPillar1Desc: string;
  storyPillar2Title: string;
  storyPillar2Desc: string;
  storyPillar3Title: string;
  storyPillar3Desc: string;
  storyLocationBadge: string;
  storyLocationTitle: string;
  storyLocationDesc: string;
  metricOpenLabel: string;
  metricOpenVal: string;
  metricCapacityLabel: string;
  metricCapacityVal: string;
  metricAvgTimeLabel: string;
  metricAvgTimeVal: string;
  metricPriceRangeLabel: string;
  metricPriceRangeVal: string;
  storyQuote: string;
  storyQuoteAuthor: string;

  // Location & Contact Section
  locBadge: string;
  locTitle: string;
  locDesc: string;
  locAddressTitle: string;
  locLandmark: string;
  locDineIn: string;
  locDineInSub: string;
  locTakeaway: string;
  locTakeawaySub: string;
  locDelivery: string;
  locDeliverySub: string;
  locCallButton: string;
  locWhatsAppButton: string;
  locGpsButton: string;
  locHoursTitle: string;
  locOpenTodayBadge: string;
  locContinuousService: string;
  locSevenDays: string;

  // Sticky Mobile Bar
  mobileViewOrder: string;
  mobileOrderCta: string;
  mobileCallSnack: string;

  // Footer
  footerDesc: string;
  footerNavTitle: string;
  footerOrdersTitle: string;
  footerOrdersPrompt: string;
  footerPhoneLabel: string;
  footerWhatsAppLabel: string;
  footerHoursLabel: string;
  footerHoursVal: string;
  footerDisclaimerTitle: string;
  footerDisclaimerText: string;
  footerCopyright: string;
  footerMadeWithLove: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    brandName: 'Ali Baba',
    brandTagline: 'Grill & Shawarma',
    navSpecialties: 'Spécialités',
    navMenu: 'Menu (1–50 MAD)',
    navStory: 'Notre Histoire',
    navLocation: 'Accès & Horaires',
    callUs: '05 24 62 18 90',
    cartButton: 'Commande / Retrait',
    cartShort: 'Panier',

    heroKickerLocation: 'Safi, Maroc',
    heroKickerType: 'Snack & Grillades de Quartier',
    heroKickerPrice: 'Prix Doux : 1 à 50 MAD',
    heroTitleLead: 'L’Authentique Goût du',
    heroTitleHighlight: 'Shawarma & Grillades',
    heroTitleEnd: 'à Safi',
    heroDescription:
      'Viandes marinées chaque matin aux épices traditionnelles, broche croustillante, sauces maison et générosité marocaine. À déguster sur place au Plateau ou à emporter en quelques minutes.',
    factExpressTitle: 'Préparation Express',
    factExpressDesc: 'Prêt en 10 à 15 minutes',
    factChoicesTitle: 'Large Choix',
    factChoicesDesc: 'Shawarma, Tacos, Plats',
    factOpenTitle: 'Ouvert 7j/7',
    factOpenDesc: '11h30 – 01h00 non-stop',
    ctaExploreMenu: 'Explorer le Menu Complet',
    ctaPreorder: 'Pré-commander pour Retrait',
    ctaWhatsApp: 'WhatsApp Direct',
    heroLocationNote: 'Boulevard Kennedy, Quartier Plateau, Safi (près des écoles et lycées)',
    heroSpecialtyBadge: 'Spécialité Maison du Jour',
    heroSpecialtySub: 'Recette signature Ali Baba',
    heroSpecialtyPriceNet: 'Prix net garanti',
    heroSpecialtyRanking: 'N°1 des ventes à Safi',
    heroSaucesIncluded: 'Sauces incluses :',
    heroSaucesList: 'Blanche Toum, Algérienne, Harissa',
    heroPortionFormat: 'Format :',
    heroPortionDesc: 'Généreux avec frites',
    heroSpecialtyOrderCta: 'Commander ou Personnaliser ce Plat →',

    specialtiesBadge: 'Fierté Culinaire de Safi',
    specialtiesTitle: 'Les Incontournables de notre Broche & Grill',
    specialtiesDesc: 'Des recettes éprouvées, préparées à la commande selon la tradition marocaine des snacks gourmands.',
    badgeSpecialty: 'Spécialité Safi',
    badgePopular: 'Populaire',
    readyIn: 'Prêt en',
    btnCustomize: 'Personnaliser',
    btnAdd: 'Ajouter',

    menuKicker: 'La Carte Gourmande',
    menuKickerPrice: '1 à 50 MAD',
    menuKickerFresh: 'Préparé Minute',
    menuTitle: 'Menu & Spécialités d’Ali Baba',
    menuDesc: 'Choisissez vos plats préférés, personnalisez les sauces et suppléments, et commandez pour retrait rapide au snack.',
    searchPlaceholder: 'Rechercher shawarma, kefta, jus...',
    clearSearch: 'Effacer',
    catAll: 'Toute la Carte',
    catShawarma: 'Signature Shawarma',
    catSandwiches: 'Sandwiches & Tacos',
    catPlatters: 'Plats & Grillades',
    catSides: 'Sides & Salades',
    catBeverages: 'Boissons & Jus Frais',
    filterFavorites: 'Coups de Cœur',
    showingItems: 'Affichage de',
    itemsAvailable: 'plats disponibles',
    searchResultsFor: 'Résultats pour',
    noItemsFound: 'Aucun plat trouvé',
    noItemsDesc: 'Aucun élément ne correspond à votre recherche.',
    resetFilters: 'Réinitialiser les filtres',

    modalCustomization: 'Personnalisation',
    stepBread: '1. Choix du Pain',
    stepSauces: '2. Sauces Maison (Max 3 incluses)',
    saucesSelected: 'sélectionnées',
    stepExtras: '3. Suppléments & Gourmandises',
    stepInstructions: '4. Instructions Particulières (Optionnel)',
    instructionsPlaceholder: 'Ex : Sans oignons, sauce harissa à part, bien doré...',
    addToOrder: 'Ajouter à la commande',

    cartTitle: 'Votre Commande',
    cartItemsCount: 'articles sélectionnés',
    cartItemSingular: 'article sélectionné',
    cartEmptyTitle: 'Votre panier est vide',
    cartEmptyDesc: 'Explorez notre carte et ajoutez vos délices de shawarma, sandwichs et grillades.',
    cartEmptyCta: 'Parcourir le Menu',
    perUnit: '/ unité',
    labelBread: 'Pain :',
    labelSauces: 'Sauces :',
    labelExtras: 'Suppléments :',
    labelNote: 'Note :',
    preorderSectionTitle: 'Coordonnées pour le Retrait à Safi',
    labelName: 'Nom & Prénom',
    namePlaceholder: 'Ex : Karim Bennani',
    labelPhone: 'Numéro de Téléphone (WhatsApp)',
    phonePlaceholder: '06 XX XX XX XX ou +212 ...',
    labelServiceMode: 'Mode de Service',
    serviceTakeaway: 'À Emporter (Takeaway)',
    serviceDineIn: 'Sur Place (Dine-in)',
    labelPickupTime: 'Délai de Retrait Souhaité',
    labelKitchenNotes: 'Note pour la cuisine',
    kitchenNotesPlaceholder: 'Ex : Tout bien emballé pour la route...',
    timeOption1: 'Dans 15 à 20 minutes (Dès que possible)',
    timeOption2: 'Dans 30 minutes',
    timeOption3: 'Dans 45 minutes',
    timeOption4: 'Dans 1 heure',
    timeOption5: 'Ce soir vers 20h00',
    timeOption6: 'Ce soir vers 21h30',
    totalAtCounter: 'Total à payer au comptoir :',
    btnSendWhatsApp: 'Envoyer ma commande via WhatsApp',
    btnDirectWebOrder: 'Valider directement en ligne (Ticket immédiat)',
    paymentDisclaimer: 'Paiement direct en espèces ou carte à la réception de votre commande au snack.',
    errorNameRequired: 'Veuillez renseigner votre nom pour la commande.',
    errorPhoneRequired: 'Veuillez renseigner un numéro de téléphone valide.',

    orderConfirmedBadge: 'Commande Confirmée',
    orderTicketLabel: 'Ticket',
    orderThanksMsg: 'l’équipe d’Ali Baba prépare vos plats chauds !',
    orderReadyAtLabel: 'Prêt à emporter :',
    orderSummaryLabel: 'Récapitulatif des plats :',
    orderTotalToPay: 'Montant à régler au comptoir :',
    btnCallSnack: 'Appeler le Snack',
    btnGpsDirections: 'Itinéraire GPS',
    btnCloseSuccess: 'Fermer et retourner au menu',

    storyBadge: 'L’Esprit du Snack Populaire',
    storyTitle: 'Une Histoire de Braise, d’Épices et de Générosité à Safi',
    storyP1: 'À Safi, la culture du snack de quartier est bien plus qu’une simple restauration rapide : c’est un véritable point de ralliement pour les étudiants du Plateau, les familles en balade et les travailleurs en quête d’un repas savoureux, chaud et réconfortant.',
    storyP2: 'Chez Ali Baba Grill & Shawarma, nous préparons nos marinades chaque matin avec des épices sélectionnées (cumin torréfié, paprika doux de la région, ail frais et coriandre). La viande est découpée finement à la commande sur notre broche rotative, offrant ce croustillant doré incomparable qui fait notre réputation locale.',
    storyPillar1Title: 'Cuisson au Feu',
    storyPillar1Desc: 'Broche rôtie dorée et grillades saisies sur braises ardentes.',
    storyPillar2Title: 'Hygiène Irréprochable',
    storyPillar2Desc: 'Plan de travail ouvert, viandes fraîches contrôlées chaque jour.',
    storyPillar3Title: 'Prix Pour Tous',
    storyPillar3Desc: 'Formules accessibles de 1 à 50 MAD sans jamais rogner sur la portion.',
    storyLocationBadge: 'Ancrage Local',
    storyLocationTitle: 'Au Cœur du Quartier Plateau à Safi',
    storyLocationDesc: 'Idéalement situé sur le Boulevard Kennedy, à proximité des collèges, lycées et facultés, notre comptoir vous accueille dans une ambiance conviviale du déjeuner jusqu’au cœur de la nuit.',
    metricOpenLabel: 'Ouverture :',
    metricOpenVal: '7 jours sur 7 non-stop',
    metricCapacityLabel: 'Capacité sur place :',
    metricCapacityVal: '45 places assises & terrasse',
    metricAvgTimeLabel: 'Temps moyen de service :',
    metricAvgTimeVal: '12 minutes',
    metricPriceRangeLabel: 'Fourchette de tarifs :',
    metricPriceRangeVal: '1 à 50 MAD',
    storyQuote: '« Le meilleur plan shawarma à Safi après les cours ou la plage de Sidi Bouzid. Pain croustillant, sauces généreuses et service toujours souriant. »',
    storyQuoteAuthor: '— Yassine E., Client fidèle du Plateau',

    locBadge: 'Nous Trouver à Safi',
    locTitle: 'Emplacement, Horaires & Contact',
    locDesc: 'Retrouvez-nous au cœur du Plateau à Safi pour vos repas sur place, commandes à emporter ou livraisons express.',
    locAddressTitle: 'Adresse du Snack',
    locLandmark: 'Repères : Quartier Plateau, à deux pas des instituts et commerces du centre.',
    locDineIn: 'Sur Place',
    locDineInSub: 'Salle & Terrasse',
    locTakeaway: 'À Emporter',
    locTakeawaySub: 'Prêt en 15 min',
    locDelivery: 'Livraison',
    locDeliverySub: 'Partenaires locaux',
    locCallButton: 'Appeler au',
    locWhatsAppButton: 'WhatsApp :',
    locGpsButton: 'Ouvrir dans Google Maps / Calculer l’Itinéraire',
    locHoursTitle: 'Horaires d’Ouverture',
    locOpenTodayBadge: 'Ouvert Aujourd’hui',
    locContinuousService: 'Service continu tout l’après-midi & soirée tardive.',
    locSevenDays: 'Service 7j/7',

    mobileViewOrder: 'Voir la commande',
    mobileOrderCta: 'Commander (1-50 DH)',
    mobileCallSnack: 'Appeler le Snack',

    footerDesc: 'Snack de quartier populaire à Safi, spécialisé dans les shawarmas croustillants, les sandwiches généreux et les grillades au feu de braise à prix accessibles (1 à 50 MAD).',
    footerNavTitle: 'Navigation',
    footerOrdersTitle: 'Commandes & Renseignements',
    footerOrdersPrompt: 'Pour vos commandes à emporter ou réservations de groupe :',
    footerPhoneLabel: 'Téléphone :',
    footerWhatsAppLabel: 'WhatsApp :',
    footerHoursLabel: 'Horaires :',
    footerHoursVal: 'Tous les jours de 11h30 à 01h00',
    footerDisclaimerTitle: 'Avertissement Portfolio Indépendant :',
    footerDisclaimerText: 'Ce projet web est un concept de portfolio indépendant inspiré par le contexte culinaire local d’un snack populaire à Safi, Maroc. Il n’est pas affilié, commandité, approuvé ni rattaché commercialement à l’entreprise référencée.',
    footerCopyright: 'Ali Baba Grill & Shawarma — Concept Portfolio Indépendant.',
    footerMadeWithLove: 'Conçu avec passion pour la gastronomie de rue à Safi',
  },

  ar: {
    brandName: 'علي بابا',
    brandTagline: 'مشويات وشاورما',
    navSpecialties: 'المميزات',
    navMenu: 'قائمة الطعام (1–50 درهم)',
    navStory: 'قصتنا في أسفي',
    navLocation: 'الموقع وساعات العمل',
    callUs: '05 24 62 18 90',
    cartButton: 'الطلب / الاستلام',
    cartShort: 'السلة',

    heroKickerLocation: 'أسفي، المغرب',
    heroKickerType: 'سناك ومشويات الحي الشهيرة',
    heroKickerPrice: 'أسعار مناسبة: 1 إلى 50 درهم',
    heroTitleLead: 'المذاق الأصيل لعشاق',
    heroTitleHighlight: 'الشاورما والمشويات',
    heroTitleEnd: 'في قلب أسفي',
    heroDescription:
      'لحوم ودواجن متبلة يومياً بأجود التوابل المغربية، محمرة على السيخ الدوار وبراعم الفحم، مع صلصات منزلية طازجة وكرم ضيافة أصيل. استمتع بها في مطعمنا بحي البلاطو أو خذها ساخنة معك.',
    factExpressTitle: 'تحضير سريع',
    factExpressDesc: 'جاهز خلال 10 إلى 15 دقيقة',
    factChoicesTitle: 'تشكيلة غنية',
    factChoicesDesc: 'شاورما، طاكوس، أطباق مشاوي',
    factOpenTitle: 'مفتوح 7/7 أيام',
    factOpenDesc: 'من 11:30 صباحاً حتى 01:00 ليلاً',
    ctaExploreMenu: 'استكشف قائمة الطعام كاملة',
    ctaPreorder: 'طلب مسبق للاستلام السريع',
    ctaWhatsApp: 'طلب مباشر عبر واتساب',
    heroLocationNote: 'شارع كينيدي، حي البلاطو، أسفي (قرب الثانويات والمدارس)',
    heroSpecialtyBadge: 'الطبق المميز اليومي',
    heroSpecialtySub: 'الوصفة الحصرية لعلي بابا',
    heroSpecialtyPriceNet: 'سعر صافٍ ومضمون',
    heroSpecialtyRanking: 'الأكثر طلباً ومحبة بأسفي',
    heroSaucesIncluded: 'الصلصات المرفقة:',
    heroSaucesList: 'ثومية بيضاء، جزائرية، هريسة بلدية',
    heroPortionFormat: 'الحجم:',
    heroPortionDesc: 'وجبة غنية ومشبعة مع بطاطس مقلية',
    heroSpecialtyOrderCta: 'اطلب أو خصص هذا الطبق الآن ←',

    specialtiesBadge: 'فخر الطهي في أسفي',
    specialtiesTitle: 'أطباقنا المميزة على السيخ والفحم',
    specialtiesDesc: 'وصفات متقنة تحضر فور طلبك وفق تقاليد السناك المغربي الأصيل والأطباق السريعة اللذيذة.',
    badgeSpecialty: 'تخصص أسفي',
    badgePopular: 'محبوب الزبناء',
    readyIn: 'جاهز في',
    btnCustomize: 'تخصيص المكونات',
    btnAdd: 'إضافة',

    menuKicker: 'قائمة الأطايب',
    menuKickerPrice: 'من 1 إلى 50 درهم',
    menuKickerFresh: 'تحضير طازج وفوري',
    menuTitle: 'قائمة طعام وتخصصات علي بابا',
    menuDesc: 'اختر وجباتك المفضلة، وحدد نوع الخبز والصلصات والإضافات، وأرسل طلبك للاستلام السريع دون انتظار.',
    searchPlaceholder: 'ابحث عن شاورما، كفتة، طاكوس، عصير...',
    clearSearch: 'مسح',
    catAll: 'كامل القائمة',
    catShawarma: 'شاورما مميزة',
    catSandwiches: 'سندويتشات وطاكوس',
    catPlatters: 'أطباق ومشاوي',
    catSides: 'مقبلات وسلطات',
    catBeverages: 'مشروبات وعصائر',
    filterFavorites: 'الأكثر شعبية',
    showingItems: 'عرض',
    itemsAvailable: 'أطباق متوفرة',
    searchResultsFor: 'نتائج البحث عن',
    noItemsFound: 'لم يتم العثور على أطباق',
    noItemsDesc: 'لا توجد أطباق تطابق كلمة البحث التي أدخلتها.',
    resetFilters: 'إعادة ضبط الخيارات',

    modalCustomization: 'تخصيص الوجبة',
    stepBread: '1. اختيار نوع الخبز',
    stepSauces: '2. الصلصات المنزلية (حتى 3 صلصات مجاناً)',
    saucesSelected: 'مختارة',
    stepExtras: '3. إضافات ومقبلات شهية',
    stepInstructions: '4. ملاحظات خاصة للمطبخ (اختياري)',
    instructionsPlaceholder: 'مثال: بدون بصل، صوص حار جانبي، تحمير إضافي...',
    addToOrder: 'إضافة إلى الطلب',

    cartTitle: 'سلة طلباتك',
    cartItemsCount: 'أطباق مختارة',
    cartItemSingular: 'طبق مختار',
    cartEmptyTitle: 'سلة الطلبات فارغة',
    cartEmptyDesc: 'استكشف قائمتنا واختر ما تشتهيه من الشاورما والمشويات والسندويتشات.',
    cartEmptyCta: 'تصفح قائمة الطعام',
    perUnit: '/ للواحد',
    labelBread: 'الخبز:',
    labelSauces: 'الصلصات:',
    labelExtras: 'الإضافات:',
    labelNote: 'ملاحظة:',
    preorderSectionTitle: 'بيانات الاستلام بمطعم أسفي',
    labelName: 'الاسم الكامل',
    namePlaceholder: 'مثال: كريم بناني',
    labelPhone: 'رقم الهاتف (واتساب)',
    phonePlaceholder: '06 XX XX XX XX أو +212 ...',
    labelServiceMode: 'طريقة الخدمة',
    serviceTakeaway: 'طلب سفري للأخذ (Takeaway)',
    serviceDineIn: 'تناول الطعام بالمطعم (Sur Place)',
    labelPickupTime: 'وقت الاستلام المفضل',
    labelKitchenNotes: 'ملاحظة خاصة للمطبخ',
    kitchenNotesPlaceholder: 'مثال: تغليف محكم للطريق، أكياس إضافية...',
    timeOption1: 'خلال 15 إلى 20 دقيقة (في أقرب وقت)',
    timeOption2: 'خلال 30 دقيقة',
    timeOption3: 'خلال 45 دقيقة',
    timeOption4: 'خلال ساعة واحدة',
    timeOption5: 'هذا المساء حوالي الساعة 20:00',
    timeOption6: 'هذا المساء حوالي الساعة 21:30',
    totalAtCounter: 'المجموع للأداء عند الاستلام:',
    btnSendWhatsApp: 'إرسال الطلب مباشرة عبر واتساب',
    btnDirectWebOrder: 'تأكيد الطلب الفوري بالموقع (تذكرة مباشرة)',
    paymentDisclaimer: 'الأداء نقداً أو بالبطاقة البنكية عند استلام طلبك مباشرة بالمطعم.',
    errorNameRequired: 'يرجى إدخال اسمك لتأكيد الطلب.',
    errorPhoneRequired: 'يرجى إدخال رقم هاتف صحيح للتواصل معك.',

    orderConfirmedBadge: 'تم تأكيد طلبك بنجاح',
    orderTicketLabel: 'تذكرة رقم',
    orderThanksMsg: 'شكراً لك! فريق علي بابا بأسفي بدأ في تحضير وجبتك الساخنة.',
    orderReadyAtLabel: 'موعد جاهزية الطلب:',
    orderSummaryLabel: 'تفاصيل وجباتك:',
    orderTotalToPay: 'المبلغ المستحق للأداء عند الاستلام:',
    btnCallSnack: 'اتصال هاتفي بالسناك',
    btnGpsDirections: 'الاتجاهات عبر الخريطة (GPS)',
    btnCloseSuccess: 'إغلاق والعودة للقائمة',

    storyBadge: 'روح سناك الحي الشعبي',
    storyTitle: 'قصة لهيب، توابل مغربية وكرم ضيافة بأسفي',
    storyP1: 'في مدينة أسفي، يعتبر سناك الحي أكثر من مجرد وجبة سريعة: إنه ملتقى دافئ للطلاب والعائلات بعد نزهة البحر وشاطئ سيدي بوزيد، والباحثين عن طعام شهي، نظيف ومعد بإتقان بأسعار في متناول الجميع.',
    storyP2: 'في مطعم علي بابا للمشويات والشاورما، نبدأ يومنا بتتبيل اللحوم والدجاج الطازج بتوابل بلادنا العطرة (كامون أسفي البلدي، تحميرة حلوة، ثوم وقزبرة طرية). نحمرها بعناية على السيخ الدوار وبراعم الفحم لنضمن لكم قرمشة ذهبية وطراوة لا تضاهى.',
    storyPillar1Title: 'طهي على اللهب والفحم',
    storyPillar1Desc: 'شاورما محمرة على السيخ ومشويات على الفحم الطبيعي.',
    storyPillar2Title: 'نظافة وجودة تامة',
    storyPillar2Desc: 'مطبخ مفتوح أمام الزبون ولحوم طازجة تفحص يومياً.',
    storyPillar3Title: 'أسعار مناسبة للجميع',
    storyPillar3Desc: 'وجبات مشبعة تتراوح بين 1 و 50 درهم دون أي مساومة على الجودة والوفرة.',
    storyLocationBadge: 'قريب منكم بأسفي',
    storyLocationTitle: 'في قلب حي البلاطو بأسفي',
    storyLocationDesc: 'موقع استراتيجي بشارع كينيدي، بجوار المدارس والثانويات والمعاهد، نرحب بكم في أجواء مريحة من الغداء حتى ساعات متأخرة من الليل.',
    metricOpenLabel: 'أيام العمل:',
    metricOpenVal: '7 أيام في الأسبوع بدون انقطاع',
    metricCapacityLabel: 'السعة الداخلية:',
    metricCapacityVal: '45 مقعداً وصالة مريحة وتراس',
    metricAvgTimeLabel: 'متوسط وقت التحضير:',
    metricAvgTimeVal: '12 دقيقة',
    metricPriceRangeLabel: 'نطاق الأسعار:',
    metricPriceRangeVal: '1 إلى 50 درهم',
    storyQuote: '«أحسن شاورما وسندويتشات بأسفي بعد حصص الدراسة أو خرجة بحر سيدي بوزيد. خبز مقرمش وصلصات غنية وناس ضحوكيين.»',
    storyQuoteAuthor: '— ياسين ع.، زبون وفي من حي البلاطو',

    locBadge: 'موقعنا بمدينة أسفي',
    locTitle: 'العنوان، ساعات العمل والتواصل',
    locDesc: 'تفضلوا بزيارتنا في حي البلاطو بأسفي لتناول وجباتكم بالداخل أو طلبها سفرياً وأخذها معكم.',
    locAddressTitle: 'عنوان السناك',
    locLandmark: 'علامات دالة: حي البلاطو، على مقربة من الثانويات والمعاهد بمركز المدينة.',
    locDineIn: 'في المطعم',
    locDineInSub: 'صالة مكيفة وتراس',
    locTakeaway: 'طلبات للأخذ',
    locTakeawaySub: 'جاهز في 15 دقيقة',
    locDelivery: 'توصيل محلي',
    locDeliverySub: 'خدمة سريعة بأسفي',
    locCallButton: 'اتصل بنا:',
    locWhatsAppButton: 'واتساب مباشر:',
    locGpsButton: 'فتح الموقع على خرائط جوجل (Google Maps)',
    locHoursTitle: 'ساعات العمل اليومية',
    locOpenTodayBadge: 'مفتوح الآن',
    locContinuousService: 'خدمة مستمرة طوال الظهيرة والمساء حتى وقت متأخر.',
    locSevenDays: 'خدمة يومية 7/7',

    mobileViewOrder: 'عرض تفاصيل الطلب',
    mobileOrderCta: 'اطلب الآن (1-50 درهم)',
    mobileCallSnack: 'اتصال هاتفي',

    footerDesc: 'سناك شعبي شهير بمدينة أسفي، متخصص في الشاورما المقرمشة والسندويتشات الغنية والمشويات على الفحم بأسعار معقولة للجميع (1 إلى 50 درهم).',
    footerNavTitle: 'أقسام الموقع',
    footerOrdersTitle: 'الطلبات والاستفسار',
    footerOrdersPrompt: 'لطلبات الأخذ السريع أو الوجبات العائلية:',
    footerPhoneLabel: 'الهاتف:',
    footerWhatsAppLabel: 'واتساب:',
    footerHoursLabel: 'ساعات العمل:',
    footerHoursVal: 'يومياً من 11:30 صباحاً حتى 01:00 ليلاً',
    footerDisclaimerTitle: 'تنبيه توضيحي حول المشروع المستقل:',
    footerDisclaimerText: 'هذا الموقع الإلكتروني هو نموذج بورتفوليو مستقل تم تصميمه بهدف إبراز قطاع الوجبات السريعة والسناك بمدينة أسفي. المشروع غير تابع رسمياً ولا ممول من أي جهة تجارية.',
    footerCopyright: 'علي بابا غريل وشاورما — مشروع بورتفوليو مستقل.',
    footerMadeWithLove: 'صمم بعناية وشغف تكريماً لمأكولات الشارع اللذيذة بأسفي',
  },
};
