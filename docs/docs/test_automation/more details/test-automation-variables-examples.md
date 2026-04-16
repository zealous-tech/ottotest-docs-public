---
sidebar_position: 6
---

# Variables usage examples in Test Automation

## Example 1 — Using Runtime Variables Extracted from API

**Scenario:**  
As a precondition, the user creates a **test user via API**, extracts the **user ID** from the response, logs in with the user, verifies that the **User ID is displayed correctly in the UI**.

This scenario demonstrates how **runtime variables**, **environment variables**, and **profile variables** can be used together.

---
**Preconditions:**
```
1. Create User Request: /v2/user (Verify response status code is 201) 
2. Extract response from request 
3. Store 'user_id' field value in ${user_id} 
```
See the [API requests](/docs/test_automation/more%20details/test-automation-api-requests) guide.

**Actions:**
```
1. Navigate to ${env.base_url}/login 
2. Enter ${prf.user_email} in email field 
3. Enter ${prf.password} in password field 
```
**Validations:**
```
1. Verify that top right user badge shows "User ID: ${user_id}"
```

## Example 2 — filter network request from browser network logs and extract data to validate in UI

**Scenario:**  
The user navigates to a page where a **table of data is displayed**. During the page load, the application sends an **API request** to retrieve the data that populates the table.  
The test needs to capture the API response and validate that the **data displayed in the UI table matches the data returned by the API**.

This example demonstrates how **runtime variables** can be used to capture values from **network responses** and validate them against UI elements.

**Actions:**
```
1. Navigate to ${env.base_url}/data_page
2. Exract response of the reqeust from network logs which url contains "/airlines?scope=today"
3. Store response data's "airlines_data" field count into ${airlines_count} variable
```
**Validations:**
```
1. Verify that ${airlines_count} equal to "Today's Flights" table's data count
```


