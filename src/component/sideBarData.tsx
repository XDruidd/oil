import type ISideBar from "./interface/ISideBar";

const sideBar: ISideBar = {
    minPrice: 0,
    maxPrice: 990,
    param: [
        {
            name: "Oil Type",
            param: [
                "Extra Virgin",
                "Virgin",
                "Organic",
                "Cold-Pressed",
                "Flavored"
            ]
        },
        {
            name: "Olive Variety",
            param: [
                "Arbequina",
                "Koroneiki",
                "Picual",
                "Blend"
            ],
            saveAll: true
        },
        {
            name: "Brand",
            param: [
                "All brands",
                "Aceites Unicos",
                "Almazaras de la Subbética",
                "Chateau Margüi (Skywalker)",
                "Ciccolella",
                "Cuadrat Valley",
                "Cufrol",
                "Franci",
                "Frantoi Cutrera",
                "Galantino",
                "Kavalaria"
            ],
            saveAll: true
        },
        {
            name: "Raw Material",
            param: [
                "Olive",
                "Sunflower Seeds",
                "Avocado",
                "Coconut",
                "Grapeseed",
                "Sesame Seeds",
                "Pumpkin Seeds",
                "Flaxseed",
                "Peanuts",
                "Walnuts",
                "Blends",
            ]
        },
        {
            name: "Acidity Level",
            param: [
                "Slider (0.1% – 0.8%)"
            ]
        },
        {
            name: "Best For",
            param: [
                "Salads",
                "Frying",
                "Sauces",
                "Premium Tasting",
            ]
        },
        {
            name: "Packaging",
            param: [
                "Glass",
                "Tin",
                "Sauce Bottle",
                "PET",
                "Gift Box",
            ]
        },
        {
            name: "Volume",
            param: [
                "250 ml",
                "500 ml",
                "750 ml",
                "1 L",
            ]
        },
        {
            name: "Intensity",
            param: [
                "Mild",
                "Robust",
                "Peppery",
                "Nutty",
            ]
        },
        {
            name: "Diet & Certifications",
            param: [
                "Organic",
                "Vegan",
                "Kosher",
                "Halal",
                "Gluten-Free",
                "Non-GMO",
            ]
        },
        {
            name: "Availability",
            param: [
                "In stock",
                "Out of stock",
            ]
        },
    ]
}   
export default sideBar;