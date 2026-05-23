**SGA-конвертер**

<style>
  .sga-converter {
    background: #121318;
    color: #f5f5f7;
    padding: 20px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
  }
  .sga-converter textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 4px;
    background: #0b0c0f;
    color: #f5f5f7;
    resize: vertical;
  }
  .sga-converter button {
    background: #ff4500;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px 5px 10px 0;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  .sga-converter button:hover {
    background: #e03d00;
  }
  .sga-converter .status {
    color: #ff4500;
    margin-left: 10px;
  }
  .sga-converter hr {
    border-color: #333;
    margin: 20px 0;
  }
</style>

<div class="sga-converter">
  <h3>🔮 SGA Конвертер для Minecraft</h3>

  <label>📝 English → Галактический алфавит</label><br>
  <textarea id="engInput" rows="3" placeholder="Введи английский текст..."></textarea><br>
  <button onclick="engToSga()">✨ Конвертировать → SGA & Копировать</button>
  <span id="engStatus" class="status"></span><br>
  <textarea id="sgaOutput" rows="3" readonly placeholder="SGA появится здесь"></textarea>

  <hr>

  <label>🔍 Галактический алфавит → English</label><br>
  <textarea id="sgaInput" rows="3" placeholder="Вставь SGA текст из книги..."></textarea><br>
  <button onclick="sgaToEng()">🔄 Конвертировать → English & Копировать</button>
  <span id="sgaStatus" class="status"></span><br>
  <textarea id="engOutput" rows="3" readonly placeholder="English появится здесь"></textarea>

  <p style="color:#888; font-size:0.9em;">💡 Копируй текст из книги (Ctrl+A → Ctrl+C) → вставь в поле → жми кнопку → Ctrl+V куда нужно!</p>
</div>

---

**Калькулятор брони**

<style>
  .armor-calc {
    background: #121318;
    color: #f5f5f7;
    padding: 20px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    max-width: 700px;
    margin: 0 auto;
  }
  .armor-calc .field {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .armor-calc .field label {
    width: 220px;
    margin-right: 10px;
  }
  .armor-calc input, .armor-calc select {
    padding: 6px;
    font-size: 14px;
    background: #0b0c0f;
    color: #f5f5f7;
    border: 1px solid #333;
    border-radius: 4px;
  }
  .armor-calc button {
    background: #ff4500;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 15px 0;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  .armor-calc button:hover {
    background: #e03d00;
  }
  .armor-calc .result {
    background: #0b0c0f;
    border: 1px solid #333;
    padding: 12px;
    font-family: Consolas, monospace;
    font-size: 14px;
    white-space: pre-wrap;
    min-height: 100px;
    border-radius: 4px;
    margin-top: 15px;
  }
  .armor-calc .note {
    color: #888;
    font-size: 0.85em;
    margin-top: 5px;
  }
</style>

<div class="armor-calc">
  <h3>⚔️ Minecraft — Калькулятор урона по броне</h3>

  <div class="field">
    <label>Входящий урон:</label>
    <input type="number" id="armorIncoming" value="10" step="any" min="0">
  </div>
  <div class="field">
    <label>Очки брони (0–20):</label>
    <input type="number" id="armorPoints" value="20" step="any" min="0" max="20">
  </div>
  <div class="field">
    <label>Твёрдость (0–12):</label>
    <input type="number" id="armorToughness" value="12" step="any" min="0" max="12">
  </div>

  <hr style="border-color:#333; margin: 15px 0;">

  <div class="field">
    <label>Тип урона:</label>
    <select id="damageType">
      <option value="Общий" selected>Общий</option>
      <option value="Снаряды">Снаряды</option>
      <option value="Взрыв">Взрыв</option>
      <option value="Огонь">Огонь</option>
      <option value="Падение">Падение</option>
    </select>
  </div>

  <div class="field">
    <label>Защита (суммарно, 0–16):</label>
    <select id="protLevel">
      <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16" selected>16</option>
    </select>
  </div>

  <div class="field">
    <label>Защита от снарядов (0–16):</label>
    <select id="projLevel">
      <option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option>
    </select>
  </div>

  <div class="field">
    <label>Взрывоустойчивость (0–16):</label>
    <select id="blastLevel">
      <option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option>
    </select>
  </div>

  <div class="field">
    <label>Огнестойкость (0–16):</label>
    <select id="fireLevel">
      <option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option>
    </select>
  </div>

  <div class="field">
    <label>Невесомость (0–4):</label>
    <select id="ffLevel">
      <option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>
    </select>
  </div>

  <button onclick="calculateArmorDamage()">🛡️ Рассчитать полученный урон</button>

  <div id="armorResult" class="result"></div>

  <div class="note">
    💡 Макс. 4×IV = 16 для каждого типа | EPF ограничен 20 | Невесомость — только на ботинках
  </div>
</div>
