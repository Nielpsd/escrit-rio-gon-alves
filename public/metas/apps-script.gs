// ============================================================
// GONÇALVES ADVOGADOS – Backend Google Apps Script
// ============================================================
//
// PASSO A PASSO DE CONFIGURAÇÃO:
//
// 1. Crie uma planilha em drive.google.com
//    Copie o ID da URL: .../spreadsheets/d/[ESTE TRECHO]/edit
//    Cole no campo SPREADSHEET_ID abaixo.
//
// 2. Abra script.google.com → Novo projeto
//    Cole TODO o conteúdo deste arquivo.
//    Salve (Ctrl+S) com qualquer nome.
//
// 3. Clique em "Implantar" → "Nova implantação"
//    Tipo: App da Web
//    Executar como: Eu (sua conta Google)
//    Quem tem acesso: Qualquer pessoa
//    Clique em "Implantar" → Autorize → Copie a URL gerada.
//
// 4. No arquivo script.js do sistema, localize a linha:
//    const APPS_SCRIPT_URL = 'COLE_A_URL_DO_DEPLOY_AQUI';
//    Substitua pelo URL copiado no passo 3.
//
// 5. Recarregue o sistema no navegador.
//    Os dados serão migrados automaticamente do localStorage.
//
// ============================================================

const SPREADSHEET_ID = 'COLE_O_ID_DA_PLANILHA_AQUI';

// ── LEITURA E GRAVAÇÃO VIA GET (com suporte a JSONP) ──────────
//
// Parâmetros suportados:
//   action=read  (padrão) — retorna todos os dados
//   action=save  — grava os dados; requer parâmetro data=<JSON>
//   callback=fn  — envolve a resposta em fn(...) para JSONP

function doGet(e) {
  try {
    const ss     = SpreadsheetApp.openById(SPREADSHEET_ID);
    const action = (e.parameter && e.parameter.action) || 'read';

    if (action === 'save') {
      const raw     = e.parameter.data || '{}';
      const payload = JSON.parse(raw);
      if (payload.colabs  !== undefined) writeSheet(ss, 'Colaboradores', payload.colabs);
      if (payload.entries !== undefined) writeSheet(ss, 'Entries',       payload.entries);
      if (payload.config  !== undefined) writeConfig(ss, payload.config);
      return _respond(e, { ok: true });
    }

    return _respond(e, {
      colabs:  readSheet(ss, 'Colaboradores'),
      entries: readSheet(ss, 'Entries'),
      config:  readConfig(ss),
    });
  } catch (err) {
    return _respond(e, { error: err.message });
  }
}

// Responde em JSON normal ou JSONP dependendo do parâmetro ?callback=
function _respond(e, data) {
  const cb   = e.parameter && e.parameter.callback;
  const json = JSON.stringify(data);
  if (cb) {
    return ContentService
      .createTextOutput(cb + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

// ── ESCRITA (POST) ────────────────────────────────────────────

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    if (payload.colabs  !== undefined) writeSheet(ss, 'Colaboradores', payload.colabs);
    if (payload.entries !== undefined) writeSheet(ss, 'Entries',       payload.entries);
    if (payload.config  !== undefined) writeConfig(ss, payload.config);
    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ error: err.message });
  }
}

// ── HELPERS ───────────────────────────────────────────────────

function readSheet(ss, name) {
  const sheet = ss.getSheetByName(name);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  return values.slice(1).map(row =>
    Object.fromEntries(headers.map((h, i) => {
      let v = row[i];
      if (v === '' || v === null || v === undefined) {
        v = null;
      } else if (v instanceof Date) {
        // Sheets auto-converte strings de data em objetos Date.
        // Retornamos como "YYYY-MM-DD" para preservar o formato original.
        v = Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
      }
      return [h, v];
    }))
  );
}

function writeSheet(ss, name, rows) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  sheet.clearContents();
  if (!rows || !rows.length) return;
  const headers = Object.keys(rows[0]);
  const matrix  = [headers].concat(
    rows.map(r => headers.map(h => {
      const v = r[h];
      if (v === undefined || v === null) return '';
      if (typeof v === 'boolean' || typeof v === 'number') return v;
      return String(v);
    }))
  );
  sheet.getRange(1, 1, matrix.length, headers.length).setValues(matrix);
}

function readConfig(ss) {
  const sheet = ss.getSheetByName('Config');
  if (!sheet || sheet.getLastRow() < 1) return {};
  return Object.fromEntries(
    sheet.getDataRange().getValues()
      .filter(([k]) => k !== '')
      .map(([k, v]) => [String(k), String(v)])
  );
}

function writeConfig(ss, cfg) {
  let sheet = ss.getSheetByName('Config');
  if (!sheet) sheet = ss.insertSheet('Config');
  const existing = sheet.getLastRow() > 0 ? sheet.getDataRange().getValues() : [];
  Object.entries(cfg).forEach(([key, val]) => {
    const idx = existing.findIndex(r => r[0] === key);
    if (idx >= 0) {
      sheet.getRange(idx + 1, 2).setValue(String(val));
      existing[idx][1] = String(val);
    } else {
      sheet.appendRow([key, String(val)]);
      existing.push([key, String(val)]);
    }
  });
}

function jsonOut(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

