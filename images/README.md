### Documentation for `KS_Checkout_Course_Display` Class

#### Overview
The `KS_Checkout_Course_Display` class is designed to enhance the WooCommerce checkout and order email functionalities by adding custom course links. This class is part of the WordPress theme or plugin and is included in the `functions.php` file. It is defined in the file `class-ks-checkout-course-display.php`.

#### Class Methods

- **`__construct()`**
    - Initializes the class and hooks into WooCommerce actions.
    - Hooks:
        - `woocommerce_order_details_after_order_table`: Displays course links on the order details page.
        - `woocommerce_email_after_order_table`: Includes course links in the order confirmation email.

- **`checkout_page_add_course_links($order)`**
    - Outputs HTML for course links on the order details page after checkout.
    - Parameters:
        - `$order`: The WooCommerce order object.

- **`order_email_add_course_links($order, $sent_to_admin, $plain_text, $email)`**
    - Generates HTML for course links to be included in order emails.
    - Parameters:
        - `$order`: The WooCommerce order object.
        - `$sent_to_admin`: Boolean indicating if the email is sent to the admin.
        - `$plain_text`: Boolean indicating if the email format is plain text.
        - `$email`: Email object.

- **`generate_product_and_course_rows_html_string($product_ids, $padding_css = null, $border_css = null)`**
    - Creates HTML string for all product and course table rows.
    - Parameters:
        - `$product_ids`: Array of product IDs.
        - `$padding_css`: Optional CSS for padding.
        - `$border_css`: Optional CSS for border styling.

- **`get_product_and_course_rows($product, $course_table_html_string = null, $padding_css = null, $border_css = null)`**
    - Generates HTML for an individual row of a product and its correlating course.
    - Parameters:
        - `$product`: The WooCommerce product object.
        - `$course_table_html_string`: HTML string of the course table.
        - `$padding_css`: Optional CSS for padding.
        - `$border_css`: Optional CSS for border styling.

- **`get_course_table_html_string($course_ids = null)`**
    - Generates a table with rows of links to courses.
    - Parameters:
        - `$course_ids`: Array of course IDs.

- **`get_course_html_row($course_id, $border_css = null)`**
    - Creates an HTML string for an individual course row.
    - Parameters:
        - `$course_id`: Course ID.
        - `$border_css`: Optional CSS for border styling.

- **`get_product_ids(\WC_Order $order)`**
    - Retrieves an array of product IDs associated with an order.
    - Parameters:
        - `$order`: The WooCommerce order object.

- **`get_my_account_button()`**
    - Generates HTML for the "My Account" button.

- **`get_view_all_courses_button()`**
    - Generates HTML for the "View All Courses" button.

- **`get_course_and_course_post_ids($course_id)`**
    - Executes a SQL query to get course and course post IDs.
    - Parameters:
        - `$course_id`: Course ID.

- **`get_course_ids($product_id = null)`**
    - Executes a SQL query to get course IDs associated with a product.
    - Parameters:
        - `$product_id`: Product ID.

- **`get_table_header_styles($border_css = null)`**
    - Provides basic style attributes for table headers.
    - Parameters:
        - `$border_css`: Optional CSS for border styling.

#### Usage
Instantiate the `KS_Checkout_Course_Display` class to enable its functionality. This is typically done at the end of the `class-ks-checkout-course-display.php` file:

```php
$ksCheckoutCourseDisplayTables = new KS_Checkout_Course_Display();
```

This class enhances the user experience by providing direct links to courses associated with products in their WooCommerce orders, both on the order details page and in the order confirmation email.
