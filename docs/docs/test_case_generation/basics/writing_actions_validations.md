---
sidebar_position: 5
---

# Writing Actions and Validations

Each action or validation should be written as precisely as possible.

The more **detailed**, **contextual**, and **deterministic** the description is, the more suitable the test case becomes for **future automation**.

It is highly recommended to:

- Write steps in a clear and predictable manner
- Describe exact actions
- Specify expected results precisely
- Avoid ambiguous language
- Avoid implicit assumptions

The goal is to **minimize the possibility of AI misunderstanding the scenario.**

## Example 1
❌ **Bad Example (Ambiguous)**

**Action:**
Open the login page and try to sign in.

**Validation:**
Make sure the login works.

**Problems:**

- “Open the login page” does not specify the URL or navigation path.
- “Try to sign in” does not specify credentials.
- “Make sure the login works” is vague and not measurable.

✅ Good Example (Clear and Automation-Friendly)

**Action:**
1. Navigate to https://example.com/login
1. Enter "test_user@example.com" in the Email field
2. Enter "Password123!" in the Password field
3. Click the Login button.

**Validation:**
1. Verify the URL contains "/dashboard"
2. Verify the user profile icon is visible in the top-right corner

**Advantages:**
- Clear navigation path
- Explicit input values
- Deterministic validation conditions
- Easily translatable into automated tests


## Example 2

**❌ Bad example:**

**Action:**
Add a product to the cart

**Validation:**
Check that the product is added

**✅ Improved Version**

**Action:**
1. Click on "Products" from top menu
2. Click the “Add to Cart” button of “Wireless Mouse – Model X200” product
3. Click on "Cart" top menu item

**Validation:**
1. Verify the cart drop down menu opened
2. Verify the cart menu shows 1 number
3. Verify “Wireless Mouse – Model X200” appears in the cart dropdown