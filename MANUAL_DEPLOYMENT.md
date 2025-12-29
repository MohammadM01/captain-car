# Manual Deployment Guide (Hostinger/cPanel)

I have prepared your project for manual hosting. I added a special configuration file (`.htaccess`) that allows your React app to work correctly when users refresh the page.

## Step 1: Locate Your Build Files
The "Build" is a folder containing the final, distinct version of your website.
*   **Location:** `z:\Projest 1\captain-car\Frontend\dist`

## Step 2: Upload to Hosting (hPanel / cPanel)
1.  **Log in** to your Hostinger (or other hosting) account.
2.  Open **File Manager**.
3.  Go to the **`public_html`** folder.
    *   *Note: If there are default files there (like `default.php`), you can delete them.*
4.  **Upload** everything **INSIDE** the `dist` folder to `public_html`.
    *   **Method A (Zip & Upload):**
        1.  Go to `Frontend` folder on your computer.
        2.  Right-click the `dist` folder -> "Send to" -> "Compressed (zipped) folder".
        3.  Upload this zip file to `public_html`.
        4.  Right-click the uploaded zip in File Manager and **Extract** it.
        5.  **Important:** Make sure the files are directly in `public_html`, not inside a subfolder like `public_html/dist`. If they are, move them out.
    *   **Method B (Drag & Drop):**
        1.  Open `Frontend/dist` on your computer.
        2.  Select ALL files (Ctrl+A).
        3.  Drag and drop them into the `public_html` window in your browser.

## Step 3: Verify
Visit **captaincarstudio.in**. Your site should work!
*   The `.htaccess` file I created handles the routing, so clicking links and refreshing pages will work without errors.
