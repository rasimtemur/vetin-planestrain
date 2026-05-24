// Çeviri Modülü - Translation Module
const translations = {
    tr: {
        // Başlık ve Genel
        pageTitle: "vetin : Düzlem Gerinim Analizi",

        // Sol Panel - Girdiler
        inputsTitle: "GERİNİM BİLEŞENLERİ",

        // Sol Panel - Sonuçlar
        resultsTitle: "ASAL GERİNİMLER",
        maxShearTitle: "EN BÜYÜK KAYMA GERİNİMİ",
        
        
        shearAngle1: "φ<span class=\"sub\">k1</span>",
        shearAngle2: "φ<span class=\"sub\">k2</span>",
        phiA1: "φ<span class=\"sub\">a1</span>",
        phiA2: "φ<span class=\"sub\">a2</span>",

        // GÜNCELLENEN KISIMLAR (Kesme işaretleri düzeldi):
        showStrainXiYi: "Mohr Çemberi",

        // Grafik Alt Yazıları (Suffixes)
        suffixMax: "mak",
        suffixMin: "min",
        suffixAve: "ort",
        suffixPrincipal1: "a1",
        suffixShear1: "k1",

        // Kontroller
        transformTitle: "DÖNÜŞTÜRÜLMÜŞ GERİNİMLER",

        // Notasyon Sistemi
        notationLabel: "Çizim Notasyonu :",
        notationStructural: "Mühendislik (Yapısal)",
        notationMathematical: "Matematiksel (Teorik)",
        notationLiterature: "Literatür",

        // Canvas Başlıkları
        mohrCircle: "MOHR ÇEMBERİ",
        strainState: "GERİNİM HALİ",
        principalStrains: "ASAL GERİNİMLER",
        shearStrains: "EN BÜYÜK KAYMA GERİNİMİ",
        transformedStrain: "DÖNÜŞTÜRÜLMÜŞ GERİNİMLER",

        // Canvas Kontrolleri
        zoomIn: "Yakınlaştır",
        zoomOut: "Uzaklaştır",
        resetView: "Ekrana Sığdır",

        // Butonlar
        toggleValuesMohr: "Değerleri Göster/Gizle",
        toggleValuesStrain: "Değerleri Göster/Gizle",
        toggleValuesPrincipal: "Değerleri Göster/Gizle",
        toggleValuesShear: "Değerleri Göster/Gizle",
        toggleValuesTransformed: "Değerleri Göster/Gizle",
        downloadSVG: "SVG İndir",
        fullscreen: "Tam Ekran",
        stepDraw: "Adım Adım Çiz",
        stopStepDraw: "Çizimi Tamamla",

        // Step-by-Step Translations
        step0Title: "Mohr Çemberi Çizimi", step0Desc: "Başlamak için 'Adım Adım Çiz' (▶) butonuna basınız.",
        step1Title: "1. Adım :", step1Desc: "Yatay eksen çizilir",
        step2Title: "2. Adım :", step2Desc: "ε<sub>x</sub> değeri yatay eksen üzerinde işaretlenir",
        step3Title: "2. Adım (Devam) :", step3Desc: "ε<sub>y</sub> değeri yatay eksen üzerinde işaretlenir",
        step4Title: "3. Adım :", step4Desc: "Düşey eksen çizilir",
        step5Title: "4. Adım :", step5Desc: "γ<sub>xy</sub> ve -γ<sub>xy</sub> değerleri düşey eksen üzerinde işaretlenir",
        step6Title: "4. Adım (Devam) :", step6Desc: "Etiketler yerleştirilir",
        step7Title: "5. Adım :", step7Desc: "ε<sub>x</sub> : γ<sub>xy</sub> ve ε<sub>y</sub> : -γ<sub>xy</sub> kesişimleri işaretlenir", step7DescCCW: "ε<sub>x</sub> : -γ<sub>xy</sub> ve ε<sub>y</sub> : γ<sub>xy</sub> kesişimleri işaretlenir (Ters Yön)",
        step8Title: "6. Adım :", step8Desc: "Kesişim noktaları birleştirilerek Mohr çemberinin çapı çizilir.",
        step9Title: "7. Adım :", step9Desc: "Çizilen çap, merkezi etrafında döndürülerek çember çizilir.",
        step10Title: "8. Adım :", step10Desc: "Çemberin yatay ekseni kestiği noktalar (Asal Gerilmeler) ε<sub>1</sub> işaretlenir.",
        step11Title: "8. Adım (Devam) :", step11Desc: "ε<sub>2</sub> işaretlenir.",
        step12Title: "9. Adım :", step12Desc: "Çemberin en üst (γ<sub>max</sub>) ve en alt (γ<sub>min</sub>) noktaları işaretlenir.",
        step13Title: "10. Adım :", step13Desc: "Çizilen çaprazın yatay eksen ile yaptığı açı 2φ<sub>a</sub> değerine eşittir.",

        // Footer
        footerTitle: "vetin : Düzlem Gerinim Analizi",
        mitLicense: "MIT Lisansı",
        copyright: "Tüm hakları saklıdır",

        // Layout
        layout: "SAYFA DÜZENİ",
        layoutDefault: "Varsayılan",
        layoutGrid: "Izgara",
        layoutCompact: "Kompakt Izgara",
        installApp: "Uygulamayı Yükle",
        aboutTitle: "Hakkında",
        aboutTagline: "DÜZLEM GERİNİM ANALİZİ",
        aboutVersion: "v1.0 · MIT Lisansı",
        aboutContent: "Bu proje, <b>İstanbul Üniversitesi-Cerrahpaşa</b> İnşaat Mühendisliği Bölümü Öğretim Üyesi <b>Doç. Dr. Rasim Temür</b> tarafından akademik araştırma süreçlerinin dijitalleşmesi amacıyla <b>Vetin</b> projesi kapsamında eğitim amaçlı hazırlanmıştır. Projenin kaynak kodları <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>'da <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT lisansı</a> ile dağıtılmaktadır.",
        aboutContent2: "Vetin ekosistemindeki diğer akademik çözümlere şu adresten ulaşabilirsiniz:",
        aboutClose: "Tamam",
        appMenuView: "Görünüm", appMenuLayout: "Sayfa Düzeni", appMenuAbout: "Hakkında",
        themeLight: "Aydınlık", themeDark: "Karanlık", themeBlueprint: "Ozalit",
        layoutDefaultLabel: "Varsayılan", layoutGridLabel: "Izgara", layoutCompactLabel: "Kompakt"
    },

    en: {
        pageTitle: "vetin : Plane Strain Analysis",
        inputsTitle: "STRAIN COMPONENTS",

        resultsTitle: "PRINCIPAL STRAINS",
        maxShearTitle: "MAXIMUM SHEAR STRAIN",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",

        // UPDATED PARTS:
        showStrainXiYi: "Mohr's Circle",

        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        suffixPrincipal1: "p1",
        suffixShear1: "s1",
        transformTitle: "TRANSFORMED STRAINS",

        // Notation System
        notationLabel: "Plot Notation :",
        notationStructural: "Engineering (Structural)",
        notationMathematical: "Mathematical (Theoretical)",
        notationLiterature: "Literature",

        mohrCircle: "MOHR'S CIRCLE",
        strainState: "STATE OF STRAIN",
        principalStrains: "PRINCIPAL STRAINS",
        shearStrains: "MAXIMUM SHEAR STRAIN",
        transformedStrain: "TRANSFORMED STRAINS",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        resetView: "Fit to Screen",
        toggleValuesMohr: "Toggle Values",
        toggleValuesStrain: "Toggle Values",
        toggleValuesPrincipal: "Toggle Values",
        toggleValuesShear: "Toggle Values",
        toggleValuesTransformed: "Show/Hide Values",
        downloadSVG: "Download SVG",
        fullscreen: "Full Screen",
        stepDraw: "Step-by-Step Draw",
        stopStepDraw: "Complete Drawing",

        // Step-by-Step Translations
        step0Title: "Mohr's Circle Construction", step0Desc: "Click 'Step-by-Step Draw' (▶) to start.",
        step1Title: "Step 1 :", step1Desc: "Horizontal axis is drawn",
        step2Title: "Step 2 :", step2Desc: "ε<sub>x</sub> value is marked on the horizontal axis",
        step3Title: "Step 2 (Cont.) :", step3Desc: "ε<sub>y</sub> value is marked on the horizontal axis",
        step4Title: "Step 3 :", step4Desc: "Vertical axis is drawn",
        step5Title: "Step 4 :", step5Desc: "γ<sub>x'y'</sub> and -γ<sub>x'y'</sub> values are marked on the vertical axis",
        step6Title: "Step 4 (Cont.) :", step6Desc: "Labels are placed",
        step7Title: "Step 5 :", step7Desc: "Intersections ε<sub>x</sub> : γ<sub>xy</sub> and ε<sub>y</sub> : -γ<sub>xy</sub> are marked", step7DescCCW: "Intersections ε<sub>x</sub> : -γ<sub>xy</sub> and ε<sub>y</sub> : γ<sub>xy</sub> are marked (Reverse Direction)",
        step8Title: "Step 6 :", step8Desc: "Intersection points are connected to draw the diameter of Mohr's circle.",
        step9Title: "Step 7 :", step9Desc: "The drawn diameter is rotated around its center to draw the circle.",
        step10Title: "Step 8 :", step10Desc: "Points where the circle intersects the horizontal axis (Principal Straines) ε<sub>1</sub> are marked.",
        step11Title: "Step 8 (Cont.) :", step11Desc: "ε<sub>2</sub> is marked.",
        step12Title: "Step 9 :", step12Desc: "Top (γ<sub>max</sub>) and bottom (γ<sub>min</sub>) points of the circle are marked.",
        step13Title: "Step 10 :", step13Desc: "The angle between the drawn diagonal and the horizontal axis is equal to 2φ<sub>a</sub>.",

        footerTitle: "vetin : Plane Strain Analysis",
        mitLicense: "MIT License",
        copyright: "All rights reserved",

        // Layout
        layout: "LAYOUT",
        layoutDefault: "Default",
        layoutGrid: "Grid",
        layoutCompact: "Compact Grid",
        installApp: "Install App",
        aboutTitle: "About",
        aboutTagline: "PLANE STRAIN ANALYSIS",
        aboutVersion: "v1.0 · MIT License",
        aboutContent: "This project was developed for educational purposes by <b>Assoc. Prof. Rasim Temür</b>, faculty member at the Department of Civil Engineering, <b>Istanbul University-Cerrahpaşa</b>, as part of the <b>Vetin</b> initiative for digital academic tools. The project source code is distributed on <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> under the <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT license</a>.",
        aboutContent2: "You can access other academic solutions in the Vetin ecosystem at",
        aboutClose: "OK",
        appMenuView: "Theme", appMenuLayout: "Page Layout", appMenuAbout: "About",
        themeLight: "Light", themeDark: "Dark", themeBlueprint: "Blueprint",
        layoutDefaultLabel: "Default", layoutGridLabel: "Grid", layoutCompactLabel: "Compact"
    },

    de: {
        pageTitle: "vetin : Ebener Spannungszustand",
        inputsTitle: "SPANNUNGSKOMPONENTEN",

        resultsTitle: "HAUPTSPANNUNGEN",
        maxShearTitle: "MAXIMALE SCHUBSPANNUNGEN",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",

        // UPDATED PARTS:
        showStrainXiYi: "Mohrscher Spannungskreis",

        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "TRANSFORMIERTE SPANNUNGEN",

        // Notation System
        notationLabel: "Zeichnungsnotation :",
        notationStructural: "Ingenieurwesen (Baustatik)",
        notationMathematical: "Mathematisch (Theoretisch)",
        notationLiterature: "Literatur",

        mohrCircle: "MOHRSCHER SPANNUNGSKREIS",
        strainState: "SPANNUNGSZUSTAND",
        principalStrains: "HAUPTSPANNUNGEN",
        shearStrains: "MAXIMALE SCHUBSPANNUNGEN",
        transformedStrain: "TRANSFORMIERTE SPANNUNGEN",
        zoomIn: "Vergrößern",
        zoomOut: "Verkleinern",
        resetView: "An Bildschirm anpassen",
        toggleValuesMohr: "Werte Umschalten",
        toggleValuesStrain: "Werte Umschalten",
        toggleValuesPrincipal: "Werte Umschalten",
        toggleValuesShear: "Werte Umschalten",
        toggleValuesTransformed: "Werte Anzeigen/Ausblenden",
        downloadSVG: "SVG Herunterladen",
        fullscreen: "Vollbild",
        stepDraw: "Schrittweise Zeichnen",
        stopStepDraw: "Zeichnung Vervollständigen",

        // Step-by-Step Translations
        step0Title: "Konstruktion des Mohrschen Spannungskreises", step0Desc: "Klicken Sie auf 'Schrittweise Zeichnen' (▶), um zu beginnen.",
        step1Title: "Schritt 1 :", step1Desc: "Horizontale Achse wird gezeichnet",
        step2Title: "Schritt 2 :", step2Desc: "ε<sub>x</sub>-Wert wird auf der horizontalen Achse markiert",
        step3Title: "Schritt 2 (Forts.) :", step3Desc: "ε<sub>y</sub>-Wert wird auf der horizontalen Achse markiert",
        step4Title: "Schritt 3 :", step4Desc: "Vertikale Achse wird gezeichnet",
        step5Title: "Schritt 4 :", step5Desc: "γ<sub>xy</sub>- und -γ<sub>xy</sub>-Werte werden auf der vertikalen Achse markiert",
        step6Title: "Schritt 4 (Forts.) :", step6Desc: "Beschriftungen werden platziert",
        step7Title: "Schritt 5 :", step7Desc: "Schnittpunkte ε<sub>x</sub> : γ<sub>xy</sub> und ε<sub>y</sub> : -γ<sub>xy</sub> werden markiert", step7DescCCW: "Schnittpunkte ε<sub>x</sub> : -γ<sub>xy</sub> und ε<sub>y</sub> : γ<sub>xy</sub> werden markiert (Umgekehrte Richtung)",
        step8Title: "Schritt 6 :", step8Desc: "Schnittpunkte werden verbunden, um den Durchmesser des Mohrschen Kreises zu zeichnen.",
        step9Title: "Schritt 7 :", step9Desc: "Der gezeichnete Durchmesser wird um seinen Mittelpunkt gedreht, um den Kreis zu zeichnen.",
        step10Title: "Schritt 8 :", step10Desc: "Schnittpunkte des Kreises mit der horizontalen Achse (Hauptspannungen) ε<sub>1</sub> werden markiert.",
        step11Title: "Schritt 8 (Forts.) :", step11Desc: "ε<sub>2</sub> wird markiert.",
        step12Title: "Schritt 9 :", step12Desc: "Oberste (γ<sub>max</sub>) und unterste (γ<sub>min</sub>) Punkte des Kreises werden markiert.",
        step13Title: "Schritt 10 :", step13Desc: "Der Winkel zwischen der gezeichneten Diagonale und der horizontalen Achse entspricht 2φ<sub>a</sub>.",

        footerTitle: "vetin : Ebener Spannungszustand",
        mitLicense: "MIT-Lizenz",
        copyright: "Alle Rechte vorbehalten",

        // Layout
        layout: "LAYOUT",
        layoutDefault: "Standard",
        layoutGrid: "Raster",
        layoutCompact: "Kompaktes Raster",
        aboutTitle: "Über",
        aboutTagline: "EBENE DEHNUNG",
        aboutVersion: "v1.0 · MIT-Lizenz",
        aboutContent: "Dieses Projekt wurde von <b>Assoc. Prof. Rasim Temür</b>, Dozent am Institut für Bauingenieurwesen der <b>Istanbul Universität-Cerrahpaşa</b>, im Rahmen der <b>Vetin</b>-Initiative für digitale akademische Werkzeuge zu Bildungszwecken entwickelt. Der Quellcode des Projekts wird auf <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> unter der <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT-Lizenz</a> verbreitet.",
        aboutContent2: "Weitere akademische Lösungen des Vetin-Ökosystems finden Sie unter",
        aboutClose: "OK",
        appMenuView: "Ansicht", appMenuLayout: "Seitenlayout", appMenuAbout: "Über",
        themeLight: "Hell", themeDark: "Dunkel", themeBlueprint: "Blaupause",
        layoutDefaultLabel: "Standard", layoutGridLabel: "Raster", layoutCompactLabel: "Kompakt"
    },

    cn: {
        pageTitle: "vetin : 平面应变分析",
        inputsTitle: "应变分量",
        resultsTitle: "主应变",
        maxShearTitle: "最大剪切应变",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "莫尔圆",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "变换后的应变",
        notationLabel: "绘图符号 :",
        notationStructural: "工程(结构)",
        notationMathematical: "数学(理论)",
        notationLiterature: "文献",
        mohrCircle: "莫尔圆",
        strainState: "应力状态",
        strainState: "应变状态",
        principalStrains: "主应变",
        shearStraines: "最大剪切应力",
        shearStrains: "最大剪切应变",
        transformedStrain: "变换后的应力",
        transformedStrain: "变换后的应变",
        zoomIn: "放大",
        zoomOut: "缩小",
        resetView: "适应屏幕",
        toggleValuesMohr: "切换数值",
        toggleValuesStrain: "切换数值",
        toggleValuesPrincipal: "切换数值",
        toggleValuesShear: "切换数值",
        toggleValuesTransformed: "显示/隐藏数值",
        downloadSVG: "下载 SVG",
        fullscreen: "全屏",
        stepDraw: "逐步绘制",
        stopStepDraw: "完成绘制",
        step0Title: "莫尔圆绘制", step0Desc: "点击 '逐步绘制' (▶) 开始。",
        step1Title: "第 1 步 :", step1Desc: "绘制水平轴",
        step2Title: "第 2 步 :", step2Desc: "在水平轴上标记 ε<sub>x</sub> 值",
        step3Title: "第 2 步 (续) :", step3Desc: "在水平轴上标记 ε<sub>y</sub> 值",
        step4Title: "第 3 步 :", step4Desc: "绘制垂直轴",
        step5Title: "第 4 步 :", step5Desc: "在垂直轴上标记 γ<sub>xy</sub> 和 -γ<sub>xy</sub> 值",
        step6Title: "第 4 步 (续) :", step6Desc: "放置标签",
        step7Title: "第 5 步 :", step7Desc: "标记交点 ε<sub>x</sub> : γ<sub>xy</sub> 和 ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "标记交点 ε<sub>x</sub> : -γ<sub>xy</sub> 和 ε<sub>y</sub> : γ<sub>xy</sub> (反向)",
        step8Title: "第 6 步 :", step8Desc: "连接交点以绘制莫尔圆的直径。",
        step9Title: "第 7 步 :", step9Desc: "围绕中心旋转绘制的直径以绘制圆。",
        step10Title: "第 8 步 :", step10Desc: "标记圆与水平轴相交的点 (主应变) ε<sub>1</sub>。",
        step11Title: "第 8 步 (续) :", step11Desc: "标记 ε<sub>2</sub>。",
        step12Title: "第 9 步 :", step12Desc: "标记圆的最高点 (γ<sub>max</sub>) 和最低点 (γ<sub>min</sub>)。",
        step13Title: "第 10 步 :", step13Desc: "绘制的对角线与水平轴之间的角度等于 2φ<sub>a</sub>。",
        footerTitle: "vetin : 平面应变分析",
        mitLicense: "MIT 许可证",
        copyright: "版权所有",
        layout: "布局",
        layoutDefault: "默认",
        layoutGrid: "网格",
        layoutCompact: "紧凑网格",
        appMenuView: "外观", appMenuLayout: "页面布局", appMenuAbout: "关于",
        themeLight: "浅色", themeDark: "深色", themeBlueprint: "蓝图",
        layoutDefaultLabel: "默认", layoutGridLabel: "网格", layoutCompactLabel: "紧凑",
        aboutTitle: "关于", aboutTagline: "平面应变分析", aboutVersion: "v1.0 · MIT 许可证",
        aboutContent: "本项目由 <b>伊斯坦布尔大学-Cerrahpaşa</b> 土木工程系 <b>副教授 Rasim Temür 博士</b> 开发，作为 <b>Vetin</b> 数字学术工具项目的一部分，用于教育目的。项目源代码在 <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> 上以 <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT 许可证</a> 发布。",
        aboutContent2: "您可以访问 Vetin 生态系统中的其他学术工具：", aboutClose: "确定"
    },

    es: {
        pageTitle: "vetin : Análisis de Deformación Plana",
        inputsTitle: "COMPONENTES DE DEFORMACIÓN",
        resultsTitle: "DEFORMACIONES PRINCIPALES",
        maxShearTitle: "DEFORMACIONES CORTANTES MÁXIMAS",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "Círculo de Mohr",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "DEFORMACIONES TRANSFORMADAS",
        notationLabel: "Notación de Dibujo :",
        notationStructural: "Ingeniería (Estructural)",
        notationMathematical: "Matemática (Teórica)",
        notationLiterature: "Literatura",
        mohrCircle: "CÍRCULO DE MOHR",
        strainState: "ESTADO DE DEFORMACIÓN",
        principalStrains: "DEFORMACIONES PRINCIPALES",
        shearStrains: "DEFORMACIÓN DE CISALLAMIENTO MÁXIMA",
        transformedStrain: "DEFORMACIONES TRANSFORMADAS",
        zoomIn: "Acercar",
        zoomOut: "Alejar",
        resetView: "Ajustar a Pantalla",
        toggleValuesMohr: "Mostrar/Ocultar Valores",
        toggleValuesStrain: "Mostrar/Ocultar Valores",
        toggleValuesPrincipal: "Mostrar/Ocultar Valores",
        toggleValuesShear: "Mostrar/Ocultar Valores",
        toggleValuesTransformed: "Mostrar/Ocultar Valores",
        downloadSVG: "Descargar SVG",
        fullscreen: "Pantalla Completa",
        stepDraw: "Dibujar Paso a Paso",
        stopStepDraw: "Completar Dibujo",
        step0Title: "Construcción del Círculo de Mohr", step0Desc: "Haga clic en 'Dibujar Paso a Paso' (▶) para comenzar.",
        step1Title: "Paso 1 :", step1Desc: "Se dibuja el eje horizontal",
        step2Title: "Paso 2 :", step2Desc: "Se marca el valor ε<sub>x</sub> en el eje horizontal",
        step3Title: "Paso 2 (Cont.) :", step3Desc: "Se marca el valor ε<sub>y</sub> en el eje horizontal",
        step4Title: "Paso 3 :", step4Desc: "Se dibuja el eje vertical",
        step5Title: "Paso 4 :", step5Desc: "Se marcan los valores γ<sub>xy</sub> y -γ<sub>xy</sub> en el eje vertical",
        step6Title: "Paso 4 (Cont.) :", step6Desc: "Se colocan las etiquetas",
        step7Title: "Paso 5 :", step7Desc: "Se marcan las intersecciones ε<sub>x</sub> : γ<sub>xy</sub> y ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "Se marcan las intersecciones ε<sub>x</sub> : -γ<sub>xy</sub> y ε<sub>y</sub> : γ<sub>xy</sub> (Dirección Inversa)",
        step8Title: "Paso 6 :", step8Desc: "Los puntos de intersección se conectan para dibujar el diámetro del círculo de Mohr.",
        step9Title: "Paso 7 :", step9Desc: "El diámetro dibujado se rota alrededor de su centro para dibujar el círculo.",
        step10Title: "Paso 8 :", step10Desc: "Se marcan los puntos donde el círculo corta el eje horizontal (Deformaciones Principales) ε<sub>1</sub>.",
        step11Title: "Paso 8 (Cont.) :", step11Desc: "Se marca ε<sub>2</sub>.",
        step12Title: "Paso 9 :", step12Desc: "Se marcan los puntos superior (γ<sub>max</sub>) e inferior (γ<sub>min</sub>) del círculo.",
        step13Title: "Paso 10 :", step13Desc: "El ángulo entre la diagonal dibujada y el eje horizontal es igual a 2φ<sub>a</sub>.",
        footerTitle: "vetin : Análisis de Deformación Plana",
        mitLicense: "Licencia MIT",
        copyright: "Todos los derechos reservados",
        layout: "DISEÑO",
        layoutDefault: "Predeterminado",
        layoutGrid: "Cuadrícula",
        layoutCompact: "Cuadrícula Compacta",
        appMenuView: "Apariencia", appMenuLayout: "Disposición de Página", appMenuAbout: "Acerca de",
        themeLight: "Claro", themeDark: "Oscuro", themeBlueprint: "Plano",
        layoutDefaultLabel: "Predeterminado", layoutGridLabel: "Cuadrícula", layoutCompactLabel: "Compacto",
        aboutTitle: "Acerca de", aboutTagline: "ANÁLISIS DE DEFORMACIÓN PLANA", aboutVersion: "v1.0 · Licencia MIT",
        aboutContent: "Este proyecto fue desarrollado con fines educativos por el <b>Asoc. Prof. Rasim Temür</b>, miembro del Departamento de Ingeniería Civil de la <b>Universidad de Estambul-Cerrahpaşa</b>, como parte de la iniciativa <b>Vetin</b> para herramientas académicas digitales. El código fuente del proyecto está disponible en <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> bajo la <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>licencia MIT</a>.",
        aboutContent2: "Puede acceder a otras soluciones académicas del ecosistema Vetin en", aboutClose: "Aceptar"
    },

    it: {
        pageTitle: "vetin : Analisi dello Sforzo Piano",
        inputsTitle: "COMPONENTI DI SFORZO",
        resultsTitle: "SFORZI PRINCIPALI",
        maxShearTitle: "SFORZI DI TAGLIO MASSIMI",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Cerchio di Mohr",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "SFORZI TRASFORMATI",
        notationLabel: "Notazione del Disegno :",
        notationStructural: "Ingegneria (Strutturale)",
        notationMathematical: "Matematica (Teorica)",
        notationLiterature: "Letteratura",
        mohrCircle: "CERCHIO DI MOHR",
        strainState: "STATO DI SFORZO",
        strainState: "STATO DI DEFORMAZIONE",
        principalStrains: "DEFORMAZIONI PRINCIPALI",
        shearStrains: "DEFORMAZIONE DI TAGLIO MASSIMA",
        transformedStrain: "DEFORMAZIONI TRASFORMATE",
        zoomIn: "Ingrandisci",
        zoomOut: "Riduci",
        resetView: "Adatta allo Schermo",
        toggleValuesMohr: "Mostra/Nascondi Valori",
        toggleValuesStrain: "Mostra/Nascondi Valori",
        toggleValuesPrincipal: "Mostra/Nascondi Valori",
        toggleValuesShear: "Mostra/Nascondi Valori",
        toggleValuesTransformed: "Mostra/Nascondi Valori",
        downloadSVG: "Scarica SVG",
        fullscreen: "Schermo Intero",
        stepDraw: "Disegna Passo a Passo",
        stopStepDraw: "Completa Disegno",
        step0Title: "Costruzione del Cerchio di Mohr", step0Desc: "Clicca 'Disegna Passo a Passo' (▶) per iniziare.",
        step1Title: "Passo 1 :", step1Desc: "Viene disegnato l'asse orizzontale",
        step2Title: "Passo 2 :", step2Desc: "Il valore ε<sub>x</sub> viene marcato sull'asse orizzontale",
        step3Title: "Passo 2 (Cont.) :", step3Desc: "Il valore ε<sub>y</sub> viene marcato sull'asse orizzontale",
        step4Title: "Passo 3 :", step4Desc: "Viene disegnato l'asse verticale",
        step5Title: "Passo 4 :", step5Desc: "I valori γ<sub>xy</sub> e -γ<sub>xy</sub> vengono marcati sull'asse verticale",
        step6Title: "Passo 4 (Cont.) :", step6Desc: "Vengono posizionate le etichette",
        step7Title: "Passo 5 :", step7Desc: "Vengono marcate le intersezioni ε<sub>x</sub> : γ<sub>xy</sub> e ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "Vengono marcate le intersezioni ε<sub>x</sub> : -γ<sub>xy</sub> e ε<sub>y</sub> : γ<sub>xy</sub> (Direzione Inversa)",
        step8Title: "Passo 6 :", step8Desc: "I punti di intersezione vengono collegati per disegnare il diametro del cerchio di Mohr.",
        step9Title: "Passo 7 :", step9Desc: "Il diametro disegnato viene ruotato attorno al suo centro per disegnare il cerchio.",
        step10Title: "Passo 8 :", step10Desc: "Vengono marcati i punti dove il cerchio interseca l'asse orizzontale (Sforzi Principali) ε<sub>1</sub>.",
        step11Title: "Passo 8 (Cont.) :", step11Desc: "Viene marcato ε<sub>2</sub>.",
        step12Title: "Passo 9 :", step12Desc: "Vengono marcati i punti superiore (γ<sub>max</sub>) e inferiore (γ<sub>min</sub>) del cerchio.",
        step13Title: "Passo 10 :", step13Desc: "L'angolo tra la diagonale disegnata e l'asse orizzontale è uguale a 2φ<sub>a</sub>.",
        footerTitle: "vetin : Analisi dello Sforzo Piano",
        mitLicense: "Licenza MIT",
        copyright: "Tutti i diritti riservati",
        layout: "LAYOUT",
        layoutDefault: "Predefinito",
        layoutGrid: "Griglia",
        layoutCompact: "Griglia Compatta",
        appMenuView: "Aspetto", appMenuLayout: "Layout di Pagina", appMenuAbout: "Informazioni",
        themeLight: "Chiaro", themeDark: "Scuro", themeBlueprint: "Progetto",
        layoutDefaultLabel: "Predefinito", layoutGridLabel: "Griglia", layoutCompactLabel: "Compatto",
        aboutTitle: "Informazioni", aboutTagline: "ANALISI DELLA DEFORMAZIONE PIANA", aboutVersion: "v1.0 · Licenza MIT",
        aboutContent: "Questo progetto è stato sviluppato per scopi educativi dal <b>Prof. Assoc. Dr. Rasim Temür</b>, membro del Dipartimento di Ingegneria Civile dell'<b>Università di Istanbul-Cerrahpaşa</b>, come parte dell'iniziativa <b>Vetin</b> per strumenti accademici digitali. Il codice sorgente è distribuito su <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> sotto la <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>licenza MIT</a>.",
        aboutContent2: "Puoi accedere ad altre soluzioni accademiche dell'ecosistema Vetin su", aboutClose: "OK"
    },

    pt: {
        pageTitle: "vetin : Análise de Deformação Plana",
        inputsTitle: "COMPONENTES DE DEFORMAÇÃO",
        resultsTitle: "DEFORMAÇÕES PRINCIPAIS",
        maxShearTitle: "DEFORMAÇÕES DE CISALHAMENTO MÁXIMAS",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Círculo de Mohr",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "DEFORMAÇÕES TRANSFORMADAS",
        notationLabel: "Notação de Desenho :",
        notationStructural: "Engenharia (Estrutural)",
        notationMathematical: "Matemática (Teórica)",
        notationLiterature: "Literatura",
        mohrCircle: "CÍRCULO DE MOHR",
        strainState: "ESTADO DE DEFORMAÇÃO",
        principalStrains: "DEFORMAÇÕES PRINCIPAIS",
        shearStrains: "DEFORMAÇÃO DE CISALHAMENTO MÁXIMA",
        transformedStrain: "DEFORMAÇÕES TRANSFORMADAS",
        zoomIn: "Ampliar",
        zoomOut: "Reduzir",
        resetView: "Ajustar à Tela",
        toggleValuesMohr: "Alternar Valores",
        toggleValuesStrain: "Alternar Valores",
        toggleValuesPrincipal: "Alternar Valores",
        toggleValuesShear: "Alternar Valores",
        toggleValuesTransformed: "Mostrar/Ocultar Valores",
        downloadSVG: "Baixar SVG",
        fullscreen: "Tela Cheia",
        stepDraw: "Desenhar Passo a Passo",
        stopStepDraw: "Completar Desenho",
        step0Title: "Construção do Círculo de Mohr", step0Desc: "Clique em 'Desenhar Passo a Passo' (▶) para começar.",
        step1Title: "Passo 1 :", step1Desc: "O eixo horizontal é desenhado",
        step2Title: "Passo 2 :", step2Desc: "O valor ε<sub>x</sub> é marcado no eixo horizontal",
        step3Title: "Passo 2 (Cont.) :", step3Desc: "O valor ε<sub>y</sub> é marcado no eixo horizontal",
        step4Title: "Passo 3 :", step4Desc: "O eixo vertical é desenhado",
        step5Title: "Passo 4 :", step5Desc: "Os valores γ<sub>xy</sub> e -γ<sub>xy</sub> são marcados no eixo vertical",
        step6Title: "Passo 4 (Cont.) :", step6Desc: "As etiquetas são posicionadas",
        step7Title: "Passo 5 :", step7Desc: "As interseções ε<sub>x</sub> : γ<sub>xy</sub> e ε<sub>y</sub> : -γ<sub>xy</sub> são marcadas", step7DescCCW: "As interseções ε<sub>x</sub> : -γ<sub>xy</sub> e ε<sub>y</sub> : γ<sub>xy</sub> são marcadas (Direção Reversa)",
        step8Title: "Passo 6 :", step8Desc: "Os pontos de interseção são conectados para desenhar o diâmetro do círculo de Mohr.",
        step9Title: "Passo 7 :", step9Desc: "O diâmetro desenhado é girado ao redor de seu centro para desenhar o círculo.",
        step10Title: "Passo 8 :", step10Desc: "Os pontos onde o círculo intercepta o eixo horizontal (Deformações Principais) ε<sub>1</sub> são marcados.",
        step11Title: "Passo 8 (Cont.) :", step11Desc: "ε<sub>2</sub> é marcado.",
        step12Title: "Passo 9 :", step12Desc: "Os pontos superior (γ<sub>max</sub>) e inferior (γ<sub>min</sub>) do círculo são marcados.",
        step13Title: "Passo 10 :", step13Desc: "O ângulo entre a diagonal desenhada e o eixo horizontal é igual a 2φ<sub>a</sub>.",
        footerTitle: "vetin : Análise de Deformação Plana",
        mitLicense: "Licença MIT",
        copyright: "Todos os direitos reservados",
        layout: "LAYOUT",
        layoutDefault: "Padrão",
        layoutGrid: "Grade",
        layoutCompact: "Grade Compacta",
        appMenuView: "Aparência", appMenuLayout: "Layout de Página", appMenuAbout: "Sobre",
        themeLight: "Claro", themeDark: "Escuro", themeBlueprint: "Planta",
        layoutDefaultLabel: "Padrão", layoutGridLabel: "Grade", layoutCompactLabel: "Compacto",
        aboutTitle: "Sobre", aboutTagline: "ANÁLISE DE DEFORMAÇÃO PLANA", aboutVersion: "v1.0 · Licença MIT",
        aboutContent: "Este projeto foi desenvolvido para fins educacionais pelo <b>Prof. Assoc. Dr. Rasim Temür</b>, membro do Departamento de Engenharia Civil da <b>Universidade de Istambul-Cerrahpaşa</b>, como parte da iniciativa <b>Vetin</b>. O código-fonte está no <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> sob a <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>licença MIT</a>.",
        aboutContent2: "Você pode acessar outras soluções acadêmicas do ecossistema Vetin em", aboutClose: "OK"
    },


    fa: { // UPDATED
        pageTitle: "vetin : تحلیل کرنش صفحه‌ای",
        inputsTitle: "اجزای کرنش",
        resultsTitle: "کرنش‌های اصلی",
        maxShearTitle: "حداکثر کرنش‌های برشی",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "دایره موهر",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "کرنش‌های تبدیل شده",
        notationLabel: "نمادگذاری رسم :",
        notationStructural: "مهندسی (سازه‌ای)",
        notationMathematical: "ریاضی (نظری)",
        notationLiterature: "ادبیات",
        mohrCircle: "دایره موهر",
        strainState: "حالت کرنش",
        principalStrains: "کرنش‌های اصلی",
        shearStrains: "حداکثر کرنش‌های برشی",
        transformedStrain: "کرنش‌های تبدیل شده",
        zoomIn: "بزرگنمایی",
        zoomOut: "کوچک‌نمایی",
        resetView: "تنظیم به صفحه",
        toggleValuesMohr: "نمایش/پنهان کردن مقادیر",
        toggleValuesStrain: "نمایش/پنهان کردن مقادیر",
        toggleValuesPrincipal: "نمایش/پنهان کردن مقادیر",
        toggleValuesShear: "نمایش/پنهان کردن مقادیر",
        toggleValuesTransformed: "نمایش/پنهان کردن مقادیر",
        downloadSVG: "دانلود SVG",
        fullscreen: "تمام صفحه",
        stepDraw: "رسم گام به گام",
        stopStepDraw: "تکمیل رسم",
        step0Title: "ساخت دایره موهر", step0Desc: "برای شروع روی 'رسم گام به گام' (▶) کلیک کنید.",
        step1Title: "گام ۱ :", step1Desc: "محور افقی رسم می‌شود",
        step2Title: "گام ۲ :", step2Desc: "مقدار ε<sub>x</sub> روی محور افقی علامت‌گذاری می‌شود",
        step3Title: "گام ۲ (ادامه) :", step3Desc: "مقدار ε<sub>y</sub> روی محور افقی علامت‌گذاری می‌شود",
        step4Title: "گام ۳ :", step4Desc: "محور عمودی رسم می‌شود",
        step5Title: "گام ۴ :", step5Desc: "مقادیر γ<sub>xy</sub> و -γ<sub>xy</sub> روی محور عمودی علامت‌گذاری می‌شوند",
        step6Title: "گام ۴ (ادامه) :", step6Desc: "برچسب‌ها قرار داده می‌شوند",
        step7Title: "گام ۵ :", step7Desc: "تقاطع‌های ε<sub>x</sub> : γ<sub>xy</sub> و ε<sub>y</sub> : -γ<sub>xy</sub> علامت‌گذاری می‌شوند", step7DescCCW: "تقاطع‌های ε<sub>x</sub> : -γ<sub>xy</sub> و ε<sub>y</sub> : γ<sub>xy</sub> علامت‌گذاری می‌شوند (جهت معکوس)",
        step8Title: "گام ۶ :", step8Desc: "نقاط تقاطع به هم متصل می‌شوند تا قطر دایره موهر رسم شود.",
        step9Title: "گام ۷ :", step9Desc: "قطر رسم شده حول مرکز خود چرخانده می‌شود تا دایره رسم شود.",
        step10Title: "گام ۸ :", step10Desc: "نقاطی که دایره محور افقی را قطع می‌کند (کرنش‌های اصلی) ε<sub>1</sub> علامت‌گذاری می‌شوند.",
        step11Title: "گام ۸ (ادامه) :", step11Desc: "ε<sub>2</sub> علامت‌گذاری می‌شود.",
        step12Title: "گام ۹ :", step12Desc: "نقاط بالایی (γ<sub>max</sub>) و پایینی (γ<sub>min</sub>) دایره علامت‌گذاری می‌شوند.",
        step13Title: "گام ۱۰ :", step13Desc: "زاویه بین قطر رسم شده و محور افقی برابر با 2φ<sub>a</sub> است.",
        footerTitle: "vetin : تحلیل کرنش صفحه‌ای",
        mitLicense: "مجوز MIT",
        copyright: "تمام حقوق محفوظ است",
        layout: "چیدمان",
        layoutDefault: "پیش‌فرض",
        layoutGrid: "شبکه",
        layoutCompact: "شبکه فشرده",
        appMenuView: "ظاهر", appMenuLayout: "چیدمان صفحه", appMenuAbout: "درباره",
        themeLight: "روشن", themeDark: "تاریک", themeBlueprint: "نقشه‌کشی",
        layoutDefaultLabel: "پیش‌فرض", layoutGridLabel: "شبکه", layoutCompactLabel: "فشرده",
        aboutTitle: "درباره", aboutTagline: "تحلیل کرنش صفحه‌ای", aboutVersion: "v1.0 · مجوز MIT",
        aboutContent: "این پروژه توسط <b>دانشیار دکتر Rasim Temür</b>، عضو هیئت علمی گروه مهندسی عمران <b>دانشگاه استانبول-Cerrahpaşa</b>، در قالب ابتکار <b>Vetin</b> برای ابزارهای دیجیتال دانشگاهی، به منظور آموزشی توسعه یافته است. کد منبع پروژه بر روی <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> تحت <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>مجوز MIT</a> توزیع می‌شود.",
        aboutContent2: "می‌توانید به سایر راه‌حل‌های علمی اکوسیستم Vetin در این آدرس دسترسی داشته باشید:", aboutClose: "تأیید"
    },
    hi: {
        pageTitle: "vetin : समतल विकृति विश्लेषण",
        inputsTitle: "विकृति घटक",
        resultsTitle: "मुख्य विकृति",
        maxShearTitle: "अधिकतम अपरूपण विकृति",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "मोहर वृत्त",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "रूपांतरित विकृति",
        notationLabel: "ड्राइंग नोटेशन :",
        notationStructural: "इंजीनियरिंग (संरचनात्मक)",
        notationMathematical: "गणितीय (सैद्धांतिक)",
        notationLiterature: "साहित्य",
        mohrCircle: "मोहर वृत्त",
        strainState: "विकृति अवस्था",
        principalStrains: "मुख्य विकृति",
        shearStrains: "अधिकतम अपरूपण विकृति",
        transformedStrain: "रूपांतरित विकृति",
        zoomIn: "ज़ूम इन",
        zoomOut: "ज़ूम आउट",
        resetView: "स्क्रीन में फिट करें",
        toggleValuesMohr: "मान टॉगल करें",
        toggleValuesStrain: "मान टॉगल करें",
        toggleValuesPrincipal: "मान टॉगल करें",
        toggleValuesShear: "मान टॉगल करें",
        toggleValuesTransformed: "मान दिखाएं/छुपाएं",
        downloadSVG: "SVG डाउनलोड करें",
        fullscreen: "पूर्ण स्क्रीन",
        stepDraw: "चरणबद्ध रूप से खींचें",
        stopStepDraw: "ड्राइंग पूरी करें",
        step0Title: "मोहर वृत्त निर्माण", step0Desc: "शुरू करने के लिए 'चरणबद्ध रूप से खींचें' (▶) पर क्लिक करें।",
        step1Title: "चरण 1 :", step1Desc: "क्षैतिज अक्ष खींचा जाता है",
        step2Title: "चरण 2 :", step2Desc: "ε<sub>x</sub> मान क्षैतिज अक्ष पर चिह्नित किया जाता है",
        step3Title: "चरण 2 (जारी) :", step3Desc: "ε<sub>y</sub> मान क्षैतिज अक्ष पर चिह्नित किया जाता है",
        step4Title: "चरण 3 :", step4Desc: "ऊर्ध्वाधर अक्ष खींचा जाता है",
        step5Title: "चरण 4 :", step5Desc: "γ<sub>xy</sub> और -γ<sub>xy</sub> मान ऊर्ध्वाधर अक्ष पर चिह्नित किए जाते हैं",
        step6Title: "चरण 4 (जारी) :", step6Desc: "लेबल रखे जाते हैं",
        step7Title: "चरण 5 :", step7Desc: "प्रतिच्छेदन ε<sub>x</sub> : γ<sub>xy</sub> और ε<sub>y</sub> : -γ<sub>xy</sub> चिह्नित किए जाते हैं", step7DescCCW: "प्रतिच्छेदन ε<sub>x</sub> : -γ<sub>xy</sub> और ε<sub>y</sub> : γ<sub>xy</sub> चिह्नित किए जाते हैं (उल्टी दिशा)",
        step8Title: "चरण 6 :", step8Desc: "प्रतिच्छेदन बिंदुओं को मोहर वृत्त के व्यास को खींचने के लिए जोड़ा जाता है।",
        step9Title: "चरण 7 :", step9Desc: "खींचा गया व्यास वृत्त खींचने के लिए अपने केंद्र के चारों ओर घुमाया जाता है।",
        step10Title: "चरण 8 :", step10Desc: "वे बिंदु जहां वृत्त क्षैतिज अक्ष को काटता है (मुख्य विकृति) ε<sub>1</sub> चिह्नित किए जाते हैं।",
        step11Title: "चरण 8 (जारी) :", step11Desc: "ε<sub>2</sub> चिह्नित किया जाता है।",
        step12Title: "चरण 9 :", step12Desc: "वृत्त के शीर्ष (γ<sub>max</sub>) और निचले (γ<sub>min</sub>) बिंदु चिह्नित किए जाते हैं।",
        step13Title: "चरण 10 :", step13Desc: "खींचे गए विकर्ण और क्षैतिज अक्ष के बीच का कोण 2φ<sub>a</sub> के बराबर है।",
        footerTitle: "vetin : समतल विकृति विश्लेषण",
        mitLicense: "MIT लाइसेंस",
        copyright: "सभी अधिकार सुरक्षित",
        layout: "लेआउट",
        layoutDefault: "डिफ़ॉल्ट",
        layoutGrid: "ग्रिड",
        layoutCompact: "कॉम्पैक्ट ग्रिड",
        appMenuView: "थीम", appMenuLayout: "पृष्ठ लेआउट", appMenuAbout: "के बारे में",
        themeLight: "हल्का", themeDark: "गहरा", themeBlueprint: "ब्लूप्रिंट",
        layoutDefaultLabel: "डिफ़ॉल्ट", layoutGridLabel: "ग्रिड", layoutCompactLabel: "कॉम्पैक्ट",
        aboutTitle: "के बारे में", aboutTagline: "समतल विकृति विश्लेषण", aboutVersion: "v1.0 · MIT लाइसेंस",
        aboutContent: "यह परियोजना <b>इस्तांबुल विश्वविद्यालय-Cerrahpaşa</b> के सिविल इंजीनियरिंग विभाग के <b>सह-प्राध्यापक डॉ. Rasim Temür</b> द्वारा शैक्षणिक उद्देश्यों के लिए <b>Vetin</b> डिजिटल अकादमिक उपकरण पहल के भाग के रूप में विकसित की गई है। परियोजना का स्रोत कोड <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> पर <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT लाइसेंस</a> के अंतर्गत वितरित किया गया है।",
        aboutContent2: "आप Vetin पारिस्थितिकी तंत्र के अन्य शैक्षणिक समाधानों तक यहाँ पहुँच सकते हैं:", aboutClose: "ठीक है"
    },


    ne: {
        pageTitle: "vetin : समतल विकृति विश्लेषण",
        inputsTitle: "विकृति घटकहरू",
        resultsTitle: "प्रमुख विकृतिहरू",
        maxShearTitle: "अधिकतम अपरूपण विकृति",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "मोहरको सर्कल",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "रूपान्तरित विकृति",
        notationLabel: "ड्रइङ नोटेसन :",
        notationStructural: "इन्जिनियरिङ (संरचनात्मक)",
        notationMathematical: "गणितीय (सैद्धान्तिक)",
        notationLiterature: "साहित्य",
        mohrCircle: "मोहरको सर्कल",
        strainState: "विकृति अवस्था",
        transformedStrain: "रूपान्तरित विकृति",
        zoomIn: "जुम इन",
        zoomOut: "जुम आउट",
        resetView: "स्क्रीनमा फिट गर्नुहोस्",
        toggleValuesMohr: "मानहरू टगल गर्नुहोस्",
        toggleValuesStrain: "मानहरू टगल गर्नुहोस्",
        toggleValuesPrincipal: "मानहरू टगल गर्नुहोस्",
        toggleValuesShear: "मानहरू टगल गर्नुहोस्",
        toggleValuesTransformed: "मनहर दखउनहस/छपनहस",
        downloadSVG: "SVG डाउनलोड गर्नुहोस्",
        fullscreen: "पूर्ण स्क्रीन",
        stepDraw: "चरणबद्ध रूपमा खिच्नुहोस्",
        stopStepDraw: "अङ्कन पूरा गर्नुहोस्",
        step0Title: "मोहरको सर्कल निर्माण", step0Desc: "सुरु गर्न 'चरणबद्ध रूपमा खिच्नुहोस्' (▶) मा क्लिक गर्नुहोस्।",
        step1Title: "चरण १ :", step1Desc: "क्षैतिज अक्ष खिचिन्छ",
        step2Title: "चरण २ :", step2Desc: "ε<sub>x</sub> मान क्षैतिज अक्षमा चिन्ह लगाइन्छ",
        step3Title: "चरण २ (जारी) :", step3Desc: "ε<sub>y</sub> मान क्षैतिज अक्षमा चिन्ह लगाइन्छ",
        step4Title: "चरण ३ :", step4Desc: "ऊर्ध्वाधर अक्ष खिचिन्छ",
        step5Title: "चरण ४ :", step5Desc: "γ<sub>xy</sub> र -γ<sub>xy</sub> मानहरू ऊर्ध्वाधर अक्षमा चिन्ह लगाइन्छ",
        step6Title: "चरण ४ (जारी) :", step6Desc: "लेबलहरू राखिन्छ",
        step7Title: "चरण ५ :", step7Desc: "प्रतिच्छेदन ε<sub>x</sub> : γ<sub>xy</sub> र ε<sub>y</sub> : -γ<sub>xy</sub> चिन्ह लगाइन्छ", step7DescCCW: "प्रतिच्छेदन ε<sub>x</sub> : -γ<sub>xy</sub> र ε<sub>y</sub> : γ<sub>xy</sub> चिन्ह लगाइन्छ (उल्टो दिशा)",
        step8Title: "चरण ६ :", step8Desc: "प्रतिच्छेदन बिन्दुहरू मोहरको सर्कलको व्यास खिच्न जोडिन्छन्।",
        step9Title: "चरण ७ :", step9Desc: "खिचिएको व्यासलाई यसको केन्द्र वरिपरि घुमाएर सर्कल खिचिन्छ।",
        step10Title: "चरण ८ :", step10Desc: "सर्कलले क्षैतिज अक्षलाई काटने बिन्दुहरू (प्रमुख विकृतिहरू) ε<sub>1</sub> चिन्ह लगाइन्छन्।",
        step11Title: "चरण ८ (जारी) :", step11Desc: "ε<sub>2</sub> चिन्ह लगाइन्छ।",
        step12Title: "चरण ९ :", step12Desc: "सर्कलको माथिल्लो (γ<sub>max</sub>) र तल्लो (γ<sub>min</sub>) बिन्दुहरू चिन्ह लगाइन्छन्।",
        step13Title: "चरण १० :", step13Desc: "खिचिएको विकर्ण र क्षैतिज अक्ष बीचको कोण 2φ<sub>a</sub> बराबर छ।",
        footerTitle: "vetin : समतल विकृति विश्लेषण",
        mitLicense: "MIT लाइसेन्स",
        copyright: "सबै अधिकार सुरक्षित",
        layout: "लेआउट",
        layoutDefault: "पूर्वनिर्धारित",
        layoutGrid: "ग्रिड",
        layoutCompact: "कम्प्याक्ट ग्रिड",
        appMenuView: "थीम", appMenuLayout: "पृष्ठ लेआउट", appMenuAbout: "बारेमा",
        themeLight: "हल्का", themeDark: "गाढा", themeBlueprint: "ब्लूप्रिन्ट",
        layoutDefaultLabel: "पूर्वनिर्धारित", layoutGridLabel: "ग्रिड", layoutCompactLabel: "कम्प्याक्ट",
        aboutTitle: "बारेमा", aboutTagline: "समतल विकृति विश्लेषण", aboutVersion: "v1.0 · MIT इजाजतपत्र",
        aboutContent: "यो परियोजना <b>इस्तांबुल विश्वविद्यालय-Cerrahpaşa</b> का सिभिल इन्जिनियरिङ विभागका <b>सह-प्राध्यापक डा. Rasim Temür</b> द्वारा शैक्षणिक उद्देश्यका लागि <b>Vetin</b> डिजिटल शैक्षणिक उपकरण पहलको भागको रूपमा विकास गरिएको हो। परियोजनाको स्रोत कोड <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> मा <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT इजाजतपत्र</a> अन्तर्गत वितरित छ।",
        aboutContent2: "तपाईं Vetin पारिस्थितिकी तन्त्रका अन्य शैक्षणिक समाधानहरूमा यहाँ पहुँच गर्न सक्नुहुन्छ:", aboutClose: "ठीक छ"
    },

    hy: {
        pageTitle: "vetin : Հարթ լարման վերլուծություն",
        inputsTitle: "ԼԱՐՄԱՆ ԲԱՂԱԴՐԻՉՆԵՐ",
        resultsTitle: "ԳԼԽԱՎՈՐ ԼԱՐՈՒՄՆԵՐ",
        maxShearTitle: "ԱՌԱՎԵԼԱԳՈՒՅՆ ԿՏՐՈՂ ԼԱՐՈՒՄՆԵՐ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Մոհրի շրջան",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ՓՈԽԱԿԵՐՊՎԱԾ ԼԱՐՈՒՄՆԵՐ",
        notationLabel: "Գծագրական նշագրություն :",
        notationStructural: "Ինժեներական (Կառուցվածքային)",
        notationMathematical: "Մաթեմատիկական (Տեսական)",
        notationLiterature: "Գրականություն",
        mohrCircle: "ՄՈՀՐԻ ՇՐՋԱՆ",
        strainState: "ԼԱՐՄԱՆ ՎԻՃԱԿ",
        strainState: "ԴԵՖՈՐՄԱՑԻՈՆ ՎԻՃԱԿ",
        principalStrains: "ԳԼԽԱՎՈՐ ԴԵՖՈՐՄԱՑԻԱՆԵՐ",
        shearStrains: "ԱՌԱՎԵԼԱԳՈՒՅՆ ԿՏՐՈՂ ԴԵՖՈՐՄԱՑԻԱ",
        transformedStrain: "ՓՈԽԱԿԵՐՊՎԱԾ ԴԵՖՈՐՄԱՑԻԱՆԵՐ",
        zoomIn: "Մեծացնել",
        zoomOut: "Փոքրացնել",
        resetView: "Տեղավորել էկրանին",
        toggleValuesMohr: "Արժեքների անջատում",
        toggleValuesStrain: "Արժեքների անջատում",
        toggleValuesPrincipal: "Արժեքների անջատում",
        toggleValuesShear: "Արժեքների անջատում",
        toggleValuesTransformed: "Ցdelays/Թdelays Արdelays",
        downloadSVG: "Ներբեռնել SVG",
        fullscreen: "Ամբողջ էկրան",
        stepDraw: "Քայլ առ քայլ գծագրում",
        stopStepDraw: "Ավարտել գծագրումը",
        step0Title: "Մոհրի շրջանի կառուցում", step0Desc: "Սեղմեք 'Քայլ առ քայլ գծագրում' (▶) սկսելու համար:",
        step1Title: "Քայլ 1 :", step1Desc: "Գծվում է հորիզոնական առանցքը",
        step2Title: "Քայլ 2 :", step2Desc: "ε<sub>x</sub> արժեքը նշվում է հորիզոնական առանցքի վրա",
        step3Title: "Քայլ 2 (Շարուն.) :", step3Desc: "ε<sub>y</sub> արժեքը նշվում է հորիզոնական առանցքի վրա",
        step4Title: "Քայլ 3 :", step4Desc: "Գծվում է ուղղահայաց առանցքը",
        step5Title: "Քայլ 4 :", step5Desc: "γ<sub>xy</sub> և -γ<sub>xy</sub> արժեքները նշվում են ուղղահայաց առանցքի վրա",
        step6Title: "Քայլ 4 (Շարուն.) :", step6Desc: "Տեղադրվում են պիտակները",
        step7Title: "Քայլ 5 :", step7Desc: "Նշվում են ε<sub>x</sub> : γ<sub>xy</sub> և ε<sub>y</sub> : -γ<sub>xy</sub> հատումները", step7DescCCW: "Նշվում են ε<sub>x</sub> : -γ<sub>xy</sub> և ε<sub>y</sub> : γ<sub>xy</sub> հատումները (Հակառակ ուղղություն)",
        step8Title: "Քայլ 6 :", step8Desc: "Հատման կետերը միացվում են Մոհրի շրջանի տրամագիծը գծելու համար:",
        step9Title: "Քայլ 7 :", step9Desc: "Գծված տրամագիծը պտտվում է իր կենտրոնի շուրջը՝ շրջանը գծելու համար:",
        step10Title: "Քայլ 8 :", step10Desc: "Նշվում են այն կետերը, որտեղ շրջանը հատում է հորիզոնական առանցքը (Գլխավոր լարումներ) ε<sub>1</sub>:",
        step11Title: "Քայլ 8 (Շարուն.) :", step11Desc: "Նշվում է ε<sub>2</sub>:",
        step12Title: "Քայլ 9 :", step12Desc: "Նշվում են շրջանի վերին (γ<sub>max</sub>) և ստորին (γ<sub>min</sub>) կետերը:",
        step13Title: "Քայլ 10 :", step13Desc: "Գծված անկյունագծի և հորիզոնական առանցքի միջև անկյունը հավասար է 2φ<sub>a</sub>:",
        footerTitle: "vetin : Հարթ լարման վերլուծություն",
        mitLicense: "MIT արտոնագիր",
        copyright: "Բոլոր իրավունքները պաշտպանված են",
        layout: "ԴԱՍԱՎՈՐՈՒԹՅՈՒՆ",
        layoutDefault: "Լռելյայն",
        layoutGrid: "Ցանց",
        layoutCompact: "Կոմպակտ ցանց",
        appMenuView: "Թեմա", appMenuLayout: "Էջի Դասավորություն", appMenuAbout: "Մասին",
        themeLight: "Բաց", themeDark: "Մուգ", themeBlueprint: "Բլյուփրինտ",
        layoutDefaultLabel: "Լռելյայն", layoutGridLabel: "Ցանց", layoutCompactLabel: "Կոմպակտ",
        aboutTitle: "Մասին", aboutTagline: "ՀԱՐԹ ԴԵՖՈՐՄԱՑԻԱՅԻ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ", aboutVersion: "v1.0 · MIT Լիցենզիա",
        aboutContent: "Այս նախագիծը մշակվել է կրթական նպատակներով <b>Ստամբուլի Համալսարան-Cerrahpaşa</b> Քաղաքացիական Ճարտարագիտության Ֆակուլտետի դասախոս <b>Դոց. Դոկտ. Rasim Temür</b> կողմից՝ <b>Vetin</b> թվային ակադեմիական գործիքների նախաձեռնության շրջանակներում: Ծրագրի կոդը <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>-ում <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT Լիցենզիայի</a> ներքո է:",
        aboutContent2: "Vetin էկոհամակարգի այլ ակադեմիական լուծումներին կարող եք հասնել հետևյալ հղումով՝", aboutClose: "Լավ"
    },

    el: {
        pageTitle: "vetin : Ανάλυση Επίπεδης Τάσης",
        inputsTitle: "ΣΥΣΤΑΤΙΚΑ ΤΗΣ ΤΑΣΗΣ",
        resultsTitle: "ΚΥΡΙΕΣ ΤΑΣΕΙΣ",
        maxShearTitle: "ΜΕΓΙΣΤΕΣ ΤΑΣΕΙΣ ΚΑΘΕΤΟΥ ΤΥΠΟΥ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Κύκλος Mohr",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ΜΕΤΑΣΧΗΜΑΤΙΣΜΕΝΕΣ ΤΑΣΕΙΣ",
        notationLabel: "Σημειογραφία Σχεδίασης :",
        notationStructural: "Μηχανική (Δομική)",
        notationMathematical: "Μαθηματική (Θεωρητική)",
        notationLiterature: "Βιβλιογραφία",
        mohrCircle: "ΚΥΚΛΟΣ MOHR",
        strainState: "ΚΑΤΑΣΤΑΣΗ ΠΑΡΑΜΟΡΦΩΣΗΣ",
        principalStrains: "ΚΥΡΙΕΣ ΠΑΡΑΜΟΡΦΩΣΕΙΣ",
        shearStrains: "ΜΕΓΙΣΤΗ ΔΙΑΤΜΗΤΙΚΗ ΠΑΡΑΜΟΡΦΩΣΗ",
        transformedStrain: "ΜΕΤΑΣΧΗΜΑΤΙΣΜΕΝΕΣ ΠΑΡΑΜΟΡΦΩΣΕΙΣ",
        zoomIn: "Μεγέθυνση",
        zoomOut: "Σμίκρυνση",
        resetView: "Προσαρμογή στην Οθόνη",
        toggleValuesMohr: "Εναλλαγή Τιμών",
        toggleValuesStrain: "Εναλλαγή Τιμών",
        toggleValuesPrincipal: "Εναλλαγή Τιμών",
        toggleValuesShear: "Εναλλαγή Τιμών",
        toggleValuesTransformed: "Εμφάνιση/Απόκρυψη Τιμών",
        downloadSVG: "Λήψη SVG",
        fullscreen: "Πλήρης Οθόνη",
        stepDraw: "Σχεδίαση Βήμα προς Βήμα",
        stopStepDraw: "Ολοκλήρωση Σχεδίασης",
        step0Title: "Κατασκευή Κύκλου Mohr", step0Desc: "Κάντε κλικ στο 'Σχεδίαση Βήμα προς Βήμα' (▶) για να ξεκινήσετε.",
        step1Title: "Βήμα 1 :", step1Desc: "Σχεδιάζεται ο οριζόντιος άξονας",
        step2Title: "Βήμα 2 :", step2Desc: "Η τιμή ε<sub>x</sub> σημειώνεται στον οριζόντιο άξονα",
        step3Title: "Βήμα 2 (Συν.) :", step3Desc: "Η τιμή ε<sub>y</sub> σημειώνεται στον οριζόντιο άξονα",
        step4Title: "Βήμα 3 :", step4Desc: "Σχεδιάζεται ο κατακόρυφος άξονας",
        step5Title: "Βήμα 4 :", step5Desc: "Οι τιμές γ<sub>xy</sub> και -γ<sub>xy</sub> σημειώνονται στον κατακόρυφο άξονα",
        step6Title: "Βήμα 4 (Συν.) :", step6Desc: "Τοποθετούνται οι ετικέτες",
        step7Title: "Βήμα 5 :", step7Desc: "Σημειώνονται οι τομές ε<sub>x</sub> : γ<sub>xy</sub> και ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "Σημειώνονται οι τομές ε<sub>x</sub> : -γ<sub>xy</sub> και ε<sub>y</sub> : γ<sub>xy</sub> (Αντίστροφη Κατεύθυνση)",
        step8Title: "Βήμα 6 :", step8Desc: "Τα σημεία τομής συνδέονται για να σχεδιαστεί η διάμετρος του κύκλου Mohr.",
        step9Title: "Βήμα 7 :", step9Desc: "Η σχεδιασμένη διάμετρος περιστρέφεται γύρω από το κέντρο της για να σχεδιαστεί ο κύκλος.",
        step10Title: "Βήμα 8 :", step10Desc: "Σημειώνονται τα σημεία όπου ο κύκλος τέμνει τον οριζόντιο άξονα (Κύριες Τάσεις) ε<sub>1</sub>.",
        step11Title: "Βήμα 8 (Συν.) :", step11Desc: "Σημειώνεται το ε<sub>2</sub>.",
        step12Title: "Βήμα 9 :", step12Desc: "Σημειώνονται τα ανώτερα (γ<sub>max</sub>) και κατώτερα (γ<sub>min</sub>) σημεία του κύκλου.",
        step13Title: "Βήμα 10 :", step13Desc: "Η γωνία μεταξύ της σχεδιασμένης διαγωνίου και του οριζόντιου άξονα είναι ίση με 2φ<sub>a</sub>.",
        footerTitle: "vetin : Ανάλυση Επίπεδης Τάσης",
        mitLicense: "Άδεια MIT",
        copyright: "Όλα τα δικαιώματα διατηρούνται",
        layout: "ΔΙΑΤΑΞΗ",
        layoutDefault: "Προεπιλογή",
        layoutGrid: "Πλέγμα",
        layoutCompact: "Κομπακτ Πλέγμα",
        appMenuView: "Εμφάνιση", appMenuLayout: "Διάταξη Σελίδας", appMenuAbout: "Σχετικά",
        themeLight: "Φωτεινό", themeDark: "Σκοτεινό", themeBlueprint: "Σχέδιο",
        layoutDefaultLabel: "Προεπιλογή", layoutGridLabel: "Πλέγμα", layoutCompactLabel: "Συμπαγές",
        aboutTitle: "Σχετικά", aboutTagline: "ΑΝΑΛΥΣΗ ΕΠΙΠΕΔΗΣ ΠΑΡΑΜΟΡΦΩΣΗΣ", aboutVersion: "v1.0 · Άδεια MIT",
        aboutContent: "Αυτό το έργο αναπτύχθηκε για εκπαιδευτικούς σκοπούς από τον <b>Αναπλ. Καθ. Δρ. Rasim Temür</b>, μέλος της Σχολής Πολιτικών Μηχανικών του <b>Πανεπιστημίου Κωνσταντινούπολης-Cerrahpaşa</b>, στο πλαίσιο της πρωτοβουλίας <b>Vetin</b>. Ο πηγαίος κώδικας διανέμεται στο <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> υπό την <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>άδεια MIT</a>.",
        aboutContent2: "Μπορείτε να αποκτήσετε πρόσβαση σε άλλες ακαδημαϊκές λύσεις του οικοσυστήματος Vetin στη διεύθυνση", aboutClose: "ΟΚ"
    },

    ro: {
        pageTitle: "vetin : Analiza Tensiunii Plane",
        inputsTitle: "COMPONENTE ALE TENSIUNII",
        resultsTitle: "TENSIUNI PRINCIPALE",
        maxShearTitle: "TENSIUNI DE FORFECARE MAXIME",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        showStrainXiYi: "Cercul Mohr",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "TENSIUNI TRANSFORMATE",
        notationLabel: "Notație Desen :",
        notationStructural: "Inginerie (Structurală)",
        notationMathematical: "Matematică (Teoretică)",
        notationLiterature: "Literatură",
        mohrCircle: "CERCUL MOHR",
        strainState: "STAREA DE TENSIUNE",
        strainState: "STAREA DE DEFORMARE",
        principalStrains: "DEFORMĂRI PRINCIPALE",
        shearStrains: "DEFORMĂRI DE FORFECARE MAXIME",
        transformedStrain: "DEFORMĂRI TRANSFORMATE",
        zoomIn: "Mărire",
        zoomOut: "Micșorare",
        resetView: "Potrivire Ecran",
        toggleValuesMohr: "Comutare Valori",
        toggleValuesStrain: "Comutare Valori",
        toggleValuesPrincipal: "Comutare Valori",
        toggleValuesShear: "Comutare Valori",
        toggleValuesTransformed: "Afișează/Ascunde Valorile",
        downloadSVG: "Descarcă SVG",
        fullscreen: "Ecran Complet",
        stepDraw: "Desenare Pas cu Pas",
        stopStepDraw: "Finalizează Desenul",
        step0Title: "Construcția Cercului Mohr", step0Desc: "Faceți clic pe 'Desenare Pas cu Pas' (▶) pentru a începe.",
        step1Title: "Pasul 1 :", step1Desc: "Se desenează axa orizontală",
        step2Title: "Pasul 2 :", step2Desc: "Valoarea ε<sub>x</sub> este marcată pe axa orizontală",
        step3Title: "Pasul 2 (Cont.) :", step3Desc: "Valoarea ε<sub>y</sub> este marcată pe axa orizontală",
        step4Title: "Pasul 3 :", step4Desc: "Se deseneazâ axa verticală",
        step5Title: "Pasul 4 :", step5Desc: "Valorile γ<sub>xy</sub> și -γ<sub>xy</sub> sunt marcate pe axa verticală",
        step6Title: "Pasul 4 (Cont.) :", step6Desc: "Se plasează etichetele",
        step7Title: "Pasul 5 :", step7Desc: "Sunt marcate intersecțiile ε<sub>x</sub> : γ<sub>xy</sub> și ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "Sunt marcate intersecțiile ε<sub>x</sub> : -γ<sub>xy</sub> și ε<sub>y</sub> : γ<sub>xy</sub> (Direcție Inversă)",
        step8Title: "Pasul 6 :", step8Desc: "Punctele de intersecție sunt conectate pentru a desena diametrul cercului Mohr.",
        step9Title: "Pasul 7 :", step9Desc: "Diametrul desenat este rotit în jurul centrului său pentru a desena cercul.",
        step10Title: "Pasul 8 :", step10Desc: "Sunt marcate punctele unde cercul intersectează axa orizontală (Tensiuni Principale) ε<sub>1</sub>.",
        step11Title: "Pasul 8 (Cont.) :", step11Desc: "Este marcat ε<sub>2</sub>.",
        step12Title: "Pasul 9 :", step12Desc: "Sunt marcate punctele superioare (γ<sub>max</sub>) și inferioare (γ<sub>min</sub>) ale cercului.",
        step13Title: "Pasul 10 :", step13Desc: "Unghiul dintre diagonala desenată și axa orizontală este egal cu 2φ<sub>a</sub>.",
        footerTitle: "vetin : Analiza Tensiunii Plane",
        mitLicense: "Licența MIT",
        copyright: "Toate drepturile rezervate",
        layout: "ARANJAMENT",
        layoutDefault: "Implicit",
        layoutGrid: "Grilă",
        layoutCompact: "Grilă Compactă",
        appMenuView: "Temă", appMenuLayout: "Aspect Pagină", appMenuAbout: "Despre",
        themeLight: "Luminos", themeDark: "Întunecat", themeBlueprint: "Blueprint",
        layoutDefaultLabel: "Implicit", layoutGridLabel: "Grilă", layoutCompactLabel: "Compact",
        aboutTitle: "Despre", aboutTagline: "ANALIZA DEFORMAȚIEI PLANE", aboutVersion: "v1.0 · Licență MIT",
        aboutContent: "Acest proiect a fost dezvoltat în scop educațional de <b>Conf. Dr. Rasim Temür</b>, cadru didactic al Departamentului de Inginerie Civilă al <b>Universității Istanbul-Cerrahpaşa</b>, ca parte a inițiativei <b>Vetin</b>. Codul sursă este distribuit pe <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> sub <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>licența MIT</a>.",
        aboutContent2: "Puteți accesa alte soluții academice ale ecosistemului Vetin la", aboutClose: "OK"
    },

    id: {
        pageTitle: "vetin : Analisis Tegangan Bidang",
        inputsTitle: "KOMPONEN TEGANGAN",
        resultsTitle: "TEGANGAN UTAMA",
        maxShearTitle: "TEGANGAN GESER MAKSIMUM",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Lingkaran Mohr",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "TEGANGAN YANG DITRANSFORMASI",
        notationLabel: "Notasi Gambar :",
        notationStructural: "Teknik (Struktural)",
        notationMathematical: "Matematika (Teoretis)",
        notationLiterature: "Literatur",
        mohrCircle: "LINGKARAN MOHR",
        strainState: "KEADAAN TEGANGAN",
        strainState: "KEADAAN REGANGAN",
        principalStrains: "REGANGAN UTAMA",
        shearStrains: "REGANGAN GESER MAKSIMUM",
        transformedStrain: "REGANGAN YANG DITRANSFORMASI",
        zoomIn: "Perbesar",
        zoomOut: "Perkecil",
        resetView: "Sesuaikan ke Layar",
        toggleValuesMohr: "Alihkan Nilai",
        toggleValuesStrain: "Alihkan Nilai",
        toggleValuesPrincipal: "Alihkan Nilai",
        toggleValuesShear: "Alihkan Nilai",
        toggleValuesTransformed: "Tampilkan/Sembunyikan Nilai",
        downloadSVG: "Unduh SVG",
        fullscreen: "Layar Penuh",
        stepDraw: "Gambar Langkah demi Langkah",
        stopStepDraw: "Selesaikan Gambar",
        step0Title: "Konstruksi Lingkaran Mohr", step0Desc: "Klik 'Gambar Langkah demi Langkah' (▶) untuk memulai.",
        step1Title: "Langkah 1 :", step1Desc: "Sumbu horizontal digambar",
        step2Title: "Langkah 2 :", step2Desc: "Nilai ε<sub>x</sub> ditandai pada sumbu horizontal",
        step3Title: "Langkah 2 (Lanjut) :", step3Desc: "Nilai ε<sub>y</sub> ditandai pada sumbu horizontal",
        step4Title: "Langkah 3 :", step4Desc: "Sumbu vertikal digambar",
        step5Title: "Langkah 4 :", step5Desc: "Nilai γ<sub>xy</sub> dan -γ<sub>xy</sub> ditandai pada sumbu vertikal",
        step6Title: "Langkah 4 (Lanjut) :", step6Desc: "Label ditempatkan",
        step7Title: "Langkah 5 :", step7Desc: "Perpotongan ε<sub>x</sub> : γ<sub>xy</sub> dan ε<sub>y</sub> : -γ<sub>xy</sub> ditandai", step7DescCCW: "Perpotongan ε<sub>x</sub> : -γ<sub>xy</sub> dan ε<sub>y</sub> : γ<sub>xy</sub> ditandai (Arah Terbalik)",
        step8Title: "Langkah 6 :", step8Desc: "Titik-titik perpotongan dihubungkan untuk menggambar diameter lingkaran Mohr.",
        step9Title: "Langkah 7 :", step9Desc: "Diameter yang digambar diputar di sekitar pusatnya untuk menggambar lingkaran.",
        step10Title: "Langkah 8 :", step10Desc: "Titik-titik di mana lingkaran memotong sumbu horizontal (Tegangan Utama) ε<sub>1</sub> ditandai.",
        step11Title: "Langkah 8 (Lanjut) :", step11Desc: "ε<sub>2</sub> ditandai.",
        step12Title: "Langkah 9 :", step12Desc: "Titik atas (γ<sub>max</sub>) dan bawah (γ<sub>min</sub>) lingkaran ditandai.",
        step13Title: "Langkah 10 :", step13Desc: "Sudut antara diagonal yang digambar dan sumbu horizontal sama dengan 2φ<sub>a</sub>.",
        footerTitle: "vetin : Analisis Tegangan Bidang",
        mitLicense: "Lisensi MIT",
        copyright: "Hak cipta dilindungi",
        layout: "TATA LETAK",
        layoutDefault: "Bawaan",
        layoutGrid: "Grid",
        layoutCompact: "Grid Kompak",
        appMenuView: "Tampilan", appMenuLayout: "Tata Letak Halaman", appMenuAbout: "Tentang",
        themeLight: "Terang", themeDark: "Gelap", themeBlueprint: "Cetak Biru",
        layoutDefaultLabel: "Bawaan", layoutGridLabel: "Grid", layoutCompactLabel: "Kompak",
        aboutTitle: "Tentang", aboutTagline: "ANALISIS REGANGAN BIDANG", aboutVersion: "v1.0 · Lisensi MIT",
        aboutContent: "Proyek ini dikembangkan untuk tujuan pendidikan oleh <b>Dosen Madya Dr. Rasim Temür</b>, anggota Departemen Teknik Sipil <b>Universitas Istanbul-Cerrahpaşa</b>, sebagai bagian dari inisiatif <b>Vetin</b>. Kode sumber proyek didistribusikan di <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> di bawah <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>lisensi MIT</a>.",
        aboutContent2: "Anda dapat mengakses solusi akademik lain dari ekosistem Vetin di", aboutClose: "OK"
    },

    tl: {
        pageTitle: "vetin : Pagsusuri ng Plane Strain",
        inputsTitle: "MGA SANGKAP NG STRAIN",
        resultsTitle: "MGA PANGUNAHING STRAIN",
        maxShearTitle: "MGA MAKSIMUM NA SHEAR STRAIN",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "Mohr's Circle",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "MGA TRANSFORMED STRAIN",
        notationLabel: "Notasyon ng Pagguhit :",
        notationStructural: "Engineering (Structural)",
        notationMathematical: "Matematikal (Teoretikal)",
        notationLiterature: "Literatura",
        mohrCircle: "MOHR'S CIRCLE",
        strainState: "ESTADO NG STRAIN",
        principalStrains: "MGA PANGUNAHING STRAIN",
        shearStrains: "MGA MAKSIMUM NA SHEAR STRAIN",
        transformedStrain: "MGA TRANSFORMED STRAIN",
        zoomIn: "Palakihin",
        zoomOut: "Paliitin",
        resetView: "I-fit sa Screen",
        toggleValuesMohr: "I-toggle ang mga Halaga",
        toggleValuesStrain: "I-toggle ang mga Halaga",
        toggleValuesPrincipal: "I-toggle ang mga Halaga",
        toggleValuesShear: "I-toggle ang mga Halaga",
        toggleValuesTransformed: "Ipakita/Itago ang mga Halaga",
        downloadSVG: "I-download ang SVG",
        fullscreen: "Buong Screen",
        stepDraw: "Gumuhit nang Step-by-Step",
        stopStepDraw: "Kumpletuhin ang Drawing",
        step0Title: "Konstruksyon ng Mohr's Circle", step0Desc: "I-click ang 'Gumuhit nang Step-by-Step' (▶) upang magsimula.",
        step1Title: "Hakbang 1 :", step1Desc: "Ang horizontal axis ay iginuhit",
        step2Title: "Hakbang 2 :", step2Desc: "Ang halaga ng ε<sub>x</sub> ay minarkahan sa horizontal axis",
        step3Title: "Hakbang 2 (Cont.) :", step3Desc: "Ang halaga ng ε<sub>y</sub> ay minarkahan sa horizontal axis",
        step4Title: "Hakbang 3 :", step4Desc: "Ang vertical axis ay iginuhit",
        step5Title: "Hakbang 4 :", step5Desc: "Ang mga halaga ng γ<sub>xy</sub> at -γ<sub>xy</sub> ay minarkahan sa vertical axis",
        step6Title: "Hakbang 4 (Cont.) :", step6Desc: "Ang mga label ay inilalagay",
        step7Title: "Hakbang 5 :", step7Desc: "Ang mga intersection na ε<sub>x</sub> : γ<sub>xy</sub> at ε<sub>y</sub> : -γ<sub>xy</sub> ay minarkahan", step7DescCCW: "Ang mga intersection na ε<sub>x</sub> : -γ<sub>xy</sub> at ε<sub>y</sub> : γ<sub>xy</sub> ay minarkahan (Baligtad na Direksyon)",
        step8Title: "Hakbang 6 :", step8Desc: "Ang mga intersection point ay ikinonekta upang iguhit ang diameter ng Mohr's circle.",
        step9Title: "Hakbang 7 :", step9Desc: "Ang iginuhit na diameter ay pinaikot sa paligid ng sentro nito upang iguhit ang bilog.",
        step10Title: "Hakbang 8 :", step10Desc: "Ang mga punto kung saan ang bilog ay nag-intersect sa horizontal axis (Principal Straines) ε<sub>1</sub> ay minarkahan.",
        step11Title: "Hakbang 8 (Cont.) :", step11Desc: "Ang ε<sub>2</sub> ay minarkahan.",
        step12Title: "Hakbang 9 :", step12Desc: "Ang mga itaas (γ<sub>max</sub>) at ibaba (γ<sub>min</sub>) na punto ng bilog ay minarkahan.",
        step13Title: "Hakbang 10 :", step13Desc: "Ang anggulo sa pagitan ng iginuhit na diagonal at horizontal axis ay katumbas ng 2φ<sub>a</sub>.",
        footerTitle: "vetin : Pagsusuri ng Plane Strain",
        mitLicense: "Lisensiya ng MIT",
        copyright: "Lahat ng karapatan ay nakalaan",
        layout: "LAYOUT",
        layoutDefault: "Default",
        layoutGrid: "Grid",
        layoutCompact: "Compact Grid",
        appMenuView: "Tema", appMenuLayout: "Layout ng Pahina", appMenuAbout: "Tungkol Sa",
        themeLight: "Maliwanag", themeDark: "Madilim", themeBlueprint: "Blueprint",
        layoutDefaultLabel: "Default", layoutGridLabel: "Grid", layoutCompactLabel: "Compact",
        aboutTitle: "Tungkol Sa", aboutTagline: "PAGSUSURI NG PLANE STRAIN", aboutVersion: "v1.0 · Lisensya ng MIT",
        aboutContent: "Ang proyektong ito ay binuo para sa mga layuning pang-edukasyon ng <b>Assoc. Prof. Rasim Temür</b>, miyembro ng Departamento ng Civil Engineering ng <b>Istanbul University-Cerrahpaşa</b>, bilang bahagi ng inisyatiba ng <b>Vetin</b>. Ang source code ay ipinamamahagi sa <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> sa ilalim ng <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>lisensya ng MIT</a>.",
        aboutContent2: "Maaari mong ma-access ang iba pang mga akademikong solusyon ng ekosistema ng Vetin sa", aboutClose: "OK"
    },

    ja: {
        pageTitle: "vetin : å¹³é¢å¿œåŠ›è§£æ",
        inputsTitle: "å¿œåŠ›æˆåˆ†",
        pageTitle: "vetin : 平面ひずみ解析",
        inputsTitle: "ひずみ成分",
        resultsTitle: "主ひずみ",
        maxShearTitle: "最大せん断ひずみ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "モールの円",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "変換ひずみ",
        notationLabel: "図示記法 :",
        notationStructural: "工学（構造）",
        notationMathematical: "数学（理論）",
        notationLiterature: "文献",
        mohrCircle: "モール円",
        strainState: "ひずみ状態",
        principalStrains: "主ひずみ",
        shearStrains: "最大せん断ひずみ",
        transformedStrain: "変換ひずみ",
        zoomIn: "拡大",
        zoomOut: "縮小",
        resetView: "画面に合わせる",
        toggleValuesMohr: "値の表示切替",
        toggleValuesStrain: "値の表示切替",
        toggleValuesPrincipal: "値の表示切替",
        toggleValuesShear: "値の表示切替",
        toggleValuesTransformed: "値の表示/非表示",
        downloadSVG: "SVGをダウンロード",
        fullscreen: "全画面",
        stepDraw: "ステップごとに描画",
        stopStepDraw: "描画を完了",
        step0Title: "モール円の構築", step0Desc: "「ステップごとに描画」（▶）をクリックして開始します。",
        step1Title: "ステップ 1 :", step1Desc: "水平軸が描画されます",
        step2Title: "ステップ 1 (続き) :", step2Desc: "ε<sub>x</sub> の値が水平軸上にマークされます",
        step3Title: "ステップ 1 (続き) :", step3Desc: "ε<sub>y</sub> の値が水平軸上にマークされます",
        step4Title: "ステップ 2 :", step4Desc: "垂直軸が描画されます",
        step5Title: "ステップ 3 :", step5Desc: "γ<sub>xy</sub> と -γ<sub>xy</sub> の値が垂直軸上にマークされます",
        step6Title: "ステップ 3 (続き) :", step6Desc: "ラベルが配置されます",
        step7Title: "ステップ 4 :", step7Desc: "交点 ε<sub>x</sub> : γ<sub>xy</sub> と ε<sub>y</sub> : -γ<sub>xy</sub> がマークされます", step7DescCCW: "交点 ε<sub>x</sub> : -γ<sub>xy</sub> と ε<sub>y</sub> : γ<sub>xy</sub> がマークされます（逆方向）",
        step8Title: "ステップ 5 :", step8Desc: "交点が接続されてモール円の直径が描画されます。",
        step9Title: "ステップ 6 :", step9Desc: "描画された直径が中心の周りで回転して円が描画されます。",
        step10Title: "ステップ 7 :", step10Desc: "円が水平軸と交わる点（主ひずみ）ε<sub>1</sub> がマークされます。",
        step11Title: "ステップ 7 (続き) :", step11Desc: "ε<sub>2</sub> がマークされます。",
        step12Title: "ステップ 8 :", step12Desc: "円の最上部（γ<sub>max</sub>）と最下部（γ<sub>min</sub>）の点がマークされます。",
        step13Title: "ステップ 9 :", step13Desc: "描画された対角線と水平軸の間の角度は 2φ<sub>a</sub> に等しくなります。",
        footerTitle: "vetin : 平面ひずみ解析",
        mitLicense: "MITライセンス",
        copyright: "全著作権所有",
        layout: "レイアウト",
        layoutDefault: "デフォルト",
        layoutGrid: "グリッド",
        layoutCompact: "コンパクトグリッド",
        appMenuView: "テーマ", appMenuLayout: "ページレイアウト", appMenuAbout: "このアプリについて",
        themeLight: "ライト", themeDark: "ダーク", themeBlueprint: "ブループリント",
        layoutDefaultLabel: "デフォルト", layoutGridLabel: "グリッド", layoutCompactLabel: "コンパクト",
        aboutTitle: "このアプリについて", aboutTagline: "平面ひずみ解析", aboutVersion: "v1.0 · MITライセンス",
        aboutContent: "このプロジェクトは、<b>イスタンブール大学Cerrahpaşa</b>土木工学科の<b>准教授 Rasim Temür 博士</b>が、<b>Vetin</b>イニシアティブの一環として教育目的で開発しました。ソースコードは<a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>上で<a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MITライセンス</a>の下で配布されています。",
        aboutContent2: "Vetinエコシステムの他の学術的ソリューションには以下でアクセスできます：", aboutClose: "OK"
    },

    ko: {
        pageTitle: "vetin : 평면 변형률 분석",
        inputsTitle: "변형률 성분",
        resultsTitle: "주변형률",
        maxShearTitle: "최대 전단 변형률",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "모어 원",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "변환된 변형률",
        notationLabel: "그리기 표기법 :",
        notationStructural: "공학 (구조)",
        notationMathematical: "수학 (이론)",
        notationLiterature: "문헌",
        mohrCircle: "모어 원",
        strainState: "변형률 상태",
        principalStrains: "주변형률",
        shearStrains: "최대 전단 변형률",
        transformedStrain: "변환된 변형률",
        zoomIn: "확대",
        zoomOut: "축소",
        resetView: "화면에 맞추기",
        toggleValuesMohr: "값 토글",
        toggleValuesStrain: "값 토글",
        toggleValuesPrincipal: "값 토글",
        toggleValuesShear: "값 토글",
        toggleValuesTransformed: "값 표시/숨기기",
        downloadSVG: "SVG 다운로드",
        fullscreen: "전체 화면",
        stepDraw: "단계별 그리기",
        stopStepDraw: "그리기 완료",
        step0Title: "모어 원 구성", step0Desc: "시작하려면 '단계별 그리기' (▶)를 클릭하세요.",
        step1Title: "1단계 :", step1Desc: "수평 축이 그려집니다",
        step2Title: "1단계 (계속) :", step2Desc: "ε<sub>x</sub> 값이 수평 축에 표시됩니다",
        step3Title: "1단계 (계속) :", step3Desc: "ε<sub>y</sub> 값이 수평 축에 표시됩니다",
        step4Title: "2단계 :", step4Desc: "수직 축이 그려집니다",
        step5Title: "3단계 :", step5Desc: "γ<sub>xy</sub> 및 -γ<sub>xy</sub> 값이 수직 축에 표시됩니다",
        step6Title: "3단계 (계속) :", step6Desc: "레이블이 배치됩니다",
        step7Title: "4단계 :", step7Desc: "교차점 ε<sub>x</sub> : γ<sub>xy</sub> 및 ε<sub>y</sub> : -γ<sub>xy</sub>가 표시됩니다", step7DescCCW: "교차점 ε<sub>x</sub> : -γ<sub>xy</sub> 및 ε<sub>y</sub> : γ<sub>xy</sub>가 표시됩니다 (역방향)",
        step8Title: "5단계 :", step8Desc: "교차점이 연결되어 모어 원의 지름이 그려집니다.",
        step9Title: "6단계 :", step9Desc: "그려진 지름이 중심 주위로 회전하여 원이 그려집니다.",
        step10Title: "7단계 :", step10Desc: "원이 수평 축과 교차하는 점 (주변형률) ε<sub>1</sub>이 표시됩니다.",
        step11Title: "7단계 (계속) :", step11Desc: "ε<sub>2</sub>가 표시됩니다.",
        step12Title: "8단계 :", step12Desc: "원의 상단 (γ<sub>max</sub>) 및 하단 (γ<sub>min</sub>) 점이 표시됩니다.",
        step13Title: "9단계 :", step13Desc: "그려진 대각선과 수평 축 사이의 각도는 2φ<sub>a</sub>와 같습니다.",
        footerTitle: "vetin : 평면 변형률 분석",
        mitLicense: "MIT 라이선스",
        copyright: "모든 권리 보유",
        layout: "레이아웃",
        layoutDefault: "기본값",
        layoutGrid: "그리드",
        layoutCompact: "컴팩트 그리드",
        appMenuView: "테마", appMenuLayout: "페이지 레이아웃", appMenuAbout: "정보",
        themeLight: "밝게", themeDark: "어둡게", themeBlueprint: "청사진",
        layoutDefaultLabel: "기본", layoutGridLabel: "격자", layoutCompactLabel: "컴팩트",
        aboutTitle: "정보", aboutTagline: "평면 변형률 해석", aboutVersion: "v1.0 · MIT 라이선스",
        aboutContent: "이 프로젝트는 <b>이스탄불 대학교-Cerrahpaşa</b> 토목공학과 <b>부교수 Rasim Temür 박사</b>가 <b>Vetin</b> 이니셔티브의 일환으로 교육 목적으로 개발했습니다. 소스 코드는 <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>에서 <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT 라이선스</a>하에 배포됩니다.",
        aboutContent2: "Vetin 생태계의 다른 학술 솔루션은 다음에서 확인하실 수 있습니다:", aboutClose: "확인"
    },

    ru: {
        pageTitle: "vetin : Анализ плоской деформации",
        inputsTitle: "КОМПОНЕНТЫ ДЕФОРМАЦИИ",
        resultsTitle: "ГЛАВНЫЕ ДЕФОРМАЦИИ",
        maxShearTitle: "МАКСИМАЛЬНЫЕ СДВИГОВЫЕ ДЕФОРМАЦИИ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Круг Мора",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ПРЕОБРАЗОВАННЫЕ ДЕФОРМАЦИИ",
        notationLabel: "Чертёжная нотация :",
        notationStructural: "Инженерное (Структурное)",
        notationMathematical: "Математическое (Теоретическое)",
        notationLiterature: "Литература",
        mohrCircle: "КРУГ МОРА",
        strainState: "СОСТОЯНИЕ ДЕФОРМАЦИИ",
        principalStrains: "ГЛАВНЫЕ ДЕФОРМАЦИИ",
        shearStrains: "МАКСИМАЛЬНЫЕ СДВИГОВЫЕ ДЕФОРМАЦИИ",
        transformedStrain: "ПРЕОБРАЗОВАННЫЕ ДЕФОРМАЦИИ",
        zoomIn: "Увеличить",
        zoomOut: "Уменьшить",
        resetView: "Подогнать к экрану",
        toggleValuesMohr: "Переключить значения",
        toggleValuesStrain: "Переключить значения",
        toggleValuesPrincipal: "Переключить значения",
        toggleValuesShear: "Переключить значения",
        toggleValuesTransformed: "Показать/Скрыть Значения",
        downloadSVG: "Скачать SVG",
        fullscreen: "Полный экран",
        stepDraw: "Пошаговое рисование",
        stopStepDraw: "Завершить рисование",
        step0Title: "Построение круга Мора", step0Desc: "Нажмите 'Пошаговое рисование' (▶), чтобы начать.",
        step1Title: "Шаг 1 :", step1Desc: "Рисуется горизонтальная ось",
        step2Title: "Шаг 1 (Продолж.) :", step2Desc: "Значение ε<sub>x</sub> отмечается на горизонтальной оси",
        step3Title: "Шаг 1 (Продолж.) :", step3Desc: "Значение ε<sub>y</sub> отмечается на горизонтальной оси",
        step4Title: "Шаг 2 :", step4Desc: "Рисуется вертикальная ось",
        step5Title: "Шаг 3 :", step5Desc: "Значения γ<sub>xy</sub> и -γ<sub>xy</sub> отмечаются на вертикальной оси",
        step6Title: "Шаг 3 (Продолж.) :", step6Desc: "Размещаются метки",
        step7Title: "Шаг 4 :", step7Desc: "Отмечаются пересечения ε<sub>x</sub> : γ<sub>xy</sub> и ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "Отмечаются пересечения ε<sub>x</sub> : -γ<sub>xy</sub> и ε<sub>y</sub> : γ<sub>xy</sub> (Обратное направление)",
        step8Title: "Шаг 5 :", step8Desc: "Точки пересечения соединяются для рисования диаметра круга Мора.",
        step9Title: "Шаг 6 :", step9Desc: "Нарисованный диаметр вращается вокруг своего центра для рисования круга.",
        step10Title: "Шаг 7 :", step10Desc: "Отмечаются точки, где круг пересекает горизонтальную ось (Главные деформации) ε<sub>1</sub>.",
        step11Title: "Шаг 7 (Продолж.) :", step11Desc: "Отмечается ε<sub>2</sub>.",
        step12Title: "Шаг 8 :", step12Desc: "Отмечаются верхняя (γ<sub>max</sub>) и нижняя (γ<sub>min</sub>) точки круга.",
        step13Title: "Шаг 9 :", step13Desc: "Угол между нарисованной диагональю и горизонтальной осью равен 2φ<sub>a</sub>.",
        footerTitle: "vetin : Анализ плоской деформации",
        mitLicense: "Лицензия MIT",
        copyright: "Все права защищены",
        layout: "МАКЕТ",
        layoutDefault: "По умолчанию",
        layoutGrid: "Сетка",
        layoutCompact: "Компактная сетка",
        appMenuView: "Тема", appMenuLayout: "Макет страницы", appMenuAbout: "О программе",
        themeLight: "Светлая", themeDark: "Тёмная", themeBlueprint: "Чертёж",
        layoutDefaultLabel: "По умолчанию", layoutGridLabel: "Сетка", layoutCompactLabel: "Компактный",
        aboutTitle: "О программе", aboutTagline: "АНАЛИЗ ПЛОСКОЙ ДЕФОРМАЦИИ", aboutVersion: "v1.0 · Лицензия MIT",
        aboutContent: "Этот проект разработан в образовательных целях <b>доц. д-р Расим Темюром</b>, преподавателем кафедры гражданского строительства <b>Стамбульского университета-Cerrahpaşa</b>, в рамках инициативы <b>Vetin</b>. Исходный код распространяется на <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> под <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>лицензией MIT</a>.",
        aboutContent2: "Доступ к другим академическим решениям экосистемы Vetin можно получить по адресу", aboutClose: "ОК"
    },

    ar: {
        pageTitle: "vetin : تحليل الانفعال المستوي",
        inputsTitle: "مكونات الانفعال",
        resultsTitle: "الانفعالات الرئيسية",
        maxShearTitle: "أقصى انفعالات القص",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "دائرة موهر",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "الانفعالات المحولة",
        notationLabel: "تدوين الرسم :",
        notationStructural: "الهندسة (الهيكلية)",
        notationMathematical: "الرياضيات (النظرية)",
        notationLiterature: "الأدب",
        mohrCircle: "دائرة موهر",
        strainState: "حالة الانفعال",
        principalStrains: "الانفعالات الرئيسية",
        shearStrains: "أقصى انفعالات القص",
        transformedStrain: "الانفعالات المحولة",
        zoomIn: "تكبير",
        zoomOut: "تصغير",
        resetView: "ملاءمة الشاشة",
        toggleValuesMohr: "تبديل القيم",
        toggleValuesStrain: "تبديل القيم",
        toggleValuesPrincipal: "تبديل القيم",
        toggleValuesShear: "تبديل القيم",
        toggleValuesTransformed: "إظهار/إخفاء القيم",
        downloadSVG: "تنزيل SVG",
        fullscreen: "ملء الشاشة",
        stepDraw: "رسم خطوة بخطوة",
        stopStepDraw: "إكمال الرسم",
        step0Title: "بناء دائرة موهر", step0Desc: "انقر على 'رسم خطوة بخطوة' (▶) للبدء.",
        step1Title: "الخطوة 1 :", step1Desc: "يتم رسم المحور الأفقي",
        step2Title: "الخطوة 1 (تابع) :", step2Desc: "يتم تحديد قيمة ε<sub>x</sub> على المحور الأفقي",
        step3Title: "الخطوة 1 (تابع) :", step3Desc: "يتم تحديد قيمة ε<sub>y</sub> على المحور الأفقي",
        step4Title: "الخطوة 2 :", step4Desc: "يتم رسم المحور العمودي",
        step5Title: "الخطوة 3 :", step5Desc: "يتم تحديد قيم γ<sub>xy</sub> و -γ<sub>xy</sub> على المحور العمودي",
        step6Title: "الخطوة 3 (تابع) :", step6Desc: "يتم وضع التسميات",
        step7Title: "الخطوة 4 :", step7Desc: "يتم تحديد تقاطعات ε<sub>x</sub> : γ<sub>xy</sub> و ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "يتم تحديد تقاطعات ε<sub>x</sub> : -γ<sub>xy</sub> و ε<sub>y</sub> : γ<sub>xy</sub> (الاتجاه العكسي)",
        step8Title: "الخطوة 5 :", step8Desc: "يتم ربط نقاط التقاطع لرسم قطر دائرة موهر.",
        step9Title: "الخطوة 6 :", step9Desc: "يتم تدوير القطر المرسوم حول مركزه لرسم الدائرة.",
        step10Title: "الخطوة 7 :", step10Desc: "يتم تحديد النقاط التي يتقاطع فيها الدائرة مع المحور الأفقي (الانفعالات الرئيسية) ε<sub>1</sub>.",
        step11Title: "الخطوة 7 (تابع) :", step11Desc: "يتم تحديد ε<sub>2</sub>.",
        step12Title: "الخطوة 8 :", step12Desc: "يتم تحديد النقاط العلوية (γ<sub>max</sub>) والسفلية (γ<sub>min</sub>) للدائرة.",
        step13Title: "الخطوة 9 :", step13Desc: "الزاوية بين القطر المرسوم والمحور الأفقي تساوي 2φ<sub>a</sub>.",
        footerTitle: "vetin : تحليل الانفعال المستوي",
        mitLicense: "رخصة MIT",
        copyright: "جميع الحقوق محفوظة",
        layout: "التخطيط",
        layoutDefault: "افتراضي",
        layoutGrid: "شبكة",
        layoutCompact: "شبكة مضغوطة",
        appMenuView: "المظهر", appMenuLayout: "تخطيط الصفحة", appMenuAbout: "حول",
        themeLight: "فاتح", themeDark: "داكن", themeBlueprint: "مخطط",
        layoutDefaultLabel: "افتراضي", layoutGridLabel: "شبكة", layoutCompactLabel: "مضغوط",
        aboutTitle: "حول", aboutTagline: "تحليل الإجهاد المستوي", aboutVersion: "v1.0 · رخصة MIT",
        aboutContent: "تم تطوير هذا المشروع لأغراض تعليمية من قبل <b>الأستاذ المشارك د. Rasim Temür</b>، عضو هيئة التدريس في قسم الهندسة المدنية، <b>جامعة إسطنبول-Cerrahpaşa</b>، كجزء من مبادرة <b>Vetin</b>. يتم توزيع الكود المصدري على <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> تحت <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>رخصة MIT</a>.",
        aboutContent2: "يمكنك الوصول إلى الحلول الأكاديمية الأخرى لنظام Vetin البيئي على", aboutClose: "موافق"
    },

    bn: {
        pageTitle: "vetin : সমতল বিকৃতি বিশ্লেষণ",
        inputsTitle: "বিকৃতি উপাদান",
        resultsTitle: "প্রধান বিকৃতি",
        maxShearTitle: "সর্বোচ্চ শিয়ার বিকৃতি",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "মোহর বৃত্ত",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "রূপান্তরিত বিকৃতি",
        notationLabel: "অঙ্কন স্বরলিপি :",
        notationStructural: "ইঞ্জিনিয়ারিং (কাঠামো)",
        notationMathematical: "গাণিতিক (তত্ত্ব)",
        notationLiterature: "সাহিত্য",
        mohrCircle: "মোহর বৃত্ত",
        strainState: "বিকৃতি অবস্থা",
        principalStrains: "প্রধান বিকৃতি",
        shearStrains: "সর্বোচ্চ শিয়ার বিকৃতি",
        transformedStrain: "রূপান্তরিত বিকৃতি",
        zoomIn: "জুম ইন",
        zoomOut: "জুম আউট",
        resetView: "স্ক্রিনে ফিট করুন",
        toggleValuesMohr: "মান টগল করুন",
        toggleValuesStrain: "মান টগল করুন",
        toggleValuesPrincipal: "মান টগল করুন",
        toggleValuesShear: "মান টগল করুন",
        toggleValuesTransformed: "মন দখন/লকন",
        downloadSVG: "SVG ডাউনলোড করুন",
        fullscreen: "ফুল স্ক্রিন",
        stepDraw: "ধাপে ধাপে আঁকুন",
        stopStepDraw: "অঙ্কন সম্পন্ন করুন",
        step0Title: "মোহর বৃত্ত নির্মাণ", step0Desc: "শুরু করতে 'ধাপে ধাপে আঁকুন' (▶) ক্লিক করুন।",
        step1Title: "ধাপ ১ :", step1Desc: "অনুভূমিক অক্ষ আঁকা হয়",
        step2Title: "ধাপ ১ (চলমান) :", step2Desc: "ε<sub>x</sub> মান অনুভূমিক অক্ষে চিহ্নিত করা হয়",
        step3Title: "ধাপ ১ (চলমান) :", step3Desc: "ε<sub>y</sub> মান অনুভূমিক অক্ষে চিহ্নিত করা হয়",
        step4Title: "ধাপ ২ :", step4Desc: "উল্লম্ব অক্ষ আঁকা হয়",
        step5Title: "ধাপ ৩ :", step5Desc: "γ<sub>xy</sub> এবং -γ<sub>xy</sub> মান উল্লম্ব অক্ষে চিহ্নিত করা হয়",
        step6Title: "ধাপ ৩ (চলমান) :", step6Desc: "লেবেল স্থাপন করা হয়",
        step7Title: "ধাপ ৪ :", step7Desc: "ছেদ ε<sub>x</sub> : γ<sub>xy</sub> এবং ε<sub>y</sub> : -γ<sub>xy</sub> চিহ্নিত করা হয়", step7DescCCW: "ছেদ ε<sub>x</sub> : -γ<sub>xy</sub> এবং ε<sub>y</sub> : γ<sub>xy</sub> চিহ্নিত করা হয় (বিপরীত দিক)",
        step8Title: "ধাপ ৫ :", step8Desc: "ছেদ বিন্দুগুলি সংযুক্ত করে মোহর বৃত্তের ব্যাস আঁকা হয়।",
        step9Title: "ধাপ ৬ :", step9Desc: "আঁকা ব্যাসটি তার কেন্দ্রের চারপাশে ঘুরিয়ে বৃত্ত আঁকা হয়।",
        step10Title: "ধাপ ৭ :", step10Desc: "যে বিন্দুতে বৃত্ত অনুভূমিক অক্ষকে ছেদ করে (প্রধান বিকৃতি) ε<sub>1</sub> চিহ্নিত করা হয়।",
        step11Title: "ধাপ ৭ (চলমান) :", step11Desc: "ε<sub>2</sub> চিহ্নিত করা হয়।",
        step12Title: "ধাপ ৮ :", step12Desc: "বৃত্তের শীর্ষ (γ<sub>max</sub>) এবং নিচের (γ<sub>min</sub>) বিন্দু চিহ্নিত করা হয়।",
        step13Title: "ধাপ ৯ :", step13Desc: "আঁকা কর্ণ এবং অনুভূমিক অক্ষের মধ্যবর্তী কোণ 2φ<sub>a</sub> এর সমান।",
        footerTitle: "vetin : সমতল বিকৃতি বিশ্লেষণ",
        mitLicense: "MIT লাইসেন্স",
        copyright: "সর্বস্বত্ব সংরক্ষিত",
        layout: "লেআউট",
        layoutDefault: "ডিফল্ট",
        layoutGrid: "গ্রিড",
        layoutCompact: "কমপ্যাক্ট গ্রিড",
        appMenuView: "থিম", appMenuLayout: "পেজ লেআউট", appMenuAbout: "সম্পর্কে",
        themeLight: "হালকা", themeDark: "গাঢ়", themeBlueprint: "ব্লুপ্রিন্ট",
        layoutDefaultLabel: "ডিফল্ট", layoutGridLabel: "গ্রিড", layoutCompactLabel: "কম্প্যাক্ট",
        aboutTitle: "সম্পর্কে", aboutTagline: "সমতল বিকৃতি বিশ্লেষণ", aboutVersion: "v1.0 · MIT লাইসেন্স",
        aboutContent: "এই প্রকল্পটি <b>ইস্তানবুল বিশ্ববিদ্যালয়-Cerrahpaşa</b> সিভিল ইঞ্জিনিয়ারিং বিভাগের <b>সহযোগী অধ্যাপক ড. Rasim Temür</b> দ্বারা <b>Vetin</b> উদ্যোগের অংশ হিসেবে শিক্ষামূলক উদ্দেশ্যে তৈরি। সোর্স কোড <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>-এ <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT লাইসেন্স</a>-এর অধীনে।",
        aboutContent2: "Vetin ইকোসিস্টেমের অন্যান্য একাডেমিক সমাধান এখানে:", aboutClose: "ঠিক আছে"
    },

    fr: {
        pageTitle: "vetin : Analyse de Contrainte Plane",
        inputsTitle: "COMPOSANTES DE CONTRAINTE",
        resultsTitle: "CONTRAINTES PRINCIPALES",
        maxShearTitle: "CONTRAINTES DE CISAILLEMENT MAXIMALES",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Cercle de Mohr",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "CONTRAINTES TRANSFORMÉES",
        notationLabel: "Notation de Dessin :",
        notationStructural: "Ingénierie (Structurelle)",
        notationMathematical: "Mathématique (Théorique)",
        notationLiterature: "Littérature",
        mohrCircle: "CERCLE DE MOHR",
        strainState: "ÉTAT DE DÉFORMATION",
        principalStrains: "DÉFORMATIONS PRINCIPALES",
        shearStrains: "DÉFORMATION DE CISAILLEMENT MAXIMALE",
        transformedStrain: "DÉFORMATIONS TRANSFORMÉES",
        zoomIn: "Agrandir",
        zoomOut: "Réduire",
        resetView: "Ajuster à l'Écran",
        toggleValuesMohr: "Basculer les Valeurs",
        toggleValuesStrain: "Basculer les Valeurs",
        toggleValuesPrincipal: "Basculer les Valeurs",
        toggleValuesShear: "Basculer les Valeurs",
        toggleValuesTransformed: "Afficher/Masquer les Valeurs",
        downloadSVG: "Télécharger SVG",
        fullscreen: "Plein Écran",
        stepDraw: "Dessiner Étape par Étape",
        stopStepDraw: "Terminer le Dessin",
        step0Title: "Construction du Cercle de Mohr", step0Desc: "Cliquez sur 'Dessiner Étape par Étape' (▶) pour commencer.",
        step1Title: "Étape 1 :", step1Desc: "L'axe horizontal est dessiné",
        step2Title: "Étape 1 (Cont.) :", step2Desc: "La valeur ε<sub>x</sub> est marquée sur l'axe horizontal",
        step3Title: "Étape 1 (Cont.) :", step3Desc: "La valeur ε<sub>y</sub> est marquée sur l'axe horizontal",
        step4Title: "Étape 2 :", step4Desc: "L'axe vertical est dessiné",
        step5Title: "Étape 3 :", step5Desc: "Les valeurs γ<sub>xy</sub> et -γ<sub>xy</sub> sont marquées sur l'axe vertical",
        step6Title: "Étape 3 (Cont.) :", step6Desc: "Les étiquettes sont placées",
        step7Title: "Étape 4 :", step7Desc: "Les intersections ε<sub>x</sub> : γ<sub>xy</sub> et ε<sub>y</sub> : -γ<sub>xy</sub> sont marquées", step7DescCCW: "Les intersections ε<sub>x</sub> : -γ<sub>xy</sub> et ε<sub>y</sub> : γ<sub>xy</sub> sont marquées (Direction Inverse)",
        step8Title: "Étape 5 :", step8Desc: "Les points d'intersection sont connectés pour dessiner le diamètre du cercle de Mohr.",
        step9Title: "Étape 6 :", step9Desc: "Le diamètre dessiné est tourné autour de son centre pour dessiner le cercle.",
        step10Title: "Étape 7 :", step10Desc: "Les points où le cercle intersecte l'axe horizontal (Contraintes Principales) ε<sub>1</sub> sont marqués.",
        step11Title: "Étape 7 (Cont.) :", step11Desc: "ε<sub>2</sub> est marqué.",
        step12Title: "Étape 8 :", step12Desc: "Les points supérieur (γ<sub>max</sub>) et inférieur (γ<sub>min</sub>) du cercle sont marqués.",
        step13Title: "Étape 9 :", step13Desc: "L'angle entre la diagonale dessinée et l'axe horizontal est égal à 2φ<sub>a</sub>.",
        footerTitle: "vetin : Analyse de Contrainte Plane",
        mitLicense: "Licence MIT",
        copyright: "Tous droits réservés",
        layout: "MISE EN PAGE",
        layoutDefault: "Par Défaut",
        layoutGrid: "Grille",
        layoutCompact: "Grille Compacte",
        appMenuView: "Thème", appMenuLayout: "Mise en Page", appMenuAbout: "À propos",
        themeLight: "Clair", themeDark: "Sombre", themeBlueprint: "Plan",
        layoutDefaultLabel: "Par défaut", layoutGridLabel: "Grille", layoutCompactLabel: "Compact",
        aboutTitle: "À propos", aboutTagline: "ANALYSE DE DÉFORMATION PLANE", aboutVersion: "v1.0 · Licence MIT",
        aboutContent: "Ce projet a été développé à des fins éducatives par <b>le Maître de Conférences Dr. Rasim Temür</b>, membre du Département de Génie Civil de l'<b>Université d'Istanbul-Cerrahpaşa</b>, dans le cadre de l'initiative <b>Vetin</b>. Le code source est distribué sur <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> sous la <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>licence MIT</a>.",
        aboutContent2: "Vous pouvez accéder aux autres solutions académiques de l'écosystème Vetin à", aboutClose: "OK"
    },

    my: {
        pageTitle: "vetin : ပြင်ညီ ဖိစီးမှု ခွဲခြမ်းစိတ်ဖြာခြင်း",
        inputsTitle: "ဖိစီးမှု အစိတ်အပိုင်းများ",
        resultsTitle: "အဓိက ဖိစီးမှုများ",
        maxShearTitle: "အများဆုံး ရိတ် ဖိစီးမှုများ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "မိုးစက်ဝိုင်း",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ပြောင်းလဲထားသော ဖိစီးမှုများ",
        notationLabel: "ပုံဆွဲ သင်္ကေတ :",
        notationStructural: "အင်ဂျင်နီယာ (တည်ဆောက်ပုံ)",
        notationMathematical: "သင်္ချာ (သီအိုရီ)",
        notationLiterature: "စာပေ",
        mohrCircle: "မိုးစက်ဝိုင်း",
        strainState: "ဒဏ် အခြေအနေ",
        principalStrains: "အဓိက ဒဏ်များ",
        shearStrains: "အများဆုံး ရိတ် ဒဏ်များ",
        transformedStrain: "ပြောင်းလဲထားသော ဒဏ်များ",
        zoomIn: "ချဲ့ပါ",
        zoomOut: "ချုံ့ပါ",
        resetView: "မျက်နှာပြင်နှင့် အံကိုက်ညှိပါ",
        toggleValuesMohr: "တန်ဖိုးများကို အဖွင့်/အပိတ်လုပ်ပါ",
        toggleValuesStrain: "တန်ဖိုးများကို အဖွင့်/အပိတ်လုပ်ပါ",
        toggleValuesPrincipal: "တန်ဖိုးများကို အဖွင့်/အပိတ်လုပ်ပါ",
        toggleValuesShear: "တန်ဖိုးများကို အဖွင့်/အပိတ်လုပ်ပါ",
        toggleValuesTransformed: "တနဖမက ပပ/ဝကပ",
        downloadSVG: "SVG ကို ဒေါင်းလုဒ်လုပ်ပါ",
        fullscreen: "မျက်နှာပြင်အပြည့်",
        stepDraw: "အဆင့်ဆင့်ဆွဲပါ",
        stopStepDraw: "ပုံဆွဲခြင်းကို အပြီးသတ်ပါ",
        step0Title: "မိုးစက်ဝိုင်း တည်ဆောက်ခြင်း", step0Desc: "စတင်ရန် 'အဆင့်ဆင့်ဆွဲပါ' (▶) ကို နှိပ်ပါ။",
        step1Title: "အဆင့် ၁ :", step1Desc: "အလျားလိုက် ဝင်ရိုးကို ဆွဲသည်",
        step2Title: "အဆင့် ၁ (ဆက်လက်ရန်) :", step2Desc: "ε<sub>x</sub> တန်ဖိုးကို အလျားလိုက် ဝင်ရိုးပေါ်တွင် မှတ်သားသည်",
        step3Title: "အဆင့် ၁ (ဆက်လက်ရန်) :", step3Desc: "ε<sub>y</sub> တန်ဖိုးကို အလျားလိုက် ဝင်ရိုးပေါ်တွင် မှတ်သားသည်",
        step4Title: "အဆင့် ၂ :", step4Desc: "ဒေါင်လိုက် ဝင်ရိုးကို ဆွဲသည်",
        step5Title: "အဆင့် ၃ :", step5Desc: "γ<sub>xy</sub> နှင့် -γ<sub>xy</sub> တန်ဖိုးများကို ဒေါင်လိုက် ဝင်ရိုးပေါ်တွင် မှတ်သားသည်",
        step6Title: "အဆင့် ၃ (ဆက်လက်ရန်) :", step6Desc: "အညွှန်းများကို ထားရှိသည်",
        step7Title: "အဆင့် ၄ :", step7Desc: "ε<sub>x</sub> : γ<sub>xy</sub> နှင့် ε<sub>y</sub> : -γ<sub>xy</sub> ဆုံချက်များကို မှတ်သားသည်", step7DescCCW: "ε<sub>x</sub> : -γ<sub>xy</sub> နှင့် ε<sub>y</sub> : γ<sub>xy</sub> ဆုံချက်များကို မှတ်သားသည် (ပြောင်းပြန် ဦးတည်ချက်)",
        step8Title: "အဆင့် ၅ :", step8Desc: "မိုးစက်ဝိုင်း၏ အချင်းကို ဆွဲရန် ဆုံချက်များကို ဆက်သွယ်သည်။",
        step9Title: "အဆင့် ၆ :", step9Desc: "ဆွဲထားသော အချင်းကို ဗဟိုချက်မှ လှည့်၍ စက်ဝိုင်းဆွဲသည်။",
        step10Title: "အဆင့် ၇ :", step10Desc: "စက်ဝိုင်းနှင့် အလျားလိုက် ဝင်ရိုး ဆုံသည့် အမှတ်များ (အဓိက ဖိစီးမှုများ) ε<sub>1</sub> ကို မှတ်သားသည်။",
        step11Title: "အဆင့် ၇ (ဆက်လက်ရန်) :", step11Desc: "ε<sub>2</sub> ကို မှတ်သားသည်။",
        step12Title: "အဆင့် ၈ :", step12Desc: "စက်ဝိုင်း၏ ထိပ်ဆုံး (γ<sub>max</sub>) နှင့် အောက်ခြေ (γ<sub>min</sub>) အမှတ်များကို မှတ်သားသည်။",
        step13Title: "အဆင့် ၉ :", step13Desc: "ဆွဲထားသော ထောင့်ဖြတ်မျဉ်းနှင့် အလျားလိုက် ဝင်ရိုးကြားရှိ ထောင့်သည် 2φ<sub>a</sub> နှင့် ညီမျှသည်။",
        footerTitle: "vetin : ပြင်ညီ ဖိစီးမှု ခွဲခြမ်းစိတ်ဖြာခြင်း",
        mitLicense: "MIT လိုင်စင်",
        copyright: "မူပိုင်ခွင့်များအားလုံး လက်ဝယ်ရှိသည်",
        layout: "အပြင်အဆင်",
        layoutDefault: "မူလအတိုင်း",
        layoutGrid: "ဇယားကွက်",
        layoutCompact: "ကျစ်လျစ်သော ဇယားကွက်",
        appMenuView: "အသွင်", appMenuLayout: "စာမျက်နှာ ပုံစံ", appMenuAbout: "အကြောင်း",
        themeLight: "အလင်း", themeDark: "အမှောင်", themeBlueprint: "ဘလူပရင့်",
        layoutDefaultLabel: "မူလ", layoutGridLabel: "ဂရစ်", layoutCompactLabel: "ကျစ်လျစ်သော",
        aboutTitle: "အကြောင်း", aboutTagline: "ပြင်ညီ ကျိုးဆက်မှု ဆန်းစစ်ခြင်း", aboutVersion: "v1.0 · MIT လိုင်စင်",
        aboutContent: "ဤပရောဂျက်ကို <b>Istanbul University-Cerrahpaşa</b> ၏ Civil Engineering ဌာနမှ <b>Assoc. Prof. Rasim Temür</b> မှ <b>Vetin</b> မူဝါဒ၏ တစ်စိတ်တစ်ပိုင်းအနေဖြင့် ပညာရေးရည်ရွယ်ချက်ဖြင့် ဖန်တီးထားပါသည်။ ကုဒ်ကို <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> တွင် <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT လိုင်စင်</a> ဖြင့် ဖြန့်ဝေသည်။",
        aboutContent2: "Vetin ၏ အခြားသော ပညာရေးဆိုင်ရာ ဖြေရှင်းချက်များ:", aboutClose: "OK"
    },

    th: {
        pageTitle: "vetin : การวิเคราะห์ความเค้นระนาบ",
        inputsTitle: "องค์ประกอบความเค้น",
        resultsTitle: "ความเค้นหลัก",
        maxShearTitle: "ความเค้นเฉือนสูงสุด",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "แสดง ε<sub>x'y'</sub>",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ความเค้นที่แปลงแล้ว",
        notationLabel: "สัญกรณ์การวาด :",
        notationStructural: "วิศวกรรม (โครงสร้าง)",
        notationMathematical: "คณิตศาสตร์ (ทฤษฎี)",
        notationLiterature: "วรรณกรรม",
        mohrCircle: "วงกลมโมห์ร",
        strainState: "สภาพความเค้น",
        principalStrains: "ความเค้นหลัก",
        shearStrains: "ความเค้นเฉือนสูงสุด",
        transformedStrain: "ความเค้นที่แปลงแล้ว",
        zoomIn: "ขยาย",
        zoomOut: "ย่อ",
        resetView: "พอดีหน้าจอ",
        toggleValuesMohr: "สลับแสดงค่า",
        toggleValuesStrain: "สลับแสดงค่า",
        toggleValuesPrincipal: "สลับแสดงค่า",
        toggleValuesShear: "สลับแสดงค่า",
        toggleValuesTransformed: "แสดง/ซอนคา",
        downloadSVG: "ดาวน์โหลด SVG",
        fullscreen: "เต็มหน้าจอ",
        stepDraw: "วาดทีละขั้นตอน",
        stopStepDraw: "วาดเสร็จสมบูรณ์",
        step0Title: "การสร้างวงกลมโมห์ร", step0Desc: "คลิก 'วาดทีละขั้นตอน' (▶) เพื่อเริ่ม",
        step1Title: "ขั้นตอนที่ 1 :", step1Desc: "วาดแกนนอน",
        step2Title: "ขั้นตอนที่ 1 (ต่อ) :", step2Desc: "ทำเครื่องหมายค่า ε<sub>x</sub> บนแกนนอน",
        step3Title: "ขั้นตอนที่ 1 (ต่อ) :", step3Desc: "ทำเครื่องหมายค่า ε<sub>y</sub> บนแกนนอน",
        step4Title: "ขั้นตอนที่ 2 :", step4Desc: "วาดแกนตั้ง",
        step5Title: "ขั้นตอนที่ 3 :", step5Desc: "ทำเครื่องหมายค่า γ<sub>xy</sub> และ -γ<sub>xy</sub> บนแกนตั้ง",
        step6Title: "ขั้นตอนที่ 3 (ต่อ) :", step6Desc: "วางป้ายกำกับ",
        step7Title: "ขั้นตอนที่ 4 :", step7Desc: "ทำเครื่องหมายจุดตัด ε<sub>x</sub> : γ<sub>xy</sub> และ ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "ทำเครื่องหมายจุดตัด ε<sub>x</sub> : -γ<sub>xy</sub> และ ε<sub>y</sub> : γ<sub>xy</sub> (ทิศทางกลับกัน)",
        step8Title: "ขั้นตอนที่ 5 :", step8Desc: "เชื่อมต่อจุดตัดเพื่อวาดเส้นผ่านศูนย์กลางของวงกลมโมห์ร",
        step9Title: "ขั้นตอนที่ 6 :", step9Desc: "หมุนเส้นผ่านศูนย์กลางที่วาดรอบจุดศูนย์กลางเพื่อวาดวงกลม",
        step10Title: "ขั้นตอนที่ 7 :", step10Desc: "ทำเครื่องหมายจุดที่วงกลมตัดแกนนอน (ความเค้นหลัก) ε<sub>1</sub>",
        step11Title: "ขั้นตอนที่ 7 (ต่อ) :", step11Desc: "ทำเครื่องหมาย ε<sub>2</sub>",
        step12Title: "ขั้นตอนที่ 8 :", step12Desc: "ทำเครื่องหมายจุดบนสุด (γ<sub>max</sub>) และล่างสุด (γ<sub>min</sub>) ของวงกลม",
        step13Title: "ขั้นตอนที่ 9 :", step13Desc: "มุมระหว่างเส้นทแยงมุมที่วาดกับแกนนอนเท่ากับ 2φ<sub>a</sub>",
        footerTitle: "vetin : การวิเคราะห์ความเค้นระนาบ",
        mitLicense: "สัญญาอนุญาต MIT",
        copyright: "สงวนลิขสิทธิ์",
        layout: "เค้าโครง",
        layoutDefault: "ค่าเริ่มต้น",
        layoutGrid: "ตาราง",
        layoutCompact: "ตารางแบบย่อ",
        appMenuView: "ธีม", appMenuLayout: "เลย์เอาต์หน้า", appMenuAbout: "เกี่ยวกับ",
        themeLight: "สว่าง", themeDark: "มืด", themeBlueprint: "บลูพริ้นท์",
        layoutDefaultLabel: "ค่าเริ่มต้น", layoutGridLabel: "กริด", layoutCompactLabel: "คอมแพค",
        aboutTitle: "เกี่ยวกับ", aboutTagline: "การวิเคราะห์ความเครียดระนาบ", aboutVersion: "v1.0 · สัญญาอนุญาต MIT",
        aboutContent: "โครงการนี้พัฒนาขึ้นเพื่อวัตถุประสงค์ทางการศึกษาโดย <b>รศ. ดร. Rasim Temür</b> สมาชิกคณะวิศวกรรมโยธา <b>มหาวิทยาลัยอิสตันบูล-Cerrahpaşa</b> ส่วนหนึ่งของโครงการ <b>Vetin</b> โค้ดต้นฉบับเผยแพร่บน <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> ภายใต้ <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>สัญญาอนุญาต MIT</a>",
        aboutContent2: "คุณสามารถเข้าถึงโซลูชันทางวิชาการอื่น ๆ ของระบบนิเวศ Vetin ได้ที่", aboutClose: "ตกลง"
    },

    uz: {
        pageTitle: "vetin : Tekis Deformatsiya Tahlili",
        inputsTitle: "DEFORMATSIYA TARKIBIY QISMLARI",
        resultsTitle: "ASOSIY DEFORMATSIYALAR",
        maxShearTitle: "MAKSIMAL SILJISH DEFORMATSIYALARI",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "Mohr Aylanasi",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "o'rt",
        transformTitle: "O'ZGARTIRILGAN DEFORMATSIYALAR",
        notationLabel: "Chizma yozuvi :",
        notationStructural: "Muhandislik (Strukturaviy)",
        notationMathematical: "Matematik (Nazariy)",
        notationLiterature: "Adabiyot",
        mohrCircle: "MOHR AYLANASI",
        strainState: "DEFORMATSIYA HOLATI",
        principalStrains: "ASOSIY DEFORMATSIYALAR",
        shearStrains: "MAKSIMAL SILJISH DEFORMATSIYALARI",
        transformedStrain: "O'ZGARTIRILGAN DEFORMATSIYALAR",
        zoomIn: "Yaqinlash",
        zoomOut: "Uzoqlash",
        resetView: "Ekranga Moslash",
        toggleValuesMohr: "Qiymatlarni Almashtirish",
        toggleValuesStrain: "Qiymatlarni Almashtirish",
        toggleValuesPrincipal: "Qiymatlarni Almashtirish",
        toggleValuesShear: "Qiymatlarni Almashtirish",
        toggleValuesTransformed: "Qiymatlarni Ko'rsatish/Yashirish",
        downloadSVG: "SVG Yuklab Olish",
        fullscreen: "To'liq Ekran",
        stepDraw: "Qadamma-qadam Chizish",
        stopStepDraw: "Chizishni Tugatish",
        step0Title: "Mohr Aylanasi Qurilishi", step0Desc: "Boshlash uchun 'Qadamma-qadam Chizish' (▶) tugmasini bosing.",
        step1Title: "Qadam 1 :", step1Desc: "Gorizontal o'q chiziladi",
        step2Title: "Qadam 1 (Davomi) :", step2Desc: "ε<sub>x</sub> qiymati gorizontal o'qda belgilanadi",
        step3Title: "Qadam 1 (Davomi) :", step3Desc: "ε<sub>y</sub> qiymati gorizontal o'qda belgilanadi",
        step4Title: "Qadam 2 :", step4Desc: "Vertikal o'q chiziladi",
        step5Title: "Qadam 3 :", step5Desc: "γ<sub>xy</sub> va -γ<sub>xy</sub> qiymatlari vertikal o'qda belgilanadi",
        step6Title: "Qadam 3 (Davomi) :", step6Desc: "Belgilar qo'yiladi",
        step7Title: "Qadam 4 :", step7Desc: "ε<sub>x</sub> : γ<sub>xy</sub> va ε<sub>y</sub> : -γ<sub>xy</sub> kesishmalar belgilanadi", step7DescCCW: "ε<sub>x</sub> : -γ<sub>xy</sub> va ε<sub>y</sub> : γ<sub>xy</sub> kesishmalar belgilanadi (Teskari Yo'nalish)",
        step8Title: "Qadam 5 :", step8Desc: "Kesishma nuqtalari Mohr aylanasining diametrini chizish uchun ulanadi.",
        step9Title: "Qadam 6 :", step9Desc: "Chizilgan diametr markazi atrofida aylantirilib, aylana chiziladi.",
        step10Title: "Qadam 7 :", step10Desc: "Aylana gorizontal o'qni kesib o'tadigan nuqtalar (Asosiy Deformatsiyalar) ε<sub>1</sub> belgilanadi.",
        step11Title: "Qadam 7 (Davomi) :", step11Desc: "ε<sub>2</sub> belgilanadi.",
        step12Title: "Qadam 8 :", step12Desc: "Aylananing yuqori (γ<sub>max</sub>) va pastki (γ<sub>min</sub>) nuqtalari belgilanadi.",
        step13Title: "Qadam 9 :", step13Desc: "Chizilgan diagonal va gorizontal o'q orasidagi burchak 2φ<sub>a</sub> ga teng.",
        footerTitle: "vetin : Tekis Deformatsiya Tahlili",
        mitLicense: "MIT litsenziyasi",
        copyright: "Barcha huquqlar himoyalangan",
        layout: "TUZILISH",
        layoutDefault: "Standart",
        layoutGrid: "To'r",
        layoutCompact: "Ixcham To'r",
        appMenuView: "Ko'rinish", appMenuLayout: "Sahifa Joylashuvi", appMenuAbout: "Haqida",
        themeLight: "Yorqin", themeDark: "Qorong'u", themeBlueprint: "Chizma",
        layoutDefaultLabel: "Standart", layoutGridLabel: "Panjara", layoutCompactLabel: "Ixcham",
        aboutTitle: "Haqida", aboutTagline: "TEKIS DEFORMATSIYA TAHLILI", aboutVersion: "v1.0 · MIT Litsenziyasi",
        aboutContent: "Bu loyiha <b>Istanbul Universiteti-Cerrahpaşa</b> Qurilish Muhandisligi Kafedrasi o'qituvchisi <b>dotsent Rasim Temür</b> tomonidan <b>Vetin</b> tashabbusi doirasida ta'lim maqsadlarida ishlab chiqilgan. Manba kodi <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>da <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT litsenziyasi</a> ostida tarqatiladi.",
        aboutContent2: "Vetin ekotizimining boshqa akademik yechimlariga:", aboutClose: "OK"
    },

    dz: {
        pageTitle: "vetin : ངོས་སྙོམས་གནོན་ཤུགས་དཔྱད་ཞིབ།",
        inputsTitle: "གནོན་ཤུགས་ཀྱི་ཡན་ལག",
        resultsTitle: "གཙོ་བོའི་གནོན་ཤུགས།",
        maxShearTitle: "གཤགས་ཤུགས་མཐོ་ཤོས།",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "མོ་ཧར་གྱི་སྒོར་ཐིག",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "འགྱུར་བའི་གནོན་ཤུགས།",
        notationLabel: "པར་རིས་ མཚོན་རྟགས་ :",
        notationStructural: "བཟོ་བཀོད་ (Structural)",
        notationMathematical: "རྩིས་རིག་ (Theoretical)",
        notationLiterature: "ཡིག་ཆ།",
        mohrCircle: "མོ་ཧར་གྱི་སྒོར་ཐིག",
        strainState: "འགྱུར་བའི་གནས་སྟངས།",
        principalStrains: "གཙོ་བོའི་འགྱུར་བ།",
        shearStrains: "གཤགས་ཤུགས་འགྱུར་བ་མཐོ་ཤོས།",
        transformedStrain: "འགྱུར་བའི་འགྱུར་བ།",
        zoomIn: "ཆེ་རུ་གཏང་།",
        zoomOut: "ཆུང་དུ་གཏང་།",
        resetView: "གསལ་གཞི་དང་མཐུན་པ།",
        toggleValuesMohr: "གནས་གོང་སོར་བཞག",
        toggleValuesStrain: "གནས་གོང་སོར་བཞག",
        toggleValuesPrincipal: "གནས་གོང་སོར་བཞག",
        toggleValuesShear: "གནས་གོང་སོར་བཞག",
        toggleValuesTransformed: "གནསགངསན/སས",
        downloadSVG: "SVG ཕབ་ལེན།",
        fullscreen: "གསལ་གཞི་གང་བ།",
        stepDraw: "རིམ་པ་བཞིན་འབྲི།",
        stopStepDraw: "འབྲི་ནི་མཇུག་བསྡུ།",
        step0Title: "མོ་ཧར་གྱི་སྒོར་ཐིག་འབྲི་ཐབས།", step0Desc: "འགོ་བཙུགས་ནི་གི་དོན་ལུ་ 'རིམ་པ་བཞིན་འབྲི།' (▶) ལུ་ཨེབ་གཏང་།",
        step1Title: "རིམ་པ་ ༡ :", step1Desc: "ཐིག་གོ་རི་གོར་འབྲི་ནི།",
        step2Title: "རིམ་པ་ ༡ (Cont.) :", step2Desc: "ε<sub>x</sub> གི་གནས་གོང་ཐིག་གུ་བཙུགས་ནི།",
        step3Title: "རིམ་པ་ ༡ (Cont.) :", step3Desc: "ε<sub>y</sub> གི་གནས་གོང་ཐིག་གུ་བཙུགས་ནི།",
        step4Title: "རིམ་པ་ ༢ :", step4Desc: "ཐིག་ཡར་མར་འབྲི་ནི།",
        step5Title: "རིམ་པ་ ༣ :", step5Desc: "γ<sub>xy</sub> དང་ -γ<sub>xy</sub> གི་གནས་གོང་ཐིག་གུ་བཙུགས་ནི།",
        step6Title: "རིམ་པ་ ༣ (Cont.) :", step6Desc: "ཡིག་རྟགས་བཙུགས་ནི།",
        step7Title: "རིམ་པ་ ༤ :", step7Desc: "ε<sub>x</sub> : γ<sub>xy</sub> དང་ ε<sub>y</sub> : -γ<sub>xy</sub> གི་སྦྲེལ་ཚད་བཙུགས་ནི།", step7DescCCW: "ε<sub>x</sub> : -γ<sub>xy</sub> དང་ ε<sub>y</sub> : γ<sub>xy</sub> གི་སྦྲེལ་ཚད་བཙུགས་ནི། (Reverse Direction)",
        step8Title: "རིམ་པ་ ༥ :", step8Desc: "སྦྲེལ་ཚད་ཚུ་མཐུད་དེ་མོ་ཧར་གྱི་སྒོར་ཐིག་གི་ཚངས་ཐིག་འབྲི་ནི།",
        step9Title: "རིམ་པ་ ༦ :", step9Desc: "ཚངས་ཐིག་དེ་ལྟེ་བ་བསྐོར་ཏེ་སྒོར་ཐིག་འབྲི་ནི།",
        step10Title: "རིམ་པ་ ༧ :", step10Desc: "སྒོར་ཐིག་དང་ཐིག་གོ་རི་གོར་སྦྲེལ་ས་ (Principal Straines) ε<sub>1</sub> བཙུགས་ནི།",
        step11Title: "རིམ་པ་ ༧ (Cont.) :", step11Desc: "ε<sub>2</sub> བཙུགས་ནི།",
        step12Title: "རིམ་པ་ ༨ :", step12Desc: "སྒོར་ཐིག་གི་མཐོ་ཤོས་ (γ<sub>max</sub>) དང་ དམའ་ཤོས་ (γ<sub>min</sub>) བཙུགས་ནི།",
        step13Title: "རིམ་པ་ ༩ :", step13Desc: "ཟུར་ཐིག་དང་ཐིག་གོ་རི་གོར་བར་གྱི་ཟུར་ཚད་དེ་ 2φ<sub>a</sub> དང་འདྲ།",
        footerTitle: "vetin : ངོས་སྙོམས་གནོན་ཤུགས་དཔྱད་ཞིབ།",
        mitLicense: "MIT ཆོག་ཐམ་",
        copyright: "ཐོབ་ཐང་ཆ་ཚང་ཡོད།",
        layout: "བཀོད་པ།",
        layoutDefault: "སོར་བཞག",
        layoutGrid: "དྲ་མིག",
        layoutCompact: "དྲ་མིག་ཆུང་བ།",
        appMenuView: "མདོག་ཆས།", appMenuLayout: "ཤོག་ལེབ་བཀོད་སྒྲིག", appMenuAbout: "སྐོར།",
        themeLight: "གཡལ།", themeDark: "མུན་ཐག", themeBlueprint: "ཆ་སྤྲོད་རིས།",
        layoutDefaultLabel: "སྔོན་ལྡན།", layoutGridLabel: "གྲིད།", layoutCompactLabel: "བསྡུས་མ།",
        aboutTitle: "སྐོར།", aboutTagline: "མཐའ་མཉམ་སྐྱག་སྙོམས་དབྱེ་ཞིབ།", aboutVersion: "v1.0 · MIT ཆོག་མཆན།",
        aboutContent: "འདི་ལས་རིམ་ <b>Istanbul University-Cerrahpaşa</b> ལས་ <b>Assoc. Prof. Rasim Temür</b> གིས་ <b>Vetin</b> ལས་རིམ་ཁྲོད་ སློབ་སྦྱོང་གི་དོན་ལུ་གཟུགས་ཐབས་བྱིན་ཡོདཔ། Source code <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> ལུ་ <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT ཆོག་མཆན།</a> འོག་ཐོན་སྤྲོད།",
        aboutContent2: "Vetin གི་ སློབ་གསོའི་སྒྲིལ་ལམ་གཞན་པ་ཚུ་:", aboutClose: "OK"
    },

    tg: {
        pageTitle: "vetin : Таҳлили деформатсияи ҳамвор",
        inputsTitle: "ҚИСМҲОИ ДЕФОРМАТСИЯ",
        resultsTitle: "ДЕФОРМАТСИЯҲОИ АСОСӢ",
        maxShearTitle: "ДЕФОРМАТСИЯИ БУРИШИ МАКСИМАЛӢ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<sub>p1</sub>",
        phiA2: "φ<sub>p2</sub>",
        showStrainXiYi: "Давраи Моҳр",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ДЕФОРМАТСИЯҲОИ ТАБДИЛЁФТА",
        notationLabel: "Нишондиҳии расм :",
        notationStructural: "Муҳандисӣ (Сохторӣ)",
        notationMathematical: "Математикӣ (Назариявӣ)",
        notationLiterature: "Адабиёт",
        mohrCircle: "ДАВРАИ МОҲР",
        strainState: "ҲОЛАТИ ДЕФОРМАТСИЯ",
        principalStrains: "ДЕФОРМАТСИЯҲОИ АСОСӢ",
        shearStrains: "ДЕФОРМАТСИЯИ БУРИШИ МАКСИМАЛӢ",
        transformedStrain: "ДЕФОРМАТСИЯҲОИ ТАБДИЛЁФТА",
        zoomIn: "Калон кардан",
        zoomOut: "Хурд кардан",
        resetView: "Мувофиқ кардан ба экран",
        toggleValuesMohr: "Иваз кардани қиматҳо",
        toggleValuesStrain: "Иваз кардани қиматҳо",
        toggleValuesPrincipal: "Иваз кардани қиматҳо",
        toggleValuesShear: "Иваз кардани қиматҳо",
        toggleValuesTransformed: "Нишон додан/Пинҳон кардани қиматҳо",
        downloadSVG: "Боргирии SVG",
        fullscreen: "Экрани пурра",
        stepDraw: "Қадам ба қадам кашидан",
        stopStepDraw: "Анҷоми кашидан",
        step0Title: "Сохтмони давраи Моҳр", step0Desc: "Барои оғоз 'Қадам ба қадам кашидан' (▶) -ро клик кунед.",
        step1Title: "Қадами 1 :", step1Desc: "Меҳвари уфуқӣ кашида мешавад",
        step2Title: "Қадами 1 (Идома) :", step2Desc: "Қимати ε<sub>x</sub> дар меҳвари уфуқӣ қайд карда мешавад",
        step3Title: "Қадами 1 (Идома) :", step3Desc: "Қимати ε<sub>y</sub> дар меҳвари уфуқӣ қайд карда мешавад",
        step4Title: "Қадами 2 :", step4Desc: "Меҳвари амудӣ кашида мешавад",
        step5Title: "Қадами 3 :", step5Desc: "Қиматҳои γ<sub>xy</sub> ва -γ<sub>xy</sub> дар меҳвари амудӣ қайд карда мешаванд",
        step6Title: "Қадами 3 (Идома) :", step6Desc: "Нишонаҳо гузошта мешаванд",
        step7Title: "Қадами 4 :", step7Desc: "Кесишҳои ε<sub>x</sub> : γ<sub>xy</sub> ва ε<sub>y</sub> : -γ<sub>xy</sub> қайд карда мешаванд", step7DescCCW: "Кесишҳои ε<sub>x</sub> : -γ<sub>xy</sub> ва ε<sub>y</sub> : γ<sub>xy</sub> қайд карда мешаванд (Самти баръакс)",
        step8Title: "Қадами 5 :", step8Desc: "Нуқтаҳои кесиш барои кашидани диаметри давраи Моҳр пайваст карда мешаванд.",
        step9Title: "Қадами 6 :", step9Desc: "Диаметри кашидашуда дар атрофи маркази худ барои кашидани давра чарх зада мешавад.",
        step10Title: "Қадами 7 :", step10Desc: "Нуқтаҳое, ки давра меҳвари уфуқиро мебурад (Шиддатҳои Асосӣ) ε<sub>1</sub> қайд карда мешаванд.",
        step11Title: "Қадами 7 (Идома) :", step11Desc: "ε<sub>2</sub> қайд карда мешавад.",
        step12Title: "Қадами 8 :", step12Desc: "Нуқтаҳои боло (γ<sub>max</sub>) ва поён (γ<sub>min</sub>) -и давра қайд карда мешаванд.",
        step13Title: "Қадами 9 :", step13Desc: "Кунҷи байни диагонали кашидашуда ва меҳвари уфуқӣ ба 2φ<sub>a</sub> баробар аст.",
        footerTitle: "vetin : Таҳлили шиддати ҳамвор",
        mitLicense: "Иҷозатномаи MIT",
        copyright: "Ҳама ҳуқуқҳо ҳифз шудаанд",
        layout: "ТАРҲ",
        layoutDefault: "Пешфарз",
        layoutGrid: "Шабака",
        layoutCompact: "Шабакаи фишурда",
        appMenuView: "Зоҳир", appMenuLayout: "Тартиби Саҳифа", appMenuAbout: "Дар бораи",
        themeLight: "Равшан", themeDark: "Торик", themeBlueprint: "Нақша",
        layoutDefaultLabel: "Пешфарз", layoutGridLabel: "Торча", layoutCompactLabel: "Компактӣ",
        aboutTitle: "Дар бораи", aboutTagline: "ТАҲЛИЛИ ДЕФОРМАТСИЯИ ҲАМВОР", aboutVersion: "v1.0 · Иҷозатномаи MIT",
        aboutContent: "Ин лоиҳа аз ҷониби <b>доц. д-р Расим Темюр</b>, аъзои кафедраи муҳандисии гражданӣ <b>Университети Истанбул-Cerrahpaşa</b>, дар доираи <b>Vetin</b> барои мақсадҳои таълим таҳия шудааст. Рамзи сарчашма дар <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> зери <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>иҷозатномаи MIT</a> паҳн карда мешавад.",
        aboutContent2: "Дигар ҳалли илмии Vetin-ро метавонед дар ин ҷо ёбед:", aboutClose: "Хуб"
    },

    ky: {
        pageTitle: "vetin : Төрткүл деформация анализи",
        inputsTitle: "ДЕФОРМАЦИЯ КОМПОНЕНТТЕРИ",
        resultsTitle: "НЕГИЗГИ ДЕФОРМАЦИЯЛАР",
        maxShearTitle: "МАКСИМАЛДУУ ЖЫЛУУ ДЕФОРМАЦИЯЛАРЫ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Мор тегереги",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ӨЗГӨРТҮЛГӨН ДЕФОРМАЦИЯЛАР",
        notationLabel: "Сүрөт белгилөө :",
        notationStructural: "Инженердик (Структуралык)",
        notationMathematical: "Математикалык (Теориялык)",
        notationLiterature: "Адабият",
        mohrCircle: "МОР ТЕГЕРЕГИ",
        strainState: "ДЕФОРМАЦИЯ АБАЛЫ",
        principalStrains: "НЕГИЗГИ ДЕФОРМАЦИЯЛАР",
        shearStrains: "МАКСИМАЛДУУ ЖЫЛУУ ДЕФОРМАЦИЯСЫ",
        transformedStrain: "ӨЗГӨРТҮЛГӨН ДЕФОРМАЦИЯЛАР",
        zoomIn: "Чоңойтуу",
        zoomOut: "Кичирейтүү",
        resetView: "Экранга Тууралоо",
        toggleValuesMohr: "Маанилерди Кошуу/Өчүрүү",
        toggleValuesStrain: "Маанилерди Кошуу/Өчүрүү",
        toggleValuesPrincipal: "Маанилерди Кошуу/Өчүрүү",
        toggleValuesShear: "Маанилерди Кошуу/Өчүрүү",
        toggleValuesTransformed: "Маанилерди Көрсөтүү/Жашыруу",
        downloadSVG: "SVG Жүктүү",
        fullscreen: "Толук Экран",
        stepDraw: "Кадам-кадам менен Тартуу",
        stopStepDraw: "Тартууну Аяктоо",
        step0Title: "Мор Тегерегин Куруу", step0Desc: "Баштоо үчүн 'Кадам-кадам менен Тартуу' (▶) баскычын басыңыз.",
        step1Title: "Кадам 1 :", step1Desc: "Горизонталдуу ок тартылат",
        step2Title: "Кадам 1 (Улан.) :", step2Desc: "ε<sub>x</sub> мааниси горизонталдуу окто белгиленет",
        step3Title: "Кадам 1 (Улан.) :", step3Desc: "ε<sub>y</sub> мааниси горизонталдуу окто белгиленет",
        step4Title: "Кадам 2 :", step4Desc: "Вертикалдуу ок тартылат",
        step5Title: "Кадам 3 :", step5Desc: "γ<sub>xy</sub> жана -γ<sub>xy</sub> маанилери вертикалдуу окто белгиленет",
        step6Title: "Кадам 3 (Улан.) :", step6Desc: "Белгилер коюлат",
        step7Title: "Кадам 4 :", step7Desc: "ε<sub>x</sub> : γ<sub>xy</sub> жана ε<sub>y</sub> : -γ<sub>xy</sub> кесилиштери белгиленет", step7DescCCW: "ε<sub>x</sub> : -γ<sub>xy</sub> жана ε<sub>y</sub> : γ<sub>xy</sub> кесилиштери белгиленет (Тескери Багыт)",
        step8Title: "Кадам 5 :", step8Desc: "Кесилиш чекиттери Мор тегерегинин диаметрин тартуу үчүн бириктирилет.",
        step9Title: "Кадам 6 :", step9Desc: "Тартылган диаметр борборунун айланасында айлантылып, тегерек тартылат.",
        step10Title: "Кадам 7 :", step10Desc: "Тегеректин горизонталдуу ок менен кесилишкен жерлери (Негизги Деформациялар) ε<sub>1</sub> белгиленет.",
        step11Title: "Кадам 7 (Улан.) :", step11Desc: "ε<sub>2</sub> белгиленет.",
        step12Title: "Кадам 8 :", step12Desc: "Тегеректин эң жогорку (γ<sub>max</sub>) жана эң төмөнкү (γ<sub>min</sub>) чекиттери белгиленет.",
        step13Title: "Кадам 9 :", step13Desc: "Тартылган диагоналдын горизонталдуу ок менен жасаган бурчу 2φ<sub>a</sub> га барабар.",
        footerTitle: "vetin : Төрткүл деформация анализи",
        mitLicense: "MIT лицензиясы",
        copyright: "Бардык укуктар корголгон",
        layout: "ЖАЙГАШТЫРУУ",
        layoutDefault: "Демейки",
        layoutGrid: "Тор",
        layoutCompact: "Тыгыз Тор",
        appMenuView: "Тема", appMenuLayout: "Барак Жайгашуусу", appMenuAbout: "Жөнүндө",
        themeLight: "Жарык", themeDark: "Карангы", themeBlueprint: "Чертеж",
        layoutDefaultLabel: "Демейки", layoutGridLabel: "Тор", layoutCompactLabel: "Компакт",
        aboutTitle: "Жөнүндө", aboutTagline: "ТЕГИЗДИК ДЕФОРМАТСИЯНЫН ТАЛДООСУ", aboutVersion: "v1.0 · MIT Лицензиясы",
        aboutContent: "Бул долбоор <b>Стамбул университети-Cerrahpaşa</b> Курулуш инженериясы кафедрасынын мүчөсү <b>доц. д-р Расим Темюр</b> тарабынан <b>Vetin</b> демилгесинин алкагында билим берүү максатында иштелип чыкты. Баштапкы коду <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>та <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT лицензиясы</a> астында таратылат.",
        aboutContent2: "Vetin экосистемасынын башка академиялык чечимдерине кире аласыз:", aboutClose: "OK"
    },

    bg: {
        pageTitle: "vetin : Анализ на равнинна деформация",
        inputsTitle: "КОМПОНЕНТИ НА ДЕФОРМАЦИЯТА",
        resultsTitle: "ГЛАВНИ ДЕФОРМАЦИИ",
        maxShearTitle: "МАКСИМАЛНИ ТАНГЕНЦИАЛНИ ДЕФОРМАЦИИ",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Кръг на Мор",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ТРАНСФОРМИРАНИ ДЕФОРМАЦИИ",
        notationLabel: "Чертожна нотация :",
        notationStructural: "Инженерна (Структурна)",
        notationMathematical: "Математическа (Теоретична)",
        notationLiterature: "Литература",
        mohrCircle: "КРЪГ НА МОР",
        strainState: "СЪСТОЯНИЕ НА ДЕФОРМАЦИЯ",
        principalStrains: "ГЛАВНИ ДЕФОРМАЦИИ",
        shearStrains: "МАКСИМАЛНИ ТАНГЕНЦИАЛНИ ДЕФОРМАЦИИ",
        transformedStrain: "ТРАНСФОРМИРАНИ ДЕФОРМАЦИИ",
        zoomIn: "Увеличаване",
        zoomOut: "Намаляване",
        resetView: "Побиране в екрана",
        toggleValuesMohr: "Превключване на стойности",
        toggleValuesStrain: "Превключване на стойности",
        toggleValuesPrincipal: "Превключване на стойности",
        toggleValuesShear: "Превключване на стойности",
        toggleValuesTransformed: "Покажи/Скрий стойностите",
        downloadSVG: "Изтегляне на SVG",
        fullscreen: "Пълен екран",
        stepDraw: "Чертане стъпка по стъпка",
        stopStepDraw: "Завършване на чертежа",
        step0Title: "Построяване на кръга на Мор", step0Desc: "Кликнете върху 'Чертане стъпка по стъпка' (▶), за да започнете.",
        step1Title: "Стъпка 1 :", step1Desc: "Чертае се хоризонталната ос",
        step2Title: "Стъпка 1 (Продълж.) :", step2Desc: "Стойността на ε<sub>x</sub> се маркира върху хоризонталната ос",
        step3Title: "Стъпка 1 (Продълж.) :", step3Desc: "Стойността на ε<sub>y</sub> се маркира върху хоризонталната ос",
        step4Title: "Стъпка 2 :", step4Desc: "Чертае се вертикалната ос",
        step5Title: "Стъпка 3 :", step5Desc: "Стойностите на γ<sub>xy</sub> и -γ<sub>xy</sub> се маркират върху вертикалната ос",
        step6Title: "Стъпка 3 (Продълж.) :", step6Desc: "Поставят се етикети",
        step7Title: "Стъпка 4 :", step7Desc: "Маркират се пресечните точки ε<sub>x</sub> : γ<sub>xy</sub> и ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "Маркират се пресечните точки ε<sub>x</sub> : -γ<sub>xy</sub> и ε<sub>y</sub> : γ<sub>xy</sub> (Обратна посока)",
        step8Title: "Стъпка 5 :", step8Desc: "Пресечните точки се свързват, за да се начертае диаметърът на кръга на Мор.",
        step9Title: "Стъпка 6 :", step9Desc: "Начертаният диаметър се завърта около центъра си, за да се начертае кръгът.",
        step10Title: "Стъпка 7 :", step10Desc: "Маркират се точките, където кръгът пресича хоризонталната ос (Главни деформации) ε<sub>1</sub>.",
        step11Title: "Стъпка 7 (Продълж.) :", step11Desc: "Маркира се ε<sub>2</sub>.",
        step12Title: "Стъпка 8 :", step12Desc: "Маркират се най-горната (γ<sub>max</sub>) и най-долната (γ<sub>min</sub>) точка на кръга.",
        step13Title: "Стъпка 9 :", step13Desc: "Ъгълът между начертания диагонал и хоризонталната ос е равен на 2φ<sub>a</sub>.",
        footerTitle: "vetin : Анализ на равнинна деформация",
        mitLicense: "MIT лиценз",
        copyright: "Всички права запазени",
        layout: "ОФОРМЛЕНИЕ",
        layoutDefault: "По подразбиране",
        layoutGrid: "Мрежа",
        layoutCompact: "Компактна мрежа",
        appMenuView: "Тема", appMenuLayout: "Оформление на Страница", appMenuAbout: "За",
        themeLight: "Светла", themeDark: "Тъмна", themeBlueprint: "Чертеж",
        layoutDefaultLabel: "По подразбиране", layoutGridLabel: "Решетка", layoutCompactLabel: "Компактен",
        aboutTitle: "За", aboutTagline: "АНАЛИЗ НА РАВНИННА ДЕФОРМАЦИЯ", aboutVersion: "v1.0 · MIT Лиценз",
        aboutContent: "Този проект е разработен за образователни цели от <b>доц. д-р Расим Темюр</b>, член на катедрата по гражданско инженерство на <b>Истанбулски университет-Cerrahpaşa</b>, като част от инициативата <b>Vetin</b>. Изходният код е разпространен в <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> под <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>лиценза MIT</a>.",
        aboutContent2: "Можете да получите достъп до другите академични решения на екосистемата Vetin на", aboutClose: "OK"
    },

    he: {
        pageTitle: "vetin : ניתוח מאמץ מישורי",
        inputsTitle: "רכיבי מאמץ",
        resultsTitle: "מאמצים ראשיים",
        maxShearTitle: "מאמצי גזירה מקסימליים",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "מעגל מוהר",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "מאמצים מותרים",
        notationLabel: "סימון הציור :",
        notationStructural: "הנדסה (מבנית)",
        notationMathematical: "מתמטיקה (תיאורטית)",
        notationLiterature: "ספרות",
        mohrCircle: "מעגל מוהר",
        strainState: "מצב מעוות",
        principalStrains: "מעוותים ראשיים",
        shearStrains: "מעוות גזירה מקסימלי",
        transformedStrain: "מעוותים לאחר טרנספורמציה",
        zoomIn: "הגדל",
        zoomOut: "הקטן",
        resetView: "התאם למסך",
        toggleValuesMohr: "החלף תצוגת ערכים",
        toggleValuesStrain: "החלף תצוגת ערכים",
        toggleValuesPrincipal: "החלף תצוגת ערכים",
        toggleValuesShear: "החלף תצוגת ערכים",
        toggleValuesTransformed: "הצג/הסתר ערכים",
        downloadSVG: "הורד SVG",
        fullscreen: "מסך מלא",
        stepDraw: "ציור צעד-אחר-צעד",
        stopStepDraw: "סיים ציור",
        step0Title: "בניית מעגל מוהר", step0Desc: "לחץ על 'ציור צעד-אחר-צעד' (▶) כדי להתחיל.",
        step1Title: "צעד 1 :", step1Desc: "מצויר הציר האופקי",
        step2Title: "צעד 1 (המשך) :", step2Desc: "ערך ε<sub>x</sub> מסומן על הציר האופקי",
        step3Title: "צעד 1 (המשך) :", step3Desc: "ערך ε<sub>y</sub> מסומן על הציר האופקי",
        step4Title: "צעד 2 :", step4Desc: "מצויר הציר האנכי",
        step5Title: "צעד 3 :", step5Desc: "ערכי γ<sub>xy</sub> ו- -γ<sub>xy</sub> מסומנים על הציר האנכי",
        step6Title: "צעד 3 (המשך) :", step6Desc: "תוויות מוקמות",
        step7Title: "צעד 4 :", step7Desc: "החיתוכים ε<sub>x</sub> : γ<sub>xy</sub> ו- ε<sub>y</sub> : -γ<sub>xy</sub> מסומנים", step7DescCCW: "החיתוכים ε<sub>x</sub> : -γ<sub>xy</sub> ו- ε<sub>y</sub> : γ<sub>xy</sub> מסומנים (כיוון הפוך)",
        step8Title: "צעד 5 :", step8Desc: "נקודות החיתוך מחוברות לציור קוטר מעגל מוהר.",
        step9Title: "צעד 6 :", step9Desc: "הקוטר המצויר מסובב סביב מרכזו לציור המעגל.",
        step10Title: "צעד 7 :", step10Desc: "נקודות חיתוך המעגל עם הציר האופקי (מאמצים ראשיים) ε<sub>1</sub> מסומנות.",
        step11Title: "צעד 7 (המשך) :", step11Desc: "ε<sub>2</sub> מסומן.",
        step12Title: "צעד 8 :", step12Desc: "הנקודות העליונה (γ<sub>max</sub>) והתחתונה (γ<sub>min</sub>) של המעגל מסומנות.",
        step13Title: "צעד 9 :", step13Desc: "הזווית בין האלכסון המצויר לציר האופקי שווה ל- 2φ<sub>a</sub>.",
        footerTitle: "vetin : ניתוח מאמץ מישורי",
        mitLicense: "רישיון MIT",
        copyright: "כל הזכויות שמורות",
        layout: "פריסה",
        layoutDefault: "ברירת מחדל",
        layoutGrid: "רשת",
        layoutCompact: "רשת קומפקטית",
        appMenuView: "ערכת נושא", appMenuLayout: "פריסת עמוד", appMenuAbout: "אודות",
        themeLight: "בהיר", themeDark: "כהה", themeBlueprint: "תכנית",
        layoutDefaultLabel: "ברירת מחדל", layoutGridLabel: "רשת", layoutCompactLabel: "קומפקטי",
        aboutTitle: "אודות", aboutTagline: "ניתוח עיוות מישורי", aboutVersion: "v1.0 · רישיון MIT",
        aboutContent: "פרויקט זה פותח למטרות חינוכיות על ידי <b>דוק. Rasim Temür</b>, חבר סגל החוג להנדסה אזרחית, <b>אוניברסיטת איסטנבול-Cerrahpaşa</b>, כחלק מיוזמת <b>Vetin</b>. קוד המקור מופץ ב-<a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> תחת <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>רישיון MIT</a>.",
        aboutContent2: "ניתן לגשת לפתרונות אקדמיים אחרים של מערכת Vetin בכתובת", aboutClose: "אישור"
    },

    sl: {
        pageTitle: "vetin : Analiza ravninske napetosti",
        inputsTitle: "KOMPONENTE NAPETOSTI",
        resultsTitle: "GLAVNE NAPETOSTI",
        maxShearTitle: "MAKSIMALNE STRIŽNE NAPETOSTI",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Mohrov krog",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "TRANSFORMIRANE NAPETOSTI",
        notationLabel: "Notacija risbe :",
        notationStructural: "Inženirstvo (Strukturno)",
        notationMathematical: "Matematika (Teoretično)",
        notationLiterature: "Literatura",
        mohrCircle: "MOHROV KROG",
        strainState: "STANJE DEFORMACIJE",
        principalStrains: "GLAVNE DEFORMACIJE",
        shearStrains: "MAKSIMALNE STRIŽNE DEFORMACIJE",
        transformedStrain: "TRANSFORMIRANE DEFORMACIJE",
        zoomIn: "Povečaj",
        zoomOut: "Zmanjšaj",
        resetView: "Prilagodi zaslonu",
        toggleValuesMohr: "Preklopi vrednosti",
        toggleValuesStrain: "Preklopi vrednosti",
        toggleValuesPrincipal: "Preklopi vrednosti",
        toggleValuesShear: "Preklopi vrednosti",
        toggleValuesTransformed: "Prikaži/Skrij vrednosti",
        downloadSVG: "Prenesi SVG",
        fullscreen: "Celozaslonski način",
        stepDraw: "Risanje po korakih",
        stopStepDraw: "Dokončaj risanje",
        step0Title: "Konstrukcija Mohrovega kroga", step0Desc: "Kliknite 'Risanje po korakih' (▶) za začetek.",
        step1Title: "Korak 1 :", step1Desc: "Nariše se vodoravna os",
        step2Title: "Korak 1 (Nadalj.) :", step2Desc: "Vrednost ε<sub>x</sub> se označi na vodoravni osi",
        step3Title: "Korak 1 (Nadalj.) :", step3Desc: "Vrednost ε<sub>y</sub> se označi na vodoravni osi",
        step4Title: "Korak 2 :", step4Desc: "Nariše se navpična os",
        step5Title: "Korak 3 :", step5Desc: "Vrednosti γ<sub>xy</sub> in -γ<sub>xy</sub> se označijo na navpični osi",
        step6Title: "Korak 3 (Nadalj.) :", step6Desc: "Oznake se namestijo",
        step7Title: "Korak 4 :", step7Desc: "Označijo se presečišča ε<sub>x</sub> : γ<sub>xy</sub> in ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "Označijo se presečišča ε<sub>x</sub> : -γ<sub>xy</sub> in ε<sub>y</sub> : γ<sub>xy</sub> (Obratna smer)",
        step8Title: "Korak 5 :", step8Desc: "Presečišča se povežejo za risanje premera Mohrovega kroga.",
        step9Title: "Korak 6 :", step9Desc: "Narisan premer se zavrti okoli svojega središča za risanje kroga.",
        step10Title: "Korak 7 :", step10Desc: "Označijo se točke, kjer krog seka vodoravno os (Glavne deformacije) ε<sub>1</sub>.",
        step11Title: "Korak 7 (Nadalj.) :", step11Desc: "Označi se ε<sub>2</sub>.",
        step12Title: "Korak 8 :", step12Desc: "Označita se zgornja (γ<sub>max</sub>) in spodnja (γ<sub>min</sub>) točka kroga.",
        step13Title: "Korak 9 :", step13Desc: "Kot med narisano diagonalo in vodoravno osjo je enak 2φ<sub>a</sub>.",
        footerTitle: "vetin : Analiza ravninske napetosti",
        mitLicense: "Licenca MIT",
        copyright: "Vse pravice pridržane",
        layout: "POSTAVITEV",
        layoutDefault: "Privzeto",
        layoutGrid: "Mreža",
        layoutCompact: "Kompaktna mreža",
        appMenuView: "Tema", appMenuLayout: "Postavitev Strani", appMenuAbout: "O programu",
        themeLight: "Svetla", themeDark: "Temna", themeBlueprint: "Načrt",
        layoutDefaultLabel: "Privzeto", layoutGridLabel: "Mreža", layoutCompactLabel: "Kompaktno",
        aboutTitle: "O programu", aboutTagline: "ANALIZA RAVNINSKIH DEFORMACIJ", aboutVersion: "v1.0 · Licenca MIT",
        aboutContent: "Ta projekt je bil razvit v izobraževalne namene s strani <b>doc. dr. Rasima Temürja</b>, člana Katedre za gradbeništvo na <b>Univerzi v Istanbulu-Cerrahpaşa</b>, kot del pobude <b>Vetin</b>. Izvorna koda je distribuirana na <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHubu</a> pod <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>licenco MIT</a>.",
        aboutContent2: "Do drugih akademskih rešitev ekosistema Vetin lahko dostopate na", aboutClose: "V redu"
    },

    sq: {
        pageTitle: "vetin : Analiza e Stresit Planar",
        inputsTitle: "KOMPONENTET E STRESIT",
        resultsTitle: "STRESET KRYESORE",
        maxShearTitle: "STRESET MAKSIMALE TË PRERJES",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "Rrethi i Mohr-it",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "STRESET E TRANSFORMUARA",
        notationLabel: "Notacioni i Vizatimit :",
        notationStructural: "Inxhinieri (Strukturore)",
        notationMathematical: "Matematikore (Teorike)",
        notationLiterature: "Literaturë",
        mohrCircle: "RRETHI I MOHR-IT",
        strainState: "GJENDJA E DEFORMIMIT",
        principalStrains: "DEFORMIMET KRYESORE",
        shearStrains: "DEFORMIMET MAKSIMALE TË PRERJES",
        transformedStrain: "DEFORMIMET E TRANSFORMUARA",
        zoomIn: "Zmadho",
        zoomOut: "Zvogëlo",
        resetView: "Përshtat në Ekran",
        toggleValuesMohr: "Ndërro Vlerat",
        toggleValuesStrain: "Ndërro Vlerat",
        toggleValuesPrincipal: "Ndërro Vlerat",
        toggleValuesShear: "Ndërro Vlerat",
        toggleValuesTransformed: "Shfaq/Fshih Vlerat",
        downloadSVG: "Shkarko SVG",
        fullscreen: "Ekran i Plotë",
        stepDraw: "Vizatimi Hap pas Hapi",
        stopStepDraw: "Përfundo Vizatimin",
        step0Title: "Ndërtimi i Rrethit të Mohr-it", step0Desc: "Kliko 'Vizatimi Hap pas Hapi' (▶) për të filluar.",
        step1Title: "Hapi 1 :", step1Desc: "Vizatohet boshti horizontal",
        step2Title: "Hapi 1 (Vazhd.) :", step2Desc: "Vlera ε<sub>x</sub> shënohet në boshtin horizontal",
        step3Title: "Hapi 1 (Vazhd.) :", step3Desc: "Vlera ε<sub>y</sub> shënohet në boshtin horizontal",
        step4Title: "Hapi 2 :", step4Desc: "Vizatohet boshti vertikal",
        step5Title: "Hapi 3 :", step5Desc: "Vlerat γ<sub>xy</sub> dhe -γ<sub>xy</sub> shënohen në boshtin vertikal",
        step6Title: "Hapi 3 (Vazhd.) :", step6Desc: "Etiketat vendosen",
        step7Title: "Hapi 4 :", step7Desc: "Prerjet ε<sub>x</sub> : γ<sub>xy</sub> dhe ε<sub>y</sub> : -γ<sub>xy</sub> shënohen", step7DescCCW: "Prerjet ε<sub>x</sub> : -γ<sub>xy</sub> dhe ε<sub>y</sub> : γ<sub>xy</sub> shënohen (Drejtimi i Kundërt)",
        step8Title: "Hapi 5 :", step8Desc: "Pikat e prerjes lidhen për të vizatuar diametrin e rrethit të Mohr-it.",
        step9Title: "Hapi 6 :", step9Desc: "Diametri i vizatuar rrotullohet rreth qendrës së tij për të vizatuar rrethin.",
        step10Title: "Hapi 7 :", step10Desc: "Pikat ku rrethi pret boshtin horizontal (Deformimet Kryesore) ε<sub>1</sub> shënohen.",
        step11Title: "Hapi 7 (Vazhd.) :", step11Desc: "ε<sub>2</sub> shënohet.",
        step12Title: "Hapi 8 :", step12Desc: "Pikat e sipërme (γ<sub>max</sub>) dhe të poshtme (γ<sub>min</sub>) të rrethit shënohen.",
        step13Title: "Hapi 9 :", step13Desc: "Këndi ndërmjet diagonals së vizatuar dhe boshtit horizontal është i barabartë me 2φ<sub>a</sub>.",
        footerTitle: "vetin : Analiza e Stresit Planar",
        mitLicense: "Licenca MIT",
        copyright: "Të gjitha të drejtat të rezervuara",
        layout: "STRUKTURA",
        layoutDefault: "Parazgjedhur",
        layoutGrid: "Rrjetë",
        layoutCompact: "Rrjetë Kompakte",
        appMenuView: "Tema", appMenuLayout: "Paraqitja e Faqes", appMenuAbout: "Rreth",
        themeLight: "E ndriçuar", themeDark: "E errët", themeBlueprint: "Projekt",
        layoutDefaultLabel: "Parazgjedhur", layoutGridLabel: "Rrjet", layoutCompactLabel: "Kompakt",
        aboutTitle: "Rreth", aboutTagline: "ANALIZA E DEFORMIMIT SIPËRFAQËSOR", aboutVersion: "v1.0 · Licenca MIT",
        aboutContent: "Ky projekt u zhvillua për qëllime arsimore nga <b>Prof. Asoc. Dr. Rasim Temür</b>, anëtar i Departamentit të Inxhinierisë Civile të <b>Universitetit të Stambollit-Cerrahpaşa</b>, si pjesë e iniciativës <b>Vetin</b>. Kodi burimor shpërndahet në <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> nën <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>licencën MIT</a>.",
        aboutContent2: "Mund të aksesoni zgjidhje të tjera akademike të ekosistemit Vetin në", aboutClose: "OK"
    },

    ka: {
        pageTitle: "vetin : ბრტყელი დეფორმაციის ანალიზი",
        inputsTitle: "დეფორმაციის კომპონენტები",
        resultsTitle: "მთავარი დეფორმაციები",
        maxShearTitle: "მაქსიმალური ძვრის დეფორმაცია",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "მორის წრე",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "ტრანსფორმირებული დეფორმაციები",
        notationLabel: "ნახაზის ნოტაცია :",
        notationStructural: "საინჟინრო (სტრუქტურული)",
        notationMathematical: "მათემატიკური (თეორიული)",
        notationLiterature: "ლიტერატურა",
        mohrCircle: "მორის წრე",
        strainState: "დეფორმაციული მდგომარეობა",
        principalStrains: "მთავარი დეფორმაციები",
        shearStrains: "მაქსიმალური ძვრის დეფორმაცია",
        transformedStrain: "ტრანსფორმირებული დეფორმაციები",
        zoomIn: "გადიდება",
        zoomOut: "დაპატარავება",
        resetView: "ეკრანზე მორგება",
        toggleValuesMohr: "მნიშვნელობების გადართვა",
        toggleValuesStrain: "მნიშვნელობების გადართვა",
        toggleValuesPrincipal: "მნიშვნელობების გადართვა",
        toggleValuesShear: "მნიშვნელობების გადართვა",
        toggleValuesTransformed: "მნიშვნელობების ჩვენება/დამალვა",
        downloadSVG: "SVG ჩამოტვირთვა",
        fullscreen: "სრული ეკრანი",
        stepDraw: "ეტაპობრივი ხაზვა",
        stopStepDraw: "ხაზვის დასრულება",
        step0Title: "მორის წრის აგება", step0Desc: "დასაწყებად დააჭირეთ 'ეტაპობრივი ხაზვა' (▶).",
        step1Title: "ნაბიჯი 1 :", step1Desc: "იხატება ჰორიზონტალური ღერძი",
        step2Title: "ნაბიჯი 1 (გაგრძ.) :", step2Desc: "ε<sub>x</sub> მნიშვნელობა აღინიშნება ჰორიზონტალურ ღერძზე",
        step3Title: "ნაბიჯი 1 (გაგრძ.) :", step3Desc: "ε<sub>y</sub> მნიშვნელობა აღინიშნება ჰორიზონტალურ ღერძზე",
        step4Title: "ნაბიჯი 2 :", step4Desc: "იხატება ვერტიკალური ღერძი",
        step5Title: "ნაბიჯი 3 :", step5Desc: "γ<sub>xy</sub> და -γ<sub>xy</sub> მნიშვნელობები აღინიშნება ვერტიკალურ ღერძზე",
        step6Title: "ნაბიჯი 3 (გაგრძ.) :", step6Desc: "თავსდება წარწერები",
        step7Title: "ნაბიჯი 4 :", step7Desc: "აღინიშნება გადაკვეთები ε<sub>x</sub> : γ<sub>xy</sub> და ε<sub>y</sub> : -γ<sub>xy</sub>", step7DescCCW: "აღინიშნება გადაკვეთები ε<sub>x</sub> : -γ<sub>xy</sub> და ε<sub>y</sub> : γ<sub>xy</sub> (საპირისპირო მიმართულება)",
        step8Title: "ნაბიჯი 5 :", step8Desc: "გადაკვეთის წერტილები ერთდება მორის წრის დიამეტრის გასავლები.",
        step9Title: "ნაბიჯი 6 :", step9Desc: "გავლებული დიამეტრი ტრიალებს თავისი ცენტრის გარშემო წრის გასავლები.",
        step10Title: "ნაბიჯი 7 :", step10Desc: "აღინიშნება წერტილები, სადაც წრე კვეთს ჰორიზონტალურ ღერძს (მთავარი დეფორმაციები) ε<sub>1</sub>.",
        step11Title: "ნაბიჯი 7 (გაგრძ.) :", step11Desc: "აღინიშნება ε<sub>2</sub>.",
        step12Title: "ნაბიჯი 8 :", step12Desc: "აღინიშნება წრის ზედა (γ<sub>max</sub>) და ქვედა (γ<sub>min</sub>) წერტილები.",
        step13Title: "ნაბიჯი 9 :", step13Desc: "კუთხე გავლებულ დიაგონალსა და ჰორიზონტალურ ღერძს შორის უდრის 2φ<sub>a</sub>.",
        footerTitle: "vetin : ბრტყელი დეფორმაციის ანალიზი",
        mitLicense: "MIT ლიცენზია",
        copyright: "ყველა უფლება დაცულია",
        layout: "განლაგება",
        layoutDefault: "ნაგულისხმევი",
        layoutGrid: "ბადე",
        layoutCompact: "კომპაქტული ბადე",
        appMenuView: "თემა", appMenuLayout: "გვერდის განლაგება", appMenuAbout: "შესახებ",
        themeLight: "ნათელი", themeDark: "მუქი", themeBlueprint: "გეგმა",
        layoutDefaultLabel: "ნაგულისხმევი", layoutGridLabel: "ბადე", layoutCompactLabel: "კომპაქტური",
        aboutTitle: "შესახებ", aboutTagline: "სიბრტყური დეფორმაციის ანალიზი", aboutVersion: "v1.0 · MIT ლიცენზია",
        aboutContent: "ეს პროექტი შეიქმნა საგანმანათლებლო მიზნებისთვის <b>ასოც. პროფ. დ-რ Rasim Temür</b>-ის მიერ, <b>სტამბულის უნივერსიტეტი-Cerrahpaşa</b> სამოქალაქო ინჟინერიის დეპარტამენტი, <b>Vetin</b> ინიციატივის ფარგლებში. წყაროს კოდი <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a>-ზე <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT ლიცენზიით</a>.",
        aboutContent2: "Vetin ეკოსისტემის სხვა სამეცნიერო გადაწყვეტებზე:", aboutClose: "OK"
    },

    ur: {
        pageTitle: "vetin : سطحی اسٹرین کا تجزیہ",
        inputsTitle: "اسٹرین کے اجزاء",
        resultsTitle: "بنیادی اسٹرین",
        maxShearTitle: "زیادہ سے زیادہ قینچی اسٹرین",
        
        
        shearAngle1: "φ<span class=\"sub\">s1</span>",
        shearAngle2: "φ<span class=\"sub\">s2</span>",
        phiA1: "φ<span class=\"sub\">p1</span>",
        phiA2: "φ<span class=\"sub\">p2</span>",
        showStrainXiYi: "موہر سرکل",
        suffixMax: "max",
        suffixMin: "min",
        suffixAve: "ave",
        transformTitle: "تبدیل شدہ اسٹرین",
        notationLabel: "ڈرائنگ کا اشارہ :",
        notationStructural: "انجینئرنگ (ساختی)",
        notationMathematical: "ریاضیاتی (نظری)",
        notationLiterature: "ادب",
        mohrCircle: "موہر سرکل",
        strainState: "اسٹرین کی حالت",
        principalStrains: "بنیادی اسٹرین",
        shearStrains: "زیادہ سے زیادہ قینچی اسٹرین",
        transformedStrain: "تبدیل شدہ اسٹرین",
        zoomIn: "زوم ان",
        zoomOut: "زوم آؤٹ",
        resetView: "اسکرین پر فٹ کریں",
        toggleValuesMohr: "اقدار کو ٹوگل کریں",
        toggleValuesStrain: "اقدار کو ٹوگل کریں",
        toggleValuesPrincipal: "اقدار کو ٹوگل کریں",
        toggleValuesShear: "اقدار کو ٹوگل کریں",
        toggleValuesTransformed: "اقدار دکھائیں/چھپائیں",
        downloadSVG: "SVG ڈاؤن لوڈ کریں",
        fullscreen: "فل اسکرین",
        stepDraw: "مرحلہ وار ڈرائنگ",
        stopStepDraw: "ڈرائنگ مکمل کریں",
        step0Title: "موہر کے دائرے کی تعمیر", step0Desc: "شروع کرنے کے لیے 'مرحلہ وار ڈرائنگ' (▶) پر کلک کریں۔",
        step1Title: "مرحلہ 1 :", step1Desc: "افقی محور کھینچا جاتا ہے",
        step2Title: "مرحلہ 1 (جاری) :", step2Desc: "ε<sub>x</sub> قدر افقی محور پر نشان زد کی جاتی ہے",
        step3Title: "مرحلہ 1 (جاری) :", step3Desc: "ε<sub>y</sub> قدر افقی محور پر نشان زد کی جاتی ہے",
        step4Title: "مرحلہ 2 :", step4Desc: "عمودی محور کھینچا جاتا ہے",
        step5Title: "مرحلہ 3 :", step5Desc: "γ<sub>xy</sub> اور -γ<sub>xy</sub> اقدار عمودی محور پر نشان زد کی جاتی ہیں",
        step6Title: "مرحلہ 3 (جاری) :", step6Desc: "لیبلز رکھے جاتے ہیں",
        step7Title: "مرحلہ 4 :", step7Desc: "چوراہے ε<sub>x</sub> : γ<sub>xy</sub> اور ε<sub>y</sub> : -γ<sub>xy</sub> نشان زد ہیں", step7DescCCW: "چوراہے ε<sub>x</sub> : -γ<sub>xy</sub> اور ε<sub>y</sub> : γ<sub>xy</sub> نشان زد ہیں (الٹی سمت)",
        step8Title: "مرحلہ 5 :", step8Desc: "چوراہے کے پوائنٹس کو موہر کے دائرے کا قطر کھینچنے کے لیے جوڑا جاتا ہے۔",
        step9Title: "مرحلہ 6 :", step9Desc: "کھینچا گیا قطر دائرہ کھینچنے کے لیے اپنے مرکز کے گرد گھمایا جاتا ہے۔",
        step10Title: "مرحلہ 7 :", step10Desc: "وہ پوائنٹس جہاں دائرہ افقی محور کو کاٹتا ہے (بنیادی اسٹرین) ε<sub>1</sub> نشان زد کیے جاتے ہیں۔",
        step11Title: "مرحلہ 7 (جاری) :", step11Desc: "ε<sub>2</sub> نشان زد کیا جاتا ہے۔",
        step12Title: "مرحلہ 8 :", step12Desc: "دائرے کے اوپر (γ<sub>max</sub>) اور نیچے (γ<sub>min</sub>) پوائنٹس نشان زد کیے جاتے ہیں۔",
        step13Title: "مرحلہ 9 :", step13Desc: "کھینچے گئے وتر اور افقی محور کے درمیان زاویہ 2φ<sub>a</sub> کے برابر ہے۔",
        footerTitle: "vetin : سطحی اسٹرین کا تجزیہ",
        mitLicense: "MIT لائسنس",
        copyright: "جملہ حقوق محفوظ ہیں",
        layout: "Layout",
        layoutDefault: "ڈیفالٹ",
        layoutGrid: "گریڈ",
        layoutCompact: "کمپیکٹ گریڈ",
        appMenuView: "تھیم", appMenuLayout: "صفحے کی ترتیب", appMenuAbout: "کے بارے میں",
        themeLight: "روشن", themeDark: "تاریک", themeBlueprint: "بلیو پرنٹ",
        layoutDefaultLabel: "پہلے سے طے شدہ", layoutGridLabel: "گرڈ", layoutCompactLabel: "کمپیکٹ",
        aboutTitle: "کے بارے میں", aboutTagline: "ہموار کشیدگی کا تجزیہ", aboutVersion: "v1.0 · MIT لائسنس",
        aboutContent: "یہ منصوبہ <b>استنبول یونیورسٹی-Cerrahpaşa</b> کے سول انجینئرنگ شعبے کے <b>اسوشیٹ پروفیسر ڈاکٹر Rasim Temür</b> نے <b>Vetin</b> پہل کے حصے کے طور پر تعلیمی مقاصد کے لیے تیار کیا۔ سورس کوڈ <a href='https://github.com/rasimtemur/vetin-planestrain' target='_blank' rel='noopener noreferrer'>GitHub</a> پر <a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>MIT لائسنس</a> کے تحت دستیاب ہے۔",
        aboutContent2: "Vetin ماحولیاتی نظام کے دیگر علمی حل یہاں:", aboutClose: "ٹھیک ہے"
    },

};

