export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const allProjects = [
    {
      id: 1,
      title: "موقع تجارة إلكترونية",
      description: "موقع لبيع المنتجات عبر الإنترنت مع نظام دفع متكامل",
      status: "active",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      title: "تطبيق توصيل طعام",
      description: "تطبيق لجلب وتوصيل الطلبات من المطاعم",
      status: "completed",
      category: "mobile",
      tags: ["Flutter", "Firebase"],
      createdAt: "2022-11-20",
    },
    {
      id: 3,
      title: "هوية علامة تجارية",
      description: "تصميم هوية بصرية كاملة لشركة ناشئة",
      status: "pending",
      category: "design",
      tags: ["Logo", "Branding"],
      createdAt: "2023-02-10",
    },
    {
      id: 4,
      title: "حملة تسويقية",
      description: "حملة تسويقية لزيادة المبيعات في رمضان",
      status: "active",
      category: "marketing",
      tags: ["Social Media", "Ads"],
      createdAt: "2023-03-01",
    },
    {
      id: 5,
      title: "نظام إدارة المحتوى",
      description: "نظام لإدارة محتوى المواقع الإلكترونية",
      status: "active",
      category: "web",
      tags: ["Vue.js", "Laravel"],
      createdAt: "2023-01-30",
    },
    {
      id: 6,
      title: "تطبيق لياقة بدنية",
      description: "تطبيق لمتابعة التمارين الرياضية والتغذية",
      status: "completed",
      category: "mobile",
      tags: ["React Native", "GraphQL"],
      createdAt: "2022-12-05",
    },
    {
      id: 7,
      title: "منصة تعليم إلكتروني",
      description: "منصة للتعلم عن بعد مع نظام إدارة الدورات",
      status: "active",
      category: "web",
      tags: ["Angular", "NestJS", "MySQL"],
      createdAt: "2023-02-18",
    },
    {
      id: 8,
      title: "تطبيق محفظة رقمية",
      description: "تطبيق لإدارة الأموال والمدفوعات الإلكترونية",
      status: "pending",
      category: "mobile",
      tags: ["Kotlin", "Swift", "Blockchain"],
      createdAt: "2023-03-15",
    },
    {
      id: 9,
      title: "تصميم واجهة مستخدم",
      description: "تصميم واجهة مستخدم لتطبيق جوال",
      status: "completed",
      category: "design",
      tags: ["UI/UX", "Figma", "Prototyping"],
      createdAt: "2022-10-10",
    },
    {
      id: 10,
      title: "استراتيجية تسويق رقمي",
      description: "وضع استراتيجية تسويقية لشركة تكنولوجيا",
      status: "active",
      category: "marketing",
      tags: ["SEO", "Content Marketing", "Analytics"],
      createdAt: "2023-01-05",
    },
    {
      id: 11,
      title: "متجر إلكتروني للملابس",
      description: "متجر لبيع الملابس والأزياء عبر الإنترنت",
      status: "active",
      category: "web",
      tags: ["Shopify", "Liquid", "E-commerce"],
      createdAt: "2023-02-22",
    },
    {
      id: 12,
      title: "تطبيق طقس",
      description: "تطبيق يقدم توقعات الطقس بدقة عالية",
      status: "completed",
      category: "mobile",
      tags: ["React Native", "API Integration"],
      createdAt: "2022-09-30",
    },
    {
      id: 13,
      title: "شعار شركة",
      description: "تصميم شعار مبتكر لشركة استشارات",
      status: "completed",
      category: "design",
      tags: ["Logo Design", "Brand Identity"],
      createdAt: "2022-11-15",
    },
    {
      id: 14,
      title: "حملة إعلانية على فيسبوك",
      description: "حملة إعلانية لزيادة المبيعات عبر فيسبوك",
      status: "active",
      category: "marketing",
      tags: ["Facebook Ads", "Targeting", "Conversion"],
      createdAt: "2023-03-10",
    },
    {
      id: 15,
      title: "منصة مدونات",
      description: "منصة لنشر المقالات والمدونات",
      status: "pending",
      category: "web",
      tags: ["WordPress", "PHP", "MySQL"],
      createdAt: "2023-04-01",
    },
    {
      id: 16,
      title: "تطبيق تدوين الملاحظات",
      description: "تطبيق لتدوين الملاحظات مع مزامنة سحابية",
      status: "active",
      category: "mobile",
      tags: ["Flutter", "Firebase"],
      createdAt: "2023-01-20",
    },
    {
      id: 17,
      title: "تصميم غلاف كتاب",
      description: "تصميم غلاف لكتاب إلكتروني",
      status: "completed",
      category: "design",
      tags: ["Book Cover", "Illustration"],
      createdAt: "2022-12-20",
    },
    {
      id: 18,
      title: "تحسين محركات البحث",
      description: "تحسين موقع موجود لظهور أفضل في محركات البحث",
      status: "active",
      category: "marketing",
      tags: ["SEO", "Keyword Research", "On-page"],
      createdAt: "2023-02-05",
    },
    {
      id: 19,
      title: "نظام حجز مواعيد",
      description: "نظام لإدارة وحجز المواعيد للعيادات",
      status: "active",
      category: "web",
      tags: ["Vue.js", "Laravel", "Calendar"],
      createdAt: "2023-01-10",
    },
    {
      id: 20,
      title: "لعبة تعليمية للأطفال",
      description: "تطبيق لعبة تعليمية للأطفال بعمر 3-6 سنوات",
      status: "pending",
      category: "mobile",
      tags: ["Unity", "Game Development", "Education"],
      createdAt: "2023-03-20",
    },
    {
      id: 21,
      title: "تصميم بطاقات عمل",
      description: "تصميم بطاقات عمل لشركة محاماة",
      status: "completed",
      category: "design",
      tags: ["Business Cards", "Print Design"],
      createdAt: "2022-10-25",
    },
    {
      id: 22,
      title: "إعلانات جوجل",
      description: "إدارة حملة إعلانية على جوجل أدوردز",
      status: "active",
      category: "marketing",
      tags: ["Google Ads", "PPC", "Conversion"],
      createdAt: "2023-02-15",
    },
    {
      id: 23,
      title: "منتدى نقاش",
      description: "منصة منتدى للنقاش وتبادل الآراء",
      status: "active",
      category: "web",
      tags: ["Django", "Python", "Forum"],
      createdAt: "2023-01-25",
    },
    {
      id: 24,
      title: "تطبيق تتبع اللياقة",
      description: "تطبيق لتعقب النشاط البدني والتمارين",
      status: "completed",
      category: "mobile",
      tags: ["HealthKit", "Google Fit", "React Native"],
      createdAt: "2022-11-30",
    },
    {
      id: 25,
      title: "تصميم إنفوجرافيك",
      description: "تصميم إنفوجرافيك لبيانات شركة",
      status: "pending",
      category: "design",
      tags: ["Infographic", "Data Visualization"],
      createdAt: "2023-03-05",
    },
    {
      id: 26,
      title: "إستراتيجية وسائل التواصل",
      description: "وضع خطة لنشر المحتوى على وسائل التواصل",
      status: "active",
      category: "marketing",
      tags: ["Social Media", "Content Calendar"],
      createdAt: "2023-02-28",
    },
    {
      id: 27,
      title: "موقع شخصي",
      description: "موقع شخصي لكاتب ومؤلف",
      status: "completed",
      category: "web",
      tags: ["Portfolio", "Static Site"],
      createdAt: "2022-10-15",
    },
    {
      id: 28,
      title: "تطبيق قائمة مهام",
      description: "تطبيق لإدارة المهام اليومية",
      status: "active",
      category: "mobile",
      tags: ["Todo List", "Productivity"],
      createdAt: "2023-01-15",
    },
    {
      id: 29,
      title: "تصميم بروشور",
      description: "تصميم بروشور دعائي لمنتج جديد",
      status: "completed",
      category: "design",
      tags: ["Brochure", "Print Design"],
      createdAt: "2022-12-10",
    },
    {
      id: 30,
      title: "تحليل منافسين",
      description: "تحليل استراتيجي للمنافسين في السوق",
      status: "pending",
      category: "marketing",
      tags: ["Competitor Analysis", "SWOT"],
      createdAt: "2023-03-25",
    },
  ];

  // تطبيق الفلاتر
  let filteredProjects = [...allProjects];

  if (query.category) {
    filteredProjects = filteredProjects.filter(
      (p) => p.category === query.category
    );
  }

  if (query.status) {
    filteredProjects = filteredProjects.filter(
      (p) => p.status === query.status
    );
  }

  // تطبيق الترتيب
  if (query.sort === "newest") {
    filteredProjects.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (query.sort === "oldest") {
    filteredProjects.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else if (query.sort === "name") {
    filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
  }

  // تطبيق الترقيم
  const page = parseInt(query.page) || 1;
  const perPage = 5;
  const startIndex = (page - 1) * perPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + perPage
  );

  return {
    data: paginatedProjects,
    total: filteredProjects.length,
    totalPages: Math.ceil(filteredProjects.length / perPage),
    currentPage: page,
  };
});
