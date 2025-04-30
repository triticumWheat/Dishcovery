function updateClock() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let hours = today.getHours();
    let min = today.getMinutes();
    let ampm;

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    if (hours < 12) {
        ampm = "AM";
        if (hours < 10 && hours !== 0) {
            hours = "0" + hours;
        }
        if (hours === 0) {
            hours = 12;
        }
    } else {
        ampm = "PM";
        if (hours - 12 < 10 && hours - 12 !== 0) {
            hours = "0" + (hours - 12);
        } else if (hours - 12 >= 10) {
            hours = hours - 12;
        } else {
            hours = 12;
        }
    }

    if (min < 10) {
        min = "0" + min;
    }

    document.getElementById("clock").innerHTML = `
        <h3>${hours}:${min} ${ampm}</h3>
        <h5>${month}/${day}/${year}</h5>
    `;
}

updateClock();
setInterval(updateClock, 60000);

const dishes = [
    "Mala Restaurant: <br>Stir Fried Squid <br>→ Tender squid stir-fried with garlic, chili, and vegetables, offering a chewy texture and bold, savory flavors.",
    "Mala Restaurant: <br>Stir Fried Lamb with Peppercorns & Black Bean Sauce <br>→ Sliced lamb sautéed with numbing Sichuan peppercorns and fermented black beans, creating a spicy, aromatic, and earthy dish.",
    "Mala Restaurant: <br>Fish Fillet with Sweet & Sour Sauce <br>→ Crispy fried fish fillet coated in a vibrant sweet and sour sauce, balancing tanginess with a hint of sweetness.",
    "Mala Restaurant: <br>Sauteed Fish Fillet in Hot & Spicy Sauce <br>→ Soft fish fillets bathed in a spicy Sichuan-style broth, packed with chili heat and a rich umami flavor.",
    "Mala Restaurant: <br>Chicken with Pepper <br>→ Diced chicken stir-fried with colorful peppers, delivering a fragrant, slightly smoky, and moderately spicy taste.",
    "Mala Restaurant: <br>Dry Cooked Chicken with Chili Peppers <br>→ A fiery classic: dry-cooked chicken tossed with dried chili peppers and Sichuan peppercorns for a bold and numbing kick.",
    "Mala Restaurant: <br>Spicy Squid <br>→ Squid cooked with fresh chilies and garlic, creating a spicy, aromatic dish perfect for lovers of seafood and heat.",
    "Mala Restaurant: <br>Chef Special Blood Sausage <br>→ House-made pork blood sausage, seasoned and served with a spicy dipping sauce — rich, earthy, and full of character.",
    "Mala Restaurant: <br>Stir Fried Eggplant with String Bean <br>→ Eggplant and green beans stir-fried together, soaking up savory sauce and offering a tender yet crisp bite.",
    "My Happy Hunan Kitchen: <br>Stir-Fried Chopped Beef with Pickled Pepper <br>→ Tender chopped beef stir-fried with Hunan-style pickled peppers, delivering a spicy, tangy kick.",
    "My Happy Hunan Kitchen: <br>Choose Two Meats & Two Vegetables Combo <br>→ A customizable combo featuring two meat choices and two vegetables, stir-fried with house spices — perfect for a balanced, hearty meal.",
    "My Happy Hunan Kitchen: <br>Stir-Fried Pork with Long Horn Pepper <br>→ Sliced pork quickly stir-fried with long horn green peppers, emphasizing a bold, aromatic heat typical of Hunan cooking.",
    "My Happy Hunan Kitchen: <br>Chicken Gizzard and Pickled Green Bean <br>→ A crunchy, savory dish combining tender chicken gizzards with sour green beans for a texture-rich experience.",
    "My Happy Hunan Kitchen: <br>Hot Braised Beef Rice Noodle Soup <br>→ Slow-braised beef in a deeply flavorful broth served with soft, silky rice noodles — warming and satisfying.",
    "My Happy Hunan Kitchen: <br>Green Pepper and Eggplant with Century Egg <br>→ A creative pairing of stir-fried green peppers and eggplant, topped with diced preserved century egg for a rich umami punch.",
    "My Happy Hunan Kitchen: <br>Steamed Egg with Minced Pork and Chili <br>→ Fluffy steamed egg custard layered with savory minced pork and a touch of chili oil for a silky, spicy-smooth dish.",
    "My Happy Hunan Kitchen: <br>Thin-Sliced Beef in the Golden Soup <br>→ Thin beef slices cooked in a rich, golden broth made from chicken and pork bones, highlighting deep umami flavors.",
    "My Happy Hunan Kitchen: <br>Mao's Red-Braised Pork <br>→ A classic Hunanese specialty: pork belly slow-braised with soy sauce, sugar, and spices until deeply caramelized and tender.",
    "My Happy Hunan Kitchen: <br>Happy Sweet and Spicy Crispy Chicken <br>→ Bite-sized crispy chicken pieces tossed in a sweet, spicy glaze — crunchy outside, juicy inside, and highly addictive.",
    "Hao Shi Guang: <br>Stir Fried Green Bean with Pork and Dried Shrimp <br>→ Fresh green beans stir-fried with savory pork and dried shrimp, offering a crisp, umami-packed bite.",
    "Hao Shi Guang: <br>Clay Pot Sauteed Beef <br>→ Tender beef slices stir-fried in a sizzling clay pot with bold spices, creating a smoky, hearty flavor.",
    "Hao Shi Guang: <br>Fried Chicken Wings with Bay Leaves <br>→ Juicy chicken wings fried with aromatic bay leaves, delivering a fragrant and crispy snack.",
    "Hao Shi Guang: <br>Braised Pork Over Rice <br>→ Slow-braised pork belly served over steamed rice, rich in soy-sauce flavor and melt-in-your-mouth tender.",
    "Hao Shi Guang: <br>Angus Beef Over Rice (Spicy, Garlic) <br>→ Sliced Angus beef stir-fried with garlic and spices, laid over fluffy rice for a spicy, savory meal.",
    "Hao Shi Guang: <br>Satay Beef with Vermicelli Noodles <br>→ Thin beef strips sautéed with satay sauce and soft vermicelli noodles, rich and nutty in flavor.",
    "Hao Shi Guang: <br>Griddle Pork Intestines with Chicken <br>→ A fiery and aromatic dish of pork intestines and chicken, intensely spicy and bursting with wok aroma.",
    "Hao Shi Guang: <br>Spicy Fried Chicken with Geleshan Red Pepper <br>→ Bite-sized fried chicken tossed with Geleshan red peppers, delivering a fierce and addictive heat.",
    "Hao Shi Guang: <br>Chili Oiled Sliced Beef <br>→ Tender beef slices soaked in a vibrant chili oil broth, numbing, spicy, and deeply flavorful.",
    "Hao Shi Guang: <br>Salt and Pepper Pork Trotters <br>→ Crispy pork trotters seasoned with salt and pepper, offering a rich, crunchy indulgence.",
];

function pickRandomDish() {
    const randomIndex = Math.floor(Math.random() * dishes.length);
    const randomDish = dishes[randomIndex];
    document.getElementById("random-result").innerHTML = `🎉 Try: ${randomDish}`;
}