// Çeviri Fonksiyonu
let currentLanguage = 'tr';
let detectedLanguageByLocation = null; // IP geolocation ile tespit edilen dil

function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not found`);
        return;
    }

    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    // Sayfa başlığını güncelle
    document.title = translations[lang].pageTitle;

    // data-i18n attribute'una sahip tüm elementleri güncelle
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Placeholder'ları güncelle
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Title attribute'larını güncelle
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            element.title = translations[lang][key];
        }
    });

    // Alt indeks (subscript) çevirilerini güncelle
    document.querySelectorAll('[data-i18n-sub]').forEach(element => {
        const key = element.getAttribute('data-i18n-sub');
        // Önce seçilen dilde ara, yoksa İngilizce'ye düş
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else if (translations['en'] && translations['en'][key]) {
            element.textContent = translations['en'][key];
        }
    });

    // Aktif dil butonunu güncelle
    document.querySelectorAll('.language-switcher button[data-lang]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Canvas çizimlerini güncellemek için event tetikle
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
}

// Ülke koduna göre dil eşleştirmesi
function getLanguageByCountry(countryCode) {
    const countryToLanguage = {
        // Türkçe
        'TR': 'tr',
        // İngilizce
        'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'CA': 'en', 'IE': 'en', 'PG': 'en', 'DM': 'en',
        // Almanca
        'DE': 'de', 'AT': 'de', 'CH': 'de',
        // Çince
        'CN': 'cn', 'TW': 'cn', 'HK': 'cn', 'SG': 'cn',
        // İspanyolca
        'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es',
        'VE': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es',
        'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es',
        // İtalyanca
        'IT': 'it', 'SM': 'it', 'VA': 'it',
        // Portekizce
        'PT': 'pt', 'BR': 'pt', 'AO': 'pt', 'MZ': 'pt',
        // Farsça
        'IR': 'fa', 'AF': 'fa',
        // Hintçe
        'IN': 'hi',
        // Nepalce
        'NP': 'ne',
        // Ermenice
        'AM': 'hy',
        // Yunanca
        'GR': 'el', 'CY': 'el',
        // Romence
        'RO': 'ro', 'MD': 'ro',
        // Endonezce
        'ID': 'id',
        // Filipince
        'PH': 'tl',
        // Japonca
        'JP': 'ja',
        // Korece
        'KR': 'ko', 'KP': 'ko',
        // Rusça
        'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'TJ': 'ru', 'UZ': 'ru',
        // Arapça
        'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IQ': 'ar', 'JO': 'ar', 'KW': 'ar',
        'LB': 'ar', 'LY': 'ar', 'MA': 'ar', 'OM': 'ar', 'QA': 'ar', 'SY': 'ar',
        'TN': 'ar', 'YE': 'ar', 'DZ': 'ar', 'SD': 'ar',
        // Bengalce
        'BD': 'bn',
        // Fransızca
        'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr', 'HT': 'fr',
        // Myanmar
        'MM': 'my',
        // Tayland
        'TH': 'th',
        // Özbekistan
        'UZ': 'uz',
        // Butan
        'BT': 'dz',
        // Tacikistan
        'TJ': 'tg',
        // Kırgızistan
        'KG': 'ky',
        // Bulgaristan
        'BG': 'bg',
        // İbranice
        'IL': 'he',
        // Slovenya
        'SI': 'sl',
        // Arnavutluk
        'AL': 'sq',
        // Gürcistan
        'GE': 'ka',
        // Pakistan
        'PK': 'ur'
    };

    return countryToLanguage[countryCode] || null;
}

// IP geolocation ile ülkeyi tespit et ve dili otomatik seç
async function detectLanguageByLocation() {
    try {
        // Ücretsiz IP geolocation API'si kullan (geojs.io)
        const response = await fetch('https://get.geojs.io/v1/ip/country.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Geolocation API failed');
        }

        const data = await response.json();
        const countryCode = data.country;

        if (countryCode) {
            const detectedLang = getLanguageByCountry(countryCode);

            if (detectedLang && translations[detectedLang]) {
                // Tespit edilen dili global değişkende sakla
                detectedLanguageByLocation = detectedLang;

                // Eğer kullanıcı daha önce manuel dil seçimi yapmadıysa, otomatik seç
                const savedLang = localStorage.getItem('selectedLanguage');
                if (!savedLang) {
                    setLanguage(detectedLang);
                    return detectedLang;
                }
            }
        }
    } catch (error) {
        console.log('Geolocation detection failed, using browser language:', error);
    }

    return null;
}

// Dil koduna göre buton etiketi döndür (ISO 639-1 standardına göre İngilizce kısaltmalar)
function getLanguageLabel(langCode) {
    // ISO 639-1 dil kodları ve İngilizce kısaltmaları
    const languageLabels = {
        'tr': 'TR',  // Turkish
        'en': 'EN',  // English
        'de': 'DE',  // German
        'cn': 'CN',  // Chinese
        'es': 'ES',  // Spanish
        'it': 'IT',  // Italian
        'pt': 'PT',  // Portuguese
        'fa': 'FA',  // Persian/Farsi
        'hi': 'HI',  // Hindi
        'ne': 'NE',  // Nepali
        'hy': 'HY',  // Armenian
        'el': 'EL',  // Greek
        'ro': 'RO',  // Romanian
        'id': 'ID',  // Indonesian
        'tl': 'TL',  // Tagalog
        'ja': 'JA',  // Japanese
        'ko': 'KO',  // Korean
        'ru': 'RU',  // Russian
        'ar': 'AR',  // Arabic
        'bn': 'BN',  // Bengali
        'fr': 'FR',  // French
        'my': 'MY',  // Myanmar/Burmese
        'th': 'TH',  // Thai
        'uz': 'UZ',  // Uzbek
        'dz': 'DZ',  // Dzongkha
        'tg': 'TG',  // Tajik
        'ky': 'KY',  // Kyrgyz
        'bg': 'BG',  // Bulgarian
        'he': 'HE',  // Hebrew
        'sl': 'SL',  // Slovenian
        'sq': 'SQ',  // Albanian
        'ka': 'KA',  // Georgian
        'ur': 'UR'   // Urdu
    };
    return languageLabels[langCode] || langCode.toUpperCase();
}

// Sabit diller (her zaman görünen)
const FIXED_LANGUAGES = ['tr', 'en', 'de', 'cn'];

// Seçilen dil için butonun var olduğundan emin ol, yoksa ekle

function ensureLanguageButtonExists(lang) {
    if (FIXED_LANGUAGES.includes(lang)) return;

    // Tüm language-switcher barındırıcılarını bul (header ve footer)
    const languageSwitchers = document.querySelectorAll('.language-switcher');
    const globalBtnMore = document.getElementById('btnMoreLanguages');

    languageSwitchers.forEach(switcher => {
        // Bu dil için zaten bir buton var mı? (Dropdown içindekileri hariç tut)
        let existingBtn = null;
        // querySelector dropdown içindeki butonu bulabilir, bu yüzden hepsini kontrol edip filtreliyoruz
        switcher.querySelectorAll(`button[data-lang="${lang}"]`).forEach(btn => {
            if (!btn.closest('.language-dropdown')) {
                existingBtn = btn;
            }
        });

        if (existingBtn) return; // Varsa çık

        if (translations[lang]) {
            const newButton = document.createElement('button');
            newButton.setAttribute('data-lang', lang);
            newButton.textContent = getLanguageLabel(lang);
            newButton.classList.add('dynamic-lang-btn'); // Dinamik buton sınıfı

            newButton.addEventListener('click', () => {
                setLanguage(lang);
            });

            // Eğer bu switcher global + butonunu içeriyorsa, ondan hemen önce ekle
            if (globalBtnMore && switcher.contains(globalBtnMore)) {
                switcher.insertBefore(newButton, globalBtnMore);
            } else {
                // Yoksa (örn footer) en sona ekle
                switcher.appendChild(newButton);
            }
        }
    });

    // Buton eklendikten sonra, eğer aktif dil buysa butonun aktif görünmesini sağla
    const currentLang = localStorage.getItem('selectedLanguage');
    if (currentLang === lang) {
        setTimeout(() => {
            const btns = document.querySelectorAll('.language-switcher button[data-lang]');
            btns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
            });
        }, 0);
    }
}

// IP geolocation ile tespit edilen dil için buton ekle
function addDetectedLanguageButton() {
    // Tespit edilen dil yoksa veya sabit dillerden biriyse, buton ekleme
    if (!detectedLanguageByLocation || FIXED_LANGUAGES.includes(detectedLanguageByLocation)) {
        return;
    }

    // Eğer kullanıcı zaten başka bir dinamik dil seçmişse (savedLang),
    // otomatik tespit edilen dili ekleyip kafa karıştırmayalım.
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && !FIXED_LANGUAGES.includes(savedLang) && savedLang !== detectedLanguageByLocation) {
        return;
    }

    ensureLanguageButtonExists(detectedLanguageByLocation);
}

// Dropdown menüsünü doldur
function populateLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');

    // Dilleri al ve alfabetik sırala
    const availableLanguages = Object.keys(translations).filter(lang => !FIXED_LANGUAGES.includes(lang));

    // Label'a göre sıralama
    availableLanguages.sort((a, b) => {
        const labelA = getLanguageLabel(a);
        const labelB = getLanguageLabel(b);
        return labelA.localeCompare(labelB);
    });

    // Dropdown'ı temizle
    dropdown.innerHTML = '';

    availableLanguages.forEach(lang => {
        const btn = document.createElement('button');
        const label = getLanguageLabel(lang);
        btn.textContent = label;
        btn.setAttribute('data-lang', lang);

        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Tıklama olayının yayılmasını engelle

            // 1. ÖNCEKİ DINAMİK BUTONLARI SIL
            // Sayfadaki tüm dynamic-lang-btn sınıfına sahip butonları bul ve kaldır
            const allDynamicButtons = document.querySelectorAll('.dynamic-lang-btn');
            allDynamicButtons.forEach(btn => btn.remove());

            // 2. DİLİ DEÄİŞTİR (Önce dili değiştir ki localStorage güncellensin)
            setLanguage(lang);

            // 3. YENİ BUTONU EKLE (Artık aktif dil ile eşleşecek)
            ensureLanguageButtonExists(lang);

            // 4. MENÜYÜ KAPAT
            dropdown.classList.remove('show');
        });

        dropdown.appendChild(btn);
    });
}

// Kullanıcının tarayıcı dilini algıla ve dinamik dil butonları oluştur
function initializeLanguageButtons() {
    // IP geolocation ile tespit edilen dil için buton ekle
    addDetectedLanguageButton();

    // Dropdown menüyü doldur
    populateLanguageDropdown();

    // "+" Butonu için event listener
    const btnMore = document.getElementById('btnMoreLanguages');
    const dropdown = document.getElementById('languageDropdown');

    if (btnMore && dropdown) {
        btnMore.addEventListener('click', (e) => {
            e.stopPropagation(); // Sayfa tıklamasını engelle
            dropdown.classList.toggle('show');
        });

        // Dışarı tıklayınca kapat
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== btnMore) {
                dropdown.classList.remove('show');
            }
        });
    }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', async () => {
    // Önce kaydedilmiş dil tercihini kontrol et
    const savedLang = localStorage.getItem('selectedLanguage');

    if (savedLang) {
        // Kullanıcı daha önce manuel dil seçimi yaptıysa, onu kullan
        setLanguage(savedLang);
        // Kaydedilmiş ve sabit olmayan bir dil ise butonunu oluştur
        ensureLanguageButtonExists(savedLang);
    }

    // IP geolocation ile dil tespiti yap (Buton eklemek için gerekli)
    // savedLang varsa dili değiştirmez, sadece detectedLanguageByLocation'ı günceller
    const detectedLang = await detectLanguageByLocation();

    if (!savedLang) {
        // Kaydedilmiş dil yoksa
        if (detectedLang) {
            // detectLanguageByLocation zaten setLanguage yaptı
        } else {
            // Geolocation başarısız olursa, tarayıcı dilini kullan
            const browserLang = navigator.language.split('-')[0].toLowerCase();
            const fallbackLang = translations[browserLang] ? browserLang : 'tr';
            setLanguage(fallbackLang);
        }
    }

    // Dinamik dil butonlarını başlat (IP geolocation ile tespit edilen dil için)
    initializeLanguageButtons();

    // Dil değiştirme butonlarına event listener ekle
    document.querySelectorAll('.language-switcher button[data-lang]').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            if (lang) setLanguage(lang);
        });
    });
});

