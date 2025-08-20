// ===== PAO - ARCHIVO DE CONFIGURACIÓN =====
// Personaliza aquí toda la información de tu emprendimiento

const PAO_CONFIG = {
    
    // ===== INFORMACIÓN BÁSICA =====
    company: {
        name: "PAO",
        fullName: "PAO - Soluciones de Software a Medida",
        tagline: "Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento de tu emprendimiento",
        description: "Desarrollamos software personalizado, páginas web y aplicaciones para hacer crecer tu negocio. Soluciones tecnológicas a medida para emprendedores.",
        keywords: "software personalizado, desarrollo web, aplicaciones, emprendimiento, tecnología"
    },
    
    // ===== INFORMACIÓN DE CONTACTO =====
    contact: {
        phone: "+1 (555) 123-4567",
        email: "hola@pao.dev",
        address: "Ciudad de México, México",
        schedule: "Lun - Vie: 9:00 AM - 6:00 PM",
        whatsapp: "+1 (555) 123-4567"
    },
    
    // ===== REDES SOCIALES =====
    social: {
        facebook: "https://facebook.com/pao.dev",
        twitter: "https://twitter.com/pao_dev",
        linkedin: "https://linkedin.com/company/pao-dev",
        instagram: "https://instagram.com/pao.dev",
        github: "https://github.com/pao-dev"
    },
    
    // ===== SERVICIOS Y PRECIOS =====
    services: {
        web: {
            name: "Páginas Web Profesionales",
            price: "Desde $299",
            period: "/proyecto",
            features: [
                "Diseño Responsivo",
                "Optimización SEO",
                "Panel de Administración",
                "Integración con Redes Sociales"
            ]
        },
        app: {
            name: "Aplicaciones Web",
            price: "Desde $599",
            period: "/proyecto",
            featured: true,
            features: [
                "Aplicaciones Personalizadas",
                "Base de Datos Integrada",
                "Múltiples Usuarios",
                "Reportes y Analytics"
            ]
        },
        desktop: {
            name: "Software de Escritorio",
            price: "Desde $899",
            period: "/proyecto",
            features: [
                "Multiplataforma",
                "Base de Datos Local",
                "Backup Automático",
                "Instalador Profesional"
            ]
        }
    },
    
    // ===== ESTADÍSTICAS =====
    stats: [
        {
            number: "50+",
            label: "Proyectos Completados"
        },
        {
            number: "98%",
            label: "Clientes Satisfechos"
        },
        {
            number: "24/7",
            label: "Soporte Técnico"
        }
    ],
    
    // ===== PROCESO DE TRABAJO =====
    process: [
        {
            step: "01",
            title: "Consulta Gratuita",
            description: "Analizamos tus necesidades y objetivos para entender perfectamente tu proyecto."
        },
        {
            step: "02",
            title: "Propuesta Personalizada",
            description: "Desarrollamos una propuesta detallada con cronograma, funcionalidades y presupuesto."
        },
        {
            step: "03",
            title: "Desarrollo Iterativo",
            description: "Trabajamos en sprints, mostrándote el progreso y recibiendo feedback constante."
        },
        {
            step: "04",
            title: "Entrega y Soporte",
            description: "Implementamos tu solución y te brindamos soporte técnico continuo."
        }
    ],
    
    // ===== PORTAFOLIO =====
    portfolio: [
        {
            title: "Sistema de Punto de Venta",
            description: "Software completo para gestión de kioscos y tiendas minoristas",
            technologies: ["React", "Node.js", "PostgreSQL"],
            image: "imagen-proyecto1.jpg",
            link: "#"
        },
        {
            title: "E-commerce Panadería",
            description: "Tienda online con gestión de pedidos y delivery integrado",
            technologies: ["WordPress", "WooCommerce", "PHP"],
            image: "imagen-proyecto2.jpg",
            link: "#"
        },
        {
            title: "App de Delivery",
            description: "Aplicación móvil para gestión de entregas y seguimiento en tiempo real",
            technologies: ["Flutter", "Firebase", "Google Maps"],
            image: "imagen-proyecto3.jpg",
            link: "#"
        }
    ],
    
    // ===== TESTIMONIOS =====
    testimonials: [
        {
            quote: "PAO transformó completamente mi negocio. El sistema de gestión que desarrollaron me ahorra 3 horas diarias y ha aumentado mis ventas un 40%.",
            author: "María González",
            position: "Dueña, Panadería El Horno",
            rating: 5
        },
        {
            quote: "Excelente trabajo y profesionalismo. Entregaron mi página web antes del plazo y superó todas mis expectativas. Definitivamente los recomiendo.",
            author: "Carlos Mendoza",
            position: "CEO, TechStart Solutions",
            rating: 5
        },
        {
            quote: "La aplicación que desarrollaron para mi restaurante es increíble. Mis clientes pueden hacer pedidos online y yo gestiono todo desde mi celular.",
            author: "Ana Rodríguez",
            position: "Chef, Restaurante Sabor Casero",
            rating: 5
        }
    ],
    
    // ===== COLORES DE LA MARCA =====
    colors: {
        primary: "#2563eb",
        primaryDark: "#1d4ed8",
        secondary: "#64748b",
        accent: "#f59e0b",
        success: "#10b981",
        danger: "#ef4444",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        textLight: "#94a3b8",
        bgPrimary: "#ffffff",
        bgSecondary: "#f8fafc",
        bgDark: "#0f172a"
    },
    
    // ===== CONFIGURACIONES TÉCNICAS =====
    technical: {
        enableAnalytics: false,
        enableChat: false,
        enableNewsletter: false,
        enableCookies: true,
        enableLazyLoading: true,
        enablePWA: false
    },
    
    // ===== SEO Y META TAGS =====
    seo: {
        title: "PAO | Soluciones de Software a Medida para Emprendedores",
        description: "Desarrollamos software personalizado, páginas web y aplicaciones para hacer crecer tu negocio. Soluciones tecnológicas a medida para emprendedores.",
        keywords: "software personalizado, desarrollo web, aplicaciones, emprendimiento, tecnología",
        author: "PAO",
        ogImage: "https://pao.dev/og-image.jpg",
        twitterCard: "summary_large_image"
    }
};

