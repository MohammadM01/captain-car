# Captain Car Project

Welcome to the **Captain Car** project! This is a modern React application built with Vite and Tailwind CSS.

## 🚀 Getting Started Locally

If you want to run this project on your local machine:

1.  **Clone the repository**:
    ```bash
    git clone <your-repo-url>
    ```
2.  **Navigate to the Frontend directory**:
    The project code lives in the `Frontend` folder.
    ```bash
    cd Frontend
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    Open the link shown (usually `http://localhost:5173`) in your browser to see the app.

---

## 🌐 How to Deploy on Vercel

We use **Vercel** for hosting because it's fast, easy, and works perfectly with Vite/React.

### Step 1: Push to GitHub
Make sure your latest code is pushed to your GitHub repository.
*(Currently, your repo is up to date!)*

### Step 2: Import into Vercel
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard) and log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Find your `captain-car` repository in the list and click **"Import"**.

### Step 3: Configure Project (⚠️ IMPORTANT)
You will see a "Configure Project" screen. **You must change the Root Directory** because your app is inside the `Frontend` folder, not at the very top.

1.  Look for **"Root Directory"**.
2.  Click **"Edit"**.
3.  Select the **`Frontend`** folder and click **"Continue"**.
    *   *Why? Vercel needs to know where your `package.json` file is.*
4.  **Framework Preset**: It should automatically say `Vite`. If not, select "Vite".
5.  **Build Command** & **Output Directory**: Leave these as default (`npm run build` and `dist`).

### Step 4: Deploy
Click the big **"Deploy"** button.
Vercel will build your site and give you a live URL (e.g., `captain-car.vercel.app`) in a minute or two!

---

## 📊 Enable Vercel Analytics

To get insights into your visitors and page speeds ("vercel analyze"):

1.  Go to your project dashboard on Vercel.
2.  Click on the **"Analytics"** tab at the top.
3.  Click **"Enable"**.
4.  (Optional) For more detailed "Speed Insights" (Web Vitals), click the **"Speed Insights"** tab and enable that too. It helps you see how fast your site loads for real users.

---

## 🌍 Adding a Custom Domain (Future Step)

When you are ready to use your own domain (like `captaincar.com`):

1.  Buy your domain name from a provider (like GoDaddy, Namecheap, or Hostinger).
2.  Go to your Vercel Project Dashboard.
3.  Click **"Settings"** -> **"Domains"**.
4.  Enter your domain name (e.g., `www.yourdomain.com`) and click **"Add"**.
5.  Vercel will show you some **DNS Records** (A Record or CNAME).
6.  Log in to where you bought your domain, find "DNS Management", and add those records as shown by Vercel.
    *   *It usually takes 15 minutes to 24 hours to work globally.*
7.  Once matched, your site will automatically work on your new domain!

---
*Happy Coding! 🚗💨*
