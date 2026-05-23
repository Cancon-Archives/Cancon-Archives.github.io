// assets/js/armor-calc.js

function calculateArmorDamage() {
    // Получаем значения полей
    const incoming = parseFloat(document.getElementById('armorIncoming').value);
    const armorPoints = parseFloat(document.getElementById('armorPoints').value);
    const toughness = parseFloat(document.getElementById('armorToughness').value);

    const protLevel = parseInt(document.getElementById('protLevel').value);
    const projLevel = parseInt(document.getElementById('projLevel').value);
    const blastLevel = parseInt(document.getElementById('blastLevel').value);
    const fireLevel = parseInt(document.getElementById('fireLevel').value);
    const ffLevel = parseInt(document.getElementById('ffLevel').value);

    const damageType = document.getElementById('damageType').value;

    // Проверка на валидность
    if (isNaN(incoming) || isNaN(armorPoints) || isNaN(toughness) ||
        isNaN(protLevel) || isNaN(projLevel) || isNaN(blastLevel) || isNaN(fireLevel) || isNaN(ffLevel)) {
        document.getElementById('armorResult').textContent = 'Ошибка! Проверь введённые числа.';
        return;
    }

    // Расчёт EPF
    const baseEpf = protLevel;
    let specificEpf = 0;
    switch (damageType) {
        case 'Снаряды': specificEpf = projLevel * 2; break;
        case 'Взрыв': specificEpf = blastLevel * 2; break;
        case 'Огонь': specificEpf = fireLevel * 2; break;
        case 'Падение': specificEpf = ffLevel * 3; break;
        default: specificEpf = 0;
    }
    const totalEpf = Math.min(20, baseEpf + specificEpf);

    // Броня
    const penetration = (4 * incoming) / (toughness + 8);
    let effectiveArmor = Math.max(armorPoints / 5, armorPoints - penetration);
    effectiveArmor = Math.min(20, effectiveArmor);
    const armorReduction = effectiveArmor / 25;

    // После брони
    const afterArmor = incoming * (1 - armorReduction);

    // После зачарований
    const protectionReduction = totalEpf / 25;
    const finalDamage = afterArmor * (1 - protectionReduction);

    const hearts = finalDamage / 2;

    // Цвет и текстовое описание
    let color, addText;
    if (hearts <= 1) {
        color = '#2e8b57'; // зеленый
        addText = ' (Отличная защита!)';
    } else if (hearts <= 5) {
        color = '#ff8c00'; // оранжевый
        addText = ' (Средний урон)';
    } else if (hearts <= 9) {
        color = '#ff4500'; // темно-оранжевый
        addText = ' (Серьёзно!)';
    } else {
        color = '#ff0000'; // красный
        addText = ' (Критично! Почти смерть)';
    }

    const result = 
        `Входящий урон:          ${incoming.toFixed(1)}\n` +
        `После брони:            ${afterArmor.toFixed(2)}\n` +
        `Общий EPF (макс. 20):   ${totalEpf}\n` +
        `Полученный урон:        ${finalDamage.toFixed(2)}\n` +
        `Это ≈ ${hearts.toFixed(1)} сердец${addText}\n\n` +
        `Тип урона: ${damageType}`;

    const resultEl = document.getElementById('armorResult');
    resultEl.textContent = result;
    resultEl.style.color = color;
}