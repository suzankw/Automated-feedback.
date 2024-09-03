function sendFeedbackEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startRow = 2; // Start after header row
  var numRows = sheet.getLastRow() - 1; // Number of rows with data

  var dataRange = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn());
  var data = dataRange.getValues();

  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var emailAddress = row[3]; // Assuming Email is in column C (index 2)
    var studentName = row[2]; // Assuming Name is in column B (index 1)
    var category = row[7]; // Assuming Grade is in column D (index 3)
    var feedback = row[8]; // Assuming Feedback is in column E (index 4)

    var subject = "Power learn project Hackathon feedback";
    var message = "Dear " + studentName + ",\n\n" +
                  "Here is the feedback for your recent hackathon project that was held on 29th to 31st August 2024:\n\n" +
                  "Category: " + category + "\n\n" +
                  "Feedback: " + feedback + "\n\n" +
                  "Best regards,\nYour Instructor";

    MailApp.sendEmail(emailAddress, subject, message);
  }
}
