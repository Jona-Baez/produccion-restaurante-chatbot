import { google, sheets_v4 } from 'googleapis';
import { GaxiosResponse } from 'gaxios';

const googleCredentials = JSON.parse(process.env.GOOGLE_JSON);

const auth = new google.auth.GoogleAuth({
  credentials: googleCredentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const spreadsheetId = process.env.SPREADSHEETID;

// ✅ Obtener el nombre de la primera hoja disponible
async function getFirstSheetName(): Promise<string | undefined> {
  const sheets = google.sheets({ version: 'v4', auth });
  try {
    const metadata = await sheets.spreadsheets.get({ spreadsheetId });
    const title = metadata.data.sheets?.[0]?.properties?.title;
    console.log('✅ Hoja detectada:', title);
    return title;
  } catch (error) {
    console.error('❌ No se pudo obtener el nombre de la hoja:', error);
    return undefined;
  }
}

// ✅ Escribir datos en la hoja
async function writeToSheet(values: any[][]): Promise<GaxiosResponse<sheets_v4.Schema$UpdateValuesResponse> | void> {
  const sheets = google.sheets({ version: 'v4', auth });
  const sheetName = await getFirstSheetName();
  if (!sheetName) return;

  const range = `'${sheetName}'!A1:J10`;
  const resource = { values };
  const valueInputOption = 'USER_ENTERED';

  try {
    const res = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption,
      requestBody: resource
    });

    return res;
  } catch (error) {
    console.error('❌ Error al escribir en Sheets:', error);
  }
}

// ✅ Leer datos desde la hoja
async function readSheet(): Promise<any[][] | void> {
  const sheets = google.sheets({ version: 'v4', auth });
  const sheetName = await getFirstSheetName();
  if (!sheetName) return;

  const range = `'${sheetName}'!A1:J35`;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    });
    return response.data.values;
  } catch (error) {
    console.error('❌ Error al leer de Sheets:', error);
  }
}

export { writeToSheet, readSheet };
