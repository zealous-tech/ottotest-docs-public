---
sidebar_position: 4
---

# Steps and Expected Results

The **Steps** and **Expected** Results information in the CSV file can be provided in **two formats**:

## 1. **Separate Columns**

Use a **“Steps”** column with each step on a **new line**.

Use a **“Expected”** column to define the corresponding **validation steps or expected results** for each step.

## 2. **Combined Column**

Use a single column called **“Steps”** to define both the step and its expected result in the same cell.

NOTE: In this case, **"Expected" column will be ignored.**

Include keywords to separate steps and expected results.

**Example:**

```bash
Step Description:
Login to platform
Expected Result:
Verify that Dashboard page is opened

Step Description:
Click on Settings icon
Expected Result:
Verify that user redirected to Settings page
```

This format allows you to define multiple steps and their expected outcomes in a single cell, making CSV import flexible and compatible with various test case sources.

<img src="/img/csv.png" width="800" alt="Test automation execution results" />