// ===== FUNCIONES DE CONFIGURACIÓN =====

// Función para aplicar la configuración al DOM
function applyConfiguration() {
    // Aplicar título y meta tags
    document.title = PAO_CONFIG.seo.title;
    
    // Aplicar información de contacto
    const contactElements = document.querySelectorAll('[data-contact]');
    contactElements.forEach(element => {
        const contactType = element.getAttribute('data-contact');
        if (PAO_CONFIG.contact[contactType]) {
            element.textContent = PAO_CONFIG.contact[contactType];
        }
    });
    
    // Aplicar estadísticas
    const statElements = document.querySelectorAll('.stat');
    PAO_CONFIG.stats.forEach((stat, index) => {
        if (statElements[index]) {
            const numberElement = statElements[index].querySelector('h3');
            const labelElement = statElements[index].querySelector('p');
            if (numberElement) numberElement.textContent = stat.number;
            if (labelElement) labelElement.textContent = stat.label;
        }
    });
    
    // Aplicar proceso de trabajo
    const processElements = document.querySelectorAll('.process-step');
    PAO_CONFIG.process.forEach((step, index) => {
        if (processElements[index]) {
            const stepNumber = processElements[index].querySelector('.step-number');
            const stepTitle = processElements[index].querySelector('h3');
            const stepDesc = processElements[index].querySelector('p');
            
            if (stepNumber) stepNumber.textContent = step.step;
            if (stepTitle) stepTitle.textContent = step.title;
            if (stepDesc) stepDesc.textContent = step.description;
        }
    });
    
    // Aplicar servicios
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceTypes = ['web', 'app', 'desktop'];
    
    serviceTypes.forEach((type, index) => {
        if (serviceCards[index] && PAO_CONFIG.services[type]) {
            const service = PAO_CONFIG.services[type];
            const title = serviceCards[index].querySelector('h3');
            const price = serviceCards[index].querySelector('.price');
            const period = serviceCards[index].querySelector('.period');
            
            if (title) title.textContent = service.name;
            if (price) price.textContent = service.price;
            if (period) period.textContent = service.period;
            
            // Aplicar características destacadas
            if (service.featured) {
                serviceCards[index].classList.add('featured');
            }
        }
    });
    
    // Aplicar testimonios
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    PAO_CONFIG.testimonials.forEach((testimonial, index) => {
        if (testimonialCards[index]) {
            const quote = testimonialCards[index].querySelector('.testimonial-content p');
            const author = testimonialCards[index].querySelector('.author-info h4');
            const position = testimonialCards[index].querySelector('.author-info span');
            
            if (quote) quote.textContent = testimonial.quote;
            if (author) author.textContent = testimonial.author;
            if (position) position.textContent = testimonial.position;
        }
    });
    
    // Aplicar colores de marca
    applyBrandColors();
}

// Función para aplicar colores de marca
function applyBrandColors() {
    const root = document.documentElement;
    Object.entries(PAO_CONFIG.colors).forEach(([key, value]) => {
        const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVar, value);
    });
}

// Función para actualizar enlaces de redes sociales
function updateSocialLinks() {
    Object.entries(PAO_CONFIG.social).forEach(([platform, url]) => {
        const socialLink = document.querySelector(`[data-social="${platform}"]`);
        if (socialLink && url !== '#') {
            socialLink.href = url;
        }
    });
}

// Función para generar meta tags dinámicamente
function generateMetaTags() {
    const head = document.head;
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        head.appendChild(metaDesc);
    }
    metaDesc.content = PAO_CONFIG.seo.description;
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        head.appendChild(metaKeywords);
    }
    metaKeywords.content = PAO_CONFIG.seo.keywords;
    
    // Open Graph tags
    const ogTags = [
        { property: 'og:title', content: PAO_CONFIG.seo.title },
        { property: 'og:description', content: PAO_CONFIG.seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:image', content: PAO_CONFIG.seo.ogImage }
    ];
    
    ogTags.forEach(tag => {
        let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
        if (!ogTag) {
            ogTag = document.createElement('meta');
            ogTag.setAttribute('property', tag.property);
            head.appendChild(ogTag);
        }
        ogTag.content = tag.content;
    });
}

// ===== INICIALIZACIÓN =====

// Aplicar configuración cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        applyConfiguration();
        updateSocialLinks();
        generateMetaTags();
    });
} else {
    applyConfiguration();
    updateSocialLinks();
    generateMetaTags();
}

// Exportar configuración para uso global
window.PAO_CONFIG = PAO_CONFIG; 