# Internship Application Google Apps Script

Assign `SPREADSHEET_ID` with the real spreadsheet ID and make sure `SHEET_NAME` matches the exact tab name.

```javascript
/**
 * Handles POST requests from the internship form.
 * This writes the submitted application into Google Sheets.
 */
function doPost(e) {
  try {
    // Update these two values to match your Google Sheet.
    const SPREADSHEET_ID = "1IO_-hzbIJstYyTGI2GgPs9fJVb4dRrEeYAUQhjvxPNw";
    const SHEET_NAME = "Applications";

    // Open the target spreadsheet and select the tab that should receive rows.
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    if (!sheet) {
      throw new Error("No sheets found in the spreadsheet.");
    }

    if (sheet.getName() !== SHEET_NAME) {
      console.warn("Using fallback sheet:", sheet.getName());
    }

    // The form may send JSON or form-encoded data, so support both.
    const data = e && e.postData && e.postData.contents
      ? JSON.parse(e.postData.contents)
      : (e && e.parameter) || {};

    // Append the submitted values in the same order as the sheet columns.
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || "",
      data.membershipId || "",
      data.phoneNumber || "",
      data.whatsappNumber || "",
      data.email || "",
      data.gender || "",
      data.hometown || "",
      data.institution || "",
      data.programme || "",
      data.currentLevel || "",
      data.startDate || "",
      data.endDate || "",
      data.preferredCompany || "",
      data.acceptAlternative || "",
      data.hasExperience || "",
      data.additionalComments || ""
    ]);

    // Return a JSON response so the deployment can confirm success.
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Application submitted successfully!"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return the error message so failed writes are easier to debug.
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: String(error)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Simple GET check so you can verify the web app is deployed.
function doGet() {
  return ContentService
    .createTextOutput("Google Apps Script is running")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## What this expects

- A Google Sheet with a tab named `Applications`, or another tab if you rely on the fallback to the first sheet
- The form to send `timestamp`, `fullName`, `membershipId`, `phoneNumber`, `whatsappNumber`, `email`, `gender`, `hometown`, `institution`, `programme`, `currentLevel`, `startDate`, `endDate`, `preferredCompany`, `acceptAlternative`, `hasExperience`, and `additionalComments`
- The web app to be redeployed after any script change