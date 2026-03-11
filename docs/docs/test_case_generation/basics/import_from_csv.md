---
sidebar_position: 3
---

# Import Test Cases from CSV

Ottotest allows you to quickly create multiple test cases by importing them from a **CSV file**.

Once you have selected a **section or sub-section** in your project's **Tests Repository tree view**, you can choose the option to **create test cases by importing a CSV file**.

This feature is especially useful when migrating test cases from other test management tools or when creating test cases in bulk.

:::tip[Recommended]
Note: CSV files can usually be exported from tools such as **TestRail, BrowserStack, Xray, Google Sheets**, or other test management platforms.
:::

You can download a [**sample CSV file**](\/files/sample_test_cases_to_import.csv) to understand the required format.

## Required Fields

When preparing your CSV file, several columns must be included for the import to work correctly. Common mandatory fields include:
- Test Case Title
- Steps
- Expected Results
- Section

Additional optional columns may also be included to provide more details, such as:
- Preconditions
- Priority
- Labels
- References
- Test Type
- ETC

:::tip[Recommended]
**Note**: There are no restrictions on column names; just ensure they are mapped to the appropriate fields in ottotest during the import flow.
:::

Once the CSV file is uploaded, Ottotest will automatically generate the corresponding test cases in the selected repository section.

