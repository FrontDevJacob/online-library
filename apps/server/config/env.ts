type Env = {
   CLOUDINARY_NAME: string
   CLOUDINARY_API_KEY: string
   CLOUDINARY_API_SECRET: string

   DATABASE_URL: string

   JWT_KEY: string

   NODEMAILER_USERNAME: string

   MAILJET_USER: string
   MAILJET_PASSWORD: string

   PAYPAL_CLIENT_ID: string
   PAYPAL_CLIENT_SECRET: string

   PRIVATE_VAPID_KEY: string
   VITE_PUBLIC_VAPID_KEY: string

   VITE_FACEBOOK_APP_ID: string
   FACEBOOK_APP_SECRET: string

   STRIPE_SECRET_KEY: string

   SEQUELIZE_AUTO: 'true' | undefined
   SEED_BOOKS: 'true' | undefined
   SEED_USER: 'true' | undefined

   PORT: string | undefined

   NODE_ENV: 'development' | 'production'
}

export const {
   CLOUDINARY_NAME,
   CLOUDINARY_API_KEY,
   CLOUDINARY_API_SECRET,
   DATABASE_URL,
   JWT_KEY,
   NODEMAILER_USERNAME,
   MAILJET_USER,
   MAILJET_PASSWORD,
   PAYPAL_CLIENT_ID,
   PAYPAL_CLIENT_SECRET,
   PRIVATE_VAPID_KEY,
   VITE_PUBLIC_VAPID_KEY,
   VITE_FACEBOOK_APP_ID,
   FACEBOOK_APP_SECRET,
   STRIPE_SECRET_KEY,
   SEQUELIZE_AUTO,
   SEED_BOOKS,
   SEED_USER,
   PORT,
   NODE_ENV,
} = process.env as unknown as Env
