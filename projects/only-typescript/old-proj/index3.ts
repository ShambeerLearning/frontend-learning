type Wand = {
    name: string;
    vis: number;
    levelCharge: number;
    material: "iron" | "gold" | "thaum" | "ichor";
}

type CraftItem = {
    name: string;
    requiredVis: number;
    requiredLevelCharge: number;
    requiredMaterial: "iron" | "gold" | "thaum" | "ichor";
}

const wandBag: Wand[] = [
    { name: "Палка с железным наконечником", vis: 10, levelCharge: 0, material: "iron" },
    { name: "Ученический железный жезл", vis: 25, levelCharge: 1, material: "iron" },
    { name: "Железный жезл подмастерья", vis: 40, levelCharge: 1, material: "iron" },
    { name: "Тяжелый железный скипетр", vis: 45, levelCharge: 2, material: "iron" },
    { name: "Простой золотой жезл", vis: 50, levelCharge: 2, material: "gold" },
    { name: "Золотой жезл адепта", vis: 75, levelCharge: 2, material: "gold" },
    { name: "Инкрустированный золотой жезл", vis: 100, levelCharge: 3, material: "gold" },
    { name: "Укрепленный золотой посох", vis: 125, levelCharge: 4, material: "gold" },
    { name: "Базовый таум-жезл", vis: 150, levelCharge: 4, material: "thaum" },
    { name: "Таум-жезл мастера", vis: 250, levelCharge: 5, material: "thaum" },
    { name: "Усиленный таумический скипетр", vis: 400, levelCharge: 6, material: "thaum" },
    { name: "Скипетр очищения", vis: 450, levelCharge: 7, material: "thaum" },
    { name: "Спящий ихоревый жезл", vis: 500, levelCharge: 7, material: "ichor" },
    { name: "Пробужденный ихоревый жезл", vis: 1000, levelCharge: 10, material: "ichor" },
    { name: "Посох небесного ихора", vis: 2500, levelCharge: 15, material: "ichor" },
    { name: "Резонирующий ихоревый скипетр", vis: 5000, levelCharge: 20, material: "ichor" },
];

const needCrafts: CraftItem[] = [
    { name: "Стеклянный пузырек", requiredVis: 5, requiredLevelCharge: 0, requiredMaterial: "iron" },
    { name: "Магический камень", requiredVis: 15, requiredLevelCharge: 1, requiredMaterial: "iron" },
    { name: "Железный наконечник", requiredVis: 20, requiredLevelCharge: 1, requiredMaterial: "iron" },
    { name: "Резной дубовый стержень", requiredVis: 35, requiredLevelCharge: 2, requiredMaterial: "iron" },
    { name: "Очки откровения", requiredVis: 45, requiredLevelCharge: 2, requiredMaterial: "gold" },
    { name: "Золотой наконечник", requiredVis: 60, requiredLevelCharge: 2, requiredMaterial: "gold" },
    { name: "Волшебное зеркало", requiredVis: 90, requiredLevelCharge: 3, requiredMaterial: "gold" },
    { name: "Амулет очищения", requiredVis: 110, requiredLevelCharge: 4, requiredMaterial: "gold" },
    { name: "Алхимическая конструкция", requiredVis: 120, requiredLevelCharge: 4, requiredMaterial: "thaum" },
    { name: "Таумический наконечник", requiredVis: 180, requiredLevelCharge: 5, requiredMaterial: "thaum" },
    { name: "Серебряное дерево (саженец)", requiredVis: 220, requiredLevelCharge: 5, requiredMaterial: "thaum" },
    { name: "Адская печь", requiredVis: 300, requiredLevelCharge: 6, requiredMaterial: "thaum" },
    { name: "Ткань поглощения", requiredVis: 450, requiredLevelCharge: 7, requiredMaterial: "ichor" },
    { name: "Ихоревый наконечник", requiredVis: 600, requiredLevelCharge: 8, requiredMaterial: "ichor" },
    { name: "Мантия стратосферы", requiredVis: 850, requiredLevelCharge: 9, requiredMaterial: "ichor" },
    { name: "Шаровары пылающего света", requiredVis: 1100, requiredLevelCharge: 10, requiredMaterial: "ichor" },
    { name: "Бездонное кольцо", requiredVis: 1500, requiredLevelCharge: 12, requiredMaterial: "ichor" },
    { name: "Капюшон адских глубин", requiredVis: 2000, requiredLevelCharge: 14, requiredMaterial: "ichor" },
];